(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=m(a),o=(m(n(81)),m(n(462))),s=m(n(82)),c=m(n(28)),u=(m(n(475)),m(n(1255))),f=m(n(1256)),d=m(n(1257)),p=m(n(1258));function m(e){return e&&e.__esModule?e:{default:e}}var v=c.default._css,h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r={inline:function(){return n.tplInline(!1)},"inline-reverse":function(){return n.tplInline(!0)},"inline-full":function(){return n.tplInlineFull(!1)},"inline-full-reverse":function(){return n.tplInlineFull(!0)},"inline-full-map":function(){return n.tplInlineFullMap(!1)},"inline-full-map-reverse":function(){return n.tplInlineFullMap(!0)},stack:function(){return n.tplStack(!1)}};return n.state={mepRender:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"onClickMedia",value:function(e){if("edit"===this.props.mode){var t={type:"media",index:0};"click_image"===e.action?this.props.onAction({action:"click_img",data:t}):(e.params.type="media",e.params.index=0,this.props.onAction(e))}}},{key:"tplInlineFull",value:function(e){var t=this,n=this.props,i=(n.prefixCss,n.blocks),a=n.mode,c=n.cfgToolbarMedia,p=i.find((function(e){return"media"===e.name})).item,m=i.find((function(e){return"title"===e.name})),v={};p.img&&(v={objectFit:"cover",width:"100%",height:"100%"});var h=r({},this.props,{useContainerCss:!1,canResize:!1,valPaddingB:0,valPaddingT:0}),b="order-"+(e?1:0),y="order-"+(e?0:1),g=e?"py-3 ml-sm-3 pl-3 mr-sm-3 ":"py-3 mr-sm-3 pr-3 ml-sm-3 ";return l.default.createElement(o.default,r({title:m},h),l.default.createElement("div",null,l.default.createElement("div",{className:"row m-0"},l.default.createElement("div",{className:"col-12 col-sm p-0 "+b},l.default.createElement(s.default,{item:p,cfgToolbar:c,onAction:function(e){return t.onClickMedia(e)},mode:a,style:v})),l.default.createElement("div",{className:"col-12 p-0 col-sm d-flex justify-content-center align-items-center "+y},l.default.createElement("div",{className:""+g},l.default.createElement(d.default,this.props),l.default.createElement(u.default,this.props),l.default.createElement(f.default,this.props))))))}},{key:"tplInlineFullMap",value:function(e){var t=this,n=this.props,i=(n.prefixCss,n.blocks),a=(n.mode,n.cfgToolbarMedia,i.find((function(e){return"media"===e.name})).item),s=i.find((function(e){return"title"===e.name})),c=r({},this.props,{useContainerCss:!1,canResize:!1,valPaddingB:0,valPaddingT:0}),m="order-"+(e?1:0),v="order-"+(e?0:1),h=e?"py-5 ml-sm-3 pl-3 mr-sm-3 ":"py-5 mr-sm-3 pr-3 ml-sm-3 ",b={width:"100%",height:"100%",border:"0px"},y=(this.props.blocks.find((function(e){return"socialLinks"===e.name}))||{socialLinks:{data:[]}}).socialLinks,g={mode:this.props.mode,socialLinks:y,prefixCss:this.props.prefixCss,cfgPopover:{pages:!1,link:!0,icon:!1,active:"link",preferPlace:"above"},onChange:function(e){e&&e.action&&"onChangeCta"===e.action&&t.props.onAction({action:"onChangeCtaSocial",params:e.params})}};return l.default.createElement(o.default,r({title:s},c),l.default.createElement("div",null,l.default.createElement("div",{className:"row m-0"},l.default.createElement("div",{className:"col-12 col-sm p-0 "+m,style:{minHeight:"350px"}},l.default.createElement("div",{className:"embed-responsive h-100 w-100 "},a.src&&l.default.createElement("div",null,l.default.createElement("div",{style:b},l.default.createElement("iframe",{style:b,className:"embed-responsive-item d-block",src:a.src,allowtransparency:"true",allowFullScreen:!0}))))),l.default.createElement("div",{className:"col-12 p-0 col-sm d-flex justify-content-center align-items-center "+v},l.default.createElement("div",{className:""+h},l.default.createElement(d.default,this.props),l.default.createElement(u.default,this.props),l.default.createElement(p.default,g),l.default.createElement(f.default,this.props))))))}},{key:"tplStack",value:function(){var e=this,t=this.props,n=t.prefixCss,r=t.blocks,i=t.mode,a=t.cfgToolbarMedia,c=r.find((function(e){return"media"===e.name})).item,p=(r.find((function(e){return"title"===e.name}))||{title:null}).title;return l.default.createElement(o.default,this.props,l.default.createElement(d.default,this.props),l.default.createElement("div",{className:v(n,"mb-3",p&&"mt-3")},l.default.createElement(s.default,{item:c,cfgToolbar:a,onAction:function(t){return e.onClickMedia(t)},mode:i})),l.default.createElement(u.default,this.props),l.default.createElement(f.default,this.props))}},{key:"tplInline",value:function(e){var t=this,n=this.props,i=n.prefixCss,a=n.blocks,c=n.mode,d=n.cfgToolbarMedia,p=n.mepOpts,m=a.find((function(e){return"media"===e.name})).item,h=(a.find((function(e){return"title"===e.name}))||{title:null}).title;return l.default.createElement(o.default,r({title:h},this.props),l.default.createElement("div",{className:v(i,"row","align-items-center")},l.default.createElement("div",{className:v(i,"col-12",p.columns.text,"m-auto",!e&&"order-2",!e&&"order-md-1",e&&"order-2")},l.default.createElement(u.default,this.props),l.default.createElement(f.default,this.props)),m&&l.default.createElement("div",{className:v(i,"col-12",p.columns.media,"mb-4","mb-md-0",!e&&"order-1",!e&&"order-md-2",e&&"order-1")},l.default.createElement(s.default,{item:m,cfgToolbar:d,onAction:function(e){return t.onClickMedia(e)},mode:c}))))}},{key:"render",value:function(){var e=this.props.mep,t=this.state.mepRender;return t[e]&&t[e]()||t.inline()}}]),t}(a.Component);h.defaultProps={prefixCss:"",mode:"view",sectionCss:"jumbotron-fluid",containerCss:"container",mep:"inline",cfgToolbarMedia:{visible:!0,image:!0,video:!0,params:!0},blocks:[],mepOpts:{columns:{text:"col-md-6",media:"col-md-6"}},onAction:function(){}},h.displayName="InlineMediaTextRcpt",t.default=h},1255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),a=((r=i)&&r.__esModule,n(823));var l=function(e){var t=e.blocks,n=e.mode,r=e.prefixCss,i=e.onAction,l=(t.find((function(e){return"description"===e.name}))||{description:null}).description;return l&&!1==!l.visible&&(0,a.getBlockTxt)(n,l,r,i)||null};l.displayName="WrapperDescription",t.default=l},1256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(0)),i=l(n(28)),a=l(n(81));function l(e){return e&&e.__esModule?e:{default:e}}var o=i.default._css,s={left:"text-left",center:"text-center",right:"text-right"},c=function(e){var t=e.prefixCss,n=e.blocks,i=e.mode,l=e.onAction,c=e.btnAlign,u=e.mep,f=n.filter((function(e){return"cta"===e.name})),d=s[c]||("stack"!==u?s.left:s.center);return f.length>0&&r.default.createElement("div",{className:o(t,d)+" inline-media-btns"},f.map((function(e,n){return r.default.createElement(a.default,{key:n,prefixCss:t,mode:i,cta:e,onAction:l})})))||null};c.displayName="WrapperButtons",t.default=c},1257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),a=((r=i)&&r.__esModule,n(823));var l=function(e){var t=e.blocks,n=e.mode,r=e.prefixCss,i=e.onAction,l=(t.find((function(e){return"title"===e.name}))||{title:null}).title;return l&&!1==!l.visible&&(0,a.getBlockTitle)(n,l,r,i)||null};l.displayName="WrapperTitle",t.default=l},1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=o(i),l=o(n(81));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"onChange",value:function(e){this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCss,r=t.socialLinks,i=t.cfgPopover,o=t.mode;return a.default.createElement("div",{className:"d-flex flex-row justify-content-center"},r.data.map((function(t,r){return a.default.createElement(l.default,{key:r,useIcon:!0,showInputEditor:!1,cfgPopover:i,prefixCss:n,mode:o,cta:t,onAction:function(t){return e.onChange(t)}})})))}}]),t}(i.Component);s.defaultProps={prefixCss:"",mode:"view",socialLinks:{order:4,visible:!0,useIcon:!0,data:[{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-facebook fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:0},{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-twitter fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:1},{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-google-plus fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:2},{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-pinterest fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:3},{txt:"",css:"",link:"",icon:{active:!0,css:"fab fa-instagram fa-2x mx-2"},img:{height:"",path:""},visible:!0,order:4}]}},s.displayName="WrapperSocialMediaRcpt",t.default=s},1379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(1254),a=(r=i)&&r.__esModule?r:{default:r};t.default=a.default},823:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEditor=void 0,t.getBlockTitle=function(e,t,n,i){switch(e){case"view":return r.default.createElement("div",{className:t.class||t.css,dangerouslySetInnerHTML:{__html:t.txt}});case"edit":return r.default.createElement("div",{className:t.class||t.css},l(t.txt,{name:"title",key:"title"},i))}},t.getBlockTxt=function(e,t,n,i){switch(e){case"view":return r.default.createElement("div",{className:t.class||t.css,dangerouslySetInnerHTML:{__html:t.txt}});case"edit":return r.default.createElement("div",{className:t.class||t.css}," ",l(t.txt,{name:"description",key:"description"},i))}};var r=a(n(0)),i=a(n(475));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n){return r.default.createElement(i.default,{content:e,onAction:function(e){return n({action:"evt_draft",params:e})},block:t})}t.getEditor=l}}]);