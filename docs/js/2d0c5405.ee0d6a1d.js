(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0c5405"],{"3dfd":function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("q-input",{attrs:{"float-label":"Heading",dark:"",color:"secondary"},model:{value:t.data.attributes.heading,callback:function(a){t.$set(t.data.attributes,"heading",a)},expression:"data.attributes.heading"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[0===t.data.attributes.titleMap.length?e("div",{staticClass:"q-mt-md"},[t._v("\n        No options have been added.\n      ")]):t._e(),t._l(t.data.attributes.titleMap,function(a,l){return e("div",{key:l,staticClass:"q-mt-md"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1 text-light text-weight-thin"},[t._v("Option "+t._s(l+1))]),e("div",{staticClass:"col q-pr-md"},[e("q-input",{staticStyle:{"padding-top":"0px"},attrs:{"float-label":"Title",color:"secondary",dark:""},model:{value:a.title,callback:function(e){t.$set(a,"title",e)},expression:"item.title"}})],1),e("div",{staticClass:"col"},[e("q-input",{staticStyle:{"padding-top":"0px"},attrs:{"float-label":"Value",color:"secondary",dark:""},model:{value:a.value,callback:function(e){t.$set(a,"value",e)},expression:"item.value"}})],1),e("div",{staticClass:"col-1 text-right"},[e("q-btn",{attrs:{icon:"delete",color:"faded",flat:"",dense:"",round:""},on:{click:function(a){t.$emit("removeOption",l)}}})],1)])])})],2)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col text-right"},[e("q-btn",{staticClass:"q-mt-md",attrs:{label:"Add option",color:"secondary",dense:""},on:{click:function(a){t.$emit("addOption")}}})],1)]),e("q-toggle",{staticClass:"q-mt-md q-mr-md",attrs:{label:"Mandatory",dark:"",color:"secondary","left-label":""},model:{value:t.data.attributes.mandatory,callback:function(a){t.$set(t.data.attributes,"mandatory",a)},expression:"data.attributes.mandatory"}}),e("q-toggle",{staticClass:"q-mt-md",attrs:{label:"Enabled",dark:"",color:"secondary","left-label":""},model:{value:t.data.attributes.enabled,callback:function(a){t.$set(t.data.attributes,"enabled",a)},expression:"data.attributes.enabled"}})],1)},i=[];l._withStripped=!0;var s={name:"QScriptQuestionnaire",props:["data"]},d=s,o=e("2877"),n=Object(o["a"])(d,l,i,!1,null,null,null);n.options.__file="Questionnaire.vue";a["default"]=n.exports}}]);