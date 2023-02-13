"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[999],{2594:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(1087),a=n(7689),i="movies-grid_gird__zrLPJ",s=n(184),c=function(e){var t=e.children;return(0,s.jsx)("ul",{className:i,children:t})},u=n(7698),o={item:"movies-list_item__pgu-A",link:"movies-list_link__w7PyE",poster:"movies-list_poster__7scci",meta:"movies-list_meta__46nNy",rating:"movies-list_rating__7Fl+Y",ratingNumber:"movies-list_ratingNumber__PCk3J",percentSign:"movies-list_percentSign__yJFjc",title:"movies-list_title__DOqi4",release:"movies-list_release__j11oL"},l=function(e){var t=e.items,n=(0,a.TH)();return(0,s.jsx)(c,{children:t.map((function(e){var t=e.id,a=e.title,i=e.poster_path,c=e.vote_average,l=e.release_date;return(0,s.jsx)("li",{className:o.item,children:(0,s.jsxs)("div",{className:o.link,children:[(0,s.jsx)(r.rU,{className:o.poster,state:{from:n},to:"/goit-react-hw-05-movies/movies/".concat(t),children:(0,s.jsx)("img",{className:o.image,src:"https://image.tmdb.org/t/p/w500".concat(i),alt:"{title}"})}),(0,s.jsxs)("div",{className:o.meta,children:[(0,s.jsxs)("div",{className:o.rating,children:[(0,s.jsx)("span",{className:o.ratingNumber,children:(0,u.y)(c)}),(0,s.jsx)("span",{className:o.percentSign,children:"%"})]}),(0,s.jsx)(r.rU,{state:{from:n},to:"/goit-react-hw-05-movies/movies/".concat(t),className:o.title,children:a}),(0,s.jsx)("p",{className:o.release,children:l})]})]})},t)}))})},m=l;l.defaultProps={items:[]}},4999:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(3433),a=n(8683),i=n(5861),s=n(9439),c=n(7757),u=n.n(c),o=n(2791),l=n(1087),m=n(4498),p="movies-search-form_input__T0UhV",f=n(184),v=function(e){var t=e.onSubmit,n=(0,o.useState)(""),r=(0,s.Z)(n,2),a=r[0],i=r[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),i("")},children:[(0,f.jsx)("input",{name:"query",value:a,onChange:function(e){var t=e.target;i(t.value)},placeholder:"Movies search",required:!0,className:p}),(0,f.jsx)(m.Z,{type:"submit",children:"Search"})]})},d=n(2594),h=n(6744),g=n(232),_=function(){var e=(0,o.useState)({items:[],page:1,loading:!1,error:null}),t=(0,s.Z)(e,2),n=t[0],c=t[1],p=(0,l.lr)(),_=(0,s.Z)(p,2),x=_[0],Z=_[1],j=x.get("search");(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!0})})),e.next=4,(0,g.z1)(j,n.page);case 4:t=e.sent,c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{items:[].concat((0,r.Z)(e.items),(0,r.Z)(t))})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c((function(t){return(0,a.Z)((0,a.Z)({},t),{},{error:e.t0})}));case 11:return e.prev=11,c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();j&&e()}),[j,n.page,c]);var b=n.items,w=n.loading,k=b.length>0;return(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("h1",{className:"title",children:"Movies Search Page"}),(0,f.jsx)(v,{onSubmit:function(e){Z({search:e}),c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{items:[],page:1,error:null})}))}}),k&&(0,f.jsx)(d.Z,{items:b}),w&&(0,f.jsx)(h.Z,{}),k&&(0,f.jsx)(m.Z,{onClick:function(){c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{page:e.page+1})}))},children:"Show more"})]})}},232:function(e,t,n){n.d(t,{Df:function(){return c},IQ:function(){return l},Jh:function(){return o},Pg:function(){return u},z1:function(){return m}});var r=n(5861),a=n(7757),i=n.n(a),s=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),c=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,a,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"day",n=c.length>1&&void 0!==c[1]?c[1]:1,e.next=4,s.get("/trending/movie/".concat(t),{params:{page:n}});case 4:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,s.get("/search/movie",{params:{query:t,page:n}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4498:function(e,t,n){n.d(t,{Z:function(){return i}});var r="button_button__vTaVn",a=n(184),i=function(e){var t=e.onClick,n=void 0===t?null:t,i=e.type,s=void 0===i?"button":i,c=e.children;return(0,a.jsxs)(a.Fragment,{children:[Boolean(n)&&(0,a.jsx)("button",{className:r,onClick:n,type:s,children:c}),!Boolean(n)&&(0,a.jsx)("button",{className:r,type:s,children:c})]})}},6744:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(1613)},7698:function(e,t,n){n.d(t,{y:function(){return r}});var r=function(e){return Math.round(10*e)}}}]);
//# sourceMappingURL=999.c26912ec.chunk.js.map