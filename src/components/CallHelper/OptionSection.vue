<template>
  <div>
    <!-- Menu -->
    <div class="list-header">
      <h1 class="list-title">{{sectionTitle}}</h1>
      <div class="section-btns">
        <i class="material-icons btn btn-outline-success" @click="showAddItemModal = true">add</i>
        <i class="material-icons btn btn-outline-danger" @click="toggleDelete">clear</i>
        <i
          class="material-icons deleteSection btn btn-outline-dark"
          @click="showDeleteSectionModal = true"
        >delete</i>
      </div>
    </div>

    <!-- Section Tagline -->
    <input
      placeholder="Add tagline here..."
      class="form-control"
      :value="sectionString"
      @keyup="$emit('update-string', $event.target.value)"
    >

    <!-- <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Tag</span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Add tagline here..."
        aria-label="tagline"
        aria-describedby="basic-addon1"
        :value="sectionString"
        @keyup="$emit('update-string', $event.target.value)"
      >
    </div>-->
    <!-- Option List -->
    <ul>
      <li
        v-for="(optionData, index) in sortedOptions"
        :key="index"
        @click="handleOptionClick(optionData.option)"
        v-bind:class="{ checked: optionData.checked, deleting: deleting }"
      >
        <i v-if="optionData.checked" class="material-icons checked-box">check_box</i>
        <i v-else class="material-icons unchecked-box">check_box_outline_blank</i>
        <div>{{optionData.option}}</div>
        <i class="material-icons" v-show="deleting">clear</i>
      </li>
    </ul>

    <!-- Modals -->
    <!-- Add Item -->
    <Modal
      v-show="showAddItemModal"
      @close="showAddItemModal = false; if (addOptionMessage !== '') {$emit('reset-add-message')} "
      :modaltype="'addItem'"
      :addOptionMessage="addOptionMessage"
      @add-option="$emit('add-option', $event)"
    >
      <template slot="header">
        <h4>Add to: {{sectionTitle}}</h4>
      </template>
      <template slot="body">
        Add an item to the {{sectionTitle}} section. Add quickly by hitting
        <kbd>Enter</kbd>.
        <!-- <input
          placeholder="Add new item..."
          class="general-input"
          style="width: 75%"
          v-model="addItemInput"
        >
        <i class="material-icons btn btn-success" style="width: 25%" @click="addNewItem()">add</i>-->
      </template>
    </Modal>

    <!-- Delete Section -->
    <Modal
      v-show="showDeleteSectionModal"
      @close="showDeleteSectionModal = false"
      @delete-section="$emit('delete-section', sectionTitle)"
      :modaltype="'deleteSection'"
    >
      <template slot="header">
        <h4>Delete {{sectionTitle}} Section?</h4>
      </template>
      <template slot="body">
        <p class="modal-text">Are you sure you want to delete {{sectionTitle}}?</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "OptionSection",
  components: {
    Modal
  },
  props: [
    "sectionTitle",
    "sectionString",
    "optionItems",
    "addOptionMessage",
    "addSectionMessage"
  ],
  data() {
    return {
      deleting: false,
      showAddItemModal: false,
      showDeleteSectionModal: false,
      addItemInput: ""
    };
  },
  methods: {
    // addNewItem() {
    //   $emit("add-option", this.addItemInput);
    // },
    toggleDelete() {
      return this.deleting ? (this.deleting = false) : (this.deleting = true);
    },
    handleOptionClick(option) {
      if (this.deleting) {
        this.$emit("delete-option", option);
      } else {
        this.$emit("toggle-option", option);
      }
    }
  },
  computed: {
    sortedOptions: function() {
      // optionItems is an array of option objects with properties of option, count, & checked
      return this.optionItems.sort(function(a, b) {
        if (a.option.toUpperCase() > b.option.toUpperCase()) {
          return 1;
        } else if (a.option.toUpperCase() < b.option.toUpperCase()) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }
};
</script>

<style scoped>
.list-header {
  width: 100%;
  padding: 5px 20px 5px 40px;
  /* display: grid;
  grid-template-columns: 10% 10% 50% 15% 15%; */
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  border: 1px solid rgba(85, 85, 85, 0.342);
  border-radius: 10px;
  font-size: 18px;
}

.section-btns i {
  margin: 5px;
}

.logInput {
  margin-top: 5px;
  margin-bottom: 5px;
  border: solid 0.5px rgb(197, 197, 197);
  border-radius: 10px;
  background-color: rgba(241, 241, 241, 0.5);
  color: gray;
  width: 100%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

.logInput:focus {
  outline: none;
}

.general-input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

.list-title {
  font-size: 18px;
  text-align: center;
}

ul {
  margin: 0;
  padding: 0;
  padding-bottom: 2%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
}

ul li {
  cursor: pointer;
  position: relative;
  width: 20%;
  /* flex-grow: 1; */

  padding: 12px 30px 12px 30px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

ul li:nth-child(odd) {
  background: #f9f9f9;
}

ul li:hover {
  background: #ddd;
}

ul li.checked {
  background: rgba(30, 184, 25, 0.87);
  color: #fff;
}

ul li.deleting {
  background: rgba(212, 43, 43, 0.664);
  color: #fff;
}

/* ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 30%;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
} */

.checked-box, .unchecked-box {
  position: absolute;
  top: 0;
  left: 0;
}

.unchecked-box {
  color: rgb(189, 189, 189);
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
  height: 100%;
}

.close:hover {
  background-color: #fff;
  color: white;
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

.modal-text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
</style>
