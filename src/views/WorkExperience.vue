<template>
  <v-layout justify-center align-center>
    <v-flex text-center>
      <v-card class="mx-auto" color="white" max-width="1500" elevation="0">
        <p class="h2 text-center">
          <v-icon large=true>fas fas fa-building</v-icon>
          &nbsp;{{ $t('work_experience.title') }}
        </p>
        <v-card max-width="1400" elevation="0">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="1"></v-col>
              <v-col cols="5" class="text-left h5 pl-0">
                <p class="font-weight-black">Research Internship</p>
                <p class="font-italic">Huawei Munich Research Center</p>
              </v-col>
              <v-col cols="5" class="text-center h5 pl-0">
                <p>Munich, Germany</p>
                <p>September 2023 - March 2024</p>
              </v-col>
            </v-row>

            <v-row justify="space-between">
              <v-col cols="1"></v-col>
              <v-col cols="5" class="text-left h5 pl-0">
                <p class="font-weight-black">Data Scientist / NLP Engineer / Python Developer</p>
                <p class="font-italic">Freelancer</p>
              </v-col>
              <v-col cols="5" class="text-center h5 pl-0">
                <p>Frankfurt am Main / Remote</p>
                <p>December 2018 - December 2020</p>
              </v-col>
            </v-row>

            <v-row justify="space-between">
              <v-col cols="1"></v-col>
              <v-col cols="5" class="text-left h5 pl-0">
                <p class="font-weight-black">Chef Data Scientist</p>
                <p class="font-italic">Insight Tech Inc.</p>
              </v-col>
              <v-col cols="5" class="text-center h5 pl-0">
                <p>Tokyo Japan</p>
                <p>December 2015 - November 2018</p>
              </v-col>
            </v-row>

            <v-row justify="space-between">
              <v-col cols="1"></v-col>
              <v-col cols="5" class="text-left h5 pl-0">
                <p class="font-weight-black">Data Analyst</p>
                <p class="font-italic">Drecom Inc.</p>
              </v-col>
              <v-col cols="5" class="text-center h5 pl-0">
                <p>Tokyo Japan</p>
                <p>April 2014 - January 2015</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>
