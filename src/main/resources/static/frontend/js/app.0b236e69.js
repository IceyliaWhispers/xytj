(function(){"use strict";var t={1457:function(t,e,n){var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],r={},a=r,o=n(1001),u=(0,o.Z)(a,s,i,!1,null,null,null),c=u.exports,l=n(2631),h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"com-page"},[e("login")],1)},p=[],d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-structor"},[e("div",{staticClass:"signup"},[e("h2",{staticClass:"form-title",attrs:{id:"signup"}},[t._v("西柚碳迹")]),e("div",{staticClass:"form-holder"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"input",attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.verNum,expression:"verNum"}],staticClass:"input",attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.verNum},on:{input:function(e){e.target.composing||(t.verNum=e.target.value)}}}),e("div",{staticClass:"msg"},[t._v(" | "),t.sended?e("span",{staticClass:"time"},[t._v(t._s(t.time)+"s")]):e("span",{staticClass:"vertify",on:{click:t.vertify}},[t._v("获取验证码")])])]),e("p",{staticClass:"warn"},[t._v(t._s(t.warn))]),e("button",{staticClass:"submit-btn",on:{click:t.login}},[t._v("登录")])])])},m=[],f=(n(7658),{data(){return{phone:"18781062970",verNum:"6348",time:60,sended:!1,warn:"",timer1:null}},methods:{async vertify(){if(""===this.phone)return void(this.warn="请先输入手机号");const t=/^\d{15,17}$/;if(t.test(this.phone))return void(this.warn="手机号格式错误");this.warn="";const{data:e}=await this.$http.post("/user/sendMsg",{phone:this.phone}).catch((t=>{this.$message.error("出现了系统性的错误")}));0===e.code?this.warn="发送失败":(this.$message.success("验证码已发送"),this.sended=!0,this.timer1=setInterval((()=>{this.time--,0===this.time&&(clearInterval(this.timer1),this.sended=!1,this.time=60)}),1e3))},async login(){const{data:t}=await this.$http.post("/user/login",{phone:this.phone,code:this.verNum});0===t.code&&(this.warn="验证码错误"),1===t.code&&this.$router.push("map")}}}),v=f,g=(0,o.Z)(v,d,m,!1,null,null,null),w=g.exports,y={data(){return{}},components:{Login:w}},b=y,C=(0,o.Z)(b,h,p,!1,null,"3f7acad4",null),$=C.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"com-page"},[e("Map")],1)},x=[],P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"com-container",on:{contextmenu:function(e){return e.preventDefault(),t.revertMap.apply(null,arguments)}}},[e("div",{ref:"map_ref",staticClass:"com-chart"})])},O=[],Z={data(){return{chartInstance:null,allData:null,mapData:{},bChart:null,driving:null,driveStatus:0,startPoint:null,endPoint:null}},mounted(){this.$notify({message:"点击位置开始骑行"}),this.initChart(),window.addEventListener("resize",this.screenAdapter),this.screenAdapter()},destroyed(){window.removeEventListener("resize",this.screenAdapter)},methods:{async initChart(){this.chartInstance=this.$echarts.init(this.$refs.map_ref);const t={bmap:{center:[114.064747,22.551052],zoom:14,roam:!0,mapStyle:{styleJson:[{featureType:"manmade",elementType:"all",stylers:{}}]}}};this.chartInstance.setOption(t),this.bChart=this.chartInstance.getModel().getComponent("bmap").getBMap(),this.driving=new BMap.DrivingRoute(this.bChart,{renderOptions:{map:this.bChart,autoViewport:!0}}),this.bChart.addEventListener("click",(t=>{0===this.driveStatus?this.$confirm("是否开始骑行","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.$http.post("/orderdetails/start",{startLatitude:t.point.lat,startLongitude:t.point.lng}).then((e=>{0===e.code?this.$message.error("服务器故障，请重试"):(this.$message.success("骑行已开始"),this.startPoint=new BMap.Point(t.point.lng,t.point.lat),this.driveStatus=1)}),(t=>{this.$message.error("出现了未知异常")})).catch((t=>t))})).catch((()=>{this.$message({type:"info",message:"已取消"})})):this.$confirm("是否结束骑行","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.$http.post("/orderdetails/end",{endLatitude:t.point.lat,endLongitude:t.point.lng}).then((e=>{0===e.code?this.$message.error("服务器故障，请重试"):(this.endPoint=new BMap.Point(t.point.lng,t.point.lat),this.driving.search(this.startPoint,this.endPoint),this.$message.success("骑行结束"),this.driveStatus=0)}),(t=>{this.$message.error("出现了未知异常")}))})).catch((()=>{this.$message({type:"info",message:"已取消"})}))}))},screenAdapter(){const t=this.$refs.map_ref.offsetWidth/100*3.6,e={title:{textStyle:{fontSize:t}}};this.chartInstance.setOption(e),this.chartInstance.resize()}}},M=Z,T=(0,o.Z)(M,P,O,!1,null,"5c421b26",null),L=T.exports,k={data(){return{}},components:{Map:L}},B=k,I=(0,o.Z)(B,_,x,!1,null,"5b3d3bf6",null),N=I.exports;Vue.use(l.ZP);const S=[{path:"/",name:"home",redirect:"/login"},{path:"/map",component:N},{path:"/login",component:$}],j=new l.ZP({routes:S});var V=j,z=n(3822);Vue.use(z.ZP);var A=new z.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),D=n(4161);Vue.config.productionTip=!1,D.Z.defaults.headers.post["Content-Type"]="application/json",D.Z.defaults.baseURL="http://localhost:8080",Vue.prototype.$http=D.Z,Vue.prototype.$echarts=window.echarts,new Vue({router:V,store:A,render:t=>t(c)}).$mount("#app")}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,i,r){if(!s){var a=1/0;for(l=0;l<t.length;l++){s=t[l][0],i=t[l][1],r=t[l][2];for(var o=!0,u=0;u<s.length;u++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(o=!1,r<a&&(a=r));if(o){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[s,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,r,a=s[0],o=s[1],u=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(u)var l=u(n)}for(e&&e(s);c<a.length;c++)r=a[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},s=self["webpackChunkvue_user"]=self["webpackChunkvue_user"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(1457)}));s=n.O(s)})();
//# sourceMappingURL=app.0b236e69.js.map