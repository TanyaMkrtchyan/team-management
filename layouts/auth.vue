<template>
  <v-app>
    <v-container fluid class="pr-1 pl-0 py-0 fill-height">
      <v-row align-content="stretch" class="fill-height">
        <v-col lg="4" align-self="center">
          <v-card class="card" color="transparent">
            <Nuxt />
          </v-card>
        </v-col>
        <v-col class="py-1 pl-1 d-none d-lg-block" lg="8">
          <v-img src="/main-bg.jpg" class="rounded-xl" width="100%" height="100%" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>
<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
