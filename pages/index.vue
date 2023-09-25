<template>
  <div>
    <!-- {{counter}} -->

    <!-- <v-btn primary @click="submit">submit</v-btn> -->

    <v-btn primary small @click="openModal">open modal</v-btn>
    <Modal :is-open-modal="isOpenModal" @close="closeModal" @submit="submit" :title="title" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Delete your Account?'
    }
  },
  middleware: ['user-auth'],
  computed: {
    ...mapGetters({
      counter: 'general/getCounter',
      isOpenModal: 'general/getModalState'
    })
  },
  methods: {
    ...mapActions({
      increment: 'general/incrementCounter',
      setCounter: 'general/setCounter'
    }),
    ...mapMutations({
      setIsOpenModal: 'general/setIsOpenModal',
      setModalTitle: 'general/setModalTitle'
    }),
    submit() {
      this.setCounter(11)
    },
    openModal() {
      this.setModalTitle(this.title)
      this.setIsOpenModal(true)
    },
    closeModal() {
      this.setIsOpenModal(false)
    },
    submit() {
      this.setIsOpenModal(false)
    }
  }
}
</script>
