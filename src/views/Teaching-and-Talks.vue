<template>
    <v-app>
      <vue-headful title="Portfolio of Kensuke Mitsuzawa" description=" " />
      <HeaderBar></HeaderBar>
      <v-main>
        <div class="mx-8">
        <v-layout justify-center align-center px-3 py-3 row wrap>
          <v-flex text-center lg4 sm12 xs12>
            <div id="Talks">
                <p class="text-h4 text-center display-1 text--primary text-decoration-underline">Talks</p>
                <v-card color="white" max-width="1500" elevation="0">
                    <div id="talk-2025-03-25" class="mb-4">
                        <v-row align="center" justify="center">
                            <v-col cols="auto">
                                <p class="text-h5"><a target="_blank" href="https://indico.math.cnrs.fr/event/14088/">Seminar</a></p>
                                <p>25th March 2025</p>
                                <p>Probabilités et statistiques, Laboratoire Jean Alexandre Dieudonné, Univesité Côte d'azur</p>
                                <p class="text-h6">Materials</p>
                                <div id="talk-2025-03-25-materials">
                                    <a target="_blank" href="https://gist.github.com/Kensuke-Mitsuzawa/aae5d49ca898cbdb134f807760166bd1">Jupyter Notebook</a>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <v-divider></v-divider>
                    <div id="talk-2025-02-10" class="mb-4">
                        <v-row align="center" justify="center">
                            <v-col cols="auto">
                            <p class="text-h5">Invited Talk</p>
                            <p>10th February 2025</p>
                            <p>Machine Learning Group, Julius-Maximilians-Universität Würzburg, Germany</p>
                            </v-col>
                        </v-row>
                    </div>
                    <v-divider></v-divider>
                    <div id="talk-2025-06-04" class="mb-4">
                        <v-row align="center" justify="center">
                            <v-col>
                                <p class="text-h5">Invited Talk</p>
                                <p>4th June 2024</p>
                                <p>Social Computational Linguistics Group, Hitotsubashi University, Tokyo, Japan</p>
                            </v-col>
                        </v-row>
                    </div>
                    <v-divider></v-divider>
                    <div id="talk-2024-02-26" class="mb-4">
                        <v-row align="center" justify="center">
                            <v-col>
                                <p class="text-h5">Invited Talk</p>
                                <p>26th February 2024</p>
                                <p>CISPA Helmholtz Center for Information Security, Saarbrücken, Germany</p>
                            </v-col>
                        </v-row>
                    </div>
                    <v-divider></v-divider>
                    <div id="talk-2018-NINJAL" class="mb-4">
                        <v-row align="center" justify="center">
                            <v-col>
                                <p class="text-h5">Invited Talk</p>
                                <p>Symposium for Utilization of Web Texts as Corpora, <a target="_blank" href="https://clrd.ninjal.ac.jp/lrw2018-symposium.html">Link (JP)</a></p>
                                <p>6th September 2018</p>
                                <p>Center for Language Resource Development, National Institute for Japanese Language and Linguistics, Tokyo, Japan</p>
                            </v-col>
                        </v-row>
                    </div>
                    <v-divider></v-divider>
                </v-card>
            </div>
            <div id="Teaching">
                <p class="text-h4 text-center display-1 text--primary text-decoration-underline">Teaching</p>
                <v-card color="white" max-width="1500" elevation="0">
                    <div id="semester-project-2022-autumn" class="mb-4">
                        <v-row align="center" justify="center">
                            <v-col cols="auto">
                                <p class="text-h5">Semester Project</p>
                                <p>"Traffic simulation parameter calibrations toward smart city planning"</p>
                                <p>Autumn Semester 2022, Eurecom</p>
                          </v-col>
                        </v-row>
                    </div>
                    <v-divider></v-divider>
                    <div id="semester-project-2021-spring" class="mb-4">
                        <v-row align="center" justify="center">
                            <v-col cols="auto">
                                <p class="text-h5">Semester Project</p>
                                <p>"A Survey of Distance Measures for Traffic Simulation Data"</p>
                                <p>Spring Semester 2022, Eurecom</p>
                            </v-col>
                        </v-row>
                    </div>
                    <v-divider></v-divider>
                    <div id="semester-project-2020-automn" class="mb-4">
                        <v-row align="center" justify="center">
                            <v-col cols="auto">
                                <p class="text-h5">Semester Project</p>
                                <p>"Simulation of Urban Mobility (SUMO)Tuning with Approximate Bayesian Computation"</p>
                                <p>Automn Semester 2020, Eurecom</p>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </div>
          </v-flex>
        </v-layout>
        </div>
      </v-main>
    </v-app>
  </template>
<script>
import HeaderBar from '@/views/HeaderBar';
export default {
  name: 'App',
  components: {
    HeaderBar,
  },
};
</script>
