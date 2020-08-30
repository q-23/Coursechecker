<template>
  <v-app>
    <Navbar/>
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import getAll from "@/functions/getAll";
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  methods: {
    async fetchCurrenciesCourses() {
      try {
        const response = await getAll();
        this.$store.dispatch("addCurrenciesCourses", response);
      } catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.fetchCurrenciesCourses()
  }
};
</script>
