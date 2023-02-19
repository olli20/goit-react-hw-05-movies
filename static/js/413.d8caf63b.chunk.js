"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[413],{5413:function(r,e,n){n.r(e),n.d(e,{default:function(){return g}});var t=n(3433),a=n(8683),c=n(5861),u=n(9439),i=n(7757),s=n.n(i),o=n(2791),f=n(7689),p=n(232),v=n(5697),l="card_card__L6k2k",d=n(184),h=function(r){var e=r.children;return(0,d.jsx)("div",{className:l,children:e})},m=n(6744),x=n(748),Z={list:"movie-reviews-page_list__xDjve",item:"movie-reviews-page_item__mx4xx",name:"movie-reviews-page_name__2diKu"},g=function(){var r=(0,o.useState)({items:[],loading:!1,error:null}),e=(0,u.Z)(r,2),n=e[0],i=e[1],l=(0,f.UO)().movieId;(0,o.useEffect)((function(){var r=function(){var r=(0,c.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!0,error:null})})),r.prev=1,r.next=4,(0,p.Jh)(l);case 4:e=r.sent,i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{items:[].concat((0,t.Z)(r.items),(0,t.Z)(e))})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),i((function(e){return(0,a.Z)((0,a.Z)({},e),{},{error:r.t0})}));case 11:return r.prev=11,i((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[l,i]);var g=n.items,_=n.loading,w=n.error,k=g.map((function(r){var e=r.id,n=r.author,t=r.content;return(0,d.jsx)("li",{className:Z.item,children:(0,d.jsxs)(h,{children:[(0,d.jsxs)("p",{className:Z.name,children:["Author: ",n]}),(0,d.jsx)("p",{className:Z.content,children:t})]})},e)}));return(0,d.jsxs)(v.Z,{children:[_&&(0,d.jsx)(m.Z,{}),w&&(0,d.jsx)(x.Z,{children:"Some error occured"}),g.length>0&&(0,d.jsx)("ul",{className:Z.list,children:k}),!_&&0===g.length&&(0,d.jsx)(x.Z,{children:"We don't have any reviews for this movie."})]})}},232:function(r,e,n){n.d(e,{Df:function(){return i},IQ:function(){return f},Jh:function(){return o},Pg:function(){return s},z1:function(){return p}});var t=n(5861),a=n(7757),c=n.n(a),u=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),i=function(){var r=(0,t.Z)(c().mark((function r(){var e,n,t,a,i=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"day",n=i.length>1&&void 0!==i[1]?i[1]:1,r.next=4,u.get("/trending/movie/".concat(e),{params:{page:n}});case 4:return t=r.sent,a=t.data,r.abrupt("return",a.results);case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/movie/".concat(e),{});case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/movie/".concat(e,"/reviews"),{});case 2:return n=r.sent,t=n.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/movie/".concat(e,"/credits"),{});case 2:return n=r.sent,t=n.data,r.abrupt("return",t.cast);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t,a,i=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,r.next=3,u.get("/search/movie",{params:{query:e,page:n}});case 3:return t=r.sent,a=t.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},748:function(r,e,n){n.d(e,{Z:function(){return u}});var t="error_wrapper__-2+js",a="error_message__rY-IE",c=n(184),u=function(r){var e=r.children;return(0,c.jsx)("div",{className:t,children:(0,c.jsx)("p",{className:a,children:e})})}},6744:function(r,e,n){n.d(e,{Z:function(){return t.Z}});var t=n(3032)}}]);
//# sourceMappingURL=413.d8caf63b.chunk.js.map