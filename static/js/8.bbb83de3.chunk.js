"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{8:function(r,t,n){n.r(t);var e=n(433),u=n(683),a=n(861),c=n(439),s=n(757),i=n.n(s),o=n(791),f=n(689),p=n(232),v=n(184);t.default=function(){var r=(0,o.useState)({items:[],loading:!1,error:null}),t=(0,c.Z)(r,2),n=t[0],s=t[1],h=(0,f.UO)().movieId;(0,o.useEffect)((function(){var r=function(){var r=(0,a.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s((function(r){return(0,u.Z)((0,u.Z)({},r),{},{loading:!0,error:null})})),r.prev=1,r.next=4,(0,p.Jh)(h);case 4:t=r.sent,s((function(r){return(0,u.Z)((0,u.Z)({},r),{},{items:[].concat((0,e.Z)(r.items),(0,e.Z)(t))})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),s((function(t){return(0,u.Z)((0,u.Z)({},t),{},{error:r.t0})}));case 11:return r.prev=11,s((function(r){return(0,u.Z)((0,u.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[h,s]);var l=n.items.map((function(r){return(0,v.jsxs)("li",{children:[(0,v.jsxs)("p",{children:["Author: ",r.author]}),(0,v.jsx)("p",{children:r.content})]},r.id)}));return(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Reviews"}),(0,v.jsx)("ol",{children:l})]})}},232:function(r,t,n){n.d(t,{IQ:function(){return f},Jh:function(){return o},Pg:function(){return i},_L:function(){return s},z1:function(){return p}});var e=n(861),u=n(757),a=n.n(u),c=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),s=function(){var r=(0,e.Z)(a().mark((function r(){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/week",{});case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(a().mark((function r(t){var n,e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t),{});case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(a().mark((function r(t){var n,e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"),{});case 2:return n=r.sent,e=n.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(a().mark((function r(t){var n,e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/credits"),{});case 2:return n=r.sent,e=n.data,r.abrupt("return",e.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(a().mark((function r(t){var n,e,u,s=arguments;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,r.next=3,c.get("/search/movie",{params:{query:t,page:n}});case 3:return e=r.sent,u=e.data,r.abrupt("return",u.results);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=8.bbb83de3.chunk.js.map