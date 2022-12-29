(function(){"use strict";var e={7811:function(e,t,i){var r=i(144),n=i(1096),s=i(8819),o=i(1828),l=i(3058),c=i(5223),u=i(4437),a=i(6035),_=i(6927),d=i(4192),h=i(8714),p=i(6487),f=i(1911),v=i(1133),m=i(4380),Z=i(5057),k=i(248),q=i(1908),b=i(2198),g=i(8228),x=i(3551),y=i(7575),w=i(5294),R=i(5234),P=i(2680),O=i(9953),E=i(303),S=i(5838),T=i(2370),j=function(){var e=this,t=e._self._c;return t(n.Z,{attrs:{id:"inspire"}},[t(O.Z,{staticClass:"py-6",attrs:{app:"",color:"blue lighten-2"}},[t(u.Z,{attrs:{cols:"4"}},[t(s.Z,{attrs:{color:"white darken-1",size:"36"}},[t(Z.Z,[e._v("mdi-code-json")])],1),e._v("   "),t("b",[e._v("Cuctom Lens Editor")])],1),t(u.Z,[t(m.Z,{attrs:{placeholder:"import JSON File"},on:{change:e.readFile},model:{value:e.inputFile,callback:function(t){e.inputFile=t},expression:"inputFile"}})],1),t(u.Z,{attrs:{align:"center"}},[e.inputFile?t(o.Z,{attrs:{icon:""},on:{click:function(t){e.dialog_preview=!0}}},[t(Z.Z,[e._v("mdi-eye")]),e._v(" Preview ")],1):e._e()],1)],1),t(y.Z,{attrs:{app:""}},[t(d.Z),t(k.Z,e._l(e.links,(function([i,r,n]){return t(q.Z,{key:r,attrs:{link:""}},[t(g.Z,[t(Z.Z,[e._v(e._s(i))])],1),t(b.km,[t(b.V9,{on:{click:function(t){return e.v_load_pillar(r,n)}}},[e._v(e._s(n))])],1)],1)})),1)],1),t(x.Z,[t(a.Z,{staticClass:"py-8 px-6",attrs:{fluid:""}},[t(w.Z,[t(u.Z,[t(l.Z,{staticClass:"overflow-auto"},[t(P.Z,[t(Z.Z,[e._v("mdi-pillar")]),t("h1",[e._v(e._s(e.pillar_title))])],1),e.current_pillar?t(k.Z,{attrs:{"two-line":""}},[[t(v.Z,{attrs:{focusable:""}},e._l(e.questions,(function(i){return t(h.Z,{key:i.id},[t(f.Z,[t("div",[t(Z.Z,[e._v("mdi-comment-question")]),e._v(" ("+e._s(i.id)+") "+e._s(i.title)+" ")],1)]),t(p.Z,[e._l(i.choices,(function(r){return t("div",{key:r.id},[t("div",{attrs:{inline:""}},[t(Z.Z,{attrs:{small:""}},[e._v("mdi-card-outline")]),e._v(" ("+e._s(r.id)+")   "+e._s(r.title)+"   "),t(Z.Z,{attrs:{small:""},on:{click:function(t){return e.v_form_choice(i.id,r.id)}}},[e._v(" mdi-pencil ")])],1)])})),t("div",{attrs:{align:"right"}},[t(o.Z,{attrs:{color:"green darken",medium:""},on:{click:function(t){return e.v_form_choice(i.id,"cl_create_new_choice")}}},[t(Z.Z,{attrs:{small:""}},[e._v("mdi-card-plus")]),e._v(" Add a new choice to this question ....")],1)],1),t("hr"),t("div",[t("b",[e._v("riskRules")]),t("br"),e._v(" "+e._s(i.riskRules)+" "),t("br"),t(Z.Z,{attrs:{small:""},on:{click:function(t){return e.v_form_question(i.id)}}},[e._v(" mdi-pencil ")])],1)],2)],1)})),1),t("div",{attrs:{align:"right"}},[t(o.Z,{attrs:{color:"blue lighten-3",medium:""},on:{click:function(t){return e.v_form_question("cl_create_new_question")}}},[t(Z.Z,{attrs:{small:""}},[e._v("mdi-card-plus")]),e._v(" Add a new question ....")],1)],1)]],2):e._e()],1)],1)],1),t(w.Z,{attrs:{justify:"center"}},[t(_.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.Z,[t(c.EB,[t("span",{staticClass:"text-h5"},[e._v("Choice")])]),t(c.ZB,[t(a.Z,[t(w.Z,[t(u.Z,{attrs:{cols:"4"}},[t(E.Z,{attrs:{label:"Choice Unique Id"},model:{value:e.current_choice.id,callback:function(t){e.$set(e.current_choice,"id",t)},expression:"current_choice.id"}})],1),t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"Choice Title",required:""},model:{value:e.current_choice.title,callback:function(t){e.$set(e.current_choice,"title",t)},expression:"current_choice.title"}})],1),t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"Choice Description",hint:"example of helper text only on focus"},model:{value:e.current_choice.description,callback:function(t){e.$set(e.current_choice,"description",t)},expression:"current_choice.description"}})],1)],1),t(w.Z,[t(u.Z,{attrs:{cols:"12"}},[t("h2",[e._v(" Helpful Resource ")])])],1),t(w.Z,[t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"Display Text",hint:"example of helper text only on focus"},model:{value:e.current_choice.helpfulResource.displayText,callback:function(t){e.$set(e.current_choice.helpfulResource,"displayText",t)},expression:"current_choice.helpfulResource.displayText"}})],1),t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"Reference URL",hint:"example of helper text only on focus"},model:{value:e.current_choice.helpfulResource.url,callback:function(t){e.$set(e.current_choice.helpfulResource,"url",t)},expression:"current_choice.helpfulResource.url"}})],1)],1),t(w.Z,[t(u.Z,{attrs:{cols:"12"}},[t("h2",[e._v(" Improvement Plan ")])])],1),t(w.Z,[t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"Display Text",hint:"example of helper text only on focus"},model:{value:e.current_choice.improvementPlan.displayText,callback:function(t){e.$set(e.current_choice.improvementPlan,"displayText",t)},expression:"current_choice.improvementPlan.displayText"}})],1),t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"Reference URL",hint:"example of helper text only on focus"},model:{value:e.current_choice.improvementPlan.url,callback:function(t){e.$set(e.current_choice.improvementPlan,"url",t)},expression:"current_choice.improvementPlan.url"}})],1)],1)],1)],1),t(c.h7,[t(R.Z),t(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")]),t(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1,e.update_current_choice()}}},[e._v(" Save ")])],1)],1)],1)],1),t(w.Z,{attrs:{justify:"center"}},[t(_.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog_risk,callback:function(t){e.dialog_risk=t},expression:"dialog_risk"}},[t(l.Z,[t(c.EB,[t("span",{staticClass:"text-h5"},[e._v("Question")])]),t(c.ZB,[t(a.Z,[t(w.Z,[t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"Question Unique ID",required:""},model:{value:e.current_question.id,callback:function(t){e.$set(e.current_question,"id",t)},expression:"current_question.id"}})],1),t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"Question Title",required:""},model:{value:e.current_question.title,callback:function(t){e.$set(e.current_question,"title",t)},expression:"current_question.title"}})],1),t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"Question Description",required:""},model:{value:e.current_question.description,callback:function(t){e.$set(e.current_question,"description",t)},expression:"current_question.description"}})],1),t(u.Z,{attrs:{cols:"12"}},[t(E.Z,{attrs:{label:"RiskRules",required:""},model:{value:e.c_riskrule,callback:function(t){e.c_riskrule=t},expression:"c_riskrule"}})],1)],1)],1)],1),t(c.h7,[t(R.Z),t(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog_risk=!1}}},[e._v(" Close ")]),t(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog_risk=!1,e.update_current_question()}}},[e._v(" Save ")])],1)],1)],1)],1),t(w.Z,{attrs:{justify:"center"}},[t(_.Z,{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog_preview,callback:function(t){e.dialog_preview=t},expression:"dialog_preview"}},[t(l.Z,[t(S.Z,{attrs:{dark:"",color:"primary"}},[t(o.Z,{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog_preview=!1}}},[t(Z.Z,[e._v("mdi-close")])],1),t(T.qW,[e._v("Custom Lens Preview")]),t(R.Z),t(T.lj,[t(o.Z,{attrs:{dark:"",text:""},on:{click:function(t){return e.saveFile()}}},[e._v(" Save ")])],1)],1),t("div",[t("pre",[e._v(e._s(JSON.stringify(this.custom_lens,"",2)))])])],1)],1)],1)],1)],1)],1)},C=[],F=(i(7658),{data:()=>({pillar_title:"Welcome to Well-Architected Custom Lens JSON Editor",inputFile:null,links:[["mdi-numeric-1","Pillar_1","Import a JSON file"],["mdi-numeric-2","Pillar_2","Click Pillar"],["mdi-numeric-3","Pillar_3","Click Question"],["mdi-numeric-4","Pillar_4","Update"],["mdi-numeric-5","Pillar_5","Preview/Save"]],questions:[["question_id","Question Title"]],custom_lens:null,current_pillar:null,current_question:null,current_choice:null,dialog:!1,dialog_risk:!1,dialog_preview:!1,c_riskrule:""}),methods:{readFile:function(){const e=new FileReader;this.inputFile.name.includes(".json")&&(e.onload=e=>{this.valid_cl(e.target.result)&&(this.custom_lens=JSON.parse(e.target.result),this.custom_lens.ready=!0,this.v_update_pillars())},e.onerror=e=>console.log(e),e.readAsText(this.inputFile)),this.reset_current_choice(),this.reset_current_question()},valid_cl:function(e){try{JSON.parse(e)}catch(t){return this.err=JSON.stringify(t.message),console.log(this.err),""}return!0},cl_get_pillars:function(){if("undefined"!=typeof this.custom_lens.ready&&"undefined"!=typeof this.custom_lens.pillars)return this.custom_lens.pillars},v_update_pillars:function(){this.links=[],this.custom_lens.pillars.forEach((e=>{this.links.push(["mdi-pillar",e.id,e.name])}))},v_load_pillar:function(e,t){this.pillar_title=t,this.custom_lens.pillars.forEach((t=>{t.id==e&&(this.current_pillar=t)})),this.questions=[],this.current_pillar.questions.forEach((e=>{this.questions.push(e)}))},v_reload_pillar:function(){this.questions=[],this.current_pillar.questions.forEach((e=>{this.questions.push(e)}))},v_form_choice:function(e,t){"cl_create_new_choice"==t&&this.reset_current_choice(),this.questions.forEach((t=>{t.id==e&&(this.current_question=t)})),this.current_question.choices.forEach((e=>{e.id==t&&(this.current_choice=e)})),this.dialog=!0},v_form_question:function(e){"cl_create_new_question"==e&&this.reset_current_question(),this.questions.forEach((t=>{t.id==e&&(this.current_question=t)})),this.c_riskrule=JSON.stringify(this.current_question.riskRules),this.dialog_risk=!0},update_current_choice(){var e=-1,t=-1,i=-1;this.current_question.choices.forEach(((t,i)=>{t.id==this.current_choice.id&&(e=i)})),this.current_pillar.questions.forEach(((e,i)=>{e.id==this.current_question.id&&(t=i)})),this.custom_lens.pillars.forEach(((e,t)=>{e.id==this.current_pillar.id&&(i=t)})),t>=0&&i>=0&&(e>=0?this.custom_lens.pillars[i].questions[t].choices[e]=this.current_choice:this.custom_lens.pillars[i].questions[t].choices.push(this.current_choice)),this.v_reload_pillar()},update_current_question(){var e,t=-1,i=-1;try{e=JSON.parse(this.c_riskrule),this.current_question.riskRules=e}catch(r){alert("Invalid format for riskRules : "+r.message)}this.current_pillar.questions.forEach(((e,i)=>{e.id==this.current_question.id&&(t=i)})),this.custom_lens.pillars.forEach(((e,t)=>{e.id==this.current_pillar.id&&(i=t)})),i>=0&&(t>=0?this.custom_lens.pillars[i].questions[t]=this.current_question:(this.reset_current_choice(),this.current_question.choices=[],this.current_question.choices.push(this.current_choice),this.custom_lens.pillars[i].questions.push(this.current_question))),this.v_reload_pillar()},saveFile(){const e=JSON.stringify(this.custom_lens),t=new Blob([e],{type:"text/plain"}),i=document.createEvent("MouseEvents"),r=document.createElement("a");r.download=this.custom_lens.name+"-"+Math.random().toString(36).slice(2)+".json",r.href=window.URL.createObjectURL(t),r.dataset.downloadurl=["text/json",r.download,r.href].join(":"),i.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(i)},reset_current_choice(){this.current_choice={id:0,title:"choice_title",description:"choice_description",helpfulResource:{displayText:"Text for helpfulResource",url:"url for helpfulResource"},improvementPlan:{displayText:"Text for improvementPlan",url:"url for improvementPlan"}}},reset_current_question(){this.current_question={id:0,title:"question_title",description:"choice_description",riskRules:[{condition:"(!choice_key1) || choice_key2",risk:"HIGH_RISK"},{condition:"default",risk:"MEDIUM_RISK"}]}}},beforeMount(){this.reset_current_choice(),this.reset_current_question()}}),$=F,J=i(1001),N=(0,J.Z)($,j,C,!1,null,null,null),I=N.exports,M=i(3806);r.ZP.use(M.Z);var U=new M.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:U,render:e=>e(I)}).$mount("#app")}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,s){if(!r){var o=1/0;for(a=0;a<e.length;a++){r=e[a][0],n=e[a][1],s=e[a][2];for(var l=!0,c=0;c<r.length;c++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[c])}))?r.splice(c--,1):(l=!1,s<o&&(o=s));if(l){e.splice(a--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var a=e.length;a>0&&e[a-1][2]>s;a--)e[a]=e[a-1];e[a]=[r,n,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],l=r[1],c=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(c)var a=c(i)}for(t&&t(r);u<o.length;u++)s=o[u],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(a)},r=self["webpackChunkgui_editor"]=self["webpackChunkgui_editor"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(7811)}));r=i.O(r)})();
//# sourceMappingURL=app.72a40389.js.map