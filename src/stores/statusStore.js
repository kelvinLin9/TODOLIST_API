import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    messages: []
  }),
  actions: {
    pushManager (res, title = '更新', content = '') {
      console.log(res.status)
      if (res.status === 201) {
        const obj = {
          style: 'success',
          title: `${title}成功`,
          content: `${content}`
        }
        this.messages.push(obj)
      } else {
        const obj = {
          style: 'danger',
          title: `${title}失敗`,
          content: `${content}`
        }
        this.messages.push(obj)
      }
    }
  }
})
