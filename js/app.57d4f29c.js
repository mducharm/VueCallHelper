(function(t){function e(e){for(var o,a,c=e[0],l=e[1],d=e[2],u=0,p=[];u<c.length;u++)a=c[u],i[a]&&p.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);r&&r(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/VueCallHelper/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var r=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3127:function(t,e,n){"use strict";var o=n("8d63"),i=n.n(o);i.a},5181:function(t,e,n){"use strict";var o=n("73db"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[n("li",{on:{click:function(e){t.activePage=1}}},[t._v("Call Helper")])]),n("CallHelper",{directives:[{name:"show",rawName:"v-show",value:1===t.activePage,expression:"activePage === 1"}],attrs:{settingsData:t.settingsData,textbox:t.textbox,addOptionMessage:t.addOptionMessage,addSectionMessage:t.addSectionMessage,importSettingsMessage:t.importSettingsMessage,datetimeTagProp:t.datetimeTag},on:{"datetime-toggled":function(e){t.datetimeTag=e,t.save()},"reset-add-message":function(e){t.addOptionMessage=""},"reset-section-message":function(e){t.addSectionMessage=""},"add-option":function(e){t.addOption(e)},"delete-option":function(e){t.deleteOption(e)},"toggle-option":function(e){t.toggleOption(e)},"update-string":function(e){t.updateSectionString(e)},"clear-textbox":function(e){t.clearTextbox()},"add-section":function(e){t.createSection(e)},"delete-section":function(e){t.deleteSection(e)},"copy-to-clipboard":function(e){t.copyToClipboard()},reset:function(e){t.reset()},"export-settings":function(e){t.exportJSON()},"file-loaded":function(e){t.queueImportedJSON(e)},"confirm-import":function(e){t.loadImportedJSON()}}})],1)},s=[],a=(n("6762"),n("2fdb"),n("7f7f"),n("f499")),c=n.n(a),l=(n("ac6a"),n("db0c")),d=n.n(l),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"})},u=[],p={name:"HelloWorld",props:{msg:String}},m=p,h=(n("3127"),n("2877")),g=Object(h["a"])(m,r,u,!1,null,"12dd27b2",null),f=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",attrs:{id:"mainDiv"}},[n("div",{staticClass:"sidebar"},[n("Menu",{staticClass:"menu-component",attrs:{textbox:t.textbox,settingsData:t.settingsData,importSettingsMessage:t.importSettingsMessage,datetimeTagProp:t.datetimeTagProp},on:{"datetime-toggled":function(e){t.$emit("datetime-toggled",e)},"clear-textbox":function(e){t.$emit("clear-textbox")},"copy-to-clipboard":function(e){t.$emit("copy-to-clipboard")},reset:function(e){t.$emit("reset")},"export-settings":function(e){t.$emit("export-settings")},"file-loaded":function(e){t.$emit("file-loaded",e)},"confirm-import":function(e){t.$emit("confirm-import")}}})],1),n("div",{staticClass:"list-container",attrs:{id:"list-container"}},[t._l(t.settingsData,function(e,o){return n("div",{key:o},[n("OptionSection",{attrs:{sectionTitle:e.name,sectionString:e.string,optionItems:e.options,addOptionMessage:t.addOptionMessage},on:{"reset-add-message":function(e){t.$emit("reset-add-message")},"delete-option":function(n){t.$emit("delete-option",{section:e.name,option:n})},"toggle-option":function(n){t.$emit("toggle-option",{section:e.name,option:n})},"update-string":function(n){t.$emit("update-string",{section:e.name,string:n})},"add-option":function(n){t.$emit("add-option",{section:e.name,option:n})},"delete-section":function(e){t.$emit("delete-section",e)}}})],1)}),n("div",[n("div",{staticClass:"add-section",on:{click:function(e){t.showAddSectionModal=!0}}},[t._m(0)]),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showAddSectionModal,expression:"showAddSectionModal"}],attrs:{modaltype:"addSection",addSectionMessage:t.addSectionMessage},on:{close:function(e){t.showAddSectionModal=!1,""!==t.addSectionMessage&&t.$emit("reset-section-message")},"add-section":function(e){t.$emit("add-section",e)},"reset-section-message":function(e){t.$emit("reset-section-message")}}},[n("template",{slot:"header"},[n("h4",[t._v("Add New Section...")])]),n("template",{slot:"body"},[t._v("\n          Add a new section. Add quickly by hitting\n          "),n("kbd",[t._v("Enter")]),t._v(".\n        ")]),n("template",{slot:"footer"})],2)],1)],2)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn-light add-section-btn"},[n("i",{staticClass:"material-icons"},[t._v("add")]),n("div",[t._v("Add Section")])])}],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._m(0),n("div",{staticClass:"icons-bar"},[n("i",{staticClass:"material-icons menu-icon btn btn-light",attrs:{title:"Settings"},on:{click:function(e){t.showSettings=!0}}},[t._v("settings")]),n("i",{staticClass:"material-icons menu-icon btn btn-light",attrs:{title:"About"},on:{click:function(e){t.showAbout=!0}}},[t._v("help_outline")])]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textbox,expression:"textbox"}],ref:"textbox",attrs:{name:"callLog",cols:"40",rows:"5",id:"callLog"},domProps:{value:t.textbox},on:{input:function(e){e.target.composing||(t.textbox=e.target.value)}}}),n("div",{staticClass:"icons-bar"},[n("div",{staticClass:"menu-icon-with-tooltip btn btn-light",attrs:{title:"Copy to Clipboard"},on:{click:function(e){t.handleCopyToClipboard()}}},[n("i",{staticClass:"material-icons menu-icon-inner"},[t._v("file_copy")]),n("transition",{attrs:{name:"copy-tool-tip-transition"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.copyToolTip,expression:"copyToolTip"}],staticClass:"btn btn-dark copy-tool-tip"},[t._v("Copied to Clipboard")])])],1),n("i",{staticClass:"material-icons menu-icon btn btn-light",attrs:{title:"Clear"},on:{click:function(e){t.$emit("clear-textbox")}}},[t._v("settings_backup_restore")])]),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showSettings,expression:"showSettings"}],on:{close:function(e){t.showSettings=!1}}},[n("template",{slot:"header"},[n("h4",[t._v("Settings")])]),n("template",{slot:"body"},[n("ul",[n("li",[n("button",{staticClass:"btn btn-light",staticStyle:{width:"100%"},attrs:{title:"Lists how often each option has been used"},on:{click:function(e){t.showOptionData=!0}}},[t._v("View Usage Data")])]),n("li",[n("button",{staticClass:"btn btn-light",staticStyle:{width:"100%"},attrs:{title:"Export settings as .json"},on:{click:function(e){t.$emit("export-settings")}}},[t._v("Export Settings")])]),n("li",[n("button",{staticClass:"btn btn-light datetime-btn",attrs:{title:"Adds date and time to textbox"},on:{click:function(e){t.handleDateTime()}}},[t.datetimeTagProp?n("i",{staticClass:"material-icons"},[t._v("check_box")]):n("i",{staticClass:"material-icons"},[t._v("check_box_outline_blank")]),t._v("\n            Toggle Datetime Tag")])]),n("li",[n("h6",[t._v("Import")]),n("div",{staticClass:"input-group"},[n("div",{staticClass:"custom-file"},[n("input",{staticClass:"custom-file-input importInput",attrs:{type:"file",id:"importJSONinput",title:"Import settings as .json"},on:{change:function(e){t.loadFile(e)}}}),n("label",{staticClass:"custom-file-label",attrs:{for:"importJSONinput"}},[n("p",{staticClass:"chooseFile"},[t._v("Choose File")])])]),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.$emit("confirm-import")}}},[t._v("Load")])])]),"Error - unable to import settings."===t.importSettingsMessage?n("span",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(t._s(t.importSettingsMessage))]):t.importSettingsMessage?n("span",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(t._s(t.importSettingsMessage))]):t._e()]),n("li",[n("h6",[t._v("Load Preset")]),n("div",{staticClass:"input-group"},[n("select",{staticClass:"custom-select",attrs:{id:"inputGroupSelect04",disabled:""}},[n("option",{attrs:{selected:""}},[t._v("Choose...")]),n("option",{attrs:{value:"1"}},[t._v("TuP - Enrollment")]),n("option",{attrs:{value:"2"}},[t._v("TuP - Retention")])]),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",disabled:""}},[t._v("Load")])])])]),n("li",[n("button",{staticClass:"btn btn-danger",on:{click:function(e){t.showResetConfirmation=!0}}},[t._v("Reset to Default Settings")])])])]),n("template",{slot:"footer"})],2),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showOptionData,expression:"showOptionData"}],on:{close:function(e){t.showOptionData=!1}}},[n("template",{slot:"header"},[n("h4",[t._v("View Option Data")])]),n("template",{slot:"body"},[n("table",{staticClass:"table table-striped table-sm"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Section")]),n("th",{attrs:{scope:"col"}},[t._v("Option")]),n("th",{attrs:{scope:"col"}},[t._v("Count")])])]),t._l(t.settingsData,function(e,o){return n("tbody",{key:o},t._l(e.options,function(o,i){return n("tr",{key:i},[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(o.option))]),n("td",[t._v(t._s(o.count))])])}),0)})],2)]),n("template",{slot:"footer"})],2),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showResetConfirmation,expression:"showResetConfirmation"}],attrs:{modaltype:"reset"},on:{reset:function(e){t.$emit("reset")},close:function(e){t.showResetConfirmation=!1}}},[n("template",{slot:"header"},[n("h4",[t._v("Reset?")])]),n("template",{slot:"body"},[n("p",[t._v("Are you sure you wish to reset back to default settings?")])]),n("template",{slot:"footer"})],2),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showAbout,expression:"showAbout"}],on:{close:function(e){t.showAbout=!1}}},[n("template",{slot:"header"},[n("h4",[t._v("About")])]),n("template",{slot:"body"},[n("p",[t._v("This app assists you with keeping detailed notes while on the phone. It's faster and easier to click instead of type, particularly when you are discussing complex topics.")]),n("p",[t._v("You can add your own sections and options as you wish. It saves your settings to your local browser's storage, so feel free to add/delete to fit your school's needs and your note-taking style.")]),n("p",[t._v("To use this effectively, I would suggest including anything you frequently discuss over the phone. If you find yourself typing something over and over, simply add it as a new item.")]),n("p",[t._v("- Michael Ducharm")])]),n("template",{slot:"footer"})],2)],1)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"call-helper-header"},[n("img",{staticClass:"small-TLH-icon",attrs:{src:"https://i.vimeocdn.com/portrait/16028080_300x300.webp",alt:"TLH Logo"}}),n("h2",{staticClass:"call-helper-header-text"},[t._v("Call Helper")])])}],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",[t._v("default header")]),n("button",{staticClass:"modal-default-button btn",on:{click:function(e){t.$emit("close")}}},[n("i",{staticClass:"material-icons"},[t._v("clear")])])],2),n("div",{staticClass:"modal-body"},[t._t("body"),n("div",{directives:[{name:"show",rawName:"v-show",value:"addItem"===t.modaltype,expression:"modaltype === 'addItem'"}],staticClass:"add-block"},[n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.addInputText,expression:"addInputText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Add new item...","aria-label":"Add new item...","aria-describedby":"basic-addon2"},domProps:{value:t.addInputText},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.addOption()},input:function(e){e.target.composing||(t.addInputText=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){t.addOption()}}},[t._v("Add")])])]),"Option already exists."===t.addOptionMessage?n("span",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(t._s(t.addOptionMessage))]):"Blank, please enter valid text."===t.addOptionMessage?n("span",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(t._s(t.addOptionMessage))]):t.addOptionMessage?n("span",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(t._s(t.addOptionMessage))]):t._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:"addSection"===t.modaltype,expression:"modaltype === 'addSection'"}],staticClass:"add-block"},[n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.addInputText,expression:"addInputText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Add new section...","aria-label":"Add new section...","aria-describedby":"basic-addon2"},domProps:{value:t.addInputText},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.addSection()},input:function(e){e.target.composing||(t.addInputText=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){t.addSection()}}},[t._v("Add")])])]),"Section already exists."===t.addSectionMessage?n("span",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(t._s(t.addSectionMessage))]):"Blank, please enter valid text."===t.addSectionMessage?n("span",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(t._s(t.addSectionMessage))]):t.addSectionMessage?n("span",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(t._s(t.addSectionMessage))]):t._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:"deleteSection"===t.modaltype,expression:"modaltype === 'deleteSection'"}],staticClass:"del-block"},[n("button",{staticClass:"btn btn-danger",on:{click:function(e){t.$emit("delete-section"),t.$emit("close")}}},[t._v("Delete")]),n("button",{staticClass:"btn btn-light",on:{click:function(e){t.$emit("close")}}},[t._v("Cancel")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"reset"===t.modaltype,expression:"modaltype === 'reset'"}],staticClass:"del-block"},[n("button",{staticClass:"btn btn-danger",on:{click:function(e){t.$emit("reset"),t.$emit("close")}}},[t._v("Reset")]),n("button",{staticClass:"btn btn-light",on:{click:function(e){t.$emit("close")}}},[t._v("Cancel")])])],2),n("div",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"modal-default-button btn",on:{click:function(e){t.$emit("close")}}},[t._v("Cancel")])])],2)])])])])},C=[],S={name:"Modal",props:["modaltype","addOptionMessage","addSectionMessage"],data:function(){return{addInputText:""}},methods:{close:function(){this.$emit("close")},addOption:function(){this.$emit("add-option",this.addInputText),this.addInputText=""},addSection:function(){this.$emit("add-section",this.addInputText),this.addInputText=""}}},x=S,k=(n("70ad"),Object(h["a"])(x,y,C,!1,null,"36ff4270",null)),M=k.exports,O={name:"Menu",components:{Modal:M},props:["textbox","settingsData","importSettingsMessage","datetimeTagProp"],data:function(){return{copyToolTip:!1,showSettings:!1,showAbout:!1,showResetConfirmation:!1,showOptionData:!1}},methods:{handleCopyToClipboard:function(){var t=this;this.$emit("copy-to-clipboard"),this.copyToolTip=!0,setTimeout(function(){t.copyToolTip=!1},1e3)},handleDateTime:function(){this.datetimeTagProp?this.$emit("datetime-toggled",!1):this.$emit("datetime-toggled",!0)},loadFile:function(t){var e=this,n=t.target.files[0],o=new FileReader;o.onload=function(t){return e.$emit("file-loaded",t.target.result)},o.readAsText(n)}}},T=O,D=(n("88c9"),Object(h["a"])(T,_,w,!1,null,"5c6a619a",null)),A=D.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"list-header"},[n("h1",{staticClass:"list-title"},[t._v(t._s(t.sectionTitle))]),n("div",{staticClass:"section-btns"},[n("i",{staticClass:"material-icons btn btn-outline-success",attrs:{title:"Add Items"},on:{click:function(e){t.showAddItemModal=!0}}},[t._v("add")]),n("i",{staticClass:"material-icons btn btn-outline-danger",attrs:{title:"Delete Items"},on:{click:t.toggleDelete}},[t._v("clear")]),n("i",{staticClass:"material-icons deleteSection btn btn-outline-dark",attrs:{title:"Delete Section"},on:{click:function(e){t.showDeleteSectionModal=!0}}},[t._v("delete")])])]),n("input",{staticClass:"form-control",attrs:{placeholder:"Add tagline here..."},domProps:{value:t.sectionString},on:{keyup:function(e){t.$emit("update-string",e.target.value)}}}),n("ul",t._l(t.sortedOptions,function(e,o){return n("li",{key:o,class:{checked:e.checked,deleting:t.deleting},on:{click:function(n){t.handleOptionClick(e.option)}}},[e.checked?n("i",{staticClass:"material-icons checked-box"},[t._v("check_box")]):n("i",{staticClass:"material-icons unchecked-box"},[t._v("check_box_outline_blank")]),n("div",[t._v(t._s(e.option))]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.deleting,expression:"deleting"}],staticClass:"material-icons"},[t._v("clear")])])}),0),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showAddItemModal,expression:"showAddItemModal"}],attrs:{modaltype:"addItem",addOptionMessage:t.addOptionMessage},on:{close:function(e){t.showAddItemModal=!1,""!==t.addOptionMessage&&t.$emit("reset-add-message")},"add-option":function(e){t.$emit("add-option",e)}}},[n("template",{slot:"header"},[n("h4",[t._v("Add to: "+t._s(t.sectionTitle))])]),n("template",{slot:"body"},[t._v("\n      Add an item to the "+t._s(t.sectionTitle)+" section. Add quickly by hitting\n      "),n("kbd",[t._v("Enter")]),t._v(".\n      ")])],2),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showDeleteSectionModal,expression:"showDeleteSectionModal"}],attrs:{modaltype:"deleteSection"},on:{close:function(e){t.showDeleteSectionModal=!1},"delete-section":function(e){t.$emit("delete-section",t.sectionTitle)}}},[n("template",{slot:"header"},[n("h4",[t._v("Delete "+t._s(t.sectionTitle)+" Section?")])]),n("template",{slot:"body"},[n("p",{staticClass:"modal-text"},[t._v("Are you sure you want to delete "+t._s(t.sectionTitle)+"?")])])],2)],1)},I=[],P=(n("55dd"),{name:"OptionSection",components:{Modal:M},props:["sectionTitle","sectionString","optionItems","addOptionMessage","addSectionMessage"],data:function(){return{deleting:!1,showAddItemModal:!1,showDeleteSectionModal:!1,addItemInput:""}},methods:{toggleDelete:function(){return this.deleting?this.deleting=!1:this.deleting=!0},handleOptionClick:function(t){this.deleting?this.$emit("delete-option",t):this.$emit("toggle-option",t)}},computed:{sortedOptions:function(){return this.optionItems.sort(function(t,e){return t.option.toUpperCase()>e.option.toUpperCase()?1:t.option.toUpperCase()<e.option.toUpperCase()?-1:0})}}}),N=P,E=(n("bc7c"),Object(h["a"])(N,$,I,!1,null,"1e28c4c2",null)),H=E.exports,j={name:"CallHelper",components:{Menu:A,OptionSection:H,Modal:M},props:["settingsData","textbox","addOptionMessage","addSectionMessage","importSettingsMessage","datetimeTagProp"],data:function(){return{showAddSectionModal:!1}}},R=j,J=(n("5181"),Object(h["a"])(R,v,b,!1,null,"13074297",null)),L=J.exports,U={name:"app",components:{HelloWorld:f,CallHelper:L},mounted:function(){if(localStorage.getItem("callHelperSettings")){var t=JSON.parse(localStorage.getItem("callHelperSettings"));this.settingsData=t.settingsData,this.datetimeTag=t.datetimeTag}else this.settingsData=this.defaultPreset,this.save()},data:function(){return{activePage:1,textboxString:"",addOptionMessage:"",addSectionMessage:"",importSettingsMessage:"",temporaryJSONData:"",datetimeTag:!1,settingsData:[],defaultPreset:[{name:"Call Status",string:"",options:[{option:"V2V",count:0,checked:!1},{option:"LVM",count:0,checked:!1},{option:"VM not set up",count:0,checked:!1},{option:"PUHU",count:0,checked:!1},{option:"V2V - called in, verified.",count:0,checked:!1},{option:"LVM - need financial plan",count:0,checked:!1}]},{name:"Identify Plan",string:"Identified Plan: ",options:[{option:"FA",count:0,checked:!1},{option:"FA, but grants only",count:0,checked:!1},{option:"OOP",count:0,checked:!1},{option:"Payment Plan",count:0,checked:!1},{option:"Military Benefits",count:0,checked:!1},{option:"Private Loans",count:0,checked:!1},{option:"TR",count:0,checked:!1},{option:"Tuition Assistance",count:0,checked:!1},{option:"3rd Party",count:0,checked:!1},{option:"Scholarships",count:0,checked:!1}]},{name:"General",string:"Reviewed: ",options:[{option:"DRT",count:0,checked:!1},{option:"Tuition Cost",count:0,checked:!1},{option:"Loans vs Grants",count:0,checked:!1},{option:"Responsible Borrowing",count:0,checked:!1},{option:"SAP Policy",count:0,checked:!1},{option:"TuP Role",count:0,checked:!1},{option:"Unsubsidized Loans",count:0,checked:!1}]},{name:"Next Step",string:"Next Step: ",options:[{option:"Complete FAFSA",count:0,checked:!1},{option:"Add School Code",count:0,checked:!1},{option:"Accept Award",count:0,checked:!1},{option:"Entrance Counseling",count:0,checked:!1},{option:"MPN",count:0,checked:!1}]},{name:"Post-Call Emails",string:"Post-call email: ",options:[{option:"Payment Options",count:0,checked:!1},{option:"School Resources",count:0,checked:!1},{option:"FA Award Info",count:0,checked:!1},{option:"Scholarship Info",count:0,checked:!1},{option:"Student Account Set-up Info",count:0,checked:!1}]}]}},computed:{textbox:function(){var t=this.settingsData.map(function(t){var e=d()(t),n=e[2].filter(function(t){return t.checked}),o=e;return o[2]=n.map(function(t){return t.option}),o}),e="";return this.datetimeTag&&(e+=this.currentDateTime),t.forEach(function(t){1===t[2].length?(t[1]&&(e+=t[1]+" "),e+=t[2][0]+"\n"):t[2].length>1&&(t[1]&&(e+=t[1]+" "),e+=t[2].reduce(function(t,e,n,o){return n<o.length?t+", "+e:t+e}),e+="\n")}),e},currentDateTime:function(){var t=new Date,e=t.getMonth(),n=t.getDate(),o=t.getHours()>12?t.getHours()-12:t.getHours()<10?"0"+t.getHours():t.getHours(),i=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();return e+"/"+n+" "+o+":"+i+"\n"}},methods:{save:function(){localStorage.setItem("callHelperSettings",c()({settingsData:this.settingsData,datetimeTag:this.datetimeTag}))},updateSectionString:function(t){var e=this.settingsData.map(function(t){return t.name}).indexOf(t.section);this.settingsData[e].string=t.string,this.save()},createSection:function(t){var e=this.settingsData.map(function(t){return t.name});if(e.includes(t))this.addSectionMessage="Section already exists.";else if(""===t)this.addSectionMessage="Blank, please enter valid text.";else try{this.settingsData.push({name:t,string:"",options:[]}),this.save(),this.addSectionMessage=t+" successfully added."}catch(n){this.addSectionMessage="Unable to add new section."}},deleteSection:function(t){var e=this.settingsData.map(function(t){return t.name}).indexOf(t);e>-1&&this.settingsData.splice(e,1),console.log(e),console.log(this.settingsData),this.save()},toggleOption:function(t){var e=this.settingsData.map(function(t){return t.name}).indexOf(t.section),n=this.settingsData[e].options.map(function(t){return t.option}).indexOf(t.option);this.settingsData[e].options[n].checked?this.settingsData[e].options[n].checked=!1:this.settingsData[e].options[n].checked=!0},addOption:function(t){var e=this.settingsData.map(function(t){return t.name}).indexOf(t.section),n=this.settingsData[e].options.map(function(t){return t.option});if(n.includes(t.option))this.addOptionMessage="Option already exists.";else if(""===t.option)this.addOptionMessage="Blank, please enter valid text.";else try{this.settingsData[e].options.push({option:t.option,count:0,checked:!1}),this.save(),this.addOptionMessage=t.option+" successfully added."}catch(o){this.addOptionMessage="Unable to add new option."}},deleteOption:function(t){var e=this.settingsData.map(function(t){return t.name}).indexOf(t.section),n=this.settingsData[e].options.filter(function(e){return e.option!==t.option});this.settingsData[e].options=n,this.save()},copyToClipboard:function(){var t=document.querySelector("#callLog");t.setAttribute("type","text"),t.select();try{document.execCommand("copy");this.incrementOptionCounts()}catch(e){alert("Oops, unable to copy")}t.setAttribute("type","hidden"),window.getSelection().removeAllRanges()},clearTextbox:function(){this.settingsData.forEach(function(t){t.options.forEach(function(t){t.checked=!1})})},reset:function(){this.settingsData=this.defaultPreset,this.save()},incrementOptionCounts:function(){this.settingsData.forEach(function(t){t.options.forEach(function(t){t.checked&&(t.count+=1)})})},exportJSON:function(){var t="data:text/json;charset=utf-8,"+encodeURIComponent(localStorage.getItem("callHelperSettings")),e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download","CallHelperSettings.json"),document.body.appendChild(e),e.click(),e.remove()},queueImportedJSON:function(t){this.temporaryJSONData=t},loadImportedJSON:function(){try{this.settingsData=JSON.parse(this.temporaryJSONData),this.save(),this.importSettingsMessage="Settings imported successfully."}catch(t){this.importSettingsMessage="Error - unable to import settings."}}}},F=U,V=(n("ffd4"),Object(h["a"])(F,i,s,!1,null,"4d516b1e",null)),q=V.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(q)}}).$mount("#app")},"6f7e":function(t,e,n){},"70ad":function(t,e,n){"use strict";var o=n("6f7e"),i=n.n(o);i.a},7295:function(t,e,n){},"73db":function(t,e,n){},"7d4d":function(t,e,n){},"88c9":function(t,e,n){"use strict";var o=n("7295"),i=n.n(o);i.a},"8d63":function(t,e,n){},bc7c:function(t,e,n){"use strict";var o=n("7d4d"),i=n.n(o);i.a},eabe:function(t,e,n){},ffd4:function(t,e,n){"use strict";var o=n("eabe"),i=n.n(o);i.a}});
//# sourceMappingURL=app.57d4f29c.js.map