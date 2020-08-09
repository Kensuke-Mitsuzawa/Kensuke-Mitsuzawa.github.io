<template>
  <div id="side-bar">
    <v-main>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="title grey--text text-darken-2"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav> </v-list>
    </v-main>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  data() {
    return {
      signedIn: false,
    };
  },
  mounted() {},
};
</script>
