<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-icon aria-hidden="false">
          mdi-account
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" @click="goTo(item.to)">
        <v-list-item-title>
          <v-icon aria-hidden="false" class="mr-2">
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProfileMenu',
  data() {
    return {
      items: [
        {
          title: 'Edit',
          icon: 'mdi-account-edit-outline',
          to: '/profile'
        },
        {
          title: 'Log out',
          icon: 'mdi-account-arrow-right',
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      signOut: 'user/signOut'
    }),

    logout() {
      this.signOut()
      this.$router.push('/auth/sign-in')
    },
    goTo(to) {
      if (to) {
        this.$router.push(to)
      } else {
        this.logout()
      }
    }
  }
}
</script>