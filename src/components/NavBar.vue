<script setup>

</script>
<template>
    <nav class="bg-accent text-white py-2 px-10 bg-slate-400 text-white">
        <ul class="flex justify-between p-2">
            <li>Ken Perez</li>
            <div class="flex justify-end gap-5">
                <li v-for="link in navLinks" :key="link">
                    <a class="hover:text-blue-500" :href="link.url"> 
                        <span>{{ link.name }}</span>
                    </a>
                </li>
            </div>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: 'NavBar',
        props: {
            navLinks: {
                type: Array,
                required: true
            }
        }
    }
</script>