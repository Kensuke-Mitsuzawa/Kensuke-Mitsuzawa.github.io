<template>
<v-row class="mt-6">
      <v-col cols="12">
        <p class="h2 text-center text-decoration-underline mb-6">
          <v-icon large color="grey darken-3" class="mr-2">fas fa-language</v-icon>
          Languages
        </p>
      </v-col>

      <v-col cols="12">
        <v-row justify="center">

          <v-col
            v-for="(lang, i) in languages"
            :key="i"
            cols="12"
            sm="6"
            md="2"
            lg="2"
          >
            <v-card class="fill-height" elevation="2" outlined>
              <v-card-text class="text-center pa-3">

                <div class="mb-2">
                  <v-chip
                    small
                    :color="lang.color"
                    text-color="white"
                    class="font-weight-bold"
                  >
                    {{ lang.level }}
                  </v-chip>
                </div>

                <div class="h4 font-weight-bold mb-1 grey--text text--darken-3">
                  {{ lang.name }}
                </div>

                <div class="caption grey--text mb-3" style="height: 20px;">
                  {{ lang.desc }}
                </div>

                <v-progress-linear
                  :value="lang.percent"
                  :color="lang.color"
                  height="6"
                  rounded
                ></v-progress-linear>

              </v-card-text>
            </v-card>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  <!-- <v-card class="mx-auto" color="white" max-width="1500" elevation="0">
    <p class="h2 text-center">
      <v-icon large=true>fas fa-language</v-icon>&nbsp;{{ $t('languages.title') }}
    </p>
    <v-layout text-xs-center px-3 py-3 row wrap>
      <v-flex text-center lg4 sm12 xs12>
        <v-progress-circular :value="100" :width="20" size="150" color="teal">
          <div class="circle-text">
            <span>{{ $t('languages.japanese_name') }}</span>
            <div class="circle-text-second">
              <span>({{ $t('languages.japanese_exp') }})</span>
            </div>
          </div>
        </v-progress-circular>
      </v-flex>

        <v-flex text-center lg4 sm12 xs12>
          <v-progress-circular :value="100" :width="20" size="150" color="deep-orange lighten-2">
            <div class="circle-text">
            <span>{{ $t('languages.english_name') }}</span>
            <div class="circle-text-second">
              <span>({{ $t('languages.english_exp') }})</span>
            </div>
          </div>
          </v-progress-circular>
        </v-flex>

        <v-flex text-center lg4 sm12 xs12>
          <v-progress-circular :value="60" :width="20" size="150" color="brown">
            {{ $t('languages.german_name') }}
            <br />({{ $t('languages.german_exp') }})
          </v-progress-circular>
        </v-flex>

        <v-flex text-center lg4 sm12 xs12>
          <v-progress-circular :value="30" :width="20" size="150" color="lime">
            {{ $t('languages.french_name') }}
            <br />({{ $t('languages.french_exp') }})
          </v-progress-circular>
        </v-flex>

        <v-flex text-center lg4 sm12 xs12>
          <v-progress-circular :value="20" :width="20" size="150" color="indigo darken-2">
            {{ $t('languages.persian_name') }}
            <br />({{ $t('languages.persian_exp') }})
          </v-progress-circular>
        </v-flex>
    </v-layout>
  </v-card> -->
</template>


<script>
</script>


<style scoped>
/* for font settings */
@import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
/* for japanese */
@import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap');

/* font gaegu */
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: cursive;
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

/* For circle text */

.circle-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 20px; /* Adjust as needed */
}

.circle-text-second {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 12px; /* Adjust as needed */
}

.circle-text span {
  display: block;
}

</style>

<script>
export default {
  data() {
    return {
      languages: [
        {
          name: 'Japanese',
          level: 'Native',
          desc: 'Native Speaker',
          percent: 100,
          color: 'teal darken-1'
        },
        {
          name: 'English',
          level: 'Business',
          desc: 'Daily Professional Use',
          percent: 90,
          color: 'blue darken-2'
        },
        {
          name: 'German',
          level: 'B2',
          desc: 'Intermediate',
          percent: 65,
          color: 'orange darken-2'
        },
        {
          name: 'French',
          level: 'B1',
          desc: 'Lower Intermediate',
          percent: 45,
          color: 'lime darken-2'
        },
        {
          name: 'Persian',
          level: 'A1',
          desc: 'Beginner',
          percent: 20,
          color: 'grey'
        }
      ]
    }
  }
};
</script>
