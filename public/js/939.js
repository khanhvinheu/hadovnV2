(self.webpackChunk=self.webpackChunk||[]).push([[939],{15720:(t,a,s)=>{"use strict";s.d(a,{Z:()=>n});var e=s(23645),i=s.n(e)()((function(t){return t[1]}));i.push([t.id,".app-breadcrumb.el-breadcrumb[data-v-c9e0340e]{display:inline-block;font-size:14px;line-height:50px;margin-left:8px}.app-breadcrumb.el-breadcrumb .no-redirect[data-v-c9e0340e]{color:#97a8be;cursor:text}",""]);const n=i},1157:(t,a,s)=>{"use strict";s.d(a,{Z:()=>n});var e=s(23645),i=s.n(e)()((function(t){return t[1]}));i.push([t.id,".slide-fade-leave-active[data-v-61fabaee]{transition:all .3s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-61fabaee],.slide-fade-leave-to[data-v-61fabaee]{opacity:0;transform:translateY(-100px)}[data-v-61fabaee]::-webkit-scrollbar{width:5px}[data-v-61fabaee]::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 2px grey}[data-v-61fabaee]::-webkit-scrollbar-thumb{background:grey;border-radius:10px}[data-v-61fabaee]::-webkit-scrollbar-thumb:hover{background:grey}",""]);const n=i},4330:(t,a,s)=>{"use strict";s.d(a,{Z:()=>n});var e=s(23645),i=s.n(e)()((function(t){return t[1]}));i.push([t.id,"@media only screen and (max-width:1200px){.breadcrumb-mobile--hidden{display:none}}",""]);const n=i},44010:(t,a,s)=>{"use strict";s.d(a,{Z:()=>n});var e=s(23645),i=s.n(e)()((function(t){return t[1]}));i.push([t.id,"[class*=sidebar-dark] .user-panel{border-bottom:1px solid #4f5962;width:200px!important}.nav-treeview>.nav-item>.active{background-color:transparent!important;border-left:4px solid #13ce66!important;border-radius:0!important;color:#fff!important;margin-left:10px!important;padding-left:10px!important;width:98%}.sidebar-dark-primary .nav-sidebar>.nav-item>.nav-link.active,.sidebar-light-primary .nav-sidebar>.nav-item>.nav-link.active{background-color:rgb(0,0,0,.3)!important;color:#fff}.nav-item-custorm .active{background-color:transparent;border-left:4px solid #13ce66!important;border-radius:0!important;color:#fff!important;margin-left:10px!important;padding-left:10px!important;width:98%}",""]);const n=i},14779:t=>{t.exports=function t(s,e,i){e=e||[];var n,r=(i=i||{}).strict,l=!1!==i.end,o=i.sensitive?"":"i",c=0,v=e.length,d=0,u=0;if(s instanceof RegExp){for(;n=a.exec(s.source);)e.push({name:u++,optional:!1,offset:n.index});return s}if(Array.isArray(s))return s=s.map((function(a){return t(a,e,i).source})),new RegExp("(?:"+s.join("|")+")",o);s=("^"+s+(r?"":"/"===s[s.length-1]?"?":"/?")).replace(/\/\(/g,"/(?:").replace(/([\/\.])/g,"\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g,(function(t,a,s,i,n,r,l,o){a=a||"",s=s||"",n=n||"([^\\/"+s+"]+?)",l=l||"",e.push({name:i,optional:!!l,offset:o+c});var v=(l?"":a)+"(?:"+s+(l?a:"")+n+(r?"((?:[\\/"+s+"].+?)?)":"")+")"+l;return c+=v.length-t.length,v})).replace(/\*/g,(function(t,a){for(var s=e.length;s-- >v&&e[s].offset>a;)e[s].offset+=3;return"(.*)"}));for(;n=a.exec(s);){for(var m=0,f=n.index;"\\"===s.charAt(--f);)m++;m%2!=1&&((v+d===e.length||e[v+d].offset>n.index)&&e.splice(v+d,0,{name:u++,optional:!1,offset:n.index}),d++)}return s+=l?"$":"/"===s[s.length-1]?"":"(?=\\/|$)",new RegExp(s,o)};var a=/\((?!\?)/g},10936:(t,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>B});const e={};var i=s(51900);const n=(0,i.Z)(e,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"preloader flex-column justify-content-center align-items-center"},[t("img",{staticClass:"animation__shake",attrs:{src:"/assets/img/AdminLTELogo.png",alt:"AdminLTELogo",height:"60",width:"60"}})])}],!1,null,null,null).exports;const r={};const l=(0,i.Z)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content-header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-sm-6"},[a("h1",{staticClass:"m-0"},[t._v("QUẢN LÝ CỬA HÀNG")])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("ol",{staticClass:"breadcrumb float-sm-right"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),a("li",{staticClass:"breadcrumb-item active"},[t._v("Dashboard v1")])])])])])])}],!1,null,null,null).exports;var o=s(14779),c=s.n(o);const v={data:function(){return{levelList:null}},watch:{$route:function(t){t.path.startsWith("/redirect/")||this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){var t=this.$route.matched.filter((function(t){return t.meta&&t.meta.title})),a=t[0];this.isDashboard(a)||(t=[{path:"/dashboard",meta:{title:"Dashboard"}}].concat(t)),this.levelList=t.filter((function(t){return t.meta&&t.meta.title&&!1!==t.meta.breadcrumb}))},isDashboard:function(t){var a=t&&t.name;return!!a&&a.trim().toLocaleLowerCase()==="Dashboard".toLocaleLowerCase()},pathCompile:function(t){var a=this.$route.params;return c().compile(t)(a)},handleLink:function(t){var a=t.redirect,s=t.path;a?this.$router.push(a):this.$router.push(this.pathCompile(s))}}};var d=s(93379),u=s.n(d),m=s(15720),f={insert:"head",singleton:!1};u()(m.Z,f);m.Z.locals;const p=(0,i.Z)(v,(function(){var t=this,a=t._self._c;return a("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[a("transition-group",{attrs:{name:"breadcrumb"}},t._l(t.levelList,(function(s,e){return a("el-breadcrumb-item",{key:s.path},["noRedirect"===s.redirect||e==t.levelList.length-1?a("span",{staticClass:"no-redirect"},[t._v(t._s(s.meta.title))]):a("a",{on:{click:function(a){return a.preventDefault(),t.handleLink(s)}}},[t._v(t._s(s.meta.title))])])})),1)],1)}),[],!1,null,"c9e0340e",null).exports;var h=s(8842);const _={components:{Breadcrumb:p},methods:{logout:function(){var t=this;this.$confirm("Bạn có muốn đăng xuất khỏi hệ thống?","Thông báo",{confirmButtonText:"Đồng ý",cancelButtonText:"Không đồng ý",type:"warning"}).then((function(){t.$store.dispatch("user/".concat(h.Nv)).then((function(){t.$router.push({name:"Login"})}))})).catch((function(){}))}}};var C=s(4330),g={insert:"head",singleton:!1};u()(C.Z,g);C.Z.locals;const b=(0,i.Z)(_,(function(){var t=this,a=t._self._c;return a("nav",{staticClass:"main-header navbar navbar-expand navbar-white navbar-light"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-mobile--hidden"},[a("Breadcrumb")],1),t._v(" "),a("ul",{staticClass:"navbar-nav ml-auto"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("li",{staticClass:"nav-item",staticStyle:{cursor:"pointer"}},[a("a",{staticClass:"nav-link",on:{click:t.logout}},[a("i",{staticClass:"fas fa-sign-out-alt"}),t._v("\n            Logout\n        ")])])])])}),[function(){var t=this._self._c;return t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{"data-widget":"pushmenu",href:"#",role:"button"}},[t("i",{staticClass:"fas fa-bars"})])])])},function(){var t=this,a=t._self._c;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-widget":"navbar-search",href:"#",role:"button"}},[a("i",{staticClass:"fas fa-search"})]),t._v(" "),a("div",{staticClass:"navbar-search-block"},[a("form",{staticClass:"form-inline"},[a("div",{staticClass:"input-group input-group-sm"},[a("input",{staticClass:"form-control form-control-navbar",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-navbar",attrs:{type:"submit"}},[a("i",{staticClass:"fas fa-search"})]),t._v(" "),a("button",{staticClass:"btn btn-navbar",attrs:{type:"button","data-widget":"navbar-search"}},[a("i",{staticClass:"fas fa-times"})])])])])])])},function(){var t=this,a=t._self._c;return a("li",{staticClass:"nav-item dropdown",staticStyle:{display:"none"}},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"dropdown",href:"#"}},[a("i",{staticClass:"far fa-comments"}),t._v(" "),a("span",{staticClass:"badge badge-danger navbar-badge"},[t._v("3")])]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-lg dropdown-menu-right"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("div",{staticClass:"media"},[a("img",{staticClass:"img-size-50 mr-3 img-circle",attrs:{src:"/assets/img/user1-128x128.jpg",alt:"User Avatar"}}),t._v(" "),a("div",{staticClass:"media-body"},[a("h3",{staticClass:"dropdown-item-title"},[t._v("\n                  Brad Diesel\n                  "),a("span",{staticClass:"float-right text-sm text-danger"},[a("i",{staticClass:"fas fa-star"})])]),t._v(" "),a("p",{staticClass:"text-sm"},[t._v("Call me whenever you can...")]),t._v(" "),a("p",{staticClass:"text-sm text-muted"},[a("i",{staticClass:"far fa-clock mr-1"}),t._v(" 4 Hours Ago")])])])]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("div",{staticClass:"media"},[a("img",{staticClass:"img-size-50 img-circle mr-3",attrs:{src:"/assets/img/user8-128x128.jpg",alt:"User Avatar"}}),t._v(" "),a("div",{staticClass:"media-body"},[a("h3",{staticClass:"dropdown-item-title"},[t._v("\n                  John Pierce\n                  "),a("span",{staticClass:"float-right text-sm text-muted"},[a("i",{staticClass:"fas fa-star"})])]),t._v(" "),a("p",{staticClass:"text-sm"},[t._v("I got your message bro")]),t._v(" "),a("p",{staticClass:"text-sm text-muted"},[a("i",{staticClass:"far fa-clock mr-1"}),t._v(" 4 Hours Ago")])])])]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("div",{staticClass:"media"},[a("img",{staticClass:"img-size-50 img-circle mr-3",attrs:{src:"/assets/img/user3-128x128.jpg",alt:"User Avatar"}}),t._v(" "),a("div",{staticClass:"media-body"},[a("h3",{staticClass:"dropdown-item-title"},[t._v("\n                  Nora Silvester\n                  "),a("span",{staticClass:"float-right text-sm text-warning"},[a("i",{staticClass:"fas fa-star"})])]),t._v(" "),a("p",{staticClass:"text-sm"},[t._v("The subject goes here")]),t._v(" "),a("p",{staticClass:"text-sm text-muted"},[a("i",{staticClass:"far fa-clock mr-1"}),t._v(" 4 Hours Ago")])])])]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item dropdown-footer",attrs:{href:"#"}},[t._v("See All Messages")])])])},function(){var t=this,a=t._self._c;return a("li",{staticClass:"nav-item dropdown",staticStyle:{display:"none"}},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"dropdown",href:"#"}},[a("i",{staticClass:"far fa-bell"}),t._v(" "),a("span",{staticClass:"badge badge-warning navbar-badge"},[t._v("15")])]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-lg dropdown-menu-right"},[a("span",{staticClass:"dropdown-item dropdown-header"},[t._v("15 Notifications")]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-envelope mr-2"}),t._v(" 4 new messages\n            "),a("span",{staticClass:"float-right text-muted text-sm"},[t._v("3 mins")])]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-users mr-2"}),t._v(" 8 friend requests\n            "),a("span",{staticClass:"float-right text-muted text-sm"},[t._v("12 hours")])]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-file mr-2"}),t._v(" 3 new reports\n            "),a("span",{staticClass:"float-right text-muted text-sm"},[t._v("2 days")])]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item dropdown-footer",attrs:{href:"#"}},[t._v("See All Notifications")])])])},function(){var t=this._self._c;return t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{"data-widget":"fullscreen",href:"#",role:"button"}},[t("i",{staticClass:"fas fa-expand-arrows-alt"})])])}],!1,null,null,null).exports;const w={mounted:function(){}};var x=s(44010),k={insert:"head",singleton:!1};u()(x.Z,k);x.Z.locals;const y={};const L={};const S={name:"Index",components:{Preloader:n,ContentHeader:l,Navbar:b,Sidebar:(0,i.Z)(w,(function(){var t=this,a=t._self._c;return a("aside",{staticClass:"main-sidebar sidebar-dark-primary elevation-4"},[a("a",{staticClass:"brand-link"},[a("img",{staticClass:"brand-image img-circle elevation-3",staticStyle:{opacity:".8"},attrs:{src:t.$appSetting.LOGO_APP,alt:"AdminLTE Logo"}}),t._v(" "),a("span",{staticClass:"brand-text font-weight-light"},[t._v("HADOVN")])]),t._v(" "),a("div",{staticClass:"sidebar"},[a("div",{staticClass:"user-panel mt-3 pb-3 mb-3 d-flex"},[t._m(0),t._v(" "),a("div",{staticClass:"info"},[a("a",{staticClass:"d-block",attrs:{href:"#"}},[t._v(t._s(t.$store.getters.user.name))])])]),t._v(" "),a("nav",{staticClass:"mt-2"},[a("ul",{staticClass:"nav nav-pills nav-sidebar flex-column",attrs:{"data-widget":"treeview",role:"menu","data-accordion":"false"}},[a("li",{staticClass:"nav-header"},[t._v("DASHBOARD")]),t._v(" "),a("li",{staticClass:"nav-item nav-item-custorm"},[a("router-link",{staticClass:"nav-link",class:{active:"Dashboard"==t.$route.name},attrs:{to:{name:"Dashboard"}}},[a("i",{staticClass:"el-icon-menu"}),t._v(" "),a("p",[t._v("Thống kê")])])],1),t._v(" "),a("li",{staticClass:"nav-item menu-open"},[t._m(1),t._v(" "),a("ul",{staticClass:"nav nav-treeview"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"BlogList"==t.$route.name},attrs:{to:{name:"BlogList"}}},[a("i",{staticClass:"el-icon-menu"}),t._v(" "),a("p",[t._v("Quản lý Blog")])])],1)])]),t._v(" "),a("li",{staticClass:"nav-item menu-open"},[t._m(2),t._v(" "),a("ul",{staticClass:"nav nav-treeview"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"form"==t.$route.name},on:{click:function(a){return t.$router.push({name:"form"})}}},[a("i",{staticClass:"el-icon-menu"}),t._v(" "),a("p",[t._v("Quản lý danh mục")])])])])]),t._v(" "),a("li",{staticClass:"nav-item menu-open"},[t._m(3),t._v(" "),a("ul",{staticClass:"nav nav-treeview"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"ProductList"==t.$route.name},on:{click:function(a){return t.$router.push({name:"ProductList"})}}},[a("i",{staticClass:"el-icon-suitcase"}),t._v(" "),a("p",[t._v("Danh sách sản phẩm")])])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"ProductCreate"==t.$route.name},on:{click:function(a){return t.$router.push({name:"ProductCreate"})}}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("p",[t._v("Thêm mới sản phẩm")])])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"ProductColorList"==t.$route.name},attrs:{to:{name:"ProductColorList"}}},[a("i",{staticClass:"el-icon-set-up"}),t._v(" "),a("p",[t._v("Quản lý màu sản phẩm")])])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:{active:"ProductSizeList"==t.$route.name},attrs:{to:{name:"ProductSizeList"}}},[a("i",{staticClass:"el-icon-set-up"}),t._v(" "),a("p",[t._v("Quản lý size sản phẩm")])])],1)])]),t._v(" "),a("li",{staticClass:"nav-item menu-open"},[t._m(4),t._v(" "),a("ul",{staticClass:"nav nav-treeview"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"BannerList"==t.$route.name},on:{click:function(a){return t.$router.push({name:"BannerList"})}}},[a("i",{staticClass:"el-icon-film"}),t._v(" "),a("p",[t._v("Quản lý banner")])])])])]),t._v(" "),a("li",{staticClass:"nav-item menu-open"},[t._m(5),t._v(" "),a("ul",{staticClass:"nav nav-treeview"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"Order"==t.$route.name},on:{click:function(a){return t.$router.push({name:"Order"})}}},[a("i",{staticClass:"el-icon-film"}),t._v(" "),a("p",[t._v("Quản lý đơn hàng")])])])])]),t._v(" "),a("li",{staticClass:"nav-item menu-open"},[t._m(6),t._v(" "),a("ul",{staticClass:"nav nav-treeview"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"Setting"==t.$route.name},on:{click:function(a){return t.$router.push({name:"Setting"})}}},[a("i",{staticClass:"el-icon-setting"}),t._v(" "),a("p",[t._v("Setting App")])])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"image"},[t("img",{staticClass:"img-circle elevation-2",attrs:{src:"/assets/img/avatar5.png",alt:"User Image"}})])},function(){var t=this._self._c;return t("a",{staticClass:"nav-link",attrs:{href:"#"}},[t("p",[this._v("\n                        Blog\n                        "),t("i",{staticClass:"right fas fa-angle-left"})])])},function(){var t=this._self._c;return t("a",{staticClass:"nav-link",attrs:{href:"#"}},[t("p",[this._v("\n                Danh mục\n                "),t("i",{staticClass:"right fas fa-angle-left"})])])},function(){var t=this._self._c;return t("a",{staticClass:"nav-link"},[t("p",[this._v("\n                Sản phẩm\n                "),t("i",{staticClass:"right fas fa-angle-left"})])])},function(){var t=this._self._c;return t("a",{staticClass:"nav-link",attrs:{href:"#"}},[t("p",[this._v("\n                Banner\n                "),t("i",{staticClass:"fas fa-angle-left right"})])])},function(){var t=this._self._c;return t("a",{staticClass:"nav-link",attrs:{href:"#"}},[t("p",[this._v("\n                Đơn hàng\n                "),t("i",{staticClass:"fas fa-angle-left right"})])])},function(){var t=this._self._c;return t("a",{staticClass:"nav-link",attrs:{href:"#"}},[t("p",[this._v("\n                Setting\n                "),t("i",{staticClass:"fas fa-angle-left right"})])])}],!1,null,null,null).exports,Footer:(0,i.Z)(y,(function(){this._self._c;return this._m(0)}),[function(){var t=this,a=t._self._c;return a("footer",{staticClass:"main-footer",staticStyle:{"font-size":"13px"}},[a("strong",[t._v("Copyright © 2023 "),a("a",{attrs:{href:"https://hadovn.com/"}},[t._v("hadovn.com")]),t._v(".")]),t._v("\n  All rights reserved.\n  "),a("div",{staticClass:"float-right d-none d-sm-inline-block"},[a("b",[t._v("Version")]),t._v(" 1.0.0\n  ")])])}],!1,null,null,null).exports,ControlSidebar:(0,i.Z)(L,(function(){return(0,this._self._c)("aside",{staticClass:"control-sidebar control-sidebar-dark"})}),[],!1,null,null,null).exports},data:function(){return{showLoad:!1}},methods:{initializeSelect2:function(){$(".select2").select2(),$(".select2bs4").select2({theme:"bootstrap4"})},mounted:function(){this.initializeSelect2()}},watch:{$route:function(t){var a=this;this.showLoad=!0,setTimeout((function(){a.showLoad=!1}),200)}}};var A=s(1157),Z={insert:"head",singleton:!1};u()(A.Z,Z);A.Z.locals;const B=(0,i.Z)(S,(function(){var t=this,a=t._self._c;return a("body",{staticClass:"hold-transition sidebar-mini layout-fixed"},[a("div",{staticClass:"wrapper"},[a("Transition",{attrs:{name:"slide-fade"}},[a("Preloader",{directives:[{name:"show",rawName:"v-show",value:t.showLoad,expression:"showLoad"}]})],1),t._v(" "),a("Navbar"),t._v(" "),a("Sidebar"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content pt-3"},[a("div",{staticClass:"container-fluid",staticStyle:{height:"calc(100vh - 140px)","overflow-x":"auto"}},[a("Transition",{attrs:{name:"nested",mode:"out-in"}},[a("router-view")],1)],1)])]),t._v(" "),a("Footer"),t._v(" "),a("ControlSidebar")],1)])}),[],!1,null,"61fabaee",null).exports}}]);