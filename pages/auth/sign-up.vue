<template>
  <div class="pa-4">
    <h1>Welcome to TeamU</h1>
    <p class="mb-12">Please enter your details</p>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-text-field
        v-model="firstname"
        label="First name"
        required
        :rules="rules.required"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="lastname"
        label="Last name"
        required
        :rules="rules.required"
        outlined
      ></v-text-field>
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
      <v-text-field
        v-model="confirmPassword"
        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showConfirmPassword ? 'text' : 'password'"
        name="input-10-1"
        label="Confirm password"
        @click:append="showConfirmPassword = !showConfirmPassword"
        outlined
        required
        :rules="[rePassword]"
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

      <p class="mt-6 text-center">
        Already have an account?
        <NuxtLink to="/auth/sign-in" class="font-weight-bold text-decoration-none">Sign in here</NuxtLink>
      </p>
    </v-form>
  </div>
</template>

<script>
import { required, email, password } from '@/helpers/validators'
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',
  layout: 'auth',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      valid: false,
      rules: {
        required,
        email,
        password,
        rePassword: this.rePassword
      },
      loading: false
    }
  },
  computed: {
    rePassword() {
      return () => (this.confirmPassword === this.password) || 'Password does not matched'
    }
  },
  methods: {
    ...mapActions({
      signUp: 'user/signUp'
    }),
    async submit() {
      console.log('valid ')
      this.loading = true
      await this.signUp({
        email: this.email,
        password: this.password,
        options: {
          data: {
            firstname: this.firstname,
            lastname: this.lastname
          }
        }
      })
      this.loading = false
      this.$router.push('/auth/sign-in')
    }
  },
}
</script>