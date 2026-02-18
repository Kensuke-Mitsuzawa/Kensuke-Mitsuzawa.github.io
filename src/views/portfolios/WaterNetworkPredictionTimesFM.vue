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
                        In complex spatio-temporal environments, identifying which variables (sensors or detectors) are
                        most
                        sensitive to systemic noise is critical for risk management and infrastructure planning.
                    </p>
                    <p class="mb-4">
                        <strong>Real-World Case:</strong> Water demand prediction across a municipal network.
                        Traditional
                        physics-based simulations are computationally expensive. Prediction quality is influenced by:
                    </p>
                    <ul class="mb-6 pl-6">
                        <li class="mb-1"><strong>Long-term seasonal factors:</strong> Macro-shifts between summer and
                            winter.</li>
                        <li class="mb-1"><strong>Short-term localized factors:</strong> Weekend drops in office area
                            consumption.</li>
                    </ul>
                    <p class="mb-4">
                        [cite_start]<strong>The AI Solution:</strong> We utilize <strong>TimesFM 500m</strong> [cite: 1]
                        as a surrogate
                        model to bypass physical simulation limits. By introducing random perturbations (noise) at
                        $t=0$,
                        we quantify the stability of every sensor in the grid by comparing future predicted states.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-3">2. The Mathematical Engine</h2>
                    <p class="mb-4 text-subtitle-1 text-grey-darken-1 font-italic">
                        Expand the panels below to view the mathematical architecture and evaluation metrics.
                    </p>

                    <v-expansion-panels variant="accordion" class="mb-6">
                        <v-expansion-panel>
                            <v-expansion-panel-title class="font-weight-bold">
                                TimesFM Prediction Flow & Perturbation Math
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="pt-4">
                                <p class="mb-4">
                                    We generate a baseline prediction $y^{s} \in \mathbb{R}^{T}$ and a perturbed set
                                    $\{\hat{y}^{s}_1, ..., \hat{y}^{s}_n\}$, where $s$ is the sensor index and $t$ is
                                    the time-step.
                                    The core logic for the perturbed samples follows:
                                </p>
                                <v-sheet class="bg-grey-lighten-4 pa-4 mb-4 rounded border text-center">
                                    $$Y^{(i)} = f_{\text{TimesFM}}(X + \eta^{(i)})$$
                                </v-sheet>
                            </v-expansion-panel-text>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-title class="font-weight-bold">
                                Integration of Graph Covariate Features
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="pt-4">
                                <p class="mb-4">
                                    Static graph properties ground the AI in physical reality. Using
                                    <code>xreg_mode="xreg + timesfm"</code>,
                                    the final prediction $\hat{y}_t$ is computed as:
                                </p>
                                <v-sheet class="bg-grey-lighten-4 pa-4 mb-4 rounded border text-center overflow-x-auto">
                                    $$\hat{y}_t = f_{\text{TimesFM}}(X_{1:t}) + \sum_{i} w_i \phi(z_i)$$
                                </v-sheet>
                            </v-expansion-panel-text>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-title class="font-weight-bold">
                                Centered Kernel Alignment (CKA)
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="pt-4">
                                <p class="mb-4">
                                    CKA measures structural similarity between internal hidden states of baseline and
                                    perturbed predictions
                                    [cite_start][cite: 3]. It is a normalized Hilbert-Schmidt Independence Criterion
                                    (HSIC).
                                </p>
                                <v-sheet class="bg-grey-lighten-4 pa-4 mb-4 rounded border text-center overflow-x-auto">
                                    $$CKA(A^{\ell}, A^{\ell^{\prime}}) = \frac{HSIC(A^{\ell},
                                    A^{\ell^{\prime}})}{\sqrt{HSIC(A^{\ell}, A^{\ell}) HSIC(A^{\ell^{\prime}},
                                    A^{\ell^{\prime}})}}$$
                                </v-sheet>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </section>

                <section class="mb-10">
                    <h2 class="text-h5 font-weight-bold mb-6 text-blue-darken-3">3. Stability Ranking & Results</h2>

                    <v-card variant="outlined" class="mb-10 pa-4 bg-grey-lighten-5 rounded-lg border">
                        <div class="text-caption text-grey-darken-1 font-italic mb-2 text-center">
                            Figure 1: CKA values between t=0 and following time-steps.
                        </div>
                        <v-img src="portfolio/timesfm-water-network-prediction/cka_time_series_stability_1.png"
                            alt="CKA values over time" max-width="800" class="mx-auto rounded shadow-sm"></v-img>
                    </v-card>

                    <v-row justify="center">
                        <v-col cols="12" lg="11">

                            <v-card class="mb-4 border elevation-1" rounded="md">
                                <v-row no-gutters align="center" class="pa-4">
                                    <v-col cols="12" md="2" class="text-center text-md-left">
                                        <div class="text-subtitle-1 font-weight-bold">Rank 1</div>
                                        <div class="text-caption font-weight-bold text-grey">Node n4</div>
                                    </v-col>
                                    <v-col cols="12" md="3" class="text-center text-md-left">
                                        <div class="text-overline text-grey-darken-1">Avg DTW Score</div>
                                        <div class="text-h6 font-weight-bold">252.32 <span
                                                class="text-caption">±78.5</span></div>
                                    </v-col>
                                    <v-col cols="12" md="7">
                                        <v-row dense>
                                            <v-col cols="4"><v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_01/network_location.png"
                                                    height="90" cover class="border rounded bg-white"></v-img></v-col>
                                            <v-col cols="4"><v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_01/dtw_forecast.png"
                                                    height="90" cover class="border rounded bg-white"></v-img></v-col>
                                            <v-col cols="4"><v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_01/dtw_hist.png"
                                                    height="90" cover class="border rounded bg-white"></v-img></v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card>

                            <v-card class="mb-4 border elevation-1" rounded="md">
                                <v-row no-gutters align="center" class="pa-4">
                                    <v-col cols="12" md="2" class="text-center text-md-left">
                                        <div class="text-subtitle-1 font-weight-bold">Rank 2</div>
                                        <div class="text-caption font-weight-bold text-grey">Node n25</div>
                                    </v-col>
                                    <v-col cols="12" md="3" class="text-center text-md-left">
                                        <div class="text-overline text-grey-darken-1">Avg DTW Score</div>
                                        <div class="text-h6 font-weight-bold">84.26 <span
                                                class="text-caption">±37.1</span></div>
                                    </v-col>
                                    <v-col cols="12" md="7">
                                        <v-row dense>
                                            <v-col cols="4"><v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_02/network_location.png"
                                                    height="90" cover class="border rounded bg-white"></v-img></v-col>
                                            <v-col cols="4"><v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_02/dtw_forecast.png"
                                                    height="90" cover class="border rounded bg-white"></v-img></v-col>
                                            <v-col cols="4"><v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_02/dtw_hist.png"
                                                    height="90" cover class="border rounded bg-white"></v-img></v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card>

                            <v-card class="mb-4 border elevation-1" rounded="md">
                                <v-row no-gutters align="center" class="pa-4">
                                    <v-col cols="12" md="2" class="text-center text-md-left">
                                        <div class="text-subtitle-1 font-weight-bold">Rank 3</div>
                                        <div class="text-caption font-weight-bold text-grey">Node n1</div>
                                    </v-col>
                                    <v-col cols="12" md="3" class="text-center text-md-left">
                                        <div class="text-overline text-grey-darken-1">Avg DTW Score</div>
                                        <div class="text-h6 font-weight-bold">97.36 <span
                                                class="text-caption">±21.6</span></div>
                                    </v-col>
                                    <v-col cols="12" md="7">
                                        <v-row dense>
                                            <v-col cols="4"><v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_03/network_location.png"
                                                    height="90" cover class="border rounded bg-white"></v-img></v-col>
                                            <v-col cols="4"><v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_03/dtw_forecast.png"
                                                    height="90" cover class="border rounded bg-white"></v-img></v-col>
                                            <v-col cols="4"><v-img
                                                    src="portfolio/timesfm-water-network-prediction/dtw_03/dtw_hist.png"
                                                    height="90" cover class="border rounded bg-white"></v-img></v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card>

                        </v-col>
                    </v-row>
                </section>

                <footer class="mt-12 pt-6 border-t border-grey-lighten-2 text-body-2 text-grey-darken-2">
                    <h3 class="font-weight-bold text-grey-darken-4 mb-3">References</h3>
                    <ul class="list-none pl-0">
                        <li class="mb-2">
                            [1] Das, A., et al. (2024). <em>A decoder-only foundation model for time-series
                                forecasting.</em> ICML.
                        </li>
                        <li class="mb-2">
                            [2] Vrachimis, S. G., et al. (2020). <em>Dataset of BattLeDIM.</em> Zenodo.
                        </li>
                        <li class="mb-2">
                            [3] Kornblith, S., et al. (2019). <em>Similarity of Neural Network Representations
                                Revisited.</em> ICML.
                        </li>
                    </ul>
                </footer>

            </div>
            </v-container>
        </v-main>
    </v-app>
</template>


<script>
/* eslint-disable quotes */
import HeaderBar from '@/views/HeaderBar';

export default {
  name: "WaterNetworkPredictionTimesFM",
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
.font-mono {
    font-family: monospace;
    line-height: 1.5;
}
</style>
