"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[798],{2894:(t,e,a)=>{a.d(e,{Z:()=>i});var s=a(3645),n=a.n(s)()((function(t){return t[1]}));n.push([t.id,".el-table .warning-row{background:oldlace}.el-table .success-row{background:#f0f9eb}",""]);const i=n},8798:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});const s={data:function(){return{loadingTable:!1,tableData:[],slideData:[],textSearch:"",currentPage:1,options:{Total:10,Page:1,PageLimit:10}}},mounted:function(){this.getList()},methods:{handleSizeChange:function(t){this.options.PageLimit=t,this.getList()},handleCurrentChange:function(t){this.options.Page=t,this.getList()},updateStatus:function(t,e){var a=this,s=new FormData;console.log(e,"0"==e?"1":"0"),s.append("hidden","0"==e?"1":"0"),axios({method:"post",url:"/api/admin/banners/update/"+t,data:s}).then((function(t){t.data.success?(a.$notify({title:"Success",message:t.data.mess,type:"success"}),a.getList()):a.$notify({title:"Error",message:t.data.mess,type:"error"})}))},deleteBanner:function(t){var e=this;axios({method:"post",url:"/api/admin/banners/delete/"+t}).then((function(t){t.data.success?(e.$notify({title:"Success",message:t.data.mess,type:"success"}),e.getList()):e.$notify({title:"Error",message:t.data.mess,type:"error"})}))},getList:function(){var t=this;t.loadingTable=!0;var e={};this.options.Page&&(e.Page=this.options.Page),this.options.PageLimit&&(e.PageLimit=this.options.PageLimit),this.textSearch&&(e.TextSearch=this.textSearch),axios({method:"get",url:"/api/admin/banners",params:e}).then((function(e){var a=e.data;a.success&&(t.tableData=a.data,t.options.Total=a.total,t.slideData=a.data.filter((function(t){return 1==t.hidden}))),t.loadingTable=!1}))},changeStatus:function(t){alert(t)},tableRowClassName:function(t){t.row;var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""}}};var n=a(3379),i=a.n(n),r=a(2894),l={insert:"head",singleton:!1};i()(r.Z,l);r.Z.locals;const o=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card card-default collapsed-card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("el-carousel",{attrs:{"indicator-position":"outside",height:"350px"}},t._l(t.slideData,(function(t,e){return a("el-carousel-item",{key:e,staticStyle:{"background-repeat":"repeat","background-position":"center","background-size":"cover"},style:{"background-image":"url(/"+t.path+")"}},[a("div",{staticStyle:{width:"100%"}})])})),1)],1)])])])]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card card-default"},[t._m(1),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row",staticStyle:{display:"flex","flex-wrap":"nowrap",padding:"8px","justify-content":"space-between"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"Nhập kí tự cần tìm kiếm danh mục"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},scopedSlots:t._u([{key:"append",fn:function(){return[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[a("i",{staticClass:"el-icon-search"}),t._v(" Tìm\n                                        kiếm\n                                    ")])]},proxy:!0}]),model:{value:t.textSearch,callback:function(e){t.textSearch=e},expression:"textSearch"}}),t._v(" "),a("el-button",{staticClass:"ml-2",attrs:{type:"primary"},on:{click:function(e){return t.$router.push({name:"BannerCreate"})}}},[a("i",{staticClass:"el-icon-plus"}),t._v(" Thêm mới\n                            ")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingTable,expression:"loadingTable"}],staticStyle:{width:"100%"},attrs:{"empty-text":"Chưa có dữ liệu !",data:t.tableData,border:"",resizable:!0,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"title",label:"TÊN",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"path",label:"HÌNH ẢNH",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{height:"60px"},attrs:{lazy:"",src:t.row.path,fit:"fit"}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"path",label:"ĐƯỜNG DẪN"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",width:"100",label:"ẨN/ HIỆN"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{value:e.row.hidden.toString(),"active-value":"1","inactive-value":"0","active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){return t.updateStatus(e.row.id,e.row.hidden)}}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"NGÀY TẠO",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                    "+t._s(t._f("formatDate")(e.row.created_at))+"\n                                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"THAO TÁC",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.$router.push({name:"BannerUpdate",params:{id:e.row.id}})}}},[t._v("Cập\n                                        nhật\n                                    ")]),t._v(" "),a("el-popconfirm",{attrs:{"confirm-button-text":"Xóa","cancel-button-text":"Không",title:"Bạn có chắc chắn muốn xóa hình ảnh này ?"},on:{confirm:function(){return t.deleteBanner(e.row.id)}}},[a("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[a("i",{staticClass:"el-icon-delete"}),t._v(" Xóa\n                                        ")])],1)]}}])}),t._v(" "),a("template",{slot:"empty"},[a("el-empty",{attrs:{description:"No data"}})],1)],2)],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{"margin-left":"0px","margin-right":"8px",padding:"10px",width:"100%"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":t.options.PageLimit,layout:"total, sizes, prev, pager, next, jumper",total:t.options.Total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])]),t._v(" "),a("div",{staticClass:"card-footer"})])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(0,0,0,0.1)"}},[a("h3",{staticClass:"card-title"},[t._v("XEM TRƯỚC BANNER")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse"}},[a("i",{staticClass:"fas fa-plus"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(0,0,0,0.1)"}},[a("h3",{staticClass:"card-title"},[t._v("DANH SÁCH BANNER")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse"}},[a("i",{staticClass:"fas fa-minus"})])])])}],!1,null,null,null).exports}}]);