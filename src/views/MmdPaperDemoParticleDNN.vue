<template>
    <v-app>
        <vue-headful title="MMD Paper Demo Parcile Simulation" description=" " />
        <HeaderBar></HeaderBar>
        <v-main>
            <div class="mx-8">
                <v-layout justify-center align-center px-3 py-3 row wrap>
                    <v-flex text-center lg4 sm12 xs12>
                        <!-- ==================================== -->
                        <div id="root" class="gaegu-font">
                        <div class="mx-5">  <!-- margin in width with 20px -->
                            <p>Wasserstein Baseline</p>
                            <v-row align="center" justify="center">
                                <v-col cols="auto">
                                    <v-img
                                    max-width="500"
                                    max-height="600"
                                    src="/mmd-demo/particle-simulator/wasserstein_independence-.gif"></v-img>
                                </v-col>
                            </v-row>
                        </div>

                        <div class="mx-5">  <!-- margin in width with 20px -->
                            <p>MMD Model Selection</p>
                            <v-row align="center" justify="center">
                                <v-col cols="auto">
                                    <v-img
                                    max-width="500"
                                    max-height="600"
                                    src="/mmd-demo/particle-simulator/interpretable_mmd-algorithm_one.gif"></v-img>
                                </v-col>
                            </v-row>
                        </div>

                        <div class="mx-5">  <!-- margin in width with 20px -->
                            <p>MMD CV-Aggregation</p>
                            <v-row align="center" justify="center">
                                <v-col cols="auto">
                                    <v-img
                                    max-width="500"
                                    max-height="600"
                                    src="/mmd-demo/particle-simulator/interpretable_mmd-cv_selection.gif"></v-img>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                    </v-flex>
                </v-layout>
            </div>
        </v-main>
    </v-app>
</template>
