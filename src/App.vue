<template>
  <div id="app">
    <ul>
      <li @click="activePage = 1">Call Helper</li>
    </ul>
    <!-- <img alt="TLH logo" src="./assets/TLH.jpg"> -->
    <CallHelper v-show="activePage === 1"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CallHelper from './components/CallHelper/CallHelper.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, CallHelper,
  },
  data() {
    return {
      activePage: 1
    }
  }
}
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
