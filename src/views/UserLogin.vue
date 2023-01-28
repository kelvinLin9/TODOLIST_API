<template>
  <div class="bg-login vh-100 d-flex align-items-center test">
    <div class="container test py-5">
      <div class="row">
        <div class="col d-flex flex-column justify-content-center align-items-center">
          <h1 class="fs-32">ONLINE TODO LIST</h1>
          <img src="../assets/images/login.png" alt="">
        </div>
        <div class="col d-flex justify-content-center test">
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
