(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1349:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),o=p(i),s=p(a(528)),l=p(a(149)),u=p(a(167)),c=p(a(35)),d=p(a(562)),f=a(642);function p(e){return e&&e.__esModule?e:{default:e}}a(643);var m=c.default._reactSortableHoc,g=m.SortableItem,h=m.SortableContainer,b=m.arrayMove,v=m.sortableHandle,y=c.default._store.getEnv(),C=y.scheme,P=y.domain,_=y.subdomain,k=y.apiProd,N=y.domainApi,w=(C+"://"+(k?_:"gallerie")+"."+(k?N:P)).replace("__API__","gallerie"),x=c.default._css,S=c.default._getSrcSet,E=c.default._ToolbarActions,I=u.default.CancelToken,O={transitionDuration:0},L={background:".bg-light"},A=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.onSortEnd=function(e){var t=e.oldIndex,r=e.newIndex;if(t!==r){var i=a.state,o=(i.pathOrder,i.items),s=b(o,t,r),l=[],u=s.map((function(e,t){var a=t;return l.push({id:e.id,rank:a,item:e}),n({},e,{rank:a})}));a.setState({items:u},(function(){a.props.onAction({action:"reorder_items_gallery",params:{orders:l}})}))}},a.handlePS=function(e){a.setState({isOpenPS:!!e})};var r={};if(a.props.items.items.length>0){var i=a.props.items,o=i.numItems,s=i.page,l=i.totalItems;r={items:a.transformItems(a.props.items.items),numItems:o,page:s,totalItems:l,inLoading:!1}}else r={items:[],numItems:0,page:1,totalItems:0,inLoading:!0};return a.state=n({},r,{pathOrder:w+"/slides/"+a.props.idGallery+"/order",grid:{1:"",2:"col-md-6",3:"col-md-4",4:"col-md-3"},forcePage:null,mepRender:{bootstrapColumn:function(e){return a.bootstrapColumn(e)},masonryJS:function(e){return a.masonryJs(e)},bootstrapDefault:function(e){return a.bootstrapDefault(e)}},isOpenPS:!1,optionsPS:{index:0,closeOnScroll:!1,shareEl:!1},itemsPS:[]}),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getItems",value:function(e,t){return"edit"===this.props.mode&&(t.no_cache=!0),new Promise((function(a,n){u.default.defaults.headers.common.Authorization=null,u.default.get(e,{cancelToken:new I((function(e){e})),params:t}).then((function(e){a(e)})).catch((function(e){n(e)}))}))}},{key:"componentDidMount",value:function(){this.loadItems(1,"init"),this.loadIconsPS()}},{key:"loadIconsPS",value:function(){if(document&&!document.querySelector("#PS_CSS")){var e=document.createElement("style");e.id="PS_CSS",document.head.appendChild(e);var t=e.sheet;t.insertRule(".pswp__button, .pswp__button--arrow--left:before, .pswp__button--arrow--right:before {background: none !important}",t.cssRules.length),t.insertRule(".pswp__preloader--active .pswp__preloader__icn{background:url("+C+"://editor."+P+"/assets/dist/e34aafbb485a96eaf2a789b2bf3af6fe.gif) 0 0 no-repeat !important}",t.cssRules.length),t.insertRule("@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:1.1dppx),(min-resolution:105dpi){.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before{background-image:none !important}}",t.cssRules.length)}}},{key:"loadItems",value:function(e,t){var a=this,r=this.props.idGallery,i=w+"/public/galleries/"+r+"/slides",o={page:e};this.getItems(i,o).then((function(e){var r=e.data,i=r.items,o=r.numItems,s=r.page,l=r.totalItems;i=a.transformItems(i);var u=JSON.parse(JSON.stringify(i)).map((function(e){return n({},e,{w:0,h:0})}));a.setState({items:i,itemsPS:u,numItems:o,page:s,totalItems:l,inLoading:!1},(function(){"init"===t&&a.props.onAction({action:"first_load_items",data:{items:i}})}))})).catch((function(e){return console.log("erreur!!",e)}))}},{key:"orderItems",value:function(e){return[].concat(e).sort((function(e,t){return e.rank===t.rank?t.id-e.id:e.rank-t.rank}))}},{key:"transformItems",value:function(e){return this.orderItems(e.map((function(e){var t=e.src_set&&S(JSON.parse(e.src_set));return n({},e,{src:e.url,title:"",img:{path:e.url},visible:!0,srcSet:t})})))}},{key:"addItem",value:function(e){var t=this,a=this.state,r=a.totalItems,i=a.items,o=a.numItems,s=n({},e,{img:{path:e.url}}),l=r+1,u=null;if(i.length<o){var c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(this.state.items),[s]);this.setState({items:c,totalItems:l,forcePage:u})}else{var d=Math.ceil(r/o);u=d,this.setState({totalItems:l,forcePage:u,inLoading:!0},(function(){t.loadItems(u)}))}}},{key:"masonryJs",value:function(e){var t=this,a=this.props.prefixCss,n=e.map((function(e,n){return o.default.createElement("li",{key:n,className:"list-unstyled"},o.default.createElement(l.default,{css:x(a,"img-fluid"),tpl:"img",item:e,onAction:function(){return t.onActionMedia(e,n)}}),"/>")}));return o.default.createElement(Masonry,{className:"my-gallery-class",elementType:"ul",options:O,disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:L},n)}},{key:"onActionMedia",value:function(e,t){var a=this;"edit"===this.props.mode?this.props.onAction({action:"click_img_masonry",data:{card:e,index:t}}):this.setState({optionsPS:n({},this.state.optionsPS,{index:t})},(function(){return a.handlePS(!0)}))}},{key:"onActionPagination",value:function(e){var t=this;"page_change"===e.action&&this.setState({inLoading:!0},(function(){t.loadItems(e.data.nextPage)}))}},{key:"bootstrapColumn",value:function(e){var t=this,a=this.props.prefixCss;return o.default.createElement("div",{className:x(a,"card-columns")+" card-columns-2"},e.map((function(e,n){return o.default.createElement("div",{key:n,className:x(a,"card","border-0","mb-0")},o.default.createElement(l.default,{css:x(a,"card-img"),tpl:"img",item:e,onAction:function(){return t.onActionMedia(e,n)}}))})))}},{key:"onDelete",value:function(e){this.props.onAction({action:"delete_img_masonry",data:{card:e,items:this.state.items}})}},{key:"getGrid",value:function(e,t){var a=this.state.grid,n=a[e]||a[1];return x(t,"col-12",n,"d-flex","align-items-stretch")}},{key:"bootstrapDefault",value:function(e){var t=this,a=this.props,r=a.prefixCss,i=a.spacing,s=(a.spacingAdmin,a.cardsInRow),u=a.mode,c=(a.cfgToolbarMedia,a.gridCss),d=a.onAction,f=i?x(r,"mb-3","px-2"):x(r,"m-0","p-0"),p=""!==c&&c||this.getGrid(s,r),m={sortableHandle:v,lengthCards:e.length,onAction:d.bind(this),displayBtnDelete:function(){return e.length>1},displayBtns:["delete","order","order-dnd"],onDelete:function(a,n){d({action:"delete_img_masonry",data:{card:e[n],items:t.state.items}})},onMove:function(e,a){var n="left"===e?a-1:a+1;t.onSortEnd({oldIndex:a,newIndex:n})}};return o.default.createElement(h,{axis:"xy",useDragHandle:!0,distance:0,useWindowAsScrollContainer:!0,onSortEnd:this.onSortEnd},o.default.createElement("div",{className:x(r,"row")},e.map((function(e,a){return o.default.createElement(g,{key:"item-"+a,index:a,sortIndex:a,value:e},o.default.createElement("div",{"data-item":"gallery",className:x(r,"col-12")+" "+p+" "+f},o.default.createElement(l.default,{mode:u,onDelete:function(){return t.onDelete(e)},style:{objectFit:"cover",height:"100%",width:"100%"},css:x(r,"img-fluid"),tpl:"img",item:e,onAction:function(){return t.onActionMedia(e,a)}}),"edit"===u&&o.default.createElement(E,n({index:a},m))))}))))}},{key:"gettingData",value:function(e,t,a){if(a.w<1||a.h<1){var n=new Image;n.onload=function(){a.w=this.width,a.h=this.height,e.updateSize(!0)},a.srcSet&&(n.srcset=a.srcSet),n.src=a.src}}},{key:"render",value:function(){var e=this,t=this.props,a=t.type,r=t.mode,i=t.onAction,l=t.blocks,u=t.btnAdd,c=this.state,p=c.items,m=c.itemsPS,g=c.totalItems,h=c.numItems,b=c.forcePage,v=c.mepRender,y=c.inLoading,C=c.isOpenPS,P=c.optionsPS,_=Math.ceil(g/h),k=b&&b-1||null,N=(l&&l.find((function(e){return"title"===e.name}))||{title:null}).title,w=void 0!==f.PhotoSwipe?f.PhotoSwipe:null;return o.default.createElement(s.default,n({title:N},this.props),y&&o.default.createElement("div",{className:"text-center"},o.default.createElement("i",{className:"fas fa-spinner fa-pulse"})),v[a]&&v[a](p)||v.bootstrapDefault(p),"edit"===r&&o.default.createElement("div",{className:"we-d-flex we-justify-content-center we-align-items-center",style:{position:"absolute",bottom:0,right:0,paddingRight:"15px",paddingBottom:"10px"}},o.default.createElement("button",{style:{zIndex:"2"},onClick:function(){return i({action:"add_image_masonry"})},className:"we-btn we-btn-secondary we-btn-sm",disabled:p.length>=u.limit}," ",o.default.createElement("i",{className:"fas fa-plus-circle"})," Ajouter une image"," ")),_>1&&o.default.createElement(d.default,{forcePage:k,pageCount:_,onAction:function(t){return e.onActionPagination(t)}}),w&&o.default.createElement(w,{isOpen:C,items:m||[],options:P,onClose:this.handlePS,gettingData:function(t,a,n){return e.gettingData(t,a,n)}}))}}]),t}(i.Component);A.defaultProps={mode:"view",type:"bootstrapDefault",prefixCss:"",gridCss:"",cardsInRow:3,spacing:!0,onAction:function(){},cfgToolbarMedia:{visible:!0,trash:!0},idGallery:0,items:{items:[]},btnAdd:{limit:100}},A.displayName="MasonryRcpt",t.default=A},1446:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(1349),i=(n=r)&&n.__esModule?n:{default:n};t.default=i.default},562:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(581),i=(n=r)&&n.__esModule?n:{default:n};t.default=i.default},581:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),i=s(r),o=s(a(582));function s(e){return e&&e.__esModule?e:{default:e}}var l=s(a(35)).default._css,u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"handlePageClick",value:function(e){this.props.onAction({action:"page_change",data:{nextPage:e.selected+1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.prefixCss,n=t.posContainer;return i.default.createElement("nav",{className:l(a,"d-flex","justify-content-center")},i.default.createElement(o.default,{previousLabel:"❮",forcePage:this.props.forcePage,initialPage:0,nextLabel:"❯",breakLabel:i.default.createElement("div",{className:"page-link"},"..."),breakClassName:"page-item",pageCount:this.props.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,pageClassName:"page-item",pageLinkClassName:"page-link",nextClassName:"page-item",previousClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",onPageChange:function(t){return e.handlePageClick(t)},containerClassName:l(a,"pagination",n),subContainerClassName:"pages pagination",activeClassName:"active",disableInitialCallback:!0}))}}]),t}(r.Component);u.defaultProps={prefixCss:"",pageCount:1,posContainer:"",onAction:function(){},forcePage:null},t.default=u},582:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(583),i=(n=r)&&n.__esModule?n:{default:n};t.default=i.default},583:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),i=u(r),o=u(a(2)),s=u(a(584)),l=u(a(585));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e=[],t=a.props,n=t.pageRangeDisplayed,r=t.pageCount,o=t.marginPagesDisplayed,s=t.breakLabel,u=t.breakClassName,c=a.state.selected;if(r<=n)for(var d=0;d<r;d++)e.push(a.getPageElement(d));else{var f=n/2,p=n-f;c>r-n/2?f=n-(p=r-c):c<n/2&&(p=n-(f=c));var m=void 0,g=void 0,h=void 0,b=function(e){return a.getPageElement(e)};for(m=0;m<r;m++)(g=m+1)<=o||g>r-o||m>=c-f&&m<=c+p?e.push(b(m)):s&&e[e.length-1]!==h&&(h=i.default.createElement(l.default,{key:m,breakLabel:s,breakClassName:u}),e.push(h))}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback;void 0===t||a||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,o=a.activeClassName,l=a.activeLinkClassName,u=a.extraAriaContext;return i.default.createElement(s.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:o,activeLinkClassName:l,extraAriaContext:u,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,n=e.nextClassName,r=e.pageCount,o=e.containerClassName,s=e.previousLinkClassName,l=e.previousLabel,u=e.nextLinkClassName,c=e.nextLabel,d=this.state.selected,f=a+(0===d?" "+t:""),p=n+(d===r-1?" "+t:"");return i.default.createElement("ul",{className:o},i.default.createElement("li",{className:f},i.default.createElement("a",{onClick:this.handlePreviousPage,className:s,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},l)),this.pagination(),i.default.createElement("li",{className:p},i.default.createElement("a",{onClick:this.handleNextPage,className:u,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},c)))}}]),t}(r.Component);c.propTypes={pageCount:o.default.number.isRequired,pageRangeDisplayed:o.default.number.isRequired,marginPagesDisplayed:o.default.number.isRequired,previousLabel:o.default.node,nextLabel:o.default.node,breakLabel:o.default.node,hrefBuilder:o.default.func,onPageChange:o.default.func,initialPage:o.default.number,forcePage:o.default.number,disableInitialCallback:o.default.bool,containerClassName:o.default.string,pageClassName:o.default.string,pageLinkClassName:o.default.string,activeClassName:o.default.string,activeLinkClassName:o.default.string,previousClassName:o.default.string,nextClassName:o.default.string,previousLinkClassName:o.default.string,nextLinkClassName:o.default.string,disabledClassName:o.default.string,breakClassName:o.default.string},c.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=c},584:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),i=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.onClick,r=e.href,o="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),s=null;return e.selected&&(s="page",o="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==a?(a=a,void 0!==e.activeLinkClassName&&(a=a+" "+e.activeLinkClassName)):a=e.activeLinkClassName),i.default.createElement("li",{className:t},i.default.createElement("a",{onClick:n,role:"button",className:a,href:r,tabIndex:"0","aria-label":o,"aria-current":s,onKeyPress:n},e.page))}},585:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),i=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.breakLabel,a=e.breakClassName||"break";return i.default.createElement("li",{className:a},t)}}}]);