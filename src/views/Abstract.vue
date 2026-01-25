<template>
  <v-layout justify-center align-center>
    <v-flex text-center>
      <v-card class="auto" color="white" elevation="0">
        <div>
          <p v-html="$i18n.t('abstract.brief_title')"></p>
          <p v-html="$i18n.t('abstract.introduction')"></p>
          <p v-html="$i18n.t('abstract.work_experience')"></p>
          <p v-html="$i18n.t('abstract.work_environment')"></p>
          <p v-html="$i18n.t('abstract.research_preference')"></p>
          <p v-html="$i18n.t('abstract.research_experience')"></p>
          <p v-html="$i18n.t('abstract.end_sentence')"></p>
          <p v-html="$i18n.t('abstract.notation')"></p>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<style scoped>
</style>

<script>
export default {};
</script>
