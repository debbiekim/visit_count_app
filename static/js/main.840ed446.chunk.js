(this.webpackJsonpvisit_count_app=this.webpackJsonpvisit_count_app||[]).push([[0],{11:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),l=o(4),c=o.n(l),a=o(1),r=o(2),s=o(5),u=document.cookie.split(";").map((function(e){return e.split("=")})).reduce((function(e,t){var o=Object(s.a)(t,2),n=o[0],i=o[1];return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},n.trim(),decodeURIComponent(i)))}),{}),m=function(e,t){console.log("setting cookie"+e);var o,n=new Date;n.setTime(n.getTime()+3456e6),o="expires="+n.toUTCString()+";",document.cookie=e+"="+t+";"+o+"path=/"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";console.log("delete cookie"),document.cookie.split(";").forEach((function(t){document.cookie=t.trim().split("=")[0]+"=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path="+e}))},v=function(){console.log("generating a report..");var e="Here's the summary of your report.  You've visited ".concat(u.visit," times.  Your color of the ball was ").concat(u.color,".");alert(e)},p=function(){if(console.log("getting visit"),console.log("Cookies : "+u.visit),u.visit){console.log("existing cookie");var e=parseInt(u.visit);m("visit",e+1)}else console.log("new cookie"),m("name",function(){console.log("getting name..");var e=["John","Jenny","Josh","Smith","David"];return e[Math.floor(Math.random()*e.length)]}()),m("visit",1),m("color",function(){console.log("getting randomly selected color..");var e=["red","blue"];return e[Math.floor(Math.random()*e.length)]}())};var d=function(){return console.log("Starting.."),p(),i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement("h1",null," Hello Welcome ",u.name,"!"),i.a.createElement("h2",null," You've visited us ",u.visit," time"),i.a.createElement("img",{src:u.color+".png",alt:u.color,width:"200",height:"200"})),i.a.createElement("div",null,i.a.createElement("button",{onClick:g}," Delete All Cookies "),i.a.createElement("button",{onClick:v}," Generate A Report")))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root"))},6:function(e,t,o){e.exports=o(11)}},[[6,1,2]]]);
//# sourceMappingURL=main.840ed446.chunk.js.map