(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1320:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),a=p(r),s=p(n(1321)),l=p(n(35)),c=p(n(149)),u=p(n(528)),f=p(n(564));function p(e){return e&&e.__esModule?e:{default:e}}var m=l.default._css,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.UiDescriptionAndRS=function(e){return a.default.createElement("div",{className:"col-12 my-2"},a.default.createElement("div",{className:"row d-flex justify-content-center"},n.getDescription("col-md-6",0),n.getToolbarRS("col-md-6 d-flex align-items-center justify-content-center",1)))},n.state={mepRender:{inline:function(){return n.mepInline(!1)},"inline-copyright-bottom":function(){return n.mepInline(!0)},stack:function(){return n.mepStack()},column:function(){return n.mepColumn(4)},"column-header":function(){return n.mepColumn(4,!0)},"column-map":function(){return n.mepColumnMap(4)},"column-map-header":function(){return n.mepColumnMap(4,!0)},"column-logo-left":function(){return n.mepColumnLogo()},"column-logo-right":function(){return n.mepColumnLogo(!1)},"column-logo-left-header":function(){return n.mepColumnLogo(!0,!0)},"column-logo-right-header":function(){return n.mepColumnLogo(!1,!0)}}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getPrefixCss",value:function(){return this.props.prefixCss}},{key:"onActionToolbarRs",value:function(e){this.props.onAction(e)}},{key:"getToolbarRS",value:function(e,t){var n=this,o=(this.props.blocks.find((function(e){return"socialLinks"===e.name}))||{socialLinks:{data:[]}}).socialLinks,i={mode:this.props.mode,socialLinks:o,prefixCss:this.props.prefixCss,cfgPopover:this.props.cfgPopover,onChange:function(e){return n.onActionToolbarRs(e)}};return o.data.length>0&&o.visible&&a.default.createElement("div",{key:t,className:m(this.props.prefixCss,e)},a.default.createElement("div",{className:m(this.props.prefixCss,"order-"+o.order+" footer-item")},a.default.createElement(s.default,i)))||null}},{key:"handleClick",value:function(e){"edit"===this.props.mode&&e.target&&"IMG"===e.target.nodeName&&(e.preventDefault(),e.stopPropagation())}},{key:"getLogo",value:function(e){var t=this,n=(this.props.blocks.find((function(e){return"media"===e.name}))||{item:{img:{visible:!1}}}).item;return""===n.img.class&&(n.img.class="footer__logo"),n.alt="website logo",n.height=null,n.visible=n.img.visible,n.link={link:"/",target:"_self"},n.img.visible&&a.default.createElement("div",{className:m(this.props.prefixCss,e)},a.default.createElement(c.default,{mode:this.props.mode,onAction:function(e){return t.clickOnImg(e)},item:n,tpl:"imgLink"}))||null}},{key:"getCopyright",value:function(e,t){var n=this,o=(this.props.blocks.find((function(e){return"copyright"===e.name}))||{copyright:{visible:!1}}).copyright,i=m(this.props.prefixCss,e);return"view"===this.props.mode?o.visible&&a.default.createElement("div",{key:t,className:i,dangerouslySetInnerHTML:{__html:o.txt}})||null:o.visible&&a.default.createElement("div",{key:t,className:i},a.default.createElement(f.default,{content:o.txt,block:{name:"copyright",index:0,key:"copyright"},onAction:function(e){return n.props.onAction({action:"evt_draft",params:e})}}))||null}},{key:"getDescription",value:function(e,t){var n=this,o=(this.props.blocks.find((function(e){return"description"===e.name}))||{description:{visible:!1}}).description,i=m(this.props.prefixCss,e);return"view"===this.props.mode?o.visible&&a.default.createElement("div",{key:t,className:i,dangerouslySetInnerHTML:{__html:o.txt}})||null:o.visible&&a.default.createElement("div",{key:t,className:i},a.default.createElement(f.default,{content:o.txt,block:{name:"description",index:0,key:"description"},onAction:function(e){return n.props.onAction({action:"evt_draft",params:e})}}))||null}},{key:"getColumnsText",value:function(e,t){var n=this,o=(this.props.blocks.find((function(e){return"columnsText"===e.name}))||{columnsText:{visible:!1,data:[]}}).columnsText,i=m(this.props.prefixCss,t),r={name:"columnsText",index:e,key:"data",isInSubBlock:!0},s=o.data[e].txt;return"view"===this.props.mode?o.visible&&a.default.createElement("div",{key:e,className:i,dangerouslySetInnerHTML:{__html:s}})||null:o.visible&&a.default.createElement("div",{key:e,className:i},a.default.createElement(f.default,{content:s,block:r,onAction:function(e){return n.props.onAction({action:"evt_draft",params:e})}}))||null}},{key:"clickOnImg",value:function(e){"edit"===this.props.mode&&this.props.onAction({action:"click_img",data:{type:"media",index:0}})}},{key:"mepInline",value:function(e){var t="col-sm-12 col-md m-auto text-center p-1";return a.default.createElement("div",null,a.default.createElement("div",{className:"row"},this.getLogo(t),this.getDescription(t),this.getToolbarRS(t),!e&&this.getCopyright(t)),e&&this.getCopyright(t)&&a.default.createElement("div",{className:"row"},this.getCopyright(t)))}},{key:"mepStack",value:function(){var e="col-sm-12 m-auto text-center p-1";return a.default.createElement("div",{className:"row"},this.getLogo(e),this.getDescription(e),this.getToolbarRS(e),this.getCopyright(e))}},{key:"mepColumn",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="col-sm-12 m-auto p-1",o="col-sm-12 col-md-"+12/e+" pt-2",i=[],r=0;r<e;r++)i.push(this.getColumnsText(r,o));return a.default.createElement("div",null,t&&[a.default.createElement("div",{key:0,className:"row d-flex align-items-center"},this.getLogo(n+" text-center order-0")),a.default.createElement("div",{key:1,className:"row d-flex align-items-center justify-content-center"},this.UiDescriptionAndRS())],a.default.createElement("div",{className:"row"},!t&&this.getLogo(n+" text-center order-0"),i,!t&&this.UiDescriptionAndRS(),this.getCopyright(n)))}},{key:"mepColumnLogo",value:function(){for(var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="col-sm-12 col-md-3 pt-2",o=[],i=0;i<3;i++)o.push(this.getColumnsText(i,n));var r=this.getLogo("col-md-3 d-flex align-items-center justify-content-center");return a.default.createElement("div",{className:"row"},t&&this.UiDescriptionAndRS(),e&&r,o,!e&&r,!t&&this.UiDescriptionAndRS(),this.getCopyright("col-md-12",0))}},{key:"mepColumnMap",value:function(){for(var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o="col-sm-12 m-auto p-1",i=this.props.blocks.find((function(e){return"map"===e.name}))||{map:{val:"Paris"}},r=i.map,s="col-sm-12 col-md-6 pt-2",l=[],u=0;u<t;u++)l.push(this.getColumnsText(u,s));var f={tpl:"iframe",visible:!0,src:"https://www.google.com/maps?q="+r.val+"&ie=UTF8&output=embed",srcOriginal:r.val,embedCss:"embed-responsive-1by1"};return a.default.createElement("div",{className:"row"},this.getLogo(o+" text-center order-0"),n&&this.UiDescriptionAndRS(),a.default.createElement("div",{className:"col-12 mb-3"},a.default.createElement("div",{className:"row d-flex align-items-center"},a.default.createElement("div",{className:"col-12 col-md-6"},a.default.createElement("div",{className:"row"},l)),a.default.createElement("div",{className:"col-12 col-md-6"},a.default.createElement(c.default,{cfgToolbar:{visible:!0,map:!0},mode:this.props.mode,onAction:function(t){return e.props.onAction(t)},item:f,tpl:"iframe"})))),!n&&this.UiDescriptionAndRS(),this.getCopyright("col-sm-12"))}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCss,i=t.sectionCss,r=t.containerCss,s=t.mep,l=(t.bg,this.state.mepRender),c=l[s]&&l[s]()||l.inline();return a.default.createElement("footer",{onClick:function(t){return e.handleClick(t)},className:i},a.default.createElement(u.default,o({title:{active:!1},usePaddingY:!0,usePaddingX:!1,idSection:"footer_primary",useContainerCss:!1,rcpt:"footer"},this.props),a.default.createElement("div",{className:m(n,"py-3")},a.default.createElement("div",{className:r},c))))}}]),t}(r.Component);d.defaultProps={mode:"view",cfgPopover:{pages:!1,link:!0,icon:!1,active:"link",preferPlace:"above"},prefixCss:"",sectionCss:"",containerCss:"container",mep:"inline",bg:{class:"bg-light",img:{path:"",class:""}},blocks:[{name:"media",item:{alt:"website logo",height:75,order:0,img:{path:"http://www.wifeo.com/v5/img/logo-wifeo-400.svg",class:"",tpl:"imgLink",link:"/",visible:!0}}},{name:"copyright",copyright:{order:2,txt:'© 2018 Copyright: <a href="https://www.wifeo.com/"> Wifeo.com</a>',visible:!0}},{name:"description",description:{order:1,txt:"<strong>Wifeo</strong>",visible:!0}},{socialLinks:{order:4,visible:!0,data:[{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-facebook fa-2x mx-2"},img:{height:"",path:""},visible:!0,use:"icon",order:0}]},name:"socialLinks"}],valPaddingB:1,valPaddingT:1,onAction:function(e){return console.log(e)}},d.displayName="FooterRcpt",t.default=d},1321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),r=s(i),a=s(n(148));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"onChange",value:function(e){this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCss,o=t.socialLinks,i=t.cfgPopover,s=t.mode;return r.default.createElement("div",{className:"d-flex flex-row justify-content-center"},o.data.map((function(t,o){return r.default.createElement(a.default,{key:o,useIcon:!0,showInputEditor:!1,cfgPopover:i,prefixCss:n,mode:s,cta:t,onAction:function(t){return e.onChange(t)}})})))}}]),t}(i.Component);l.defaultProps={prefixCss:"",mode:"view",socialLinks:{order:4,visible:!0,useIcon:!0,data:[{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-facebook fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:0},{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-twitter fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:1},{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-google-plus fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:2},{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-pinterest fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:3},{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-instagram fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:4}]}},t.default=l},1442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(1320),r=(o=i)&&o.__esModule?o:{default:o};t.default=r.default}}]);