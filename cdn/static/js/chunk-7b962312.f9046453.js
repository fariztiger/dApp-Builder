(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b962312"],{"946a":function(e,a,t){},ab8c:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"tool_box"},e._l(e.data,(function(a,n){return t("section",{key:n},[t("h2",[t("span",[e._v(e._s(n))])]),t("ul",{staticClass:"boxlist clearfix"},e._l(a,(function(a){return t("li",{key:a.data_content},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:a.remark,"open-delay":100,placement:"top"}},[t("a",{attrs:{href:a.link,target:"_blank"}},[e._v(e._s(a.name))])])],1)})),0)])})),0)},r=[],o={zh:{navigation:{coin:"币种:"}},en:{navigation:{coin:"Coin:"}}},i={zh:{ETH:[{link:"https://etherscan.io/",name:"EtherScan",remark:"ETH区块浏览器"},{link:"https://www.yitaifang.com/",name:"Yitaifang",remark:"ETH区块浏览器"},{link:"https://ethgasstation.info/",name:"ETH Gas 费用",remark:"ETH网络最新Gas费用"},{link:"https://metamask.io/",name:"Metamask",remark:"Chrome小狐狸插件，运行dapp必备"},{link:"https://myetherwallet.com/",name:"Myetherwallet",remark:"Web以太坊钱包"}],BTC:[{link:"https://btc.com/",name:"BTC区块浏览器",remark:"Bticoin的区块浏览器"}],HECO:[{link:"https://hecoinfo.com/",name:"HECO区块浏览器",remark:"HECO的区块浏览器"}],BSC:[{link:"https://bscscan.com/",name:"BSC区块浏览器",remark:"BSC的区块浏览器"}],"行情资讯":[{link:"https://www.dappchaser.com/bounty-chaser/",name:"DappChaser",remark:"追踪全球区块链创新动态"},{link:"https://www.coingecko.com/",name:"币虎",remark:"专业的行情数据"},{link:"https://coinmarketcap.com/",name:"Coinmarketcap",remark:"专业的行情数据"},{link:"https://www.feixiaohao.cc/",name:"非小号",remark:"国内行情数据"},{link:"https://www.mytokencap.com/",name:"Mytoken",remark:"Mytoken 行情数据"}],"交易所":[{link:"https://www.huobi.pr/",name:"火币",remark:"全球排名前三交易所"},{link:"https://www.binancezh.pro/",name:"币安",remark:"全球排名前三交易所"},{link:"https://www.okexcn.com/join/2672543213",name:"OKEX",remark:"全球排名前三交易所"}]},en:{ETH:[{link:"https://etherscan.io/",name:"EtherScan",remark:"Block Explorer and Analytics Platform for Ethereum."},{link:"https://www.yitaifang.com/",name:"Yitaifang",remark:"Block Explorer and Analytics Platform for Ethereum."},{link:"https://ethgasstation.info/",name:"ETH Gas Station",remark:"Consumer oriented metrics for the Ethereum Gas Market."},{link:"https://metamask.io/",name:"Metamask",remark:" Run Ethereum dApps right in your browser without running full node."},{link:"https://myetherwallet.com/",name:"Myetherwallet",remark:"Web Ethereum wallet"}],BTC:[{link:"https://btc.com/",name:"BTC Block Explorer",remark:"Block Explorer and Analytics Platform for Bticoin"},{link:"https://blockchain.info/",name:"Blockchain",remark:"Block Explorer and Analytics Platform for Bticoin"}],HECO:[{link:"https://hecoinfo.com/",name:"HECO Block Browser",remark:"HECO Block Browser"}],BSC:[{link:"https://bscscan.com/",name:"BSC Block Browser",remark:"BSC Block Browser"}],"Market quotations":[{link:"https://www.dappchaser.com/bounty-chaser/",name:"DappChaser",remark:"Tracking global blockchain innovation trends"},{link:"https://www.coingecko.com/",name:"Coingecko",remark:"Professional market data"},{link:"https://coinmarketcap.com/",name:"Coinmarketcap",remark:"Professional market data"},{link:"https://www.feixiaohao.cc/",name:"Fxh",remark:"Professional market data"},{link:"https://www.mytokencap.com/",name:"Mytoken",remark:"Mytoken market data"}],exchange:[{link:"https://www.huobi.pr/",name:"Huobi",remark:"Top three exchanges in the world"},{link:"https://www.binancezh.pro/",name:"币安",remark:"Top three exchanges in the world"},{link:"https://www.okexcn.com/join/2672543213",name:"OKEX",remark:"Top three exchanges in the world"}]}},m="navigation",c={name:"Navigation",components:{},data:function(){return{data:{}}},computed:{lang:{get:function(){return this.$store.state.app.language}}},watch:{lang:function(){this.getData()}},created:function(){this.$i18n.getLocaleMessage("en")[m]||(this.$i18n.mergeLocaleMessage("en",o.en),this.$i18n.mergeLocaleMessage("zh",o.zh))},mounted:function(){this.getData()},methods:{getData:function(){this.data=i[this.lang]}}},s=c,k=(t("d2fd"),t("5d22")),l=Object(k["a"])(s,n,r,!1,null,"f6d68906",null);a["default"]=l.exports},d2fd:function(e,a,t){"use strict";t("946a")}}]);