(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),r=f(i),s=f(n(462)),l=f(n(81)),u=f(n(98)),c=f(n(27)),d=f(n(288)),m=n(575);function f(e){return e&&e.__esModule?e:{default:e}}n(576);var p=c.default._reactSortableHoc,g=p.SortableItem,h=p.SortableContainer,b=p.arrayMove,v=p.sortableHandle,y=c.default._store.getEnv(),_=y.scheme,w=y.domain,S=y.subdomain,I=y.apiProd,k=y.domainApi,P=(_+"://"+(I?S:"gallerie")+"."+(I?k:w)).replace("__API__","gallerie"),A=c.default._css,E=c.default._getSrcSet,x=c.default._ToolbarActions,O=u.default.CancelToken,C={transitionDuration:0},M={background:".bg-light"},D=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.onSortEnd=function(e){var t=e.oldIndex,o=e.newIndex;if(t!==o){var i=n.state,r=(i.pathOrder,i.items),s=b(r,t,o),l=[],u=s.map((function(e,t){var n=t;return l.push({id:e.id,rank:n,item:e}),a({},e,{rank:n})}));n.setState({items:u},(function(){n.props.onAction({action:"reorder_items_gallery",params:{orders:l}})}))}},n.handlePS=function(e){n.setState({isOpenPS:!!e})};var o={};if(n.props.items.items.length>0){var i=n.props.items,r=i.numItems,s=i.page,l=i.totalItems;o={items:n.transformItems(n.props.items.items),numItems:r,page:s,totalItems:l,inLoading:!1}}else o={items:[],numItems:0,page:1,totalItems:0,inLoading:!0};return n.state=a({},o,{pathOrder:P+"/slides/"+n.props.idGallery+"/order",grid:{1:"",2:"col-md-6",3:"col-md-4",4:"col-md-3"},forcePage:null,mepRender:{bootstrapColumn:function(e){return n.bootstrapColumn(e)},masonryJS:function(e){return n.masonryJs(e)},bootstrapDefault:function(e){return n.bootstrapDefault(e)}},isOpenPS:!1,optionsPS:{index:0,closeOnScroll:!1,shareEl:!1},itemsPS:[]}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getItems",value:function(e,t){return"edit"===this.props.mode&&(t.no_cache=!0),new Promise((function(n,a){u.default.defaults.headers.common.Authorization=null,u.default.get(e,{cancelToken:new O((function(e){e})),params:t}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}},{key:"componentDidMount",value:function(){this.loadItems(1,"init"),this.loadIconsPS()}},{key:"loadIconsPS",value:function(){if(document&&!document.querySelector("#PS_CSS")){var e=document.createElement("style");e.id="PS_CSS",document.head.appendChild(e);var t=e.sheet;t.insertRule(".pswp__button, .pswp__button--arrow--left:before, .pswp__button--arrow--right:before {background: none !important}",t.cssRules.length),t.insertRule(".pswp__preloader--active .pswp__preloader__icn{background:url("+_+"://editor."+w+"/assets/dist/e34aafbb485a96eaf2a789b2bf3af6fe.gif) 0 0 no-repeat !important}",t.cssRules.length),t.insertRule("@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:1.1dppx),(min-resolution:105dpi){.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before{background-image:none !important}}",t.cssRules.length)}}},{key:"loadItems",value:function(e,t){var n=this,o=this.props.idGallery,i=P+"/public/galleries/"+o+"/slides",r={page:e};this.getItems(i,r).then((function(e){var o=e.data,i=o.items,r=o.numItems,s=o.page,l=o.totalItems;i=n.transformItems(i);var u=JSON.parse(JSON.stringify(i)).map((function(e){return a({},e,{w:0,h:0})}));n.setState({items:i,itemsPS:u,numItems:r,page:s,totalItems:l,inLoading:!1},(function(){"init"===t&&n.props.onAction({action:"first_load_items",data:{items:i}})}))})).catch((function(e){return console.log("erreur!!",e)}))}},{key:"orderItems",value:function(e){return[].concat(e).sort((function(e,t){return e.rank===t.rank?t.id-e.id:e.rank-t.rank}))}},{key:"transformItems",value:function(e){return this.orderItems(e.map((function(e){var t=e.src_set&&E(JSON.parse(e.src_set));return a({},e,{src:e.url,title:"",img:{path:e.url},visible:!0,srcSet:t})})))}},{key:"addItem",value:function(e){var t=this,n=this.state,o=n.totalItems,i=n.items,r=n.numItems,s=a({},e,{img:{path:e.url}}),l=o+1,u=null;if(i.length<r){var c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.state.items),[s]);this.setState({items:c,totalItems:l,forcePage:u})}else{var d=Math.ceil(o/r);u=d,this.setState({totalItems:l,forcePage:u,inLoading:!0},(function(){t.loadItems(u)}))}}},{key:"masonryJs",value:function(e){var t=this,n=this.props.prefixCss,a=e.map((function(e,a){return r.default.createElement("li",{key:a,className:"list-unstyled"},r.default.createElement(l.default,{css:A(n,"img-fluid"),tpl:"img",item:e,onAction:function(){return t.onActionMedia(e,a)}}),"/>")}));return r.default.createElement(Masonry,{className:"my-gallery-class",elementType:"ul",options:C,disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:M},a)}},{key:"onActionMedia",value:function(e,t){var n=this;"edit"===this.props.mode?this.props.onAction({action:"click_img_masonry",data:{card:e,index:t}}):this.setState({optionsPS:a({},this.state.optionsPS,{index:t})},(function(){return n.handlePS(!0)}))}},{key:"onActionPagination",value:function(e){var t=this;"page_change"===e.action&&this.setState({inLoading:!0},(function(){t.loadItems(e.data.nextPage)}))}},{key:"bootstrapColumn",value:function(e){var t=this,n=this.props.prefixCss;return r.default.createElement("div",{className:A(n,"card-columns")+" card-columns-2"},e.map((function(e,a){return r.default.createElement("div",{key:a,className:A(n,"card","border-0","mb-0")},r.default.createElement(l.default,{css:A(n,"card-img"),tpl:"img",item:e,onAction:function(){return t.onActionMedia(e,a)}}))})))}},{key:"onDelete",value:function(e){this.props.onAction({action:"delete_img_masonry",data:{card:e,items:this.state.items}})}},{key:"getGrid",value:function(e,t){var n=this.state.grid,a=n[e]||n[1];return A(t,"col-12",a,"d-flex","align-items-stretch")}},{key:"bootstrapDefault",value:function(e){var t=this,n=this.props,o=n.prefixCss,i=n.spacing,s=(n.spacingAdmin,n.cardsInRow),u=n.mode,c=(n.cfgToolbarMedia,n.gridCss),d=n.onAction,m=i?A(o,"mb-3","px-2"):A(o,"m-0","p-0"),f=""!==c&&c||this.getGrid(s,o),p={sortableHandle:v,lengthCards:e.length,onAction:d.bind(this),displayBtnDelete:function(){return e.length>1},displayBtns:["delete","order","order-dnd"],onDelete:function(n,a){d({action:"delete_img_masonry",data:{card:e[a],items:t.state.items}})},onMove:function(e,n){var a="left"===e?n-1:n+1;t.onSortEnd({oldIndex:n,newIndex:a})}};return r.default.createElement(h,{axis:"xy",useDragHandle:!0,distance:0,useWindowAsScrollContainer:!0,onSortEnd:this.onSortEnd},r.default.createElement("div",{className:A(o,"row")},e.map((function(e,n){return r.default.createElement(g,{key:"item-"+n,index:n,sortIndex:n,value:e},r.default.createElement("div",{"data-item":"gallery",className:A(o,"col-12")+" "+f+" "+m},r.default.createElement(l.default,{mode:u,onDelete:function(){return t.onDelete(e)},style:{objectFit:"cover",height:"100%",width:"100%"},css:A(o,"img-fluid"),tpl:"img",item:e,onAction:function(){return t.onActionMedia(e,n)}}),"edit"===u&&r.default.createElement(x,a({index:n},p))))}))))}},{key:"gettingData",value:function(e,t,n){if(n.w<1||n.h<1){var a=new Image;a.onload=function(){n.w=this.width,n.h=this.height,e.updateSize(!0)},n.srcSet&&(a.srcset=n.srcSet),a.src=n.src}}},{key:"render",value:function(){var e=this,t=this.props,n=t.type,o=t.mode,i=t.onAction,l=t.blocks,u=t.btnAdd,c=this.state,f=c.items,p=c.itemsPS,g=c.totalItems,h=c.numItems,b=c.forcePage,v=c.mepRender,y=c.inLoading,_=c.isOpenPS,w=c.optionsPS,S=Math.ceil(g/h),I=b&&b-1||null,k=(l&&l.find((function(e){return"title"===e.name}))||{title:null}).title,P=void 0!==m.PhotoSwipe?m.PhotoSwipe:null;return r.default.createElement(s.default,a({title:k},this.props),y&&r.default.createElement("div",{className:"text-center"},r.default.createElement("i",{className:"fas fa-spinner fa-pulse"})),v[n]&&v[n](f)||v.bootstrapDefault(f),"edit"===o&&r.default.createElement("div",{className:"we-d-flex we-justify-content-center we-align-items-center",style:{position:"absolute",bottom:0,right:0,paddingRight:"15px",paddingBottom:"10px"}},r.default.createElement("button",{style:{zIndex:"2"},onClick:function(){return i({action:"add_image_masonry"})},className:"we-btn we-btn-secondary we-btn-sm",disabled:f.length>=u.limit}," ",r.default.createElement("i",{className:"fas fa-plus-circle"})," Ajouter une image"," ")),S>1&&r.default.createElement(d.default,{forcePage:I,pageCount:S,onAction:function(t){return e.onActionPagination(t)}}),P&&r.default.createElement(P,{isOpen:_,items:p||[],options:w,onClose:this.handlePS,gettingData:function(t,n,a){return e.gettingData(t,n,a)}}))}}]),t}(i.Component);D.defaultProps={mode:"view",type:"bootstrapDefault",prefixCss:"",gridCss:"",cardsInRow:3,spacing:!0,onAction:function(){},cfgToolbarMedia:{visible:!0,trash:!0},idGallery:0,items:{items:[]},btnAdd:{limit:100}},D.displayName="MasonryRcpt",t.default=D},1390:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(1285),i=(a=o)&&a.__esModule?a:{default:a};t.default=i.default}}]);