"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{556:function(r,t,e){var n=e(689),a=e(87),u=e(184),c=function(r){var t=r.items,e=(0,n.TH)(),c=t.map((function(r){var t=r.id,n=r.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:e},to:"/goit-react-hw-05-movies/movies/".concat(t),children:n})},t)}));return(0,u.jsx)("ul",{children:c})};t.Z=c,c.defaultProps={items:[]}},680:function(r,t,e){e.r(t);var n=e(433),a=e(683),u=e(861),c=e(439),s=e(757),i=e.n(s),o=e(791),f=e(556),p=e(138),v=e(232),l=e(184);t.default=function(){var r=(0,o.useState)({items:[],loading:!1,error:null}),t=(0,c.Z)(r,2),e=t[0],s=t[1];(0,o.useEffect)((function(){var r=function(){var r=(0,u.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!0,error:null})})),r.prev=1,r.next=4,(0,v._L)();case 4:t=r.sent,s((function(r){return(0,a.Z)((0,a.Z)({},r),{},{items:[].concat((0,n.Z)(r.items),(0,n.Z)(t))})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),s((function(t){return(0,a.Z)((0,a.Z)({},t),{},{error:r.t0})}));case 11:return r.prev=11,s((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[s]);var d=e.items,h=e.loading;return(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h2",{children:"Popular Movies"}),h&&(0,l.jsx)(p.Z,{}),(0,l.jsx)(f.Z,{items:d})]})}},232:function(r,t,e){e.d(t,{IQ:function(){return f},Jh:function(){return o},Pg:function(){return i},_L:function(){return s},z1:function(){return p}});var n=e(861),a=e(757),u=e.n(a),c=e(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),s=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/week",{});case 2:return t=r.sent,e=t.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t),{});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"),{});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/credits"),{});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n,a,s=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,r.next=3,c.get("/search/movie",{params:{query:t,page:e}});case 3:return n=r.sent,a=n.data,r.abrupt("return",a.results);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.2fe0c78d.chunk.js.map