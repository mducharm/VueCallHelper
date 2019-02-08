<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
            <button class="modal-default-button btn" @click="$emit('close')">
              <i class="material-icons">clear</i>
            </button>
          </div>

          <div class="modal-body">
            <!-- Body -->
            <slot name="body"></slot>

            <!-- Add Item -->
            <div v-show="modaltype === 'addItem'" class="add-block">
      
                <!-- <input
                  type="text"
                  placeholder="Add new item..."
                  style="width: 75%"
                  v-model="addInputText"
                >
                <i
                  class="material-icons btn btn-success"
                  style="width: 25%; display: inline-block"
                  @click="addOption()"
                >add</i> -->

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Add new item..."
                    aria-label="Add new item..."
                    aria-describedby="basic-addon2"
                    v-model="addInputText"
                  >
                  <div class="input-group-append">
                    <button class="btn btn-success" type="button" @click="addOption()">Add</button>
                  </div>
                </div>

            
              <p>{{ addOptionMessage }}</p>
            </div>

            <!-- Delete Section -->
            <div v-show="modaltype === 'deleteSection'">
              <button class="btn btn-danger" @click="$emit('delete-section')">Delete</button>
              <button class="btn btn-light" @click="$emit('close')">Cancel</button>
            </div>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button btn" @click="$emit('close')">Cancel</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["modaltype", "addOptionMessage"],
  data() {
    return {
      addInputText: "",
      postAddMessage: ""
    };
  },
  methods: {
    close() {
      this.postAddMessage = "";
      this.$emit("close");
    },
    addOption() {
      this.$emit("add-option", this.addInputText);
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.add-block {
  margin-top: 10px;
}

input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 100%;
  /* padding: 10px; */
  float: left;
  font-size: 16px;
}
</style>
