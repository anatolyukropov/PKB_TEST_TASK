(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"277c":function(t,e,a){},"3cd1":function(t,e,a){"use strict";var n=a("7631"),s=a.n(n);s.a},"3e4a":function(t,e,a){},"4ec6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("Home")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.components,function(e){return a("v-btn",{key:e,staticClass:"nav-btn",on:{click:function(a){return t.setComponent(e)}}},[t._v(t._s(e))])}),a(t.currentComponent,{tag:"component",staticClass:"component"})],2)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("transition",{attrs:{name:"fade"}},[a("div",{ref:"fade",staticClass:"save-text"},[a("p",[t._v("Сохранено")])])]),a("h1",{staticClass:"table-title"},[t._v("Клиент")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:"true"},nativeOn:{input:function(e){return t.update(e)}},scopedSlots:t._u([{key:"item.FIO",fn:function(e){return[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.item.FIO,expression:"props.item.FIO"}],staticClass:"slot-FIO__text",attrs:{id:e.item.id_person},domProps:{value:e.item.FIO},on:{input:function(a){a.target.composing||t.$set(e.item,"FIO",a.target.value)}}})]}}])})],1)},c=[],u={name:"Person",data(){return{show:!1,headers:[{text:"id",align:"center",sortable:!1,value:"id_person",width:"50%"},{text:"ФИО",value:"FIO",align:"center",sortable:!0,width:"50%"}],items:[]}},async created(){let t=await this.$http.get("/api/person/all");t.data.success?this.items=t.data.msg:this.items=this.items},methods:{update:_.debounce(function(t){this.save(t.target.value,t.target.id)},2e3),save:async function(t,e){let a=await this.$http.post(`/api/person/update/${e}/fio/${t}`);if(a.data.success)if(this.$refs.fade.classList.contains("save-text_fade")){let t=document.getElementsByClassName("save-text")[0],e=t.cloneNode(!0);t.parentNode.replaceChild(e,t)}else this.$refs.fade.classList.toggle("save-text_fade")}}},d=u,p=(a("70db"),a("2877")),f=a("6544"),m=a.n(f),h=a("8fea"),v=Object(p["a"])(d,l,c,!1,null,"67ba9748",null),b=v.exports;m()(v,{VDataTable:h["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",{staticClass:"table-title"},[t._v("Портфель")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:"true"}})],1)},w=[],y={name:"Portfolio",data(){return{headers:[{text:"id",align:"center",sortable:!1,value:"id_portfolio",width:"25%"},{text:"Имя Портфеля",value:"Portfolio_name",align:"center",width:"25%"},{text:"Дата Подписи",value:"Sign_date",align:"center",width:"25%"},{text:"Дата завершения",value:"End_date",align:"center",width:"25%"}],items:[]}},async created(){let t=await this.$http.get("/api/portfolio/all");t.data.success?this.items=t.data.msg:this.items=this.items}},x=y,C=(a("e262"),Object(p["a"])(x,g,w,!1,null,"03b44854",null)),O=C.exports;m()(C,{VDataTable:h["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",{staticClass:"table-title"},[t._v("Задолженность")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:"true"}})],1)},P=[],j={name:"Debt",data(){return{show:!1,headers:[{text:"Клиент",align:"center",sortable:!1,value:"FIO",width:"25%"},{text:"id",value:"id_debt",align:"center",width:"25%"},{text:"Портфель",value:"Portfolio_name",align:"center",width:"25%"},{text:"Сумма Долга",value:"Debt_sum",align:"center",width:"25%"}],items:[]}},async created(){let t=await this.$http.get("/api/debt/all");t.data.success?this.items=t.data.msg:this.items=this.items}},D=j,E=(a("6fcb"),Object(p["a"])(D,$,P,!1,null,"6b8bb1a7",null)),F=E.exports;m()(E,{VDataTable:h["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",{staticClass:"table-title"},[t._v("Платежи")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:"true"}})],1)},S=[],T={name:"Payment",data(){return{headers:[{text:"id Долга",align:"center",sortable:!1,value:"id_debt",width:"33%"},{text:"Сумма платежа",value:"Payment_sum",align:"center",width:"33%"},{text:"Дата платежа",value:"Date",align:"center",width:"33%"}],items:[]}},async created(){let t=await this.$http.get("/api/payment/all");t.data.success?this.items=t.data.msg:this.items=this.items}},V=T,k=(a("3cd1"),Object(p["a"])(V,I,S,!1,null,"7eae2bdb",null)),M=k.exports;m()(k,{VDataTable:h["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",{staticClass:"table-title"},[t._v("Календарь")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:"true"}})],1)},L=[],A={name:"Payment",data(){return{headers:[{text:"Месяц",align:"center",sortable:!1,value:"Cal_date",width:"100%"}],items:[]}},async created(){let t=await this.$http.get("/api/calendar/all");t.data.success?this.items=t.data.msg:this.items=this.items}},B=A,H=(a("5999"),Object(p["a"])(B,N,L,!1,null,"65b3f760",null)),J=H.exports;m()(H,{VDataTable:h["a"]});var R={components:{Person:b,Portfolio:O,Debt:F,Payment:M,Calendar:J},data:function(){return{currentComponent:"",components:["Person","Portfolio","Debt","Payment","Calendar"]}},methods:{setComponent:function(t){this.currentComponent=t}}},U=R,q=(a("c14e"),a("8336")),z=Object(p["a"])(U,r,o,!1,null,"04aabf93",null),G=z.exports;m()(z,{VBtn:q["a"]});var K={name:"App",components:{Home:G},data:()=>({})},Q=K,W=a("7496"),X=a("a75b"),Y=Object(p["a"])(Q,s,i,!1,null,null,null),Z=Y.exports;m()(Y,{VApp:W["a"],VContent:X["a"]});var tt=a("8c4f");n["a"].use(tt["a"]);var et=new tt["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:G}]}),at=a("2f62");n["a"].use(at["a"]);var nt=new at["a"].Store({state:{},mutations:{},actions:{}}),st=a("bc3a"),it=a.n(st),rt=a("f309");n["a"].use(rt["a"]);var ot=new rt["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,n["a"].prototype.$http=it.a,n["a"].prototype.$http.defaults.withCredentials=!0,n["a"].prototype.$http.defaults.baseURL="http://92.255.68.242:5000",new n["a"]({router:et,store:nt,vuetify:ot,render:t=>t(Z)}).$mount("#app")},5798:function(t,e,a){},5999:function(t,e,a){"use strict";var n=a("4ec6"),s=a.n(n);s.a},"6fcb":function(t,e,a){"use strict";var n=a("277c"),s=a.n(n);s.a},"70db":function(t,e,a){"use strict";var n=a("a828"),s=a.n(n);s.a},7631:function(t,e,a){},a828:function(t,e,a){},c14e:function(t,e,a){"use strict";var n=a("3e4a"),s=a.n(n);s.a},e262:function(t,e,a){"use strict";var n=a("5798"),s=a.n(n);s.a}});
//# sourceMappingURL=app.e54b6b03.js.map