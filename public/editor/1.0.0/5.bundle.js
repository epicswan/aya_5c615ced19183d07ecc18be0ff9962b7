(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1259:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(50),c=r(9),i=r.n(c),l=r(44);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}i.a._css;var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,r,n,a=p(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),h(y(t=a.call(this,e)),"getOrder",(function(e,t){var r={img:"left"},n={img:"right"};switch(t){case 1:return r;case 2:return n;case 3:return e%2==0?r:n;case 4:return e%2==0?n:r;default:return r}})),h(y(t),"nbImgInLayout",-1),t.state={},t.refsCards=[],t}return t=c,(r=[{key:"componentDidUpdate",value:function(){this.nbImgInLayout=-1}},{key:"render",value:function(){var e=this,t=this.nbImgInLayout,r=this.props,n=r.layoutBlocks,a=r.mode,c=(r.cfgToolbarMedia,r.propsToolbar,r.tpl),i=r._onAction,s=r.orderCard;return n.map((function(r,n){return t++,o.a.createElement("div",{key:"col-idx-".concat(n),className:r.colCss},r.cards.map((function(r,f){var d=e.getOrder(n,s);return o.a.createElement("div",{key:"card-".concat(f),className:"d-flex align-items-start py-2 w-100"},o.a.createElement(l.a,u({},e.props,{ref:function(t){e.refsCards.push(t)},mode:a,key:"0",order:d,onAction:i,tpl:r.card.tpl||c,card:r.card,index:t})))})))}))}}])&&f(t.prototype,r),n&&f(t,n),c}(n.Component);v.defaultProps={layoutBlocks:[]},v.displayName="RenderLayoutElement";var g=v,w=r(663);function O(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-4"},o.a.createElement(w.a,e)),o.a.createElement("div",{className:"col-12 col-md-8"},e.children))}function E(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-8"},o.a.createElement(w.a,e)),o.a.createElement("div",{className:"col-12 col-md-4"},e.children))}function j(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement(w.a,e)),o.a.createElement("div",{className:"col-12 col-md-6"},e.children))}function C(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-6"},e.children),o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement(w.a,e)))}var k=r(70),N=r(1244);function P(e){var t=e.blocks.find((function(e){return"media"===e.name})),r=e;t||(t={name:"media",item:{tpl:"img",img:{path:"https://images.unsplash.com/photo-1522040806052-b0aa2b039f00?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed3f918d014049e739e6de1e3ed846c6&auto=format&fit=crop&w=700&q=30",css:"img-fluid w-100"},visible:!0},uid:Object(N.a)()},r.blocks.push(t));var n={};return t.item.img&&(n={objectFit:"cover",width:"100%",height:"100%"}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-6 p-0"},o.a.createElement(k.a,{item:t.item,cfgToolbar:{visible:!1},onAction:function(e){return console.log(e)},mode:r.mode,style:n})),o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement(w.a,e),e.children))}function _(e){var t=e.blocks.find((function(e){return"media"===e.name})),r=e;t||(t={name:"media",item:{tpl:"img",img:{path:"https://images.unsplash.com/photo-1522040806052-b0aa2b039f00?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed3f918d014049e739e6de1e3ed846c6&auto=format&fit=crop&w=700&q=30",css:"img-fluid w-100"},visible:!0},uid:Object(N.a)()},r.blocks.push(t));var n={};return t.item.img&&(n={objectFit:"cover",width:"100%",height:"100%"}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement(w.a,r),e.children),o.a.createElement("div",{className:"col-12 col-md-6 p-0"},o.a.createElement(k.a,{item:t.item,cfgToolbar:{visible:!1},onAction:function(e){return console.log(e)},mode:r.mode,style:n})))}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var x=["blocks","canAddItems"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){J(e,t,r[t])}))}return e}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=H(e);if(t){var o=H(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return L(this,r)}}function L(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var F=i.a._css,G=i.a._reactSortableHoc,q=(G.SortableContainer,G.arrayMove,G.sortableHandle,function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(i,e);var t,r,n,c=T(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),J(D(t=c.call(this,e)),"getOrder",(function(e,t){var r={img:"left"},n={img:"right"};switch(t){case 1:return r;case 2:return n;case 3:return e%2==0?r:n;case 4:return e%2==0?n:r;default:return r}})),t.state={grid:{1:"",2:"col-md-6",3:"col-md-4",4:"col-md-3"}},t}return t=i,(r=[{key:"onClickImg",value:function(e){}},{key:"_onAction",value:function(e){"edit"===this.props.mode&&(e.params&&"img"===e.params.type||this.props.onAction(e))}},{key:"getGrid",value:function(e,t){var r=this.state.grid,n=r[e]||r[1];return F(t,"col-12",n,"d-flex","align-items-start","w-100")}},{key:"createLayout",value:function(e){var t=this,r=[],n=this.props,o=n.special,a=n.gridCss,c=n.cardsInRow,i=n.prefixCss,l=n.specialLayout;if(o){var s=0,u=l.pairMode;e.forEach((function(e,t){if(s%2===u&&t%3==0||s%2!==u&&t%3==2)r.push({type:"col-one-card",colCss:"col-12 col-sm-8",cards:[{type:"card",card:A({},e)}]}),s%2!==u&&s++;else{var n=r[r.length-1];n&&"col-multi-card"===n.type&&n.cards.length<2?(n.cards.push({type:"card",card:A({},e)}),s%2===u&&s++):r.push({type:"col-multi-card",colCss:"col-12 col-sm-4",cards:[{type:"card",card:A({},e)}]})}}))}else e.forEach((function(e,n){var o=""!==a&&a||t.getGrid(c,i);r.push({type:"col-one-card",colCss:o,cards:[{type:"card",card:A({},e)}]})}));return r}},{key:"buildMep",value:function(e,t){switch(e){case"1/3-2/3":return o.a.createElement(O,this.props,t);case"2/3-1/3":return o.a.createElement(E,this.props,t);case"1/2-desc":return o.a.createElement(C,this.props,t);case"desc-1/2":return o.a.createElement(j,this.props,t);case"1/2+media-1/2+desc+card":return o.a.createElement(P,this.props,t);case"1/2+desc+card-1/2+media":return o.a.createElement(_,this.props,t);default:return t}}},{key:"render",value:function(){var e=this.props,t=e.blocks,r=(e.canAddItems,R(e,x)),n=(this.props.onAction,this.props),c=n.prefixCss,i=(n.cfgToolbarMedia,n.mode),l=n.cardsInRow,s=n.gridCss,u=(n.msgAddItem,n.tpl),f=n.orderCard,d=n.special,p=n.styleContainerCards,m=n.mep,y=(t.find((function(e){return"title"===e.name}))||{title:null}).title,b=(t.find((function(e){return"stitle"===e.name}))||{stitle:null}).stitle,h=t.filter((function(e){return"card"===e.name})),v=(""!==s&&s||this.getGrid(l,c),this.createLayout(h)),w=A({},this.props,{layoutBlocks:v,mode:i,tpl:u,_onAction:this._onAction.bind(this),orderCard:f});return o.a.createElement(a.a,I({title:y,stitle:b},r),this.buildMep(m,o.a.createElement("div",{className:F(c,"row",!d&&"justify-content-center"),style:p},o.a.createElement(g,w))))}}])&&B(t.prototype,r),n&&B(t,n),i}(n.Component));q.defaultProps={prefixCss:"",mode:"view",containerCss:"",sectionCss:"",canAddItems:!0,estFormation:!1,formationId:null,produitId:null,tpl:"Cards",orderCard:1,bg:{class:"bg-white",img:{path:"",class:""}},gridCss:"",cardsInRow:3,special:!1,specialLayout:{pairMode:0},styleContainerCards:{},blocks:[]},q.displayName="CardsRcpt";t.default=q}}]);