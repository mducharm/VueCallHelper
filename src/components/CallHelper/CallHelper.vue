<template>
  <div id="mainDiv" class="card">
    <div class="sidebar">
      <Menu class="menu-component"/>
    </div>

    <div class="list-container" id="list-container">
      <div v-for="section in settingsData" :key="section">
        <OptionSection :sectionTitle="section.title" :optionItems="section.items"/>
        <!-- {{key}}
        {{value}}-->
      </div>
      <div class="list-header">
        <div @click="showAddSectionModal = true">
          Add Section
          <i class="material-icons">add</i>
        </div>
        <Modal v-show="showAddSectionModal" @close="showAddSectionModal = false">
          <template slot="header">Add New Section...</template>
          <template slot="body">
            <input type="text" placeholder="Add new section...">
            <i class="material-icons">add</i>
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
  props: ["settingsData"],
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
