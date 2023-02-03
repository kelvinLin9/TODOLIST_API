<template>
  <div class="toast-container">
    <Toast v-for="(msg, key) in messages" :key="key"
            :msg="msg"/>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'
import { mapState } from 'pinia'
import statusStore from '@/stores/statusStore'

export default {
  components: { Toast },
  computed: {
    ...mapState(statusStore, ['messages'])
  }
}
</script>

<style lang="scss" scoped>
.toast-container {
  position: fixed;
  right: 20px;
  top: 90px;
  z-index: 999;
}
</style>
