<script setup>
</script>
<template>
    <div class="bg-white p-6 rounded-lg shadow-lg">
        <div v-if="images">
            <v-carousel height="200" show-arrows="hover" cycle hide-delimiter-background>
                <v-carousel-item v-for="(image, key) in images" :key="key">
                    <v-sheet height="100%">
                        <div class="d-flex fill-height justify-center align-center">
                            <div class="text-h2">
                                <v-img :width="500" aspect-ratio="16/9" cover :src="image"></v-img>
                            </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div class="container mt-2 mx-2">
            <h2 class="text-lg font-bold text-blue-400">{{ title }}</h2>
            <p class="mt-2 text-gray-700">{{ date }}</p>
            <div class="mt-4 block text-sm font-semibold text-accent hover:text-accent-dark">{{ content }}</div>
        </div>
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
        images: {
            type: String,
            default: null
        }
    },
}
</script>