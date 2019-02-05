<template>
  <div id="app">
    <!-- navbar -->
    <ul v-show="false">
      <li @click="activePage = 1">Call Helper</li>
    </ul>

    <!-- <img alt="TLH logo" src="./assets/TLH.jpg"> -->
    <CallHelper
      v-show="activePage === 1"
      :settingsData="settingsData2"
      @delete-option="deleteOption($event)"
      @toggle-option="toggleOption($event)"
    />
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
      textboxString: "",
      settingsData: {
        "Call Status": {
          string: "",
          sections: {
            V2V: {
              count: 0,
              checked: false
            }
          }
        },
        General: {
          string: "",
          sections: {
            DRT: {
              count: 0,
              checked: false
            },
            Verification: {
              count: 0,
              checked: false
            }
          }
        },
        Emails: {
          string: "",
          sections: {
            "Scholarship info": {
              count: 0,
              checked: false
            },
            "Payment Options": {
              count: 0,
              checked: false
            }
          }
        }
      },
      settingsData2: [
        {
          name: "Call Status",
          string: '',
          options: [
            {
              option: 'V2V',
              count: 0,
              checked: false
            },
            {
              option: 'Potato',
              count: 0,
              checked: false
            },
          ]
        },
        {
          name: "General",
          string: 'Reviewed: ',
          options: [
            {
              option: 'DRT',
              count: 0,
              checked: false
            },
            {
              option: 'FAFSA',
              count: 0,
              checked: false
            },
          ]
        },

      ]
    };
  },
  computed: {
    textbox() {
      var string = "";

      Object.keys(this.settingsData)
        .filter(section => {
          return this.settingsData[section].checked;
        })
        .forEach(function(section) {
          // string += section.
        });
      return this.settingsData.map();
    }
  },
  methods: {
    createSection(name) {
      this.settingsData.push({
        title: name,
        string: "",
        items: []
      });
    },
    toggleOption(e) {
      console.log(e);
      // console.log(this.settingsData[e.section][e.option].checked);
      // if (this.settingsData[e.section][e.option].checked) {
      //   this.settingsData[e.section][e.option].checked = false;
      // } else {
      //   this.settingsData[e.section][e.option].checked = true;
      // }
    },
    deleteOption(e) {}
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
