<template>
    <v-app>
        <vue-headful title="Portfolio of Kensuke Mitsuzawa" description=" " />
        <HeaderBar></HeaderBar>
        <v-main>
            <div class="mx-8">
                <v-layout justify-center align-center px-3 py-3 row wrap>
                    <v-flex text-center lg4 sm12 xs12>
                        <!-- ==================================== -->
                        <div id="" class="gaegu-font">
                            <v-row align="center" justify="center">
                                    <v-col cols="auto">
                                        <p class="h1"><u>Demo: Cat or Dog Example</u></p>
                                        <p>An application example into the image analysis</p>
                                    </v-col>
                            </v-row>
                            <v-expansion-panels flat=true>
                            <v-expansion-panel>
                            <v-expansion-panel-header>
                            <p class="text-decoration-underline text-center">
                            <v-icon>far fa-hand-point-right</v-icon>&nbsp;Click to open Demo</p>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-card class="mx-auto" max-width="600" color="white" elevation="0">
                                <v-row align="center" justify="center">
                                    <p>This demo visualizes the original images, variable selection by baselines (Wasserstein-*) and proposed method (CV-selection).</p>
                                    <p>Masked dots are selected variables.</p>
                                    <div id="wrap">
                                        <iframe
                                        width="600"
                                        height="1100"
                                        :src="externalHTMLFilePath"
                                        frameborder=0
                                        allow="accelerometer;
                                        autoplay;
                                        clipboard-write;
                                        encrypted-media;
                                        gyroscope;
                                        picture-in-picture"
                                        allowfullscreen
                                        ></iframe>
                                    </div>
                                </v-row>
                            </v-card>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            </v-expansion-panels>
                            <v-card color="white" elevation="0">
                                <!-- task goal -->
                                <v-row align="center" justify="center">
                                    <v-col cols="auto">
                                        <p class="h3"><u>Task Goal</u></p>
                                        <p>We want to discover variables/features/pixels such that factors make two probabilistic distributions different.</p>
                                    </v-col>
                                </v-row>
                                <!-- Data Source -->
                                <v-row align="center" justify="center">
                                    <v-col cols="auto">
                                        <p class="h3"><u>Data Source</u></p>
                                        <p>Cat and Dog face images are from <a href="https://github.com/clovaai/stargan-v2/blob/master/README.md#animal-faces-hq-dataset-afhq">AFHQ dataset.</a></p>
                                    </v-col>
                                </v-row>
                                <v-row align="center" justify="center">
                                    <v-col cols="auto">
                                        <p class="h3"><u>Image Preprocessing</u></p>
                                        <p>Down-scaling from 512×512 pixels to 64×64 pixels.</p>
                                        <p>Gray-scaling of color channel.</p>
                                    </v-col>
                                </v-row>
                                <!-- task definition/formulation -->
                                <v-row align="center" justify="center">
                                    <v-col cols="auto">
                                        <p class="h3"><u>Task Definition</u></p>
                                        <div v-katex:auto>
                                            <p>\(X := \{x_1,...,x_n\} \stackrel{iid}{\sim} P \): a set of dog face images.</p>
                                            <p>\(Y := \{y_1,...,y_m\} \stackrel{iid}{\sim} Q \): a set of cat face images.</p>
                                            <p>\(n, m > 0 \) are indices of images.</p>
                                            <p>Each sample \(x_n, y_m \in \mathbb{R}^{D}, D = 4096 = 64 \times 64\)</p>
                                        </div>
                                        <p>We are interested in differences of shapes between P and Q.</p>
                                        <p>So, we want to disconver variables/features/pixels having high weights of differences.</p>
                                    </v-col>
                                </v-row>
                                <!-- heatmaps -->
                                <v-row align="center" justify="center">
                                    <p><u>Selected Variables</u></p>
                                    <p>We compare baselines (Wasserstein-*) and the proposed method (cv-selection).</p>
                                    <p>These heatmaps represents are obtained weights values of variables/features/pixels.</p>
                                    <p>p-value is by a permutation test on test data.</p>
                                    <p>Baselines show a sort of face pattern, yet too much variables for distinguishing P and Q.</p>
                                    <p>Variable Selection by MMD successfully selected variables such that making P and Q different.</p>
                                    <v-col cols="auto">
                                        <v-img
                                        max-height="100%"
                                        max-width="100%"
                                        src="/mmd-demo/cat-or-dog/heatmap.png">
                                    </v-img>
                            </v-col>
                            </v-row>
                            <!-- Algorithm Definition -->
                            <v-row align="center" justify="center">
                                <div v-katex:auto>
                                <v-col cols="auto">
                                    <p class="h3"><u>Details and Algorithms</u></p>
                                    <p>Details are in Appendix. A in the <a href="https://arxiv.org/pdf/2311.01537.pdf">paper</a>.</p>
                                    <p>"wasserstein" in the example above refers to "Wasserstein-Independence" baseline.</p>
                                    <p>It computes a weight vector "w" with the following EQ below.</p>
                                    <p>\(w = \{Wasserstein(X^d, Y^d) | d \subset D\}\), \(w \in \mathbb{R}^{D} \)</p>
                                    <p>Then, the variable selection is by the mthod at Secton 4.2.1 in the paper.</p>
                                </v-col>
                            </div>
                            </v-row>
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
  data() {
    return {
      externalHTMLFilePath: 'mmd-demo/cat-or-dog/interactive_plotly.html',
    };
  },
  name: 'App',
  components: {
    HeaderBar,
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
/* for japanese */
@import url('https://fonts.googleapis.com/css2?family=Slackside+One&display=swap');

/* font gaegu */
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    font-family: 'Gaegu', cursive;
}

/* For PC */
.gaegu-font {
    font-family: 'Gaegu', cursive, sans-serif;
    font-size: 20px;
}

/* For mobile: */
@media only screen and (max-width: 600px) {
    .gaegu-font {
        font-family: 'Gaegu', cursive, sans-serif;
        font-size: 16px;
    }
}
</style>

