<template>
    <v-app>
        <vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
        <HeaderBar />

        <v-container class="py-10">
            <v-row>
            <v-col cols="12" md="8">
                <h1 class="text-h3 font-weight-bold mb-4">LangDiaryAgentic</h1>
                <p class="text-h6 grey--text text--darken-2">
                A privacy-first, Agentic RAG platform for language learners.
                </p>
            </v-col>
            <v-col cols="12" md="4" class="text-right">
                <v-btn color="black" dark href="https://github.com/Kensuke-Mitsuzawa/showcase-LangDiaryAgentic" target="_blank">
                <v-icon left>mdi-github</v-icon> View Repository
                </v-btn>
            </v-col>
            </v-row>

            <v-divider class="my-6"></v-divider>

            <v-row>
            <v-col cols="12" md="6">
                <h2 class="text-h4 mb-4">The Challenge</h2>
                <p>Language learners often struggle with the "vocabulary gap"—the space between what they want to say and the words they actually know.
                    Traditional diaries don't provide feedback, and cloud-based AI tools raise privacy concerns for personal journals.</p>

                <h2 class="text-h4 mt-8 mb-4">The Solution</h2>
                <p>I developed an <strong>Agentic RAG pipeline</strong> that runs entirely locally.
                    It allows "Code-Switching" (mixing languages) and uses a multi-stage agent to translate, correct grammar, and retrieve personal error history to provide context-aware coaching.</p>
            </v-col>

            <v-col cols="12" md="6">
                <v-card outlined class="pa-4 grey lighten-5">
                <h3 class="text-h5 mb-3">Key Technical Features</h3>
                <v-list dense class="transparent">
                    <v-list-item>
                    <v-list-item-icon><v-icon color="blue">mdi-check-circle</v-icon></v-list-item-icon>
                    <v-list-item-content><strong>Local Inference:</strong> Powered by Ollama/llama.cpp.</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-icon><v-icon color="blue">mdi-check-circle</v-icon></v-list-item-icon>
                    <v-list-item-content><strong>Hybrid Memory:</strong> ChromaDB for vectors, DuckDB for entries.</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-icon><v-icon color="blue">mdi-check-circle</v-icon></v-list-item-icon>
                    <v-list-item-content><strong>Agentic Logic:</strong> Multi-step reasoning via LangGraph.</v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-card>
            </v-col>
            </v-row>

            <v-row class="mt-10">
            <v-col cols="12">
                <h2 class="text-h4 mb-6 text-center">System Architecture</h2>

                <div class="d-flex justify-center mt-6">
                <video width="80%" controls class="rounded-xl elevation-3">
                    <source src="/portfolio/LangDiaryAgentic.mp4" type="video/mp4">
                </video>
                </div>
            </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>


<script>
import HeaderBar from "@/views/HeaderBar";

export default {
  name: "App",
  components: {
    HeaderBar,
  },
};
</script>

<style scoped>
.videotag{
    position: relative;
    top: 0;
    bottom: 1vw;
    width: 50%;
    height: 50%;
    outline: none;
}
</style>
