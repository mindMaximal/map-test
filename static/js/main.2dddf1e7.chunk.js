(this.webpackJsonpclients=this.webpackJsonpclients||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),l=n.n(a),s=n(28),r=n.n(s),i=(n(45),n(18)),o=n(6);function d(){}var j=Object(a.createContext)({token:null,userId:null,login:d,logout:d,isAuthenticated:!1}),u=function(){var e=Object(o.g)(),t=Object(a.useContext)(j);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Admin Page"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(i.b,{to:"/",children:"\u041a\u0430\u0440\u0442\u0430"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(n){n.preventDefault(),t.logout(),e.push("/")},children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})},b=n(14),h=n.n(b),O=n(4),f=n(17),v=n(9),p=(n(32),n(51),function(e){return Object(c.jsxs)("div",{className:"search-view",onClick:function(t){e.searchViewClick(t,e.id)},children:[Object(c.jsxs)("div",{className:"search-view__info",children:[Object(c.jsx)("div",{className:"search-view__title",children:Object(c.jsx)("a",{className:"search-view__link",href:"#",children:e.name})}),Object(c.jsx)("div",{className:"search-view__address",children:e.addres||"\u0410\u0434\u0440\u0435\u0441 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"}),Object(c.jsx)("div",{className:"search-view__schedule",children:e.schedule||"\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]}),e.photo&&Object(c.jsx)("div",{className:"search-view__photo",children:Object(c.jsx)("img",{src:e.photo,alt:"Photo"})})]})}),m=function(e){return Object(c.jsx)("div",{className:"list-view",children:e.loading?"loading 1":e.list.length?e.list.map((function(t,n){return Object(c.jsx)(p,{name:t.name,addres:t.address,id:t.id,searchViewClick:e.searchViewClick},n)})):Object(c.jsx)("div",{className:"list-view--empty",children:"\u0422\u0430\u043a\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})};n(52);var x=Object(a.createContext)({mapState:null,setMapState:function(){}});n(53);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136 c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864 c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872 l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"})));function N(e,t){var n=e.title,c=e.titleId,l=g(e,["title","titleId"]);return a.createElement("svg",_({className:"single-view__arrow--svg",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492.004 492.004",style:{enableBackground:"new 0 0 492.004 492.004"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},l),n?a.createElement("title",{id:c},n):null,w)}var y=a.forwardRef(N),k=(n.p,function(e){return Object(c.jsxs)("div",{className:"single-view",children:[Object(c.jsxs)("div",{className:"single-view__info",children:[Object(c.jsxs)("div",{className:"single-view__block single-view__header",children:[Object(c.jsxs)("div",{className:"single-view__title",children:[Object(c.jsx)("button",{className:"single-view__button single-view__button--back",onClick:e.back,children:Object(c.jsx)(y,{})}),e.elem.name]}),Object(c.jsx)("div",{className:"single-view__type",children:"\u0424\u0435\u043b\u044c\u0434\u0448\u0435\u0440\u0441\u043a\u043e-\u0430\u043a\u0443\u0448\u0435\u0440\u0441\u043a\u0438\u0439 \u043f\u0443\u043d\u043a\u0442"}),Object(c.jsx)("div",{className:"single-view__schedule",children:e.elem.schedule||"\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]}),Object(c.jsxs)("div",{className:"single-view__block",children:[Object(c.jsxs)("div",{className:"single-view__elem single-view__address",children:[Object(c.jsx)("div",{className:"single-view__subtitle",children:"\u0410\u0434\u0440\u0435\u0441:"}),e.elem.address||"\u0410\u0434\u0440\u0435\u0441 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"]}),Object(c.jsxs)("div",{className:"single-view__elem",children:[Object(c.jsx)("div",{className:"single-view__subtitle",children:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f:"}),e.elem.parent]}),Object(c.jsxs)("div",{className:"single-view__elem",children:[Object(c.jsx)("div",{className:"single-view__subtitle single-view__subtitle--inline",children:"\u0410\u043f\u0442\u0435\u043a\u0430:"}),e.elem.pharmacy?"\u0435\u0441\u0442\u044c":"\u043e\u0442\u0441\u0442\u0443\u0441\u0442\u0432\u0443\u0435\u0442"]}),Object(c.jsxs)("div",{className:"single-view__elem",children:[Object(c.jsx)("div",{className:"single-view__subtitle single-view__subtitle--inline",children:"\u041f\u0435\u0440\u0432\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c:"}),e.elem.firstAid?"\u0435\u0441\u0442\u044c":"\u043e\u0442\u0441\u0442\u0443\u0441\u0442\u0432\u0443\u0435\u0442"]}),Object(c.jsxs)("div",{className:"single-view__elem",children:[Object(c.jsx)("div",{className:"single-view__subtitle single-view__subtitle--inline",children:"\u042d\u043a\u0441\u0442\u0440\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c:"}),e.emergencyAssistance?"\u0435\u0441\u0442\u044c":"\u043e\u0442\u0441\u0442\u0443\u0441\u0442\u0432\u0443\u0435\u0442"]}),Object(c.jsxs)("div",{className:"single-view__elem",children:[Object(c.jsx)("div",{className:"single-view__subtitle single-view__subtitle--inline",children:"\u0423\u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0444\u0435\u043b\u044c\u0434\u0448\u0435\u0440\u0430\u043c\u0438:"}),e.elem.staff||0]}),Object(c.jsxs)("div",{className:"single-view__elem",children:[Object(c.jsx)("div",{className:"single-view__subtitle single-view__subtitle--inline",children:"\u0413\u043e\u0434 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f:"}),e.foundationYear||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"]})]})]}),e.elem.photo&&Object(c.jsx)("div",{className:"single-view__photo",children:Object(c.jsx)("img",{src:e.elem.photo,alt:"Photo"})})]})}),C=n(5),S=n.p+"static/media/magnifier.28b0ad10.svg";function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D=a.createElement("g",null,a.createElement("path",{d:"m420.404 0h-328.808c-50.506 0-91.596 41.09-91.596 91.596v328.809c0 50.505 41.09 91.595 91.596 91.595h328.809c50.505 0 91.595-41.09 91.595-91.596v-328.808c0-50.506-41.09-91.596-91.596-91.596zm61.596 420.404c0 33.964-27.632 61.596-61.596 61.596h-328.808c-33.964 0-61.596-27.632-61.596-61.596v-328.808c0-33.964 27.632-61.596 61.596-61.596h328.809c33.963 0 61.595 27.632 61.595 61.596z"}),a.createElement("path",{d:"m432.733 112.467h-228.461c-6.281-18.655-23.926-32.133-44.672-32.133s-38.391 13.478-44.672 32.133h-35.661c-8.284 0-15 6.716-15 15s6.716 15 15 15h35.662c6.281 18.655 23.926 32.133 44.672 32.133s38.391-13.478 44.672-32.133h228.461c8.284 0 15-6.716 15-15s-6.716-15-15.001-15zm-273.133 32.133c-9.447 0-17.133-7.686-17.133-17.133s7.686-17.133 17.133-17.133 17.133 7.686 17.133 17.133-7.686 17.133-17.133 17.133z"}),a.createElement("path",{d:"m432.733 241h-35.662c-6.281-18.655-23.927-32.133-44.672-32.133s-38.39 13.478-44.671 32.133h-228.461c-8.284 0-15 6.716-15 15s6.716 15 15 15h228.461c6.281 18.655 23.927 32.133 44.672 32.133s38.391-13.478 44.672-32.133h35.662c8.284 0 15-6.716 15-15s-6.716-15-15.001-15zm-80.333 32.133c-9.447 0-17.133-7.686-17.133-17.133s7.686-17.133 17.133-17.133 17.133 7.686 17.133 17.133-7.686 17.133-17.133 17.133z"}),a.createElement("path",{d:"m432.733 369.533h-164.194c-6.281-18.655-23.926-32.133-44.672-32.133s-38.391 13.478-44.672 32.133h-99.928c-8.284 0-15 6.716-15 15s6.716 15 15 15h99.928c6.281 18.655 23.926 32.133 44.672 32.133s38.391-13.478 44.672-32.133h164.195c8.284 0 15-6.716 15-15s-6.716-15-15.001-15zm-208.866 32.134c-9.447 0-17.133-7.686-17.133-17.133s7.686-17.133 17.133-17.133 17.133 7.685 17.133 17.132-7.686 17.134-17.133 17.134z"}));function P(e,t){var n=e.title,c=e.titleId,l=I(e,["title","titleId"]);return a.createElement("svg",E({id:"filter_icon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":c},l),n?a.createElement("title",{id:c},n):null,D)}var B=a.forwardRef(P),T=(n.p,n(95),function(e){return Object(c.jsx)(C.CardPanel,{className:"search-filter white",children:Object(c.jsxs)("div",{className:"search-filter__wrapper",children:[Object(c.jsx)("div",{className:"search-filter__block",children:Object(c.jsx)(C.Checkbox,{filledIn:!0,id:"search-filter__pharmacy",label:"\u0410\u043f\u0442\u0435\u043a\u0430",value:"pharmacy"})}),Object(c.jsx)("div",{className:"search-filter__block",children:Object(c.jsx)(C.Checkbox,{filledIn:!0,id:"search-filter__first-aid",label:"\u041f\u0435\u0440\u0432\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c",value:"first-aid"})}),Object(c.jsx)("div",{className:"search-filter__block",children:Object(c.jsx)(C.Checkbox,{filledIn:!0,id:"search-filter__emergency-assistance",label:"\u042d\u043a\u0441\u0442\u0440\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c",value:"emergency-assistance"})}),Object(c.jsx)("div",{className:"search-filter__block",children:Object(c.jsx)(C.Checkbox,{filledIn:!0,id:"search-filter__staffing",label:"\u0423\u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0444\u0435\u043b\u044c\u0434\u0448\u0435\u0440\u0430\u043c\u0438",value:"staffing"})}),Object(c.jsx)("div",{className:"search-filter__block",children:Object(c.jsx)(C.TextInput,{id:"search-filter__year-foundation",type:"number",label:"\u0413\u043e\u0434 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f"})})]})})}),z=function(e){return Object(c.jsxs)(C.CardPanel,{className:e.scroll?"sidebar__header":"sidebar__header sidebar__header--fixed",children:[Object(c.jsx)("div",{className:"sidebar__search",children:Object(c.jsx)(C.TextInput,{id:"sidebar-input",inputClassName:"sidebar__text-input",placeholder:"\u041f\u043e\u0438\u0441\u043a",xl:!0,onChange:e.handleInput})}),Object(c.jsxs)("div",{className:"sidebar__controls",children:[Object(c.jsx)("button",{className:"sidebar__button sidebar__button--search",children:Object(c.jsx)("img",{src:S,alt:"\u041f\u043e\u0438\u0441\u043a"})}),Object(c.jsx)("button",{className:"sidebar__button sidebar__button--filter",onClick:e.handleFilter,children:Object(c.jsx)(B,{})})]}),e.filterShow?Object(c.jsx)(T,{}):null]})},M=(n(96),function(e){var t=function(e,t){var n=e.pageY;t.style.top=n+"px",console.log(n)};return Object(c.jsx)("div",{className:"scrollbar",children:Object(c.jsx)("div",{className:"scrollbar__slider",onDragStart:function(e){return function(e){console.log("Start",e);var n=e.target;document.addEventListener("mousemove",t(e,n),!1)}(e)},onDragEnd:function(e){return function(e){document.removeEventListener("mousemove",t(e,e.target),!1)}(e)}})})}),V=function(e){var t=l.a.createRef(),n=Object(a.useState)({scroll:!1,search:null,filter:{show:!1}}),s=Object(v.a)(n,2),r=s[0],i=s[1],o=Object(a.useContext)(x),d=o.mapState,j=o.setMapState;Object(a.useEffect)((function(){!function(e,t){var n=e.scrollHeight,c=e.offsetHeight;t.querySelector(".scrollbar__slider").style.height=c*c/n+"px"}(document.querySelector(".sidebar__panel"),document.querySelector(".scrollbar")),console.log(e.data)}),[e.data.modified]);return Object(a.useEffect)((function(){e.updateData(e.data.default.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.search)})))}),[r.search]),Object(c.jsx)("div",{className:"sidebar",children:Object(c.jsxs)("div",{className:"sidebar__wrapper",children:[Object(c.jsx)(z,{filterShow:r.filter.show,scroll:r.scroll,handleInput:function(e){i(Object(O.a)(Object(O.a)({},r),{},{search:e.target.value.trim().toLowerCase()}))},handleFilter:function(e){i(Object(O.a)(Object(O.a)({},r),{},{filter:Object(O.a)(Object(O.a)({},r.filter),{},{show:!r.filter.show})}))}}),Object(c.jsxs)("div",{className:"sidebar__panel",ref:t,onScroll:function(e){var n=t.current.scrollTop;i(n>50?Object(O.a)(Object(O.a)({},r),{},{scroll:!0}):Object(O.a)(Object(O.a)({},r),{},{scroll:!1}));var c=document.querySelector(".scrollbar").querySelector(".scrollbar__slider"),a=document.querySelector(".sidebar__panel"),l=a.scrollTop/a.scrollHeight;c.style.top=l*a.offsetHeight+"px"},children:[!e.loading&&e.singleView?Object(c.jsx)(k,{elem:e.data.modified[0],back:function(t){return e.updateData(e.data.default),void e.setSingleView(!1)}}):Object(c.jsx)(m,{loading:e.loading,list:e.data.modified,searchViewClick:function(t,n){var c=e.data.default.find((function(e){return e.id===n}));c.active=!0,e.updateData([c]),j(Object(O.a)(Object(O.a)({},d),{},{center:c.geo.split(", ")})),e.setSingleView(!0)}}),Object(c.jsx)(M,{})]})]})})},L=(n(97),n(19)),q=void 0,A=function(e){var t=Object(a.useContext)(x),n=t.mapState,l=t.setMapState;return Object(c.jsx)("div",{className:"map",children:Object(c.jsx)(L.d,{onApiAvaliable:function(e){return function(e){console.log(e);var t=function(e){return e.templateLayoutFactory.createClass("<div id='zoom-in' class='btn'><i class='icon-plus'>1</i></div><br>")}(e);q.setState({layout:t})}(e)},children:Object(c.jsx)(L.b,{state:n,className:"y-map",instanceRef:n,children:Object(c.jsx)(L.a,{options:{preset:"islands#darkGreenClusterIcons",groupByCoordinates:!1,clusterDisableClickZoom:!1,clusterHideIconOnBalloonOpen:!1,geoObjectHideIconOnBalloonOpen:!1,iconColor:"#26a69a"},children:e.data.modified.map((function(t,a){return Object(c.jsx)(L.c,{geometry:t.geo.split(", "),properties:{clusterCaption:"placemark <strong></strong>"},options:{preset:"islands#violetIcon",iconColor:"#26a69a"},modules:["geoObject.addon.balloon","geoObject.addon.hint"],onClick:function(c){return function(t,c){var a=e.data.default.find((function(e){return e.id===c.id}));a.active=!0,e.updateData([a]),e.setSingleView(!0),l(Object(O.a)(Object(O.a)({},n),{},{center:a.geo.split(", ")}))}(0,t)}},a)}))})})})})},H=function(e,t){var n=Object(a.useState)(!1),c=Object(v.a)(n,2),l=c[0],s=c[1],r=Object(a.useState)(null),i=Object(v.a)(r,2),o=i[0],d=i[1];return{loading:l,request:Object(a.useCallback)(function(){var e=Object(f.a)(h.a.mark((function e(t){var n,c,a,l,r,i=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{},e.prev=3,c&&(c=JSON.stringify(c),a["Content-Type"]="application/json"),e.next=7,fetch(t,{method:n,body:c,headers:a});case 7:return l=e.sent,e.next=10,l.json();case 10:if(r=e.sent,l.ok){e.next=13;break}throw new Error("useHttp: "+r.message||!1);case 13:return s(!1),e.abrupt("return",r);case 17:throw e.prev=17,e.t0=e.catch(3),s(!1),d("useHttp catch: "+e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:o,clearError:Object(a.useCallback)((function(){return d(null)}),[])}},R=(n(98),n(99),n(100),function(e){return Object(c.jsxs)("div",{className:"report-panel shadow",children:[Object(c.jsxs)("div",{className:"report-panel__wrapper",children:[Object(c.jsx)("div",{className:"report-panel__title",children:"\u0417\u0430\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043e\u0442\u0447\u0435\u0442\u044b"}),Object(c.jsxs)(C.Select,{id:"report-area",className:"report-panel__select",multiple:!1,onChange:function(){},options:{classes:"",dropdownOptions:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250}},value:"",children:[Object(c.jsx)("option",{disabled:!0,value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u044c"}),Object(c.jsx)("option",{value:"1",children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c 1"}),Object(c.jsx)("option",{value:"2",children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c 2"}),Object(c.jsx)("option",{value:"3",children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c 3"})]}),Object(c.jsx)(C.Button,{node:"button",small:!0,waves:"light",className:"report-panel__button",children:"\u041e\u0442\u0447\u0435\u0442 \u043e\u0431 \u0443\u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0434. \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430\u043c\u0438"}),Object(c.jsx)(C.Button,{node:"button",small:!0,waves:"light",className:"report-panel__button",children:"\u041e\u0442\u0447\u0435\u0442 \u043e \u0424\u0410\u041f\u0430\u0445 \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0432\u043e\u0439 \u043f\u043e\u043c\u043e\u0449\u0438"}),Object(c.jsx)(C.Button,{node:"button",small:!0,waves:"light",className:"report-panel__button",children:"\u041e\u0442\u0447\u0435\u0442 \u043e \u0424\u0410\u041f\u0430\u0445 \u0441 \u0430\u043f\u0442\u0435\u043a\u0430\u043c\u0438"})]}),Object(c.jsxs)("div",{className:"report-panel__wrapper",children:[Object(c.jsx)("div",{className:"report-panel__title",children:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043e\u0442\u0447\u0435\u0442\u043e\u0432"}),Object(c.jsxs)(C.Select,{id:"report-area",className:"report-panel__select",multiple:!1,onChange:function(){},options:{classes:"",dropdownOptions:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250}},value:"",children:[Object(c.jsx)("option",{disabled:!0,value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u044c"}),Object(c.jsx)("option",{value:"1",children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c 1"}),Object(c.jsx)("option",{value:"2",children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c 2"}),Object(c.jsx)("option",{value:"3",children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c 3"})]}),Object(c.jsx)("div",{className:"report-filter__block",children:Object(c.jsx)(C.Checkbox,{filledIn:!0,id:"report-filter__pharmacy",label:"\u0410\u043f\u0442\u0435\u043a\u0430",value:"pharmacy"})}),Object(c.jsx)("div",{className:"report-filter__block",children:Object(c.jsx)(C.Checkbox,{filledIn:!0,id:"report-filter__first-aid",label:"\u041f\u0435\u0440\u0432\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c",value:"first-aid"})}),Object(c.jsx)("div",{className:"report-filter__block",children:Object(c.jsx)(C.Checkbox,{filledIn:!0,id:"report-filter__emergency-assistance",label:"\u042d\u043a\u0441\u0442\u0440\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c",value:"emergency-assistance"})}),Object(c.jsx)("div",{className:"report-filter__block",children:Object(c.jsx)(C.Checkbox,{filledIn:!0,id:"report-filter__staffing",label:"\u0423\u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0444\u0435\u043b\u044c\u0434\u0448\u0435\u0440\u0430\u043c\u0438",value:"staffing"})}),Object(c.jsx)("div",{className:"report-filter__block",children:Object(c.jsx)(C.TextInput,{id:"report-filter__year-foundation",type:"number",s:!0,label:"\u0413\u043e\u0434 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f"})})]}),Object(c.jsx)("div",{className:"report-panel__controls",children:Object(c.jsx)(C.Button,{node:"button",small:!0,waves:"light",children:"\u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u0447\u0435\u0442"})})]})}),J=function(e){var t=Object(a.useState)({show:!1}),n=Object(v.a)(t,2),l=n[0],s=n[1],r=function(e){s(Object(O.a)(Object(O.a)({},l),{},{show:!l.show}))};return Object(c.jsxs)("div",{className:"reports",children:[Object(c.jsxs)("div",{className:"reports__controls",children:[Object(c.jsx)(C.Button,{node:"button",small:!0,style:{marginRight:"5px"},waves:"light",onClick:r,children:"\u041e\u0442\u0447\u0435\u0442\u044b"}),Object(c.jsx)(C.Button,{node:"button",small:!0,style:{marginRight:"5px"},waves:"light",onClick:r,children:"\u041e\u0442\u0447\u0435\u0442\u044b \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443"})]}),l.show?Object(c.jsx)(R,{}):null]})},F=function(e){return Object(c.jsx)("div",{children:"Loading ..."})},G=function(){var e=H(),t=e.loading,n=e.error,l=e.request,s=e.clearError,r=Object(a.useState)({data:{default:[],modified:[]}}),i=Object(v.a)(r,2),o=i[0],d=i[1],j=Object(a.useState)(!1),u=Object(v.a)(j,2),b=u[0],p=u[1];Object(a.useEffect)((function(){n&&console.log("\u041e\u0448\u0438\u0431\u043a\u0430: "+n),s()}),[s,n]);var m=Object(a.useCallback)(Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("../data.json","POST",null,{});case 3:t=e.sent,console.log(t),t.data.map((function(e,t){e.id=t,e.active=!1,e.pharmacy=Math.random()<.5,e.firstAid=Math.random()<.5,e.emergencyAssistance=Math.random()<.5,e.staff=Math.floor(10*Math.random()+1)})),d(Object(O.a)(Object(O.a)({},o),{},{data:{default:t.data,modified:t.data}})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])}))),[l]);Object(a.useEffect)((function(){m()}),[m]);var _=function(e){d(Object(O.a)(Object(O.a)({},o),{},{data:{default:o.data.default,modified:e}}))},g=Object(a.useState)({center:[52.287054,104.281047],zoom:9,behaviors:["default","scrollZoom"],controls:[]}),w=Object(v.a)(g,2),N=w[0],y=w[1];return t?Object(c.jsx)(F,{}):Object(c.jsx)("div",{className:"container--map",children:Object(c.jsxs)(x.Provider,{value:{mapState:N,setMapState:y},children:[!t&&Object(c.jsx)(V,{loading:t,data:o.data,updateData:_,singleView:b,setSingleView:p}),!t&&Object(c.jsx)(A,{loading:t,data:o.data,updateData:_,setSingleView:p}),Object(c.jsx)(J,{})]})})},W=n(22),Y=function(){var e=Object(a.useContext)(j),t=H(),n=(t.loading,t.error),l=t.request,s=t.clearError,r=Object(a.useState)({email:"",password:""}),i=Object(v.a)(r,2),o=i[0],d=i[1];Object(a.useEffect)((function(){console.log(n),s()}),[s,n]);var u=function(e){d(Object(O.a)(Object(O.a)({},o),{},Object(W.a)({},e.target.name,e.target.value)))},b=function(){var t=Object(f.a)(h.a.mark((function t(n){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,l("/api/auth/login","POST",Object(O.a)({},o));case 4:c=t.sent,e.login(c.token,c.userId),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",onChange:u}),Object(c.jsx)("input",{type:"password",name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:u}),Object(c.jsx)("button",{type:"submit",onClick:b,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},Z="userData";n(101);var K=function(){var e=function(){var e=Object(a.useState)(null),t=Object(v.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),s=Object(v.a)(l,2),r=s[0],i=s[1],o=Object(a.useCallback)((function(e,t){c(e),i(t),localStorage.setItem(Z,JSON.stringify({userId:t,token:e}))}),[]),d=Object(a.useCallback)((function(){c(null),i(null),localStorage.removeItem(Z)}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(Z));e&&e.token&&o(e.token,e.userId)}),[o]),{login:o,logout:d,token:n,userId:r}}(),t=e.token,n=e.login,l=e.logout,s=e.userId,r=!!t,d=function(e){return e?Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{path:"/admin",children:Object(c.jsx)(u,{})}),Object(c.jsx)(o.b,{path:"/detail/:id",children:Object(c.jsx)(G,{})}),Object(c.jsx)(o.b,{path:"/",children:Object(c.jsx)(G,{})}),Object(c.jsx)(o.a,{to:"/"})]}):Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{path:"/admin",children:Object(c.jsx)(Y,{})}),Object(c.jsx)(o.b,{path:"/",children:Object(c.jsx)(G,{})}),Object(c.jsx)(o.b,{path:"/detail/:id",children:Object(c.jsx)(G,{})}),Object(c.jsx)(o.a,{to:"/"})]})}(r);return Object(c.jsx)(j.Provider,{value:{token:t,login:n,logout:l,userId:s,isAuthenticated:r},children:Object(c.jsx)(i.a,{children:d})})};document.documentElement.lang="ru",r.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(K,{})}),document.getElementById("root"))},32:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.2dddf1e7.chunk.js.map