<template>
    <v-app>
        <vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
        <HeaderBar />
        <v-main>
            <v-container class="py-12">
                <div class="portfolio-report max-w-5xl mx-auto pa-6 text-grey-darken-4 font-sans">

                    <header class="mb-10 border-b pb-6">
                        <h1 class="text-h4 font-weight-bold mb-2 text-blue-darken-4">
                            AI-Driven Surrogate Modeling for Water Network Resilience
                        </h1>
                        <p class="text-h6 text-grey-darken-1">
                            Evaluating TimesFM Sensitivity & Structural Anomaly Propagation using CKA and DTW
                        </p>
                    </header>

                    <v-card color="blue-grey lighten-5" elevation="0" class="pa-6 mb-10 rounded-lg border-left-blue">
                        <v-row>
                            <v-col cols="12" md="6">
                                <h3 class="text-h5 font-weight-bold blue-grey--text text--darken-3 mb-2">Practical
                                    Problem</h3>
                                <v-alert class="mb-0">Computational Bottleneck:
                                    Traditional physics-based water network simulations are too slow and expensive
                                    for real-time monitoring or large-scale "what-if" scenarios.</v-alert>
                                <v-alert class="mb-0">The "Noise" Challenge: In a system with 88 variables (sensors),
                                    it is difficult to distinguish between harmless localized sensor noise and the start of a systemic failure or leak.</v-alert>
                                <v-alert class="mb-0">Blind Spots: Decision-makers currently lack a data-driven way
                                    to identify which sensors are the most "unreliable" or sensitive to environmental interference.</v-alert>
                            </v-col>
                            <v-col cols="12" md="6">
                                <h3 class="text-h5 font-weight-bold blue-grey--text text--darken-3 mb-2">The Solution
                                </h3>
                                <v-alert class="mb-0">High-Speed Simulation: We replace slow physical solvers with a TimesFM 500m foundation model,
                                    acting as a high-fidelity surrogate that approximates network dynamics in milliseconds.</v-alert>
                                <v-alert class="mb-0">Stability Stress-Testing: By intentionally introducing "noise" into the AI (Perturbation Analysis),
                                    we can observe how the system reacts. If a node’s prediction "swings" wildly (High DTW Variance), we flag it as a critical vulnerability.</v-alert>
                                <v-alert class="mb-0">Deep Structural Insight: We use CKA/HSIC analysis to look inside the AI’s "brain"
                                    and confirm if the noise is decaying naturally or if the network topology is causing errors to compound.</v-alert>
                            </v-col>
                        </v-row>
                    </v-card>

                    <v-divider class="mb-10"></v-divider>

                    <section class="mb-10 text-body-1">
                        <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-3">Strategic Problem: Network
                            Vulnerability</h2>
                        <p class="mb-4">
                            In complex spatio-temporal environments, identifying which variables (sensors or detectors)
                            are most sensitive to systemic noise is critical for risk management and infrastructure
                            planning.
                        </p>
                        <p class="mb-4">
                            <strong>Real-World Case:</strong> Water demand prediction across a municipal network.
                            Traditional physics-based simulations are computationally expensive. Prediction quality is
                            influenced by:
                        </p>
                        <ul class="mb-6 pl-6">
                            <li class="mb-1"><strong>Long-term seasonal factors:</strong> Macro-shifts between summer
                                and winter.</li>
                            <li class="mb-1"><strong>Short-term localized factors:</strong> Weekend drops in office area
                                consumption.</li>
                        </ul>
                        <p class="mb-4">
                            <strong>The AI Solution:</strong> We utilize <strong>TimesFM 500m</strong> as a surrogate
                            model to bypass physical simulation limits. By introducing random perturbations (noise) at
                            $t=0$, we quantify the stability of every sensor in the grid by comparing future predicted
                            states.
                        </p>
                    </section>

                    <section id="math" class="mb-10">
                        <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-3">Mathematical Engine</h2>

                        <v-card outlined class="mb-8 pa-6">
                            <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-3">TimesFM Prediction Flow & Perturbation Math</h2>
                                <p class="mb-4">
                                    For an observation point $s \in \{1, ..., S\}$,
                                    $x^s \in \mathbb{R}^{C}$: The input time-series (context),
                                    and $y^s \in \mathbb{R}^{T}$ : The baseline predicted time-series.
                                </p>
                                    <p class="mb-4">
                                        We generate a baseline prediction $y^{s} \in \mathbb{R}^{T}$ and a perturbed set
                                        $\{\hat{y}^{s}_1, ..., \hat{y}^{s}_n\}$, where $s$ is the sensor index and $t \in \{1,...,T\}$
                                        is the time-step, and $n$ is the number of perturbed samples.
                                        The core logic for the perturbed samples follows:
                                    </p>
                                    <v-sheet class="math-sheet-container">
                                        $$y_{i} = f_{\text{TimesFM}}(x + \eta^{(i)})$$
                                    </v-sheet>

                                                                        <p class="mb-4">
                                        Static graph properties ground the AI in physical reality. Using
                                        <code>xreg_mode="xreg + timesfm"</code>, the final prediction $\hat{y}_t$ is
                                        computed as:
                                    </p>
                                    <v-sheet
                                        class="math-sheet-container">
                                        $$\hat{y}_t = f_{\text{TimesFM}}(X_{1:t}) + \sum_{i} w_i \phi(z_i)$$
                                    </v-sheet>
                                    <p class="mb-4">
                                        , where:
                                        $f_{\text{TimesFM}}(X_{1:t})$ is the zero-shot, univariate prediction from the Transformer.
                                        $\phi(z_i)$ is the one-hot encoded vector of your <code>"centrality_tier"</code>.
                                        $w_i$ are weights learned via a Ridge Regression performed on the fly (using the JAX `xreg_lib` backend).
                                    </p>
                        </v-card>

                        <v-card outlined class="mb-8 pa-6">
                            <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-3">Stability Score by DTW Barycenter Averaging (DBA)</h2>
                            <p class="mb-4">
                                The stability score is represented by "Barycenter" (the average time-series shape) using DTW Barycenter Averaging (DBA).

                                <v-sheet class="math-sheet-container">
                                    $$ \text{AVG-DTW}^{s} = \frac{1}{n} \sum_{i=1}^{n} \text{DTW}(\hat{y}_i^{s}, y^{s}) \in \mathbb{R} $$
                                </v-sheet>
                                <a href="https://tslearn.readthedocs.io/en/stable/gen_modules/metrics/tslearn.metrics.dtw_path_from_metric.html" target="_blank">Dynamic Time Warping (DTW)</a>
                                is a defact-standard distance metric of two time-series sequences.
                                This "Stability Score" indicates the robustness, stability of the prediction regardless of the noise signal.
                            </p>
                        </v-card>

                        <v-card outlined class="mb-8 pa-6">
                            <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-3">Centered Kernel Alignment (CKA)</h2>
                                    <p class="mb-4">
                                        CKA (Kornblith, S., et al., 2019) measures structural similarity between internal hidden states of baseline
                                        and perturbed predictions . It is a normalized Hilbert-Schmidt Independence
                                        Criterion (HSIC).
                                    </p>
                                    <p>CKA can robustly represent a degree of dependencies between two high dimensional vectors.
                                        In this study case, $y \in \mathbb{R}^{88}$.
                                    </p>
                                    <p class="mb-4">$\mathbf{Y} = \{ y, \hat{y}_1, ..., \hat{y}_n \}$ is a set of baseline prediction sequence and perturbed prediction sequences.</p>
                                    <v-sheet
                                        class="math-sheet-container">
                                        $$\text{CKA}(\mathbf{Y}_{t=0}, \mathbf{Y}_{t'}) =
                                        \frac{HSIC( \mathbf{Y}_{t=0}, \mathbf{Y}_{t'} )}
                                        {\sqrt{HSIC( \mathbf{Y}_{t=0}, \mathbf{Y}_{t=0} ) HSIC( \mathbf{Y}_{t'}, \mathbf{Y}_{t'} )}}$$
                                    </v-sheet>
                                    CKA measures a degree of dependency between two sets of vectors $\mathbf{Y}_{t=0}$ and $\mathbf{Y}_{t'}$.
                                    A higher CKA value indicates a high degree of dependency.
                        </v-card>
                    </section>

                    <section id="analysis-result">
                        <section id="cka-score" class="mb-10">
                            <h2 class="text-h5 font-weight-bold mb-6 text-blue-darken-3">CKA Analysis</h2>
                            <v-card variant="outlined" class="mb-8 p-4 bg-grey-lighten-5">
                                <v-img src="portfolio/timesfm-water-network-prediction/cka_time_series_stability.png"
                                    alt="CKA values between t=0 and following time-steps" max-width="800"
                                    class="mx-auto rounded shadow-sm"></v-img>
                                <div class="text-caption text-grey italic mb-2 text-center">Figure 1: CKA values between
                                    t=0 and following time-steps.
                                    $T=288$ is the prediction of one day.
                                    one time step corresponds to 5 minutes in the real-world.
                                </div>
                            <div class="insight-sheet-container">
                                <h3>ℹ️ Key Finding and insights</h3>

                                <h4>📈 Observation</h4>
                                <p>CKA sequence indicates <strong>sudden decline at $t'=25$</strong>, <strong>up-down</strong> at $t'=90$ and $t'=170$.</p>
                                <h4>💭 Assumption</h4>
                                <p>Under an assumption that the time-series follows a stable system,
                                    the influence of a perturbation at $t=0$ should dissipate over time (nearly lineary descreasing).</p>
                                <h4>🕵️ Possible reasons</h4>
                                <p>Structural Dependency: These spikes indicate that the model’s internal states
                                    at those future moments have suddenly become "structurally similar" to the state at $t=0$ again.</p>
                                <p>Anomaly or Recurrence: the sudden decline or up-down suggest a non-Markovian dependency.
                                    It may imply the model has captured a cyclic event (like a daily pump cycle or periodic pressure surge) that "recalls" the conditions seen at $t=0$.</p>
                                <p>Abnormal Events: If these spikes do not align with known network cycles, they represent abnormal propagation,
                                    where the initial noise is not decaying but is instead being "echoed" or amplified by the transformer's attention mechanism.</p>
                            </div>
                            </v-card>
                        </section>

                    <section id="dtw-stability" class="mb-10">
                        <h2 class="text-h5 font-weight-bold mb-6 text-blue-darken-3">Node Sensitivity Ranking</h2>
                        <p class="mb-6 text-body-1">
                            Nodes are ranked by their DTW Stability Score.
                            Click a card to expand the
                            <strong>Spatiotemporal Analysis</strong> (Location, Forecast, and DTW Distribution).
                        </p>

                        <v-expansion-panels v-model="panelRanking" class="elevation-1">
                            <v-expansion-panel class="border-b">
                                <v-expansion-panel-header class="pa-4">
                                    <v-row align="center" no-gutters>
                                        <v-col cols="3" class="text-right">
                                            <span class="text-overline text-grey-darken-1 mr-2">Avg DTW Score:</span>
                                            <span class="text-h6 font-weight-bold">252.32 <span
                                                    class="text-caption text-grey">±78.5</span>
                                            </span>
                                        </v-col>
                                        <v-col cols="4" class="">
                                            <v-img
                                                src="portfolio/timesfm-water-network-prediction/dtw_01/network_location.png"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="bg-grey-lighten-5 pa-4">
                                    <v-row justify="center">
                                        <v-col cols="12" md="10">
                                            <div class="mb-6">
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_01/network_location.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                                <div class="text-caption text-grey italic mb-2 text-center">
                                                    Fig: Network Location Topological Centrality</div>
                                            </div>
                                            <div class="mb-6">
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_01/dtw_forecast.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                                <div class="text-caption text-grey italic mb-2 text-center">
                                                    Fig: Forecast Deviation (Baseline vs. Perturbed)</div>
                                            </div>
                                            <div class="mb-2">
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_01/dtw_hist.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                                <div class="text-caption text-grey italic mb-2 text-center">
                                                    Fig: Error Distribution (DTW Variance)</div>

                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <v-expansion-panels v-model="panelRanking" class="elevation-1">
                            <v-expansion-panel class="border-b">
                                <v-expansion-panel-header class="pa-4">
                                    <v-row align="center" no-gutters>
                                        <v-col cols="3" class="text-right">
                                            <span class="text-overline text-grey-darken-1 mr-2">Avg DTW Score:</span>
                                            <span class="text-h6 font-weight-bold">84.269 <span
                                                    class="text-caption text-grey">±37.143</span>
                                            </span>
                                        </v-col>
                                        <v-col cols="4" class="">
                                            <v-img
                                                src="portfolio/timesfm-water-network-prediction/dtw_02/network_location.png"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="bg-grey-lighten-5 pa-4">
                                    <v-row justify="center">
                                        <v-col cols="12" md="10">
                                            <div class="mb-6">
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_02/network_location.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                                <div class="text-caption text-grey italic mb-2 text-center">
                                                    Fig: Network Location Topological Centrality</div>
                                            </div>
                                            <div class="mb-6">
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_02/dtw_forecast.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                                <div class="text-caption text-grey italic mb-2 text-center">
                                                    Fig: Forecast Deviation (Baseline vs. Perturbed)</div>
                                            </div>
                                            <div class="mb-2">
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_02/dtw_hist.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                                <div class="text-caption text-grey italic mb-2 text-center">
                                                    Fig: Error Distribution (DTW Variance)</div>

                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>


                        <v-expansion-panels v-model="panelRanking" class="elevation-1">
                            <v-expansion-panel class="border-b">
                                <v-expansion-panel-header class="pa-4">
                                    <v-row align="center" no-gutters>
                                        <v-col cols="3" class="text-right">
                                            <span class="text-overline text-grey-darken-1 mr-2">Avg DTW Score:</span>
                                            <span class="text-h6 font-weight-bold">97.368 <span
                                                    class="text-caption text-grey">±21.688</span>
                                            </span>
                                        </v-col>
                                        <v-col cols="4" class="">
                                            <v-img
                                                src="portfolio/timesfm-water-network-prediction/dtw_03/network_location.png"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="bg-grey-lighten-5 pa-4">
                                    <v-row justify="center">
                                        <v-col cols="12" md="10">
                                            <div class="mb-6">
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_03/network_location.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                                <div class="text-caption text-grey italic mb-2 text-center">
                                                    Fig: Network Location Topological Centrality</div>
                                            </div>
                                            <div class="mb-6">
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_03/dtw_forecast.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                                <div class="text-caption text-grey italic mb-2 text-center">
                                                    Fig: Forecast Deviation (Baseline vs. Perturbed)</div>
                                            </div>
                                            <div class="mb-2">
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_03/dtw_hist.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                                <div class="text-caption text-grey italic mb-2 text-center">
                                                    Fig: Error Distribution (DTW Variance)</div>

                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </section>
                    </section>


<section id="configuration" class="mt-12">
  <v-card variant="outlined" class="pa-0 grey lighten-5">
    <v-expansion-panels flat>
      <v-expansion-panel class="grey lighten-5">
        <v-expansion-panel-header class="font-weight-bold grey--text text--darken-2">
          <v-icon left small>mdi-cog</v-icon>
          Execution Configuration & Feature Definitions
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-divider class="mb-4"></v-divider>

          <v-row>
            <v-col cols="12" md="6">
              <h4 class="text-subtitle-1 font-weight-bold mb-2">Prediction Configuration</h4>
              <p class="text-body-2 mb-4">
                <strong>Dataset:</strong> <code>BattLeDIM</code> (Vrachimis, S. G. et al., 2020).
                Annual water demand observations from a simulated municipal network.
              </p>
              <p class="text-body-2 mb-2">
                <strong>Model:</strong> <code>google/timesfm-2.0-500m-jax</code>
              </p>
              <v-sheet class="grey darken-4 pa-3 rounded font-mono text-caption white--text mb-4">
                <code>
[times_fm_parameters]
backend = "gpu"
per_core_batch_size = 32
num_layers = 50
model_dims = 1280
horizon_len = 288    # 24h horizon (5-min steps)
context_len = 17280  # 60-day context window
input_patch_len = 32
output_patch_len = 128
use_positional_embedding = false
</code>
              </v-sheet>
              <p class="text-caption grey--text text--darken-1">
                * Noise Simulation: $N=100$ iterations of Gaussian perturbation at $t=0$.
              </p>
            </v-col>

            <v-col cols="12" md="6">
              <h4 class="text-subtitle-1 font-weight-bold mb-2">Graph Covariates</h4>
              <v-simple-table dense class="border rounded">
                <template v-slot:default>
                  <thead>
                    <tr class="grey lighten-3">
                      <th class="text-left">Feature</th>
                      <th class="text-left">Water Network Context</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-weight-bold py-2 text-caption">Degree</td>
                      <td class="text-caption">Complexity of pipe junctions (Hubs vs. Lines).</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold py-2 text-caption">Betweenness</td>
                      <td class="text-caption">Identifies "Main Arteries" critical to town pressure.</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold py-2 text-caption">Closeness</td>
                      <td class="text-caption">Global distribution impact of the specific node.</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold py-2 text-caption">PageRank</td>
                      <td class="text-caption">Importance relative to Reservoir proximity.</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold py-2 text-caption">Coordinate</td>
                      <td class="text-caption">Geospatial node location (float, float).</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</section>

                    <footer class="mt-12 pt-6 border-t border-grey-lighten-2 text-body-2 text-grey-darken-2">
                        <h3 class="font-weight-bold text-grey-darken-4 mb-3">References</h3>
                        <ul class="list-none pl-0">
                            <li class="mb-2">[1] Das, A., et al. (2024). <em>A decoder-only foundation model for
                                    time-series forecasting.</em> ICML.</li>
                            <li class="mb-2">[2] Vrachimis, S. G., et al. (2020). <em>Dataset of BattLeDIM.</em> Zenodo.
                            </li>
                            <li class="mb-2">[3] Kornblith, S., et al. (2019). <em>Similarity of Neural Network
                                    Representations Revisited.</em> ICML.</li>
                            <li class="mb-2">[4] H. Sakoe, S. Chiba,
                                "Dynamic programming algorithm optimization for spoken word recognition,"
                                IEEE Transactions on Acoustics, Speech and Signal Processing, vol. 26(1), pp. 43–49, 1978.</li>
                        </ul>
                    </footer>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import HeaderBar from '@/views/HeaderBar';


export default {
  name: "WaterNetworkPredictionTimesFM",
  components: {
    HeaderBar,
  },
  data() {
    return {
      // FIX 3: Initialize models to null/undefined so they start closed
      panelMath: null,
      panelRanking: null,
    };
  },
  mounted() {
    // Initial render for visible math (like the strategic problem section)
    this.renderMath();
  },
  // FIX 4: Removed the updated() hook entirely to prevent the infinite re-rendering loop
  methods: {
    onPanelToggle() {
      // Trigger MathJax only when the panel state changes
      this.$nextTick(() => {
        this.renderMath();
      });
    },
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
.font-mono {
    font-family: monospace;
    line-height: 1.5;
}

.v-expansion-panel-header {
    transition: background-color 0.3s ease;
}

.v-expansion-panel-header--active {
    background-color: #f5f5f5;
}

.math-sheet-container {
  background-color: #f5f5f5 !important; /* This is 'grey lighten-4' */
  padding: 16px !important;            /* This is 'pa-4' (4 * 4px) */
  border-radius: 4px !important;       /* This is 'rounded' */
  text-align: center !important;       /* This is 'text-center' */
  margin-bottom: 16px !important;      /* This is 'mb-4' */
  border: 1px solid #e0e0e0;           /* Optional: matches your 'border' tag */
}


.insight-sheet-container {
  background-color: lab(62.1% 13.86 -43.97) !important; /* This is 'grey lighten-4' */
  padding: 16px !important;            /* This is 'pa-4' (4 * 4px) */
  border-radius: 4px !important;       /* This is 'rounded' */
  text-align: center !important;       /* This is 'text-center' */
  margin-bottom: 16px !important;      /* This is 'mb-4' */
  border: 1px solid #e0e0e0;           /* Optional: matches your 'border' tag */
}
</style>
