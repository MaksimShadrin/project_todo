
<template>
    <form @submit.prevent> 

		<h3> <i>Список задач</i> </h3>
		<input 
		v-model='post.title'
		class="input" 
		type="text" 
		placeholder="Название">

		<input 
		v-model='post.body'
		class="input" 
		type="text" 
		placeholder="Описание">

		<button
		class="btn" 
		v-on:click="createPost"
		> 
		Создать
		</button>
	</form>
</template>

<script setup>
import {usePosts} from '@/stores/usePosts';
import { reactive } from '@vue/reactivity';
const {addPost} = usePosts()
const post = reactive({
	title: "",
	body: "",
})

function createPost() {
	addPost(post)
}
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
}
.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
}

.btn {
	align-self: flex-end;
	margin-top: 10px;
	padding: 10px 15 px;
	background: none;
	color: teal;
	border: 1px solid teal;
}
</style>