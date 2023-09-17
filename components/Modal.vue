<template>
  <v-dialog
    :value="isOpenModal"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="text-h6">
        {{ title }}
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="red darken-1"
          text
          @click="$emit('close')"
        >
          No
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="$emit('submit')"
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpenModal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Modal title'
    }
  }
}
</script>
  