<template>
  <div class="bg-login vh-100">
    <div class="container test">
      <div class="row">
        <div class="col d-flex flex-column justify-content-center align-items-center">
          <h1>ONLINE TODO LIST</h1>
          <img src="../assets/images/login.png" alt="">
        </div>
        <div class="col d-flex flex-column justify-content-center align-items-center">
      <VForm class="col-md-6"
            v-slot="{ errors }"
            @submit="signIn">
        <div class="d-flex justify-content-center">
          <h1 class="fs-2 fw-bold">收件人資訊</h1>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label fw-bold fs-5 ">
            Email：
          </label>
          <VField id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email" rules="email|required"
                v-model="email">
          </VField>
          <ErrorMessage name="email" class="invalid-feedback"/>
        </div>
      </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      nickname: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      // const api = `${process.env.VUE_APP_API}/users`
      const api = 'https://todoo.5xcamp.us/users'
      // console.log(api)
      this.$http.post(api, {
        user: {
          email: this.email,
          nickname: this.nickname,
          password: this.password
        }
      })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data)
          } else {
            console.log(res.data)
          }
        }).catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>
