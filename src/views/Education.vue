<template>
  <v-card class="mx-auto" color="white" max-width="1500" elevation="0">
    <p class="h2 text-center">
      <v-icon large=true>fas fa-graduation-cap</v-icon>&nbsp;{{ $t('education.title') }}
    </p>
    <v-card max-width="1400" elevation="0">
      <v-container>
        <v-row justify="space-between">
              <v-col cols="1"></v-col>
              <v-col cols="5" class="text-left h5 pl-0">
                <p class="font-weight-black">Phd candidate</p>
                <p class="font-italic">Eurecom</p>
              </v-col>
              <v-col cols="5" class="text-center h5 pl-0">
                <p>Biot, France</p>
                <p>January 2021 - Current</p>
              </v-col>
          </v-row>

          <v-row justify="space-between">
          <v-col cols="1"></v-col>
          <v-col cols="5" class="text-left h5 pl-0">
            <p>{{ $t('education.master_title') }}</p>
            <p class="font-italic">{{ $t('education.master_school') }}</p>
            <p>Supervisor: Yuji Matsumoto</p>
          </v-col>
          <v-col cols="5" class="text-center h5 pl-0">March, 2014</v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="1"></v-col>
          <v-col cols="5" class="text-left h5 pl-0">
          <p>{{ $t('education.bachelor_title') }}</p>
          <p class="font-italic">{{ $t('education.bachelor_school' ) }} </p>
          </v-col>
          <v-col cols="5" class="text-center h5 pl-0">March, 2012</v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>
