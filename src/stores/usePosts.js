

import { defineStore } from 'pinia'
import { ref } from 'vue'

//прочитать про ref (реактивность)

export const usePosts = defineStore('posts', () => {
  const posts = ref([{id: 1, title: 'Javascript', body: 'Описание задачи'},
  {id: 2, title: 'Javascript2', body: 'Описание задачи2'},
  {id: 3, title: 'Javascript3', body: 'Описание задачи3'},])
const lastid = ref (4)
  function addPost(newPost) {
    posts.value.push({...newPost, id:lastid.value++})
  }

  return {
    posts,
    addPost,
  }
})