(("undefined"!=typeof self?self:this).webpackChunkkrzysztof_kucharski_personal_website=("undefined"!=typeof self?self:this).webpackChunkkrzysztof_kucharski_personal_website||[]).push([[179],{3283:(e,t,n)=>{"use strict";var r=n(7294),a=n(3935),o=n(1599),i=n.n(o),c=n(3727),s=n(5155),u=n(5219),l=n(3038),d=n.n(l),f=n(7962),h=(0,f.ez)((function(){return Promise.all([n.e(142),n.e(134),n.e(143)]).then(n.bind(n,1494))})),m=((0,f.ez)((function(){return Promise.resolve().then(n.bind(n,6691))})),[{path:"/",component:h,icon:"",title:"",enabled:!0,navbar:!1},{path:"/sort",component:(0,f.ez)((function(){return Promise.all([n.e(188),n.e(651)]).then(n.bind(n,5157))})),icon:"images/sort_icon.png",title:"Sorting algorithms",enabled:!0,navbar:!0},{path:"/chart",component:(0,f.ez)((function(){return Promise.all([n.e(397),n.e(936)]).then(n.bind(n,7407))})),icon:"images/area-chart.png",title:"COVID-19 in Poland",enabled:!0,navbar:!0}]),b=n(3655),p=n(41),g=n(3379),v=n.n(g),x=n(7899);v()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;const w=function(e){return r.createElement(c.rU,{onClick:e.onClick,to:e.href,className:[e.className,"navbar-item"].join(" ")},r.createElement("div",{className:"navbar-item-text"},e.children),function(){if(e.iconSrc)return r.createElement("img",{className:"navbar-item-icon",src:e.iconSrc,width:30,height:30,alt:""})}())};var y=n(1436),E=n(7625),k=n(5075);v()(k.Z,{insert:"head",singleton:!1}),k.Z.locals;const N=function(e){var t=(0,r.useState)(!1),n=d()(t,2),a=n[0],o=n[1];return(0,r.useEffect)((function(){return o(e.value)}),[e.value]),r.createElement("div",{className:[e.className,"switch"].join(" ")},r.createElement(E.G,{className:"sun",icon:y.enB}),r.createElement("input",{className:"react-switch-checkbox",id:"react-switch-new",type:"checkbox",checked:a,onChange:function(){o(!a),e.onValueChange(!a)}}),r.createElement("label",{className:"react-switch-label",htmlFor:"react-switch-new",style:{background:a?"#00c343":"#4890d7"}},r.createElement("span",{className:"react-switch-button"})),r.createElement(E.G,{className:"moon",icon:y.DBF}))};var C=n(1028);v()(C.Z,{insert:"head",singleton:!1}),C.Z.locals;const S=function(){var e,t=(0,r.useState)(0),n=d()(t,2),a=n[0],o=n[1],i=(0,r.useState)(""),c=d()(i,2),u=c[0],l=c[1],h=(0,s.I0)(),g=function(e){return(0,f.LI)(e,(function(e){return e({type:b.PW.SET_OPENED})}))}(h),v=function(e){return(0,f.LI)(e,(function(e){return e({type:b.PW.SET_CLOSED})}))}(h),x=(0,s.v9)((function(e){return e.navbar})),k=(0,s.v9)((function(e){return e.theme})),C=v,S=function(e){return(0,r.useCallback)((function(){return e({type:b.wg.SWITCH})}),[e])}(h);return(0,r.useEffect)((function(){var e=function(){return o(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,r.useEffect)((function(){a>=800&&(l(""),v())}),[a]),(0,r.useEffect)((function(){a>=800&&(l(""),v())}),[x.opened]),(0,r.useEffect)((function(){window.innerWidth<=800&&l("opened-"+x.opened)}),[x.opened]),r.createElement("div",{className:"navbar"},r.createElement("div",{className:"main-buttons"},r.createElement(p.Z,{onClick:function(){x.opened?v():g()},className:"hamburger"},r.createElement("img",{src:"images/hamburger_icon.png",alt:"",width:20,height:20})),r.createElement(w,{className:"homeIcon",onClick:function(){},href:"/"},r.createElement(E.G,{className:"icon",icon:y.J9Y}))),r.createElement("div",{className:["navbar-group",u].join(" ")},r.createElement("div",{className:"navbar-items"},r.createElement(r.Fragment,null,(e=C,m.filter((function(e){return e.navbar})).map((function(t,n){return r.createElement(w,{onClick:e,iconSrc:t.icon,href:t.path,key:n},t.title)})))))),r.createElement(N,{className:"theme-switch",value:"theme-dark"===k.theme,onValueChange:S}))};var O=n(5977),Z=n(6691);const z=function(){var e=(0,s.v9)((function(e){return e.navbar}));return r.createElement(O.rs,null,r.createElement(r.Suspense,{fallback:null},(0,f.Nt)(e.opened,(function(){return r.createElement("div",{className:"pageOverlay"})})),r.createElement("div",{className:"page"},m.filter((function(e){return e.enabled})).map((function(e,t){return r.createElement(O.AW,{exact:!0,path:e.path,component:e.component,key:t})})))),r.createElement(O.AW,{component:Z.default,key:0}))};var P=n(1171),T=n(2491),j=n.n(T),D=(n(5290),n(3263));v()(D.Z,{insert:"head",singleton:!1}),D.Z.locals;const I=function(){return r.createElement(s.zt,{store:u.h},r.createElement(P.Ix,null),r.createElement(c.VK,null,r.createElement(S,null),r.createElement(z,null)),r.createElement(j(),{location:"bottom",buttonText:"Agree",cookieName:"cookieConsent",style:{background:"#2B373B"},buttonStyle:{color:"#4e503b",fontSize:"13px"},expires:150},"This website uses cookies to enhance the user experience."," "))};i()(),a.render(r.createElement(I,null),document.getElementById("root"))},41:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294),a=n(3197),o=n(3379),i=n.n(o),c=n(8241);i()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;const s=function(e){return r.createElement("button",{className:["button",e.className,e.disabled?"disabled":"enabled"].join(" "),type:"submit",onClick:function(){e.disabled||e.onClick()},"aria-label":"submit-button"},r.createElement("div",{className:"content"},r.createElement(a.Z,{text:e.text}),e.children))}},3197:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),a=n(3379),o=n.n(a),i=n(8799);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const c=function(e){return r.createElement("div",{className:["text",e.className].join(" ")},e.text,e.children)}},6691:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(7294),a=n(3379),o=n.n(a),i=n(2714);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const c=function(){return r.createElement("div",{className:"notFound"},r.createElement("div",{className:"notFoundText"},"Page not found."))}},3655:(e,t,n)=>{"use strict";n.d(t,{PW:()=>r,wg:()=>a,Nf:()=>o});var r={SET_OPENED:"SET_OPENED",SET_CLOSED:"SET_CLOSED"},a={SWITCH:"SWITCH"},o={CONNECTED:"CONNECTED",DISCONNECTED:"DISCONNECTED"}},5918:(e,t,n)=>{"use strict";n.d(t,{Gm:()=>i,Fq:()=>s,ZP:()=>u});var r=n(276),a="covid_calcs/",o=(0,r.WI)(),i=(0,r.FV)(a),c=o.getSelectors((function(e){return e.covidCalcsData})),s=c.selectAll;c.selectById;const u=(0,r.o4)(a,i,o)},8116:(e,t,n)=>{"use strict";n.d(t,{m_:()=>i,ld:()=>s,ZP:()=>u});var r=n(276),a="covid_stats/",o=(0,r.WI)(),i=(0,r.FV)(a),c=o.getSelectors((function(e){return e.covidStatsData})),s=c.selectAll;c.selectById;const u=(0,r.o4)(a,i,o)},5219:(e,t,n)=>{"use strict";n.d(t,{h:()=>g});var r,a,o=n(3894),i=n(4882),c=n(8116),s=n(5918),u=n(3655),l={connected:!1},d={opened:!1},f=n(9585),h=function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/";return(new f.Z).set(e,t,{path:n})}("theme",e)},m=function(e){console.log("Setting app theme to: "+e),document.documentElement.setAttribute("class",""),document.documentElement.setAttribute("class",e)},b=function(e){return"theme-light"===e.theme?"theme-dark":"theme-light"},p={theme:("theme",r=(new f.Z).get("theme"),a=void 0===r?"theme-dark":r,h(a),m(a),a)},g=(0,i.xC)({reducer:{covidStatsData:c.ZP,covidCalcsData:s.ZP,connection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.Nf.CONNECTED:return{connected:!0};case u.Nf.DISCONNECTED:return{connected:!1};default:return e}},navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.PW.SET_OPENED:return{opened:!0};case u.PW.SET_CLOSED:return{opened:!1};default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.wg.SWITCH:var n=b(e);return m(n),h(n),{theme:n};default:return e}}},middleware:[o.Z]})},276:(e,t,n)=>{"use strict";n.d(t,{FV:()=>g,o4:()=>v,WI:()=>x});var r=n(9713),a=n.n(r),o=n(7757),i=n.n(o),c=n(8926),s=n.n(c),u=n(6479),l=n.n(u),d=n(7962);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(){var e=s()(i().mark((function e(t){var n,r,a,o,c,s,u,f=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},r=n.body,a=l()(n,["body"]),o={"Content-Type":"application/json"},c=h(h({method:r?"POST":"GET"},a),{},{headers:h(h({},o),a.headers)}),r&&(c.body=JSON.stringify(r)),e.prev=4,e.next=7,window.fetch(t,c);case 7:return u=e.sent,e.next=10,u.json();case 10:if(s=e.sent,!u.ok){e.next=13;break}return e.abrupt("return",s);case 13:throw new Error(u.statusText);case 16:return e.prev=16,e.t0=e.catch(4),(0,d.cB)("Error: could not connect to server."),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:s));case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}();m.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m(e,h(h({},t),{},{method:"GET"}))},m.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m(e,h(h({},n),{},{body:t}))};var b=n(4882),p=function(e){return"https://klkucharski-api.com/api/"+e},g=function(e){return(0,b.hg)(function(e){return e+"/fetch"+e}(e),function(e){return s()(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get(p(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))}(e))},v=function(e,t){var n=(0,b.HF)();return(0,b.oM)({name:e,initialState:n.getInitialState(),reducers:{},extraReducers:a()({},t.fulfilled,n.setAll)}).reducer},x=b.HF},7962:(e,t,n)=>{"use strict";n.d(t,{LI:()=>h,b6:()=>o,oX:()=>i,ez:()=>c,cB:()=>f,fH:()=>u,y2:()=>d,T_:()=>l,Nt:()=>m});var r=n(7294),a=n(1171),o=function(e){return e.current.offsetHeight},i=function(e){return e.current.offsetWidth},c=function(e){return(0,r.lazy)((function(){return s((function(){return e()}))}))},s=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(a,o){return t().then(a).catch((function(i){setTimeout((function(){1!==n?e(t,n-1,r).then(a,o):o(i)}),r)}))}))},u=function(e){return(0,r.useEffect)(e,[])},l=function(e,t){return(0,r.useEffect)((function(){for(var n=0;n<t.length;n++){var r=t[n];if(null==r||0==r||null==r||0===r)return}e()}),t)},d=function(e,t,n){return(0,r.useEffect)((function(){!0===e&&t()}),n)},f=function(e){return a.Am.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},h=function(e,t){return(0,r.useCallback)((function(){return t(e)}),[e])},m=function(e,t){if(e)return t()}},3263:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3645),a=n.n(r),o=n(1667),i=n.n(o),c=n(3701),s=a()((function(e){return e[1]})),u=i()(c.Z);s.push([e.id,'@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{from{opacity:0}to{opacity:1}}@font-face{font-family:"Rubik";src:url('+u+')}html{width:100%;height:100%;font-family:"Rubik", sans-serif;background:#212121;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;position:fixed}body{height:100%;margin:0}body .root{width:100%;height:100%;margin:0;padding:0;display:flex;flex-flow:column;background:none}body .root .Toastify__toast--error{background:#ad0f00}body .root .page{overflow-y:auto;min-height:0;flex:1;-webkit-animation:fadein 1s;-moz-animation:fadein 1s;-o-animation:fadein 1s;animation:fadein 1s}body .root .pageOverlay{z-index:50;background:black;width:100%;height:calc(100% - 56px);opacity:0.7;position:absolute;top:56px;left:0}body .root .footer{position:absolute;bottom:0;height:50px;width:100%;display:flex;align-items:center;justify-content:right}\n',""]);const l=s},8241:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".button{width:100px;height:30px;color:white;background:#373737;font-size:16px;border:none}.button:active{outline:none}.button:hover{cursor:pointer;background:#515151}.button:focus{outline:none}.button .content{width:100%;height:100%;display:flex;align-items:center;justify-content:center}\n",""]);const o=a},1028:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".navbar{min-height:56px;flex:0 1 56px;width:100%}.theme-light .navbar{background:rgba(255,255,255,0.05)}.theme-dark .navbar{background:rgba(21,21,21,0.466667)}.navbar .main-buttons{display:flex;align-items:center;justify-content:left;height:100%}.navbar .main-buttons .homeIcon{color:white;height:100%;display:flex;align-items:center;justify-content:center;width:50px}.navbar .main-buttons .homeIcon .navbar-item-text{font-size:20px}.navbar .main-buttons .homeIcon:hover{background:none}@media (min-width: 800px){.navbar{flex-direction:row;display:flex}.navbar .main-buttons .hamburger{display:none}.navbar .navbar-group{height:100%;display:flex}.navbar .navbar-group .navbar-items{display:flex;flex-direction:row}.navbar .theme-switch{display:none;margin-left:auto}}@media (max-width: 800px){.navbar{flex-direction:column}.navbar .main-buttons .hamburger{-webkit-tap-highlight-color:rgba(0,0,0,0);height:100%;cursor:pointer;background:none;width:50px;align-items:center;justify-content:center;opacity:0.5}.navbar .navbar-group{width:50%;height:calc(100% - 56px);z-index:100;display:none;position:absolute;top:56px;box-sizing:border-box}.theme-light .navbar .navbar-group{background:#1b2f4f}.theme-dark .navbar .navbar-group{background:rgba(24,24,24,0.8)}.navbar .navbar-group .navbar-items{width:100%;z-index:2;display:flex;flex-direction:column}.navbar .navbar-group .navbar-items .navbar-item{height:70px;display:flex;align-items:center;justify-content:left;margin-left:0;padding-left:10px}.navbar .navbar-group.opened-false{display:none}.navbar .navbar-group.opened-true{transform:translate(0, 0);display:flex}.navbar .theme-switch{display:none;position:absolute;top:0;right:0;height:56px}}\n",""]);const o=a},7899:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3645),a=n.n(r),o=n(1667),i=n.n(o),c=n(3701),s=a()((function(e){return e[1]})),u=i()(c.Z);s.push([e.id,'@font-face{font-family:"Rubik";src:url('+u+')}.navbar-item{-webkit-tap-highlight-color:rgba(0,0,0,0);padding-left:10px;padding-right:10px;box-sizing:border-box;display:flex;align-items:center;justify-content:left;width:200px;height:100%;color:transparent}.navbar-item .navbar-item-text{font-family:"Rubik", sans-serif;box-sizing:border-box;text-decoration:none;white-space:nowrap;color:#cdcdcd;text-align:center;display:inline-block;font-weight:600;font-size:14px}.navbar-item .navbar-item-icon{margin-left:15px;box-sizing:border-box}.navbar-item:hover{cursor:pointer}.navbar-item:hover .navbar-item-text{color:#ffffff}\n',""]);const l=s},5075:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".switch{display:flex;align-items:center;justify-content:space-between;margin-right:10px}.switch .react-switch-checkbox{height:0;width:0;visibility:hidden;margin:0}.switch .react-switch-label{margin-left:2px;margin-right:2px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;width:47px;height:19px;background:grey;border-radius:50px;position:relative}.switch .react-switch-label .react-switch-button{content:'';position:absolute;top:2px;left:2px;width:15px;height:15px;border-radius:15px;background:#fff;box-shadow:0 0 2px 0 rgba(10,10,10,0.29)}.switch .react-switch-checkbox:checked+.react-switch-label .react-switch-button{left:calc(100% - 2px);transform:translateX(-100%)}.switch .sun{color:white;margin:3px}.switch .moon{color:white;margin:3px}\n",""]);const o=a},8799:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"",""]);const o=a},2714:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,'.notFound{position:absolute;height:calc(100% - 60px);width:100%}.notFound .notFoundText{color:white;position:relative;float:left;top:40%;left:50%;transform:translate(-50%, -50%);font-family:"3270Narrow Nerd Font", sans-serif;font-size:3em}\n',""]);const o=a},3701:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"fonts/Rubik-Regular.ttf"}},0,[[3283,666,264,326,660]]]);