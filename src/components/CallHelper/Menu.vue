<template>
  <div class="header">
    <div class="call-helper-header">
      <img
        class="small-TLH-icon"
        src="https://i.vimeocdn.com/portrait/16028080_300x300.webp"
        alt="TLH Logo"
      >
      <h2 class="call-helper-header-text">Call Helper</h2>
    </div>

    <!-- Menu options -->
    <div class="icons-bar">
      <i class="material-icons menu-icon btn btn-light" @click="showSettings = true" title="Settings">settings</i>
      <i class="material-icons menu-icon btn btn-light" @click="showAbout = true" title="About">help_outline</i>
    </div>
    <textarea name="callLog" ref="textbox" cols="40" rows="5" id="callLog" v-model="textbox"></textarea>
    <div class="icons-bar">
      <div class="menu-icon-with-tooltip btn btn-light" @click="handleCopyToClipboard()" title="Copy to Clipboard">
        <i class="material-icons menu-icon-inner">file_copy</i>
        <transition name="copy-tool-tip-transition">
          <div class="btn btn-dark copy-tool-tip" v-show="copyToolTip">Copied to Clipboard</div>
        </transition>
      </div>
      <i class="material-icons menu-icon btn btn-light" @click="$emit('clear-textbox')" title="Clear">settings_backup_restore</i>
    </div>

    <!-- Settings Modal -->
    <Modal v-show="showSettings" @close="showSettings = false">
      <template slot="header">
        <h4>Settings</h4>
      </template>
      <template slot="body">
        <ul>
          <li>
            <!-- View Data -->
            <button
              class="btn btn-light"
              @click="showOptionData = true"
              style="width: 100%;"
              title="Lists how often each option has been used"
            >View Usage Data</button>
          </li>
          <li>
            <!-- Export -->
            <button
              class="btn btn-light"
              @click="$emit('export-settings')"
              style="width: 100%;"
              title="Export settings as .json"
            >Export Settings</button>
          </li>
          <li>
            <!-- Toggle Datetime Button -->
            <button class="btn btn-light datetime-btn" @click="handleDateTime()" title="Adds date and time to textbox">
              <i v-if="datetimeTagProp" class="material-icons">check_box</i>
              <i v-else class="material-icons">check_box_outline_blank</i>
              Toggle Datetime Tag</button>
          </li>
          <li>
            <h6>Import</h6>
            <!-- Import -->
            <div class="input-group">
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input importInput"
                  id="importJSONinput"
                  @change="loadFile($event)"
                  title="Import settings as .json"
                >
                <label class="custom-file-label" for="importJSONinput"><p class="chooseFile">Choose File</p></label>
              </div>
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  @click="$emit('confirm-import')"
                >Load</button>
              </div>
            </div>
            <span
              class="alert alert-warning"
              role="alert"
              v-if="importSettingsMessage === 'Error - unable to import settings.'"
            >{{ importSettingsMessage }}</span>
            <span
              class="alert alert-success"
              role="alert"
              v-else-if="importSettingsMessage"
            >{{ importSettingsMessage }}</span>
          </li>
          <li>
            <!-- Select presets -->
            <h6>Load Preset</h6>
            <div class="input-group">
              <select class="custom-select" id="inputGroupSelect04" disabled>
                <option selected>Choose...</option>
                <option value="1">TuP - Enrollment</option>
                <option value="2">TuP - Retention</option>
                <!-- <option value="3"></option> -->
              </select>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" disabled>Load</button>
              </div>
            </div>
          </li>
          <li>
            <button
              class="btn btn-danger"
              @click="showResetConfirmation = true"
            >Reset to Default Settings</button>
          </li>
        </ul>
      </template>
      <template slot="footer"></template>
    </Modal>

    <!-- View Option Data -->
    <Modal v-show="showOptionData" @close="showOptionData = false">
      <template slot="header">
        <h4>View Option Data</h4>
      </template>
      <template slot="body">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Section</th>
              <th scope="col">Option</th>
              <th scope="col">Count</th>
            </tr>
          </thead>
          <tbody v-for="(section, key) in settingsData" :key="key">
            <tr v-for="(option, optionKey) in section.options" :key="optionKey">
              <td>{{ section.name }}</td>
              <td>{{ option.option }}</td>
              <td>{{ option.count }}</td>
            </tr>
          </tbody>
        </table>
      </template>
      <template slot="footer"></template>
    </Modal>

    <!-- Reset -->
    <Modal
      v-show="showResetConfirmation"
      @reset="$emit('reset')"
      @close="showResetConfirmation = false"
      :modaltype="'reset'"
    >
      <template slot="header">
        <h4>Reset?</h4>
      </template>
      <template slot="body">
        <p>Are you sure you wish to reset back to default settings?</p>
      </template>
      <template slot="footer"></template>
    </Modal>

    <!-- About -->
    <Modal v-show="showAbout" @close="showAbout = false">
      <template slot="header">
        <h4>About</h4>
      </template>
      <template slot="body">
        <p>This app assists you with keeping detailed notes while on the phone. It's faster and easier to click instead of type, particularly when you are discussing complex topics.</p>
        <p>You can add your own sections and options as you wish. It saves your settings to your local browser's storage, so feel free to add/delete to fit your school's needs and your note-taking style.</p>
        <p>To use this effectively, I would suggest including anything you frequently discuss over the phone. If you find yourself typing something over and over, simply add it as a new item.</p>
        <p>- Michael Ducharm</p>
      </template>
      <template slot="footer"></template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Menu",
  components: {
    Modal
  },
  props: ["textbox", "settingsData", "importSettingsMessage", "datetimeTagProp"],
  data() {
    return {
      copyToolTip: false,
      showSettings: false,
      showAbout: false,
      showResetConfirmation: false,
      showOptionData: false,
    };
  },
  methods: {
    handleCopyToClipboard() {
      this.$emit("copy-to-clipboard");
      this.copyToolTip = true;
      setTimeout(() => {
        this.copyToolTip = false;
      }, 1000);
    },
    handleDateTime() {
      if (this.datetimeTagProp) {
        this.$emit("datetime-toggled", false);
      } else {
        this.$emit("datetime-toggled", true);
      }
    },
    loadFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      var importedData = "";

      // reader.onload = function(e) {
      //   $emit("file-loaded", e.target.result)
      // };
      // reader.readAsText(file);

      reader.onload = e => this.$emit("file-loaded", e.target.result);
      reader.readAsText(file);
    }
  }
};
</script>

