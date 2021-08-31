(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98211da8"],{"0ee3":function(t,e,a){"use strict";a("a204")},"7f44":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"introduce"},[a("div",{staticClass:"progress"},[a("el-progress",{attrs:{"show-text":!1,type:"circle",percentage:t.updateProgress,width:t.isPc?140:120,"stroke-width":t.isPc?14:12,color:t.$coinInfo[t.chainName].color}}),a("svg-icon",{staticClass:"icon",style:{color:t.$coinInfo[t.chainName].color},attrs:{"icon-class":t.$coinInfo[t.chainName].icon}})],1),a("div",{staticClass:"switchBox"},[a("el-select",{staticStyle:{width:"100%"},attrs:{value:t.chainName},on:{change:t.onChangeChain}},t._l(t.chainList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"16px"}},[a("svg-icon",{staticClass:"icon",style:"color:"+t.$coinInfo[e.value].color,attrs:{"icon-class":t.$coinInfo[e.value].icon}})],1)])})),1)],1),a("div",{staticClass:"left"},[a("h2",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"fee"}}),t._v(" "+t._s(t.chainName.toUpperCase())+" "+t._s(t.$t("gasPrice.title"))+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"eth"===t.chainName,expression:"chainName === 'eth'"}]},[t._v("(Gwei)")])],1),a("p",{staticClass:"desc"},[a("span",[t._v(t._s(t.$t("gasPrice.desc")))])]),a("p",{staticClass:"desc"},[a("span",[t._v(t._s(t.lastUpdateTime))])])])]),a("ul",{staticClass:"ul"},t._l(t.list,(function(e){return a("li",{key:e.type},[a("div",{class:"iconBox "+e.type+"-bg"},[a("svg-icon",{class:e.type,attrs:{"icon-class":e.icon}})],1),a("h5",{staticClass:"speed"},[t._v(t._s(t.$t("gasPrice."+e.type)))]),a("count-to",{class:"num "+e.type,attrs:{"start-val":e.oPrice,decimals:1,"end-val":e.nPrice,duration:2e3}}),a("p",{staticClass:"time"},[t._v(t._s(t.secondToDate(e.seconds)))])],1)})),0),a("div",{staticClass:"tips"},[a("p",[t._v(t._s(t.$t("gasPrice.alert_2")))])])])},i=[],s=a("4833"),r=a("efe2"),o=(a("6a61"),a("37de"),a("1e34"),a("dfe9"),a("8b79"),a("a9b5"),a("9e2e")),c=a.n(o),l={zh:{gasPrice:{title:"Gas Price",desc:"最新实时报价",instant:"极速",fast:"高速",normal:"标准",slow:"缓慢",hour:"小时",second:"秒",minute:"分钟",alert_1:"所有报价基于矿池的待处理交易队列（包含全网交易），比其他基于链上数据的统计更实时和准确",alert_2:"CoinTool.APP"}},en:{gasPrice:{title:"Gas Price Last",desc:"Real-time latest price",instant:"Rapid",fast:"Fast",normal:"Normal",slow:"Slow",hour:"Hour",second:"Second",minute:"Minute",alert_1:"All quotations are based on the pending transaction queue of the mine pool (including the whole network transactions), which is more real-time and accurate than other statistics based on the data on the chain",alert_2:"CoinTool.APP"}}},u=a("ed08"),h=a("52c1"),d="gasPrice",p={name:d,components:{CountTo:c.a},data:function(){return{chainName:"eth",updateProgress:0,list:[{icon:"speed-transaction",type:"fast",nPrice:0,oPrice:0,seconds:0},{icon:"car",type:"normal",nPrice:0,oPrice:0,seconds:0},{icon:"tortoise",type:"slow",nPrice:0,oPrice:0,seconds:0}],t1:null,lastUpdateTime:"",isFirstData:!0,fast_old_price:0,normal_old_price:0,slow_old_price:0}},computed:Object(r["a"])({},Object(h["b"])(["isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[d]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh)),this.chainName=this.$route.path.replace("/".concat(this.$route.name,"/"),"").replace("/",""),this.chainList=Object(u["h"])(d)},destroyed:function(){console.log("clearTimeout(this.t1)"),clearInterval(this.t1)},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGasPrice();case 2:t.setProgress();case 3:case"end":return e.stop()}}),e)})))()},methods:{secondToDate:function(t){var e=Math.floor(t/60%60),a=Math.floor(t%60);if(t<60)return"".concat(a," ").concat(this.$t("gasPrice.second"));var n=0!==a?" ".concat(a," ").concat(this.$t("gasPrice.second")):"";return"".concat(e," ").concat(this.$t("gasPrice.minute")).concat(n)},onChangeChain:function(t){this.$router.push({path:"/".concat(d,"/").concat(t),query:this.$route.query})},setProgress:function(){var t=this;this.t1=setInterval(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.updateProgress<100)){e.next=4;break}t.updateProgress+=5,e.next=7;break;case 4:return e.next=6,t.getGasPrice();case 6:t.updateProgress=0;case 7:case"end":return e.stop()}}),e)}))),400)},getGasPrice:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:"https://api.debank.com/chain/gas_price_dict_v2",method:"get",data:{chain:t.chainName}});case 2:a=e.sent,t.lastUpdateTime=t.$moment(new Date).format("YYYY-MM-DD HH:mm:ss"),t.list=t.list.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{oPrice:t.nPrice,nPrice:a.data[t.type].price/1e9,seconds:a.data[t.type].estimated_seconds})}));case 5:case"end":return e.stop()}}),e)})))()}}},m=p,f=(a("0ee3"),a("5d22")),v=Object(f["a"])(m,n,i,!1,null,"0ea5b40c",null);e["default"]=v.exports},"9e2e":function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,c=0;c<i.length&&(!s||!r);c++)o=i[c],e.requestAnimationFrame=s=s||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout((function(){t(e+a)}),a);return n=e+a,i},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,n){var i,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var c=Object.create(o.computed||null);Object.keys(n).forEach((function(t){var e=n[t];c[t]=function(){return e}})),o.computed=c}return{esModule:i,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},a204:function(t,e,a){}}]);