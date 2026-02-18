<template>
  <v-app>
    <vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
    <HeaderBar />

    <v-main class="grey lighten-4">
      <v-container class="py-12">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center mb-8">
            <h1 class="display-2 font-weight-bold mb-4">Project Portfolios</h1>
            <p class="subtitle-1 grey--text text--darken-2">
              Bridging the gap between <strong>Statistical Research</strong> and <strong>Production Engineering</strong>.
              Specializing in NLP, LLM Optimization, and Spatial Data.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" lg="4" class="d-flex">
            <v-card class="elevation-2 border-t-blue flex-grow-1 d-flex flex-column" hover to="/portfolio/llm-engieering">
              <v-card-title class="headline font-weight-bold pb-2">
                <v-icon large color="blue darken-2" class="mr-3">mdi-brain</v-icon>
                LLM Engineering
              </v-card-title>
              <v-card-text class="flex-grow-1">
                <div class="d-flex flex-wrap mb-3">
                  <v-chip x-small color="blue lighten-5" class="mr-1 mb-1 font-weight-bold">RAG</v-chip>
                  <v-chip x-small color="blue lighten-5" class="mr-1 mb-1 font-weight-bold">Quantization</v-chip>
                </div>
                <div class="subtitle-1 font-weight-bold grey--text text--darken-4">Agentic Systems & Compression</div>
                <p class="caption mt-2 grey--text text--darken-2">
                  Deep-dive into local LLM orchestration and statistical integrity of compressed models (CKA/MMD).
                </p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="blue darken-2" class="font-weight-bold">View 2 Projects</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="4" class="d-flex">
            <v-card class="elevation-2 border-t-green flex-grow-1 d-flex flex-column" hover to="/portfolio/llm-engieering/timesfm-xai-analysis">
              <v-card-title class="headline font-weight-bold pb-2">
                <v-icon large color="green darken-2" class="mr-3">mdi-chart-timeline-variant</v-icon>
                Predictive AI
              </v-card-title>
              <v-card-text class="flex-grow-1">
                <div class="d-flex flex-wrap mb-3">
                  <v-chip x-small color="green lighten-5" class="mr-1 mb-1 font-weight-bold">TimesFM</v-chip>
                  <v-chip x-small color="green lighten-5" class="mr-1 mb-1 font-weight-bold">XAI</v-chip>
                </div>
                <div class="subtitle-1 font-weight-bold grey--text text--darken-4">Surrogate Modeling</div>
                <p class="caption mt-2 grey--text text--darken-2">
                  Applying foundation models to forecast dynamics and detect anomalies in high-dimensional physical networks.
                </p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="green darken-2" class="font-weight-bold">View Projects</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="4" class="d-flex">
            <v-card class="elevation-2 border-t-orange flex-grow-1 d-flex flex-column" hover to="/portfolio/python-packages">
              <v-card-title class="headline font-weight-bold pb-2">
                <v-icon large color="orange darken-2" class="mr-3">mdi-package-variant-closed</v-icon>
                OSS Library
              </v-card-title>
              <v-card-text class="flex-grow-1">
                <div class="d-flex flex-wrap mb-3">
                  <v-chip x-small color="orange lighten-5" class="mr-1 mb-1 font-weight-bold">PyPI</v-chip>
                  <v-chip x-small color="orange lighten-5" class="mr-1 mb-1 font-weight-bold">NLP</v-chip>
                </div>
                <div class="subtitle-1 font-weight-bold grey--text text--darken-4">Python Tooling</div>
                <p class="caption mt-2 grey--text text--darken-2">
                  7+ Python packages focused on Japanese NLP, traffic simulation parsing, and document feature selection.
                </p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="orange darken-2" class="font-weight-bold">Explore 7+ Packages</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="4" class="d-flex">
            <v-card class="elevation-2 border-t-teal flex-grow-1 d-flex flex-column" hover to="/portfolio/portfolio-gis">
              <v-card-title class="headline font-weight-bold pb-2">
                <v-icon large color="teal darken-1" class="mr-3">mdi-map-marker-radius</v-icon>
                GIS Analysis
              </v-card-title>
              <v-card-text class="flex-grow-1">
                <div class="d-flex flex-wrap mb-3">
                  <v-chip x-small color="teal lighten-5" class="mr-1 mb-1 font-weight-bold text--teal">Spatial</v-chip>
                  <v-chip x-small color="teal lighten-5" class="mr-1 mb-1 font-weight-bold text--teal">GeoPandas</v-chip>
                </div>
                <div class="subtitle-1 font-weight-bold grey--text text--darken-4">Spatial Intelligence</div>
                <p class="caption mt-2 grey--text text--darken-2">
                  Analyzing urban traffic, demographic shifts, and geographic feature extraction from high-resolution map data.
                </p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="teal darken-2" class="font-weight-bold">View GIS Work</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="4" class="d-flex">
            <v-card class="elevation-2 border-t-purple flex-grow-1 d-flex flex-column" hover to="/portfolio/MuSpNa">
              <v-card-title class="headline font-weight-bold pb-2">
                <v-icon large color="purple darken-1" class="mr-3">mdi-cloud-outline</v-icon>
                Web Services
              </v-card-title>
              <v-card-text class="flex-grow-1">
                <div class="d-flex flex-wrap mb-3">
                  <v-chip x-small color="purple lighten-5" class="mr-1 mb-1 font-weight-bold text--purple">AWS</v-chip>
                  <v-chip x-small color="purple lighten-5" class="mr-1 mb-1 font-weight-bold text--purple">Serverless</v-chip>
                </div>
                <div class="subtitle-1 font-weight-bold grey--text text--darken-4">Full-Stack Apps</div>
                <p class="caption mt-2 grey--text text--darken-2">
                  End-to-end applications including MuSpNa, featuring serverless AWS architectures and Vue.js frontends.
                </p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="purple darken-2" class="font-weight-bold">View History</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from "@/views/HeaderBar";

export default {
  name: "App",
  components: {
    HeaderBar,
  },
};
</script>

<style scoped>
/* Colored Top Borders to categorize cards without images */
.border-t-blue { border-top: 4px solid #1976D2 !important; }
.border-t-green { border-top: 4px solid #43A047 !important; }
.border-t-orange { border-top: 4px solid #FB8C00 !important; }
.border-t-teal { border-top: 4px solid #00897B !important; }
.border-t-purple { border-top: 4px solid #8E24AA !important; }

/* Ensure cards in a row have equal height */
.d-flex { display: flex !important; }
.flex-grow-1 { flex-grow: 1 !important; }
</style>
