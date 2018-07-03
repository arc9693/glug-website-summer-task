<template lang="html" >
<div class="Blog">

  <v-container grid-list-xs,sm,md,lg,xl fluid >
  <v-flex xs12 >
    <v-card class="post">
      <v-card-title primary-title >
        <div >
          <h1 style="font-family:Iceland">{{post.title}}</h1>

        </div>
      </v-card-title>
      <v-card-media
        class="postImage"
        contain
        height="50vh"
        :src="post.thumbnail_image"
      >

      </v-card-media>

      <v-flex xs12 wrap>
        <div v-html="post.content_body" ></div>
      </v-flex>
      <v-card-actions class="strip">
                    <v-spacer></v-spacer>
                    <v-btn icon>
                    <i class="fas fa-lg fa-thumbs-up"></i>
                    </v-btn>
                    <v-btn icon @click="commentShow=!commentShow">
                    <i class="fas fa-lg fa-comment"></i>
                    </v-btn>
                    <v-btn icon>
                    <i class="fas fa-lg fa-share-alt"></i>
                    </v-btn>
      </v-card-actions>
      <div v-show="commentShow" class="strip">
          <div class="subheader" style="color:#e6e6e6"> <u>Comments:</u> </div>
          <comment :comments="items"/>
          <template v-for="(item, index) in items">
            <v-divider  inset=true  dark></v-divider>
            <v-layout  :key="item.title" >
                <v-flex xs2 lg1>
                  <v-avatar>
                    <img :src="item.avatar" >
                  </v-avatar>
                </v-flex>
                <v-flex xs10>
                  <v-layout row wrap class="eachComment">
                    <v-flex xs12>
                      <b><v-list-tile-title v-html="item.title"></v-list-tile-title></b>
                    </v-flex>
                   <v-flex  xs12 align-content-start>
                      <v-list-tile-content v-html="item.subtitle">
                      </v-list-tile-content>
                    </v-flex>
                      <v-flex  xs12 >
                        <v-list-tile-content>
                          <v-btn flat icon color="primary">
                            <i class="fas fa-thumbs-up"></i>
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

<script>
import comment from './NewComment'
import Blog from '@/services/Blog'
export default {
  data: () => ({
      post:null,
      items: [
        { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Archana', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },

        { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Ranvir', subtitle: "&mdash; Wish I could come, but I'm out of town this weekend." },

        { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Oui oui', subtitle: " &mdash; Do you have Paris recommendations? Have you e Paris recommendations? Have you eve Paris recommendations? Have you ever beeDo you have Paris recommenDo you have Paris recommendations? Hr beeDo you have Paris recommenDo you have Paris recommendations? Her beeDo you have Paris recommenDo you have Paris recommendations? Have you ever beedations? Have you ever been?" },

        { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Blah', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },

        { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Arnav', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
      ],
      commentShow:false
    }),
  components:{
   comment
},
async created() {
      try{
        var id= this.$store.state.route.params.id;
      this.post= (await Blog.getEachPost(id)).data;
        console.log(this.post);
         }
      catch(e){
          console.log(e.message);
           }
     },
}
</script>

<style lang="css" scoped>
@import 'https://fonts.googleapis.com/css?family=Audiowide|Iceland|Monoton|Pacifico|Press+Start+2P|Vampiro+One';
.fas{
  color:white !important;

}
.eachComment{
  padding: 1rem;
  padding-top: 0;
}
.Blog{
  position: relative;
  min-height:110vh
}
.post{
  margin-top: 10vh;


}
.postImage{

}
.strip{
  background-color:#12202E;
  color:white;
}
</style>
