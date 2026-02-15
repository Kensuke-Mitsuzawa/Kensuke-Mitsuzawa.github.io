<template>
  <v-app>
    <vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
    <HeaderBar />

    <v-main class="grey lighten-4">
      <v-container class="py-12">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="display-2 font-weight-bold mb-4">GIS & Spatial Intelligence</h1>
            <p class="subtitle-1 grey--text text--darken-2">
                Leveraging spatial data to solve urban and demographic problems.</p>
          </v-col>
        </v-row>

        <v-row class="mb-12 align-center">
            <v-col cols="12" md="4">
            <v-img src="/portfolio/gis-project-1-thumb.jpg" class="rounded-lg shadow-sm"></v-img>
            </v-col>
            <v-col cols="12" md="8">
            <h3 class="text-h4 mb-2">Traffic Simulation and Visualization Project</h3>
            <p>Optimization of traffic flow in metropolitan areas using SUMO and custom Python parsers.</p>
            <v-btn color="orange darken-2" outlined to="/portfolio/portfolio-gis/visualization">Read Case Study</v-btn>
            </v-col>
        </v-row>

        <v-divider class="mb-12"></v-divider>

        <v-row class="mb-12 align-center">
            <v-col cols="12" md="4">
            <v-img src="/portfolio/gis-project-2-thumb.jpg" class="rounded-lg shadow-sm"></v-img>
            </v-col>
            <v-col cols="12" md="8">
            <h3 class="text-h4 mb-2">Variable selection on traffic simulation</h3>
            <p>In comparing two simulation scenarios, it identifies roads where high discrepancies are detected.</p>
            <v-btn color="orange darken-2" outlined to="/publications/mmd-paper-demo-sumo-most">Read Case Study</v-btn>
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
