<template>
  <div>
    <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        class="mb-16"
    >
      <v-app-bar-nav-icon/>
      <v-toolbar-title>NBP Course Check</v-toolbar-title>
      <v-spacer/>
      <router-link to="/favourite">
        <div class="text-center">
          <v-badge
              :value="hover"
              color="pink"
              :content="this.favouriteCount"
              :dot="this.favouriteCount === 0"
              offset-y="17"
              overlap
              left
              transition="slide-x-transition"
          >
            <v-hover v-model="hover">
              <v-icon
                  color="white lighten-1"
                  large
              >
                mdi-currency-usd
              </v-icon>
            </v-hover>
          </v-badge>
        </div>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    favouriteCount() {
      return this.$store.state.favouriteCurrencies.length
    }
  }
}
</script>

<style scoped>

</style>