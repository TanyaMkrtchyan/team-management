<template>
  <v-row class="d-flex justify-center align-center main-content">
    <v-col cols="12" sm="4" md="4">
      <v-card class="p-10">
        <v-form v-model="valid" class="pa-4" @submit.prevent="submit">
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
            label="Password"
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
          >
            submit
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { required, email, password } from '@/helpers/validators'

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
      }
    }
  },
  computed: {
    rePassword() {
      return () => (this.confirmPassword === this.password) || 'Password does not matched'
    }
  },
  methods: {
    submit() {
      console.log('valid ')
    }
  },
}
</script>

<style scoped>
.main-content {
  height: 100vh;
}
</style>