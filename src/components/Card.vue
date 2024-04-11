<script setup>
</script>
<template>
    <div class="bg-white p-5 rounded-lg shadow-lg">
        <div v-if="images">
            <v-carousel height="200" show-arrows="hover" cycle hide-delimiter-background>
                <template  v-slot:prev="{ props }">
                    <button class="scale-75 hover:scale-100 transition-transform duration-200 ease-in-out flex items-center justify-center bg-white rounded-full p-2" @click="props.onClick">   
                        <img src="/src/assets/arrow_back.svg"  alt="">
                    </button>
                </template>
                <template v-slot:next="{ props }">
                    <button class="scale-75 hover:scale-100 transition-transform duration-200 ease-in-out flex items-center justify-center bg-white rounded-full p-2" @click="props.onClick">
                        <img src="/src/assets/arrow_forward.svg"  alt="">
                    </button>
                </template>
                <v-carousel-item v-for="(image, key) in images" :key="key">
                    <v-sheet height="100%">
                        <div class="hover:transform-x d-flex fill-height justify-center align-center">
                            <div class="text-h2">
                                <v-img :width="500" aspect-ratio="4/3" cover :src="image"></v-img>
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