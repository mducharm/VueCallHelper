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
      :addOptionMessage="addOptionMessage"
      :addSectionMessage="addSectionMessage"
      :importSettingsMessage="importSettingsMessage"
      :datetimeTagProp="datetimeTag"
      @datetime-toggled="datetimeTag = $event; save()"
      @reset-add-message="addOptionMessage = ''"
      @reset-section-message="addSectionMessage = ''"
      @add-option="addOption($event)"
      @delete-option="deleteOption($event)"
      @toggle-option="toggleOption($event)"
      @update-string="updateSectionString($event)"
      @clear-textbox="clearTextbox()"
      @add-section="createSection($event)"
      @delete-section="deleteSection($event)"
      @copy-to-clipboard="copyToClipboard()"
      @reset="reset()"
      @export-settings="exportJSON()"
      @file-loaded="queueImportedJSON($event)"
      @confirm-import="loadImportedJSON()"
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
      var localData = JSON.parse(
        localStorage.getItem("callHelperSettings")
      );
      this.settingsData = localData.settingsData;
      this.datetimeTag = localData.datetimeTag;
    } else {
      this.settingsData = this.defaultPreset;
      this.save();
    }
  },
  data() {
    return {
      activePage: 1,
      textboxString: "",
      addOptionMessage: "",
      addSectionMessage: "",
      importSettingsMessage: "",
      temporaryJSONData: "",
      datetimeTag: false,
      settingsData: [],
      defaultPreset: [
        {
          name: "Call Status",
          string: "",
          options: [
            {
              option: "V2V",
              count: 0,
              checked: false
            },
            {
              option: "LVM",
              count: 0,
              checked: false
            },
            {
              option: "VM not set up",
              count: 0,
              checked: false
            },
            {
              option: "PUHU",
              count: 0,
              checked: false
            },
            {
              option: "V2V - called in, verified.",
              count: 0,
              checked: false
            },
            {
              option: "LVM - need financial plan",
              count: 0,
              checked: false
            }
          ]
        },
        {
          name: "Identify Plan",
          string: "Identified Plan: ",
          options: [
            {
              option: "FA",
              count: 0,
              checked: false
            },
            {
              option: "FA, but grants only",
              count: 0,
              checked: false
            },
            {
              option: "OOP",
              count: 0,
              checked: false
            },
            {
              option: "Payment Plan",
              count: 0,
              checked: false
            },
            {
              option: "Military Benefits",
              count: 0,
              checked: false
            },
            {
              option: "Private Loans",
              count: 0,
              checked: false
            },
            {
              option: "TR",
              count: 0,
              checked: false
            },
            {
              option: "Tuition Assistance",
              count: 0,
              checked: false
            },
            {
              option: "3rd Party",
              count: 0,
              checked: false
            },
            {
              option: "Scholarships",
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
              option: "Tuition Cost",
              count: 0,
              checked: false
            },
            {
              option: "Loans vs Grants",
              count: 0,
              checked: false
            },
            {
              option: "Responsible Borrowing",
              count: 0,
              checked: false
            },
            {
              option: "SAP Policy",
              count: 0,
              checked: false
            },
            {
              option: "TuP Role",
              count: 0,
              checked: false
            },
            {
              option: "Unsubsidized Loans",
              count: 0,
              checked: false
            },
          ]
        },
        {
          name: "Next Step",
          string: "Next Step: ",
          options: [
            {
              option: "Complete FAFSA",
              count: 0,
              checked: false
            },
            {
              option: "Add School Code",
              count: 0,
              checked: false
            },
            {
              option: "Accept Award",
              count: 0,
              checked: false
            },
            {
              option: "Entrance Counseling",
              count: 0,
              checked: false
            },
            {
              option: "MPN",
              count: 0,
              checked: false
            }
          ]
        },
        {
          name: "Post-Call Emails",
          string: "Post-call email: ",
          options: [
            {
              option: "Payment Options",
              count: 0,
              checked: false
            },
            {
              option: "School Resources",
              count: 0,
              checked: false
            },
            {
              option: "FA Award Info",
              count: 0,
              checked: false
            },
            {
              option: "Scholarship Info",
              count: 0,
              checked: false
            },
            {
              option: "Student Account Set-up Info",
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

      //    Example object:
      //        {
      //           name: "General",
      //           string: "Reviewed: ",
      //           options: []
      //        }

      // First, map over the data to get all the checked options in a format that's easier to iterate over
      var checkedOptionsArr = this.settingsData.map(function(obj) {
        var objVals = Object.values(obj); // get the values for each object. e.g. ["General", "Reviewed: ", [array of options]]

        // filter for only the options with the array where checked = true
        var checkedOptVals = objVals[2].filter(function(optionObject) {
          return optionObject.checked;
        });

        // checkedOptVals = [array of checked options]

        var arr = objVals;

        // sets the [array of options objects] to just their string e.g. ['V2V', 'LVM', ...]
        arr[2] = checkedOptVals.map(function(x) {
          return x.option;
        });

        // returns each object as an array with the third item being an array of checked options' names
        return arr;
      });

      var text = "";

      if (this.datetimeTag) {
        text += this.currentDateTime;
      }

      // for every array within checkedOptionsArr, add the section's string with list of checked options to text if checked options.length != 0
      checkedOptionsArr.forEach(function(arr) {
        if (arr[2].length === 1) {
          if (arr[1]) {
            text += arr[1] + " "
          }
          text += arr[2][0] + "\n";
        } else if (arr[2].length > 1) {
          if (arr[1]) {
            text += arr[1] + " "
          }
          text +=
            arr[2].reduce(function(acc, x, idx, array) {
              return idx < array.length ? acc + ", " + x : acc + x;
            });

          text += "\n";
        }
      });

      // returns section.string + all checked options
      return text;
    },
    currentDateTime() {
      var today = new Date();
      var mm = today.getMonth();
      var dd = today.getDate();
      var hour =
        today.getHours() > 12
          ? today.getHours() - 12
          : today.getHours() < 10
          ? "0" + today.getHours()
          : today.getHours();
      var minutes =
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
      return mm + "/" + dd + " " + hour + ":" + minutes + "\n";
    }
  },
  methods: {
    save() {
      localStorage.setItem(
        "callHelperSettings",
        JSON.stringify({
          settingsData: this.settingsData,
          datetimeTag: this.datetimeTag
        })
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
    createSection(e) {
      // e = section name
      var sectionArray = this.settingsData.map(function(sectionObj) {
        return sectionObj.name;
      });
      if (sectionArray.includes(e)) {
        this.addSectionMessage = "Section already exists.";
      } else if (e === "") {
        this.addSectionMessage = "Blank, please enter valid text.";
      } else {
        try {
          this.settingsData.push({
            name: e,
            string: "",
            options: []
          });
          this.save();
          this.addSectionMessage = e + " successfully added.";
        } catch {
          this.addSectionMessage = "Unable to add new section.";
        }
      }
    },
    deleteSection(e) {
      // e === section name
      var sectionIndex = this.settingsData
        .map(function(section) {
          return section.name;
        })
        .indexOf(e);
      if (sectionIndex > -1) {
        this.settingsData.splice(sectionIndex, 1);
      }
      console.log(sectionIndex);
      console.log(this.settingsData);
      this.save();
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
      // e = {section: sectionObj.name, option: $event}
      var sectionIndex = this.settingsData
        .map(function(section) {
          return section.name;
        })
        .indexOf(e.section);
      var arrayOfOptionNames = this.settingsData[sectionIndex].options.map(
        function(optionObject) {
          return optionObject.option;
        }
      );
      if (arrayOfOptionNames.includes(e.option)) {
        this.addOptionMessage = "Option already exists.";
      } else if (e.option === "") {
        this.addOptionMessage = "Blank, please enter valid text.";
      } else {
        try {
          this.settingsData[sectionIndex].options.push({
            option: e.option,
            count: 0,
            checked: false
          });
          this.save();
          this.addOptionMessage = e.option + " successfully added.";
        } catch {
          this.addOptionMessage = "Unable to add new option.";
        }
      }
    },
    deleteOption(e) {
      var sectionIndex = this.settingsData
        .map(function(section) {
          return section.name;
        })
        .indexOf(e.section);
      var filteredOptions = this.settingsData[sectionIndex].options.filter(
        function(optionObject) {
          return optionObject.option !== e.option;
        }
      );
      this.settingsData[sectionIndex].options = filteredOptions;
      this.save();
    },
    copyToClipboard() {
      let codeToCopy = document.querySelector("#callLog");
      codeToCopy.setAttribute("type", "text");
      codeToCopy.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        this.incrementOptionCounts();
      } catch (err) {
        alert("Oops, unable to copy");
      }

      /* unselect the range */
      codeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    clearTextbox() {
      this.settingsData.forEach(function(sectionObject) {
        sectionObject.options.forEach(function(optionObject) {
          optionObject.checked = false;
        });
      });
    },
    reset() {
      this.settingsData = this.defaultPreset;
      this.save();
    },
    incrementOptionCounts() {
      this.settingsData.forEach(function(sectionObject) {
        sectionObject.options.forEach(function(optionObject) {
          if (optionObject.checked) {
            optionObject.count += 1;
          }
        });
      });
    },
    exportJSON() {
      var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(localStorage.getItem("callHelperSettings"));
      var downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "CallHelperSettings.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    queueImportedJSON(e) {
      this.temporaryJSONData = e;
    },
    loadImportedJSON() {
      try {
        this.settingsData = JSON.parse(this.temporaryJSONData);
        this.save();
        this.importSettingsMessage = "Settings imported successfully.";
      } catch {
        this.importSettingsMessage = "Error - unable to import settings.";
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
