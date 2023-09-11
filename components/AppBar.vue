<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
  >
    <v-app-bar-nav-icon @click.stop="$emit('click')" />
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      clipped: false,
    }
  }
}
</script>
