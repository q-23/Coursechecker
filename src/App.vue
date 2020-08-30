<template>
  <v-app>
    <Navbar/>
    <router-view/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import getAll from "@/functions/getAll";
export default {
  name: 'App',
  components: {
    Navbar,
  },
  methods: {
    fetchCurrenciesCourses: async function () {
      try {
        const response = await getAll();
        this.$store.dispatch('addCurrenciesCourses', response)
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted() {
    this.fetchCurrenciesCourses()
  }
};
</script>
