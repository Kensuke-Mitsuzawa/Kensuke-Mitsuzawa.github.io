<template>
  <v-app>
    <vue-headful title="Portfolio of Kensuke Mitsuzawa" description=" " />
    <HeaderBar></HeaderBar>
    <v-main>
      <div class="mx-8">
      <v-layout justify-center align-center px-3 py-3 row wrap>
        <v-flex text-center lg4 sm12 xs12>
          <!-- ==================================== -->
          <div id="" class="gaegu-font">
          <v-card color="white" max-width="1500" elevation="0">
            <v-row align="center" justify="center">
              <v-col cols="auto">
              <p class="h1"><u>Traffic Simulation and Visualization Project</u></p>
              <p>Traffic Simulation lets us know solutions for traffic congestion and air pollution.</p>
              <p>OSS traffic simulator, <a target="_blank" href="https://sumo.dlr.de/docs/index.html">SUMO</a>, is a well-known and often used simulator.</p>
              <p>Yet, SUMO has difficulties in sharing simulation results/visualizations in a "modern" and "easy" way.</p>
              <p>I utilized GIS visualization tools and provided modern and easy visualization and sharing.</p>
              </v-col>
            </v-row>
            <!-- ==================================== -->
            <v-row align="center" justify="center">
                <p><u>GIS screenshot</u></p>
                <v-col cols="auto">
                <v-img
                max-height="400"
                max-width="600"
                src="/gis-example-kepler.gl.png">
                </v-img>
              </v-col>
            </v-row>
            <!-- ==================================== -->
            <v-row align="center" justify="center">
                <p><u>Interactive maps are available!</u></p>
                <p></p>
                <p><a
                target="_blank"
                href="https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/n6aantykuy5k9zwdzdd6b/keplergl_kz98r7p.json?rlkey=i6muwngz7obmo825t4vkqgyzp&dl=0">
                Standard Traffic Scenario</a></p>
                <p><a
                target="_blank"
                href="https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/64f2wiv66ie3hxm7u8900/keplergl_z3dupu.json?rlkey=qiru4fhevhojb9u6co04dofy7&dl=0">
                Highway Blocking Scenario</a></p>
                <p></p>
            </v-row>
            <!-- ==================================== -->
            <v-row align="center" justify="center">
                <p><u>Study Area</u></p>
                <p></p>
                <p>I used the sophisticated calibrated OSS scenario
                <a target="_blank" href="https://github.com/lcodeca/MoSTScenario">"MoST"</a>.</p>
                <p>The simulation study area is in south France.
                The centre of the scenario is Monaco,
                including <a
                target="_blank"
                href="https://www.google.de/maps/place/06360+%C3%88ze,+France/@43.7295153,7.3333033,12.91z
                /data=!4m6!3m5!1s0x12cdc36149af4541:0x40819a5fd979c40!8m2!3d43.7278189!4d7.361792!16zL20vMDkybXl0?entry=ttu">Ezé, France</a>
                and <a
                target="_blank"
                href="https://www.google.de/maps/place/06190+Roquebrune-Cap-Martin,+France/@43.7638742,7.3099412,12z
                /data=!3m1!4b1!4m15!1m8!3m7!1s0x12cdc36149af4541:0x40819a5fd979c40!2s06360+%C3%88ze,+France!3b1!8m2!3d43.7278189!4d7.361792!16zL20vMDkybXl0!
                3m5!1s0x12cde999c102ce85:0x23682a842cf14aa0!8m2!3d43.757808!4d7.473754!16zL20vMDRoNnBr?entry=ttu">Roquebrune-Cap-Martin, France.</a>
                </p>
                <p>The scenario simulates traffic circulation from an early morning time(4 a.m.) until noon (12:30).</p>
            </v-row>
            <!-- ==================================== -->
            <v-row align="center" justify="center">
                <p><u>Features</u></p>
                <p></p>
                <p>Infomative tooltip. Google Map link is too.</p>
                <p>Even though unfamiliar with the study area, Google Map provides intuitive and interactive GUI for understanding the area.</p>
                <v-col cols="auto">
                <v-img
                max-height="400"
                max-width="600"
                src="/gis-example-feature-tooltip.png">
                </v-img>
                </v-col>
                <p>Timeslide for understanding time-flow.</p>
                <v-col cols="auto">
                <v-img
                max-height="400"
                max-width="600"
                src="/gis-example-feature-timeslide.png">
                </v-img>
                </v-col>
            </v-row>
            <!-- ==================================== -->
            <v-row align="center" justify="center">
              <v-col>
                <v-expansion-panels flat=true>
                  <v-expansion-panel>
                  <v-expansion-panel-header>
                  <p class="text-center">
                  <v-icon>far fa-hand-point-right</v-icon>&nbsp;Technology stack</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                <p><u>Simulation</u></p>
                    <p>Sumo, TraCI</p>
                <p><u>Visualization</u></p>
                    <p>Kepler.gl</p>
                <p><u>Data Processing</u></p>
                    <p>Python</p>
                <p>Codebase is on <a target="_blank" href="https://github.com/Kensuke-Mitsuzawa/sumo-sim-monaco-scenario">Github</a>.</p>
                </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-card>
          </div>
        </v-flex>
        </v-layout>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from '@/views/HeaderBar';

export default {
  name: 'App',
  components: {
    HeaderBar,
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
/* for japanese */
@import url('https://fonts.googleapis.com/css2?family=Slackside+One&display=swap');

/* font gaegu */
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: 'Gaegu', cursive;
}


/* For PC */
.gaegu-font {
  font-family: 'Gaegu', cursive, sans-serif;
  font-size: 20px;
}

/* For mobile: */
@media only screen and (max-width: 600px) {
  .gaegu-font {
    font-family: 'Gaegu', cursive, sans-serif;
    font-size: 16px;
  }
}
</style>
