<script setup>
import NavBar from './components/NavBar.vue';
import Card from './components/Card.vue';
</script>
<template>
  <div>
    <NavBar :nav-links="data.nav_links" />
    <section class="bg-secondary py-20">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold text-center text-primary">Welcome to My Blog</h1>
        <p class="mt-4 text-lg text-center text-gray-700">Stay updated with my OJT Journey in BUICTO</p>
      </div>
    </section>
    <main class="container mx-auto mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card v-for="post in data.posts" :key="post" 
          :title="post.title" 
          :sub_title="post.sub_title" 
          :content="post.content"
          :image="post.image"
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