<template>
  <v-card class="mx-auto" color="white" max-width="1500" elevation="0">
    <p class="text-h3 text-center">
      <v-icon large="true">fas fa-language</v-icon>&nbsp;Languages
    </p>
    <v-layout text-xs-center px-3 py-3 row wrap>
      <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="100" :width="20" size="150" color="teal">
            Japanese
            <br />(Native)
          </v-progress-circular>
      </v-flex>

        <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="100" :width="20" size="150" color="deep-orange lighten-2">
            English
            <br />(daily use for Business)
          </v-progress-circular>
        </v-flex>

        <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="60" :width="20" size="150" color="brown">
            German
            <br />(Around B2)
          </v-progress-circular>
        </v-flex>

        <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="30" :width="20" size="150" color="lime">
            French
            <br />(A2)
          </v-progress-circular>
        </v-flex>

        <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="30" :width="20" size="150" color="indigo darken-2">
            Persian
            <br />(A2)
          </v-progress-circular>
        </v-flex>
    </v-layout>
  </v-card>
</template>
