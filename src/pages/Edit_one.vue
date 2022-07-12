<template>
    {{posts [0].title}}
</template>

<script setup>
import {usePosts} from '@/stores/usePosts';

const {posts} = usePosts()
</script>
