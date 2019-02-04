<template>
  <div>
    <div class="list-header">
      <i class="material-icons" @click="showAddItemModal = true">add</i>
      <i class="material-icons" @click="toggleDelete">clear</i>
      <h1 class="list-title">{{sectionTitle}}</h1>
      <div></div>
      <i class="material-icons deleteSection" @click="showDeleteSectionModal = true">delete</i>
    </div>

    <!-- Add Item -->
    <Modal v-show="showAddItemModal" @close="showAddItemModal = false">
      <template slot="header">Add to: {{sectionTitle}}</template>
      <template slot="body">
        <input placeholder="Add new item...">
      </template>
    </Modal>

    <!-- Delete Section -->
    <Modal v-show="showDeleteSectionModal" @close="showDeleteSectionModal = false">
      <template slot="header">Delete {{sectionTitle}} Section?</template>
      <template slot="body">
        <p>Are you sure you want to delete this section? It will be gone forever.</p>

        <button class="btn btn-danger">Delete</button>
        <button class="btn btn-light">Cancel</button>
      </template>
    </Modal>

    <ul>
      <li
        v-for="item in sortOptions(optionItems)"
        :key="item"
        @click="$emit('item-clicked', item)"
      >
        <p>{{item.name}}</p>
        <!-- <p>Count: {{item.count}}</p>
        <p>Checked: {{item.checked}}</p> -->
        <i class="material-icons" v-show="deleting">clear</i>
      </li>
    </ul>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "OptionSection",
  components: {
    Modal
  },
  props: ["sectionTitle", "optionItems"],
  data() {
    return {
      deleting: false,
      showAddItemModal: false,
      showDeleteSectionModal: false
    };
  },
  methods: {
    sortOptions (optionItems) { // may need to make this computed though? will have to test if this works after new items are added
      return optionItems.sort(function (a,b) {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1
        } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1
        } else {
          return 0;
        }
      })
    },
    toggleDelete () {
      return (this.deleting) ? this.deleting = false : this.deleting = true;
    }
  }
};
</script>

<style scoped>
.list-header {
  width: 100%;
  padding: 12px 20px 12px 40px;
  display: grid;
  grid-template-columns: 10% 10% 50% 15% 15%;
  background: #eee;
  border: 1px solid rgba(85, 85, 85, 0.342);
  border-radius: 10px;
  font-size: 18px;
}

.list-title {
  font-size: 18px;
  text-align: center;
}

.deleteSection {
  color: rgba(85, 85, 85, 0.7);
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
  width: 30%;
  flex-grow: 1;
  padding: 12px 30px 12px 40px;
  display: flex;
  align-items: center;
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

ul li.checked::before {
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
</style>
