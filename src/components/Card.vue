<script setup>
</script>
<template>
    <div class="bg-white p-6 rounded-lg shadow-lg">
        <div v-if="image">
            <img :src="image" />
        </div>
        <h2 class="text-lg font-bold text-accent">{{ title }}</h2>
        <p class="mt-2 text-gray-700">{{ sub_title }}</p>
        <div class="mt-4 block text-sm font-semibold text-accent hover:text-accent-dark">{{ content }}</div>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            required: true
        },
        sub_title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: null
        }
    },
}
</script>