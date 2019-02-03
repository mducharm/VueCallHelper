<template>
  <div id="mainDiv" class="card">
    <Menu/>

    <div class="list-container" id="list-container">
      <div v-for="(value, key) in settingsData" :key="key">
        <OptionSection :sectionTitle="key" :optionItems="value"/>
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

<style>
#mainDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.TLH-logo {
  height: 20vh;
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

.addBtn {
  padding: 10px;
  margin-bottom: 30px;
  border: 0.5px solid #555;
  width: 100%;
  /* background: #d9d9d9;
    color: #555; */
  background: rgba(0, 116, 0, 0.75);
  color: rgb(255, 254, 254);
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
  white-space: nowrap;
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

#clearBtn {
  margin-bottom: 30px;
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

#resetBtn {
  /* margin-top: 10px; */
  background: rgba(150, 0, 0, 0.75);
  color: white;
}

#resetBtn:hover {
  background: rgba(236, 91, 91, 0.6);
  color: black;
}

#delSectionBtn {
  margin-bottom: 50px;
}

#presetBtn {
  margin-bottom: 30px;
  border: 0.5px solid #555;
  background: rgba(28, 94, 238, 0.75);
  color: white;
}

#presetBtn:hover {
  background: rgba(96, 145, 252, 0.6);
  color: black;
}

.export {
  width: 100%;
  /* margin-top: 30px; */
  margin-bottom: 20px;
  border: 0.5px solid #555;
  background: gray;
  color: white;
}

.export:hover {
  background: rgba(96, 145, 252, 0.6);
  color: black;
}

.import {
  width: 100%;
  margin-top: 0;
  border: 0.5px solid #555;
  background: gray;
  color: white;
}

.import:hover {
  background: rgba(96, 145, 252, 0.6);
  color: black;
}

#file-input {
  width: 100%;
  margin-top: 0;
  border: 0.5px solid #555;
  border-bottom: 0;
  background: gray;
  color: white;
}
</style>
