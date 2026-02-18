<template>
  <v-app>
    <vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
    <HeaderBar />

    <v-main class="grey lighten-4">
      <v-container class="py-12">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="display-2 font-weight-bold mb-4">Project Portfolios</h1>
            <p class="subtitle-1 grey--text text--darken-2">
              Bridging the gap between <strong>Statistical Research</strong> and <strong>Production Engineering</strong>.
              Specializing in NLP, LLM Optimization, and Spatial Data.
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-8">

          <v-col cols="12" md="6" lg="3">
            <v-card class="mx-auto fill-height d-flex flex-column" hover to="/portfolio/llm-engieering">
              <v-img height="200" src="/portfolio/llm_cover.jpg" class="white--text align-end">
                <v-card-title class="pb-0" style="background: rgba(0,0,0,0.4); width: 100%;">LLM Engineering</v-card-title>
              </v-img>
              <v-card-text class="text--primary flex-grow-1">
                <v-chip small color="blue lighten-4" class="mb-2">RAG</v-chip>
                <v-chip small color="blue lighten-4" class="mb-2">Quantization</v-chip>
                <div class="font-weight-bold">Agentic Systems & Compression</div>
                <p class="caption mt-2">Deep-dive into local LLM orchestration and statistical integrity of compressed models (CKA/MMD).</p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="blue darken-2">View 2 Projects</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="3">
            <v-card class="mx-auto fill-height d-flex flex-column" hover to="/portfolio/llm-engieering/timesfm-xai-analysis">
              <v-img height="200" src="/portfolio/llm_cover.jpg" class="white--text align-end">
                <v-card-title class="pb-0" style="background: rgba(0,0,0,0.4); width: 100%;">Time-Series & Predictive AI</v-card-title>
              </v-img>
              <v-card-text class="text--primary flex-grow-1">
                <v-chip small color="blue lighten-4" class="mb-2">Time-Series</v-chip>
                <v-chip small color="blue lighten-4" class="mb-2">Foundation Models (TimesFM)</v-chip>
                <v-chip small color="blue lighten-4" class="mb-2">XAI</v-chip>
                <div class="font-weight-bold">Complex Systems & Surrogate Modeling</div>
                <p class="caption mt-2">Applying transformer-based foundation models (TimesFM) and Explainable AI to forecast dynamics and detect anomalies in high-dimensional physical networks.</p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="blue darken-2">VIEW PROJECTS</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="3">
            <v-card class="mx-auto fill-height d-flex flex-column" hover to="/portfolio/python-packages">
              <v-img height="200" src="/portfolio/oss_cover.jpg" class="white--text align-end">
                <v-card-title class="pb-0" style="background: rgba(0,0,0,0.4); width: 100%;">OSS Library</v-card-title>
              </v-img>
              <v-card-text class="text--primary flex-grow-1">
                <v-chip small color="green lighten-4" class="mb-2">PyPI</v-chip>
                <v-chip small color="green lighten-4" class="mb-2">NLP</v-chip>
                <div class="font-weight-bold">Python Tooling</div>
                <p class="caption mt-2">7+ Python packages focused on Japanese NLP, traffic simulation parsing, and document feature selection.</p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="green darken-2">Explore 7+ Packages</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="3">
            <v-card class="mx-auto fill-height d-flex flex-column" hover to="/portfolio/portfolio-gis">
              <v-img height="200" src="/portfolio/gis_cover.jpg" class="white--text align-end">
                <v-card-title class="pb-0" style="background: rgba(0,0,0,0.4); width: 100%;">GIS Analysis</v-card-title>
              </v-img>
              <v-card-text class="text--primary flex-grow-1">
                <v-chip small color="orange lighten-4" class="mb-2">Spatial</v-chip>
                <v-chip small color="orange lighten-4" class="mb-2">GeoPandas</v-chip>
                <div class="font-weight-bold">Spatial Intelligence</div>
                <p class="caption mt-2">Analyzing urban traffic, demographic shifts, and geographic feature extraction.</p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="orange darken-2">View GIS Work</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="3">
            <v-card class="mx-auto fill-height d-flex flex-column" hover to="/portfolio/MuSpNa">
              <v-img height="200" src="/portfolio/web_cover.jpg" class="white--text align-end">
                <v-card-title class="pb-0" style="background: rgba(0,0,0,0.4); width: 100%;">Web Services</v-card-title>
              </v-img>
              <v-card-text class="text--primary flex-grow-1">
                <v-chip small color="purple lighten-4" class="mb-2">Serverless</v-chip>
                <v-chip small color="purple lighten-4" class="mb-2">AWS</v-chip>
                <div class="font-weight-bold">Full-Stack Apps</div>
                <p class="caption mt-2">End-to-end applications including MuSpNa, featuring serverless AWS architectures and Vue.js frontends.</p>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="purple darken-2">View History</v-btn>
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
.videotag{
    position: relative;
    top: 0;
    bottom: 1vw;
    width: 50%;
    height: 50%;
    outline: none;
}
</style>
