(this.webpackJsonpetherburn=this.webpackJsonpetherburn||[]).push([[67],{761:function(n,e,t){"use strict";t.r(e);var r=t(9),a=t.n(r),c=(t(133),t(216));t(49),t(94),t(167);function i(n,e,t,r,a,c,i){try{var u=n[c](i),o=u.value}catch(s){return void t(s)}u.done?e(o):Promise.resolve(o).then(r,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var c=n.apply(e,t);function u(n){i(c,r,a,u,o,"next",n)}function o(n){i(c,r,a,u,o,"throw",n)}u(void 0)}))}}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{minimumBalance:"0"},e=n.minimumBalance,t=n.heading,r=n.description,i=n.icon,o=n.html,s=n.button;return function(){var n=u(a.a.mark((function n(u){var l,h,f,b;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l=u.balance,h=u.BigNumber,f=u.stateSyncStatus,b=u.stateStore,null!==l){n.next=10;break}if(!f.balance){n.next=10;break}return n.prev=3,n.next=6,f.balance;case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(3);case 10:if(!h(b.balance.get()).lt(h(e))){n.next=12;break}return n.abrupt("return",{heading:t||"Get Some ETH",description:r||"Your current account has less than the necessary minimum balance of ".concat(h(e).div(h("1000000000000000000")).toString(10)," ETH."),eventCode:"nsfFail",icon:i||c.l,html:o,button:s});case 12:case"end":return n.stop()}}),n,null,[[3,8]])})));return function(e){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=67.f080ea16.chunk.js.map