(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"3OM0":function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),l=n.n(s),c=n("TSYQ"),u=n.n(c),h=n("33Jr"),d=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:d,order:d,offset:d})]),g={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:h.m,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},b=function(e){var t=e.className,n=e.cssModule,a=e.hidden,s=e.widths,l=e.tag,c=e.check,d=e.size,f=e.for,g=Object(i.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];s.forEach((function(t,o){var i=e[t];if(delete g[t],i||""===i){var a,r=!o;if(Object(h.g)(i)){var s,l=r?"-":"-"+t+"-";a=m(r,t,i.size),p.push(Object(h.i)(u()(((s={})[a]=i.size||""===i.size,s["order"+l+i.order]=i.order||0===i.order,s["offset"+l+i.offset]=i.offset||0===i.offset,s))),n)}else a=m(r,t,i),p.push(a)}}));var b=Object(h.i)(u()(t,!!a&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,p,!!p.length&&"col-form-label"),n);return r.a.createElement(l,Object(o.a)({htmlFor:f},g,{className:b}))};b.propTypes=g,b.defaultProps=p,t.a=b},HLdI:function(e,t,n){var o=n("vwuL"),i=n("U+KD"),a=n("B+OT"),r=n("Y7ZC"),s=n("93I4"),l=n("5K7Z");r(r.S,"Reflect",{get:function e(t,n){var r,c,u=arguments.length<3?t:arguments[2];return l(t)===u?t[n]:(r=o.f(t,n))?a(r,"value")?r.value:void 0!==r.get?r.get.call(u):void 0:s(c=i(t))?e(c,n,u):void 0}})},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},KogW:function(e,t,n){"use strict";var o=n("Jo+v"),i=n.n(o),a=n("j+vE"),r=n.n(a),s=n("a7VT");function l(e,t,n){return(l="undefined"!==typeof Reflect&&r.a?r.a:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(s.a)(e)););return e}(e,t);if(o){var a=i()(o,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}n.d(t,"a",(function(){return l}))},SRBb:function(e,t,n){n("HLdI"),e.exports=n("WEpk").Reflect.get},dI71:function(e,t,n){"use strict";function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return o}))},"j+vE":function(e,t,n){e.exports=n("SRBb")},jrRI:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),l=n.n(s),c=n("TSYQ"),u=n.n(c),h=n("33Jr"),d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:h.m,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,a=e.row,s=e.disabled,l=e.check,c=e.inline,d=e.tag,f=Object(i.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),g=Object(h.i)(u()(t,!!a&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!s)&&"disabled"),n);return"fieldset"===d&&(f.disabled=s),r.a.createElement(d,Object(o.a)({},f,{className:g}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},lAfI:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var o=n("kOwS"),i=n("9Jkg"),a=n.n(i),r=n("ln6h"),s=n.n(r),l=n("0iUn"),c=n("MI3g"),u=n("AT/M"),h=n("sLSF"),d=n("Tit0"),f=n("a7VT"),g=n("KogW"),p=n("q1tI"),m=n.n(p),b=n("1Yj4"),v=n("ok1R"),w=n("jrRI"),x=n("3OM0"),O=n("rhny"),y=n("vDqi"),j=n.n(y),C=n("o5PN"),z=n("Acaz"),H=n("O+DW"),_=(n("kIZS"),n("LvQh")),k=n("kMCw"),M=m.a.createElement;function R(e,t){var n,o,i,a="",r=0;for(r=0;r<t.length;r++)(i=e[t[r]])?(n=i.hv.trim()).indexOf(" ")>0&&(n="("+n+")"):(n="",o+=","+t[r]),a+=n+" ";return o&&(H.c("Report","newWordImport",o),console.log("T\u1eeb \u0111i\u1ec3n thi\u1ebfu",o)),a.trim()}var S=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(c.a)(this,Object(f.a)(t).call(this,e));e.words;return n.state={loading:!0,content:"",chinesse:"1\tQu\u1eb7ng b\xf4 x\xedt\tL\u01da t\u01d4 ku\xe0ng\t\u94dd\u571f\u77ff",hanViet:"",bacKinh:"",dict:{}},j.a.get("https://raw.githubusercontent.com/thanglamhuu/nddhp.github.io/master/dictClient.json").then((function(e){n.setState({dict:e.data,loading:!1})})),n.onChangeHandlerChuHan=n.onChangeHandlerChuHan.bind(Object(u.a)(n)),n}return Object(d.a)(t,e),Object(h.a)(t,null,[{key:"getInitialProps",value:function(e){var n,o,i;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.req,o=e.query,Object(g.a)(Object(f.a)(t),"getInitialProps",this).call(this,{req:n,query:o}),a.next=4,s.a.awrap(Object(g.a)(Object(f.a)(t),"getInitialProps",this).call(this,{req:n}));case 4:return i=a.sent,a.abrupt("return",i);case 6:case"end":return a.stop()}}),null,this)}}]),Object(h.a)(t,[{key:"onChangeHandlerChuHan",value:function(e){var t=this.state.dict,n=e.target.value,o=[],i=n.split("\n"),r=[],s="",l=0;for(l=0;l<i.length;l++)try{"",r=(s=i[l].trim()).split("\t"),o.push({chuHan:r[3].trim(),hanViet:R(t,r[3].trim()),bacKinh:r[2].trim(),nghia:r[1].trim()})}catch(e){console.log(s,r,e)}this.setState({chinesse:n,chuHans:Object(k.g)(a()(o),"},{","},\n{")})}},{key:"render",value:function(){var e=this.state,t=e.chuHans,n=e.chinesse;return H.d("bt-convert"),M(_.a,Object(o.a)({},this.props,{navmenu:!1,container:!1}),M(b.a,null,M(v.a,null,M("h2",{className:"h1Title"},"T\u1ea1o danh s\xe1ch t\u1eeb import")),M(v.a,null,M(w.a,{style:{width:"100%"}},M(x.a,{for:"inputChuHan"},"Nh\u1eadp n\u1ed9i dung ch\u1eef H\xe1n"),M(C.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:n,onChange:this.onChangeHandlerChuHan}))),M(O.a,null,M("h4",null,"K\u1ebft qu\u1ea3"),M("span",null,"Vui l\xf2ng click l\xean t\u1eebng ch\u1eef \u0111\u1ec3 xem t\u1eeb \u0111i\u1ec3n"),M(C.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:t}))))}}]),t}(z.a)},o5PN:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("JX7q"),r=n("dI71"),s=n("q1tI"),l=(n("17x9"),!!document.documentElement.currentStyle),c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},u=["letter-spacing","line-height","font-family","font-weight","font-size","font-style","tab-size","text-rendering","text-transform","width","text-indent","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","box-sizing"],h={},d=document.createElement("textarea"),f=function(e){Object.keys(c).forEach((function(t){e.style.setProperty(t,c[t],"important")}))};function g(e,t,n,o,i){void 0===n&&(n=!1),void 0===o&&(o=null),void 0===i&&(i=null),null===d.parentNode&&document.body.appendChild(d);var a=function(e,t,n){void 0===n&&(n=!1);if(n&&h[t])return h[t];var o=window.getComputedStyle(e);if(null===o)return null;var i=u.reduce((function(e,t){return e[t]=o.getPropertyValue(t),e}),{}),a=i["box-sizing"];if(""===a)return null;l&&"border-box"===a&&(i.width=parseFloat(i.width)+parseFloat(o["border-right-width"])+parseFloat(o["border-left-width"])+parseFloat(o["padding-right"])+parseFloat(o["padding-left"])+"px");var r=parseFloat(i["padding-bottom"])+parseFloat(i["padding-top"]),s=parseFloat(i["border-bottom-width"])+parseFloat(i["border-top-width"]),c={sizingStyle:i,paddingSize:r,borderSize:s,boxSizing:a};n&&(h[t]=c);return c}(e,t,n);if(null===a)return null;var r=a.paddingSize,s=a.borderSize,c=a.boxSizing,g=a.sizingStyle;Object.keys(g).forEach((function(e){d.style[e]=g[e]})),f(d),d.value=e.value||e.placeholder||"x";var p=-1/0,m=1/0,b=d.scrollHeight;"border-box"===c?b+=s:"content-box"===c&&(b-=r),d.value="x";var v=d.scrollHeight-r,w=Math.floor(b/v);return null!==o&&(p=v*o,"border-box"===c&&(p=p+r+s),b=Math.max(p,b)),null!==i&&(m=v*i,"border-box"===c&&(m=m+r+s),b=Math.min(m,b)),{height:b,minHeight:p,maxHeight:m,rowCount:Math.floor(b/v),valueRowCount:w}}d.setAttribute("tab-index","-1"),d.setAttribute("aria-hidden","true"),f(d);var p=function(){},m=0,b=function(e){function t(t){var n;return(n=e.call(this,t)||this)._onRef=function(e){n._ref=e;var t=n.props.inputRef;"function"!==typeof t?t.current=e:t(e)},n._onChange=function(e){n._controlled||n._resizeComponent(),n.props.onChange(e,Object(a.a)(n))},n._resizeComponent=function(e){void 0===e&&(e=p);var t=g(n._ref,n._uid,n.props.useCacheForDOMMeasurements,n.props.minRows,n.props.maxRows);if(null!==t){var o=t.height,i=t.minHeight,a=t.maxHeight,r=t.rowCount,s=t.valueRowCount;n.rowCount=r,n.valueRowCount=s,n.state.height===o&&n.state.minHeight===i&&n.state.maxHeight===a?e():n.setState({height:o,minHeight:i,maxHeight:a},e)}else e()},n.state={height:t.style&&t.style.height||0,minHeight:-1/0,maxHeight:1/0},n._uid=m++,n._controlled=void 0!==t.value,n._resizeLock=!1,n}Object(r.a)(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=(e.inputRef,e.maxRows,e.minRows,e.onHeightChange,e.useCacheForDOMMeasurements,Object(i.a)(e,["inputRef","maxRows","minRows","onHeightChange","useCacheForDOMMeasurements"]));return t.style=Object(o.a)({},t.style,{height:this.state.height}),Math.max(t.style.maxHeight||1/0,this.state.maxHeight)<this.state.height&&(t.style.overflow="hidden"),Object(s.createElement)("textarea",Object(o.a)({},t,{onChange:this._onChange,ref:this._onRef}))},n.componentDidMount=function(){var e=this;this._resizeComponent(),this._resizeListener=function(){e._resizeLock||(e._resizeLock=!0,e._resizeComponent((function(){e._resizeLock=!1})))},window.addEventListener("resize",this._resizeListener)},n.componentDidUpdate=function(e,t){e!==this.props&&this._resizeComponent(),this.state.height!==t.height&&this.props.onHeightChange(this.state.height,this)},n.componentWillUnmount=function(){window.removeEventListener("resize",this._resizeListener),function(e){delete h[e]}(this._uid)},t}(s.Component);b.defaultProps={inputRef:p,onChange:p,onHeightChange:p,useCacheForDOMMeasurements:!1},t.a=b},ok1R:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),l=n.n(s),c=n("TSYQ"),u=n.n(c),h=n("33Jr"),d=l.a.oneOfType([l.a.number,l.a.string]),f={tag:h.m,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},g={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,s=e.tag,l=e.form,c=e.widths,d=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];c.forEach((function(t,n){var o=e[t];if(delete d[t],o){var i=!n;f.push(i?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var g=Object(h.i)(u()(t,a?"no-gutters":null,l?"form-row":"row",f),n);return r.a.createElement(s,Object(o.a)({},d,{className:g}))};p.propTypes=f,p.defaultProps=g,t.a=p},v8od:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tu-dien/bt/vbkh",function(){return n("lAfI")}])}},[["v8od",1,2,6,0,3,4,5,7,8]]]);