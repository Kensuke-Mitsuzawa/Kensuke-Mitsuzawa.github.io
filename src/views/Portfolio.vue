<template>
  <v-app>
    <vue-headful title="Portfolio of Kensuke Mitsuzawa" description=" " />
    <HeaderBar></HeaderBar>
    <v-main>
      <div class="mx-8">
      <v-layout justify-center align-center px-3 py-3 row wrap>
        <v-flex text-center lg4 sm12 xs12>
          <p class="text-h4 hidden-md-and-up">Portfolios</p>
          <div id="section-GIS">
            <p class="text-h4 font-italic text-center display-1 text--primary text-decoration-underline">GIS Analysis</p>
            <router-link to="/portfolio-gis">Projects related to GIS</router-link>
            <p></p>
          </div>
          <!-- ==================================== -->
           <v-col cols="auto">
            <v-divider></v-divider>
          </v-col>
          <!-- ==================================== -->
          <div id="section-service">
            <p
              class="text-h4 font-italic text-center display-1 text--primary text-decoration-underline"
            >Web Service</p>
          </div>
          <v-card color="white" max-width="1500" elevation="0">
            <v-row align="center" justify="center">
              <v-col cols="auto">
                <p class="text-h5 display-1 text--primary">MuSpNa</p>
                <!-- <a href="https://www.mu-sp-na.tk/">URL</a> -->
                <div
                  class="text--primary"
                >
                <p>A web application to help a language learner develop reading abilities.</p>
                <p>Language learners could understand foreign texts with the supports of translations and grammatical hints.</p>
                <p>This service is closed already.</p>
                </div>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="auto">
                <v-img
                max-height="400"
                max-width="600"
                src="https://user-images.githubusercontent.com/1772712/89827543-08d4f300-db58-11ea-9240-d438f41025e2.gif">
                </v-img>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col>
                <v-expansion-panels flat=true>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <p class="text-center">
                        <v-icon>far fa-hand-point-right</v-icon>&nbsp;Technology stack for MuSpNa
                      </p>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>The architecture of MuSpNa is all server-less on AWS.</p>
                      <p class="text-h6 text-center">[Batch jobs]</p>
                      <p>ECS, AWS lambda, S3, Elastic Search.</p>
                      <p>Source codes for information extraction are full-scratch.</p>
                      <p class="text-h6 text-center">[Webapp backend]</p>
                      <p>Flask, AWS lambda, S3 and DynamoDB.</p>
                      <p class="text-h6 text-center">[Frontend]</p>
                      <p>Vue.js</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-card>
          <!-- ==================================== -->
           <v-col cols="auto">
            <v-divider></v-divider>
          </v-col>
          <!-- ==================================== -->
          <div id="section-python">
            <p
              class="text-h4 font-italic text-center display-1 text--primary text-decoration-underline"
            >Python packages</p>
          </div>
          <v-card color="white" max-width="1500" elevation="0">
            <v-col cols="auto">
              <p class="text-h5 display-1 text--primary">JapaneseTokenizer</p>
              <div
                class="text--primary"
              >A package to provide an easy interface for various japanese tokenizers.</div>
              <p>
                <a href="https://github.com/Kensuke-Mitsuzawa/JapaneseTokenizers">On Github</a>&nbsp;
                <a href="https://pypi.org/project/JapaneseTokenizer/">On Pypi</a>
              </p>
            </v-col>
          </v-card>
          <v-card color="white" max-width="1500" elevation="0">
            <v-col cols="auto">
              <p class="text-h5 display-1 text--primary">DocumentFeatureSelection</p>
              <div
                class="text--primary"
              >A Package to compute weight on features. This is crucial for classical NLP.</div>
              <p>
                <a href="https://github.com/Kensuke-Mitsuzawa/DocumentFeatureSelection">On Github</a>&nbsp;
                <a href="https://pypi.org/project/DocumentFeatureSelection/">On Pypi</a>
              </p>
            </v-col>
          </v-card>
          <v-card color="white" max-width="1500" elevation="0">
            <v-col cols="auto">
              <p class="text-h5 display-1 text--primary">word2vec-wikification-py</p>
              <div class="text--primary">
                A package to run wikification on text data.
                <br />The wikification is an operation to find proper entities that are described in texts.
              </div>
              <p>
                <a href="https://github.com/Kensuke-Mitsuzawa/word2vec-wikification-py">On Github</a>&nbsp;
                <a href="https://pypi.org/project/word2vec-wikification-py/">On Pypi</a>
              </p>
            </v-col>
          </v-card>
          <v-card color="white" max-width="1500" elevation="0">
            <v-col cols="auto">
              <p class="text-h5 display-1 text--primary">knp-utils</p>
              <div
                class="text--primary"
              >A support package to call KNP which is a robust Japanese dependency parser.</div>
              <p>
                <a href="https://github.com/Kensuke-Mitsuzawa/knp-utils-py">On Github</a>&nbsp;
                <a href="https://pypi.org/project/knp-utils/">On Pypi</a>
              </p>
            </v-col>
          </v-card>
          <v-card color="white" max-width="1500" elevation="0">
            <v-row align="center" justify="center">
              <v-col cols="auto">
                <p class="text-h5 display-1 text--primary">flexible_clustering_tree</p>
                <div class="text--primary">A package to design and run recursive clusterings.</div>
                <p>
                  <a href="https://github.com/Kensuke-Mitsuzawa/flexible_clustering_tree">On Github</a>&nbsp;
                  <a href="https://pypi.org/project/flexible-clustering-tree/">On Pypi</a>
                </p>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <p>This is one example of clustering.</p>
              <p>The input dataset is 20-newsdataset.</p>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="auto">
                <v-img
                  max-height="200"
                  max-width="300"
                  src="https://user-images.githubusercontent.com/1772712/47308081-9980cd00-d66b-11e8-98c0-a275db021cd7.gif"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
          <v-card color="white" max-width="1500" elevation="0">
            <v-col cols="auto">
              <p class="text-h5 display-1 text--primary">sumo-output-parsers</p>
              <div
                class="text--primary"
              >A postprocessing package of SUMO XML files. The package converts complicated XML into matrices with one command.</div>
              <p>
                <a href="https://github.com/Kensuke-Mitsuzawa/sumo_docker_pipeline">On Github</a>&nbsp;
                <a href="https://pypi.org/project/sumo-output-parsers/">On Pypi</a>
              </p>
            </v-col>
          </v-card>
          <v-card color="white" max-width="1500" elevation="0">
            <v-col cols="auto">
              <p class="text-h5 display-1 text--primary">sumo-docker-pipeline</p>
              <div
                class="text--primary"
              >A wrapper package for a traffic simulator, SUMO. The package lets call SUMO by Python without any difficulties of installing SUMO, thanks to Docker.</div>
              <p>
                <a href="https://github.com/Kensuke-Mitsuzawa/sumo_docker_pipeline">On Github</a>&nbsp;
                <a href="https://pypi.org/project/sumo-docker-pipeline/">On Pypi</a>
              </p>
            </v-col>
          </v-card>
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
