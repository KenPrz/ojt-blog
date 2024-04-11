<script setup>
import Card from '../components/Card.vue';
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card v-for="post in data" 
            :key="post" :title="post.title" 
            :sub_title="post.sub_title"
            :content="post.content" 
            :images="post.images" 
        />
    </div>
</template>
<script>
export default {
    name: 'Documentation',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
}
</script>