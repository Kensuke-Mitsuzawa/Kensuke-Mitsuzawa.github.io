<template>
  <v-app>
    <vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
    <HeaderBar />

    <v-main class="grey lighten-4">
      <v-container class="py-12">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="display-2 font-weight-bold mb-4">LLM Engineering</h1>
          </v-col>
        </v-row>

        <v-row class="mb-12 align-center">
            <v-col cols="12" md="4">
            <v-img src="/portfolio/gis-project-2-thumb.jpg" class="rounded-lg shadow-sm"></v-img>
            </v-col>
            <v-col cols="12" md="8">
            <h3 class="text-h4 mb-2">LLM Compression: A Structural Integrity Audit</h3>
            <p>Statistical comparison tools of visualizing the internal hidden-states of LLMs before and after the model compression.</p>
            <v-btn color="orange darken-2" outlined to="/portfolio/llm-engieering/llm-analysis-example-mmd-and-cka">Read Case Study</v-btn>
            </v-col>
        </v-row>

        <v-divider class="mb-12"></v-divider>

        <v-row class="mb-12 align-center">
            <v-col cols="12" md="4">
            <v-img src="/portfolio/gis-project-1-thumb.jpg" class="rounded-lg shadow-sm"></v-img>
            </v-col>
            <v-col cols="12" md="8">
            <h3 class="text-h4 mb-2">LangDiaryAgentic</h3>
            <p>AI-powered language learning system.</p>
            <v-btn color="orange darken-2" outlined to="/portfolio/llm-engieering/lang-diary-agentic">Read Case Study</v-btn>
            </v-col>
        </v-row>
        </v-container>
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
