(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1346:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=m(r),s=m(a(538)),l=m(a(169)),c=m(a(583)),u=m(a(48)),d=m(a(35));function m(e){return e&&e.__esModule?e:{default:e}}var f=d.default._store.getEnv(),p=f.scheme,g=f.domain,h=f.subdomain,v=f.apiProd,b=f.domainApi,y=(p+"://"+(v?h:"blog")+"."+(v?b:g)).replace("__API__","blog");a(9)().format();var w=l.default.CancelToken,_=d.default._css,k=d.default._getSrcSet,I=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.cachedItems=null,a.blogModule=d.default._store.getUidSite("blog");var n={1:"col",2:"col-md-6",3:"col-md-4",4:"col-md-3"};if(a.props.items.items.length>0){var i=a.props.items,r=i.numItems,s=i.page,l=i.totalItems;a.state={cancelToken:null,forcePage:1,inLoading:!0,items:a.transformItems(a.props.items.items),numItems:r,page:s,totalItems:l,grid:n}}else a.state={cancelToken:null,forcePage:1,items:[],grid:n,inLoading:!0};return a.refArticles=o.default.createRef(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getGrid",value:function(e,t){var a=this.state.grid,n=this.props.widthClass,i=a[e]||a[0];return void 0===e&&(i="col-md-12"===n?a[0]:a[1]),_(t,"col-12",i)}},{key:"getItems",value:function(e,t){return"edit"===this.props.mode&&(t.no_cache=!0),new Promise((function(a,n){l.default.get(e,{cancelToken:new w((function(e){e})),params:t}).then((function(e){a(e)})).catch((function(e){n(e)}))}))}},{key:"moreItem",value:function(){this.props.onAction({action:"click_new_item",data:{}})}},{key:"componentDidUpdate",value:function(e){e.tpl!==this.props.tpl&&this.cachedItems&&this.setState({items:this.transformItems(this.cachedItems)})}},{key:"componentDidMount",value:function(){this.loadItems(1,"init")}},{key:"loadItems",value:function(e,t){var a=this,n=this.blogModule&&this.blogModule.distant_id||this.props.idBlog,i=y+"/public/blogs/"+n+"/articles";this.props.categorie&&void 0!==this.props.categorie.id&&(i=y+"/public/categories/"+this.props.categorie.id+"/articles");var r={page:e};this.getItems(i,r).then((function(e){var n=e.data.items,i=e.data,r=i.numItems,o=i.page,s=i.totalItems;n=a.transformItems(n),a.setState({items:n,numItems:r,page:o,totalItems:s,inLoading:!1},(function(){if("page_change"===t){var e=a.refArticles.current;if(e){var n=e.querySelector('[card-index="0"]');$("html, body").animate({scrollTop:$(n).offset().top-55},750)}}}))})).catch((function(e){return console.log("erreur!!",e)}))}},{key:"transformItems",value:function(e){this.cachedItems=e;var t=this.props,a=t.tpl;t.blocks;return e.map((function(e){var t=e.article_histories[0],i=t.src_set&&k(JSON.parse(t.src_set)),r={active:!0,class:"",link:"/blog/"+e.slug,txt:"Lire la suite",icon:"",target:"_self"};return n({},e,{title:{txt:e.title,class:"",visible:!0},txt:{txt:t.description,class:"",visible:!0},link:r,linkOnCard:n({},r,{active:!0}),item:{link:r,img:{path:t.image,css:"img-fluid"},tpl:"Card2"===a?"bgImgLink":"imgLink",visible:t.image&&"https://mediacache.epicred.fr/4X6DE68rOO9oeeAGN6wlzbLgPTU=/1920x/https://media.epicred.fr/media/cache/original/all/5c1901e87c038.png"!==t.image,srcSet:i}})}))}},{key:"onActionPagination",value:function(e){var t=this;"page_change"===e.action&&this.setState({inLoading:!0},(function(){t.loadItems(e.data.nextPage,e.action)}))}},{key:"getOrder",value:function(e){var t={img:"left"},a={img:"right"};switch(this.props.orderCard){case 1:return t;case 2:return a;case 3:return e%2==0?t:a;case 4:return e%2==0?a:t;default:return t}}},{key:"render",value:function(){var e=this,t=this.props,a=t.blocks,i=t.bgCards,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["blocks","bgCards"]),l=this.props,d=l.prefixCss,m=l.mode,f=l.msgAddItem,p=(l.widthClass,l.tpl),g=l.onManageModule,h=l.cardsInRow,v=l.mepOpts,b=l.mep,y=this.state,w=y.totalItems,k=y.numItems,I=y.forcePage,O=y.inLoading,x=I&&I-1||null,P=Math.ceil(w/k),C=(a.find((function(e){return"title"===e.name}))||{title:null}).title,E=this.state.items;return o.default.createElement(s.default,n({title:C},r),O&&o.default.createElement("div",{className:"text-center"},o.default.createElement("i",{className:"fas fa-spinner fa-pulse"})),!O&&0==w&&o.default.createElement("div",{className:"text-center mx-auto my-5"},"Aucun article ne semble en ligne actuellement."),o.default.createElement("div",{style:"edit"===m&&{padding:"1rem"}||{},className:_("","edit"===m&&"we-overlay")},o.default.createElement("div",{ref:this.refArticles,"data-app-listing":!0,className:_("","row","justify-content-center")},E.map((function(t,a){var r=e.getOrder(a);return o.default.createElement("div",{key:a,"card-index":a,className:_(d,e.getGrid(h,d),"py-2")},o.default.createElement(u.default,{order:r,mode:"view",card:n({},t,{bg:i}),tpl:p,mep:b,prefixCss:d,mepOpts:v}))}))),"edit"===m&&o.default.createElement("div",{style:{boxShadow:"0 0 5px #333",cursor:"pointer"},className:"we-overlay-body we-d-flex we-justify-content-center we-align-items-center",onClick:function(e){e.preventDefault(),e.stopPropagation(),g()}},o.default.createElement("button",{style:{zIndex:"1"},className:_("we-","btn","btn-dark","bg-dark"),onClick:function(e){e.preventDefault(),e.stopPropagation(),g()}},o.default.createElement("i",{className:"fas fa-pen-nib"})," ",f))),P>1&&o.default.createElement(c.default,{forcePage:x,pageCount:P,onAction:function(t){return e.onActionPagination(t)}}))}}]),t}(r.Component);I.defaultProps={prefixCss:"",mep:null,mode:"view",sectionCss:"",bg:{class:"bg-white",img:{path:"",class:""}},tpl:"Card2",widthClass:"col-md-12",orderCard:{img:"left"},onManageModule:function(){},blocks:[{name:"title",title:{txt:"BlogiBloga",class:"w-100"}},{name:"stitle",stitle:{txt:"Mon blog à moi",class:""}},{name:"card",pathItem:"",typeItem:""}],msgAddItem:"Gérer le blog",categorie:null,items:{items:[]}},t.default=I},1493:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=a(1346),r=(n=i)&&n.__esModule?n:{default:n};t.default=r.default}}]);