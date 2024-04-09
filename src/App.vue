<script setup>
import NavBar from './components/NavBar.vue';
import Card from './components/Card.vue';
import Header from './components/Header.vue';
</script>
<template>
  <div>
    <NavBar :nav-links="data.nav_links" />
    <section class="py-3">
      <div class="container mx-auto">
        <div class="flex justify-center items-center h-full"> <!-- Center horizontally and vertically -->
          <div class="text-xl font-bold relative">My OJT BLOG</div>
        </div>
        <Header class="absolute" />
      </div>
    </section>
    <main class="container mx-auto mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card v-for="post in data.posts" :key="post" 
          :title="post.title" 
          :sub_title="post.sub_title"
          :content="post.content"
          :images="post.images"
        />
      </div>
    </main>
  </div>
</template>
<script>
import data from './Data/data.json';
export default {
  data() {
    return {
      msg: 'Welcome to Vite + Vue 3!',
    };
  },
  methods: {
    fetchData() {
      console.log(data.nav_links);
    },
  }
};
</script>