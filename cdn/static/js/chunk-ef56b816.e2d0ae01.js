(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef56b816"],{"071a":function(e,t,s){"use strict";s("b0f4")},b0f4:function(e,t,s){},f07f:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("svg-icon",{attrs:{"icon-class":"international"}}),s("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$t("zdcashCheck.title")))])],1),s("el-alert",{attrs:{title:e.$t("zdcashCheck.support"),type:"success",closable:!1}}),s("el-row",[s("el-input",{attrs:{type:"textarea",placeholder:e.$t("zdcashCheck.placeholder")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),s("el-row",{staticStyle:{margin:"10px 0"}},[s("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onCheck}},[e._v(e._s(e.$t("zdcashCheck.check")))])],1),e._l(e.resList,(function(e,t){return s("el-alert",{key:t,attrs:{closable:!1,title:e.address,description:e.desc,type:e.type,"show-icon":""}})})),s("div",{staticClass:"imgBox"},[s("el-alert",{attrs:{title:e.$t("zdcashCheck.contact"),type:"info"}}),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki/qun.jpg",alt:"wechat"}})],1)],2)],1)},r=[],n=s("efe2"),c=s("4833"),i=(s("6a61"),s("37de"),s("22f9"),s("65f0"),s("05d6"),{zh:{zdcashCheck:{title:"ZdCash空投领取资格查询:",placeholder:"请输入ETH地址查询",check:"查询",noPermissions:"少年你没有资格领取",networkError:"少年你没有资格领取",checkAddress:"请检查地址是否正确",alert_ok:"可领取ZDC的数量: {a}   -- CoinTool.APP 查询",contact:"扫描下方微信二维码，一起交流",support:"支持多地址查询使用 例如 0xaaaa,0xbbbb"}},en:{zdcashCheck:{title:"ZdCash airdrop qualification check:",placeholder:"Please enter eth address for inquiry",check:"Check",networkError:"Juvenile, you are not eligible for it",noPermissions:"Juvenile, you are not eligible for it",checkAddress:"address length incorrect",alert_ok:"Number of ZDC you can claim: {a}    -- CoinTool.APP",contact:"Scan the WeChat qr code below and communicate with each other",support:"Support multi - address query. Demo: 0xaaaa,0xbbbb"}}}),o=s("9905"),l="zdcashCheck",u={name:"ZdcashCheck",data:function(){return{resList:[],res:"",address:"",runNum:1}},created:function(){this.$i18n.getLocaleMessage("en")[l]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh))},methods:{onCheck:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.resList=[],s=e.address.split(","),o["a"].mapLimit(s,e.runNum,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(s,a){var r,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={},t.prev=1,t.next=4,e.getRes(s);case 4:c=t.sent,c.data?(i=Number((parseInt(c.data.balance)/1e18).toFixed(4)),r=Object(n["a"])(Object(n["a"])({},c),{},{status:200,address:s,num:i})):r={status:500,address:s},t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),r=t.t0.response&&500===t.t0.response.status?{status:500,address:s}:{status:504,address:s};case 11:return t.prev=11,e.addResListItem(a,r),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e,s){return t.apply(this,arguments)}}(),(function(e,t){e&&console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},addResListItem:function(e,t){var s={200:this.$t("zdcashCheck.alert_ok",{a:t.num}),500:this.$t("zdcashCheck.noPermissions"),504:this.$t("zdcashCheck.networkError")};this.resList.push(Object(n["a"])(Object(n["a"])({},t),{},{type:200===t.status?"success":"error",desc:s[t.status]})),e(null,Object(n["a"])({},t))},getRes:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$ajax({url:"https://ossified-pyrite-neighbor.glitch.me/?address="+e,method:"get"});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}}),s)})))()}}},d=u,h=(s("071a"),s("5d22")),p=Object(h["a"])(d,a,r,!1,null,"5780c565",null);t["default"]=p.exports}}]);