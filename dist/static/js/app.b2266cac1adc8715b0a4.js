webpackJsonp([0],{"026m":function(e,t){},"10Yz":function(e,t){},"11Wm":function(e,t){},"4ml/":function(e,t){},"6+BD":function(e,t){},FOkQ:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(e){a("we+4")},null,null).exports,o=a("/ocq"),s=a("NYxO");n.a.use(s.a);var l=new s.a.Store({state:{isLogin:!1,user:{name:"11"},a:""}}),c={data:function(){return{nav_active:this.$route.meta.index}},methods:{nav_click:function(){console.log(this.nav_active)}},watch:{$route:function(e,t){console.log(e),e.meta.index&&(this.nav_active=e.meta.index)}},created:function(){}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),e._v(" "),a("van-tabbar",{attrs:{change:e.nav_click()},model:{value:e.nav_active,callback:function(t){e.nav_active=t},expression:"nav_active"}},[a("van-tabbar-item",{attrs:{to:"/home/",icon:"setting"}},[e._v("配网")]),e._v(" "),a("van-tabbar-item",{attrs:{to:"/home/ScanningDevice",icon:"aim"}},[e._v("扫描设备")]),e._v(" "),a("van-tabbar-item",{attrs:{to:"/home/InputData",icon:"records"}},[e._v("数据输入")]),e._v(" "),a("van-tabbar-item",{attrs:{to:"/home/showData",icon:"wap-nav"}},[e._v("数据展示")])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(e){a("6+BD")},"data-v-12408ffa",null).exports,p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("van-nav-bar",{staticClass:"blue",attrs:{title:this.title,"left-text":"返回","left-arrow":""},on:{"click-left":this.onClickLeft}},[t("van-icon",{attrs:{slot:"right",name:this.icon?this.icon:null},slot:"right"})],1)],1)},staticRenderFns:[]};var v=a("VU/8")({data:function(){return{}},props:["title","icon"],methods:{onClickLeft:function(){this.$router.back(-1)}}},p,!1,function(e){a("10Yz")},"data-v-bcec5f50",null).exports,m={data:function(){return{loading:!1,wifiList:[{name:"360wifi"},{name:"361wifi"},{name:"362wifi"},{name:"363wifi"},{name:"364wifi"},{name:"365wifi"},{name:"366wifi"}]}},methods:{onLoad:function(){},airkissCall:function(e){console.log(this.loading),this.loading=!0,console.log(e)}},components:{headerNavBar:v},created:function(){var e=this;window.airkissCall=function(t){e.airkissCall(t)}},mounted:function(){}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("headerNavBar",{attrs:{title:"配网"}}),this._v(" "),t("van-list",{staticClass:"wifiList",attrs:{loading:this.loading},on:{load:this.onLoad}},this._l(this.wifiList,function(e,a){return t("van-cell",{key:a,attrs:{title:e.name,icon:"share"}})}))],1)},staticRenderFns:[]};var h=a("VU/8")(m,f,!1,function(e){a("11Wm")},"data-v-078f898e",null).exports,_={data:function(){return{loading:!1,deviceList:[{name:"设备1"},{name:"设备2"},{name:"设备3"},{name:"设备4"},{name:"设备5"},{name:"设备6"},{name:"设备7"}]}},methods:{onLoad:function(){}},components:{headerNavBar:v}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("headerNavBar",{attrs:{title:"扫描设备",icon:"search"}}),this._v(" "),t("van-list",{staticClass:"wifiList",attrs:{loading:this.loading},on:{load:this.onLoad}},this._l(this.deviceList,function(e,a){return t("van-cell",{key:a,attrs:{title:e.name,icon:"aim"}})}))],1)},staticRenderFns:[]};var g=a("VU/8")(_,b,!1,function(e){a("f+vW")},"data-v-5b4d7cc4",null).exports,k={data:function(){return{activeNames:["ip"],IpData:{Ip:"",port:""}}},methods:{},components:{headerNavBar:v}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("headerNavBar",{attrs:{title:"输入数据"}}),e._v(" "),a("van-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("van-collapse-item",{attrs:{title:"输入IP/PORT",name:"ip"}},[a("van-cell-group",[a("van-field",{attrs:{required:"",clearable:"",label:"IP",placeholder:"请输入IP"},model:{value:e.IpData.ip,callback:function(t){e.$set(e.IpData,"ip",t)},expression:"IpData.ip"}}),e._v(" "),a("van-field",{attrs:{required:"",clearable:"",label:"PORT",placeholder:"请输入PORT"},model:{value:e.IpData.port,callback:function(t){e.$set(e.IpData,"port",t)},expression:"IpData.port"}})],1)],1),e._v(" "),a("van-collapse-item",{attrs:{title:"输入/查看雷达设备信息参数",name:"Device"}},[a("van-cell-group",[a("van-field",{attrs:{required:"",clearable:"",label:"LED",placeholder:"请输入LED"},model:{value:e.IpData.ip,callback:function(t){e.$set(e.IpData,"ip",t)},expression:"IpData.ip"}}),e._v(" "),a("van-field",{attrs:{required:"",clearable:"",label:"模式",placeholder:"请输入模式"},model:{value:e.IpData.port,callback:function(t){e.$set(e.IpData,"port",t)},expression:"IpData.port"}}),e._v(" "),a("van-field",{attrs:{required:"",clearable:"",label:"最小距离",placeholder:"请输入最小距离 "},model:{value:e.IpData.port,callback:function(t){e.$set(e.IpData,"port",t)},expression:"IpData.port"}}),e._v(" "),a("van-field",{attrs:{required:"",clearable:"",label:"最大距离",placeholder:"请输入最大距离 "},model:{value:e.IpData.port,callback:function(t){e.$set(e.IpData,"port",t)},expression:"IpData.port"}}),e._v(" "),a("van-field",{attrs:{required:"",clearable:"",label:"灵敏度",placeholder:"请输入灵敏度"},model:{value:e.IpData.port,callback:function(t){e.$set(e.IpData,"port",t)},expression:"IpData.port"}}),e._v(" "),a("van-field",{attrs:{required:"",clearable:"",label:"模块安装高度",placeholder:"请输入模块安装高度"},model:{value:e.IpData.port,callback:function(t){e.$set(e.IpData,"port",t)},expression:"IpData.port"}})],1)],1)],1)],1)},staticRenderFns:[]};var I=a("VU/8")(k,D,!1,function(e){a("026m")},"data-v-5ffe7a1e",null).exports,w={data:function(){return{}},methods:{},components:{headerNavBar:v}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("headerNavBar",{attrs:{title:"数据展示"}})],1)},staticRenderFns:[]};var $=a("VU/8")(w,x,!1,function(e){a("FOkQ")},"data-v-46ec03ba",null).exports,L={data:function(){return{userInfor:{name:"",password:""}}},methods:{submit:function(){console.log(this.$store.state),this.$store.state.isLogin=!0,this.$router.push({path:this.$route.query.redirect||"/home/"})}},components:{headerNavBar:v},store:l},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("headerNavBar",{attrs:{title:"login"}}),e._v(" "),a("div",{staticClass:"loginFrom"},[a("div",[a("van-cell-group",[a("van-field",{attrs:{placeholder:"请输入用户名","input-align":"center"},model:{value:e.userInfor.name,callback:function(t){e.$set(e.userInfor,"name",t)},expression:"userInfor.name"}}),e._v(" "),a("van-field",{attrs:{type:"password",placeholder:"请输入密码","input-align":"center"},model:{value:e.userInfor.password,callback:function(t){e.$set(e.userInfor,"password",t)},expression:"userInfor.password"}})],1),e._v(" "),a("div",{staticClass:"submit"},[a("van-button",{staticClass:"submit_btn",attrs:{plain:"",round:"",size:"large"},on:{click:e.submit}},[e._v("登陆")])],1)],1)])],1)},staticRenderFns:[]};var q=a("VU/8")(L,N,!1,function(e){a("YCed")},"data-v-5d835dee",null).exports,B={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-sku",{attrs:{sku:e.sku},model:{value:e.showBase,callback:function(t){e.showBase=t},expression:"showBase"}},[a("div",{attrs:{slot:"sku-header"},slot:"sku-header"},[e._v("1213123")])])],1)},staticRenderFns:[]};var C=a("VU/8")({data:function(){return{sku:{tree:[{k:"颜色",v:[{id:"30349",name:"红色",imgUrl:"https://img.yzcdn.cn/1.jpg"},{id:"1215",name:"蓝色",imgUrl:"https://img.yzcdn.cn/2.jpg"}],k_s:"s1"}],list:[{id:2259,price:100,s1:"1215",s2:"1193",s3:"0",stock_num:110}],price:"1.00",stock_num:227,collection_id:2261,none_sku:!1,messages:[{datetime:"0",multiple:"0",name:"留言",type:"text",required:"1"}],hide_stock:!1},showBase:!0}}},B,!1,function(e){a("hzOQ")},"data-v-d11c6c14",null).exports;n.a.use(o.a);var F=[{path:"/home/",name:"airkiss",component:h,meta:{index:0,requireAuth:!0}},{path:"/home/ScanningDevice",name:"ScanningDevice",component:g,meta:{index:1}},{path:"/home/InputData",name:"InputData",component:I,meta:{index:2}},{path:"/home/showData",name:"showData",component:$,meta:{index:3}}],E=new o.a({routes:[{path:"/login",name:"login",component:q,meta:{requireAuth:!0}},{path:"/cs",name:"cs",component:C,meta:{requireAuth:!0}},{path:"/",redirect:"/home/"},{path:"/home",name:"home",component:d,children:F}]});E.beforeEach(function(e,t,a){e.meta.requireAuth?a():l.state.isLogin?a():a({path:"/login",query:{redirect:e.fullPath}})});var R=E,U=a("Fd2+");a("4ml/");n.a.use(U.a),n.a.config.productionTip=!1;new n.a({el:"#app",router:R,components:{App:r},template:"<App/>"})},YCed:function(e,t){},"f+vW":function(e,t){},hzOQ:function(e,t){},"we+4":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b2266cac1adc8715b0a4.js.map