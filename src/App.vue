<script setup>
import NavBar from './components/NavBar.vue';
import Card from './components/Card.vue';
import Header from './components/Header.vue';
import Home from './home/Home.vue';
import Projects from './projects/Projects.vue';
import Documentation from './documentation/Documentation.vue';
</script>
<template>
  <div>
    <NavBar
      :nav-links="data.nav_links" 
    />
    <section class="py-3">
      <Home 
        :blog_title="data.blog_title" 
        :blog_descriptions="data.blog_description"
      />
    </section>
    <section class="mx-5 flex-grow">
      <Projects />
    </section>
    <section>
      <Documentation 
        :data="data.posts" 
      />
    </section>
  </div>
</template>
<script>
import data from './Data/data.json';
export default {
  methods: {
    fetchData() {
      console.log(data.nav_links);
    },
  }
};
</script>