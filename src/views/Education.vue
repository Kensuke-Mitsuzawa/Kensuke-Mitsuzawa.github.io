<template>
  <v-card class="mx-auto" color="white" max-width="1500" elevation="0">
    <p class="text-h3 text-center">
      <v-icon large=true>fas fa-graduation-cap</v-icon>&nbsp;{{ $t('education.title') }}
    </p>
    <v-card max-width="1400" elevation="0">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="1"></v-col>
          <v-col class="hidden-md-and-down" cols="1">
            <v-img height="50" width="50" src="http://www.naist.jp/about/img/logomark_R.jpg"></v-img>
          </v-col>
          <v-col cols="5" class="text-center text-h5 pl-0">
            <p>{{ $t('education.master_title') }}</p>
            <p class="font-italic">{{ $t('education.master_school') }}</p>
            <p>Supervisor: Yuji Matsumoto</p>
          </v-col>
          <v-col cols="5" class="text-center text-h5 pl-0">March, 2014</v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="1"></v-col>
          <v-col class="hidden-md-and-down" cols="1">
            <v-img
              height="50"
              width="50"
              src="https://www.osaka-u.ac.jp/en/guide/files/logo_icho.png"
            ></v-img>
          </v-col>
          <v-col
            cols="5"
            class="text-center text-h5 pl-0"
          >
          <p>{{ $t('education.bachelor_title') }}</p>
          <p class="font-italic">{{ $t('education.bachelor_school' ) }} </p>
          </v-col>
          <v-col cols="5" class="text-center text-h5 pl-0">March, 2012</v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>
