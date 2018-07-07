<template>
  <v-carousel
    hide-delimiters
    prev-icon="fas fa-angle-left"
    next-icon="fas fa-angle-right "
    lazy
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      dark
    >

      <v-container fill-height>
        <v-layout row wrap align-center justify-center>
          <v-flex class="activity" xs12 lg9 align-center justify-center>
              <h1>{{item.title}}</h1>
              <p>{{item.content}}</p>
          </v-flex>

        </v-layout>

      </v-container>

  </v-carousel-item>
  </v-carousel>
</template>
<script src='../assets/scripts/Activities.js'></script>

<style media="screen">
@import '../assets/css/Activities.css';
</style>
