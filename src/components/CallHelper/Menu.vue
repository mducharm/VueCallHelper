<template>
  <div class="header">
    <!-- 
    <h2>Call Log Creator</h2>
    <p>Check off the boxes while you're on the phone to create a detailed call log.</p>
    -->
    <div class="call-helper-header">
      <img
        class="small-TLH-icon"
        src="https://i.vimeocdn.com/portrait/16028080_300x300.webp"
        alt="TLH Logo"
      >
      <h2 class="call-helper-header-text">Call Helper</h2>
    </div>
    <div class="icons-bar">
      <i class="material-icons menu-icon" @click="showSettings = true">settings</i>
      <i class="material-icons menu-icon" @click="showAbout = true">help_outline</i>
    </div>
    <textarea name="callLog" cols="40" rows="5" id="callLog" v-model="textbox"></textarea>
    <div class="icons-bar">
      <i class="material-icons menu-icon">file_copy</i>
      <i class="material-icons menu-icon">settings_backup_restore</i>
    </div>
    <!-- <span onclick="copyText()" class="copyTextBtn">Copy to Clipboard</span>
    <span onclick="location.reload();" class="copyTextBtn" id="clearBtn">Clear</span>-->
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

    <Modal v-show="showAbout" @close="showAbout = false">
      <template slot="header">About</template>
      <template slot="body">
        <p>Check off the boxes while you're on the phone to create a detailed call log.</p>
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
  props: ['textbox'],
  data() {
    return {
      showSettings: false,
      showAbout: false,
    };
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

</style>
