(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1048:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(965),r=n.n(o),s=n(734),c=n(240),l=n.n(c),u=n(123),d=(n(980),n(982),n(16)),m=n.n(d),f=n(993);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function h(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=P(e);if(t){var a=P(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){E(e,t,n[t])}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(988);var A=m.a._css,_=m.a._getSrcSet,N=m.a._store.getEnv(),x=N.scheme,I=N.domain,R=N.subdomain,j=N.apiProd,C=N.domainApi,T=j?R:"gallerie",z="".concat(x,"://").concat(T,".").concat(j?C:I).replace("__API__","gallerie"),D=l.a.CancelToken;function M(e){var t=e.className,n=e.style,i=e.onClick,o=e.iconCss,r=e.className2,s=e.visible;return!e.zoom&&a.a.createElement("div",{className:(s?"":"slick-hide-btn ")+t+" "+r,style:O({},n,{textShadow:"rgb(0, 0, 0) 0px 0px 5px"}),onClick:i},a.a.createElement("i",{className:o}))||null}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,e);var t,n,i,o=S(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),E(w(t=o.call(this,e)),"slickPrev",(function(){t.slider.slickPrev()})),E(w(t),"slickNext",(function(){t.slider.slickNext()})),E(w(t),"slickGoTo",(function(e){t.slider.slickGoTo(e)})),E(w(t),"thumbnailsRender",(function(e){var n=t.state.items[e];return a.a.createElement("div",{key:e,style:{margin:"2px"}},a.a.createElement("a",{className:"mb-3 slick-thumbnail"},a.a.createElement(u.a,{key:"carousel-media-".concat(e),lazyload:!0,tpl:"img",item:n,onAction:function(e){return t.props.onAction(e)}})))})),E(w(t),"thumbnailsOutsideRender",(function(e){var n=t.state.items[e];return a.a.createElement("div",{key:e,style:{cursor:"pointer",margin:"2px"},onClick:function(){return t.slickGoTo(e)}},a.a.createElement("a",{className:"mb-2 mx-1 slick-thumbnail"},a.a.createElement(u.a,{key:"carousel-media-".concat(e),lazyload:!0,tpl:"img",item:n,onAction:function(e){return t.props.onAction(e)}})))})),E(w(t),"dotsRender",(function(e,t,n){return a.a.createElement("div",{style:{padding:"30px 0px",display:n?null:"none"}},a.a.createElement("div",{className:t}))})),E(w(t),"handlePS",(function(e){t.setState({isOpenPS:!!e})})),t.state={items:[],inLoading:!0,pagingRender:{thumbnails:function(e){return t.thumbnailsRender(e)},"thumbnails-outside":function(){return a.a.createElement("span",null)},"dots-hyphen":function(e){return t.dotsRender(e,"slick-dots-hyphen",!0)},"dots-normal":function(e){return t.dotsRender(e,"slick-dots-normal",!0)},none:function(e){return t.dotsRender(e,"",!1)}},bgPosition:{x:0,y:0},isOpenPS:!1,optionsPS:{index:0,closeOnScroll:!1,shareEl:!1},itemsPS:[]},t.play=t.play.bind(w(t)),t.pause=t.pause.bind(w(t)),t}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadItems(this.props.forcedPage||1,!0),this.props.onDidMount()}},{key:"play",value:function(){this.slider.slickPlay()}},{key:"pause",value:function(){this.slider.slickPause()}},{key:"getItems",value:function(e,t){return"edit"===this.props.mode&&(t.no_cache=!0),new Promise((function(n,i){l.a.defaults.headers.common.Authorization=null,l.a.get(e,{cancelToken:new D((function(e){e})),params:t}).then((function(e){n(e)})).catch((function(e){i(e)}))}))}},{key:"onActionMedia",value:function(e,t,n){var i=this,a=O({},e);if(delete a.srcSetParsed,"edit"===this.props.mode){if(n){switch(n.action){case"click_image":this.props.onAction({action:"click_img_masonry",data:{card:a}});break;case"add_image":this.props.onAction({action:"add_image_masonry"})}this.pause()}}else"click_image"===n.action&&this.setState({optionsPS:O({},this.state.optionsPS,{index:t})},(function(){return i.handlePS(!0)}))}},{key:"loadItems",value:function(e,t){var n=this;console.log("loadItems",e,t);var i=this.props.idGallery;if(i){var a=z+"/public/galleries/"+i+"/slides",o={page:e};this.getItems(a,o).then((function(e){var i=e.data,a=i.items,o=i.numItems,r=i.page,s=i.totalItems;a=[].concat(h(n.state.items),h(n.transformItems(a)));var c=JSON.parse(JSON.stringify(a)).map((function(e){return O({},e,{w:0,h:0})}));n.props.onAction({action:"first_load_items",data:{numItems:o,page:r,totalItems:s,items:a}}),n.setState({items:a,itemsPS:c,inLoading:!1},(function(){t&&n.props.onFirstRequestLoaded()}))})).catch((function(e){return console.log("erreur!!",e)}))}else this.setState({inLoading:!1})}},{key:"orderItems",value:function(e){return[].concat(e).sort((function(e,t){return e.rank===t.rank?t.id-e.id:e.rank-t.rank}))}},{key:"transformItems",value:function(e){return this.orderItems(e.map((function(e){var t=e.src_set&&JSON.parse(e.src_set),n=t&&_(t);return O({},e,{src:e.url,img:{path:e.url,css:"img-fluid",tpl:"img"},srcSet:n,srcSetParsed:t,visible:!0})})))}},{key:"onDeleteMedia",value:function(e){this.props.onAction({action:"delete_img_masonry",data:{card:e}})}},{key:"doAnimations",value:function(e,t){"none"!==t&&"fade"!==t&&e.each((function(){var e=$(this),n=e.data("delay"),i="animated "+t;e.css({"animation-delay":n,"-webkit-animation-delay":n}),e.addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){e.removeClass(i)}))}))}},{key:"addItem",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=[e].concat(h(this.state.items)),a=JSON.parse(JSON.stringify(i)).map((function(e){return O({},e,{w:0,h:0})}));this.setState({items:i,itemsPS:a},(function(){n&&setTimeout((function(){t.slickGoTo(0)}),250)}))}},{key:"deleteItem",value:function(e,t,n){var i=this.state.items.filter((function(n){return e?n.tag!==e:n.id!==t})),a=JSON.parse(JSON.stringify(i)).map((function(e){return O({},e,{w:0,h:0})}));this.setState({items:i,itemsPS:a},(function(){"function"==typeof n&&n()}))}},{key:"gettingData",value:function(e,t,n){if(n.w<1||n.h<1){var i=new Image;i.onload=function(){n.w=this.width,n.h=this.height,e.updateSize(!0)},n.srcSet&&(i.srcset=n.srcSet),i.src=n.src}}},{key:"render",value:function(){var e=this,t=this.props,n=t.mode,i=t.mepPaging,o=t.prefixCss,c=t.cfgToolbarImg,l=t.delay,d=t.blocks,m=t.showArrows,p=t.animationSlide,h=t.styleME,g=t.idGallery,b=t.autoplay,v=t.zoom,S=t.wrapperCss,k=t.wrapperStyle,w=t.useFilter,P=this.state,E=P.pagingRender,_=P.items,N=(P.bgPosition,P.isOpenPS),x=P.itemsPS,I=P.optionsPS,R=P.inLoading,j=(d&&d.find((function(e){return"title"===e.name}))||{title:null}).title,C={customPaging:function(e){return E[i]&&E[i](e)||E["dots-hyphen"](e)},nextArrow:a.a.createElement(M,{iconCss:"fas fa-chevron-circle-right",className2:"slick-slide-custom",visible:m,zoom:v}),prevArrow:a.a.createElement(M,{iconCss:"fas fa-chevron-circle-left",className2:"slick-slide-custom",visible:m,zoom:v}),dots:!0,fade:"none"!==p,speed:"none"===p||"defaut"===p?500:0,infinite:!0,slidesToShow:1,slidesToScroll:1,initialSlide:0,pauseOnHover:!1,autoplay:"edit"!==n&&!1!==b,autoplaySpeed:l,adaptiveHeight:!0,variableWidth:!1,beforeChange:function(e,t){}};return R?a.a.createElement("div",{className:"text-center"},a.a.createElement("i",{className:"fas fa-spinner fa-pulse"})):a.a.createElement(s.a,y({title:j,usePaddingX:!1,usePaddingY:!0,typeSection:"slick-carousel"},this.props),a.a.createElement("div",{className:A("","slick-animation",w&&"slick-thumbnails-filter",S),"data-animation":p,style:O({},k,{overflow:"hidden"})},a.a.createElement(r.a,y({ref:function(t){return e.slider=t}},C),_.map((function(t,i){var r={lazyload:!0,style:h,mode:n,onDelete:function(){return e.onDeleteMedia(t)},cfgToolbar:c,css:A(o,"card-img"),tpl:"img",item:t,onAction:function(n){return e.onActionMedia(t,i,n)}};return a.a.createElement("div",{className:"slide-media","data-parent-gallery":g,"data-slider":"slick-slider","data-slider-index":i,"data-slider-id":t.id,"data-animation":p,"data-delay":"0.5s",key:"media-".concat(i,"-id").concat(t.id||0)},a.a.createElement("div",{style:{cursor:v&&"pointer"}},a.a.createElement(u.a,r)))})))),"thumbnails-outside"===i&&_.length>1&&a.a.createElement("div",{className:"d-flex flex-wrap mt-3 slick-thumbnails-outside"},_.map((function(t,n){return e.thumbnailsOutsideRender(n)}))),v&&a.a.createElement(f.PhotoSwipe,{isOpen:N,items:x||[],options:I,onClose:this.handlePS,gettingData:function(t,n,i){return e.gettingData(t,n,i)}}))}}])&&b(t.prototype,n),i&&b(t,i),c}(i.Component);J.defaultProps={prefixCss:"",zoom:!1,mepPaging:"dots-hyphen",mode:"view",delay:4e3,autoplay:!0,animationSlide:"defaut",bg:{class:"bg-white",img:{path:"",class:""}},useFilter:!0,showArrows:!0,onAction:function(){},onDidMount:function(){},onFirstRequestLoaded:function(){},cfgToolbarImg:{visible:!0,trash:!0,image:!0,imageSlide:!0}},J.displayName="CarouselRcpt",t.default=J}}]);