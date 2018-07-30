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
            <v-btn
            icon
            @click.stop="dialog = true"
            >
            <i class="fas fa-lg fa-share-alt"/>
            </v-btn>

  <v-dialog
    v-model="dialog"
    max-width="300"
  >
    <v-card>
      <v-card-title class="headline">Share using...</v-card-title>

      <v-card-text>
        <social-sharing
          :url="$route.path"

          inline-template>

          <v-list>
            <network network="facebook">
            <v-list-tile @click="">

                <v-list-tile-action><i class="fab fa-lg fa-facebook-f"/></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Facebbok</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
            </network>
            <network network="twitter">
            <v-list-tile @click="">

                <v-list-tile-action><i class="fab fa-lg fa-twitter" /></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Twitter</v-list-tile-title>
                </v-list-tile-content>

           </v-list-tile>
           </network>
           <network network="whatsapp">
            <v-list-tile @click="">

                <v-list-tile-action><i class="fab fa-lg fa-whatsapp"/></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Whatsapp</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
            </network>
          </v-list>
        </social-sharing>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="blue-grey darken-1"
          small
          @click="dialog = false"
          dark
        >
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
   </v-card-actions>
          <div
            v-show="commentShow"
            class="strip">
            <div
              class="subheader"
              style="color:#e6e6e6"> <u>Comments:</u> </div>
            <comment :postID="postID" :addComment="getComments"/>
            <template v-for="(item, index) in items">
              <v-divider dark/>
              <v-layout :key="index" >
                <v-flex
                  xs2
                  lg1>
                  <v-avatar>
                    <img :src="findAvatar(item.user_social_id)" >
                  </v-avatar>
                </v-flex>
                <v-flex xs10>
                  <v-layout
                    row
                    wrap
                    class="eachComment">
                    <v-flex xs12>
                      <b><v-list-tile-title v-html="item.user_social_name"/></b>
                    </v-flex>
                    <v-flex
                      xs12
                      align-content-start>
                      <v-list-tile-content v-html="item.data"/>
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
