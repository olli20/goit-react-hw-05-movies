"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[634],{2921:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(1087),c=n(7689),u="movies-grid_gird__zrLPJ",i=n(184),a=function(t){var e=t.children;return(0,i.jsx)("ul",{className:u,children:e})},s=n(4128),o=n(7698),d=function(t){var e=t.vote,n=(0,o.Kw)(e),r=n>0,c=9*Math.PI*2,u=c-c*n/100,a=(0,o.Zm)(n);return(0,i.jsxs)("div",{className:s.Z.rating,children:[(0,i.jsx)("div",{className:s.Z.diagram,children:(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 21 21",children:[(0,i.jsx)("circle",{cx:"10",cy:"10",r:9,strokeWidth:"1px",className:s.Z.circleBg}),(0,i.jsx)("circle",{cx:"10",cy:"10",r:9,strokeWidth:"1px",className:a,style:{strokeDasharray:c,strokeDashoffset:u},transform:"rotate(-90 10 10)"})]})}),(0,i.jsx)("span",{className:s.Z.ratingNumber,children:r?n:"NR"}),n>0&&(0,i.jsx)("span",{className:s.Z.percentSign,children:"%"})]})},l=n(2687),m={item:"movies-list_item__pgu-A",link:"movies-list_link__w7PyE",poster:"movies-list_poster__7scci",meta:"movies-list_meta__46nNy",title:"movies-list_title__DOqi4",release:"movies-list_release__j11oL"},h=function(t){var e=t.items,n=(0,c.TH)();return(0,i.jsx)(a,{children:e.map((function(t){var e=t.id,c=t.title,u=t.poster_path,a=t.vote_average,s=t.release_date,h=void 0===s?null:s,f=(0,o.p6)(h),p=(null===u||void 0===u?void 0:u.length)>0?"https://image.tmdb.org/t/p/w500".concat(u):l;return(0,i.jsx)("li",{className:m.item,children:(0,i.jsxs)("div",{className:m.link,children:[(0,i.jsx)(r.rU,{className:m.poster,state:{from:n},to:"/goit-react-hw-05-movies/movies/".concat(e),children:(0,i.jsx)("img",{className:m.image,src:p,alt:"{title}"})}),(0,i.jsxs)("div",{className:m.meta,children:[(0,i.jsx)(d,{vote:a}),(0,i.jsx)(r.rU,{state:{from:n},to:"/goit-react-hw-05-movies/movies/".concat(e),className:m.title,children:c}),f&&(0,i.jsx)("p",{className:m.release,children:f})]})]})},e)}))})},f=h;h.defaultProps={items:[]}},5634:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(3433),c=n(8683),u=n(5861),i=n(9439),a=n(7757),s=n.n(a),o=n(2791),d="options-form_option__MD25H",l=n(184),m=function(t){var e=t.onChange,n=t.option,r=function(t){var n=t.target;e(n)};return(0,l.jsxs)("form",{children:[(0,l.jsxs)("label",{className:d,children:[(0,l.jsx)("input",{type:"radio",name:"option",value:"day",onChange:r,checked:"day"===n})," Today"]}),(0,l.jsxs)("label",{className:d,children:[(0,l.jsx)("input",{type:"radio",name:"option",value:"week",onChange:r,checked:"week"===n})," This week"]})]})},h=n(2921),f=n(6744),p=n(4498),v=n(232),Z=function(){var t=(0,o.useState)({items:[],page:1,loading:!1,error:null}),e=(0,i.Z)(t,2),n=e[0],a=e[1],d=(0,o.useState)("day"),Z=(0,i.Z)(d,2),x=Z[0],b=Z[1];(0,o.useEffect)((function(){var t=function(){var t=(0,u.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a((function(t){return(0,c.Z)((0,c.Z)({},t),{},{loading:!0,error:null})})),t.prev=1,t.next=4,(0,v.Df)(x,n.page);case 4:e=t.sent,a((function(t){return(0,c.Z)((0,c.Z)({},t),{},{items:[].concat((0,r.Z)(t.items),(0,r.Z)(e))})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a((function(e){return(0,c.Z)((0,c.Z)({},e),{},{error:t.t0})}));case 11:return t.prev=11,a((function(t){return(0,c.Z)((0,c.Z)({},t),{},{loading:!1})})),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[a,x,n.page]);var g=function(t){a((function(t){return(0,c.Z)((0,c.Z)({},t),{},{items:[]})})),b(t.value)},L=n.items,y=n.loading,z=n.error,A=L.length>0;return(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{className:"title",children:"Trending Movies"}),(0,l.jsx)(m,{onChange:g,option:x}),A&&(0,l.jsx)(h.Z,{items:L,onChange:g}),y&&(0,l.jsx)(f.Z,{}),z&&(0,l.jsx)("p",{children:"Some error occured"}),A&&(0,l.jsx)(p.Z,{onClick:function(){a((function(t){return(0,c.Z)((0,c.Z)({},t),{},{page:t.page+1})}))},children:"Show more"})]})}},232:function(t,e,n){n.d(e,{Df:function(){return a},IQ:function(){return d},Jh:function(){return o},Pg:function(){return s},z1:function(){return l}});var r=n(5861),c=n(7757),u=n.n(c),i=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"280dfc47f55a5a95f0363880d2199c9a"}}),a=function(){var t=(0,r.Z)(u().mark((function t(){var e,n,r,c,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"day",n=a.length>1&&void 0!==a[1]?a[1]:1,t.next=4,i.get("/trending/movie/".concat(e),{params:{page:n}});case 4:return r=t.sent,c=r.data,t.abrupt("return",c.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e),{});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/reviews"),{});case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/credits"),{});case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,c,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,i.get("/search/movie",{params:{query:e,page:n}});case 3:return r=t.sent,c=r.data,t.abrupt("return",c.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},4498:function(t,e,n){n.d(e,{Z:function(){return u}});var r="button_button__vTaVn",c=n(184),u=function(t){var e=t.onClick,n=void 0===e?null:e,u=t.type,i=void 0===u?"button":u,a=t.children;return(0,c.jsxs)(c.Fragment,{children:[Boolean(n)&&(0,c.jsx)("button",{className:r,onClick:n,type:i,children:a}),!Boolean(n)&&(0,c.jsx)("button",{className:r,type:i,children:a})]})}},6744:function(t,e,n){n.d(e,{Z:function(){return r.Z}});var r=n(1613)},7698:function(t,e,n){n.d(e,{Kw:function(){return u},Zm:function(){return a},p6:function(){return i}});var r=n(8977),c=n(4128),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.round(10*t)},i=function(t){if(null!==t&&""!==t&&void 0!==t){var e=t+"T12:00:00";return(0,r.Z)(Date.parse(e),"MMM dd, yyyy")}},a=function(t){var e=c.Z.progress;return t>=70?e="".concat(c.Z.progress," ").concat(c.Z.high):t<70&&t>=50&&(e="".concat(c.Z.progress," ").concat(c.Z.medium)),e}},4128:function(t,e){e.Z={rating:"rating_rating__hlgi+",diagram:"rating_diagram__x-RaL",circleBg:"rating_circleBg__qW11Z",progress:"rating_progress__4Z1eL",medium:"rating_medium__3UupM",high:"rating_high__wws4H",ratingNumber:"rating_ratingNumber__cBuLE",percentSign:"rating_percentSign__oLwcY"}},2687:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAAI1CAAAAAAI0+XYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE+2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAyLTEzVDE5OjUwOjA5KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTAyLTEzVDE5OjUwOjA5KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMi0xM1QxOTo1MDowOSswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjAzNjBkN2ItZmYwZS03ZTRmLWI0YjktZGE5M2QxMTVjYmNlIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTJj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"}}]);
//# sourceMappingURL=634.8e44d57c.chunk.js.map