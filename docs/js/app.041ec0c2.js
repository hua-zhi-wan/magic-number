(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var b=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1091:function(e,t,n){"use strict";n("e3e9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,a){var u=Object(r["l"])("MagicNumber");return Object(r["g"])(),Object(r["c"])(u)}Object(r["i"])("data-v-79554bd0");var c=Object(r["e"])("h2",null,"小游戏 - 魔法数字",-1),a={class:"container"},u=Object(r["e"])("p",null,"如果以下排列中有你想象的数字，就点击【是】，反之点击【否】",-1),i={class:"container float-container"},l={class:"container"},b=Object(r["f"])("盲猜你选择的数字是 - "),s={id:"bigger"};function f(e,t,n,o,f,p){return Object(r["g"])(),Object(r["d"])(r["a"],null,[c,Object(r["e"])("div",a,[Object(r["o"])(Object(r["e"])("p",null,"游戏开始时，请在【0~127】中随意挑选一个数字！",512),[[r["n"],-1===o.data.level]]),u]),Object(r["e"])("div",i,[(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(o.data.showList,(function(e){return Object(r["g"])(),Object(r["d"])("span",{key:e.id,class:"magic-node"},Object(r["m"])(e),1)})),128))]),Object(r["e"])("div",l,[Object(r["o"])(Object(r["e"])("p",null,Object(r["m"])(o.data.ansList),513),[[r["n"],!1]]),Object(r["o"])(Object(r["e"])("p",null,[b,Object(r["e"])("span",s,Object(r["m"])(o.bitToNum(o.data.ansList)),1)],512),[[r["n"],o.data.level>=7]]),Object(r["o"])(Object(r["e"])("button",{onClick:t[0]||(t[0]=function(){return o.reload&&o.reload.apply(o,arguments)})},"再玩一次！",512),[[r["n"],o.data.level>=7]]),Object(r["o"])(Object(r["e"])("button",{onClick:t[1]||(t[1]=function(){return o.init&&o.init.apply(o,arguments)})},"开始游戏！",512),[[r["n"],-1===o.data.level]]),Object(r["o"])(Object(r["e"])("button",{onClick:t[2]||(t[2]=function(e){return o.choose(!0)})},"是",512),[[r["n"],o.data.level>=0&&o.data.level<7]]),Object(r["o"])(Object(r["e"])("button",{onClick:t[3]||(t[3]=function(e){return o.choose(!1)})},"否",512),[[r["n"],o.data.level>=0&&o.data.level<7]])])],64)}Object(r["h"])();var p={name:"MagicNumber.vue",setup:function(){var e=Object(r["j"])({level:-1,map:[],showList:[],ansList:[]});function t(){e.showList.length=0;for(var t=0;t<128;++t)1===o(t)[e.level]&&e.showList.push(t)}function n(n){e.level+=1,e.ansList.push(n),t()}function o(e){var t=[];while(e>0)t.push(e%2===1?1:0),e=Math.floor(e/2);while(t.length<7)t.push(0);return t.reverse()}function c(e){var t=0;for(var n in e)t=2*t+e[n];return t}return{data:e,choose:n,numToBit:o,bitToNum:c,init:function(){e.level=0,t()},reload:function(){return window.location.reload()}}}};n("1091");p.render=f,p.__scopeId="data-v-79554bd0";var d=p,O={name:"App",components:{MagicNumber:d}};n("90b4");O.render=o;var j=O;Object(r["b"])(j).mount("#app")},"7cb1":function(e,t,n){},"90b4":function(e,t,n){"use strict";n("7cb1")},e3e9:function(e,t,n){}});
//# sourceMappingURL=app.041ec0c2.js.map