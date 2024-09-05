<template>
    <v-app>
        <vue-headful title="MMD Paper Demo Transportation Traffic Simulation" description=" " />
        <HeaderBar></HeaderBar>
        <v-main>
            <div class="mx-8">
                <v-layout justify-center align-center px-3 py-3 row wrap>
                    <v-flex text-center lg4 sm12 xs12>
                        <!-- ==================================== -->
                        <div id="root" class="gaegu-font">
                            <v-card color="white" elevation="0">
                                <!-- task goal -->
                                <v-row align="center" justify="center">
                                    <v-col cols="auto">
                                        <p class="h1"><u>Task Goal</u></p>
                                        <p>
                                            We have two simulation scenarios (or configurations) that they are partially different.
                                            Assume that two simulation outcomes consist of high dimensional time series data.
                                            We want to discover variables (or features) that make the two simulation outcomes different.
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-card>

                            <div id="simulation-scenario">
                                <v-card color="white" elevation="0">
                                    <!-- Simulation Scenario -->
                                    <v-row align="center" justify="center">
                                        <div id="simulation-scenario-description">
                                        <v-col cols="auto">
                                            <p class="h1"><u>Simulation Scenario</u></p>
                                            <p>
                                                An original simulation scenario is from <a href="https://github.com/lcodeca/MoSTScenario" target="_blank" rel="noopener noreferrer">"MoSTScenario"</a>.
                                                We modify this simulation scenario and create a new scenario "road blocking".
                                                The scenario creation codebase are available <a
                                                    href="https://github.com/Kensuke-Mitsuzawa/sumo-sim-monaco-scenario"
                                                    target="_blank" rel="noopener noreferrer">on Github</a>.
                                            </p>
                                        </v-col>
                                    </div>
                                    </v-row>
                                </v-card>

                                <div id="simulation-scenario-maps">
                                    <v-card color="white" elevation="0">
                                        <v-row align="center" justify="center">
                                        <div id="simulation-scenario-description">
                                        <v-col cols="auto">
                                            <p class="h3"><u>Study Maps</u></p>
                                        </v-col>
                                    </div>
                                    </v-row>
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <v-img
                                            max-height="100%"
                                            max-width="100%"
                                            src="/mmd-demo/sumo-monaco/sumo-study-map.png">
                                        </v-img>
                                        <p class="caption">The original study map of the Sumo "MoSTScenario".</p>
                                    </v-col>
                                    </v-row>
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <v-img
                                            max-height="100%"
                                            max-width="100%"
                                            src="/mmd-demo/sumo-monaco/sumo-study-map-condition.png">
                                        </v-img>
                                        <p class="caption">
                                            The modified study map with road blocking.
                                            3 red crosses are locations where the road is blocked.
                                            3 blue circles are in and out of highway A8.
                                        </p>
                                    </v-col>
                                    </v-row>
                                    </v-card>
                                </div>

                                <div id="simulation-scenario-outcomes">
                                    <v-card color="white" elevation="0">
                                        <v-row align="center" justify="center">
                                        <div id="simulation-scenario-outcomes-description">
                                        <v-col cols="auto">
                                            <p class="h3"><u>Simulation Outcomes</u></p>
                                        </v-col>
                                    </div>
                                    </v-row>
                                    <v-row align="center" justify="center">
                                        <p>
                                            From simulations, we collect the number of agents per road ("edge-id" in SUMO's term).
                                            We refer to this metric as "Vehicle Count".
                                            The vehicle count metric is defined as "sampledSeconds" on <a
                                            href="https://sumo.dlr.de/docs/Simulation/Output/Lane-_or_Edge-based_Traffic_Measures.html"
                                            target="_blank">SUMO documentation</a>.
                                            A vehicle count value is an aggregated value per 10 seconds (10 simulation steps).
                                        </p>

                                        <p>
                                            The simulation outcome consists of the aggregated simulation steps and the number of roads (edges).
                                            The aggregated simulation steps are 3,600<v-tooltip bottom>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <span v-bind="attrs" v-on="on" class="footnote">[note]</span>
                                                        </template>
                                                        <span>
                                                            10 seconds * 3,600 = 36,000, which is 10 hours.
                                                            The simulation starts at 14400th step and ends at 50400th step.
                                                        </span>
                                            </v-tooltip>
                                            The study map consists of 4,404 roads (edges).
                                            In other words, the simulation outcome is 4,404 dimensional time series data.
                                        </p>
                                    </v-row>
                                    </v-card>
                                </div>

                                <div id="simulation-scenario-videos">
                                    <v-card color="white" elevation="0">
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <p class="h3"><u>Simulation Videos</u></p>
                                            <p>
                                                We create animations with the collected vehicle count values.
                                                The animation renders the vehicle count values on the study map every 10 minutes (600 simulation steps).
                                                The color scale is from blue (0) to red (max value).
                                                See "jet" color scale of <a href="https://matplotlib.org/stable/gallery/color/colormap_reference.html">Matplotlib</a>.
                                            </p>
                                        </v-col>
                                    </v-row>
                                    <div id="simulation-scenario-video-x-y">
                                        <v-expansion-panels flat=true>
                                            <v-expansion-panel>
                                                <v-expansion-panel-header>
                                                    <p class="text-decoration-underline text-center">
                                                        <v-icon>far fa-hand-point-right</v-icon>&nbsp;Click to Open
                                                        Videos ("original" and "modified")
                                                    </p>
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    <v-card class="mx-auto" max-width="600" color="white" elevation="0">
                                                        <v-row align="center" justify="center">
                                                            <div class="video-scenario-x">
                                                                <video controls class="video-player">
                                                                    <source src="/mmd-demo/sumo-monaco/sim_x.mp4"
                                                                        type="video/mp4">
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                                <p class="caption">The original simulation scenario.</p>
                                                            </div>
                                                            <div class="video-scenario-y">
                                                                <video controls class="video-player">
                                                                    <source src="/mmd-demo/sumo-monaco/sim_y.mp4"
                                                                        type="video/mp4">
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                                <p class="caption">The modified simulation scenario.</p>
                                                            </div>
                                                        </v-row>
                                                    </v-card>
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                    </div>
                                    <div id="simulation-scenario-video-l1-diff">
                                        <v-expansion-panels flat=true>
                                            <v-expansion-panel>
                                                <v-expansion-panel-header>
                                                    <p class="text-decoration-underline text-center">
                                                        <v-icon>far fa-hand-point-right</v-icon>&nbsp;Click to Open
                                                        Videos (L1 Diff)
                                                    </p>
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    <p>
                                                        For comparing the original and modified simulation scenarios, we calculate the L1 difference of the vehicle count values.
                                                        The L1 difference is per road (edge-id) and per time step.
                                                    </p>
                                                    <v-card class="mx-auto" max-width="600" color="white" elevation="0">
                                                        <v-row align="center" justify="center">
                                                            <div class="video-scenario-x">
                                                                <video controls class="video-player">
                                                                    <source src="/mmd-demo/sumo-monaco/l1_diff.mp4"
                                                                        type="video/mp4">
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                            </div>
                                                        </v-row>
                                                    </v-card>
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                    </div>
                                    </v-card>
                                </div>
                            </div>

                            <div id="variable-detection">
                                <v-card color="white" elevation="0">
                                    <!-- Simulation Scenario -->
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <p class="h1"><u>Variable Detection Task</u></p>
                                            <p>
                                                We apply variable selection algorithms.
                                                Simply say, we want to discover variables (road-ids) that make the two simulation outcomes different.
                                                See our paper "TODO; incoming" for details.
                                            </p>
                                        </v-col>
                                    </v-row>

                                    <div id="variable-detection-quick-description">
                                        <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <p class="h3"><u>Quick Description</u></p>
                                                <p>
                                                    We collect two simulation outcomes from from simulation scenarios "original" and "modified" respectively.
                                                    The simulation outcome is the <a href="#simulation-scenario-outcomes">vehicle count</a> metric.
                                                </p>
                                            <div v-katex:auto>
                                                <p>We denote \(X, Y \in \mathbb{R}^{T \times D}\) for these two outcomes<v-tooltip bottom>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <span v-bind="attrs" v-on="on" class="footnote">[1]</span>
                                                        </template>
                                                        <span>The collected vehicle count is the "float" value, not the "integer". See the "Notes" section of SUMO Documentation.</span>
                                                    </v-tooltip> where \( T \) is the number of aggregated time steps \( T=3,600 \) and \( D \) is the number of roads (edges) \( D=4,404 \).
                                                </p>
                                                <p>
                                                    We divide \(T=3,600\) per \( 500 \)<v-tooltip bottom>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <span v-bind="attrs" v-on="on" class="footnote">[2]</span>
                                                        </template>
                                                        <span>500 aggregated time steps are almost equal with 1 hour 23 minutes in the real world.</span>
                                                    </v-tooltip>, and set 8 buckets.
                                                </p>
                                            </div>
                                            <p>For each bucket of these 8 buckets, we conduct variable selection.</p>
                                        </v-col>
                                    </v-row>
                                </div>
                                </v-card>
                            </div>
                            <div id="variable-detection-result">
                                <div id="variable-detection-result-description">
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <p class="h1"><u>Variable Detection Result</u></p>
                                        </v-col>
                                    </v-row>
                                </div>

                                <div id="variable-detection-result-image">
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <p>The plot below depicts the number of selected variables per 1 bucket<v-tooltip bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <span v-bind="attrs" v-on="on" class="footnote">[3]</span>
                                                    </template>
                                                    <span>1 bucket consists of 500 aggregated time steps, which is almost equal with 1 hour 23 minutes in the real world.</span>
                                                </v-tooltip></p>
                                        </v-col>
                                    </v-row>
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <v-img
                                                max-height="100%"
                                                max-width="100%"
                                                src="/mmd-demo/sumo-monaco/legend.png">
                                            </v-img>
                                        </v-col>
                                        <v-col cols="auto">
                                            <v-img
                                                max-height="100%"
                                                max-width="100%"
                                                src="/mmd-demo/sumo-monaco/n-variable-sequence.png">
                                            </v-img>
                                            <p class="caption">The number of selected variables (roads) in the sequence.</p>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div id="variable-detection-result-download">
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <p>Download the excel book file below, and check selected variables (road-ids).</p>
                                        </v-col>
                                    </v-row>
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <a :href="excelFileUrl"
                                                download="variable_selection_results.xlsx"
                                                class="download-link">
                                                <v-btn color="primary">
                                                    <v-icon left>mdi-download</v-icon>Download Excel File
                                                </v-btn>
                                            </a>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div id="variable-detection-result-GIS">
                                    <v-row align="center" justify="center">
                                        <v-col cols="auto">
                                            <p>"FourSquare Studio" provides an interactive GIS tool on the Web, <a
                                                href="https://studio.foursquare.com/map/public/ceabebdc-f289-43e1-b486-a4ce033c22c9"
                                                target="_brank">Link</a>.</p>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </v-main>
    </v-app>
</template>

<script>
export default {
  data() {
    return {
      excelFileUrl: '/mmd-demo/sumo-monaco/variable_selection_results.xlsx',
    };
  },
};
</script>

<style scoped>
.video-player {
    width: 100%;
    max-width: 500px;
    /* Adjust the max-width as needed */
    height: auto;
}

.download-link {
    text-decoration: none;
}

.caption {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: 8px;
}

.footnote {
    text-decoration: underline;
    cursor: pointer;
    color: blue;
}
</style>
