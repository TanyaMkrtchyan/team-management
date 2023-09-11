<template>
  <div>
    {{counter}}

    <v-btn primary @click="submit">submit</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      counter: 'general/getCounter'
    })
  },
  methods: {
    ...mapActions({
      increment: 'general/incrementCounter',
      setCounter: 'general/setCounter'
    }),
    submit() {
      this.setCounter(11)
    }
  }
}
</script>
