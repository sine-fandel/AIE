(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29182e72"],{"15de":function(e,t,l){},"22f5":function(e,t,l){"use strict";var a=l("75e7"),s=l.n(a);s.a},2679:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"wrapper"},[l("el-steps",{attrs:{active:e.active,"align-center":""}},[l("el-step",{attrs:{title:"Step 1",description:"select subject"}}),l("el-step",{attrs:{title:"Step 2",description:"question information"}}),l("el-step",{attrs:{title:"Step 3",description:"question description"}}),l("el-step",{attrs:{title:"Step 4",description:"finished"}})],1),1==e.active?l("div",[l("p",{staticClass:"title"},[e._v("Select subject")]),l("el-select",{staticClass:"step-1",attrs:{clearable:"",placeholder:"Select subject"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}},e._l(e.options_sub,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),2==e.active?l("div",[l("p",{staticClass:"title"},[e._v("Question information")]),l("el-select",{staticClass:"step-2",attrs:{clearable:"",placeholder:"Select the question type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),l("el-select",{staticClass:"step-2-1",attrs:{clearable:"",placeholder:"Select question diffculty"},model:{value:e.diffculty,callback:function(t){e.diffculty=t},expression:"diffculty"}},e._l(e.options_dif,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),l("el-select",{staticClass:"step-2-2",attrs:{clearable:"",placeholder:"Select grade"},model:{value:e.grade,callback:function(t){e.grade=t},expression:"grade"}},e._l(e.options_grade,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),l("el-select",{staticClass:"step-2-3",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Select key knowledge"},model:{value:e.kk,callback:function(t){e.kk=t},expression:"kk"}},e._l(e.key_knowledge,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),3==e.active&&"MCQ"==e.type?l("div",[l("p",{staticClass:"title"},[e._v("multiple choice question")]),l("Fileupload",{staticClass:"upload-photo",attrs:{msg:"upload photo",tip:"JPG/PNG only"}}),l("Fileupload",{staticClass:"upload-word",attrs:{msg:"upload file",tip:"WORD only"}}),l("Mcqdescript",{directives:[{name:"blind",rawName:"v-blind:active",value:e.active,expression:"active",arg:"active"}],ref:"child",staticClass:"upload-mcqquetion",on:{activeChange:function(t){e.activeChange()}}})],1):e._e(),3==e.active&&"problem solving"==e.type?l("div",[l("p",{staticClass:"title"},[e._v("problem solving")]),l("input",{staticClass:"photo-file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.uploadPhoto(t)}}}),l("label",{attrs:{for:"file"}},[e._v("Upload Photo")]),l("input",{staticClass:"word-file",attrs:{type:"file",id:"file"}}),l("label",{attrs:{for:"file"}},[e._v("Upload WORD")]),l("Psdescript",{directives:[{name:"blind",rawName:"v-blind:active",value:e.active,expression:"active",arg:"active"}],ref:"child",staticClass:"upload-wquestion",on:{activeChange:function(t){e.activeChange()}}})],1):e._e(),4==e.active?l("div",[l("p",{staticClass:"title"},[e._v("Finished")])]):e._e()],1),l("div",{staticClass:"btn"},[l("el-button",{staticClass:"btn-last",attrs:{disabled:1==e.active,type:"primary",icon:"el-icon-arrow-left"},on:{click:function(t){e.step(0)}}},[e._v("last step")]),l("el-button",{staticClass:"btn-next",attrs:{disabled:4==e.active,type:"primary"},on:{click:function(t){e.step(1)}}},[e._v("next step"),l("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)])},s=[],o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-upload",{staticClass:"upload-photo",attrs:{action:"","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:2,"on-exceed":e.handleExceed,"file-list":e.fileList}},[l("el-button",{attrs:{type:"info"}},[e._v(e._s(e.msg))]),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.tip))])],1)],1)},i=[],n={name:"Fileupload",props:{msg:String,tip:String},data:function(){return{fileList:[]}},handlePreview:function(e){console.log(e)}},r=n,c=(l("ed49"),l("2877")),u=Object(c["a"])(r,o,i,!1,null,"29b44af0",null),p=u.exports,d=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-form",{ref:"ruleForm",staticClass:"des-el-form",attrs:{model:e.ruleForm,rules:e.rules,"label-position":e.labelPosition,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"question description",prop:"des"}},[l("el-input",{staticClass:"des-el-input",attrs:{type:"textarea"},model:{value:e.ruleForm.des,callback:function(t){e.$set(e.ruleForm,"des",t)},expression:"ruleForm.des"}})],1),l("el-form-item",{staticClass:"el-label-ans",attrs:{label:"answer",prop:"ans"}},[l("el-input",{staticClass:"des-el-input",attrs:{type:"textarea"},model:{value:e.ruleForm.ans,callback:function(t){e.$set(e.ruleForm,"ans",t)},expression:"ruleForm.ans"}})],1),l("el-form-item",{staticClass:"el-label-note",attrs:{label:"note",prop:"note"}},[l("el-input",{staticClass:"des-el-input",attrs:{type:"textarea"},model:{value:e.ruleForm.note,callback:function(t){e.$set(e.ruleForm,"note",t)},expression:"ruleForm.note"}})],1)],1)],1)},m=[],f=l("bc3a"),v=l.n(f),b={name:"Psdescript",props:{active:String},data:function(){return{labelPosition:"top",ruleForm:{des:"",ans:"",note:""},rules:{des:[{required:!0,message:"question description cannot be empty",trigger:"blur"}],ans:[{required:!0,message:"answer cannot be empty",trigger:"blur"}]}}},methods:{handleNextbtn:function(){if(""==this.ruleForm.des||""==this.ruleForm.ans)this.$message({type:"error",message:"question description and answer cannot be empty"});else{var e=this.$parent.subject,t=this.$parent.type,l=this.$parent.diffculty,a=this.$parent.grade,s=this.$parent.kk;this.postXML(e,t,l,a,s),this.$emit("activeChange")}},postXML:function(e,t,l,a,s){var o='<?xml version="1.0" encoding="utf-8"?><question><question_info><subject>'+e+"</subject><type>"+t+"</type><diffculty>"+l+"</diffculty><grade>"+a+"</grade><key_knowledge>"+s+"</key_knowledge></question_info><question_content><question_title>"+this.ruleForm.des+"</question_title></question_content><correct_answer>"+this.ruleForm.ans+"</correct_answer><explanation>"+this.ruleForm.note+"</explanation></question>";console.log(o);var i="https://fangzx.pythonanywhere.com/api/uploadApi",n={headers:{"Content-Type":"text/xml"}};v.a.post(i,o,n).then((function(e){console.log(e)})).catch((function(e){console.log(e),alert(e)}))}}},h=b,g=(l("9641"),Object(c["a"])(h,d,m,!1,null,null,null)),y=g.exports,_=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-form",{ref:"ruleForm",staticClass:"des-el-form",attrs:{model:e.ruleForm,rules:e.rules,"label-position":e.labelPosition,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"question description",prop:"des"}},[l("el-input",{staticClass:"des-el-input1",attrs:{type:"textarea"},model:{value:e.ruleForm.des,callback:function(t){e.$set(e.ruleForm,"des",t)},expression:"ruleForm.des"}})],1),l("div",[l("h1",{staticClass:"opt-a"},[e._v("A")]),l("el-form-item",{attrs:{prop:"opta"}},[l("el-input",{staticClass:"opt-a-input",model:{value:e.ruleForm.opta,callback:function(t){e.$set(e.ruleForm,"opta",t)},expression:"ruleForm.opta"}})],1),l("h1",{staticClass:"opt-b"},[e._v("B")]),l("el-form-item",{attrs:{prop:"optb"}},[l("el-input",{staticClass:"opt-b-input",model:{value:e.ruleForm.optb,callback:function(t){e.$set(e.ruleForm,"optb",t)},expression:"ruleForm.optb"}})],1),l("h1",{staticClass:"opt-c"},[e._v("C")]),l("el-form-item",{attrs:{prop:"optc"}},[l("el-input",{staticClass:"opt-c-input",model:{value:e.ruleForm.optc,callback:function(t){e.$set(e.ruleForm,"optc",t)},expression:"ruleForm.optc"}})],1),l("h1",{staticClass:"opt-d"},[e._v("D")]),l("el-form-item",{attrs:{prop:"optd"}},[l("el-input",{staticClass:"opt-d-input",model:{value:e.ruleForm.optd,callback:function(t){e.$set(e.ruleForm,"optd",t)},expression:"ruleForm.optd"}})],1),l("el-form-item",{staticClass:"el-label-ans1",attrs:{label:"answer",prop:"ans"}},[l("el-select",{staticClass:"ans-el-input",attrs:{placeholder:"choose answer"},model:{value:e.ruleForm.ans,callback:function(t){e.$set(e.ruleForm,"ans",t)},expression:"ruleForm.ans"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-form-item",{staticClass:"el-label-note1",attrs:{label:"note",prop:"note"}},[l("el-input",{staticClass:"note-el-input",attrs:{type:"textarea"},model:{value:e.ruleForm.note,callback:function(t){e.$set(e.ruleForm,"note",t)},expression:"ruleForm.note"}})],1)],1)],1)],1)},F=[],C={name:"Mcqdescript",props:{active:String},data:function(){return{labelPosition:"top",ruleForm:{des:"",opta:"",optb:"",optc:"",optd:"",ans:"",note:""},options:[{value:"A",label:"A"},{value:"B",label:"B"},{value:"C",label:"C"},{value:"D",label:"D"}],rules:{des:[{required:!0,message:"question description cannot be empty",trigger:"blur"}],ans:[{required:!0,message:"answer cannot be empty",trigger:"blur"}]}}},methods:{handleNextbtn:function(){if(""==this.ruleForm.des||""==this.ruleForm.ans)this.$message({type:"error",message:"question description and answer cannot be empty"});else{var e=this.$parent.subject,t=this.$parent.type,l=this.$parent.diffculty,a=this.$parent.grade,s=this.$parent.kk;this.createXML(e,t,l,a,s),this.$emit("activeChange")}},createXML:function(e,t,l,a,s){var o='<?xml version="1.0" encoding="utf-8"?><question><question_info><subject>'+e+"</subject><type>"+t+"</type><diffculty>"+l+"</diffculty><grade>"+a+"</grade><key_knowledge>"+s+"</key_knowledge></question_info><question_content><question_title>"+this.ruleForm.des+"</question_title><option_a>"+this.ruleForm.opta+"</option_a><option_b>"+this.ruleForm.optb+"</option_b><option_c>"+this.ruleForm.optc+"</option_c><option_d>"+this.ruleForm.optd+"</option_d></question_content><correct_answer>"+this.ruleForm.ans+"</correct_answer><explanation>"+this.ruleForm.note+"</explanation>\n</question>";console.log(o);var i="https://fangzx.pythonanywhere.com/api/uploadApi",n={headers:{"Content-Type":"text/xml"}};v.a.post(i,o,n).then((function(e){console.log(e)})).catch((function(e){console.log(e),alert(e)}))}}},k=C,x=(l("2f72"),Object(c["a"])(k,_,F,!1,null,null,null)),w=x.exports,q={name:"Upload",data:function(){return{active:1,options_dif:[{value:"easy",label:"easy"},{value:"hard",label:"hard"},{value:"normal",label:"normal"}],options_sub:[{value:"maths",label:"maths"},{value:"English",label:"English"}],options_grade:[{value:"first grade",label:"first grade"},{value:"second grade",label:"second grade"},{value:"third grade",label:"third grade"}],key_knowledge:[{value:"Four Arithmetic Operations",label:"Four Arithmetic Operations"},{value:"problem of geometry",label:"problem of geometry"}],options:[{value:"MCQ",label:"multiple choice question"},{value:"problem solving",label:"problem solving"}],type:"",subject:"",diffculty:"",grade:"",photolist:"",kk:[],wruleForm:{labelPosition:"top"}}},methods:{step:function(e){1==e?(1==this.active&&(""==this.subject?this.$message({type:"error",message:"Please select the subject"}):this.active++),2==this.active&&(""==this.type?this.$message({type:"error",message:"Please select the question type"}):this.active++),3==this.active&&"problem solving"==this.type&&this.$refs.child.handleNextbtn(),3==this.active&&"MCQ"==this.type&&this.$refs.child.handleNextbtn()):this.active>1&&this.active--},uploadPhoto:function(e){var t=e.target.files[0],l=new FileReader;l.readAsDataURL(t),l.onload=function(){console.log(l.result)}},activeChange:function(){this.active=4}},components:{Fileupload:p,Psdescript:y,Mcqdescript:w}},$=q,j=(l("22f5"),Object(c["a"])($,a,s,!1,null,"da8abb5c",null));t["default"]=j.exports},"2f72":function(e,t,l){"use strict";var a=l("15de"),s=l.n(a);s.a},"75e7":function(e,t,l){},9641:function(e,t,l){"use strict";var a=l("f83a"),s=l.n(a);s.a},cced:function(e,t,l){},ed49:function(e,t,l){"use strict";var a=l("cced"),s=l.n(a);s.a},f83a:function(e,t,l){}}]);
//# sourceMappingURL=chunk-29182e72.fbb337d9.js.map