<template lang="html">
  <div class="" >
    <v-container
      fluid
      grid-list-md>
      <v-layout
        row
        wrap
        class="Recentpost">
        <v-flex
          v-for="post in posts"
          xs12 >
          <v-card color="cyan lighten-5" >
            <v-card-title primary-title>
              <div class="headline"><u>{{ post.title }}</u></div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                flat
                small
                color="primary">Read</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
export default {
  props: ['posts']
}
</script>

<style lang="css">
.Recentpost{
  overflow-y: scroll;
  max-height:55vh;

}
</style>
