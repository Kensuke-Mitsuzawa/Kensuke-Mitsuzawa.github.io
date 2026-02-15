<template>
<v-app>
<vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
<HeaderBar />
<v-main>
  <v-container class="py-10">

    <h1 class="text-h3 font-weight-bold mb-6">LLM Compression: A Structural Integrity Audit</h1>

    <v-card color="blue-grey lighten-5" elevation="0" class="pa-6 mb-10 rounded-lg border-left-blue">
      <v-row>
        <v-col cols="12" md="6">
          <h3 class="text-h5 font-weight-bold blue-grey--text text--darken-3 mb-2">Practical Problem</h3>
          <p class="mb-0">
            Deploying LLMs like Qwen2.5 in production is expensive.
            While compression (Quantization/LoRA) reduces costs, it often creates a "black box" risk where the model's internal reasoning shifts in ways that standard benchmarks cannot detect.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-h5 font-weight-bold blue-grey--text text--darken-3 mb-2">The Solution</h3>
          <p class="mb-0">
            This article demonstrates a <strong>Structural Integrity Audit</strong>.
            By using MMD (Distribution Testing) and CKA (Feature Alignment),
            we move beyond simple accuracy scores to prove that a compressed model remains architecturally consistent and safe for deployment.
          </p>
        </v-col>
      </v-row>
    </v-card>

    <v-divider class="mb-10"></v-divider>

    <h2 class="text-h4 font-weight-bold mb-4">Problem Definition</h2>
    <p class="text-body-1">
      An \(\text{LLM}_{\rm original}\) is transformed into a lightweight model \(\text{LLM}_{\rm compressed}\) via model compression (e.g., quantization or LoRA fine-tuning).
      The research interest lies in understanding exactly how these two models differ internally.
      This article introduces two mathematical comparison tools applied to hidden-state layers:
    </p>
    <ul class="text-body-1 mb-6">
      <li class="mb-2"><strong>MMD-Diff:</strong> Identifies specific layers that are notably influenced by the compression.</li>
      <li><strong>CKA-Diff:</strong> Visualizes the dependency structures of hidden states across layers.</li>
    </ul>

    <h3 class="text-h5 font-weight-bold mb-4 mt-8">Mathematical Formulation</h3>
    <p class="text-body-1">
      Suppose our dataset is \(\mathcal{X} = \{x_1, x_2, ..., x_n\}\). Let \(\ell\) represent the index of a hidden-state layer, where \(\ell \in \{1, 2, ..., L\}\).
    </p>

    <v-card outlined class="mb-8 pa-6">
      <h4 class="text-h6 font-weight-bold mb-3">1. Maximum Mean Discrepancy (MMD-Diff)</h4>
      <p>
        MMD is a kernel-based statistical test used to determine if two samples are drawn from the same distribution (Gretton et al., 2012).
        Unlike simple mean-comparison, MMD evaluates the entire "shape" of the high-dimensional hidden states.
      </p>
      <p>
        It provides a p-value \(p^{\ell}\) quantifying the probability of the null-hypothesis \(H_0: \text{LLM}_{\rm original}^{\ell} = \text{LLM}_{\rm compressed}^{\ell}\),
        and an MMD-estimate quantifying the distance between the two populations, \(A_{\rm original}\) and \(A_{\rm compressed}\).
      </p>
      <div class="grey lighten-4 pa-4 rounded text-center mb-4">
        \[\widehat{\text{MMD}}_k(A_{\rm original}^{\ell}, A_{\rm compressed}^{\ell}) \in \mathbb{R}\]
      </div>
      <p class="text-body-2 mb-0">
        The conditioned population is \(A^{\ell} := \{ h_{1}^{\ell}, ..., h_{n}^{\ell} \}\), where \(h_n\) is the hidden-state vector of example \(n\) at layer \(\ell\).
        The kernel function \(k(h_{\rm original_{n}}^{\ell}, h_{\rm compressed_{n}}^{\ell}) \in \mathbb{R}\)
        uses a Gaussian kernel with length-scale calculated via dimension-wise median-heuristic (Mitsuzawa et al., 2023) applied to Z-normalized vectors.
      </p>
      <p class="text-body-2 mt-3 mb-0">
        Two-sample testing is performed via permutation: \(p^{\ell} = \text{Permutation}(A_{\rm original}^{\ell}, A_{\rm compressed}^{\ell}; \widehat{\text{MMD}}_k)\).
      </p>
    </v-card>

    <v-card outlined class="mb-8 pa-6">
      <h4 class="text-h6 font-weight-bold mb-3">2. Centered Kernel Alignment (CKA-Diff)</h4>
      <p>
        CKA quantifies a dependency degree (\([0.0, 1.0]\)) between two population sets \(A^{\ell}, A^{\ell^{\prime}}\).
        CKA is a normalized version of the Hilbert-Schmidt Independence Criterion (HSIC).
        Let \(K\) and \(L\) be the \(n \times n\) kernel matrices for \(A^{\ell}\) and \(A^{\ell^{\prime}}\). Let \(H = I - \frac{1}{n}\mathbf{1}\mathbf{1}^T\) be the centering matrix,
        resulting in \(\widetilde{K} = HKH\) and \(\widetilde{L} = HLH\).
      </p>
      <div class="grey lighten-4 pa-4 rounded text-center mb-4 overflow-x-auto">
        \[HSIC(A^{\ell}, A^{\ell^{\prime}}) = \frac{1}{(n-1)^2} \text{tr}(\widetilde{K}\widetilde{L})\]
        <br>
        \[CKA(A^{\ell}, A^{\ell^{\prime}}) = \frac{HSIC(A^{\ell}, A^{\ell^{\prime}})}{\sqrt{HSIC(A^{\ell}, A^{\ell}) HSIC(A^{\ell^{\prime}}, A^{\ell^{\prime}})}}\]
      </div>
    </v-card>

    <v-divider class="my-10"></v-divider>

    <h2 class="text-h4 font-weight-bold mb-6">Case Study: Qwen2.5 Quantization Impact</h2>

    <v-row>
      <v-col cols="12" md="6">
        <h3 class="text-h5 font-weight-bold mb-3">Task & Dataset</h3>
        <p>
          The task is a classification problem identifying the English proficiency level of documents based on the CEFR-scale (A1 to C2).
          The dataset used is <code>UniversalCEFR/elg_cefr_en</code>. The LLM is prompted to act as an evaluator and return the level in an XML structure.
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <h3 class="text-h5 font-weight-bold mb-3">Configurations</h3>
        <ul>
          <li><strong>Base Model:</strong> <code>Qwen/Qwen2.5-1.5B-Instruct</code></li>
          <li><strong>original-Qwen:</strong> The plain, uncompressed base model.</li>
          <li><strong>4-bit-Qwen:</strong> Quantized using <code>bitsandbytes</code> (nf4 type, float16 compute dtype, double quant enabled).</li>
          <li><strong>Hardware:</strong> Radeon RX 6000 GPU.</li>
        </ul>
      </v-col>
    </v-row>

    <h3 class="text-h5 font-weight-bold mt-8 mb-4">Evaluation Metrics</h3>
    <v-row>
      <v-col cols="12" md="6">
        <v-card outlined class="pa-4 h-100">
          <strong>Velocity:</strong>
          <ul>
            <li>Time-to-first-token (TTFT)</li>
            <li>Tokens-per-second (TPS)</li>
          </ul>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card outlined class="pa-4 h-100">
          <strong>Utility:</strong>
          <ul>
            <li><strong>Exact Accuracy:</strong> Percentage of exact CEFR matches.</li>
            <li><strong>Relaxed Accuracy:</strong> Percentage of predictions within \(\pm 1\) adjacent CEFR level.</li>
          </ul>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="text-h4 font-weight-bold mt-12 mb-6">Results: Original vs. 4-bit-Qwen</h2>

    <v-card outlined class="mb-8">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">LLM Configuration</th>
              <th class="text-left">Avg TTFT (s)</th>
              <th class="text-left">Avg TPS</th>
              <th class="text-left">Valid Label Ratio</th>
              <th class="text-left">Exact Accuracy</th>
              <th class="text-left">Relaxed Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>original-Qwen</code></td>
              <td>0.001 (0.0001)</td>
              <td>55.832 (1.384)</td>
              <td>0.786</td>
              <td>0.273</td>
              <td>0.636</td>
            </tr>
            <tr class="green lighten-5">
              <td><strong><code>4-bit-Qwen</code></strong></td>
              <td><strong>0.001 (0.002)</strong></td>
              <td><strong>93.342 (9.459)</strong></td>
              <td>0.667</td>
              <td><strong>0.441</strong></td>
              <td><strong>0.848</strong></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-alert type="info" text color="blue darken-2" class="mb-8">
      <strong>Key Insight:</strong> The 4-bit model performed <strong>1.6x faster</strong> and yielded significantly <strong>better CEFR-scale label predictions</strong> (1.6x exact, 1.3x relaxed).
      Although the quantized model generated fewer strictly valid XML labels (0.667 vs 0.786), the ones it did generate were vastly more accurate.
      Quantization appears to act as a noise filter, removing low-confidence predictions.
    </v-alert>

    <h3 class="text-h5 font-weight-bold mb-4">Visualizing the Structural Shift</h3>

    <v-row class="mb-8">
      <v-col cols="12" md="6">
        <h4 class="text-h6">CKA-Diff Analysis</h4>
        <p>
          The CKA heatmaps explain the improved prediction quality.
          <br><br>
          <strong>Population original-Qwen (X):</strong> Shows high similarity (yellow/light green) throughout the matrix, carrying early-layer representations heavily to the output.
          <br><br>
          <strong>Population 4-bit-Qwen (Y):</strong> Notice the <strong>"Darkening"</strong> in the bottom-left region.
          The influence of layers 0–7 decays much faster.
          Quantization forced the model to rely more on transformed mid-layer representations rather than raw early features, benefiting the CEFR task.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <v-img src="/portfolio/llm-analysis-example-mmd-and-cka/cka-case-original-vs-4bit.png" alt="CKA Heatmaps" class="rounded-lg elevation-2"></v-img>
        <p class="caption mt-2">CKA-diff analysis. X represents original-Qwen, Y represents 4-bit Qwen.</p>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col cols="12" md="6" class="text-center">
        <v-img src="/portfolio/llm-analysis-example-mmd-and-cka/mmd-case-original-vs-4bit.png" alt="MMD Line Plot" class="rounded-lg elevation-2"></v-img>
        <p class="caption mt-2">MMD distance and p-values across layers.</p>
      </v-col>
      <v-col cols="12" md="6">
        <h4 class="text-h6">MMD-Diff Analysis</h4>
        <p>
          The MMD-Diff provides statistical validation for the CKA visual findings:
        </p>
        <ul>
          <li class="mb-2"><strong>Layers 0–4 are stable:</strong> The \(p\)-value remains above the 0.05 threshold; initial processing layers are statistically indistinguishable.</li>
          <li class="mb-2"><strong>The Pivot (Layer 11):</strong> While \(p\)-values drop below significance at layer 5, the MMD Statistic remains low until the 11th layer.</li>
          <li><strong>The Divergence:</strong> From the 11th layer onwards, the MMD Statistic trends sharply upward, peaking near the 24th layer.
            The most significant structural changes occur in the "decision-making" half of the model.</li>
        </ul>
      </v-col>
    </v-row>

    <v-divider class="my-8"></v-divider>

    <h3 class="text-h6 font-weight-bold mb-3">References</h3>
    <ul class="text-body-2 grey--text text--darken-2">
      <li>Gretton, Arthur, et al. "A kernel two-sample test." <em>The Journal of Machine Learning Research</em> 13.1 (2012): 723-773.</li>
      <li>Mitsuzawa, Kensuke, et al. "Variable selection in maximum mean discrepancy for interpretable distribution comparison." <em>arXiv preprint arXiv:2311.01537</em> (2023).</li>
    </ul>

  </v-container>
  </v-main>
</v-app>
</template>

<script>
/* eslint-disable quotes */
import HeaderBar from '@/views/HeaderBar';

export default {
  name: "LlmAnalysisExampleMmdAndCka",
  components: {
    HeaderBar,
  },
  // This function runs once the page is loaded in the browser
  mounted() {
    this.renderMath();
  },
  // If your data changes later, this ensures math is re-rendered
  updated() {
    this.renderMath();
  },
  methods: {
    renderMath() {
      // Check if MathJax is loaded (v3/v4 syntax)
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      } else if (window.MathJax && window.MathJax.Hub) {
        // eslint-disable-next-line new-cap
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
      }
    },
  },
};
</script>


<style scoped>
.border-left-blue {
  border-left: 6px solid #1976D2 !important;
}
</style>
