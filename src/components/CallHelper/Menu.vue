<template>
    <div class="header">
      <img
        class="TLH-logo"
        src="https://i.vimeocdn.com/portrait/16028080_300x300.webp"
        alt="TLH Logo"
      >
      <h2>Call Log Creator</h2>
      <p>Check off the boxes while you're on the phone to create a detailed call log.</p>
      <textarea name="callLog" cols="40" rows="5" id="callLog"></textarea>
      <span onclick="copyText()" class="copyTextBtn">Copy to Clipboard</span>
      <span onclick="location.reload();" class="copyTextBtn" id="clearBtn">Clear</span>

      <!-- Add New Item -->
      <div class="menu-item">
        <h6>Add New Item</h6>
        <select name="sectionDropdown" id="sectionDropdown"></select>
        <input type="text" id="myInput" placeholder="Add Item..">
        <span onclick="newElement()" class="addBtn" id="addItemBtn">Add Item</span>
      </div>

      <!-- Add New Section -->
      <div class="menu-item">
        <h6>Add New Section</h6>
        <input type="text" id="myInput2" placeholder="Add Section..">
        <span onclick="newSection()" class="addBtn" id="addSectionBtn">Add Section</span>
      </div>

      <!-- Choose Preset -->
      <div class="menu-item">
        <h6>Choose Preset</h6>
        <select name="presetDropdown" id="presetDropdown">
          <option value="data">Tuition Planner</option>
          <option value="data2">Enrollment Counselor</option>
        </select>
        <span onclick="choosePreset()" class="addBtn" id="presetBtn">Load Preset</span>
      </div>

      <!-- Delete Section -->
      <div class="menu-item">
        <h6>Delete Section</h6>
        <select name="delSectionDropdown" id="delSectionDropdown"></select>
        <span onclick="delSection()" class="delBtn" id="delSectionBtn">Delete Section</span>
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
export default {
  name: "Menu"
};
</script>

<style>
</style>
