(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58acedd5"],{"13b2":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-header",[n("ExamMenu",{attrs:{which_to_show:e.which_to_show},on:{changeMenu:function(t){e.change(t)},to_answer:function(t){e.answer(t)},get_exam_json:function(t){e.get_exam_json(t)}}})],1),n(e.which_to_show,{tag:"component",attrs:{which_to_show:e.which_to_show},on:{reset:function(t){e.resetM(t)}}})],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{staticClass:"menu-top",attrs:{"default-active":e.activeIndex,mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(t){e.change(1)}}},[n("el-input",{staticClass:"search-exam-input",attrs:{placeholder:"Input a exam code here",maxLength:"6"},model:{value:e.exam_code,callback:function(t){e.exam_code=t},expression:"exam_code"}}),n("el-button",{staticClass:"search-exam-btn",on:{click:function(t){e.search()}}})],1),n("el-menu-item",{attrs:{index:"2"},on:{click:function(t){e.change(2)}}},[e._v("generate exam")])],1)],1)},l=[],o=n("bc3a"),c=n.n(o),r={name:"ExamMenu",props:["which_to_show"],data:function(){return{activeIndex:1,exam_code:null}},methods:{change:function(e){1==e?this.$emit("changeMenu",""):this.$emit("changeMenu","ExamGenerate")},search:function(){var e=this,t="http://fangzx.pythonanywhere.com/api/search_examapi",n={headers:{"Content-Type":"text/xml"}};c.a.post(t,this.exam_code,n).then((function(t){if("success"==t.data.msg){var n=e.$x2js.xml2js(t.data.exam_content),a=new Date(n["exam"]["start_time"]),s=new Date(n["exam"]["end_time"]),i=new Date;s<i?alert("The exam is over"):a>i?alert("The exam is not begin"):(e.$emit("to_answer","ExamAnswer"),e.$emit("get_exam_json",n))}else alert(t.data.msg)})).catch((function(e){console.log(e),alert(e)}))}}},u=r,_=(n("826c"),n("2877")),p=Object(_["a"])(u,i,l,!1,null,null,null),m=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-select",{staticClass:"opt-grade",attrs:{clearable:"",placeholder:"Select grade"},model:{value:e.grade,callback:function(t){e.grade=t},expression:"grade"}},e._l(e.options_grade,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-select",{staticClass:"opt-diff",attrs:{clearable:"",placeholder:"Select difficulty"},model:{value:e.difficulty,callback:function(t){e.difficulty=t},expression:"difficulty"}},e._l(e.options_diff,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-select",{staticClass:"opt-kk",attrs:{clearable:"",multiple:"",placeholder:"Select key knowledge"},model:{value:e.kk,callback:function(t){e.kk=t},expression:"kk"}},e._l(e.options_kk,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("div",{staticClass:"date-time"},[n("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"start time","end-placeholder":"end time"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),n("el-button",{staticClass:"submit-btn",attrs:{type:"success"},on:{click:function(t){e.generate()}}},[e._v("submit")]),e._l(e.types,(function(t,a){return n("div",{key:a,staticClass:"type-input"},[n("el-select",{staticClass:"opt-types",attrs:{clearable:"",placeholder:"Select question types"},model:{value:e.types[a],callback:function(t){e.$set(e.types,a,t)},expression:"types[index]"}},e._l(e.options_types,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-input-number",{staticStyle:{width:"100px"},attrs:{step:1,size:"mini"},model:{value:e.types_num[a],callback:function(t){e.$set(e.types_num,a,t)},expression:"types_num[index]"}})],1)})),n("el-button",{staticClass:"add-btn",attrs:{type:"primary",icon:"el-icon-plus",circle:""},on:{click:e.add_type}}),n("el-button",{staticClass:"del-btn",attrs:{type:"danger",icon:"el-icon-minus",circle:""},on:{click:function(t){e.del_type(e.index)}}})],2)},h=[],f={name:"ExamGenerate",props:["which_to_change"],data:function(){return{options_grade:[{value:"first grade",label:"first grade"},{value:"second grade",label:"second grade"}],options_diff:[{value:"easy",label:"easy"},{value:"normal",label:"normal"},{value:"hard",label:"hard"}],options_types:[{value:"problem solving",label:"problem solving"},{value:"MCQ",label:"multiple choice question"},{value:"calculation",label:"calculation"}],options_kk:[{value:"Four Arithmetic Operations",label:"Four Arithmetic Operations"},{value:"problem of geometry",label:"problem of geometry"}],grade:"",difficulty:"",types:[""],types_num:[],kk:[],date:"",num:1}},methods:{add_type:function(){this.types.push("")},del_type:function(){1==this.types.length?alert("cannot be remove anymore"):this.types.pop()},generate:function(){var e=this,t={grade:this.grade,difficulty:this.difficulty,key_knowledge:this.kk,date:this.date,types:this.types,types_num:this.types_num};console.log(t);var n={headers:{"Content-Type":"application/json"}},a="http://fangzx.pythonanywhere.com/api/gen_examapi";c.a.post(a,t,n).then((function(t){"success"==t.data.msg&&(e.$msgbox({title:"success",message:"The exam code you generated is "+t.data.code}),e.$emit("reset",""))})).catch((function(e){console.log(e),alert("Wrong")}))}}},g=f,b=(n("dc61"),Object(_["a"])(g,d,h,!1,null,"2adf91ce",null)),x=b.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("current time is : "+e._s(e.cur_time))]),n("div",[e._v(e._s(e.left_time)+" minutes left")]),n("span",{staticClass:"question-title"},[e._v(e._s(this.exam_content[e.current_page-1].question_title))]),1===this.question_len[e.current_page-1].length?n("el-input",{staticClass:"ps-ans-input",attrs:{type:"textarea"},model:{value:e.ans_list[e.current_page-1],callback:function(t){e.$set(e.ans_list,e.current_page-1,t)},expression:"ans_list[current_page - 1]"}}):e._e(),5===this.question_len[e.current_page-1].length?n("div",{staticClass:"mcq-ans-input"},[n("el-radio",{attrs:{label:"A",border:""},model:{value:e.ans_list[e.current_page-1],callback:function(t){e.$set(e.ans_list,e.current_page-1,t)},expression:"ans_list[current_page - 1]"}},[e._v("A."+e._s(this.exam_content[e.current_page-1].option_a))]),n("el-radio",{attrs:{label:"B",border:""},model:{value:e.ans_list[e.current_page-1],callback:function(t){e.$set(e.ans_list,e.current_page-1,t)},expression:"ans_list[current_page - 1]"}},[e._v("B."+e._s(this.exam_content[e.current_page-1].option_b))]),n("el-radio",{attrs:{label:"C",border:""},model:{value:e.ans_list[e.current_page-1],callback:function(t){e.$set(e.ans_list,e.current_page-1,t)},expression:"ans_list[current_page - 1]"}},[e._v("C."+e._s(this.exam_content[e.current_page-1].option_c))]),n("el-radio",{attrs:{label:"D",border:""},model:{value:e.ans_list[e.current_page-1],callback:function(t){e.$set(e.ans_list,e.current_page-1,t)},expression:"ans_list[current_page - 1]"}},[e._v("D."+e._s(this.exam_content[e.current_page-1].option_d))])],1):e._e(),e.current_page===this.exam_content.length?n("el-button",{staticClass:"submit-btn",attrs:{type:"success"},on:{click:function(t){e.submit()}}},[e._v("submit")]):e._e(),n("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","current-page":e.current_page,"page-size":1,total:e.exam_content.length},on:{"current-change":e.handleCurrentChange}})],1)},y=[],k=(n("b64b"),{name:"ExamAnswer",props:["which_to_show"],data:function(){return{exam_content:[{question_title:"1+1="},{question_title:"2+2="}],question_len:[["question_title"]],current_page:1,ans_list:[],cur_time:0,left_time:0,start_time:"",end_time:""}},mounted:function(){var e=this;setInterval((function(){e.cur_time=new Date;var t=new Date(e.end_time)/1e3,n=parseInt(t)-parseInt(e.cur_time.getTime()/1e3);e.left_time=parseInt(n/60),parseInt(t)<=parseInt(e.cur_time.getTime()/1e3)&&e.submit()})),this.xml_to_json()},methods:{handleCurrentChange:function(e){this.current_page=e},xml_to_json:function(){var e=this.$parent.exam_json,t=e["exam"];this.start_time=t["start_time"],this.end_time=t["end_time"],console;for(var n=0;n<t["exam_questions"]["question_content"].length;n++)this.exam_content[n]=t["exam_questions"]["question_content"][n],this.question_len[n]=Object.keys(this.exam_content[n])}}}),w=k,C=(n("f00e"),Object(_["a"])(w,v,y,!1,null,"3eae7f9e",null)),j=C.exports,$={name:"Exam",data:function(){return{which_to_show:"",exam_json:""}},methods:{change:function(e){this.which_to_show=e},resetM:function(e){this.which_to_show=e},answer:function(e){this.which_to_show=e},get_exam_json:function(e){this.exam_json=e,console.log(this.exam_json)}},components:{ExamMenu:m,ExamGenerate:x,ExamAnswer:j}},q=$,E=Object(_["a"])(q,a,s,!1,null,null,null);t["default"]=E.exports},"826c":function(e,t,n){"use strict";var a=n("efb5"),s=n.n(a);s.a},"970b":function(e,t,n){},ad2f:function(e,t,n){},b64b:function(e,t,n){var a=n("23e7"),s=n("7b0b"),i=n("df75"),l=n("d039"),o=l((function(){i(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(e){return i(s(e))}})},dc61:function(e,t,n){"use strict";var a=n("970b"),s=n.n(a);s.a},efb5:function(e,t,n){},f00e:function(e,t,n){"use strict";var a=n("ad2f"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-58acedd5.d363c56c.js.map