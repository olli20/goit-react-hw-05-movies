"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{556:function(r,e,t){var n=t(689),a=t(87),u=t(184),c=function(r){var e=r.items,t=(0,n.TH)(),c=e.map((function(r){var e=r.id,n=r.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:t},to:"/goit-react-hw-05-movies/movies/".concat(e),children:n})},e)}));return(0,u.jsx)("ul",{children:c})};e.Z=c,c.defaultProps={items:[]}},680:function(r,e,t){t.r(e);var n=t(433),a=t(683),u=t(861),c=t(439),i=t(757),s=t.n(i),o=t(791),f=t(556),p=t(613),l=t(232),d=t(184);e.default=function(){var r=(0,o.useState)({period:"day",items:[],loading:!1,error:null}),e=(0,c.Z)(r,2),t=e[0],i=e[1];(0,o.useEffect)((function(){var r=function(){var r=(0,u.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!0,error:null})})),r.prev=1,r.next=4,(0,l._L)(t.period);case 4:e=r.sent,i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{items:[].concat((0,n.Z)(r.items),(0,n.Z)(e))})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),i((function(e){return(0,a.Z)((0,a.Z)({},e),{},{error:r.t0})}));case 11:return r.prev=11,i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[i,t.period]);var v=t.items,h=t.loading;return(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h2",{children:"Trending Movies"}),(0,d.jsxs)("form",{children:[(0,d.jsxs)("label",{htmlFor:"",children:[(0,d.jsx)("input",{type:"radio",name:"day"}),"Day"]}),(0,d.jsxs)("label",{htmlFor:"",children:[(0,d.jsx)("input",{type:"radio",name:"week"}),"Week"]})]}),h&&(0,d.jsx)(p.Z,{}),(0,d.jsx)(f.Z,{items:v})]})}},232:function(r,e,t){t.d(e,{IQ:function(){return f},Jh:function(){return o},Pg:function(){return s},_L:function(){return i},z1:function(){return p}});var n=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),i=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/".concat(e),{});case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e),{});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/reviews"),{});case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/credits"),{});case 2:return t=r.sent,n=t.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n,a,i=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,r.next=3,c.get("/search/movie",{params:{query:e,page:t}});case 3:return n=r.sent,a=n.data,r.abrupt("return",a.results);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.f29aabd4.chunk.js.map