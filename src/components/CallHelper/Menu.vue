<template>
  <div class="header">
    <!-- <img
      class="TLH-logo"
      src="https://i.vimeocdn.com/portrait/16028080_300x300.webp"
      alt="TLH Logo"
    >
    <h2>Call Log Creator</h2>
    <p>Check off the boxes while you're on the phone to create a detailed call log.</p>
     -->
    <div class="icons-bar">
      <img
      class="small-TLH-icon"
      style="width: 20%"
      src="https://i.vimeocdn.com/portrait/16028080_300x300.webp"
      alt="TLH Logo"
    >
      <i class="material-icons menu-icon" @click="showSettings = true" style="width: 35%">settings</i>
      <i class="material-icons menu-icon" style="width: 35%">help_outline</i>
    </div>
    <textarea name="callLog" cols="40" rows="5" id="callLog"></textarea>
    <div class="icons-bar">
      <i class="material-icons menu-icon" style="width: 50%">file_copy</i>
      <i class="material-icons menu-icon" style="width: 50%">settings_backup_restore</i>
    </div>
    <!-- <span onclick="copyText()" class="copyTextBtn">Copy to Clipboard</span>
    <span onclick="location.reload();" class="copyTextBtn" id="clearBtn">Clear</span> -->
    
    <i class="material-icons" @click="showSettings = true">settings</i>
    <Modal v-show="showSettings" @close="showSettings = false">
      <template slot="header">Settings</template>
      <template slot="body">
        <p>Import/Export</p>
        <p>Load Presets</p>
        <p>Reset to Default Settings</p>
        <p>View counts for all options</p>
      </template>
      <template slot="footer"></template>
    </Modal>

    <!-- Choose Preset -->
    <div class="menu-item">
      <h6>Choose Preset</h6>
      <select name="presetDropdown" id="presetDropdown">
        <option value="data">Tuition Planner</option>
        <option value="data2">Enrollment Counselor</option>
      </select>
      <span onclick="choosePreset()" class="addBtn" id="presetBtn">Load Preset</span>
    </div>

    <!-- Settings -->
    <div class="menu-item">
      <h6>Settings</h6>
      <!-- Export -->
      <span class="addBtn export" onclick="exportJSON()">Export</span>

      <!-- Import -->
      <input id="file-input" type="file" name="name">
      <span class="addBtn import" onclick="importJSON()">Import</span>

      <!-- Reset -->
      <span onclick="resetBtn()" class="delBtn" id="resetBtn">Reset to Default Settings</span>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Menu",
  components: {
    Modal
  },
  data() {
    return {
      showSettings: false
    };
  }
};
</script>

<style>
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
  border: solid rgba(0, 0, 0, 0.5) .5px;
  border-radius: 10px;
  padding: 10px;
}

.small-TLH-icon {
  /* max-width: 70px; */
  border: solid rgba(0, 0, 0, 0.5) .5px;
  border-radius: 10px;
  /* padding: 5px; */
}
</style>
