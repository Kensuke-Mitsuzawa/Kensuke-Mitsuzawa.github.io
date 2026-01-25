<template>
  <div id="education" class="normal-font">
  <v-card class="mx-auto" color="white" max-width="1500" elevation="0">
    <p class="h2 text-center">
      <v-icon large=true>fas fa-graduation-cap</v-icon>&nbsp;{{ $t('education.title') }}
    </p>
    <v-card max-width="1400" elevation="0">
      <v-container>
        <v-row justify="space-between">
              <v-col cols="1"></v-col>
              <v-col cols="5" class="text-left h5 pl-0">
                <p class="font-weight-black">{{ $t('education.doctor_title') }}</p>
                <p class="font-italic">{{ $t('education.doctor_school') }}, France</p>
                <p>Supervisor: Prof. Paolo Papotti / Prof. Motonobu Kanagawa</p>
              </v-col>
              <v-col cols="5" class="text-center pl-0">December 2024</v-col>
          </v-row>

          <v-row justify="space-between">
          <v-col cols="1"></v-col>
          <v-col cols="5" class="text-left h5 pl-0">
            <p>{{ $t('education.master_title') }}</p>
            <p class="font-italic">{{ $t('education.master_school') }}</p>
            <p>Supervisor: Prof. Yuji Matsumoto</p>
          </v-col>
          <v-col cols="5" class="text-center pl-0">March, 2014</v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="1"></v-col>
          <v-col cols="5" class="text-left h5 pl-0">
          <p>{{ $t('education.bachelor_title') }}</p>
          <p class="font-italic">{{ $t('education.bachelor_school' ) }} </p>
          </v-col>
          <v-col cols="5" class="text-center pl-0">March, 2012</v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
  </div>
</template>
