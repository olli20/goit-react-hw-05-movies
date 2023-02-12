"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[498],{556:function(r,t,e){var n=e(689),a=e(87),u=e(184),c=function(r){var t=r.items,e=(0,n.TH)(),c=t.map((function(r){var t=r.id,n=r.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:e},to:"/goit-react-hw-05-movies/movies/".concat(t),children:n})},t)}));return(0,u.jsx)("ul",{children:c})};t.Z=c,c.defaultProps={items:[]}},498:function(r,t,e){e.r(t),e.d(t,{default:function(){return h}});var n=e(683),a=e(861),u=e(439),c=e(757),i=e.n(c),s=e(791),o=e(87),f=e(232),p=e(184),v=function(r){var t=r.onSubmit,e=(0,s.useState)(""),n=(0,u.Z)(e,2),a=n[0],c=n[1];return(0,p.jsxs)("form",{onSubmit:function(r){r.preventDefault(),t(a),console.log("Set ",a),c("")},children:[(0,p.jsx)("input",{name:"query",value:a,onChange:function(r){var t=r.target;c(t.value)},placeholder:"Movie search",required:!0}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})},l=e(556),h=function(){var r=(0,s.useState)({items:[],page:1,loading:!1,error:null}),t=(0,u.Z)(r,2),e=t[0],c=t[1],h=(0,o.lr)(),d=(0,u.Z)(h,2),m=d[0],x=d[1],g=m.get("search");(0,s.useEffect)((function(){var r=function(){var r=(0,a.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c((function(r){return(0,n.Z)((0,n.Z)({},r),{},{loading:!0})})),r.next=4,(0,f.z1)(g);case 4:t=r.sent,c((function(r){return(0,n.Z)((0,n.Z)({},r),{},{items:t})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),c((function(t){return(0,n.Z)((0,n.Z)({},t),{},{error:r.t0})}));case 11:return r.prev=11,c((function(r){return(0,n.Z)((0,n.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();g&&r()}),[g]);var Z=e.items;return(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h2",{children:"Movies Search Page"}),(0,p.jsx)(v,{onSubmit:function(r){x({search:r})}}),(0,p.jsx)(l.Z,{items:Z})]})}},232:function(r,t,e){e.d(t,{IQ:function(){return f},Jh:function(){return o},Pg:function(){return s},_L:function(){return i},z1:function(){return p}});var n=e(861),a=e(757),u=e.n(a),c=e(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),i=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/".concat(t),{});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t),{});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"),{});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/credits"),{});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n,a,i=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:1,r.next=3,c.get("/search/movie",{params:{query:t,page:e}});case 3:return n=r.sent,a=n.data,r.abrupt("return",a.results);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=498.bacc12ec.chunk.js.map