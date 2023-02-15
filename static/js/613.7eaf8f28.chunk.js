"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[613],{1613:function(r,e,t){t.r(e),t.d(e,{default:function(){return k}});var n=t(8683),a=t(5861),i=t(9439),c=t(7757),s=t.n(c),o=t(2791),u=t(1087),l=t(7689),d=t(7698),v="movie-details_wrapper__os-VS",p="movie-details_poster__ksvE2",f="movie-details_genreList__P4Lwv",m="movie-details_genre__yKxQj",h=t(184),g=function(r){var e=r.item,t=e.title,n=e.poster_path,a=e.vote_average,i=e.overview,c=e.genres,s=void 0===c?[]:c,o=s.map((function(r){return(0,h.jsx)("li",{className:m,children:r.name},r.id)})),u=(0,d.Kw)(a);return(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("div",{className:p,children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),width:"300",alt:t})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"title",children:t}),(0,h.jsxs)("p",{children:["User Score: ",u,"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:i}),(0,h.jsx)("h3",{children:"Genres"}),s&&(0,h.jsx)("ul",{className:f,children:o})]})]})},_=t(6744),x="movie-details-page_list__Cvdm2",w="movie-details-page_link__EoIAB",Z="movie-details-page_active__7HkNa",j=t(232),k=function(){var r,e=(0,o.useState)({item:{},loading:!1,error:null}),t=(0,i.Z)(e,2),c=t[0],d=t[1],v=(0,l.UO)().movieId,p=(0,l.s0)(),f=(null===(r=(0,l.TH)().state)||void 0===r?void 0:r.from)||"/goit-react-hw-05-movies";(0,o.useEffect)((function(){var r=function(){var r=(0,a.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d((function(r){return(0,n.Z)((0,n.Z)({},r),{},{loading:!0,error:null})})),r.prev=1,r.next=4,(0,j.Pg)(v);case 4:e=r.sent,d((function(r){return(0,n.Z)((0,n.Z)({},r),{},{item:e})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),d((function(e){return(0,n.Z)((0,n.Z)({},e),{},{error:r.t0})}));case 11:return r.prev=11,d((function(r){return(0,n.Z)((0,n.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[v,d]);var m=c.loading,k=c.error,b=function(r){return r.isActive?"".concat(w," ").concat(Z):w};return(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{onClick:function(){return p(f)},children:"Go back"}),m&&(0,h.jsx)(_.Z,{}),k&&(0,h.jsx)("p",{children:"Error"}),(0,h.jsx)(g,{item:c.item}),(0,h.jsx)("hr",{}),(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{className:x,children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.OL,{className:b,state:{from:f},to:"/goit-react-hw-05-movies/movies/".concat(v,"/cast"),children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.OL,{className:b,state:{from:f},to:"/goit-react-hw-05-movies/movies/".concat(v,"/reviews"),children:"Reviews"})})]}),(0,h.jsx)(l.j3,{})]})}},232:function(r,e,t){t.d(e,{Df:function(){return s},IQ:function(){return l},Jh:function(){return u},Pg:function(){return o},z1:function(){return d}});var n=t(5861),a=t(7757),i=t.n(a),c=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),s=function(){var r=(0,n.Z)(i().mark((function r(){var e,t,n,a,s=arguments;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:"day",t=s.length>1&&void 0!==s[1]?s[1]:1,r.next=4,c.get("/trending/movie/".concat(e),{params:{page:t}});case 4:return n=r.sent,a=n.data,r.abrupt("return",a.results);case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(i().mark((function r(e){var t,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e),{});case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),u=function(){var r=(0,n.Z)(i().mark((function r(e){var t,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/reviews"),{});case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(i().mark((function r(e){var t,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(e,"/credits"),{});case 2:return t=r.sent,n=t.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,n.Z)(i().mark((function r(e){var t,n,a,s=arguments;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r.next=3,c.get("/search/movie",{params:{query:e,page:t}});case 3:return n=r.sent,a=n.data,r.abrupt("return",a.results);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},6744:function(r,e,t){t.d(e,{Z:function(){return n.Z}});var n=t(3032)},7698:function(r,e,t){t.d(e,{Kw:function(){return i},Zm:function(){return s},p6:function(){return c}});var n=t(8977),a=t(4128),i=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.round(10*r)},c=function(r){if(null!==r&&""!==r&&void 0!==r){var e=r+"T12:00:00";return(0,n.Z)(Date.parse(e),"MMM dd, yyyy")}},s=function(r){var e=a.Z.progress;return r>=70?e="".concat(a.Z.progress," ").concat(a.Z.high):r<70&&r>=50&&(e="".concat(a.Z.progress," ").concat(a.Z.medium)),e}},4128:function(r,e){e.Z={rating:"rating_rating__hlgi+",diagram:"rating_diagram__x-RaL",circleBg:"rating_circleBg__qW11Z",progress:"rating_progress__4Z1eL",medium:"rating_medium__3UupM",high:"rating_high__wws4H",ratingNumber:"rating_ratingNumber__cBuLE",percentSign:"rating_percentSign__oLwcY"}}}]);
//# sourceMappingURL=613.7eaf8f28.chunk.js.map