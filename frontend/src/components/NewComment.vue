<template lang="html">

  <v-layout style="margin-bottom:10vh">
    <v-flex
      xs2
      lg1>
      <v-avatar color="white">
        <img :src="src" >
      </v-avatar>
    </v-flex>
    <v-spacer/>
    <v-flex
      xs9
      lg11>
      <v-layout
        row
        wrap >
        <v-flex xs12>
          <b><v-list-tile-title >{{ name }}</v-list-tile-title></b>
        </v-flex>
        <v-flex
          xs12
          wrap>
          <v-text-field multi-line label="Compose a saga" v-model="content" box ></v-text-field>
          <v-btn
              v-show="this.$store.state.status==='connected'"
              color="white"
              @click="Addcomment()">comment</v-btn>
        </v-flex>
        <v-flex
          v-show="!show"
          xs12
          wrap>
          <p>You must first login to comment</p>

          <v-btn
            dark
            fab
            small
            color="blue"
            @click="login"><v-icon color="white">fab fa-lg fa-facebook-f</v-icon>
          </v-btn>

          <v-btn
            dark
            fab
            small
            color="red"
            @click="login"><v-icon color="white">fab fa-lg  fa-google</v-icon>
          </v-btn>

          <v-btn
            dark
            fab
            small
            color="blue-grey darken-4"
            @click="login"><v-icon color="white">fab fa-1g fa-github</v-icon>
          </v-btn>

        </v-flex>
        <v-flex
          v-show="show"
          xs12>
          logout
          <v-btn
            dark
            fab
            small
            color="blue"
            @click="logout"><v-icon color="white">fas fa-sign-out-alt</v-icon>

          </v-btn>
        </v-flex>
      </v-layout>

    </v-flex>

  </v-layout>

</template>

<script src='../assets/scripts/NewComment.js'></script>

<style lang="css">
</style>
