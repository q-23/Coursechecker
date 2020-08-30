<template>
  <v-footer
      class="mt-16"
      padless
      dark
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="deep-purple accent-4">
        <strong class="subheading">Don't hesitate.</strong>
        <v-spacer/>
        <a
            v-for="icon in icons"
            :href="icon.link"
            :key="icon.icon"
            target="_blank"
        >
          <v-btn
              class="mx-4"
              dark
              icon
          >
              <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </a>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Aleksander Kwiatkowski</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/aleksander-kwiatkowski/' },
        { icon: 'mdi-github', link: 'https://github.com/q-23' }
      ]
    }
  }
}
</script>
