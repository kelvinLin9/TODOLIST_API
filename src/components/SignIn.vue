<template>
  <div class="">
    <h1 class="fs-24 fw-bold">最實用的線上待辦事項服務</h1>
    <VForm class=""
          v-slot="{ errors }"
          @submit="signIn">
      <div class="mb-3">
        <label for="email" class="form-label fw-bold fs-14">
          Email：
        </label>
        <VField id="email" name="email" type="email" class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email" rules="email|required"
              v-model="signInForm.email">
        </VField>
        <ErrorMessage name="email" class="invalid-feedback"/>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label fw-bold fs-14 ">
          密碼：
        </label>
        <VField id="password" name="密碼" type="password" class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              placeholder="請輸入密碼" rules="required|min:8"
              v-model="signInForm.password">
        </VField>
        <ErrorMessage name="密碼" class="invalid-feedback"/>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-dark" type="submit">
          登入
        </button>
        <button class="btn btn-link text-dark text-decoration-none" type="button"
              @click="isSignIn = false">
          註冊帳號
        </button>
      </div>
    </VForm>
  </div>
  <!-- <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content fs-20">
        <div class="modal-body text-white text-center mt-4">
          哦歐！排序錯誤，請再調整順序
          <button type="button" class="btn text-white mt-4" data-bs-dismiss="modal">確定</button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import signStore from '@/stores/signStore'
// import Modal from 'bootstrap/js/dist/modal'

export default {
  computed: {
    ...mapState(signStore, []),
    ...mapWritableState(signStore, ['signInForm', 'isSignIn'])
  },
  methods: {
    ...mapActions(signStore, ['signIn'])
  },
  mounted () {
    // this.modal = new Modal(this.$refs.modal)
    // console.log(this.modal)
    // this.modal.show()
  }
}
</script>

<style lang="scss" scoped>
.modal-content {
  width: 486px;
  height: 216px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 30px;
  background: #000000;
  border-radius: 20px;
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 301px;
    height: 58px;
    background: #9C0700;
    border-radius: 9px;
  }
}
</style>