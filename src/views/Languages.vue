<template>
  <v-card class="mx-auto" color="white" max-width="1500" elevation="0">
    <p class="text-h3 text-center">
      <v-icon large="true">fas fa-language</v-icon>&nbsp;{{ $t('languages.title') }}
    </p>
    <v-layout text-xs-center px-3 py-3 row wrap>
      <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="100" :width="20" size="150" color="teal">
            {{ $t('languages.japanese_name') }}
            <br />({{ $t('languages.japanese_exp') }})
          </v-progress-circular>
      </v-flex>

        <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="100" :width="20" size="150" color="deep-orange lighten-2">
            {{ $t('languages.english_name') }}
            <br />({{ $t('languages.english_exp') }})
          </v-progress-circular>
        </v-flex>

        <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="60" :width="20" size="150" color="brown">
            {{ $t('languages.german_name') }}
            <br />({{ $t('languages.german_exp') }})
          </v-progress-circular>
        </v-flex>

        <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="30" :width="20" size="150" color="lime">
            {{ $t('languages.french_name') }}
            <br />({{ $t('languages.french_exp') }})
          </v-progress-circular>
        </v-flex>

        <v-flex lg4 sm12 xs12>
          <v-progress-circular :value="30" :width="20" size="150" color="indigo darken-2">
            {{ $t('languages.persian_name') }}
            <br />({{ $t('languages.persian_exp') }})
          </v-progress-circular>
        </v-flex>
    </v-layout>
  </v-card>
</template>
