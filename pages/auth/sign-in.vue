<template>
  <v-row class="d-flex justify-center align-center main-content">
    <v-col cols="12" sm="4" md="4">
      <v-card class="p-10">
        <v-form v-model="valid" class="pa-4" @submit.prevent="submit">
          <v-text-field
            v-model="email"
            label="E-mail"
            required
            :rules="rules.email"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="showPassword = !showPassword"
            outlined
            required
            :rules="rules.password"
          ></v-text-field>
          <v-btn
            class="m-10"
            color="primary"
            block
            large
            :disabled="!valid"
            type="submit"
            :loading="loading"
          >
            submit
          </v-btn>

          <v-alert v-if="errorMessage" type="error" :title="errorMessage" class="mt-4">{{ errorMessage }}</v-alert>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { required, email, password } from '@/helpers/validators'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SignIn',
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      valid: false,
      rules: {
        required,
        email,
        password,
      },
      loading: false,
      errorMessage: ''
    }
  },
  methods: {
    ...mapActions({
      signIn: 'user/signIn'
    }),
    async submit() {
      this.loading = true
      this.errorMessage = ''
      const { data, error } = await this.signIn({
        email: this.email,
        password: this.password
      })

      if (!error) {
        this.$router.push('/')
      } else {
        const err = JSON.parse(JSON.stringify(error))
        this.errorMessage = err.message
      }
      this.loading = false
    }
  },
}
</script>

<style scoped>
.main-content {
  height: 100vh;
}
</style>