"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[642],{19157:(t,e,a)=>{a.d(e,{Z:()=>i});var s=a(23645),n=a.n(s)()((function(t){return t[1]}));n.push([t.id,".el-table .warning-row{background:oldlace}.el-table .success-row{background:#f0f9eb}.color-item{border:1px solid rgb(0,0,0,.5);border-radius:10px;height:27px;width:50px}span.title-detail-order{font-weight:700}",""]);const i=n},68642:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});const s={name:"product_list",data:function(){return{activeName:"all",loadingTable:!1,tableData:[],status_pack:"",slideData:[],textSearch:"",numberPhoneSearch:"",currentPage:1,options:{Total:10,Page:1,PageLimit:10},listPackStatus:[{value:1,title:"Đơn tạo mới",type:""},{value:2,title:"Đơn đã đóng gói",type:"info"},{value:3,title:"Đơn đã vận chuyển đi",type:"warning"},{value:4,title:"Đơn đã hoàn tất",type:"success"},{value:5,title:"Đơn hủy",type:"danger"}]}},mounted:function(){this.getList()},methods:{handleClick:function(){this.getList()},handleSizeChange:function(t){this.options.PageLimit=t,this.getList()},handleCurrentChange:function(t){this.options.Page=t,this.getList()},updateStatus:function(t,e,a){var s=this,n=new FormData;console.log(e),n.append(a,e),axios({method:"post",url:"/api/admin/orders/update/"+t,data:n}).then((function(t){t.data.success?s.$notify({title:"Success",message:t.data.mess,type:"success"}):s.$notify({title:"Error",message:t.data.mess,type:"error"})}))},deleteBanner:function(t){var e=this;axios({method:"post",url:"/api/admin/products/delete/"+t}).then((function(t){t.data.success?(e.$notify({title:"Success",message:t.data.mess,type:"success"}),e.getList()):e.$notify({title:"Error",message:t.data.mess,type:"error"})}))},getList:function(){var t=this;t.loadingTable=!0;var e={};this.options.Page&&(e.page=this.options.Page),this.options.PageLimit&&(e.limit=this.options.PageLimit),this.textSearch&&(e.search=this.textSearch),this.numberPhoneSearch&&(e.phone_number=this.numberPhoneSearch),"all"!=this.activeName&&(e.pack_status=this.activeName),axios({method:"get",url:"/api/admin/orders",params:e}).then((function(e){var a=e.data;a.success&&(t.tableData=a.data,t.options.Total=a.count),t.loadingTable=!1}))},changeStatus:function(t){alert(t)},tableRowClassName:function(t){t.row;var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""},deleteOrder:function(t){var e=this;axios({method:"post",url:"/api/admin/orders/delete/"+t}).then((function(t){t.data.success?(e.$notify({title:"Success",message:t.data.mess,type:"success"}),e.getList()):e.$notify({title:"Error",message:t.data.mess,type:"error"})}))}}};var n=a(93379),i=a.n(n),o=a(19157),r={insert:"head",singleton:!1};i()(o.Z,r);o.Z.locals;const l=(0,a(51900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product_list"},[e("div",{staticClass:"card card-default"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"Tất cả",name:"all"}}),t._v(" "),t._l(t.listPackStatus,(function(t){return e("el-tab-pane",{key:t.value,attrs:{label:t.title,name:t.value.toString()}})}))],2),t._v(" "),e("div",{staticClass:"row",staticStyle:{display:"flex","flex-wrap":"nowrap",padding:"8px","justify-content":"start"}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"Nhập số điện thoại ..."},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.numberPhoneSearch,callback:function(e){t.numberPhoneSearch=e},expression:"numberPhoneSearch"}}),t._v(" "),e("el-input",{staticStyle:{width:"500px","margin-left":"10px"},attrs:{placeholder:"Nhập mã đơn hàng ..."},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},scopedSlots:t._u([{key:"append",fn:function(){return[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[e("i",{staticClass:"el-icon-search"}),t._v(" Tìm\n                                        kiếm\n                                    ")])]},proxy:!0}]),model:{value:t.textSearch,callback:function(e){t.textSearch=e},expression:"textSearch"}})],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingTable,expression:"loadingTable"}],staticStyle:{width:"100%"},attrs:{"empty-text":"Chưa có dữ liệu !",data:t.tableData,border:"",resizable:!0,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"elevation-1",staticStyle:{margin:"10px","margin-left":"50px",padding:"10px"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("div",[e("span",{staticClass:"title-detail-order"},[e("i",{staticClass:"el-icon-finished"}),t._v("\n                                                MÃ ĐƠN HÀNG:")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v(t._s(a.row.order_code))])]),t._v(" "),e("div",[e("el-button",{directives:[{name:"show",rawName:"v-show",value:2==a.row.payment_methods&&1==a.row.payment_status,expression:"props.row.payment_methods==2 && props.row.payment_status==1"}],attrs:{type:"success"},on:{click:function(e){t.updateStatus(a.row.id,2,"payment_status"),a.row.payment_status=2}}},[e("i",{staticClass:"el-icon-money"}),t._v("\n                                                    Xác nhận thanh toán")]),t._v(" "),t.listPackStatus?e("el-select",{attrs:{placeholder:"Trạng thái đơn hàng"},on:{change:function(e){return t.updateStatus(a.row.id,a.row.pack_status,"pack_status")}},model:{value:a.row.pack_status,callback:function(e){t.$set(a.row,"pack_status",e)},expression:"props.row.pack_status"}},t._l(t.listPackStatus,(function(t){return e("el-option",{key:t.value,attrs:{label:t.title,value:t.value.toString()}})})),1):t._e()],1)]),t._v(" "),e("div",[e("span",{staticClass:"title-detail-order",staticStyle:{"margin-left":"15px"}},[t._v("Được tạo lúc:")]),t._v(" "),e("span",[t._v(t._s(t._f("formatDate")(a.row.created_at)))])]),t._v(" "),e("div",{staticStyle:{"padding-left":"15px"}},[e("el-divider"),t._v(" "),e("div",[e("span",{staticClass:"title-detail-order"},[t._v("Tên khách hàng:")]),t._v(" "),e("span",[t._v(t._s(a.row.member.name))])]),t._v(" "),e("div",[e("span",{staticClass:"title-detail-order"},[t._v("Số điện thoại:")]),t._v(" "),e("span",[t._v(t._s(a.row.member.phone_number))])]),t._v(" "),e("div",[e("span",{staticClass:"title-detail-order"},[t._v("Email:")]),t._v(" "),e("span",[t._v(t._s(a.row.member.email))])]),t._v(" "),e("div",[e("span",{staticClass:"title-detail-order"},[t._v("Địa chỉ:")]),t._v(" "),e("span",[t._v("\n                                               "+t._s(a.row.member.location_text+"-"+a.row.member.commune+"-"+a.row.member.district+"-"+a.row.member.province)+"\n                                            ")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.row.note,expression:"props.row.note"}]},[e("span",{staticClass:"title-detail-order"},[t._v("Ghi chú:")]),t._v(" "),e("span",[t._v("\n                                               "+t._s(a.row.note?a.row.note:"______")+"\n                                                ")])])],1),t._v(" "),e("div",{staticStyle:{"padding-left":"15px"}},[e("el-divider")],1),t._v(" "),e("div",[e("span",{staticClass:"title-detail-order"},[e("i",{staticClass:"el-icon-finished"}),t._v("\n                                                DANH SÁCH CÁC SẢN PHẨM ĐƯỢC MUA:")])]),t._v(" "),e("div",{staticStyle:{padding:"15px"}},[e("table",{staticClass:"table table-bordered"},[e("tr",{staticStyle:{"background-color":"rgb(0,0,0,0.02)"}},[e("th",[e("i",{staticClass:"el-icon-connection"}),t._v(" TÊN SẢN PHẨM")]),t._v(" "),e("th",[e("i",{staticClass:"el-icon-connection"}),t._v(" HÌNH ẢNH")]),t._v(" "),e("th",[e("i",{staticClass:"el-icon-connection"}),t._v(" SIZE")]),t._v(" "),e("th",[e("i",{staticClass:"el-icon-connection"}),t._v(" MÀU")]),t._v(" "),e("th",[e("i",{staticClass:"el-icon-connection"}),t._v(" ĐƠN GIÁ")]),t._v(" "),e("th",[e("i",{staticClass:"el-icon-connection"}),t._v(" SỐ LƯỢNG")]),t._v(" "),e("th",[e("i",{staticClass:"el-icon-connection"}),t._v(" THÀNH TIỀN")])]),t._v(" "),t._l(a.row.detail,(function(a){return e("tr",[e("td",[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("span",{staticClass:"ml-2"},[t._v(t._s(a.product_name))])])]),t._v(" "),e("td",[e("el-image",{staticStyle:{height:"60px",width:"60px"},attrs:{lazy:"",src:a.image?a.image.path:"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",fit:"contain"}})],1),t._v(" "),e("td",[t._v(t._s(a.product_color))]),t._v(" "),e("td",[t._v(t._s(a.color.title))]),t._v(" "),e("td",[t._v(t._s(t._f("toThousandFilter")(a.price))+" đ")]),t._v(" "),e("td",[t._v("x"+t._s(a.quantity))]),t._v(" "),e("td",[t._v(t._s(t._f("toThousandFilter")(a.price_total))+" đ")])])})),t._v(" "),e("tr",[e("td",{attrs:{colspan:"6"}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("Thành tiền")])]),t._v(" "),e("td",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t._f("toThousandFilter")(a.row.detail.map((function(t){return t.price*t.quantity})).reduce((function(t,e){return t+e}),0)))+" đ")])])])],2)])])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"order_code",label:"MÃ ĐƠN HÀNG",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"member.name",label:"TÊN KHÁCH HÀNG",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"member.phone_number",label:"SĐT",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"member.location_text",label:"LOẠI THANH TOÁN",sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tag",{attrs:{effect:"dark",type:2==a.row.payment_methods?"success":""}},[t._v(" "+t._s(1==a.row.payment_methods?"COD":"Chuyển khoản trước"))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"member.location_text",label:"TRẠNG THÁI THANH TOÁN",sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tag",{directives:[{name:"show",rawName:"v-show",value:2==a.row.payment_methods,expression:"scope.row.payment_methods==2"}],attrs:{type:2==a.row.payment_status?"success":""}},[t._v(" "+t._s(1==a.row.payment_status?"Chưa thanh toán":"Đã thanh toán"))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"member.location_text",label:"TRẠNG THÁI ĐƠN HÀNG",sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tag",{attrs:{type:t.listPackStatus.find((function(t){return t.value==a.row.pack_status})).type}},[t._v(" "+t._s(t.listPackStatus.find((function(t){return t.value==a.row.pack_status})).title))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"THAO TÁC",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-popconfirm",{attrs:{"confirm-button-text":"Xóa","cancel-button-text":"Không",title:"Bạn có chắc chắn muốn xóa hình ảnh này ?"},on:{confirm:function(){return t.deleteOrder(a.row.id)}}},[e("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[e("i",{staticClass:"el-icon-delete"})])],1)]}}])}),t._v(" "),e("template",{slot:"empty"},[e("el-empty",{attrs:{description:"No data"}})],1)],2)],1),t._v(" "),e("div",{staticClass:"block",staticStyle:{"margin-left":"0px","margin-right":"8px",padding:"10px",width:"100%"}},[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":t.options.PageLimit,layout:"total, sizes, prev, pager, next, jumper",total:t.options.Total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer"})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(0,0,0,0.1)"}},[e("h3",{staticClass:"card-title"},[t._v("DANH SÁCH ĐƠN HÀNG")]),t._v(" "),e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse"}},[e("i",{staticClass:"fas fa-minus"})])])])}],!1,null,null,null).exports}}]);