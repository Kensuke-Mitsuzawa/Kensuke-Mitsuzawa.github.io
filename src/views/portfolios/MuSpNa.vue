<template>
    <v-app>
    <vue-headful title="Kensuke Mitsuzawa | Portfolio Hub" />
    <HeaderBar />

    <v-container class="py-10">
        <h1 class="text-h3 font-weight-bold mb-2">MuSpNa</h1>
        <v-chip color="red lighten-4" text-color="red darken-4" label small class="mb-6">Legacy Project (Closed)</v-chip>

        <v-row>
        <v-col cols="12" md="7">
            <h2 class="text-h4 mb-4">Project Purpose</h2>
            <p>MuSpNa was a serverless web application designed to assist language learners in reading foreign texts by providing automated grammatical hints and entity wikification.</p>

            <v-card outlined class="pa-6 mt-6 blue-grey lighten-5">
            <h3 class="text-h5 mb-4">Serverless Architecture</h3>

            <p>The entire platform was built on <strong>AWS Serverless</strong> architecture to ensure zero-cost scaling and minimal maintenance.</p>
            <v-row>
                <v-col cols="6">
                <strong>Backend:</strong> Flask + AWS Lambda<br>
                <strong>Frontend:</strong> Vue.js + S3 Static Hosting
                </v-col>
                <v-col cols="6">
                <strong>Database:</strong> DynamoDB + Elasticsearch<br>
                <strong>Processing:</strong> ECS + Lambda
                </v-col>
            </v-row>
            </v-card>
        </v-col>

        <v-col cols="12" md="5">
            <v-img
            src="https://user-images.githubusercontent.com/1772712/89827543-08d4f300-db58-11ea-9240-d438f41025e2.gif"
            class="rounded-lg elevation-2"
            alt="MuSpNa Demo"
            ></v-img>
            <p class="caption text-center mt-2">Interactive entity extraction and translation demo.</p>
        </v-col>
        </v-row>

        <v-row class="mt-10">
        <v-col cols="12">
            <h2 class="text-h4 mb-4">Technical Achievement</h2>
            <p>Implemented a custom <strong>Wikification</strong> engine using `word2vec-wikification-py` to link text segments to Wikipedia entities in real-time.
                This project demonstrated the ability to handle high-concurrency background NLP tasks using AWS Lambda and ECS Batch jobs.</p>
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
};
</script>
