<template>
  <div id="mainDiv" class="card">
    <div class="sidebar">
      <Menu
        class="menu-component"
        :textbox="textbox"
        :settingsData="settingsData"
        @clear-textbox="$emit('clear-textbox')"
        @copy-to-clipboard="$emit('copy-to-clipboard')"
        @reset="$emit('reset')"
        @export-settings="$emit('export-settings')"
        @file-loaded="$emit('file-loaded', $event)"
        @confirm-import="$emit('confirm-import')"
      />
    </div>

    <div class="list-container" id="list-container">
      <div v-for="(sectionObj, index) in settingsData" :key="index">
        <OptionSection
          :sectionTitle="sectionObj.name"
          :sectionString="sectionObj.string"
          :optionItems="sectionObj.options"
          :addOptionMessage="addOptionMessage"
          @reset-add-message="$emit('reset-add-message')"
          @delete-option="$emit('delete-option', {section: sectionObj.name, option: $event})"
          @toggle-option="$emit('toggle-option', {section: sectionObj.name, option: $event})"
          @update-string="$emit('update-string', {section: sectionObj.name, string: $event})"
          @add-option="$emit('add-option', {section: sectionObj.name, option: $event})"
          @delete-section="$emit('delete-section', $event)"
        />
        <!-- {{key}}
        {{value}}-->
      </div>

      <div>
        <div class="add-section" @click="showAddSectionModal = true">
          <button class="btn btn-light add-section-btn">
            <i class="material-icons">add</i>

            <div>Add Section</div>
          </button>
        </div>

        <!-- Add New Section -->
        <Modal
          v-show="showAddSectionModal"
          @close="showAddSectionModal = false; if (addSectionMessage !== '') {$emit('reset-section-message')}"
          :modaltype="'addSection'"
          @add-section="$emit('add-section', $event)"
          :addSectionMessage="addSectionMessage"
          @reset-section-message="$emit('reset-section-message')"
        >
          <template slot="header"><h4>Add New Section...</h4></template>
          <template slot="body">
            Add a new section. Add quickly by hitting
            <kbd>Enter</kbd>.
          </template>
          <template slot="footer"></template>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import OptionSection from "./OptionSection.vue";
import Modal from "./Modal.vue";

export default {
  name: "CallHelper",
  components: {
    Menu,
    OptionSection,
    Modal
  },
  props: ["settingsData", "textbox", "addOptionMessage", "addSectionMessage"],
  data() {
    return {
      showAddSectionModal: false
    };
  }
};
</script>

<style scoped>
#mainDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.sidebar {
  width: 35%;
}

.menu-component {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;
  height: 100vh;
}

.header {
  background: rgb(236, 236, 236);
  padding: 30px 40px;
  width: 35%;
  color: black;
  text-align: center;
  align-self: stretch;
}

.header:after {
  content: "";
  display: table;
  clear: both;
}

input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

select {
  margin: 0;
  margin-bottom: 5px;
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* #addSectionBtn, #addItemBtn {
    margin-bottom: 25px;
} */

.addBtn:hover {
  /* background-color: #bbb; */
  background: rgba(48, 187, 48, 0.6);
  color: rgb(0, 0, 0);
}

.delBtn {
  padding: 10px;
  border: 0.5px solid #555;
  width: 100%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
  white-space: nowrap;
  background: rgba(150, 0, 0, 0.75);
  color: white;
}

.delBtn:hover {
  background: rgba(236, 91, 91, 0.6);
  color: black;
}

.list-container {
  align-self: flex-start;
  width: 65%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.list-container div {
  width: 100%;
}

.list-header {
  width: 100%;
  padding: 12px 20px 12px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  border: 1px solid rgba(85, 85, 85, 0.342);
  font-size: 18px;
}

.add-section {
  width: 100%;
  padding: 12px 20px 12px 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background: #eee;
  border: 1px solid rgba(85, 85, 85, 0.342);
  font-size: 18px;
}

.add-section-btn {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 80%;
}

.logInput {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 10px;
  float: left;
  font-size: 16px;
}
</style>
