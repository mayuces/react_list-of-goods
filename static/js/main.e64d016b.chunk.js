(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n,r=s(3),c=s.n(r),i=s(4),o=s(5),a=s(8),l=s(6),u=s(7),d=s(1),h=s.n(d),b=(s(13),s(14),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPABET=1]="ALPABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(e){Object(a.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},e.reverseHandler=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.alphabeticSorter=function(){e.setState({sortType:n.ALPABET})},e.lengthSorter=function(){e.setState({sortType:n.LENGTH})},e.resetHandler=function(){e.setState({sortType:n.NONE,isReversed:!1})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state,t=e.isReversed,s=e.sortType,r=function(e,t){var s=t.sortType,r=t.isReversed,c=Object(u.a)(e);return c.sort((function(e,t){switch(s){case n.ALPABET:return e.localeCompare(t);case n.LENGTH:return e.length-t.length;default:return 0}})),r?c.reverse():c}(p,{sortType:s,isReversed:t});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:"button is-info ".concat(this.state.sortType!==n.ALPABET&&"is-light"),onClick:this.alphabeticSorter,children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:"button is-success ".concat(this.state.sortType!==n.LENGTH&&"is-light"),onClick:this.lengthSorter,children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:"button is-warning ".concat(!this.state.isReversed&&"is-light"),onClick:this.reverseHandler,children:"Reverse"}),s||t?Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.resetHandler,children:"Reset"}):""]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:r.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{"data-cy":"Good",className:"box column is-info is-rounded mb-3",children:e},e)})}))})})]})}}]),s}(h.a.Component);c.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e64d016b.chunk.js.map