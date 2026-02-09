<template>
  <v-container fluid class="pa-4">
    <p class="h2 text-center text-decoration-underline mb-6">Digital Skills</p>

    <v-card class="mx-auto mb-6" color="blue-grey lighten-5" elevation="2">
      <!-- <v-card-text>
        <div class="text-center mb-4">
          <p class="h2 primary--text"><v-icon large color="primary">mdi-robot</v-icon> AI & LLM Architecture</p>
          <p class="subtitle-1">Core specialization and advanced engineering capabilities</p>
        </div>

        <v-row>
          <v-col cols="12" md="4">
            <div class="font-weight-bold mb-2 text-center">Core Frameworks</div>
            <div class="text-center">
              <v-chip class="ma-1" color="white" text-color="blue-grey darken-4"><strong>LangGraph</strong></v-chip>
              <v-chip class="ma-1" color="white" text-color="blue-grey darken-4"><strong>HuggingFace</strong></v-chip>
              <v-chip class="ma-1" color="white" text-color="blue-grey darken-4"><strong>Ollama</strong></v-chip>
              <v-chip class="ma-1" color="white" text-color="blue-grey darken-4">PyTorch</v-chip>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="font-weight-bold mb-2 text-center">Specializations</div>
            <div class="text-center">
              <v-chip class="ma-1" color="primary" dark><strong>Agentic AI Pipeline</strong></v-chip>
              <v-chip class="ma-1" color="primary" dark><strong>RAG</strong></v-chip>
              <v-chip class="ma-1" color="primary" dark>CPU Inference Tuning</v-chip>
              <v-chip class="ma-1" color="primary" dark>Quantization</v-chip>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="font-weight-bold mb-2 text-center">MLOps & Data</div>
            <div class="text-center">
              <v-chip class="ma-1" small>MlFlow</v-chip>
              <v-chip class="ma-1" small>WanDB</v-chip>
              <v-chip class="ma-1" small>Vector DBs (Qdrant/Chroma)</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card-text> -->
      <v-card-text>
        <div class="text-center mb-4">
          <p class="h2 primary--text"><v-icon large color="primary">mdi-robot</v-icon> AI & LLM Architecture</p>
          <p class="subtitle-1">Core specialization and advanced engineering capabilities</p>
        </div>

        <v-row>
          <v-col cols="12" md="4">
            <div class="font-weight-bold mb-2 text-center">Core Frameworks</div>
            <div class="text-center">
              <v-chip class="ma-1" color="white" text-color="blue-grey darken-4"><strong>LangGraph</strong></v-chip>
              <v-chip class="ma-1" color="white" text-color="blue-grey darken-4"><strong>HuggingFace</strong></v-chip>
              <v-chip class="ma-1" color="white" text-color="blue-grey darken-4"><strong>PyTorch XLA</strong></v-chip>
              <v-chip class="ma-1" color="white" text-color="blue-grey darken-4"><strong>PyTorch</strong></v-chip>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="font-weight-bold mb-2 text-center">Specializations</div>
            <div class="text-center">
              <v-chip class="ma-1" color="primary" dark><strong>Agentic AI Pipeline</strong></v-chip>
              <v-chip class="ma-1" color="primary" dark><strong>RAG</strong></v-chip>
              <v-chip class="ma-1" color="primary" dark><strong>training-on-TPU</strong></v-chip>
              <v-chip class="ma-1" color="primary" dark>CPU Inference Tuning</v-chip>
              <v-chip class="ma-1" color="primary" dark>Quantization</v-chip>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="font-weight-bold mb-2 text-center">MLOps & Data</div>
            <div class="text-center">
              <v-chip class="ma-1" small>MlFlow</v-chip>
              <v-chip class="ma-1" small>WanDB</v-chip>
              <v-chip class="ma-1" small>Vector DBs (Qdrant/Chroma)</v-chip>
              <v-chip class="ma-1" small>GCP Cloud Bucket</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-row>

      <v-col cols="12" md="6">
        <v-card class="fill-height" elevation="1">
          <v-card-title class="justify-center">
            <v-icon left>fas fa-code</v-icon> Languages & Frameworks
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <div class="d-flex align-center mb-3">
              <v-icon color="blue darken-2" class="mr-2">fab fa-python</v-icon>
              <span class="h4 mb-0">Python (Expert)</span>
            </div>

            <div class="pl-2 pl-md-8">
              <div class="d-flex flex-wrap align-center mb-2">
                <strong class="caption grey--text text--darken-1 text-uppercase mr-2" style="min-width: 60px;">AI & NLP:</strong>
                <v-chip-group column class="my-0">
                  <v-chip small outlined color="blue darken-2">PyTorch</v-chip>
                  <v-chip small outlined color="blue darken-2">Tensorflow</v-chip>
                  <v-chip small outlined color="blue darken-2">Scikit-learn</v-chip>
                  <v-chip small outlined color="blue darken-2">HuggingFace</v-chip>
                  <v-chip small outlined color="blue darken-2">spaCy</v-chip>
                </v-chip-group>
              </div>

              <div class="d-flex flex-wrap align-center mb-2">
                <strong class="caption grey--text text--darken-1 text-uppercase mr-2" style="min-width: 60px;">Web:</strong>
                <v-chip-group column class="my-0">
                  <v-chip small outlined color="blue darken-2">FastAPI</v-chip>
                  <v-chip small outlined color="blue darken-2">Streamlit</v-chip>
                  <v-chip small outlined color="blue darken-2">Django/Flask</v-chip>
                </v-chip-group>
              </div>

              <div class="d-flex flex-wrap align-center">
                <strong class="caption grey--text text--darken-1 text-uppercase mr-2" style="min-width: 60px;">Core:</strong>
                <v-chip-group column class="my-0">
                  <v-chip small outlined color="blue darken-2">Cython</v-chip>
                  <v-chip small outlined color="blue darken-2">Packaging (Poetry/uv)</v-chip>
                </v-chip-group>
              </div>
            </div>
          </v-card-text>

          <v-card-text>
            <div class="d-flex align-center mb-2">
              <v-icon color="green darken-2" class="mr-2">fas fa-chart-bar</v-icon>
              <span class="h4 mb-0">R (Advanced)</span>
            </div>
            <div class="pl-8">
              <v-chip-group column>
                <v-chip small outlined color="green darken-2">Shiny</v-chip>
                <v-chip small outlined color="green darken-2">Rmd</v-chip>
                <v-chip small outlined color="green darken-2">Tidyverse</v-chip>
              </v-chip-group>
            </div>
          </v-card-text>

          <v-card-text>
            <div class="d-flex align-center mb-2">
              <v-icon color="orange darken-2" class="mr-2">fab fa-js</v-icon>
              <span class="h4 mb-0">JavaScript</span>
            </div>
            <div class="pl-8">
              <v-chip-group column>
                <v-chip small outlined color="orange darken-2">Vue.js</v-chip>
                <v-chip small outlined color="orange darken-2">D3.js</v-chip>
              </v-chip-group>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="fill-height" elevation="1">
          <v-card-title class="justify-center">
            <v-icon left>fas fa-server</v-icon> Infrastructure & Data
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <p class="subtitle-1 font-weight-bold text-center"><v-icon small>fas fa-cloud</v-icon> Cloud & OS</p>
            <div class="text-center mb-4">
              <v-chip class="ma-1">AWS</v-chip>
              <v-chip class="ma-1">GCP</v-chip>
              <v-chip class="ma-1">Linux (Ubuntu/CentOS)</v-chip>
              <v-chip class="ma-1">Mac/Windows</v-chip>
            </div>

            <p class="subtitle-1 font-weight-bold text-center"><v-icon small>fas fa-database</v-icon> Databases</p>
            <div class="text-center mb-4">
              <v-chip class="ma-1" color="teal lighten-5">PostgreSQL/SQL</v-chip>
              <v-chip class="ma-1" color="teal lighten-5">Redis</v-chip>
              <v-chip class="ma-1" color="teal lighten-5">MongoDB</v-chip>
              <v-chip class="ma-1" color="teal lighten-5">ElasticSearch</v-chip>
              <v-chip class="ma-1" color="teal lighten-5">Qdrant</v-chip>
              <v-chip class="ma-1" color="teal lighten-5">DuckDB</v-chip>
            </div>

             <p class="subtitle-1 font-weight-bold text-center"><v-icon small>fas fa-map-marked-alt</v-icon> GIS & Simulation</p>
            <div class="text-center">
              <v-chip class="ma-1" small>QGIS</v-chip>
              <v-chip class="ma-1" small>Kepler.gl</v-chip>
              <v-chip class="ma-1" small>SUMO (Traffic)</v-chip>
              <v-chip class="ma-1" small>GeoClaw</v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="12">
        <v-card elevation="1">
          <v-card-text class="d-flex align-center flex-wrap justify-center">
            <strong class="mr-4 h4 mb-0"><v-icon left>fas fa-toolbox</v-icon> DevOps & Tools:</strong>
            <v-chip class="ma-1" label small>Docker</v-chip>
            <v-chip class="ma-1" label small>Jenkins</v-chip>
            <v-chip class="ma-1" label small>CI/CD</v-chip>
            <v-chip class="ma-1" label small>Git</v-chip>
            <v-chip class="ma-1" label small>VSCode/Vim</v-chip>
            <v-chip class="ma-1" label small>Atlassian Suite</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
</style>

<script>
export default {};
</script>
