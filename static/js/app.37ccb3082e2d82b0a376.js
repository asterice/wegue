webpackJsonp([1],{"+pgC":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[],a={render:n,staticRenderFns:o};e.a=a},"1SaT":function(t,e,r){"use strict";function n(t){r("SFme")}var o=r("WaAR"),a=r("sjzN"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},"1pk9":function(t,e,r){"use strict";var n=r("MPh8"),o=r("mucN");e.a={name:"wgu-layerlist-win",directives:{DraggableWin:n.a},components:{"wgu-layerlist":o.a},props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"layers"},title:{type:String,required:!1,default:"Layers"},draggable:{type:Boolean,required:!1,default:!0},initPos:{type:Object,required:!1}},data:function(){return{moduleName:"wgu-layerlist",show:!1,left:this.initPos?this.initPos.left+"px":"10px",top:this.initPos?this.initPos.top+"px":"70px"}}}},"29fi":function(t,e,r){"use strict";function n(t){r("GMzk")}var o=r("1pk9"),a=r("HWSy"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},"2F6G":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{dark:""}},[r("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[r("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},"2SQl":function(t,e){},"3/U1":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{staticClass:"white--text",attrs:{color:t.color,app:""}},[r("span",{staticClass:"wgu-footer-left",domProps:{innerHTML:t._s(t.footerTextLeft)}}),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"wgu-footer-right"},[r("span",{domProps:{innerHTML:t._s(t.footerTextRight)}}),t._v(" "),t.showCopyrightYear?r("span",[t._v("© "+t._s((new Date).getFullYear()))]):t._e()])],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},"4z3x":function(t,e,r){"use strict";var n=r("MPh8"),o=r("WFjz"),a=r("w/12"),i=r("cspx"),s=r("VT4C");e.a={name:"wgu-measuretool-win",directives:{DraggableWin:n.a},components:{"wgu-measure-type-chooser":a.a,"wgu-measure-result":i.a},mixins:[o.a],props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"photo_size_select_small"},title:{type:String,required:!1,default:"Measure"},draggable:{type:Boolean,required:!1,default:!0},initPos:{type:Object,required:!1}},data:function(){return{moduleName:"wgu-measuretool",measureGeom:null,measureType:"distance",show:!1,left:this.initPos?this.initPos.left+"px":"0",top:this.initPos?this.initPos.top+"px":"0"}},watch:{show:function(){var t=this;!0===t.show?t.olMapCtrl.addInteraction(t.measureType,t.onMeasureVertexSet):t.olMapCtrl.removeInteraction()},measureType:function(){var t=this;t.measureGeom={},t.olMapCtrl.addInteraction(t.measureType,t.onMeasureVertexSet)}},methods:{applyMeasureType:function(t,e){this.measureType=t},onMapBound:function(){var t=this,e=t.$appConfig.modules[t.moduleName]||{};this.olMapCtrl=new s.a(t.map,e),t.olMapCtrl.createMeasureLayer()},onMeasureVertexSet:function(t){this.measureGeom={geom:t}}}}},"6jvY":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{attrs:{icon:"",dark:""},on:{click:t.onClick}},[r("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},"7Jjb":function(t,e){},"7OTJ":function(t,e,r){"use strict";e.a={props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"help"},title:{type:String,required:!1,default:"About"},headline:{type:String,required:!1,default:"About Wegue"},content:{type:String,required:!1,default:"<h3>WebGIS with OpenLayers and Vue.js</h3> Template and re-usable components for webmapping applications with OpenLayers and Vue.js"},infoLink:{type:String,required:!1,default:"https://github.com/meggsimum/wegue"},infoLinkText:{type:String,required:!1,default:"More info"}},data:function(){return{show:!1}},methods:{onWinXClose:function(){this.$emit("winxclose")}}}},"7zck":function(t,e){},"8kb5":function(t,e,r){"use strict";e.a={name:"wgu-app-footer",props:{color:{type:String,required:!1,default:"red darken-3"},footerTextLeft:{type:String,required:!1,default:'Powered by <a href="https://meggsimum.de/wegue/" target="_blank">Wegue WebGIS</a>'},footerTextRight:{type:String,required:!1,default:"meggsimum"},showCopyrightYear:{type:Boolean,required:!1,default:!0}}}},"B/BW":function(t,e){},"B/F2":function(t,e){},"Bct/":function(t,e){},CD2r:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.measureTypeData,callback:function(e){t.measureTypeData=e},expression:"measureTypeData"}},[r("v-btn",{attrs:{large:"",value:"distance"}},[t._v("\n     Distance\n   ")]),t._v(" "),r("v-btn",{attrs:{large:"",value:"area"}},[t._v("\n     Area\n   ")])],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},DP51:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return this.properties?r("table",{staticClass:"wgu-proptable",style:t.tableStyles},[t._m(0),t._v(" "),r("tbody",{staticClass:"attr-tbody"},t._l(t.properties,function(e,n){return r("tr",[r("td",{staticClass:"key-td"},[t._v("\n        "+t._s(n)+"\n      ")]),t._v(" "),r("td",{staticClass:"val-td"},[t._v("\n        "+t._s(e)+"\n      ")])])}),0)]):t._e()},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr")])}],a={render:n,staticRenderFns:o};e.a=a},DcW1:function(t,e,r){"use strict";var n=r("7+uW"),o=r("ZkkH");e.a={name:"wgu-infoclick-btn",props:{icon:{type:String,required:!1,default:"info"},text:{type:String,required:!1,default:""}},data:function(){return{moduleName:"wgu-infoclick"}},created:function(){var t=this;o.a.$on("app-mounted",function(){t.win=n.default.prototype.cmpLookup[t.moduleName+"-win"]})},methods:{toggleUi:function(){this.win.show=!this.win.show}}}},EJzH:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win",value:t.draggable,expression:"draggable"}],staticClass:"wgu-measurewin",style:{left:t.left,top:t.top}},[r("v-toolbar",{attrs:{color:t.color,dark:""}},[r("v-toolbar-side-icon",[r("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),r("v-toolbar-title",{staticClass:"wgu-win-title"},[t._v(t._s(t.title))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[r("v-icon",[t._v("close")])],1)],1),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("wgu-measure-type-chooser",{attrs:{measureType:t.measureType},on:{"wgu-measuretype-change":t.applyMeasureType}})],1),t._v(" "),r("v-card-actions",[r("wgu-measure-result",{attrs:{measureGeom:t.measureGeom}})],1)],1):t._e()},o=[],a={render:n,staticRenderFns:o};e.a=a},"F+zM":function(t,e,r){"use strict";var n=r("grfP"),o=r("ZYQ1"),a=r("1avf");e.a={name:"wgu-measure-result",props:{measureGeom:{type:Object}},data:function(){return{area:" -- ",distance:" -- "}},watch:{measureGeom:function(){var t=this,e=t.measureGeom.geom,r=void 0;e instanceof o.a?(r=t.formatArea(e),t.area=r):e instanceof n.a?(r=t.formatLength(e),t.distance=r):(t.area=" -- ",t.distance=" -- ")}},methods:{formatLength:function(t){var e=r.i(a.c)(t);return e>100?Math.round(e/1e3*100)/100+" km":Math.round(100*e)/100+" m"},formatArea:function(t){var e=r.i(a.d)(t);return e>1e4?Math.round(e/1e6*100)/100+" km²":Math.round(100*e)/100+" m²"}}}},GEkf:function(t,e,r){"use strict";var n=r("fZjL"),o=r.n(n),a=r("BO1k"),i=r.n(a),s=r("7+uW"),u=r("UAgb"),l=r("1SaT"),c=r("uwYZ"),d=r("NkLf"),f=r("qqRY");e.a={name:"wgu-app-header",components:{"wgu-zoomtomaxextent-btn":f.a,"wgu-layerlist-btn":u.a,"wgu-helpwin-btn":l.a,"wgu-measuretool-btn":c.a,"wgu-infoclick-btn":d.a},props:{color:{type:String,required:!1,default:"red darken-3"}},data:function(){return{title:this.$appConfig.title,menuButtons:this.getModuleButtonData(),tbButtons:this.getToolbarButtons()}},methods:{getModuleButtonData:function(){var t=s.default.prototype.$appConfig,e=[],r=!0,n=!1,a=void 0;try{for(var u,l=i()(o()(t.modules));!(r=(u=l.next()).done);r=!0){var c=u.value,d=t.modules[c];"menu"===d.target&&e.push({type:c+"-btn",target:d.target})}}catch(t){n=!0,a=t}finally{try{!r&&l.return&&l.return()}finally{if(n)throw a}}return e},getToolbarButtons:function(){var t=s.default.prototype.$appConfig,e=[],r=!0,n=!1,a=void 0;try{for(var u,l=i()(o()(t.modules));!(r=(u=l.next()).done);r=!0){var c=u.value,d=t.modules[c];"toolbar"===d.target&&e.push({type:c+"-btn",target:d.target})}}catch(t){n=!0,a=t}finally{try{!r&&l.return&&l.return()}finally{if(n)throw a}}return e}}}},GJSh:function(t,e){},GMzk:function(t,e){},HWSy:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win",value:t.draggable,expression:"draggable"}],staticClass:"wgu-layerlist",style:{left:t.left,top:t.top}},[r("v-toolbar",{attrs:{color:t.color,dark:""}},[r("v-toolbar-side-icon",[r("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),r("v-toolbar-title",{staticClass:"wgu-win-title"},[t._v(t._s(t.title))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[r("v-icon",[t._v("close")])],1)],1),t._v(" "),r("wgu-layerlist")],1):t._e()},o=[],a={render:n,staticRenderFns:o};e.a=a},L1xf:function(t,e,r){"use strict";function n(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}var o=r("d7EF"),a=r.n(o),i=r("IHMs"),s=r.n(i),u=r("yGLh"),l=r("IZoy");e.a={name:"wgu-coords-table",props:{color:{type:String,required:!1,default:"red darken-3"},coordsData:{type:Object},showMapPos:{type:Boolean,required:!1,default:!0},showWgsPos:{type:Boolean,required:!1,default:!0},showHdms:{type:Boolean,required:!1,default:!0}},data:function(){return{coordRows:null}},computed:{tableStyles:function(){var t=this.color;if(!n(this.color)){var e=this.color.toString().trim().split(" ",2),r=a()(e,2),o=r[0],i=r[1];t=s.a[o],i&&(i=i.replace("-",""),t=s.a[o][i])}return{border:"2px solid "+t}}},methods:{},watch:{coordsData:function(){var t=this,e=t.coordsData.coordinate,n=t.coordsData.projection,o=r.i(u.a)(e,n,"EPSG:4326"),a={};if(t.showMapPos&&(a["MAP PROJ"]=e[1].toFixed(2)+" "+e[0].toFixed(2)),t.showWgsPos){var i=r.i(u.a)(e,n,"EPSG:4326");a["WGS 84"]=i[1].toFixed(7)+"° "+i[0].toFixed(7)+"°"}if(t.showHdms){var s=r.i(l.a)(o);a.HDMS=s}t.coordRows=a}}}},MPh8:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("7+uW"),o={dragConfig:{draggableElementSelector:null,down:!1,height:0,width:0,initialX:0,initialY:0,constraintToWindow:!0,cursorPreviousX:0,cursorPreviousY:0,draggerOffsetLeft:0,draggerOffsetTop:0,overlay:null,draggableEl:null,initialZIndex:void 0},bind:function(t,e,r){function n(t,e,r){var n=document.createElement("div");return n.setAttribute("style","\n        width: 100vw;\n        height: 100vh;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 10000;\n      "),n.addEventListener("mouseup",function(t){return u(t,e,r)}),n.addEventListener("mousedown",function(t){return s(t,e,r)}),n.addEventListener("mousemove",function(t){return p(t,e,r)}),document.body.appendChild(n),n}function a(t,e){for(var r=0;r<e.length;r++){if(e[r].id===t)return!0;if(e[r].classList&&e[r].classList.contains(t))return!0}return!1}function i(t,e){t.style.zIndex=e}function s(t,e,r){if(!r.draggableElementSelector||a(r.draggableElementSelector,t.path)){r.overlay&&r.overlay.remove(),r.width=e.offsetWidth,r.height=e.offsetHeight,r.down=!0,r.initialX=t.clientX,r.initialY=t.clientY;var o=n(t,e,r);r.overlay=o,i(e,10001)}}function u(t,e,n){n.down=!1,n.overlay&&(n.overlay.removeEventListener("mouseup",u),n.overlay.removeEventListener("mousedown",s),n.overlay.removeEventListener("mousemove",p),n.overlay.remove(),i(e,n.initialZIndex),v(e,n),r.componentInstance.$parent.top=n.draggerOffsetTop+"px",r.componentInstance.$parent.left=n.draggerOffsetLeft+"px")}function l(t,e,r){return t.offsetLeft+e.width>=window.innerWidth&&!r}function c(t,e,r){return t.offsetLeft<=0&&!r}function d(t,e,r){return t.offsetTop<=0&&!r}function f(t,e,r){return t.offsetTop+e.height>=window.innerHeight&&!r}function p(t,e,r){if(r.down){var n=r.cursorPreviousX>t.clientX,o=r.cursorPreviousX<t.clientX,a=r.cursorPreviousY<t.clientY,i=r.cursorPreviousY>t.clientY;r.constraintToWindow&&(l(e,r,n)||c(e,r,o))||(e.style.left=r.draggerOffsetLeft+(t.clientX-r.initialX)+"px"),r.constraintToWindow&&(d(e,r,a)||f(e,r,i))||(e.style.top=r.draggerOffsetTop+(t.clientY-r.initialY)+"px")}r.cursorPreviousX=t.clientX,r.cursorPreviousY=t.clientY}function v(t,e){e.draggerOffsetLeft=t.offsetLeft,e.draggerOffsetTop=t.offsetTop}if(!1!==e.value){var m=t.querySelector("div.wgu-win-title");if(m){var g=o.dragConfig;g.draggableElementSelector=e.arg||"wgu-win-title",m.style.cursor="move",t.addEventListener("mouseup",function(e){return u(e,t,g)}),t.addEventListener("mousedown",function(e){return s(e,t,g)}),t.addEventListener("mousemove",function(e){return p(e,t,g)}),v(t,g),g.initialZIndex=t.style.zIndex}}}};n.default.directive("draggable-win",o)},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),o=r("3EgV"),a=r.n(o),i=r("soLJ"),s=r("v9hS"),u=r("7zck");r.n(u);n.default.use(a.a),r("ktr9"),r("SPmS"),n.default.config.productionTip=!1;var l=document.querySelector("#app");n.default.prototype.$isEmbedded=l.hasAttribute("embedded");var c=s.a.getQueryParam("appCtx"),d="";c&&(d="-"+c.replace(/(\.\.[\/])+/g,"")),fetch("static/app-conf"+d+".json").then(function(t){return t.json()}).then(function(t){n.default.prototype.$appConfig=t,new n.default({el:"#app",template:"<wgu-app/>",components:{WguApp:i.a}})})},NkLf:function(t,e,r){"use strict";function n(t){r("Bct/")}var o=r("DcW1"),a=r("rd+6"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},Nkpt:function(t,e,r){"use strict";var n=r("ZkkH"),o=r("ZY9t"),a=r("R3+W");e.a={name:"wgu-infoclick-win",components:{"wgu-property-table":o.a,"wgu-coords-table":a.a},props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"info"},title:{type:String,required:!1,default:"Map Click Info"},draggable:{type:Boolean,required:!1,default:!0},initPos:{type:Object,required:!1}},data:function(){return{show:!1,left:this.initPos?this.initPos.left+"px":"0",top:this.initPos?this.initPos.top+"px":"0",attributeData:null,coordsData:null}},created:function(){var t=this;n.a.$on("ol-map-mounted",function(e){t.map=e})},methods:{toggleUi:function(){this.show=!this.show},registerMapClick:function(t){var e=this;!0===t?e.map.un("singleclick",e.onMapClick):e.map.on("singleclick",e.onMapClick)},onMapClick:function(t){var e=this,r=e.map.forEachFeatureAtPixel(t.pixel,function(t,e){return[t,e]});if(r){var n=r[0],o=n.getProperties();delete o.geometry,e.attributeData=o}else e.attributeData=null;e.coordsData={coordinate:t.coordinate,projection:e.map.getView().getProjection().getCode()}}},watch:{show:function(){var t=this;!0===this.show?t.registerMapClick():(t.attributeData=null,t.coordsData=null)}}}},"OC/o":function(t,e,r){"use strict";function n(t){r("dllQ")}var o=r("8kb5"),a=r("3/U1"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},OUzU:function(t,e,r){"use strict";r.d(e,"a",function(){return g});var n=r("Mdwg"),o=r("DwLH"),a=r("WiOa"),i=r("fZPI"),s=r("hGhA"),u=r("fGhu"),l=r("aUhy"),c=r("UjZP"),d=r("srNp"),f=r("Umvz"),p=r("WMwB"),v=r("fT5P"),m=r("zQ0b"),g={formatMapping:{MVT:u.a,GeoJSON:l.a,TopoJSON:c.a,KML:d.a},getInstance:function(t){if(!t.lid){var e=new Date;t.lid=e.getTime()}return"WMS"===t.type?this.createWmsLayer(t):"XYZ"===t.type?this.createXyzLayer(t):"OSM"===t.type?this.createOsmLayer(t):"VECTOR"===t.type?this.createVectorLayer(t):"VECTORTILE"===t.type?this.createVectorTileLayer(t):null},createWmsLayer:function(t){return new n.a({name:t.name,lid:t.lid,displayInLayerList:t.displayInLayerList,extent:t.extent,visible:t.visible,opacity:t.opacity,source:new o.a({url:t.url,params:{LAYERS:t.layers,TILED:t.tiled},serverType:t.serverType,attributions:t.attributions})})},createXyzLayer:function(t){return new n.a({displayInLayerList:t.displayInLayerList,extent:t.extent,source:new o.a({url:t.url,attributions:t.attributions})})},createOsmLayer:function(t){return new n.a({name:t.name,lid:t.lid,displayInLayerList:t.displayInLayerList,visible:t.visible,opacity:t.opacity,source:new a.a})},createVectorLayer:function(t){return new f.a({name:t.name,lid:t.lid,displayInLayerList:t.displayInLayerList,extent:t.extent,visible:t.visible,opacity:t.opacity,source:new p.a({url:t.url,format:new this.formatMapping[t.format](t.formatConfig),attributions:t.attributions}),style:v.a.getInstance(t.style)||m.a[t.styleRef],hoverable:t.hoverable,hoverAttribute:t.hoverAttribute})},createVectorTileLayer:function(t){return new i.a({name:t.name,lid:t.lid,displayInLayerList:t.displayInLayerList,visible:t.visible,opacity:t.opacity,source:new s.a({url:t.url,format:new this.formatMapping[t.format],attributions:t.attributions}),style:v.a.getInstance(t.style)||m.a[t.styleRef],hoverable:t.hoverable,hoverAttribute:t.hoverAttribute})}}},"P5f+":function(t,e,r){"use strict";e.a={name:"wgu-app-logo",data:function(){return{logoSrc:this.$appConfig.logo,logoSize:this.$appConfig.logoSize}}}},PCNP:function(t,e){},Pvv6:function(t,e,r){"use strict";var n=r("fZjL"),o=r.n(n),a=r("BO1k"),i=r.n(a),s=r("7+uW"),u=r("ZkkH"),l=r("i8bC"),c=r("VJFb"),d=r("OC/o"),f=r("qq5n"),p=r("lgWu"),v=r("29fi"),m=r("qUL7");e.a={name:"wgu-app",components:{"wgu-map":l.a,"wgu-app-header":c.a,"wgu-app-footer":d.a,"wgu-app-logo":f.a,"wgu-measuretool-win":p.a,"wgu-layerlist-win":v.a,"wgu-infoclick-win":m.a},data:function(){return{isEmbedded:!1,moduleWins:this.getModuleWinData(),footerTextLeft:s.default.prototype.$appConfig.footerTextLeft,footerTextRight:s.default.prototype.$appConfig.footerTextRight,showCopyrightYear:s.default.prototype.$appConfig.showCopyrightYear,baseColor:s.default.prototype.$appConfig.baseColor}},mounted:function(){this.isEmbedded=this.$isEmbedded;var t=this.$refs,e={},r=!0,n=!1,a=void 0;try{for(var l,c=i()(o()(t));!(r=(l=c.next()).done);r=!0){var d=l.value;e[d]=t[d][0]}}catch(t){n=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(n)throw a}}s.default.prototype.cmpLookup=e,u.a.$emit("app-mounted")},methods:{getModuleWinData:function(){var t=s.default.prototype.$appConfig,e=[],r=!0,n=!1,a=void 0;try{for(var u,l=i()(o()(t.modules));!(r=(u=l.next()).done);r=!0){var c=u.value,d=t.modules[c];!0===d.win&&e.push({type:c+"-win",draggable:d.draggable,initPos:d.initPos})}}catch(t){n=!0,a=t}finally{try{!r&&l.return&&l.return()}finally{if(n)throw a}}return e}}}},"R3+W":function(t,e,r){"use strict";function n(t){r("2SQl")}var o=r("L1xf"),a=r("mjTM"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},Rd3n:function(t,e){},SFme:function(t,e){},SPmS:function(t,e){},TooU:function(t,e,r){"use strict";e.a={name:"wgu-measure-type-chooser",props:{measureType:{type:String,default:"distance"}},data:function(){return{measureTypeData:this.measureType}},watch:{measureTypeData:function(t,e){this.$emit("wgu-measuretype-change",t,e)}}}},UAgb:function(t,e,r){"use strict";function n(t){r("B/BW")}var o=r("bv4e"),a=r("2F6G"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},UC7k:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.logoSrc?r("v-avatar",{staticClass:"wgu-app-logo",attrs:{size:t.logoSize,tile:!0}},[r("img",{attrs:{src:t.logoSrc,alt:"App Logo"}})]):t._e()},o=[],a={render:n,staticRenderFns:o};e.a=a},UF2A:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"measure-result"},[t._v("\n    LENGTH: "+t._s(t.distance)+"\n  ")]),t._v(" "),r("div",{staticClass:"measure-result"},[t._v("\n    AREA: "+t._s(t.area)+"\n  ")])])},o=[],a={render:n,staticRenderFns:o};e.a=a},UdpQ:function(t,e,r){"use strict";function n(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}var o=r("d7EF"),a=r.n(o),i=r("7+uW"),s=r("trid"),u=r("Lfyu"),l=r("bAyG"),c=r("Lmaf"),d=r("gsgi"),f=r("TDso"),p=r("lZ2e"),v=r("kZ1N"),m=r("ZkkH"),g=r("OUzU");e.a={name:"wgu-map",props:{color:{type:String,required:!1,default:"red darken-3"},collapsibleAttribution:{type:Boolean,default:!1},rotateableMap:{type:Boolean,required:!1,default:!1}},data:function(){return{zoom:this.$appConfig.mapZoom,center:this.$appConfig.mapCenter}},mounted:function(){var t=this;i.default.prototype.$map=t.map,m.a.$emit("ol-map-mounted",t.map),window.setTimeout(function(){t.map.setTarget(document.getElementById("ol-map-container")),t.map.updateSize(),t.setOlButtonColor(),t.setupMapHover()},200)},created:function(){var t=this,e=r.i(f.a)({altShiftDragRotate:t.rotateableMap,pinchRotate:t.rotateableMap}),n=[new c.a,new l.a({collapsible:t.collapsibleAttribution})];t.rotateableMap&&n.push(new p.a),t.map=new s.a({layers:[],controls:n,interactions:e,view:new u.a({center:t.center||[0,0],zoom:t.zoom})});var o=t.createLayers();t.map.getLayers().extend(o)},methods:{createLayers:function(){var t=this,e=[];return this.$appConfig.mapLayers.reverse().forEach(function(r){var n=g.a.getInstance(r);if(e.push(n),r.selectable){var o=new d.a({layers:[n]});o.on("select",function(t){m.a.$emit("map-selectionchange",n.get("lid"),t.selected,t.deselected)}),t.map.addInteraction(o)}}),e},setOlButtonColor:function(){var t=this;if(n(t.color))document.querySelector(".ol-zoom")&&(document.querySelector(".ol-zoom .ol-zoom-in").style.backgroundColor=t.color,document.querySelector(".ol-zoom .ol-zoom-out").style.backgroundColor=t.color),document.querySelector(".ol-rotate")&&(document.querySelector(".ol-rotate .ol-rotate-reset").style.backgroundColor=t.color);else{var e=t.color.toString().trim().split(" ",2),r=a()(e,2),o=r[0],i=r[1];document.querySelector(".ol-zoom")&&(document.querySelector(".ol-zoom .ol-zoom-in").classList.add(o),document.querySelector(".ol-zoom .ol-zoom-in").classList.add(i),document.querySelector(".ol-zoom .ol-zoom-out").classList.add(o),document.querySelector(".ol-zoom .ol-zoom-out").classList.add(i)),document.querySelector(".ol-rotate")&&(document.querySelector(".ol-rotate .ol-rotate-reset").classList.add(o),document.querySelector(".ol-rotate .ol-rotate-reset").classList.add(i))}},setupMapHover:function(){var t=this,e=t.map,r=void 0,n=void 0;n=document.createElement("span"),n.classList.add("wgu-hover-tooltiptext"),e.getTarget().append(n),r=new v.a({element:n,autoPan:!0,autoPanAnimation:{duration:250}}),e.addOverlay(r),e.on("pointermove",function(t){var o=void 0,a=e.getFeaturesAtPixel(t.pixel,{layerFilter:function(t){return t.get("hoverable")&&(o=t.get("hoverAttribute")),t.get("hoverable")}});if(!a||!o)return o=null,n.innerHTML=null,void r.setPosition(void 0);var i=a[0],s=i.get(o);n.innerHTML=s,r.setPosition(t.coordinate)})}}}},UkhJ:function(t,e,r){"use strict";function n(t){r("Rd3n")}var o=r("7OTJ"),a=r("oiyQ"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},VJFb:function(t,e,r){"use strict";function n(t){r("ZcPn")}var o=r("GEkf"),a=r("YgTa"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},VLBH:function(t,e,r){"use strict";var n=r("WFjz"),o=r("fIFi");e.a={name:"wgu-layerlist",mixins:[n.a],props:{},data:function(){return{layerItems:[]}},methods:{onMapBound:function(){var t=this;t.createLayerItems(),t.map.getLayers().on("change:length",function(e){t.createLayerItems()})},createLayerItems:function(){var t=this.map.getLayers();t=t.getArray().slice(0).reverse();var e=[];t.forEach(function(t){!1!==t.get("displayInLayerList")&&e.push({title:t.get("name"),lid:t.get("lid"),visible:t.getVisible()})}),this.layerItems=e},onItemClick:function(t,e){e.visible=!e.visible,this.layerVizChanged()},layerVizChanged:function(){var t=this;t.layerItems.forEach(function(e,r){var n=o.a.getLayerByLid(e.lid,t.map);n&&n.setVisible(e.visible)})}}}},VT4C:function(t,e,r){"use strict";var n=r("Zrlr"),o=r.n(n),a=r("wxAW"),i=r.n(a),s=r("aUJj"),u=r("nxYM"),l=r("WMwB"),c=r("Umvz"),d=r("Mjwz"),f=r("00zS"),p=r("uli1"),v=r("lUmj"),m=function(){function t(e,r){o()(this,t),this.map=null,this.map=e,this.measureConf=r||{}}return i()(t,[{key:"createMeasureLayer",value:function(){var t=this,e=t.measureConf,r=new l.a,n=new c.a({name:"Measure Layer",displayInLayerList:!1,source:r,style:new d.a({fill:new v.a({color:e.fillColor||"rgba(255, 255, 255, 0.2)"}),stroke:new f.a({color:e.strokeColor||"rgba(0, 0, 0, 0.5)",width:2})})});t.map.addLayer(n),t.source=r}},{key:"addInteraction",value:function(t,e){var n=this,o=n.measureConf;n.draw&&n.removeInteraction();var a="area"===t?"Polygon":"LineString",i=new s.a({source:n.source,type:a,style:new d.a({fill:new v.a({color:o.sketchFillColor||"rgba(255, 255, 255, 0.2)"}),stroke:new f.a({color:o.sketchStrokeColor||"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new p.a({radius:5,stroke:new f.a({color:o.sketchVertexStrokeColor||"rgba(0, 0, 0, 0.7)"}),fill:new v.a({color:o.sketchVertexFillColor||"rgba(255, 255, 255, 0.2)"})})})});n.map.addInteraction(i);var l,c;i.on("drawstart",function(t){n.source.clear(),c=t.feature,l=n.map.on("click",function(t){var r=c.getGeometry();e(r)})},n),i.on("drawend",function(){c=null,r.i(u.a)(l)},n),n.draw=i}},{key:"removeInteraction",value:function(){var t=this;t.draw&&t.map.removeInteraction(t.draw),t.source&&t.source.clear()}}]),t}();e.a=m},WFjz:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("ZkkH"),o={created:function(){var t=this;this.$map?(this.map=this.$map,this.onMapBound&&this.onMapBound()):n.a.$on("ol-map-mounted",function(e){t.map=e,t.onMapBound&&t.onMapBound()})}}},WaAR:function(t,e,r){"use strict";var n=r("UkhJ");e.a={name:"wgu-helpwin-btn",components:{"wgu-helpwin":n.a},props:{color:{type:String,required:!1,default:"red darken-3"},icon:{type:String,required:!1,default:"help"},text:{type:String,required:!1},headline:{type:String,required:!1},content:{type:String,required:!1},infoLink:{type:String,required:!1},infoLinkText:{type:String,required:!1}},data:function(){return{show:!1}}}},YgTa:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{staticClass:"wgu-app-toolbar white--text",attrs:{color:t.color,fixed:"",app:"","clipped-right":""}},[t._t("wgu-tb-start"),t._v(" "),r("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),t._t("wgu-tb-after-title"),t._v(" "),r("v-spacer"),t._v(" "),t._t("wgu-tb-before-auto-buttons"),t._v(" "),t._l(t.tbButtons,function(e,n){return[r(e.type,{key:n,tag:"component",attrs:{icon:e.icon,text:e.text,color:t.color}})]}),t._v(" "),t._t("wgu-tb-after-auto-buttons"),t._v(" "),t.menuButtons.length?r("v-menu",{attrs:{"offset-y":""}},[r("v-btn",{attrs:{slot:"activator",icon:"",dark:""},slot:"activator"},[r("v-icon",{attrs:{medium:""}},[t._v("menu")])],1),t._v(" "),r("v-list",[t._l(t.menuButtons,function(e,n){return[r("v-list-tile",[r(e.type,{key:n,tag:"component",attrs:{icon:e.icon,text:e.text,color:t.color}})],1)]})],2)],1):t._e(),t._v(" "),t._t("wgu-tb-end")],2)},o=[],a={render:n,staticRenderFns:o};e.a=a},"ZR/a":function(t,e){},ZY9t:function(t,e,r){"use strict";function n(t){r("enGR")}var o=r("v4OI"),a=r("DP51"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},ZcPn:function(t,e){},ZkkH:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("7+uW"),o=new n.default},bv4e:function(t,e,r){"use strict";var n=r("7+uW"),o=r("29fi"),a=r("ZkkH");e.a={name:"wgu-layerlist-btn",components:{"wgu-layerlist-win":o.a},props:{icon:{type:String,required:!1,default:"layers"},text:{type:String,required:!1,default:""}},data:function(){return{moduleName:"wgu-layerlist"}},created:function(){var t=this;a.a.$on("app-mounted",function(){t.win=n.default.prototype.cmpLookup[t.moduleName+"-win"]})},methods:{toggleUi:function(){this.win.show=!this.win.show}}}},cspx:function(t,e,r){"use strict";function n(t){r("PCNP")}var o=r("F+zM"),a=r("UF2A"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},dllQ:function(t,e){},enGR:function(t,e){},fIFi:function(t,e,r){"use strict";var n={getLayersBy:function(t,e,r){if(!r)return console.warn("No OL map passed to LayerUtil.getLayersBy - no layer detection possible!"),[];var n=[];return r.getLayers().forEach(function(r){r.get(t)===e&&n.push(r)}),n},getLayerByLid:function(t,e){return n.getLayersBy("lid",t,e)[0]},zoomToLayerExtent:function(t,e){if(t&&t.getSource().getExtent&&e){var r=t.getSource().getExtent();e.getView().fit(r)}}};e.a=n},fT5P:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("beD/"),o={getInstance:function(t){if(t)return t.radius?o.createPointStyle(t):t.fillColor?o.createPolygonStyle(t):t.strokeColor||t.strokeWidth?o.createLineStyle():void 0},createPointStyle:function(t){return new n.a({image:new n.b({radius:t.radius,fill:o.createFill(t),stroke:o.createStroke(t)})})},createLineStyle:function(t){return new n.a({stroke:o.createStroke(t)})},createPolygonStyle:function(t){var e=o.createLineStyle(t);return e.setFill(o.createFill(t)),e},createStroke:function(t){return new n.c({color:t.strokeColor,width:t.strokeWidth})},createFill:function(t){return new n.d({color:t.fillColor})}}},g6hO:function(t,e){},i8bC:function(t,e,r){"use strict";function n(t){r("uyrQ")}var o=r("UdpQ"),a=r("+pgC"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},irkU:function(t,e,r){"use strict";var n=r("7+uW"),o=r("lgWu"),a=r("ZkkH");e.a={name:"wgu-measuretool-btn",components:{"wgu-measuretool-win":o.a},props:{icon:{type:String,required:!1,default:"photo_size_select_small"},text:{type:String,required:!1}},data:function(){return{moduleName:"wgu-measuretool"}},created:function(){var t=this;a.a.$on("app-mounted",function(){t.win=n.default.prototype.cmpLookup[t.moduleName+"-win"]})},methods:{toggleUi:function(){this.win.show=!this.win.show}}}},"k+7Q":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win",value:t.draggable,expression:"draggable"}],staticClass:"wgu-infoclick-win",style:{left:t.left,top:t.top}},[r("v-toolbar",{attrs:{color:t.color,dark:""}},[r("v-toolbar-side-icon",[r("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),r("v-toolbar-title",{staticClass:"wgu-win-title"},[t._v(t._s(t.title))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-side-icon",{on:{click:function(e){t.show=!1}}},[r("v-icon",[t._v("close")])],1)],1),t._v(" "),r("v-card-title",{staticClass:"wgu-infoclick-win-title",attrs:{"primary-title":""}},[this.attributeData||this.coordsData?t._e():r("div",{staticClass:"no-data"},[t._v("\n      Click on the map to get information for the clicked map position.\n    ")]),t._v(" "),r("wgu-property-table",{attrs:{properties:t.attributeData,color:t.color}}),t._v(" "),r("wgu-coords-table",{attrs:{coordsData:t.coordsData,color:t.color}})],1)],1):t._e()},o=[],a={render:n,staticRenderFns:o};e.a=a},ktr9:function(t,e){},lgWu:function(t,e,r){"use strict";function n(t){r("B/F2")}var o=r("4z3x"),a=r("EJzH"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},mjTM:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.coordRows?r("table",{staticClass:"wgu-coordstable",style:t.tableStyles},[t._m(0),t._v(" "),r("tbody",t._l(t.coordRows,function(e,n){return r("tr",[r("td",{staticClass:"key-td"},[t._v("\n        "+t._s(n)+"\n      ")]),t._v(" "),r("td",{staticClass:"val-td"},[t._v("\n        "+t._s(e)+"\n      ")])])}),0)]):t._e()},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr")])}],a={render:n,staticRenderFns:o};e.a=a},mucN:function(t,e,r){"use strict";function n(t){r("g6hO")}var o=r("VLBH"),a=r("sxSt"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},oiyQ:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"wgu-helpwin"},[r("v-toolbar",{attrs:{color:t.color,dark:""}},[r("v-toolbar-side-icon",[r("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),r("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-side-icon",{on:{click:t.onWinXClose}},[r("v-icon",[t._v("close")])],1)],1),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.headline))]),t._v(" "),r("div",{},[r("span",{domProps:{innerHTML:t._s(t.content)}})])])]),t._v(" "),r("v-card-actions",[r("a",{staticClass:"info-link red--text darken3",attrs:{href:t.infoLink,target:"_blank"}},[t._v(t._s(t.infoLinkText))])])],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},qUL7:function(t,e,r){"use strict";function n(t){r("ssQy")}var o=r("Nkpt"),a=r("k+7Q"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},qq5n:function(t,e,r){"use strict";function n(t){r("r/Zj")}var o=r("P5f+"),a=r("UC7k"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},qqRY:function(t,e,r){"use strict";function n(t){r("GJSh")}var o=r("ypcs"),a=r("6jvY"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},"r/Zj":function(t,e){},"rd+6":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[r("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n  "+t._s(t.text)+"\n")],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},sjzN:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"300","hide-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("v-btn",{attrs:{slot:"activator",icon:"",dark:""},slot:"activator"},[r("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),r("wgu-helpwin",{ref:"helpwin",attrs:{color:t.color,icon:t.icon,title:t.text,headline:t.headline,content:t.content,infoLink:t.infoLink,infoLinkText:t.infoLinkText},on:{winxclose:function(e){t.show=!1}}})],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},soLJ:function(t,e,r){"use strict";var n=r("Pvv6"),o=r("tvom"),a=r("VU/8"),i=a(n.a,o.a,!1,null,null,null);e.a=i.exports},ssQy:function(t,e){},sxSt:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",t._l(t.layerItems,function(e){return r("v-list-tile",{key:e.lid,staticClass:"wgu-layerlist-item",on:{click:function(r){return t.onItemClick(r,e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.visible,expression:"layerItem.visible"}],key:e.lid,staticClass:"wgu-layer-viz-cb",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.visible)?t._i(e.visible,null)>-1:e.visible},on:{change:[function(r){var n=e.visible,o=r.target,a=!!o.checked;if(Array.isArray(n)){var i=t._i(n,null);o.checked?i<0&&t.$set(e,"visible",n.concat([null])):i>-1&&t.$set(e,"visible",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(e,"visible",a)},t.layerVizChanged]}}),t._v(" "),r("v-list-tile-content",{staticClass:"black--text"},[r("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)},o=[],a={render:n,staticRenderFns:o};e.a=a},tvom:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{class:{"wgu-app":!0,"wgu-app-embedded":t.isEmbedded},attrs:{id:"wgu-app","data-app":""}},[r("wgu-app-header",{attrs:{color:t.baseColor}}),t._v(" "),r("wgu-app-logo"),t._v(" "),r("v-content",[r("v-container",{staticStyle:{padding:"0"},attrs:{id:"ol-map-container",fluid:"","fill-height":""}},[r("wgu-map",{attrs:{color:t.baseColor}})],1)],1),t._v(" "),t._l(t.moduleWins,function(e,n){return[r(e.type,{key:n,ref:e.type,refInFor:!0,tag:"component",attrs:{color:t.baseColor,draggable:e.draggable,initPos:e.initPos}})]}),t._v(" "),r("wgu-app-footer",{attrs:{color:t.baseColor,footerTextLeft:t.footerTextLeft,footerTextRight:t.footerTextRight,showCopyrightYear:t.showCopyrightYear}})],2)},o=[],a={render:n,staticRenderFns:o};e.a=a},uXki:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[r("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n  "+t._s(t.text)+"\n")],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},uwYZ:function(t,e,r){"use strict";function n(t){r("ZR/a")}var o=r("irkU"),a=r("uXki"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},uyrQ:function(t,e){},v4OI:function(t,e,r){"use strict";function n(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}var o=r("d7EF"),a=r.n(o),i=r("IHMs"),s=r.n(i);e.a={name:"wgu-property-table",props:{color:{type:String,required:!1,default:"red darken-3"},properties:{type:Object}},computed:{tableStyles:function(){var t=this.color;if(!n(this.color)){var e=this.color.toString().trim().split(" ",2),r=a()(e,2),o=r[0],i=r[1];t=s.a[o],i&&(i=i.replace("-",""),t=s.a[o][i])}return{border:"2px solid "+t}}}}},v9hS:function(t,e,r){"use strict";var n=r("fZjL"),o=r.n(n),a={getQueryParams:function(t){t||(t=document.location.search),t=t.split("+").join(" ");for(var e=/[?&]?([^=]+)=([^&]*)/g,r={},n=void 0;n=e.exec(t);)r[decodeURIComponent(n[1])]=decodeURIComponent(n[2]);return r},getQueryParam:function(t,e){var r=this.getQueryParams(e),n=void 0;return o()(r).forEach(function(e){if(e===t)return void(n=r[e])}),n}};e.a=a},"w/12":function(t,e,r){"use strict";function n(t){r("7Jjb")}var o=r("TooU"),a=r("CD2r"),i=r("VU/8"),s=n,u=i(o.a,a.a,!1,s,null,null);e.a=u.exports},ypcs:function(t,e,r){"use strict";var n=r("WFjz");e.a={name:"wgu-zoomtomaxextent-btn",mixins:[n.a],props:{icon:{type:String,required:!1,default:"zoom_out_map"},text:{type:String,required:!1,default:""}},methods:{onClick:function(){var t=this.$appConfig.mapCenter,e=this.$appConfig.mapZoom;this.map.getView().setCenter(t),this.map.getView().setZoom(e)}}}},zQ0b:function(t,e,r){"use strict";var n=r("Mjwz"),o=r("00zS"),a=r("lUmj");e.a={shopStyle:new n.a({stroke:new o.a({color:"red",width:3.25})}),neWorldMvt:new n.a({stroke:new o.a({color:"gray",width:1}),fill:new a.a({color:"rgba(20,20,20,0.1)"})})}}},["NHnr"]);
//# sourceMappingURL=app.37ccb3082e2d82b0a376.js.map