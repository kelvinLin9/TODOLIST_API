<template>
<div class="bg-main vh-100">
  <div class="p-5 container">
    <div class="d-flex justify-content-center align-items-center mb-5">
      <img src="../assets/images/logo.png" alt="logo">
      <div class="ms-auto fs-16 d-none d-sm block">{{ userNickname }} 的待辦</div>
      <a class="fs-16 link-dark ms-auto text-decoration-none" @click.prevent="signOut">登出</a>
    </div>
    <div class="row">
      <div class="input-group mb-3 ">
        <input class="text col"
                type="text"
                placeholder="請輸入待辦事項"
                v-model="todo" />
        <span class="btn btn_add" @click="addTodo">+</span>
      </div>
    </div>
    <div class="card">
      <ul class="tab px-4" @click="getTodos()">
        <li  :class="{active : todoStatus === 'all'}"
              @click="todoStatus = 'all'">全部</li>
        <li  :class="{active : todoStatus === 'work'}"
              @click="todoStatus = 'work'">待完成</li>
        <li  :class="{active : todoStatus === 'down'}"
              @click="todoStatus = 'down'">已完成</li>
      </ul>
      <div class="px-1">
        <ul class="list">
          <li v-for="item in afterFilterTodos" :key="item.id">
            <label class="checkbox" for="" @click="toggleTodo(item.id)">
              <input type="checkbox" />
              <span>{{ item.content }}</span>
            </label>
            <a href="#" class="edit" @click.prevent="editTodo(item.id)">
              <font-awesome-icon icon="fa-solid fa-pen" />
            </a>
            <a href="#" class="delete" @click.prevent="deleteTodo(item.id)">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </a>
          </li>
        </ul>
        <div class="d-flex justify-content-between align-items-center p-3">
          <div>{{ works }} 個待完成項目</div>
          <a href="#" class="link-secondary" @click.prevent="clearDowns()">清除已完成項目</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import signStore from '@/stores/signStore'
import todoStore from '@/stores/todoStore'

export default {
  computed: {
    ...mapWritableState(todoStore, ['todo', 'afterFilterTodos', 'todoStatus', 'works']),
    ...mapWritableState(signStore, ['userNickname'])
  },
  methods: {
    ...mapActions(todoStore, ['getTodos', 'addTodo', 'editTodo', 'deleteTodo', 'toggleTodo', 'clearDowns']),
    ...mapActions(signStore, ['signOut'])
  },
  created () {
    this.getTodos()
  }
}
</script>

<style scoped>
.btn_add {
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-shrink: 0; */
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #333;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
}

.tab {
  display: flex;
  text-align: center;
  color: #9f9a91;
  font-size: 14px;
}
.tab li {
  padding: 1rem;
  width: 100%;
  border-bottom: 2px solid #efefef;
  list-style-type:none
}
.tab li.active {
  border-bottom: 2px solid #333;
  color: #333;
  font-weight: bold;
}

.list li {
  position: relative;
  padding-right: 2rem;
  list-style-type:none
}
@media (max-width: 575px) {
  .list li {
    padding-right: 0;
  }
}
.list li a.delete {
  position: absolute;
  opacity: 0;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  text-decoration: none;
  color: #333;
  display: block;
  width: 1rem;
  height: 1rem;
}
@media (max-width: 575px) {
  .list li a.delete {
    opacity: 1;
    width: 12px;
    height: 12px;
  }
}
.list li:hover a.delete {
  opacity: 1;
}

.list li a.edit {
  position: absolute;
  opacity: 0;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  text-decoration: none;
  color: rgb(231, 62, 62);
  display: block;
  width: 1rem;
  height: 1rem;
}
@media (max-width: 575px) {
  .list li a.edit {
    opacity: 1;
    width: 12px;
    height: 12px;
  }
}
.list li:hover a.edit {
  opacity: 1;
}

.checkbox {
  position: relative;
  user-select: none;
  width: 100%;
  display: block;
  padding-left: 44px;
  cursor: pointer;
}
.checkbox span {
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  line-height: 1.5;
}
@media (max-width: 575px) {
  .checkbox span {
    padding-right: 1rem;
  }
}
.checkbox input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
}
.checkbox span::before {
  content: "";
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%) scale(1);
  height: 20px;
  width: 20px;
  border-radius: 5px;
  border: 1px solid #333;
  pointer-events: none;
  transition: 0.3s ease;
}
.checkbox span::after {
  content: "";
  position: absolute;
  left: 14px;
  top: 27%;
  transform: rotate(45deg);
  height: 15px;
  width: 0.5rem;
  border-radius: 1px;
  border-bottom: 3px solid #ffd370;
  border-right: 3px solid #ffd370;
  pointer-events: none;
  opacity: 0;
  transition: 0.3s ease;
}
.checkbox input:checked ~ span {
  color: #9f9a91;
  text-decoration: line-through;
}
.checkbox input:checked ~ span::before {
  border-color: transparent;
  transform: translateY(-50%) scale(0);
}
.checkbox input:checked ~ span::after {
  opacity: 1;
}

</style>
