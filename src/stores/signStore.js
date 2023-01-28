import { defineStore } from 'pinia'

export default defineStore('signStore', {
  state: () => ({
    email: '',
    nickname: '',
    password: '',
    isSignIn: true
  }),
  actions: {
    signIn () {
      console.log(this.email)
      // const api = `${process.env.VUE_APP_API}/users`
      // const api = 'https://todoo.5xcamp.us/users'
      // console.log(api)
      // this.$http.post(api, {
      //   user: {
      //     email: this.email,
      //     nickname: this.nickname,
      //     password: this.password
      //   }
      // })
      //   .then((res) => {
      //     if (res.data.success) {
      //       console.log(res.data)
      //     } else {
      //       console.log(res.data)
      //     }
      //   }).catch((err) => {
      //     console.log(err.response)
      //   })
    }
  }
})
