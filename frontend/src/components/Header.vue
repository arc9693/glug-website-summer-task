<template lang="html"><div>
  <v-flex
    v-scroll="onScroll"
    :class="{ navigater:this.$route.path=='/'&&isActive}" >
    <v-toolbar
      style="background-color:#12202E"
      dark
      fixed
      flat>
      <v-toolbar-title><v-avatar
        class="logo"
        @click="navigateTo({name:'Home'})"><img
          src="../assets/images/logo.png"
          alt=""></v-avatar></v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          medium
          class="linked"
          flat
          @click="navigateTo({name:'Home'})" >
          Home
        </v-btn>
        <v-btn
          medium
          class="linked"
          flat
          @click="navigateTo({name:'DisplayEvents'})" >
          Events
        </v-btn>
        <v-btn
          medium
          class="linked"
          flat
          @click="navigateTo({name:'Members'})" >
          Members
        </v-btn>
        <v-btn
          medium
          class="linked"
          flat >
          Activities
        </v-btn>
        <v-btn
          medium
          class="linked"
          flat
          @click="navigateTo({name:'Blog'})" >
          Blog
        </v-btn>
        <v-btn
          medium
          class="linked"
          flat
          @click="navigateTo({name:'Contact-us'})" >
          Contact us
        </v-btn>
      </v-toolbar-items>
      <span
        dark
        color="pink"
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"><i class="fas fa-bars fa-lg"/></span>
    </v-toolbar>

  </v-flex>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    fixed
    style="height:100vh;background-color:rgba(0,0,0,0);margin-top:60px;width:64px"
    right
  >
    <v-layout
      d-block
      align-content-center
      justify-center
      fill-height>
      <v-flex><span
        class=" linked fa-2x"
        @click="navigateTo({name:'Home'})"><i class="fas icons fa-home"/></span></v-flex><br>
      <v-flex><span
        class=" linked fa-2x"
        @click="navigateTo({name:'DisplayEvents'})"><i class="fas icons fa-dice"/></span></v-flex><br>
      <v-flex><span
        class=" linked fa-2x"
        @click="navigateTo({name:'Members'})"><i class="fas icons fa-users"/></span></v-flex><br>
      <v-flex><span class=" linked fa-2x"><i class="fas icons fa-briefcase"/></span></v-flex><br>
      <v-flex><span
        class=" linked fa-2x"
        @click="navigateTo({name:'Blog'})"><i class="icons fab fa-blogger-b"/></span></v-flex><br>
      <v-flex><span
        class=" linked fa-2x"
        @click="navigateTo({name:'Contact-us'})"><i class="fas icons fa-phone"/></span></v-flex><br>
    </v-layout>
  </v-navigation-drawer>
</div>
</template>

<script src='../assets/scripts/Header'>

</script>

<style lang="css">
@import '../assets/css/Header.css';
</style>
