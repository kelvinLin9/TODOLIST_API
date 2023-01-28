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
              v-model="email">
        </VField>
        <ErrorMessage name="email" class="invalid-feedback"/>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label fw-bold fs-14 ">
          密碼：
        </label>
        <VField id="password" name="password" type="password" class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              placeholder="請輸入密碼" rules="required|min:8"
              v-model="password">
        </VField>
        <ErrorMessage name="password" class="invalid-feedback"/>
      </div>
    </VForm>
    <div class="d-grid gap-2 col-4 mx-auto">
      <button class="btn btn-dark" type="submit">
        登入
      </button>
      <button class="btn btn-link" type="button"
              @click="isSignIn = false">
        註冊帳號
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import signStore from '@/stores/signStore'

export default {
  computed: {
    ...mapState(signStore, []),
    ...mapWritableState(signStore, ['email', 'nickname', 'password', 'isSignIn'])
  },
  methods: {
    ...mapActions(signStore, ['signIn'])
  }
}
</script>
