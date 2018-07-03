<template>
  <div id="app"   >
    <v-app >
        <main>

            <Pageheader/>
            <v-content>
            <router-view ></router-view>
            </v-content>
            <Pagefooter/>
      </main>
  </v-app>
</div>
</template>

<script>

import Pageheader from './components/Header'
import Pagefooter from './components/Footer'

export default {
  name: 'App',
  components:{ Pageheader,Pagefooter},
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:#A3CBC8;

}

.headingF{
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: -1.6px;
  word-spacing: -1.2px;
  font-weight: 700;
  width:auto;
  margin-top: 7vh;
  color:#12202E;
}

</style>
