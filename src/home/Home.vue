<script setup>
import Header from '../components/Header.vue';
</script>
<template>
    <div class="container mx-auto flex px-5">
        <section class="item-center flex flex-col w-1/4">
          <div class="text-3xl font-bold relative my-3">
            {{blog_title }}
          </div>
          <v-divider :thickness="3"></v-divider>
          <div class="mt-3 text-md">
            <p class="py-2" v-for="section in blog_descriptions" :key="section">
              {{ section }}
            </p>
          </div>
        </section>
        <section class="w-3/4">
          <Header />
        </section>
      </div>
</template>
<script>
export default {
    name: 'Main',
    props: {
        blog_title: {
            type: String,
            required: true
        },
        blog_descriptions: {
            type: Array,
            required: true
        }
    },
}
</script>