<template>
  <v-app>
    <NavigationDrawer :drawer="drawer" />
    <AppBar @click="drawer = !drawer" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: true,
    }
  }
}
</script>
