"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[145],{145:function(r,t,n){n.r(t),n.d(t,{default:function(){return h}});var e=n(433),a=n(683),u=n(861),c=n(439),i=n(757),s=n.n(i),o=n(791),f=n(87),p=n(184),v=function(r){var t=r.items.map((function(r){var t=r.id,n=r.title;return(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{to:"/goit-react-hw-05-movies/movies/".concat(t),children:n})},t)}));return(0,p.jsx)("ul",{children:t})},l=v;v.defaultProps={items:[]};var d=n(232),h=function(){var r=(0,o.useState)({items:[],loading:!1,error:null}),t=(0,c.Z)(r,2),n=t[0],i=t[1];(0,o.useEffect)((function(){var r=function(){var r=(0,u.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!0,error:null})})),r.prev=1,r.next=4,(0,d._L)();case 4:t=r.sent,i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{items:[].concat((0,e.Z)(r.items),(0,e.Z)(t))})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),i((function(t){return(0,a.Z)((0,a.Z)({},t),{},{error:r.t0})}));case 11:return r.prev=11,i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[i]);var f=n.items;return(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h2",{children:"Popular Movies"}),(0,p.jsx)(l,{items:f})]})}},232:function(r,t,n){n.d(t,{IQ:function(){return f},Jh:function(){return o},Pg:function(){return s},_L:function(){return i}});var e=n(861),a=n(757),u=n.n(a),c=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),i=function(){var r=(0,e.Z)(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/week",{});case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t),{});case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"),{});case 2:return n=r.sent,e=n.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/credits"),{});case 2:return n=r.sent,e=n.data,r.abrupt("return",e.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=145.53fd9203.chunk.js.map