
<template>
<div>
 <ul type="disc">
  <li class="post" v-for="post in posts" :key="post.title">
    <input type="checkbox" /> <strong>Задача:</strong> 
	<router-link :to="`/task/${post.id}`">{{ post.title }} </router-link>
	<div><strong>Описание:</strong> 
	<span>{{ post.body }}</span></div>
  </li>
 </ul>
 
</div>
</template>


<script setup>
import {usePosts} from '@/stores/usePosts';

const {posts} = usePosts()
</script>

<style scoped>
.post {
	margin: 15px;
	padding: 2px solid teal;
	box-sizing: 15px;
}
</style>

