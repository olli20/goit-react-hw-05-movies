"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[999],{4855:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(1087),a=r(7689),s="movies-grid_gird__zrLPJ",i=r(184),c=function(e){var t=e.children;return(0,i.jsx)("ul",{className:s,children:t})},o="rating_rating__hlgi+",u="rating_diagram__x-RaL",l="rating_circleBg__qW11Z",f="rating_progress__4Z1eL",m="rating_ratingNumber__cBuLE",p="rating_percentSign__oLwcY",v=r(7698),h=function(e){var t=e.vote,r=(0,v.y)(t);console.log(r);var n=9*Math.PI*2,a=n-n*r/100;return(0,i.jsxs)("div",{className:o,children:[(0,i.jsx)("div",{className:u,children:(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 21 21",children:[(0,i.jsx)("circle",{cx:"10",cy:"10",r:9,strokeWidth:"1px",className:l}),(0,i.jsx)("circle",{cx:"10",cy:"10",r:9,strokeWidth:"1px",className:f,style:{strokeDasharray:n,strokeDashoffset:a},transform:"rotate(-90 10 10)"})]})}),(0,i.jsx)("span",{className:m,children:r}),(0,i.jsx)("span",{className:p,children:"%"})]})},d={item:"movies-list_item__pgu-A",link:"movies-list_link__w7PyE",poster:"movies-list_poster__7scci",meta:"movies-list_meta__46nNy",title:"movies-list_title__DOqi4",release:"movies-list_release__j11oL"},g=function(e){var t=e.items,r=(0,a.TH)();return(0,i.jsx)(c,{children:t.map((function(e){var t=e.id,a=e.title,s=e.poster_path,c=e.vote_average,o=e.release_date;return(0,i.jsx)("li",{className:d.item,children:(0,i.jsxs)("div",{className:d.link,children:[(0,i.jsx)(n.rU,{className:d.poster,state:{from:r},to:"/goit-react-hw-05-movies/movies/".concat(t),children:(0,i.jsx)("img",{className:d.image,src:"https://image.tmdb.org/t/p/w500".concat(s),alt:"{title}"})}),(0,i.jsxs)("div",{className:d.meta,children:[(0,i.jsx)(h,{vote:c}),(0,i.jsx)(n.rU,{state:{from:r},to:"/goit-react-hw-05-movies/movies/".concat(t),className:d.title,children:a}),(0,i.jsx)("p",{className:d.release,children:o})]})]})},t)}))})},_=g;g.defaultProps={items:[]}},4999:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(3433),a=r(8683),s=r(5861),i=r(9439),c=r(7757),o=r.n(c),u=r(2791),l=r(1087),f=r(4498),m="movies-search-form_input__T0UhV",p=r(184),v=function(e){var t=e.onSubmit,r=(0,u.useState)(""),n=(0,i.Z)(r,2),a=n[0],s=n[1];return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),s("")},children:[(0,p.jsx)("input",{name:"query",value:a,onChange:function(e){var t=e.target;s(t.value)},placeholder:"Movies search",required:!0,className:m}),(0,p.jsx)(f.Z,{type:"submit",children:"Search"})]})},h=r(4855),d=r(6744),g=r(232),_=function(){var e=(0,u.useState)({items:[],page:1,loading:!1,error:null}),t=(0,i.Z)(e,2),r=t[0],c=t[1],m=(0,l.lr)(),_=(0,i.Z)(m,2),x=_[0],Z=_[1],j=x.get("search");(0,u.useEffect)((function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!0})})),e.next=4,(0,g.z1)(j,r.page);case 4:t=e.sent,c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{items:[].concat((0,n.Z)(e.items),(0,n.Z)(t))})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c((function(t){return(0,a.Z)((0,a.Z)({},t),{},{error:e.t0})}));case 11:return e.prev=11,c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();j&&e()}),[j,r.page,c]);var w=r.items,k=r.loading,y=w.length>0;return(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h1",{className:"title",children:"Movies Search Page"}),(0,p.jsx)(v,{onSubmit:function(e){Z({search:e}),c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{items:[],page:1,error:null})}))}}),y&&(0,p.jsx)(h.Z,{items:w}),k&&(0,p.jsx)(d.Z,{}),y&&(0,p.jsx)(f.Z,{onClick:function(){c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{page:e.page+1})}))},children:"Show more"})]})}},232:function(e,t,r){r.d(t,{Df:function(){return c},IQ:function(){return l},Jh:function(){return u},Pg:function(){return o},z1:function(){return f}});var n=r(5861),a=r(7757),s=r.n(a),i=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),c=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"day",r=c.length>1&&void 0!==c[1]?c[1]:1,e.next=4,i.get("/trending/movie/".concat(t),{params:{page:r}});case 4:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t),{});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"),{});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"),{});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,i.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4498:function(e,t,r){r.d(t,{Z:function(){return s}});var n="button_button__vTaVn",a=r(184),s=function(e){var t=e.onClick,r=void 0===t?null:t,s=e.type,i=void 0===s?"button":s,c=e.children;return(0,a.jsxs)(a.Fragment,{children:[Boolean(r)&&(0,a.jsx)("button",{className:n,onClick:r,type:i,children:c}),!Boolean(r)&&(0,a.jsx)("button",{className:n,type:i,children:c})]})}},6744:function(e,t,r){r.d(t,{Z:function(){return n.Z}});var n=r(1613)},7698:function(e,t,r){r.d(t,{y:function(){return n}});var n=function(e){return Math.round(10*e)}}}]);
//# sourceMappingURL=999.92b1b6e9.chunk.js.map