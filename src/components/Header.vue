<template>
    <v-carousel
      height="430"
      show-arrows="hover"
      cycle
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          height="100%"
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <v-img
                :width="1080"
                aspect-ratio="16/9"
                cover
                :src="slide"
              ></v-img>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </template>
  <script>
    export default {
      data () {
        return {
          colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
          ],
          slides: [
            '/src/assets/images/header-images/image1.jpg',
            '/src/assets/images/header-images/image2.jpg',
            '/src/assets/images/header-images/image3.jpg',
            '/src/assets/images/header-images/image4.jpeg',
            '/src/assets/images/header-images/image5.jpg',
            '/src/assets/images/header-images/image6.jpg',
            '/src/assets/images/header-images/image7.jpeg',
          ],
        }
      },
    }
  </script>
  