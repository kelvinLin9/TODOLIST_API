import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'
const apiUrl = 'https://todoo.5xcamp.us'
export default defineStore('signStore', {
  state: () => ({
    signInForm: {
      email: '',
      password: ''
    },
    signUpForm: {
      email: '',
      nickname: '',
      password: '',
      password2: ''
    },
    isSignIn: true,
    userNickname: '',
    token: ''
  }),
  actions: {
    signIn () {
      console.log(this.signInForm.email)
      const api = `${apiUrl}/users/sign_in`
      axios.post(api, {
        user: {
          email: this.signInForm.email,
          password: this.signInForm.password
        }
      })
        .then((res) => {
          console.log(res)
          console.log(res.headers.authorization)
          this.token = res.headers.authorization
          this.signInForm.email = ''
          this.signInForm.password = ''
          this.userNickname = res.data.nickname
          // this.getTodos()
          router.push('/ToDoList')
        }).catch((err) => {
          console.log(err)
          alert('QQ')
        })
    },
    signUp () {
      console.log(this.signUpForm.nickname)
      if (this.signUpForm.password === this.signUpForm.password2) {
        const api = `${apiUrl}/users`
        axios.post(api, {
          user: {
            email: this.signUpForm.email,
            nickname: this.signUpForm.nickname,
            password: this.signUpForm.password
          }
        })
          .then((res) => {
            console.log(res)
            this.signUpForm.email = ''
            this.signUpForm.nickname = ''
            this.signUpForm.password = ''
            this.signUpForm.password2 = ''
            this.isSignIn = true
          }).catch((err) => {
            console.log(err)
            alert(err.response.data.error)
          })
      } else {
        alert('兩次密碼必須相同')
      }
    },
    signOut () {
      const api = `${apiUrl}/users/sign_out`
      axios.delete(api, {
        headers: {
          Authorization: this.token
        }
      })
        .then((res) => {
          console.log(res)
          router.push('/')
        }).catch((err) => {
          console.log(err)
          alert('QQ')
        })
    }
  }
})
