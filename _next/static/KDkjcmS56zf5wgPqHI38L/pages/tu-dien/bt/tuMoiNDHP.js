(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"3OM0":function(t,e,n){"use strict";var i=n("wx14"),o=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),l=n.n(s),c=n("TSYQ"),u=n.n(c),h=n("33Jr"),d=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:d,order:d,offset:d})]),p={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:h.m,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(t,e,n){return!0===n||""===n?t?"col":"col-"+e:"auto"===n?t?"col-auto":"col-"+e+"-auto":t?"col-"+n:"col-"+e+"-"+n},b=function(t){var e=t.className,n=t.cssModule,a=t.hidden,s=t.widths,l=t.tag,c=t.check,d=t.size,f=t.for,p=Object(o.a)(t,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];s.forEach((function(e,i){var o=t[e];if(delete p[e],o||""===o){var a,r=!i;if(Object(h.g)(o)){var s,l=r?"-":"-"+e+"-";a=m(r,e,o.size),g.push(Object(h.i)(u()(((s={})[a]=o.size||""===o.size,s["order"+l+o.order]=o.order||0===o.order,s["offset"+l+o.offset]=o.offset||0===o.offset,s))),n)}else a=m(r,e,o),g.push(a)}}));var b=Object(h.i)(u()(e,!!a&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),n);return r.a.createElement(l,Object(i.a)({htmlFor:f},p,{className:b}))};b.propTypes=p,b.defaultProps=g,e.a=b},HLdI:function(t,e,n){var i=n("vwuL"),o=n("U+KD"),a=n("B+OT"),r=n("Y7ZC"),s=n("93I4"),l=n("5K7Z");r(r.S,"Reflect",{get:function t(e,n){var r,c,u=arguments.length<3?e:arguments[2];return l(e)===u?e[n]:(r=i.f(e,n))?a(r,"value")?r.value:void 0!==r.get?r.get.call(u):void 0:s(c=o(e))?t(c,n,u):void 0}})},JGJx:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var i=n("kOwS"),o=n("ln6h"),a=n.n(o),r=n("0iUn"),s=n("MI3g"),l=n("AT/M"),c=n("sLSF"),u=n("Tit0"),h=n("a7VT"),d=n("KogW"),f=n("q1tI"),p=n.n(f),g=n("1Yj4"),m=n("ok1R"),b=n("jrRI"),v=n("3OM0"),w=n("rhny"),x=n("vDqi"),O=n.n(x),y=n("LvDl"),j=n.n(y),C=(n("WWLJ"),n("o5PN")),z=n("Acaz"),H=n("O+DW"),M=(n("kIZS"),n("LvQh")),_=n("kMCw"),k=p.a.createElement;var R=function(t){function e(t){var n;Object(r.a)(this,e),n=Object(s.a)(this,Object(h.a)(e).call(this,t));t.words;return n.state={loading:!0,content:"",chinesse:"\u6ef2\u900f(s\u1ea5m th\u1ea5u - sh\xe8n t\xf2u): th\u1ea5m v\xe0o\n\u53ef\u662f(kh\u1ea3 th\u1ecb - k\u011b sh\xec): ch\xednh l\xe0\n\u672b\u6cd5(m\u1ea1t ph\xe1p - m\xf2 f\u01ce): m\u1ea1t ph\xe1p\n\u4fdd\u969c(b\u1ea3o ch\u01b0\u1edbng - b\u01ceo zh\xe0ng): b\u1ea3o \u0111\u1ea3m\n\u5927\u9678(\u0111\u1ea1i l\u1ee5c - d\xe0 l\xf9): \u0111\u1ea1i l\u1ee5c\n\u5bfa\u9662(t\u1ef1 vi\u1ec7n - s\xec yu\xe0n): ch\xf9a chi\u1ec1n\n\u843d\u9084\u60c5\u6709\u53ef\u539f(\u0111\u1ecda l\u1ea1c ho\xe0n t\xecnh h\u1eefu kh\u1ea3 nguy\xean - du\xf2 lu\xf2 h\xe1i q\xedng y\u01d2u k\u011b yu\xe1n) : \u0111\u1ecda l\u1ea1c c\xf2n c\xf3 th\u1ec3 tha th\u1ee9",hanViet:"",bacKinh:"",tuMoisJson:"",tuMois:"",dict:{}},O.a.get("https://raw.githubusercontent.com/thanglamhuu/nddhp.github.io/master/dictClient.json").then((function(t){n.setState({dict:t.data,loading:!1})})),n.onChangeHandlerChuHan=n.onChangeHandlerChuHan.bind(Object(l.a)(n)),n}return Object(u.a)(e,t),Object(c.a)(e,null,[{key:"getInitialProps",value:function(t){var n,i,o;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.req,i=t.query,Object(d.a)(Object(h.a)(e),"getInitialProps",this).call(this,{req:n,query:i}),r.next=4,a.a.awrap(Object(d.a)(Object(h.a)(e),"getInitialProps",this).call(this,{req:n}));case 4:return o=r.sent,r.abrupt("return",o);case 6:case"end":return r.stop()}}),null,this)}}]),Object(c.a)(e,[{key:"onChangeHandlerChuHan",value:function(t){this.state.dict;var e=t.target.value,n=e.split("\n"),i=[],o="",a="",r="",s="",l="",c=0,u="",h="",d=0;for(d=0;d<n.length;d++)try{if(o="",a="",r="",s="",o=n[d].trim(),o=Object(_.g)(o,"\uff1a",":"),o=Object(_.g)(o," :",":"),o=Object(_.g)(o,") :",":"),o=Object(_.g)(o,"):",":"),!j.a.isEmpty(o)){var f=(l=o.split(":"))[0].split(":");for(c=0;c<f.length;c++){var p=f[c].split("(");a=p[0];var g=p[1].split(" - ");r=g[0],s=g[1]}h+='{chuHan:"'+a.trim()+'", hanViet:"'+r.trim()+'", bacKinh:"'+s.trim()+'", nghiaViet: "'+l[1].trim()+'"},\n',u+='{"chuHan":"'+a.trim()+'", "hanViet":"'+r.trim()+'", "bacKinh":"'+s.trim()+'", "nghiaViet": "'+l[1].trim()+'"},\n'}}catch(t){console.log(o,i,t)}this.setState({chinesse:e,tuMois:u,tuMoisJson:h})}},{key:"render",value:function(){var t=this.state,e=(t.chuHans,t.chinesse),n=t.tuMois,o=t.tuMoisJson;return H.d("bt-convert"),k(M.a,Object(i.a)({},this.props,{navmenu:!1,container:!1}),k(g.a,null,k(m.a,null,k("h2",{className:"h1Title"},"T\u1ea1o danh s\xe1ch t\u1eeb import")),k(m.a,null,k(b.a,{style:{width:"100%"}},k(v.a,{for:"inputChuHan"},"Nh\u1eadp n\u1ed9i dung ch\u1eef H\xe1n"),k(C.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:e,onChange:this.onChangeHandlerChuHan}))),k(w.a,null,k("h4",null,"K\u1ebft qu\u1ea3"),k("span",null,"Vui l\xf2ng click l\xean t\u1eebng ch\u1eef \u0111\u1ec3 xem t\u1eeb \u0111i\u1ec3n"),k(C.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"T\u1eeb m\u1edbi",value:n}),k(C.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"T\u1eeb m\u1edbi",value:o}))))}}]),e}(z.a)},JX7q:function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return i}))},KogW:function(t,e,n){"use strict";var i=n("Jo+v"),o=n.n(i),a=n("j+vE"),r=n.n(a),s=n("a7VT");function l(t,e,n){return(l="undefined"!==typeof Reflect&&r.a?r.a:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Object(s.a)(t)););return t}(t,e);if(i){var a=o()(i,e);return a.get?a.get.call(n):a.value}})(t,e,n||t)}n.d(e,"a",(function(){return l}))},SRBb:function(t,e,n){n("HLdI"),t.exports=n("WEpk").Reflect.get},WWLJ:function(t,e,n){t.exports=n("FGuI").default},dI71:function(t,e,n){"use strict";function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return i}))},"j+vE":function(t,e,n){t.exports=n("SRBb")},jrRI:function(t,e,n){"use strict";var i=n("wx14"),o=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),l=n.n(s),c=n("TSYQ"),u=n.n(c),h=n("33Jr"),d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:h.m,className:l.a.string,cssModule:l.a.object},f=function(t){var e=t.className,n=t.cssModule,a=t.row,s=t.disabled,l=t.check,c=t.inline,d=t.tag,f=Object(o.a)(t,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(h.i)(u()(e,!!a&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!s)&&"disabled"),n);return"fieldset"===d&&(f.disabled=s),r.a.createElement(d,Object(i.a)({},f,{className:p}))};f.propTypes=d,f.defaultProps={tag:"div"},e.a=f},o5PN:function(t,e,n){"use strict";var i=n("wx14"),o=n("zLVn"),a=n("JX7q"),r=n("dI71"),s=n("q1tI"),l=(n("17x9"),!!document.documentElement.currentStyle),c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},u=["letter-spacing","line-height","font-family","font-weight","font-size","font-style","tab-size","text-rendering","text-transform","width","text-indent","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","box-sizing"],h={},d=document.createElement("textarea"),f=function(t){Object.keys(c).forEach((function(e){t.style.setProperty(e,c[e],"important")}))};function p(t,e,n,i,o){void 0===n&&(n=!1),void 0===i&&(i=null),void 0===o&&(o=null),null===d.parentNode&&document.body.appendChild(d);var a=function(t,e,n){void 0===n&&(n=!1);if(n&&h[e])return h[e];var i=window.getComputedStyle(t);if(null===i)return null;var o=u.reduce((function(t,e){return t[e]=i.getPropertyValue(e),t}),{}),a=o["box-sizing"];if(""===a)return null;l&&"border-box"===a&&(o.width=parseFloat(o.width)+parseFloat(i["border-right-width"])+parseFloat(i["border-left-width"])+parseFloat(i["padding-right"])+parseFloat(i["padding-left"])+"px");var r=parseFloat(o["padding-bottom"])+parseFloat(o["padding-top"]),s=parseFloat(o["border-bottom-width"])+parseFloat(o["border-top-width"]),c={sizingStyle:o,paddingSize:r,borderSize:s,boxSizing:a};n&&(h[e]=c);return c}(t,e,n);if(null===a)return null;var r=a.paddingSize,s=a.borderSize,c=a.boxSizing,p=a.sizingStyle;Object.keys(p).forEach((function(t){d.style[t]=p[t]})),f(d),d.value=t.value||t.placeholder||"x";var g=-1/0,m=1/0,b=d.scrollHeight;"border-box"===c?b+=s:"content-box"===c&&(b-=r),d.value="x";var v=d.scrollHeight-r,w=Math.floor(b/v);return null!==i&&(g=v*i,"border-box"===c&&(g=g+r+s),b=Math.max(g,b)),null!==o&&(m=v*o,"border-box"===c&&(m=m+r+s),b=Math.min(m,b)),{height:b,minHeight:g,maxHeight:m,rowCount:Math.floor(b/v),valueRowCount:w}}d.setAttribute("tab-index","-1"),d.setAttribute("aria-hidden","true"),f(d);var g=function(){},m=0,b=function(t){function e(e){var n;return(n=t.call(this,e)||this)._onRef=function(t){n._ref=t;var e=n.props.inputRef;"function"!==typeof e?e.current=t:e(t)},n._onChange=function(t){n._controlled||n._resizeComponent(),n.props.onChange(t,Object(a.a)(n))},n._resizeComponent=function(t){void 0===t&&(t=g);var e=p(n._ref,n._uid,n.props.useCacheForDOMMeasurements,n.props.minRows,n.props.maxRows);if(null!==e){var i=e.height,o=e.minHeight,a=e.maxHeight,r=e.rowCount,s=e.valueRowCount;n.rowCount=r,n.valueRowCount=s,n.state.height===i&&n.state.minHeight===o&&n.state.maxHeight===a?t():n.setState({height:i,minHeight:o,maxHeight:a},t)}else t()},n.state={height:e.style&&e.style.height||0,minHeight:-1/0,maxHeight:1/0},n._uid=m++,n._controlled=void 0!==e.value,n._resizeLock=!1,n}Object(r.a)(e,t);var n=e.prototype;return n.render=function(){var t=this.props,e=(t.inputRef,t.maxRows,t.minRows,t.onHeightChange,t.useCacheForDOMMeasurements,Object(o.a)(t,["inputRef","maxRows","minRows","onHeightChange","useCacheForDOMMeasurements"]));return e.style=Object(i.a)({},e.style,{height:this.state.height}),Math.max(e.style.maxHeight||1/0,this.state.maxHeight)<this.state.height&&(e.style.overflow="hidden"),Object(s.createElement)("textarea",Object(i.a)({},e,{onChange:this._onChange,ref:this._onRef}))},n.componentDidMount=function(){var t=this;this._resizeComponent(),this._resizeListener=function(){t._resizeLock||(t._resizeLock=!0,t._resizeComponent((function(){t._resizeLock=!1})))},window.addEventListener("resize",this._resizeListener)},n.componentDidUpdate=function(t,e){t!==this.props&&this._resizeComponent(),this.state.height!==e.height&&this.props.onHeightChange(this.state.height,this)},n.componentWillUnmount=function(){window.removeEventListener("resize",this._resizeListener),function(t){delete h[t]}(this._uid)},e}(s.Component);b.defaultProps={inputRef:g,onChange:g,onHeightChange:g,useCacheForDOMMeasurements:!1},e.a=b},ok1R:function(t,e,n){"use strict";var i=n("wx14"),o=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),l=n.n(s),c=n("TSYQ"),u=n.n(c),h=n("33Jr"),d=l.a.oneOfType([l.a.number,l.a.string]),f={tag:h.m,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(t){var e=t.className,n=t.cssModule,a=t.noGutters,s=t.tag,l=t.form,c=t.widths,d=Object(o.a)(t,["className","cssModule","noGutters","tag","form","widths"]),f=[];c.forEach((function(e,n){var i=t[e];if(delete d[e],i){var o=!n;f.push(o?"row-cols-"+i:"row-cols-"+e+"-"+i)}}));var p=Object(h.i)(u()(e,a?"no-gutters":null,l?"form-row":"row",f),n);return r.a.createElement(s,Object(i.a)({},d,{className:p}))};g.propTypes=f,g.defaultProps=p,e.a=g},xeLu:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tu-dien/bt/tuMoiNDHP",function(){return n("JGJx")}])}},[["xeLu",1,2,5,10,0,3,4,6,8,7]]]);