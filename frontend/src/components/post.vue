<template lang="html">
  <div class="">
    <v-container
      fluid
      grid-list-md >
      <v-data-iterator
        :items="posts"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        :search="SearchQuery"
        content-tag="v-layout"
        row
        wrap
        prev-icon="fas fa-caret-left"
        next-icon="fas fa-caret-right"
        no-data-text="Posts coming soon"
        class="white--text"
        justify-center
      >
        <v-flex
          slot="item"
          slot-scope="props"
          xs12
          lg5
        >
          <v-card >
            <v-card-title primary-title>
              <div class="headline"><u>{{ props.item.title }}</u></div>
              <div class="subheader">{{ new Date(props.item.date_to_show ).toLocaleDateString() }}</div>
            </v-card-title>
            <v-card-actions>
              <router-link :to="{ name:'Eachblog', params: {id:props.item.id} }"> <button class="readbtn" >Read</button></router-link>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
  </div>

</template>

<script>
export default {
  props: ['posts', 'SearchQuery'],
  data () {
    return {
      rowsPerPageItems: [1],
      pagination: {
        rowsPerPage: 6

      }
    }
  }
}
</script>

<style lang="css" >
.data-iterator__actions__range-controls{
  color:white !important;
}
.readbtn{
  background-color:#12202E;color:white;padding:10px;border-radius:2px
}

.readbtn:hover{
text-shadow:0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #228DFF;

}
</style>
