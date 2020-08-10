<template>
  <v-app>
    <vue-headful title="Portfolio of Kensuke Mitsuzawa" description=" " />
    <HeaderBar></HeaderBar>
    <v-main>
    <v-layout justify-center align-center px-3 py-3 row wrap>
      <v-flex lg4 sm12 xs12>
        <div id="section-service">
          <p
            class="text-h3 text-center display-1 text--primary text-decoration-underline"
          >Web Service</p>
        </div>
        <v-card color="white" max-width="1500" elevation="0">
          <v-row align="center" justify="center">
          <v-col cols="auto">
            <p class="display-1 text--primary">MuSpNa</p>
            <a href="https://www.mu-sp-na.tk/">URL</a>
            <div
              class="text--primary"
            >A web application to help a language learner develop reading abilities.</div>
          </v-col>
          </v-row>
                    <v-row align="center" justify="center">
            <v-col cols="auto">
              <img
                height="400"
                width="500"
                src="https://user-images.githubusercontent.com/1772712/89775801-d6e87000-db08-11ea-8df3-439dba8aa0d1.gif"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col>
              <p class="text-h5 text-center text-decoration-underline">Technology stacks for MuSpNa</p>
              <p>The architecture of MuSpNa is all server-less on AWS.</p>
              <p class="text-h6 text-center">[Batch jobs]</p>
              <p>ECS, AWS lambda, S3, Elastic Search.</p>
              <p>Source codes for information extraction are full-scratch.</p>
              <p class="text-h6 text-center">[Webapp backend]</p>
              <p>AWS lambda, S3 and DynamoDB.</p>
              <p class="text-h6 text-center">[Frontend]</p>
              <p>Vue.js</p>
            </v-col>
          </v-row>
        </v-card>
        <div id="section-python">
          <p
            class="text-h3 text-center display-1 text--primary text-decoration-underline"
          >Python packages</p>
        </div>
        <v-card color="white" max-width="1500" elevation="0">
          <v-col cols="auto">
            <p class="display-1 text--primary">JapaneseTokenizer</p>
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
            <p class="display-1 text--primary">DocumentFeatureSelection</p>
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
            <p class="display-1 text--primary">word2vec-wikification-py</p>
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
            <p class="display-1 text--primary">knp-utils</p>
            <div
              class="text--primary"
            >A support package to call KNP that is a powerful japanese dependency parser.</div>
            <p>
              <a href="https://github.com/Kensuke-Mitsuzawa/knp-utils-py">On Github</a>&nbsp;
              <a href="https://pypi.org/project/knp-utils/">On Pypi</a>
            </p>
          </v-col>
        </v-card>
        <v-card color="white" max-width="1500" elevation="0">
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <p class="display-1 text--primary">flexible_clustering_tree</p>
              <div class="text--primary">A package to design and run recursive clusterings.</div>
              <p>
                <a href="https://github.com/Kensuke-Mitsuzawa/flexible_clustering_tree">On Github</a>&nbsp;
                <a href="https://pypi.org/project/flexible-clustering-tree/">On Pypi</a>
              </p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <p>This is one example of clustering. The input dataset is 20-newsdataset.</p>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <img
                height="200"
                width="300"
                src="https://user-images.githubusercontent.com/1772712/47308081-9980cd00-d66b-11e8-98c0-a275db021cd7.gif"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
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
