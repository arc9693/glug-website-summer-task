<template lang="html" >
  <div class="Blog">

    <v-container
      grid-list-xs,sm,md,lg,xl
      fluid >
      <v-flex xs12 >
        <v-card class="post">
          <v-card-title primary-title >
            <div >
              <h1 style="font-family:Iceland">{{ post.title }}</h1>

            </div>
          </v-card-title>
          <v-card-media
            :src="post.thumbnail_image"
            class="postImage"
            contain
            height="50vh"
          />

          <v-flex
            xs12
            wrap>
            <div v-html="post.content_body" />
          </v-flex>
          <v-card-actions class="strip">

            <v-spacer/>
            <v-btn icon>
              <i class="fas fa-lg fa-thumbs-up"/>
            </v-btn>
            <v-btn
              icon
              @click="commentShow=!commentShow">
              <i class="fas fa-lg fa-comment"/>
            </v-btn>
            <v-btn icon>
              <i class="fas fa-lg fa-share-alt"/>
            </v-btn>
          </v-card-actions>
          <div
            v-show="commentShow"
            class="strip">
            <div
              class="subheader"
              style="color:#e6e6e6"> <u>Comments:</u> </div>
            <comment :comments="items"/>
            <template v-for="(item, index) in items">
              <v-divider dark/>
              <v-layout :key="index" >
                <v-flex
                  xs2
                  lg1>
                  <v-avatar>
                    <img :src="item.avatar" >
                  </v-avatar>
                </v-flex>
                <v-flex xs10>
                  <v-layout
                    row
                    wrap
                    class="eachComment">
                    <v-flex xs12>
                      <b><v-list-tile-title v-html="item.title"/></b>
                    </v-flex>
                    <v-flex
                      xs12
                      align-content-start>
                      <v-list-tile-content v-html="item.subtitle"/>
                    </v-flex>
                    <v-flex xs12 >
                      <v-list-tile-content>
                        <v-btn
                          flat
                          icon
                          color="primary">
                          <i class="fas fa-thumbs-up"/>
                        </v-btn>
                      </v-list-tile-content>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </template>

          </div>
        </v-card>
      </v-flex>

    </v-container>
  </div>

</template>

<script src="../assets/scripts/Eachblog.js"></script>

<style lang="css" scoped>
@import '../assets/css/Eachblog.css';
</style>
