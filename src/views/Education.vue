<template>
  <div id="education" class="gaegu-font">
  <v-card class="mx-auto" color="white" max-width="1500" elevation="0">
    <p class="gaegu-font h2 text-center">
      <v-icon large=true>fas fa-graduation-cap</v-icon>&nbsp;{{ $t('education.title') }}
    </p>
    <v-card max-width="1400" elevation="0">
      <v-container>
        <v-row justify="space-between">
              <v-col cols="1"></v-col>
              <v-col cols="5" class="gaegu-font text-left h5 pl-0">
                <p class="font-weight-black">{{ $t('education.doctor_title') }}</p>
                <p class="font-italic">{{ $t('education.doctor_school') }}</p>
                <p>Supervisor: Prof. Paolo Papotti / Prof. Motonobu Kanagawa</p>
              </v-col>
              <v-col cols="5" class="gaegu-font text-center h5 pl-0">
                <p>Biot, France</p>
                <p>January 2021 - December 2024</p>
              </v-col>
          </v-row>

          <v-row justify="space-between">
          <v-col cols="1"></v-col>
          <v-col cols="5" class="gaegu-font text-left h5 pl-0">
            <p>{{ $t('education.master_title') }}</p>
            <p class="font-italic">{{ $t('education.master_school') }}</p>
            <p>Supervisor: Prof. Yuji Matsumoto</p>
          </v-col>
          <v-col cols="5" class="text-center pl-0">March, 2014</v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="1"></v-col>
          <v-col cols="5" class="gaegu-font text-left h5 pl-0">
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


<style>
/* for font settings */
@import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
/* for japanese */
@import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap');

/* font gaegu */
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: 'Gaegu', 'Yomogi', cursive;
}


/* For PC */
.gaegu-font {
  font-family: 'Gaegu', 'Yomogi', cursive, sans-serif;
  font-size: 20px;
}

/* For mobile: */
@media only screen and (max-width: 600px) {
  .gaegu-font {
    font-family: 'Gaegu', 'Yomogi', cursive, sans-serif;
    font-size: 16px;
  }
}
</style>
