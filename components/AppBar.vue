<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
  >
    <div class="d-flex justify-space-between header">
      <v-app-bar-nav-icon @click.stop="$emit('click')" />

      <v-icon aria-hidden="false" @click="logout">
        mdi-logout
      </v-icon>
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppBar',
  data () {
    return {
      clipped: false,
    }
  },
  methods: {
    ...mapActions({
      signOut: 'user/signOut'
    }),

    logout() {
      this.signOut()
      this.$router.push('/auth/sign-in')
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
}
</style>
