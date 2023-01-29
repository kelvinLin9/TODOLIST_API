<template>
  <div class="">
    <h1 class="fs-24 fw-bold">
      註冊帳號&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h1>
    <VForm class=""
          v-slot="{ errors }"
          @submit="signUp">
      <div class="mb-3">
        <label for="email" class="form-label fw-bold fs-14">
          Email：
        </label>
        <VField id="email" name="email" type="email" class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email" rules="email|required"
              v-model="signUpForm.email">
        </VField>
        <ErrorMessage name="email" class="invalid-feedback"/>
      </div>
      <div class="mb-3">
        <label for="nickname" class="form-label fw-bold fs-14">
          您的暱稱：
        </label>
        <VField id="nickname" name="暱稱" type="text" class="form-control"
              :class="{ 'is-invalid': errors['暱稱'] }"
              placeholder="請輸入暱稱" rules="required"
              v-model="signUpForm.nickname">
        </VField>
        <ErrorMessage name="暱稱" class="invalid-feedback"/>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label fw-bold fs-14 ">
          密碼：
        </label>
        <VField id="password" name="密碼" type="password" class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              placeholder="請輸入密碼" rules="required|min:8"
              v-model="signUpForm.password">
        </VField>
        <ErrorMessage name="密碼" class="invalid-feedback"/>
      </div>
      <div class="mb-3">
        <label for="password2" class="form-label fw-bold fs-14 ">
          再次輸入 密碼：
        </label>
        <VField id="password2" name="密碼2" type="password" class="form-control"
              :class="{ 'is-invalid': errors['密碼2'] }"
              placeholder="請再次輸入密碼" rules="required|min:8"
              v-model="signUpForm.password2">
        </VField>
        <ErrorMessage name="密碼2" class="invalid-feedback"/>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-dark" type="submit">
          註冊帳號
        </button>
        <button class="btn btn-link" type="button"
                @click="isSignIn = true">
          登入
        </button>
      </div>
    </VForm>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import signStore from '@/stores/signStore'

export default {
  computed: {
    ...mapState(signStore, []),
    ...mapWritableState(signStore, ['signUpForm', 'isSignIn'])
  },
  methods: {
    ...mapActions(signStore, ['signUp'])
  }
}
</script>
