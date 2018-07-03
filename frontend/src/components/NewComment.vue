<template lang="html">

<v-layout style="margin-bottom:10vh">
      <v-flex xs2 lg1>
        <v-avatar color="white">
          <img :src="src" >
        </v-avatar>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs9 lg11>
        <v-layout row wrap >
          <v-flex xs12 wrap>
            <quill-editor v-model="content"
                            ref="myQuillEditor"
                             :options="editorOption"
                            @change="onEditorChange($event)" style="background-color:white;color:black">
              </quill-editor>
              <div id="toolbar" style="background-color:white">
                <button class="ql-image"></button>
                <button class="ql-link"></button>
                <v-btn color="blue-grey" @click="Addcomment()">comment</v-btn>
              </div>

          </v-flex>
        </v-layout>

      </v-flex>

</v-layout>

</template>

<script>

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'


export default {
     props:['comments'],
  data() {
     return {
       content: null,
       src:'https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png',
       editorOption: {
          modules: {
            toolbar: {
               container: '#toolbar',},
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            },

          },
           placeholder: 'Compose an epic...',
        }

     }
   },

   methods: {
       onEditorChange({ quill, html, text }) {
        this.content = html
      },
      Addcomment(){
        this.comments.push({ avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'na', subtitle: this.content });
        this.content=null
      }
     },
  components: {
    quillEditor
  }
}
</script>

<style lang="css">
.ql-editor{
  min-height:20vh;
}
</style>
