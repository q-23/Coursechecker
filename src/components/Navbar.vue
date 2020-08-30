<template>
  <div>
    <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        class="mb-16"
    >
      <v-toolbar-title>NBP Course Check</v-toolbar-title>
      <v-spacer/>
      <router-link to="/">
        <div class="my-2 mx-2">
          <v-btn small color="primary">All</v-btn>
        </div>
      </router-link>
      <router-link to="/favourite">
        <div class="my-2 mx-2">
          <v-btn small color="pink">Favs</v-btn>
        </div>
      </router-link>
    </v-app-bar>
  </div>
</template>

<style scoped>

</style>