(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("kOwS"),i=n("0iUn"),o=n("sLSF"),r=n("MI3g"),s=n("a7VT"),h=n("Tit0"),c=n("rt45"),l=(n("YFqc"),n("q1tI")),u=n.n(l),d=n("vgUL"),g=n("1Yj4"),b=n("374E"),p=n("vOnD"),f=n("Acaz"),m=n("ln6h"),v=n.n(m),w=n("AT/M"),O=n("9Jkg"),j=n.n(O),C=n("WWLJ"),H=n.n(C),y=n("ok1R"),x=n("jrRI"),N=n("3OM0"),V=n("rhny"),k=n("vDqi"),z=n.n(k),_=n("o5PN"),S=n("kIZS"),M=n("Z6AP"),R=n("kMCw"),T=(n("hKps"),n("O+DW")),W=u.a.createElement;function L(e){return e&&e.hv?e=0===(e=e.hv.split(",")).length?"":1===e.length?e[0]:"".concat(e[0]):(T.c("ThieuTu","Han",j()(e)),"")}function F(e,t,n,a,i){var o,r;if(console.log("processWord , chinessArray, lenWord, textScripts",e,t,a),t<e.length-5&&(o=n[r=Object(R.b)(e[t])+Object(R.b)(e[t+1])+Object(R.b)(e[t+2])+Object(R.b)(e[t+3])+Object(R.b)(e[t+4])+Object(R.b)(e[t+5])],console.log("processWord word, mean",r,o),o))return a.push({id:t,chinesse:r,hanViet:o.hv,bacKinh:"",nghiaViet:L(o),nghias:o.nghia}),6;if(t<e.length-4&&(o=n[r=Object(R.b)(e[t])+Object(R.b)(e[t+1])+Object(R.b)(e[t+2])+Object(R.b)(e[t+3])+Object(R.b)(e[t+4])],console.log("processWord word, mean",r,o),o))return a.push({id:t,chinesse:r,hanViet:o.hv,bacKinh:i[t]+" "+i[t+1]+" "+i[t+2]+" "+i[t+3]+" "+i[t+4],nghiaViet:L(o),nghias:o.nghia}),5;if(t<e.length-3&&(o=n[r=Object(R.b)(e[t])+Object(R.b)(e[t+1])+Object(R.b)(e[t+2])+Object(R.b)(e[t+3])],console.log("processWord word, mean",r,o),o))return a.push({id:t,chinesse:r,hanViet:o.hv,bacKinh:i[t]+" "+i[t+1]+" "+i[t+2]+" "+i[t+3],nghiaViet:L(o),nghias:o.nghia}),4;if(t<e.length-2&&(o=n[r=Object(R.b)(e[t])+Object(R.b)(e[t+1])+Object(R.b)(e[t+2])]))return a.push({id:t,chinesse:r,hanViet:o.hv,bacKinh:i[t]+" "+i[t+1]+" "+i[t+2],nghiaViet:L(o),nghias:o.nghia}),3;if(t<e.length-1&&(o=n[r=Object(R.b)(e[t])+Object(R.b)(e[t+1])]))return a.push({id:t,chinesse:r,hanViet:o.hv,bacKinh:i[t]+" "+i[t+1],nghiaViet:L(o),nghias:o.nghia}),2;var s="";return(o=n[Object(R.b)(e[t])])&&(s=o.hv),a.push({id:t,chinesse:e[t],hanViet:s,bacKinh:i[t],nghiaViet:L(o),nghias:o?o.nghia:""}),1}function K(e,t,n){var a=Object(R.a)(e),i=[],o=n.split(" "),r=0;for(r=0;r<a.length;)r+=F(a,r,t,i,o);return i}function E(e,t){var n=Object(R.g)(Object(R.g)(Object(R.g)(Object(R.g)(e,",",",#"),"\uff0c",",#"),"\uff1a",":#"),":",":#").split("#"),a=0,i=[];for(a=0;a<n.length;a++){var o=H()(n[a]),r=K(n[a],t,o);if(console.log(n[a],r,o),n[a]){var s=r[r.length-1];s&&(s.dot=n[a].substr(n[a].length-1)),i=i.concat(r)}}return i&&i[0]&&(i[0].nghiaViet="".concat(i[0].nghiaViet.substr(0,1).toUpperCase()).concat(i[0].nghiaViet.substr(1))),i}function D(e){var t=e.state,n=(t.typingChinesse,t.chinesse),a=(t.dict,"");if(n){n.map((function(e){var t=e.nghiaViet||e.hanViet||"";e.dot?a+="".concat(t).concat(e.dot," "):a+="".concat(t," ")}));e.setState({nghiaViet:a})}}var I=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(r.a)(this,Object(s.a)(t).call(this,e));e.words;return n.state={loading:!0,nghiaViet:"",typingChinesse:"",chinesse:"",hanViet:"",bacKinh:"",dict:{}},z.a.get("https://raw.githubusercontent.com/thanglamhuu/nddhp.github.io/master/dictClient.json").then((function(e){n.setState({dict:e.data,newNghia:"",newWord:"",loading:!1})})),n.onChangeHandlerNewWord=n.onChangeHandlerNewWord.bind(Object(w.a)(n)),n.onChangeHandlerNewHanViet=n.onChangeHandlerNewHanViet.bind(Object(w.a)(n)),n.onChangeHandlerNewNghia=n.onChangeHandlerNewNghia.bind(Object(w.a)(n)),n.onChangeHandlerChuHan=n.onChangeHandlerChuHan.bind(Object(w.a)(n)),n.onChangeHandlerHanViet=n.onChangeHandlerHanViet.bind(Object(w.a)(n)),n.onChangeHandlerBacKinh=n.onChangeHandlerBacKinh.bind(Object(w.a)(n)),n.onHtmlChangeNghiaViet=n.onHtmlChangeNghiaViet.bind(Object(w.a)(n)),n.transToHanViet=n.transToHanViet.bind(Object(w.a)(n)),n.trans=n.trans.bind(Object(w.a)(n)),n.updateNghia=n.updateNghia.bind(Object(w.a)(n)),n.reportNew=n.reportNew.bind(Object(w.a)(n)),n}return Object(h.a)(t,e),Object(o.a)(t,null,[{key:"getInitialProps",value:function(e){var t;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e.req,t={},n.next=12;break;case 6:t.dictBook=n.sent,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(3),t.error="Unable to fetch AsyncData on server";case 12:return n.abrupt("return",t);case 13:case"end":return n.stop()}}),null,null,[[3,9]])}}]),Object(o.a)(t,[{key:"onHtmlChangeNghiaViet",value:function(e){this.setState({nghiaViet:e.target.value})}},{key:"onChangeHandlerChuHan",value:function(e){this.setState({typingChinesse:e.target.value})}},{key:"onChangeHandlerHanViet",value:function(e){this.setState({hanViet:Object(R.c)(e.target.value)})}},{key:"onChangeHandlerNewWord",value:function(e){var t=e.target.value,n=function(e,t){var n,a=Object(R.a)(e),i=[],o=0;for(o=0;o<a.length;o++){var r="";(n=t[Object(R.b)(a[o])])&&(r=n.hv),i.push({id:o,chinesse:a[o],hanViet:r,bacKinh:"",nghiaViet:L(n),nghias:n?n.nghia:""})}return i}(t,this.state.dict),a="";n.map((function(e){return a+=" "+e.hanViet,""})),this.setState({newWord:Object(R.c)(t),newHanViet:a.trim()})}},{key:"onChangeHandlerNewNghia",value:function(e){this.setState({newNghia:Object(R.c)(e.target.value)})}},{key:"onChangeHandlerNewHanViet",value:function(e){this.setState({newHanViet:Object(R.c)(e.target.value)})}},{key:"onChangeHandlerBacKinh",value:function(e){this.setState({bacKinh:Object(R.c)(e.target.value)})}},{key:"transToHanViet",value:function(){var e=this.state,t=e.typingChinesse,n=e.dict,a=[],i=Object(R.g)(Object(R.g)(Object(R.g)(Object(R.g)(t,".",".#"),". ",".#"),"? ","?#"),"\u3002",".#").split("#"),o=0;for(o=0;o<i.length;o++){var r=E(i[o],n);if(i[o]&&r[r.length-1]){console.log(i[o]);r[r.length-1];r[r.length-1].dot=i[o].substr(i[o].length-1),a=a.concat(r)}}this.setState({chinesse:a}),D(this),console.log("typingChinesse",t),T.c("Dich doan","trans",t)}},{key:"reportNew",value:function(){var e=this.state,t=e.newWord,n=e.newHanViet,a=e.newNghia,i='{"chuHan":"'.concat(t,'","hanViet":"').concat(n,'","bacKinh":"').concat(H()(t),'","nghia":"').concat(a,'"},');return T.c("Report","newWord",i),this.setState({newWord:"",newHanViet:"",newNghia:""}),i}},{key:"trans",value:function(){var e=this.state;e.typingChinesse,e.chinesse,e.dict;D(this)}},{key:"updateNghia",value:function(e,t){var n=this.state.chinesse;n[e].nghiaViet=t,this.setState({chinesse:n}),D(this)}},{key:"render",value:function(){var e=this,t=this.state,n=t.nghiaViet,a=t.typingChinesse,i=t.chinesse,o=(t.bacKinh,t.loading),r=(t.dict,t.newWord),s=t.newHanViet,h=t.newNghia,c="",l=0;return o?c=W(S.a,null):i&&(c=i.map((function(t){return W(M.a,{id:l++,key:Math.random(),chinesse:t.chinesse,hanViet:t.hanViet,bacKinh:t.bacKinh,nghias:t.nghias,nghiaViet:t.nghiaViet,updateNghia:e.updateNghia,dot:t.dot})}))),W("div",null,W(y.a,null,W("h2",{className:"h1Title"},"Tra \u0111o\u1ea1n ch\u1eef H\xe1n")),W(y.a,null,W(x.a,{style:{width:"100%"}},W(N.a,{for:"inputChuHan"},"Nh\u1eadp n\u1ed9i dung ch\u1eef H\xe1n"),W(_.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:a,onChange:this.onChangeHandlerChuHan})),W("button",{className:"btnProcess",onClick:this.transToHanViet},"L\u1ea5y t\u1eeb \u0111i\u1ec3n")),W(y.a,null,W("h5",null,"Click l\xean ch\u1eef \u0111\u1ec3 xem t\u1eeb \u0111i\u1ec3n v\xe0 ch\u1ecdn ngh\u0129a Vi\u1ec7t"),W("div",{className:"chuHanList"},c)),W(y.a,{style:{paddingTop:"10px"}},W("h3",null,"K\u1ebft qu\u1ea3"),W("div",{style:{width:"70%",textAlign:"center"}},W("button",{className:"btnProcess",onClick:this.trans,style:{marginLeft:100}},"L\u1ea5y k\u1ebft qu\u1ea3 sang ngh\u0129a Vi\u1ec7t")),W("h4",null,"Ch\u1ec9nh s\u1eeda l\u1ea1i n\u1ed9i dung b\u1ea3n d\u1ecbch t\u1ea1i \u0111\xe2y"),W(_.a,{className:"txtAutoSize",id:"inputNghiaViet",placeholder:"d\u1ecbch ngh\u0129a",value:n,onChange:this.onHtmlChangeNghiaViet})),W(y.a,{style:{paddingTop:"10px"}},W("h5",null,"Y\xeau c\u1ea7u th\xeam t\u1eeb m\u1edbi"),W(V.a,null,W(_.a,{className:"txtInput",id:"newWord",placeholder:"t\u1eeb m\u1edbi",value:r,onChange:this.onChangeHandlerNewWord}),W(_.a,{className:"txtInput",id:"newHanViet",placeholder:"\xe2m H\xe1n Vi\u1ec7t",value:s,onChange:this.onChangeHandlerNewHanViet}),W(_.a,{className:"txtInput",id:"newNghia",placeholder:"ngh\u0129a",value:h,onChange:this.onChangeHandlerNewNghia}),W("button",{className:"btnProcess",onClick:this.reportNew,style:{marginTop:"-50px"}},"\u0110\u1ec1 ngh\u1ecb th\xeam"))))}}]),t}(l.Component);I.defaultProps={error:null};var P=n("LvQh");n.d(t,"default",(function(){return U}));var q=u.a.createElement;function A(){var e=Object(c.a)(["\n  background-color: #f1f1f1;\n  margin: 5px;\n  padding: 3px 3px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 25px;\n"]);return A=function(){return e},e}function J(){var e=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  background-color: DodgerBlue;\n"]);return J=function(){return e},e}function B(){var e=Object(c.a)(["\n  padding: 1 rem !important;\n"]);return B=function(){return e},e}Object(p.default)(d.a)(B()),p.default.div(J()),p.default.a(A());var U=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return T.d("index"),q(P.a,Object(a.a)({},this.props,{navmenu:!1,container:!1}),q(g.a,null,q(I,{className:"text-muted small"}),q("br",null),q("h4",null,"H\xe3y like ",q(b.a,{href:"https://www.facebook.com/tudiendich",target:"blank",style:{color:"#3B5998"}},q("span",{className:"icon ion-logo-facebook mr-1"})," Fanpage T\u1eeb \u0110i\u1ec3n D\u1ecbch"),"\u0111\u1ec3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt c\xe1c b\xe0i vi\u1ebft hay v\u1ec1 d\u1ecbch thu\u1eadt."),q("h4",null,"N\u1ebfu b\u1ea1n c\xf3 y\xeau c\u1ea7u trang web c\u1ea7n ch\u1ec9nh s\u1eeda g\xec, h\xe3y chat ngay v\u1edbi ",q(b.a,{href:"http://m.me/354125561828018",target:"blank",style:{color:"#0078FF"}}))))}}]),t}(f.a)},WWLJ:function(e,t,n){e.exports=n("FGuI").default},dI71:function(e,t,n){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return a}))},jrRI:function(e,t,n){"use strict";var a=n("wx14"),i=n("zLVn"),o=n("q1tI"),r=n.n(o),s=n("17x9"),h=n.n(s),c=n("TSYQ"),l=n.n(c),u=n("33Jr"),d={children:h.a.node,row:h.a.bool,check:h.a.bool,inline:h.a.bool,disabled:h.a.bool,tag:u.m,className:h.a.string,cssModule:h.a.object},g=function(e){var t=e.className,n=e.cssModule,o=e.row,s=e.disabled,h=e.check,c=e.inline,d=e.tag,g=Object(i.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(u.i)(l()(t,!!o&&"row",h?"form-check":"form-group",!(!h||!c)&&"form-check-inline",!(!h||!s)&&"disabled"),n);return"fieldset"===d&&(g.disabled=s),r.a.createElement(d,Object(a.a)({},g,{className:b}))};g.propTypes=d,g.defaultProps={tag:"div"},t.a=g},o5PN:function(e,t,n){"use strict";var a=n("wx14"),i=n("zLVn"),o=n("JX7q"),r=n("dI71"),s=n("q1tI"),h=(n("17x9"),!!document.documentElement.currentStyle),c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},l=["letter-spacing","line-height","font-family","font-weight","font-size","font-style","tab-size","text-rendering","text-transform","width","text-indent","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","box-sizing"],u={},d=document.createElement("textarea"),g=function(e){Object.keys(c).forEach((function(t){e.style.setProperty(t,c[t],"important")}))};function b(e,t,n,a,i){void 0===n&&(n=!1),void 0===a&&(a=null),void 0===i&&(i=null),null===d.parentNode&&document.body.appendChild(d);var o=function(e,t,n){void 0===n&&(n=!1);if(n&&u[t])return u[t];var a=window.getComputedStyle(e);if(null===a)return null;var i=l.reduce((function(e,t){return e[t]=a.getPropertyValue(t),e}),{}),o=i["box-sizing"];if(""===o)return null;h&&"border-box"===o&&(i.width=parseFloat(i.width)+parseFloat(a["border-right-width"])+parseFloat(a["border-left-width"])+parseFloat(a["padding-right"])+parseFloat(a["padding-left"])+"px");var r=parseFloat(i["padding-bottom"])+parseFloat(i["padding-top"]),s=parseFloat(i["border-bottom-width"])+parseFloat(i["border-top-width"]),c={sizingStyle:i,paddingSize:r,borderSize:s,boxSizing:o};n&&(u[t]=c);return c}(e,t,n);if(null===o)return null;var r=o.paddingSize,s=o.borderSize,c=o.boxSizing,b=o.sizingStyle;Object.keys(b).forEach((function(e){d.style[e]=b[e]})),g(d),d.value=e.value||e.placeholder||"x";var p=-1/0,f=1/0,m=d.scrollHeight;"border-box"===c?m+=s:"content-box"===c&&(m-=r),d.value="x";var v=d.scrollHeight-r,w=Math.floor(m/v);return null!==a&&(p=v*a,"border-box"===c&&(p=p+r+s),m=Math.max(p,m)),null!==i&&(f=v*i,"border-box"===c&&(f=f+r+s),m=Math.min(f,m)),{height:m,minHeight:p,maxHeight:f,rowCount:Math.floor(m/v),valueRowCount:w}}d.setAttribute("tab-index","-1"),d.setAttribute("aria-hidden","true"),g(d);var p=function(){},f=0,m=function(e){function t(t){var n;return(n=e.call(this,t)||this)._onRef=function(e){n._ref=e;var t=n.props.inputRef;"function"!==typeof t?t.current=e:t(e)},n._onChange=function(e){n._controlled||n._resizeComponent(),n.props.onChange(e,Object(o.a)(n))},n._resizeComponent=function(e){void 0===e&&(e=p);var t=b(n._ref,n._uid,n.props.useCacheForDOMMeasurements,n.props.minRows,n.props.maxRows);if(null!==t){var a=t.height,i=t.minHeight,o=t.maxHeight,r=t.rowCount,s=t.valueRowCount;n.rowCount=r,n.valueRowCount=s,n.state.height===a&&n.state.minHeight===i&&n.state.maxHeight===o?e():n.setState({height:a,minHeight:i,maxHeight:o},e)}else e()},n.state={height:t.style&&t.style.height||0,minHeight:-1/0,maxHeight:1/0},n._uid=f++,n._controlled=void 0!==t.value,n._resizeLock=!1,n}Object(r.a)(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=(e.inputRef,e.maxRows,e.minRows,e.onHeightChange,e.useCacheForDOMMeasurements,Object(i.a)(e,["inputRef","maxRows","minRows","onHeightChange","useCacheForDOMMeasurements"]));return t.style=Object(a.a)({},t.style,{height:this.state.height}),Math.max(t.style.maxHeight||1/0,this.state.maxHeight)<this.state.height&&(t.style.overflow="hidden"),Object(s.createElement)("textarea",Object(a.a)({},t,{onChange:this._onChange,ref:this._onRef}))},n.componentDidMount=function(){var e=this;this._resizeComponent(),this._resizeListener=function(){e._resizeLock||(e._resizeLock=!0,e._resizeComponent((function(){e._resizeLock=!1})))},window.addEventListener("resize",this._resizeListener)},n.componentDidUpdate=function(e,t){e!==this.props&&this._resizeComponent(),this.state.height!==t.height&&this.props.onHeightChange(this.state.height,this)},n.componentWillUnmount=function(){window.removeEventListener("resize",this._resizeListener),function(e){delete u[e]}(this._uid)},t}(s.Component);m.defaultProps={inputRef:p,onChange:p,onHeightChange:p,useCacheForDOMMeasurements:!1},t.a=m},ok1R:function(e,t,n){"use strict";var a=n("wx14"),i=n("zLVn"),o=n("q1tI"),r=n.n(o),s=n("17x9"),h=n.n(s),c=n("TSYQ"),l=n.n(c),u=n("33Jr"),d=h.a.oneOfType([h.a.number,h.a.string]),g={tag:u.m,noGutters:h.a.bool,className:h.a.string,cssModule:h.a.object,form:h.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,h=e.form,c=e.widths,d=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];c.forEach((function(t,n){var a=e[t];if(delete d[t],a){var i=!n;g.push(i?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(u.i)(l()(t,o?"no-gutters":null,h?"form-row":"row",g),n);return r.a.createElement(s,Object(a.a)({},d,{className:b}))};p.propTypes=g,p.defaultProps=b,t.a=p},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,5,10,0,42,43,44,46,45,49]]]);