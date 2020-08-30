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
const localStorageName = 'favouriteCurrencies';
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
    this.fetchCurrenciesCourses();
    const savedFavouriteCurrencies = JSON.parse(localStorage.getItem(localStorageName));
    console.log(savedFavouriteCurrencies, 'saved')
    this.$store.dispatch('setSavedFavouriteCurrencies', savedFavouriteCurrencies);
  },
  computed: {
    favouriteCurrencies () {
      return this.$store.state.favouriteCurrencies
    }
  },
  watch: {
    favouriteCurrencies (favourites) {
      localStorage.setItem(localStorageName, JSON.stringify(favourites));
    }
  }
};
</script>
