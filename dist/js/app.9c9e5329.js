(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],s=0,d=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);m&&m(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-741f5406":"7d913a81","chunk-3c8b95e0":"b812145a","chunk-525e8bbd":"3c33d6ca","chunk-77300246":"2427c08e","chunk-c88c39dc":"68e47b76"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3c8b95e0":1,"chunk-525e8bbd":1,"chunk-77300246":1,"chunk-c88c39dc":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-741f5406":"31d6cfe0","chunk-3c8b95e0":"94c6d1a8","chunk-525e8bbd":"eff887b4","chunk-77300246":"d3ee8570","chunk-c88c39dc":"efa2f106"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],m.parentNode.removeChild(m),n(u)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/aielearning/dist/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"4cc3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"menu-wrapper"},[r("img",{staticClass:"logo",attrs:{src:n("cf05")}}),r("el-breadcrumb",{staticClass:"nav-menu",attrs:{separator:" "}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("Home")]),r("el-breadcrumb-item",{attrs:{to:{path:"/exam"}}},[e._v("Exam")]),r("el-breadcrumb-item",{attrs:{to:{path:"/upload"}}},[e._v("Upload")]),r("el-breadcrumb-item")],1),r("el-breadcrumb",{staticClass:"nav-user"},[this.$store.state.isLogin?r("el-breadcrumb-item",[r("el-dropdown",{on:{click:e.handleClick,command:e.handleCommand}},[r("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(this.$store.state.username)+" ")]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"logout"}},[e._v("Logout")])],1)],1)],1):r("el-breadcrumb-item",{attrs:{to:{path:"/login"}}},[e._v("Login")])],1)],1),r("router-view")],1)},o=[],a={name:"NavMenu",methods:{logout:function(){this.$store.dispatch("logout")},handleCommand:function(e){"logout"==e&&this.$store.dispatch("logout")}}},u=a,c=(n("ecc4"),n("2877")),i=Object(c["a"])(u,r,o,!1,null,"59ee2ce8",null);t["a"]=i.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={name:"app"},c=u,i=(n("034f"),n("2877")),l=Object(i["a"])(c,o,a,!1,null,null,null),s=l.exports,d=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("NavMenu")],1)},f=[],p=n("4cc3"),h={name:"Home",data:function(){return{count:0}},components:{NavMenu:p["a"]}},g=h,b=Object(i["a"])(g,m,f,!1,null,null,null),v=b.exports;r["default"].use(d["a"]);var k=[{path:"/",name:"Home",meta:{requireLogin:!0},component:v},{path:"/login",name:"Login",meta:{requireLogin:!1},component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-77300246")]).then(n.bind(null,"a55b"))}},{path:"/signup",name:"Signup",meta:{requireLogin:!1},component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-3c8b95e0")]).then(n.bind(null,"34c3"))}},{path:"/upload",name:"Upload",meta:{requireLogin:!0},component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-c88c39dc")]).then(n.bind(null,"2679"))}},{path:"/exam",name:"Exam",meta:{requireLogin:!0},component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-525e8bbd")]).then(n.bind(null,"13b2"))}}],y=new d["a"]({mode:"history",base:"/aielearning/dist/",routes:k}),w=y,L=n("2f62");r["default"].use(L["a"]);var _=new L["a"].Store({state:{isLogin:localStorage.getItem("islogin"),username:localStorage.getItem("username")},mutations:{LOGIN:function(e){e.isLogin=localStorage.getItem("islogin"),e.username=localStorage.getItem("username")},LOGOUT:function(e){e.isLogin=localStorage.removeItem("islogin"),e.username=localStorage.removeItem("username")}},actions:{login:function(e){e.commit("LOGIN")},logout:function(e){e.commit("LOGOUT")}},modules:{}}),O=n("5c96"),S=n.n(O);n("0fae");r["default"].use(S.a);var x=n("98fc"),C=n.n(x);r["default"].use(L["a"]),r["default"].prototype.$x2js=new C.a,r["default"].config.productionTip=!1,w.beforeEach((function(e,t,n){e.meta.requireLogin?localStorage.getItem("islogin")?n():n({path:"/login",query:{redirect:e.fullPath}}):n()})),new r["default"]({router:w,store:_,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.a5d6813d.png"},d4e3:function(e,t,n){},ecc4:function(e,t,n){"use strict";var r=n("d4e3"),o=n.n(r);o.a}});
//# sourceMappingURL=app.9c9e5329.js.map