<template lang="html">
  <v-footer
    class=" white--text"
    absolute
    app>
    <v-layout
      row
      wrap
      fill-height >
      <v-flex xs12 >
        <span
          v-for="(icon,index) in icons"
          :key="index"
          class="tapp fa-2x"
          style="color:#263238"><i :class="icon"/></span>
      </v-flex>
      <v-flex
        xs12
        class="white--text blue-grey darken-4">
        &copy;2018 — <strong>GNU linux users group</strong>
      </v-flex>
    </v-layout>
  </v-footer>

</template>

<script>
export default {
  data: () => ({
    icons: ['fab fa-facebook-square', 'fab fa-twitter', 'fab fa-google-plus-g', 'fab fa-linkedin', 'fab fa-instagram']
  })
}
</script>

<style lang="css">
.tapp:hover{
     text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #00ffff , 0 0 70px #00ffff , 0 0 80px #00ffff , 0 0 100px #00ffff ;

}
.tapp{
  margin:10px;
}

</style>
