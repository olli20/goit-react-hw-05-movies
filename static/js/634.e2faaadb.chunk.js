"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[634],{5664:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1087),s=t(7689),i=t(1555),a=t(2017),c=t(7698),u=t(2687),o="movies-list_item__pgu-A",d="movies-list_wrapper__t8PpM",l="movies-list_poster__7scci",h="movies-list_image__-Uzre",v="movies-list_meta__46nNy",Z="movies-list_ratingWrapper__R59nG",m="movies-list_title__DOqi4",p="movies-list_release__j11oL",j=t(184),b=function(e){var n=e.items,t=(0,s.TH)();return(0,j.jsx)(i.Z,{type:"default",children:n.map((function(e){var n=e.id,s=e.title,i=e.poster_path,b=e.vote_average,x=e.release_date,f=void 0===x?null:x,g=(0,c.p6)(f),L=(null===i||void 0===i?void 0:i.length)>0?"https://image.tmdb.org/t/p/w500".concat(i):u;return(0,j.jsx)("div",{className:o,children:(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)(r.rU,{className:l,state:{from:t},to:"/goit-react-hw-05-movies/movies/".concat(n),children:(0,j.jsx)("img",{className:h,src:L,alt:"{title}"})}),(0,j.jsxs)("div",{className:v,children:[(0,j.jsx)("div",{className:Z,children:(0,j.jsx)(a.Z,{vote:b})}),(0,j.jsx)(r.rU,{state:{from:t},to:"/goit-react-hw-05-movies/movies/".concat(n),className:m,children:s}),g&&(0,j.jsx)("p",{className:p,children:g})]})]})},n)}))})},x=b;b.defaultProps={items:[]}},5634:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(3433),s=t(8683),i=t(5861),a=t(9439),c=t(7757),u=t.n(c),o=t(2791),d="options-form_container__WFb5c",l="options-form_option__MD25H",h=t(5697),v=t(184),Z=function(e){var n=e.onChange,t=e.option,r=function(e){var t=e.target;n(t)};return(0,v.jsx)(h.Z,{children:(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("h1",{className:"title",children:"Trending Movies"}),(0,v.jsxs)("form",{children:[(0,v.jsxs)("label",{className:l,children:[(0,v.jsx)("input",{type:"radio",name:"option",value:"day",onChange:r,checked:"day"===t})," Today"]}),(0,v.jsxs)("label",{className:l,children:[(0,v.jsx)("input",{type:"radio",name:"option",value:"week",onChange:r,checked:"week"===t})," This week"]})]})]})})},m=t(5664),p=t(6744),j=t(748),b=t(9341),x=t(232),f=function(){var e=(0,o.useState)({items:[],page:1,loading:!1,error:null}),n=(0,a.Z)(e,2),t=n[0],c=n[1],d=(0,o.useState)("day"),l=(0,a.Z)(d,2),h=l[0],f=l[1];(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loading:!0,error:null})})),e.prev=1,e.next=4,(0,x.Df)(h,t.page);case 4:n=e.sent,c((function(e){return(0,s.Z)((0,s.Z)({},e),{},{items:[].concat((0,r.Z)(e.items),(0,r.Z)(n))})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c((function(n){return(0,s.Z)((0,s.Z)({},n),{},{error:e.t0})}));case 11:return e.prev=11,c((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[c,h,t.page]);var g=function(e){c((function(e){return(0,s.Z)((0,s.Z)({},e),{},{items:[]})})),f(e.value)},L=t.items,w=t.loading,N=t.error,I=L.length>0;return(0,v.jsxs)("div",{children:[(0,v.jsx)(Z,{onChange:g,option:h}),I&&(0,v.jsx)(m.Z,{items:L,onChange:g}),w&&(0,v.jsx)(p.Z,{}),N&&(0,v.jsx)(j.Z,{children:"Some error occured"}),I&&!w&&(0,v.jsx)(b.Z,{onClick:function(){c((function(e){return(0,s.Z)((0,s.Z)({},e),{},{page:e.page+1})}))},children:"Show more"})]})}},232:function(e,n,t){t.d(n,{Df:function(){return c},IQ:function(){return d},Jh:function(){return o},Pg:function(){return u},z1:function(){return l}});var r=t(5861),s=t(7757),i=t.n(s),a=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),c=function(){var e=(0,r.Z)(i().mark((function e(){var n,t,r,s,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"day",t=c.length>1&&void 0!==c[1]?c[1]:1,e.next=4,a.get("/trending/movie/".concat(n),{params:{page:t}});case 4:return r=e.sent,s=r.data,e.abrupt("return",s.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get("/movie/".concat(n),{});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get("/movie/".concat(n,"/reviews"),{});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get("/movie/".concat(n,"/credits"),{});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,s,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,a.get("/search/movie",{params:{query:n,page:t}});case 3:return r=e.sent,s=r.data,e.abrupt("return",s.results);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4498:function(e,n,t){t.d(n,{Z:function(){return i}});var r="button_button__vTaVn",s=t(184),i=function(e){var n=e.onClick,t=void 0===n?null:n,i=e.type,a=void 0===i?"button":i,c=e.children;return(0,s.jsxs)(s.Fragment,{children:[Boolean(t)&&(0,s.jsx)("button",{className:r,onClick:t,type:a,children:c}),!Boolean(t)&&(0,s.jsx)("button",{className:r,type:a,children:c})]})}},9341:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(4498),s=t(5697),i="button-centered_container__a-JM5",a=t(184),c=function(e){var n=e.onClick,t=void 0===n?null:n,c=e.children;return(0,a.jsx)(s.Z,{children:(0,a.jsx)("div",{className:i,children:(0,a.jsx)(r.Z,{onClick:t,children:c})})})}},748:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(5697),s="error_wrapper__-2+js",i="error_message__rY-IE",a=t(184),c=function(e){var n=e.children;return(0,a.jsx)(r.Z,{children:(0,a.jsx)("div",{className:s,children:(0,a.jsx)("p",{className:i,children:n})})})}},1555:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(5697),s="grid_gird__sWAvm",i="grid_actors__lImlA",a=t(184),c=function(e){var n=e.type,t=void 0===n?"default":n,c=e.children,u=function(e){var n="";switch(e){case"default":default:n=s;break;case"actors":n="".concat(s," ").concat(i)}return n}(t);return(0,a.jsx)(r.Z,{children:(0,a.jsx)("div",{className:u,children:c})})}},6744:function(e,n,t){t.d(n,{Z:function(){return r.Z}});var r=t(3032)},2017:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(4128),s=t(7698),i=t(184),a=function(e){var n=e.vote,t=(0,s.Kw)(n),a=t>0,c=9*Math.PI*2,u=c-c*t/100,o=(0,s.Zm)(t);return(0,i.jsxs)("div",{className:r.Z.rating,children:[(0,i.jsx)("div",{className:r.Z.diagram,children:(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 21 21",children:[(0,i.jsx)("circle",{cx:"10",cy:"10",r:9,strokeWidth:"1px",className:r.Z.circleBg}),(0,i.jsx)("circle",{cx:"10",cy:"10",r:9,strokeWidth:"1px",className:o,style:{strokeDasharray:c,strokeDashoffset:u},transform:"rotate(-90 10 10)"})]})}),(0,i.jsx)("span",{className:r.Z.ratingNumber,children:a?t:"NR"}),t>0&&(0,i.jsx)("span",{className:r.Z.percentSign,children:"%"})]})}},7698:function(e,n,t){t.d(n,{Kw:function(){return i},Zm:function(){return c},p6:function(){return a}});var r=t(8977),s=t(4128),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.round(10*e)},a=function(e){if(null!==e&&""!==e&&void 0!==e){var n=e+"T12:00:00";return(0,r.Z)(Date.parse(n),"MMM dd, yyyy")}},c=function(e){var n=s.Z.progress;return e>=70?n="".concat(s.Z.progress," ").concat(s.Z.high):e<70&&e>=50&&(n="".concat(s.Z.progress," ").concat(s.Z.medium)),n}},4128:function(e,n){n.Z={rating:"rating_rating__hlgi+",diagram:"rating_diagram__x-RaL",circleBg:"rating_circleBg__qW11Z",progress:"rating_progress__4Z1eL",medium:"rating_medium__3UupM",high:"rating_high__wws4H",ratingNumber:"rating_ratingNumber__cBuLE",percentSign:"rating_percentSign__oLwcY"}},2687:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAAIxCAAAAAB8gMzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF7GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAyLTEzVDE5OjUwOjA5KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTAyLTE0VDE2OjI4OjE5KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMi0xNFQxNjoyODoxOSswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MmRkMTc0MDYtOGJlMi1kMzQwLWFkZDYtMDRmOTExZTViOWUyIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTJj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"}}]);
//# sourceMappingURL=634.e2faaadb.chunk.js.map