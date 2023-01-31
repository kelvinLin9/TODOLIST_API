import { defineStore } from 'pinia'
import axios from 'axios'
import signStore from './signStore'
const sign = signStore()
const apiUrl = 'https://todoo.5xcamp.us'
export default defineStore('todoStore', {
  state: () => ({
    todo: '',
    updateTodo: ''
  }),
  actions: {
    addTodo () {
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
          sign.getTodos()
        }).catch((err) => {
          console.log(err)
          alert('QQ')
        })
    },
    editTodo (id) {
      this.updateTodo = prompt('編輯吧!少年!!')
      const api = `${apiUrl}/todos/${id}`
      axios.put(api, {
        todo: {
          content: this.updateTodo
        }
      }, {
        headers: {
          Authorization: sign.token
        }
      })
        .then((res) => {
          console.log(res)
          this.updateTodo = ''
          sign.getTodos()
        }).catch((err) => {
          console.log(err)
          alert('QQ')
        })
    },
    deleteTodo (id) {
      const api = `${apiUrl}/todos/${id}`
      axios.delete(api, {
        headers: {
          Authorization: sign.token
        }
      })
        .then((res) => {
          console.log(res)
          sign.getTodos()
        }).catch((err) => {
          console.log(err)
          alert('QQ')
        })
    },
    toggleTodo (id) {
      const api = `${apiUrl}/todos/${id}/toggle`
      axios.patch(api, {}, {
        headers: {
          Authorization: sign.token
        }
      })
        .then((res) => {
          console.log(res)
          sign.getTodos()
        }).catch((err) => {
          console.log(err)
          alert('QQ')
        })
    }
  }
})
