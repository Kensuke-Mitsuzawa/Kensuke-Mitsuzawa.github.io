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

                    <section class="mb-10 text-body-1">
                        <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-3">1. Strategic Problem: Network
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

                    <section class="mb-10">
                        <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-3">2. The Mathematical Engine</h2>
                        <p class="mb-4 text-subtitle-1 text-grey-darken-1 font-italic">
                            Expand the panels below to view the mathematical architecture and evaluation metrics.
                        </p>

                        <v-expansion-panels v-model="panelMath" variant="accordion" class="mb-6"
                            @change="onPanelToggle">
                            <v-expansion-panel>
                                <v-expansion-panel-header class="font-weight-bold">
                                    TimesFM Prediction Flow & Perturbation Math
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="pt-4">
                                    <p class="mb-4">
                                        We generate a baseline prediction $y^{s} \in \mathbb{R}^{T}$ and a perturbed set
                                        $\{\hat{y}^{s}_1, ..., \hat{y}^{s}_n\}$, where $s$ is the sensor index and $t$
                                        is the time-step. The core logic for the perturbed samples follows:
                                    </p>
                                    <v-sheet class="bg-grey-lighten-4 pa-4 mb-4 rounded border text-center">
                                        $$Y^{(i)} = f_{\text{TimesFM}}(X + \eta^{(i)})$$
                                    </v-sheet>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="font-weight-bold">
                                    Integration of Graph Covariate Features
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="pt-4">
                                    <p class="mb-4">
                                        Static graph properties ground the AI in physical reality. Using
                                        <code>xreg_mode="xreg + timesfm"</code>, the final prediction $\hat{y}_t$ is
                                        computed as:
                                    </p>
                                    <v-sheet
                                        class="bg-grey-lighten-4 pa-4 mb-4 rounded border text-center overflow-x-auto">
                                        $$\hat{y}_t = f_{\text{TimesFM}}(X_{1:t}) + \sum_{i} w_i \phi(z_i)$$
                                    </v-sheet>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header class="font-weight-bold">
                                    Centered Kernel Alignment (CKA)
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="pt-4">
                                    <p class="mb-4">
                                        CKA measures structural similarity between internal hidden states of baseline
                                        and perturbed predictions . It is a normalized Hilbert-Schmidt Independence
                                        Criterion (HSIC).
                                    </p>
                                    <v-sheet
                                        class="bg-grey-lighten-4 pa-4 mb-4 rounded border text-center overflow-x-auto">
                                        $$CKA(A^{\ell}, A^{\ell^{\prime}}) = \frac{HSIC(A^{\ell},
                                        A^{\ell^{\prime}})}{\sqrt{HSIC(A^{\ell}, A^{\ell}) HSIC(A^{\ell^{\prime}},
                                        A^{\ell^{\prime}})}}$$
                                    </v-sheet>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </section>

                    <section class="mb-10">
                        <h2 class="text-h5 font-weight-bold mb-6 text-blue-darken-3">2. Node Sensitivity Ranking</h2>
                        <p class="mb-6 text-body-1">
                            Nodes are ranked by their **DTW Stability Score**. Click a card to expand the
                            <strong>Spatiotemporal Analysis</strong> (Location, Forecast, and DTW Distribution).
                        </p>

                        <v-expansion-panels v-model="panelRanking" class="elevation-1">
                            <v-expansion-panel class="border-b">
                                <v-expansion-panel-header class="pa-4">
                                    <v-row align="center" no-gutters>
                                        <v-col cols="2" class="text-h6 font-weight-black text-blue-darken-2">Rank
                                            1</v-col>
                                        <v-col cols="3" class="text-subtitle-1 font-weight-bold">Node n4</v-col>
                                        <v-col cols="7" class="text-right">
                                            <span class="text-overline text-grey-darken-1 mr-2">Avg DTW Score:</span>
                                            <span class="text-h6 font-weight-bold">252.32 <span
                                                    class="text-caption text-grey">±78.5</span></span>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="bg-grey-lighten-5 pa-4">
                                    <v-row justify="center">
                                        <v-col cols="12" md="10">
                                            <div class="mb-6">
                                                <div class="text-subtitle-2 font-weight-bold mb-2">Network Location
                                                    (Topological Centrality)</div>
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_01/network_location.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                            </div>
                                            <div class="mb-6">
                                                <div class="text-subtitle-2 font-weight-bold mb-2">Forecast Deviation
                                                    (Baseline vs. Perturbed)</div>
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_01/dtw_forecast.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                            </div>
                                            <div class="mb-2">
                                                <div class="text-subtitle-2 font-weight-bold mb-2">Error Distribution
                                                    (DTW Variance)</div>
                                                <v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_01/dtw_hist.png"
                                                    class="border rounded bg-white shadow-sm" width="100%"></v-img>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
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
</style>