<style scoped>
.menu-component {
  display: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.call-helper-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.call-helper-header-text {
  font-family: "Righteous", cursive;
  /* font-family: 'Fredoka One', cursive; */
  color: rgb(56, 56, 56);
  margin-left: 10px;
}

.icons-bar {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
}

.menu-icon {
  font-size: 40px;
  margin: 5px;
  /* color: rgb(68, 68, 68); */
  border: solid rgba(0, 0, 0, 0.5) 0.5px;
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  position: relative;
}

.menu-icon-with-tooltip {
  margin: 5px;
  /* color: rgb(68, 68, 68); */
  border: solid rgba(0, 0, 0, 0.5) 0.5px;
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.menu-icon-inner {
  font-size: 40px;
  margin: 0px;
  padding: 0px;
}

.small-TLH-icon {
  max-height: 80px;
  /* max-width: 70px; */
  /* padding: 5px; */
}

textarea {
  width: 100%;
  height: 30vh;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: #f8f8f8;
  resize: none;
}

.copyTextBtn {
  padding: 10px;
  margin-bottom: 5px;
  background: #d9d9d9;
  color: #555;
  float: left;
  width: 100%;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.copy-tool-tip {
  position: absolute;
  top: -50px;
  right: 0;
  left: 0;
  width: 170px;
  pointer-events: none;
}

.copy-tool-tip-transition-enter-active,
.copy-tool-tip-transition-leave-active {
  transition: opacity 0.5s;
}

.copy-tool-tip-transition-enter, .copy-tool-tip-transition-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

ul {
  margin: 0;
  padding: 0;
  padding-bottom: 2%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  list-style-type: none;
}

ul li {
  /* padding: 12px 30px 12px 30px; */
  padding-bottom: 22px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.datetime-btn {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 70%;
}

.chooseFile {
  position: absolute;
  left: 10px;
}

.table {
  overflow: scroll;
}

p {
  text-align: left;
}
</style>
