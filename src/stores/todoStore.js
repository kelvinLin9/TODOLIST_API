import { defineStore } from 'pinia'
import axios from 'axios'
import signStore from './signStore'
const sign = signStore()
const apiUrl = 'https://todoo.5xcamp.us'
export default defineStore('todoStore', {
  state: () => ({
    todo: ''
  }),
  actions: {
    addTodo () {
      console.log(sign.token)
      const api = `${apiUrl}/todos`
      axios.post(api, {
        todo: {
          content: this.todo
        }
      }, {
        headers: {
          Authorization: sign.token
        }
      })
        .then((res) => {
          console.log(res)
          this.todo = ''
        }).catch((err) => {
          console.log(err)
          alert('QQ')
        })
    }
  }
})
