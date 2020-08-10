<template>
  <v-app-bar dark app clipped-left>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>
      <v-btn to="./"><v-icon>fas fa-home</v-icon></v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn class="hidden-sm-and-down" to="/projects">Projects</v-btn>
    <v-btn class="hidden-md-and-up" to="/projects">
      <v-icon>fas fa-briefcase</v-icon>
    </v-btn>

    <v-btn class="hidden-sm-and-down" to="/portfolio">Portfilo</v-btn>
    <v-btn class="hidden-md-and-up" to="/portfolio">
      <v-icon>fas fa-palette</v-icon>
    </v-btn>

    <v-btn class="hidden-sm-and-down" to="/publications">Publications</v-btn>
    <v-btn class="hidden-md-and-up" to="/publications">
      <v-icon>fas fa-newspaper</v-icon>
    </v-btn>
  </v-app-bar>
</template>
