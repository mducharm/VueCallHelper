<template>
  <div id="app">
    <!-- navbar -->
    <ul v-show="false">
      <li @click="activePage = 1">Call Helper</li>
    </ul>

    <!-- <img alt="TLH logo" src="./assets/TLH.jpg"> -->
    <CallHelper v-show="activePage === 1" :settingsData="settingsData" @item-clicked="updateOption($event.title, $event.item)"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CallHelper from "./components/CallHelper/CallHelper.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    CallHelper
  },
  data() {
    return {
      activePage: 1,
      settingsData: [ // I probably need a better way to organize this. It's too complicated to make changes when they're in arrays
        {
          title: "call status",
          string: "",
          items: [
            { name: "V2V", count: 0, checked: false },
            { name: "LVM", count: 0, checked: false }
          ]
        },
        {
          title: "call status2",
          string: "",
          items: [
            { name: "V2V", count: 0, checked: false },
            { name: "LVM", count: 0, checked: false }
          ]
        },
      ],
    };
  },
  methods: {
    createSection (name) {
      this.settingsData.push({
        title: name,
        string: '',
        items: []
      })
    },
    updateOption(section, optionName) { 
        var sectionSettings = this.settingsData.filter(obj => obj.title === section)[0];
        var itemSettings = sectionSettings.items.filter(item => item.name === optionName)[0];
        if (itemSettings.checked) {
          
        }
    }
  }
};
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
