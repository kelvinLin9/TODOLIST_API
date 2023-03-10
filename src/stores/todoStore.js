import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'
import signStore from './signStore'
import statusStore from './statusStore'

const status = statusStore()
const sign = signStore()
const apiUrl = 'https://todoo.5xcamp.us'
export default defineStore('todoStore', {
  state: () => ({
    todo: '',
    todos: [],
    afterFilterTodos: [],
    updateTodo: '',
    todoStatus: 'all',
    works: 0
  }),
  actions: {
    getTodos () {
      const api = `${apiUrl}/todos`
      axios.get(api, {
        headers: {
          Authorization: sign.token
        }
      })
        .then((res) => {
          this.todos = res.data.todos
          this.countWorks(this.todos)
          this.filterTodos(this.todos)
          console.log(this.todos)
        }).catch((err) => {
          console.log(err)
          router.push('/')
        })
    },
    countWorks (todos) {
      this.works = 0
      todos.forEach((item) => {
        if (!item.completed_at) {
          this.works += 1
        }
      })
    },
    filterTodos (todos) {
      if (this.todoStatus === 'all') {
        this.afterFilterTodos = todos.filter((item) => {
          return item
        })
      } else if (this.todoStatus === 'work') {
        this.afterFilterTodos = todos.filter((item) => {
          return !item.completed_at
        })
      } else {
        this.afterFilterTodos = todos.filter((item) => {
          return item.completed_at
        })
      }
    },
    addTodo () {
      if (this.todo === '') {
        alert('請輸入代辦事項')
        return
      }
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
          status.pushManager(res, '新增待辦', res.message)
          this.getTodos()
        }).catch((err) => {
          console.log(err)
          status.pushManager(err, '新增待辦', err.message)
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
          status.pushManager(res, '編輯', res.message)
          this.getTodos()
        }).catch((err) => {
          console.log(err)
          status.pushManager(err, '編輯', err.message)
        })
    },
    deleteTodo (id) {
      console.log(id)
      const api = `${apiUrl}/todos/${id}`
      axios.delete(api, {
        headers: {
          Authorization: sign.token
        }
      })
        .then((res) => {
          console.log(res)
          status.pushManager(res, '刪除', res.message)
          this.getTodos()
        }).catch((err) => {
          console.log(err)
          status.pushManager(err, '刪除', err.message)
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
          this.getTodos()
        }).catch((err) => {
          console.log(err)
          alert('QQ')
        })
    },
    clearDowns () {
      this.todos.forEach((item) => {
        console.log(1, item.id)
        if (item.completed_at) {
          console.log(item.id)
          this.deleteTodo(item.id)
        }
      })
    }
  }
})
