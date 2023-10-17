<template>
  <v-row>
    <v-col lg="5">
      <div>
        <h1>Profile</h1>
        <v-card class="pa-4 mt-4">
          <v-form v-model="valid" @submit.prevent="submit">
            <v-text-field
              v-model="userMetadata.firstname"
              label="First name"
              required
              :rules="rules.required"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="userMetadata.lastname"
              label="Last name"
              required
              :rules="rules.required"
              outlined
            ></v-text-field>
             <v-text-field
              v-model="userData.email"
              label="E-mail"
              required
              :rules="rules.email"
              outlined
            ></v-text-field>
            <!-- <v-text-field
              v-model="userData.password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              @click:append="showPassword = !showPassword"
              outlined
              required
              :rules="rules.password"
            ></v-text-field> -->
            <!--<v-text-field
              v-model="confirmPassword"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showConfirmPassword ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm password"
              @click:append="showConfirmPassword = !showConfirmPassword"
              outlined
              required
              :rules="[rePassword]"
            ></v-text-field> -->

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
          </v-form>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { required, email, password } from '@/helpers/validators'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProfilePage',
  data() {
    return {
      rules: {
        required,
        email,
        password,
        rePassword: this.rePassword
      },
      loading: false,
      valid: false,
      showPassword: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser'
    }),
    rePassword() {
      return () => (this.confirmPassword === this.password) || 'Password does not matched'
    },
    userData() {
      return  {...this.user.user}
    },
    userMetadata() {
      return  {...this.user.user.user_metadata}
    }
  },
  methods: {
    ...mapActions({
      update: 'user/updateProfile'
    }),
    async submit() {
      this.loading = true
      await this.update({
        firstname: this.userMetadata.firstname,
        lastname: this.userMetadata.lastname,
        email: this.userData.email
      })
      this.loading = false
    }
  },
}
</script>