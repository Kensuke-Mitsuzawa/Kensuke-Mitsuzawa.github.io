<template>
  <v-card class="mx-auto" color="white" max-width="1500" elevation="0">
    <p class="text-h3 text-center text-decoration-underline">Digital skills</p>
    <!-- Programming language -->
    <v-card class="mx-auto" color="white" max-width="1400" flat="false" elevation="0">
      <p class="text-h4 text-center">
        <v-icon>fas fa-laptop</v-icon>
        &nbsp;{{ $t('digital_skills.title_programming') }}
      </p>
      <div id="progress-python">
        <v-progress-linear
          value="90"
          height="20"
          background-color="blue lighten-3"
          color="blue lighten-1"
        >
          <div>Python</div>
        </v-progress-linear>
        <v-expansion-panels flat="true">
          <v-expansion-panel>
            <v-expansion-panel-header><p><v-icon>far fa-hand-point-right</v-icon>&nbsp;skillsets</p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-center">Packaging,<br>
              Web app&nbsp;(Flask, Django),<br>
              natural language processing&nbsp;(for Japanese, English, German),<br>
              machine learning&nbsp;(scikit-learn etc.),<br>
              deep learning&nbsp;(chainer, tensorflow, Theano, pytorch),<br>
              Data analysis script&nbsp;(Jupyter notebook),<br>
              Data visualization,<br>
              Code optimization&nbsp;(Cython)<br>
              Tsunami Simulation&nbsp;(Clawpack-5)
            </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div id="progress-R">
        <v-progress-linear
          value="70"
          height="20"
          background-color="green lighten-3"
          color="green lighten-1"
        >
          <div>R</div>
        </v-progress-linear>
        <v-expansion-panels flat="true">
          <v-expansion-panel>
            <v-expansion-panel-header>
              <p><v-icon>far fa-hand-point-right</v-icon>&nbsp;skillsets</p>
              </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-center">
              data analysis script,<br>
              reporting system(Rmd),<br>
              Webapp(shiny),<br>
              Data visualization,<br>
              machine learning
            </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div id="progress-bash">
        <v-progress-linear
          value="60"
          height="20"
          background-color="red lighten-3"
          color="red lighten-1"
        >
          <div>Bash</div>
        </v-progress-linear>
        <v-expansion-panels flat="true">
          <v-expansion-panel>
            <v-expansion-panel-header>
              <p><v-icon>far fa-hand-point-right</v-icon>&nbsp;skillsets</p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-center">batch script</p></v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div id="progress-javascript">
        <v-progress-linear
          value="50"
          height="20"
          background-color="orange lighten-3"
          color="orange lighten-1"
        >
          <div>Javascript</div>
        </v-progress-linear>
        <v-expansion-panels flat="true">
          <v-expansion-panel>
            <v-expansion-panel-header>
              <p><v-icon>far fa-hand-point-right</v-icon>&nbsp;skillsets</p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-center">
              Data visualization(D3.js, C3.js),<br>
              Jquery,<br>
              Vue.JS&nbsp;(this page is compiled with Vue.js)
              </p>
              </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div id="progress-c">
        <v-progress-linear
          value="20"
          height="20"
          background-color="blue lighten-3"
          color="blue lighten-1"
        >
          <div>C/C++</div>
        </v-progress-linear>
        <v-expansion-panels flat="true">
          <v-expansion-panel>
            <v-expansion-panel-header>
              <p><v-icon>far fa-hand-point-right</v-icon>&nbsp;skillsets</p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-center">
              implementation of mathmatical operation for basic algorithm
              </p></v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-card>
    <!-- Technical Skillsets -->
    <v-card class="mx-auto" color="white" max-width="1400" elevation="0">
      <p class="text-h4 text-center">
        <v-icon>fas fa-database</v-icon>&nbsp;databases
      </p>
      <p class="text-center">MySQL, Postgresql, Redis, SQLite3, MongoDB, ElasticSearch</p>
    </v-card>
    <v-card class="mx-auto" color="white" max-width="1400" elevation="0">
      <p class="text-h4 text-center">
        <v-icon>fas fa-cloud</v-icon>&nbsp;cloud computings
      </p>
      <p class="text-center">AWS, GCP, Azure</p>
    </v-card>

    <v-card class="mx-auto" color="white" max-width="1400" elevation="0">
      <p class="text-h4 text-center">
        <v-icon>fas fa-desktop</v-icon>&nbsp;OS
      </p>
      <p class="text-center">Linux, MacOS, Windows</p>
    </v-card>

    <v-card class="mx-auto" color="white" max-width="1400" elevation="0">
      <p class="text-h4 text-center">
        <v-icon>fas fa-toolbox</v-icon>&nbsp;other tools
      </p>
      <div class="text-center">
      <ul style="list-style: none;">
        <li>continuous integration tool: Jenkins, Circle-ci, Travis</li>
        <li>Development tools: Pycharm, vim, git, Docker, Apache</li>
        <li>Business tools: MS office, Google office tools, Atlassian confluence</li>
        <li>Communication tools: Slack</li>
      </ul>
      </div>
    </v-card>
  </v-card>
</template>
<script>
export default {};
</script>
