(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkout"],{"25f0":function(t,e,s){"use strict";var r=s("6eeb"),a=s("825a"),i=s("d039"),o=s("ad6d"),d="toString",n=RegExp.prototype,c=n[d],l=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u=c.name!=d;(l||u)&&r(RegExp.prototype,d,(function(){var t=a(this),e=String(t.source),s=t.flags,r=String(void 0===s&&t instanceof RegExp&&!("flags"in n)?o.call(t):s);return"/"+e+"/"+r}),{unsafe:!0})},"38df":function(t,e,s){},"3ca3":function(t,e,s){"use strict";var r=s("6547").charAt,a=s("69f3"),i=s("7dd0"),o="String Iterator",d=a.set,n=a.getterFor(o);i(String,"String",(function(t){d(this,{type:o,string:String(t),index:0})}),(function(){var t,e=n(this),s=e.string,a=e.index;return a>=s.length?{value:void 0,done:!0}:(t=r(s,a),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,s){"use strict";var r=s("0366"),a=s("7b0b"),i=s("9bdd"),o=s("e95a"),d=s("50c4"),n=s("8418"),c=s("35a1");t.exports=function(t){var e,s,l,u,f,v,p=a(t),m="function"==typeof this?this:Array,h=arguments.length,_=h>1?arguments[1]:void 0,g=void 0!==_,b=c(p),C=0;if(g&&(_=r(_,h>2?arguments[2]:void 0,2)),void 0==b||m==Array&&o(b))for(e=d(p.length),s=new m(e);e>C;C++)v=g?_(p[C],C):p[C],n(s,C,v);else for(u=b.call(p),f=u.next,s=new m;!(l=f.call(u)).done;C++)v=g?i(u,_,[l.value,C],!0):l.value,n(s,C,v);return s.length=C,s}},6547:function(t,e,s){var r=s("a691"),a=s("1d80"),i=function(t){return function(e,s){var i,o,d=String(a(e)),n=r(s),c=d.length;return n<0||n>=c?t?"":void 0:(i=d.charCodeAt(n),i<55296||i>56319||n+1===c||(o=d.charCodeAt(n+1))<56320||o>57343?t?d.charAt(n):i:t?d.slice(n,n+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},a3dd:function(t,e,s){"use strict";var r=s("38df"),a=s.n(r);a.a},a630:function(t,e,s){var r=s("23e7"),a=s("4df4"),i=s("1c7e"),o=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:a})},ad6d:function(t,e,s){"use strict";var r=s("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d28b:function(t,e,s){var r=s("746f");r("iterator")},d81d:function(t,e,s){"use strict";var r=s("23e7"),a=s("b727").map,i=s("1dde"),o=s("ae40"),d=i("map"),n=o("map");r({target:"Array",proto:!0,forced:!d||!n},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,s){var r=s("da84"),a=s("fdbc"),i=s("e260"),o=s("9112"),d=s("b622"),n=d("iterator"),c=d("toStringTag"),l=i.values;for(var u in a){var f=r[u],v=f&&f.prototype;if(v){if(v[n]!==l)try{o(v,n,l)}catch(m){v[n]=l}if(v[c]||o(v,c,u),a[u])for(var p in i)if(v[p]!==i[p])try{o(v,p,i[p])}catch(m){v[p]=i[p]}}}},e01a:function(t,e,s){"use strict";var r=s("23e7"),a=s("83ab"),i=s("da84"),o=s("5135"),d=s("861d"),n=s("9bf2").f,c=s("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(u[e]=!0),e};c(f,l);var v=f.prototype=l.prototype;v.constructor=f;var p=v.toString,m="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;n(v,"description",{configurable:!0,get:function(){var t=d(this)?this.valueOf():this,e=p.call(t);if(o(u,t))return"";var s=m?e.slice(7,-1):e.replace(h,"$1");return""===s?void 0:s}}),r({global:!0,forced:!0},{Symbol:f})}},e86f:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"checkout"},[s("div",{staticClass:"container"},[s("div",{staticClass:"checkout-box"},[s("div",{staticClass:"checkout-address clearfix"},[s("p",{staticClass:"address-header"},[t._v("收货地址")]),s("div",{staticClass:"address-body"},[t._l(t.addressList_reverser,(function(e,r){return s("div",{key:"address_"+r,staticClass:"address-item",class:{select:t.Selected_adress==r},on:{click:function(e){t.Selected_adress=r}}},[s("dl",[s("dt",{staticClass:"recipient"},[t._v(t._s(e.recipient))]),s("dd",{staticClass:"phone"},[t._v(t._s(e.phone))]),s("dd",{staticClass:"area"},[t._v(t._s(e.area))]),s("dd",{staticClass:"address"},[t._v(t._s(e.address))])]),s("div",{staticClass:"actions"},[s("a",{attrs:{href:"javascript:;"},on:{click:t.modifyAddress}},[t._v("修改")])])])})),s("div",{staticClass:"address-item address-new",on:{click:t.add_Address}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" 添加新地址 ")])],2)]),s("div",{staticClass:"checkout-goods"},[s("p",{staticClass:"goods-header"},[t._v("商品")]),s("div",{staticClass:"goods-body"},t._l(t.orderGoods,(function(e,r){return s("ul",{key:"goods_"+r,staticClass:"goods-list clearfix"},[s("li",{staticClass:"clearfix"},[t._m(1,!0),s("div",{staticClass:"goods-name"},[s("router-link",{attrs:{to:{name:"product",query:{pid:e.pid}},target:"_blank"}},[t._v(t._s(e.name))])],1),s("div",{staticClass:"goods-price"},[t._v(t._s(e.price+"元 × "+e.quantity))]),s("div",{staticClass:"goods-total"},[t._v(t._s(e.price*e.quantity))])])])})),0)]),s("div",{staticClass:"checkout-count clearfix"},[s("div",{staticClass:"count-box"},[s("ul",[s("li",[s("label",[t._v("商品件数：")]),s("span",[s("span",{staticClass:"total-quantity"},[t._v(t._s(t.totalOrderGoodsAmount))]),t._v("件 ")])]),s("li",[s("label",[t._v("商品总价：")]),s("span",{staticClass:"total-price"},[s("span",{staticClass:"price"},[t._v(t._s(t.totalOrderGoodsPrice))]),t._v("元 ")])]),t._m(2),t._m(3),t._m(4),s("li",{staticClass:"total-price"},[s("label",[t._v("应付总额：")]),s("span",[s("em",{staticClass:"price"},[t._v(t._s(t.totalOrderGoodsPrice))]),t._v("元 ")])])])])]),s("div",{staticClass:"checkout-bar clearfix"},[s("div",{staticClass:"bar-btn"},[s("a",{attrs:{href:"javascript:;",id:"checkout"},on:{click:t.checkout_pay}},[t._v("去结算")])])])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow_editAddress,expression:"isShow_editAddress"}],staticClass:"edit-bg"}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow_editAddress,expression:"isShow_editAddress"}],staticClass:"edit-address"},[s("div",{staticClass:"edit-header"},[s("span",{staticClass:"title"},[t._v("添加收货地址")]),s("a",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(e){t.isShow_editAddress=!1}}},[s("i",{staticClass:"iconfont"},[t._v("")])])]),s("div",{staticClass:"edit-body"},[s("form",{staticClass:"body-form clearfix"},[s("input",{attrs:{type:"hidden",name:"address_id"}}),s("div",{staticClass:"form-section form-name"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address_form.recipient,expression:"address_form.recipient"}],staticClass:"input-text name-input",attrs:{type:"text",name:"recipient",placeholder:"收货人姓名"},domProps:{value:t.address_form.recipient},on:{input:function(e){e.target.composing||t.$set(t.address_form,"recipient",e.target.value)}}})]),s("div",{staticClass:"form-section form-phone"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address_form.phone,expression:"address_form.phone"}],staticClass:"input-text phone-input",attrs:{type:"text",name:"phone",placeholder:"手机号"},domProps:{value:t.address_form.phone},on:{input:function(e){e.target.composing||t.$set(t.address_form,"phone",e.target.value)}}})]),s("div",{staticClass:"form-section form-area"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address_form.area,expression:"address_form.area"}],staticClass:"input-text area-input",attrs:{type:"text",name:"area",placeholder:"选择省 / 市 / 区 / 街道"},domProps:{value:t.address_form.area},on:{input:function(e){e.target.composing||t.$set(t.address_form,"area",e.target.value)}}})]),s("div",{staticClass:"form-section form-detail"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address_form.address,expression:"address_form.address"}],staticClass:"input-text detail-input",attrs:{type:"textarea",name:"address",placeholder:"详细地址，路名或街道名称，门牌号"},domProps:{value:t.address_form.address},on:{input:function(e){e.target.composing||t.$set(t.address_form,"address",e.target.value)}}})])])]),s("div",{staticClass:"edit-footer"},[s("a",{staticClass:"btn btn-primary confirm",attrs:{href:"javascript:;"},on:{click:t.submit_address}},[t._v("保存")]),s("a",{staticClass:"btn btn-gray close",attrs:{href:"javascript:;"},on:{click:function(e){t.isShow_editAddress=!1}}},[t._v("取消")])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"miniheader"},[s("div",{staticClass:"container"},[s("div",{staticClass:"miniheader-logo"},[s("a",{attrs:{href:"#"}},[t._v("小米官网")])]),s("div",{staticClass:"miniheader-title"},[s("h2",[t._v("确认订单")]),s("p",[t._v("温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算")])]),s("div",{staticClass:"miniheader-info"},[s("i",{staticClass:"iconfont"},[t._v("√")]),s("a",{staticClass:"user-name",attrs:{href:"#"}},[s("span")]),s("span",{staticClass:"sep"},[t._v("|")]),s("a",{staticClass:"info-order",attrs:{href:"#"}},[t._v("我的订单")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-img"},[s("img",{attrs:{src:"img/goods1.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("label",[t._v("活动优惠：")]),s("span",[t._v("-0元")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("label",[t._v("优惠券抵扣：")]),s("span",[t._v("-0元")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("label",[t._v("运费：")]),s("span",[t._v("0元")])])}];s("a4d3"),s("4de4"),s("4160"),s("d81d"),s("13d5"),s("a9e3"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("25f0"),s("159b");function i(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}s("e01a"),s("d28b"),s("a630"),s("e260"),s("3ca3"),s("ddb0");function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(t){return i(t)||o(t)||d()}var c=s("ade3"),l=(s("96cf"),s("1da1")),u=s("7c15"),f=s("2f62");function v(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(Object(s),!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var m={created:function(){document.title="确认订单"},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("address/CHANGEaddressList");case 2:return e.next=4,t.$store.dispatch("cart/CHANGEcartGoodsList");case 4:t.orderGoods=t.orderGoods_id.map((function(e,s,r){return t.findGoodsInCartGoodsList(e)}));case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{orderGoods:[],orderGoods_id:JSON.parse(this.$route.query.id),isShow_editAddress:!1,Selected_adress:0,address_form:{}}},computed:p({},Object(f["d"])("cart",["cartGoodsList"]),{},Object(f["d"])("address",["addressList"]),{addressList_reverser:function(){return n(this.addressList).reverse()},totalOrderGoodsAmount:function(){return this.orderGoods.reduce((function(t,e){return t+Number(e.quantity)}),0)},totalOrderGoodsPrice:function(){return this.orderGoods.reduce((function(t,e){return t+Number(e.quantity)*Number(e.price)}),0)}}),methods:{findGoodsInCartGoodsList:function(t){for(var e=0;e<this.cartGoodsList.length;e++)if(this.cartGoodsList[e].id==t)return this.cartGoodsList[e]},add_Address:function(){this.isShow_editAddress=!0,this.address_form={}},modifyAddress:function(){this.isShow_editAddress=!0,this.address_form=this.addressList_reverser[this.Selected_adress]},submit_address:function(){this.$store.dispatch("address/CHANGEaddressList_update",this.address_form).then((function(t){})),this.isShow_editAddress=!1},checkout_pay:function(){var t=this;u["a"].post("/user/checkout",{ids:this.orderGoods_id.toString(","),address_id:this.addressList_reverser[this.Selected_adress].address_id}).then((function(e){t.$router.push({name:"confirm",query:{order_no:e,address:JSON.stringify(t.addressList_reverser[t.Selected_adress]),orderGoods:JSON.stringify(t.orderGoods),totalOrderGoodsPrice:t.totalOrderGoodsPrice}})}))},fa:function(){}}},h=m,_=(s("a3dd"),s("2877")),g=Object(_["a"])(h,r,a,!1,null,"1470244a",null);e["default"]=g.exports}}]);
//# sourceMappingURL=checkout.efdb750f.js.map