<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
  >
    <div class="d-flex justify-space-between align-center header">
      <v-app-bar-nav-icon @click.stop="$emit('click')" />

      <MenuProfile />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      clipped: false,
    }
  },
}
</script>

<style scoped>
.header {
  width: 100%;
}
</style>
