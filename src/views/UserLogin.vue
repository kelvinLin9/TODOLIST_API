<template>
  <div class="bg-login vh-100 d-flex align-items-center test">
    <div class="container py-5">
      <div class="row">
        <div class="col d-none d-md-block">
          <div class="logo container text-center">
            <img src="../assets/images/logo.png" alt="logo">
          </div>
          <div class="">
            <img src="../assets/images/login.png" alt="login-image">
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="d-flex flex-column justify-content-center align-items-center"
          v-if="isSignIn">
            <SignIn/>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center"
          v-else>
            <SignUp/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue'
import { mapWritableState } from 'pinia'
import signStore from '@/stores/signStore'
import SignUp from '@/components/SignUp.vue'

export default {
  components: { SignIn, SignUp },
  computed: {
    ...mapWritableState(signStore, ['isSignIn'])
  }
}
</script>

<style scoped>
.logo {
  width: 312.6px;
}
</style>
