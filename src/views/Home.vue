<template>
  <v-app>
    <vue-headful title="CV Kensuke Mitsuzawa" description=" " />
    <HeaderBar></HeaderBar>
    <v-main>
      <!-- picture -->
      <v-layout text-xs-center px-3 py-3 row wrap>
        <v-flex>
        <div class="mx-5">  <!-- margin in width with 20px -->
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <v-img
              max-width="500"
              max-height="800"
              src="/profile_page/profile_photo.jpg"></v-img>
            </v-col>
          </v-row>
          </div>
          <!-- language selector -->
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <button @click="changeLocaleToEn">
                <country-flag country="gb" size="normal" />
              </button>
              <button @click="changeLocaleToJa">
                <country-flag country="jp" size="normal" />
              </button>
              <!-- <button @click="changeLocaleToDe">
                <country-flag country="de" size="normal" />
              </button>  -->
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>

      <div class="mx-8">
      <!-- abstract/self-Introduction text -->
      <div id="research topics" class="text-center">
        <p class="h3 text-decoration-underline">Current Research Topics</p>
        <p>Hallucination detection for Large Langugae Models (LLMs), Maximum Mean Discrepancy, Explainable AI</p>
      </div>
      <div id="abstract">
        <v-expansion-panels flat=true>
          <v-expansion-panel>
            <v-expansion-panel-header>
            <p class="h2 text-center">
            <v-icon>far fa-hand-point-right</v-icon>&nbsp;Self Introduction
            </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
            <AbstractSection></AbstractSection>
            </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
      </div>
      <v-col cols="auto"><v-divider></v-divider></v-col>
      <DigitalSkills></DigitalSkills>
      <v-col cols="auto"><v-divider></v-divider></v-col>
      <Languages></Languages>
      <v-col cols="auto"><v-divider></v-divider></v-col>
      <Education></Education>
      <v-col cols="auto"><v-divider></v-divider></v-col>
      <WorkExperience></WorkExperience>
      <v-col cols="auto"><v-divider></v-divider></v-col>
      <Contact></Contact>
      </div>
      <router-view />
    </v-main>
    <v-footer color="black" dark app></v-footer>
  </v-app>
</template>

<script>
import AbstractSection from '@/views/Abstract';
import DigitalSkills from '@/views/DigitalSkills';
import Languages from '@/views/Languages';
import Education from '@/views/Education';
import WorkExperience from '@/views/WorkExperience';
import Contact from '@/views/Contact';
import HeaderBar from '@/views/HeaderBar';

export default {
  name: 'App',
  components: {
    AbstractSection,
    DigitalSkills,
    Languages,
    Education,
    WorkExperience,
    Contact,
    HeaderBar,
  },
  data() {
    return {
      drawer: null,
      feed_name_objects: [],
      loading: true,
      signedIn: false,
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    changeLocaleToJa: function() {
      this.$i18n.locale = 'jp';
    },
    changeLocaleToEn: function() {
      this.$i18n.locale = 'en';
    },
    /** changeLocaleToDe: function() {
      this.$i18n.locale = 'de';
    }, **/
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
/* for japanese */
@import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap');

/* font gaegu */
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: cursive;
}


/* For PC */
.normal-font {
  font-family: cursive, sans-serif;
  font-size: 20px;
}


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

  .normal-font {
    font-family: cursive, sans-serif;
    font-size: 20px;
  }
}

</style>
