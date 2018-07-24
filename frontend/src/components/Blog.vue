<template>
  <div class="Blog">
    <div class="container">
      <div class="neon">BLOG</div>
    </div>

    <v-layout
      row
      wrap >

      <v-flex xs12 >
        <v-container fluid>
          <v-layout
            row
            wrap
            justify-center>
            <v-flex
              xs6
              md2 >
              <input
                id="myInput"
                v-model="filter"
                placeholder="Search">
            </v-flex>
            <v-flex
              xs6
              md2>
              <v-select
                :items="options"
                v-model="sortQuery"
                item-text="text"
                item-value="value"
                label="Sort By"
                append-icon="fas fa-caret-down"
                solo
                style="margin-left:10px;"
              />
            </v-flex>
          </v-layout>
        </v-container>

        <post
          :posts="PostsSorted"
          :search-query="filter"/>
      </v-flex>

    </v-layout>
  </div>
</template>

<script src='../assets/scripts/Blog.js'>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/Blog.css';
</style>
