<template>
  <div id="app">
    <!-- navbar -->
    <ul v-show="false">
      <li @click="activePage = 1">Call Helper</li>
    </ul>

    <!-- <img alt="TLH logo" src="./assets/TLH.jpg"> -->
    <CallHelper
      v-show="activePage === 1"
      :settingsData="settingsData"
      :textbox="textbox"
      @add-option="addOption($event)"
      @delete-option="deleteOption($event)"
      @toggle-option="toggleOption($event)"
      @update-string="updateSectionString($event)"
      @clear-textbox="clearTextbox()"
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
  mounted: function() {
    if (localStorage.getItem("callHelperSettings")) {
      this.settingsData = JSON.parse(
        localStorage.getItem("callHelperSettings")
      );
    }
  },
  data() {
    return {
      activePage: 1,
      textboxString: "",
      settingsData: [
        {
          name: "Call Status",
          string: "test",
          options: [
            {
              option: "V2V",
              count: 0,
              checked: false
            },
            {
              option: "Potato",
              count: 0,
              checked: false
            },
            {
              option: "Potato2",
              count: 0,
              checked: false
            },
            {
              option: "Potato3",
              count: 0,
              checked: false
            },
            {
              option: "Potato4",
              count: 0,
              checked: false
            },
            {
              option: "Potato5",
              count: 0,
              checked: false
            }
          ]
        },
        {
          name: "General",
          string: "Reviewed: ",
          options: [
            {
              option: "DRT",
              count: 0,
              checked: false
            },
            {
              option: "zDRT",
              count: 0,
              checked: false
            },
            {
              option: "FAFSA",
              count: 0,
              checked: false
            }
          ]
        }
      ]
    };
  },
  computed: {
    textbox: function() {
      // this is pretty gross, but it updates the textbox based on anything checked off
      var checkedOptionsArr = this.settingsData.map(function(obj) {
        var objVals = Object.values(obj);
        var checkedOptVals = objVals[2].filter(function(optionObject) {
          return optionObject.checked;
        });
        var arr = objVals;
        arr[2] = checkedOptVals.map(function(x) {
          return x.option;
        });
        return arr;
      });
      var text = "";
      checkedOptionsArr.forEach(function(arr) {
        if (arr[2].length === 1) {
          text += arr[1] + " " + arr[2][0] + "\n";
        } else if (arr[2].length > 1) {
          text +=
            arr[1] +
            " " +
            arr[2].reduce(function(acc, x, idx, array) {
              return idx < array.length ? acc + ", " + x : acc + x;
            });

          text += "\n";
        }
      });
      return text;
    }
  },
  methods: {
    save() {
      localStorage.setItem(
        "callHelperSettings",
        JSON.stringify(this.settingsData)
      );
    },
    updateSectionString(e) {
      var sectionIndex = this.settingsData
        .map(function(section) {
          return section.name;
        })
        .indexOf(e.section);
      this.settingsData[sectionIndex].string = e.string;
      this.save();
    },
    createSection(name) {
      this.settingsData.push({
        title: name,
        string: "",
        items: []
      });
    },
    toggleOption(e) {
      var sectionIndex = this.settingsData
        .map(function(section) {
          return section.name;
        })
        .indexOf(e.section);
      var optionIndex = this.settingsData[sectionIndex].options
        .map(function(o) {
          return o.option;
        })
        .indexOf(e.option);
      if (this.settingsData[sectionIndex].options[optionIndex].checked) {
        this.settingsData[sectionIndex].options[optionIndex].checked = false;
      } else {
        this.settingsData[sectionIndex].options[optionIndex].checked = true;
      }
    },
    addOption(e) {
      var sectionIndex = this.settingsData
        .map(function(section) {
          return section.name;
        })
        .indexOf(e.section);
      this.settingsData[sectionIndex].options.push({
        option: e.option,
        count: 0,
        checked: false
      });
      this.save();
    },
    deleteOption(e) {
      var sectionIndex = this.settingsData
        .map(function(section) {
          return section.name;
        })
        .indexOf(e.section);
        var filteredOptions = this.settingsData[sectionIndex].options.filter(function(optionObject) {
          return optionObject.option !== e.option;
        });
        this.settingsData[sectionIndex].options = filteredOptions;
      this.save();
    },
    clearTextbox() {
      this.settingsData.forEach(function(sectionObject) {
        sectionObject.options.forEach(function(optionObject) {
          optionObject.checked = false;
        });
      });
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
