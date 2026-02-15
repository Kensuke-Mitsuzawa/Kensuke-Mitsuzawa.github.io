<template>
    <v-app>
    <vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
    <HeaderBar />

    <v-container class="py-10">
      <h1 class="text-h3 font-weight-bold mb-4">Python OSS Library</h1>
      <p class="subtitle-1 mb-10 grey--text text--darken-2">
        A collection of specialized Python packages for Japanese NLP, traffic simulation, and statistical analysis.
        Most are available via <strong>PyPI</strong> and optimized for production performance.
      </p>

      <v-row>
        <v-col cols="12" v-for="(pkg, index) in packages" :key="index" class="mb-4">
          <v-card outlined class="pa-4 rounded-lg hover-card">
            <v-row align="center">

              <v-col cols="12" md="4">
                <div class="d-flex align-center">
                  <v-icon color="green darken-2" class="mr-3">mdi-package-variant-closed</v-icon>
                  <span class="text-h5 font-weight-bold">{{ pkg.name }}</span>
                </div>
                <div class="mt-2">
                  <a :href="pkg.pypi" target="_blank" class="mr-2">
                    <img :src="`https://img.shields.io/pypi/v/${pkg.name_pypi}?color=blue&style=flat-square`" alt="PyPI version">
                  </a>
                  <a :href="pkg.github" target="_blank">
                    <img :src="`https://img.shields.io/github/stars/${pkg.github_path}?style=flat-square&color=gold`" alt="Github Stars">
                  </a>
                </div>
              </v-col>

              <v-col cols="12" md="6">
                <p class="mb-2">{{ pkg.description }}</p>
                <v-chip v-for="tag in pkg.tags" :key="tag" x-small label class="mr-1 grey lighten-3">
                  {{ tag }}
                </v-chip>
              </v-col>

              <v-col cols="12" md="2" class="text-right">
                <v-btn icon :href="pkg.github" target="_blank"><v-icon>mdi-github</v-icon></v-btn>
                <v-btn icon :href="pkg.pypi" target="_blank"><v-icon color="blue">mdi-python</v-icon></v-btn>
              </v-col>

            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-app>
</template>

<script>
import HeaderBar from '@/views/HeaderBar';


export default {
  name: 'App',
  components: {
    HeaderBar,
  },
  data() {
    return {
      packages: [
        {
          name: "JapaneseTokenizer",
          name_pypi: "JapaneseTokenizer",
          github_path: "Kensuke-Mitsuzawa/JapaneseTokenizers",
          description: "A unified interface for various Japanese morphological analyzers (MeCab, Juman++, Sudachi, etc.).",
          tags: ["NLP", "Tokenization", "Japanese"],
          github: "https://github.com/Kensuke-Mitsuzawa/JapaneseTokenizers",
          pypi: "https://pypi.org/project/JapaneseTokenizer/",
        },
        {
          name: "DocumentFeatureSelection",
          name_pypi: "DocumentFeatureSelection",
          github_path: "Kensuke-Mitsuzawa/DocumentFeatureSelection",
          description: "Statistical feature selection for classical NLP. Implements Information Gain, Chi-square, and more.",
          tags: ["Statistics", "NLP", "Feature Engineering"],
          github: "https://github.com/Kensuke-Mitsuzawa/DocumentFeatureSelection",
          pypi: "https://pypi.org/project/DocumentFeatureSelection/",
        },
        {
          name: "knp-utils",
          name_pypi: "knp-utils",
          github_path: "Kensuke-Mitsuzawa/knp-utils-py",
          description: "High-level wrapper for KNP (Japanese Dependency Parser) to simplify tree structure extraction.",
          tags: ["NLP", "Parsing", "Japanese"],
          github: "https://github.com/Kensuke-Mitsuzawa/knp-utils-py",
          pypi: "https://pypi.org/project/knp-utils/",
        },
        {
          name: "sumo-output-parsers",
          name_pypi: "sumo-output-parsers",
          github_path: "Kensuke-Mitsuzawa/sumo_docker_pipeline",
          description: "Converts complex SUMO traffic simulation XML outputs into structured Pandas matrices.",
          tags: ["Data Engineering", "XML", "Simulation"],
          github: "https://github.com/Kensuke-Mitsuzawa/sumo-output-parsers",
          pypi: "https://pypi.org/project/sumo-output-parsers/",
        },
        {
          name: "sumo-docker-pipeline",
          name_pypi: "sumo-docker-pipeline",
          github_path: "Kensuke-Mitsuzawa/sumo-docker-pipeline",
          description: "A wrapper package for a traffic simulator, SUMO.",
          tags: ["Data Engineering", "XML", "Simulation"],
          github: "https://github.com/Kensuke-Mitsuzawa/sumo_docker_pipeline",
          pypi: "https://pypi.org/project/sumo-docker-pipeline/",
        },
        {
          name: "word2vec-wikification-py",
          name_pypi: "word2vec-wikification-py",
          github_path: "Kensuke-Mitsuzawa/word2vec-wikification-py",
          description: "A package to run wikification on text data. The wikification is an operation to find proper entities that are described in texts.",
          tags: ["NLP"],
          github: "https://github.com/Kensuke-Mitsuzawa/word2vec-wikification-py",
          pypi: "https://pypi.org/project/word2vec-wikification-py/",
        },
        {
          name: "flexible_clustering_tree",
          name_pypi: "flexible-clustering-tree",
          github_path: "Kensuke-Mitsuzawa/flexible_clustering_tree",
          description: "A package to design and run recursive clusterings.",
          tags: ["NLP"],
          github: "https://github.com/Kensuke-Mitsuzawa/flexible_clustering_tree",
          pypi: "https://pypi.org/project/flexible-clustering-tree/",
        },
        // ... add the rest of your packages here
      ],
    };
  },
};
</script>

<style scoped>
.hover-card:hover {
  border-color: #2E7D32 !important; /* Green darken-3 */
  background-color: #F1F8E9; /* Very light green */
  transition: 0.3s;
}
</style>
