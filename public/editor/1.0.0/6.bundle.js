(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1264:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(50),o=a(9),c=a.n(o),i=a(39),s=a.n(i),u=(a(49),["blocks"]);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){f(e,t,a[t])}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k(e);if(t){var l=k(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return g(this,a)}}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}c.a._css;var w=c.a._store.getEnv(),T=w.scheme,C=w.domain,S=w.subdomain,x=w.apiProd,O=w.domainApi,E=x?S:"files",P="".concat(T,"://").concat(E,".").concat(x?O:C).replace("__API__","files"),j=x?S:"shop",B="".concat(T,"://").concat(j,".").concat(x?O:C).replace("__API__","shop"),D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,a,n,o=v(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);return(t=o.call(this,e)).state={btnAlignObj:{left:"justify-content-start",center:"justify-content-center",right:"justify-content-end"},id:"table-"+Math.random().toString(36).substr(2,16),isDownloading:!1,clickExCol:[0,6,8],config:{columns:[]},isLoading:!1},t.handleSelected=t.handleSelected.bind(_(t)),t.handleActive=t.handleActive.bind(_(t)),t.handleBatch=t.handleBatch.bind(_(t)),t.handleClick=t.handleClick.bind(_(t)),t.handleResults=t.handleResults.bind(_(t)),t}return t=i,(a=[{key:"componentWillUnmount",value:function(){$(document).off("click",".dataTables_wrapper .table tr td"),$(document).off("click",".border-switch-control-input"),$(document).off("click",".checkall"),$(document).off("click",".datatable-checkbox"),$(".individual_filtering").off("keyup change"),$("select.individual_filtering").off("keyup change")}},{key:"handleSelected",value:function(e){0==e.ids.length?this.handleBatch(b({},e,{status:!1})):e.ids.length>1?this.handleBatch(b({},e,{status:!0})):this.props.onAction({action:"selected",obj:e})}},{key:"handleClick",value:function(e){this.props.onAction({action:"click",obj:e})}},{key:"handleResults",value:function(e){this.props.onAction({action:"results",obj:e})}},{key:"handleActive",value:function(e){this.props.onAction({action:"active",obj:e})}},{key:"handleBatch",value:function(e){this.props.onAction({action:"batch",obj:e})}},{key:"loadDatatable",value:function(){var e=this.state.id,t=this,a={name:"myDt",options:{orderCellsTop:!0,orderClasses:!0,orderMulti:!0,pageLength:25,pagingType:"simple_numbers",renderer:"",scrollCollapse:!1,searchDelay:0,stateDuration:7200,serverSide:!0,processing:!0},features:{autoWidth:!1,deferRender:!1,info:!1,lengthChange:!1,ordering:!0,paging:!0,processing:!0,searching:!0,stateSave:!1},ajax:{url:this.props.url,type:"GET",beforeSend:function(e){var t=localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):"";e.setRequestHeader("authorization",t)},error:function(e,t,a){var n=e.status,l=e.responseJSON,r="";l&&(r=l.message);var o={status:n,error:{message:r}};c.a._handleErrorHttp(o)}}},n={language:{sProcessing:"Traitement en cours...",sSearch:"Rechercher&nbsp;:",sLengthMenu:"Afficher _MENU_ &eacute;l&eacute;ments",sInfo:"Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",sInfoEmpty:"Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",sInfoFiltered:"(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",sInfoPostFix:"",sLoadingRecords:"Chargement en cours...",sZeroRecords:"Aucun &eacute;l&eacute;ment &agrave; afficher",sEmptyTable:"Aucune donn&eacute;e disponible dans le tableau",oPaginate:{sFirst:"Premier",sPrevious:"Pr&eacute;c&eacute;dent",sNext:"Suivant",sLast:"Dernier"},oAria:{sSortAscending:": activer pour trier la colonne par ordre croissant",sSortDescending:": activer pour trier la colonne par ordre d&eacute;croissant"},select:{rows:{_:"%d lignes séléctionnées",0:"Aucune ligne séléctionnée",1:"1 ligne séléctionnée"}}}};$((function(){function l(e){var t=localStorage.getItem("currentUser");if(!t)return!1;var a=function(e){var t=e.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(t))}(t);if(null!=h(a.groupes)){for(var n=!1,l=0;l<a.groupes.length;l++)a.groupes[l]=="GRP_"+e&&(n=!0);if(n)return!0}return!1}var r={columnDefs:[{targets:0,checkboxes:{selectRow:!0}}],select:{style:"multi"}};function o(o){o.columns.columns[0]={contentPadding:"",defaultContent:"",name:"",orderable:!1,searchable:!1,title:'<label class="custom-control fill-checkbox"><input type="checkbox" class="fill-control-input checkall"><span class="fill-control-indicator"></span></label>',visible:!1,className:"",width:"",data:null,render:function(e,t,a,n){var l,r="";return a.hasOwnProperty("id")&&(l=a.id),r+="",r+="<center><label class='custom-control fill-checkbox '><input type='checkbox' class='fill-control-input datatable-checkbox' value='",r+=l,r+="'",r+="/><span class='fill-control-indicator'></span></label></center>",r+=""}},o.columns.columns[o.columns.columns.length-1]={contentPadding:"",defaultContent:"",name:"",orderable:!1,searchable:!1,title:"",visible:!0,className:"",width:"",data:null,render:function(e,a,n,l){var r,o="";return n.hasOwnProperty("id")&&(r=n.id),t.props.btnDownload&&(r=n.productId),t.props.btnFormation&&(r=n.productId),o+="",t.props.btnDownload?o+='<button type="button" class="btn btn-primary btn-download" data-id="'+r+'"><i class="fas fa-download" aria-hidden="true"></i> &nbsp;Télécharger</button>':t.props.btnFormation?o+='<button type="button" class="btn btn-primary btn-formation" data-id="'+r+'"><i class="fas fa-book"></i> &nbsp;Accéder</button>':o+='<button type="button" class="btn btn-primary btn-facture-show" data-id="'+r+'">Voir</button>',o+=""}},$.extend(r,n),$.extend(r,{ajax:a.ajax}),$.extend(r,a.options),$.extend(r,a.features),$.extend(r,o.columns),t.setState({config:r});var c=[];$(document).on("click",".dataTables_wrapper .table tr td",(function(e){var a=$(this).parent().find(".datatable-checkbox").val();-1==t.state.clickExCol.indexOf($(this).parent().children().index($(this)))&&a&&t.handleClick({id:a})})),$(document).on("click",".btn-formation",(function(e){if(!t.state.isLoading&&!t.state.isDownloading){t.setState({isDownloading:!0});var a=$(this).attr("data-id");location.href="/formation/"+a+"/cursus"}})),$(document).on("click",".btn-download",(function(e){if(!t.state.isLoading&&!t.state.isDownloading){t.setState({isDownloading:!0});var a=$(this).attr("data-id");if(l(a)){var n=B+"/public/produit/"+a+"/download";$.ajax({dataType:"json",url:n,beforeSend:function(e){var t=localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):"";e.setRequestHeader("authorization",t)},success:function(e){var a=P+"/api/files/"+e.s_id+"/accesses/"+e.id+"/link";$.ajax({dataType:"json",url:a,beforeSend:function(e){var t=localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):"";e.setRequestHeader("authorization",t)},success:function(e){t.setState({isDownloading:!1}),location.href=e.url}})}})}else alert("Veuillez vous deconnecter puis vous reconnecter pour procéder au téléchargement"),t.setState({isDownloading:!1})}})),$(document).on("click",".btn-facture-show",(function(e){if(!t.state.isLoading){var a=$(this).attr("data-id");t.setState({isLoading:!0},t.props.onShowFacture({id:a}))}})),$(document).on("click",".border-switch-control-input",(function(){var e=$(this).closest(".border-switch-control-input"),a=e.is(":checked"),n=e.data("id"),l=a?"En Ligne":"Hors Ligne";e.parent(".custom-control.border-switch").find(".border-switch-control-description").text(l),t.handleActive({id:n,status:a})})),$(document).on("click",".checkall",(function(){var e=$(this).is(":checked");$(".datatable-checkbox").each((function(t){$(this).prop("checked",e),e?($(this).parent("label").parent("center").parent("td").parent("tr").addClass("active"),-1==(t=c.indexOf($(this).val()))&&c.push($(this).val())):($(this).parent("label").parent("center").parent("td").parent("tr").removeClass("active"),(t=c.indexOf($(this).val()))>-1&&c.splice(t,1))})),t.handleBatch({ids:c,status:e})})),$(document).on("click",".datatable-checkbox",(function(){$(this).prop("checked",!$(this).is(":checked")),$(this).prop("checked",!$(this).is(":checked"));var e=this;setTimeout((function(){if($(e).is(":checked")){var a=c.indexOf($(e).val());$(e).parent("label").parent("center").parent("td").parent("tr").addClass("active"),-1==a&&c.push($(e).val())}else $(e).parent("label").parent("center").parent("td").parent("tr").removeClass("active"),(a=c.indexOf($(e).val()))>-1&&c.splice(a,1);t.handleSelected({ids:c})}),200)}));var i=!1;r.initComplete=function(e,t){var n=this;$(".dataTables_filter").remove(),$.fn.DataTable.util.throttle((function(e){if("keyup"!=e.type||13==e.keyCode)return 0==i&&($(".dataTables_wrapper table").css({opacity:.2}),i=!0,void n.DataTable().column($(this).parent().index()+":visible").search(this.value).draw())}),a.options.searchDelay)};var s=$("."+e).DataTable(r).on("draw",(function(e){$(".dataTables_wrapper table").css({opacity:1}),i=!1,t.handleBatch({ids:[],status:!1}),t.handleResults({total:s.page.info()}),c=[]}))}t.props.dataTableConf?o(t.props.dataTableConf):$.ajax({dataType:"json",url:t.props.url,beforeSend:function(e){var t=localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):"";e.setRequestHeader("authorization",t)},success:function(e){o(e)}})}))}},{key:"componentDidMount",value:function(){"datatable"==this.props.table.mode&&this.loadDatatable()}},{key:"render",value:function(){var e=b({},this.props);e.c__Id&&e.c__Id;var t=e.blocks,a=p(e,u),n=(e.prefixCss,e.mode,e.onAction,e.btnAlign),o=this.state.btnAlignObj,c=(t.find((function(e){return"title"===e.name}))||{title:null}).title,i=(t.find((function(e){return"stitle"===e.name}))||{stitle:null}).stitle;return t.filter((function(e){return"cta"===e.name})),o[n]||o.center,l.a.createElement(r.a,d({useBorderSvg:!0,title:c,stitle:i},a),this.state.isLoading&&l.a.createElement("div",{className:"panier_loader"},l.a.createElement("div",{align:"center"},l.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw"}),l.a.createElement("span",{className:"sr-only"},"Loading...")),l.a.createElement("div",{className:"front_h2",style:{marginTop:"20px"},align:"center"},"Chargement en cours ...")),!this.state.isLoading&&l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-striped "+this.state.id})))}}])&&m(t.prototype,a),n&&m(t,n),i}(n.Component);D.defaultProps={mode:"view",prefixCss:"",sectionCss:"text-center ",btnAlign:"center",dataTableConf:null,btnDownload:!1,btnFormation:!1,url:"",bearer:"",table:{mode:"datatable",data:{}},bg:{class:"",img:{path:"",class:""}},blocks:[{name:"title",title:{txt:"Gros titre",class:""}},{name:"cta",class:"btn-primary",link:"#demo1",txt:"demo1",visible:!1},{name:"cta",class:"btn-secondary",link:"#demo2",txt:"demo2",visible:!1}],onAction:function(e){}};var I,A=D;function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function N(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=q(e);if(t){var l=q(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return J(this,a)}}function J(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var z=c.a._loadScript,G=c.a._store.getEnv(),V=G.scheme,W=G.domain,X=G.subdomain,Z=G.apiProd,K=G.domainApi,Q=(s.a.CancelToken,s.a.defaults.headers.common.Authorization,function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(c,e);var t,a,n,o=U(c);function c(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),H(M(t=o.call(this,e)),"deconnect",(function(){localStorage.removeItem("currentUser"),window.location.href="/"}));var a=0;if(void 0!==window.__UID_SITE){var n=window.__UID_SITE.filter((function(e){return"paiement"==e.nom}));n.length>0&&(a=n[0].distant_id)}var l="membership";t.props.wifeoCommande&&(l="user");var r=Z?X:l,i=("".concat(V,"://").concat(r,".").concat(Z?K:W,"/api/shops/")+a+"/commandes/me").replace("__API__",l),s=("".concat(V,"://").concat(r,".").concat(Z?K:W,"/api/shops/")+a+"/factures/").replace("__API__",l),u=("".concat(V,"://").concat(r,".").concat(Z?K:W,"/api/shops/")+a+"/downloadable/me").replace("__API__",l),d=("".concat(V,"://").concat(r,".").concat(Z?K:W,"/api/shops/")+a+"/formation/me").replace("__API__",l);return t.state={showfacture:!1,theFacture:{},urlCommande:i,urlDownload:u,urlFacture:s,urlFormation:d,isLogged:!(!localStorage||!localStorage.getItem("currentUser")),loadedFactureRcpt:!1},t}return t=c,(a=[{key:"showFacture",value:function(e){var t=this,a=localStorage.getItem("currentUser")?"Bearer "+localStorage.getItem("currentUser"):"";s.a.get(this.state.urlFacture+e.id,{headers:{Authorization:a,"Content-Type":"application/json"}}).then((function(e){t.state.loadedFactureRcpt?t.setState({theFacture:e.data,showFacture:!0}):z("".concat(V,"://editor.").concat(W,"/assets/js/facture-rcpt.min.js"),"js","rcpt-facture").then((function(){t.setState({loadedFactureRcpt:!0,theFacture:e.data,showFacture:!0})}))})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.state.isLogged||void 0!==window.NavBarHeader&&window.NavBarHeader.setState({action:"show_modal_login"})}},{key:"render",value:function(){var e=this;if(!this.state.isLogged)return null;var t=this.props.wifeoCommande,a=this.state.loadedFactureRcpt,n=a&&window.FactureRcpt&&window.FactureRcpt.default;return l.a.createElement(r.a,F({useBorderSvg:!0,title:null,stitle:null},this.props),l.a.createElement("div",{className:"container mt-3"},!this.state.showFacture&&l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex"},l.a.createElement("ul",{className:"nav nav-tabs flex-fill",id:"myTab",role:"tablist"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"},"Mes commandes")),!t&&l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"},"Mes Téléchargements")),!t&&l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",id:"formation-tab","data-toggle":"tab",href:"#formation",role:"tab","aria-controls":"profile","aria-selected":"false"},"Mes Formations"))),!t&&l.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:this.deconnect},"Déconnexion")),l.a.createElement("div",{className:"tab-content",id:"myTabContent"},l.a.createElement("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},l.a.createElement(A,F({},this.props,{url:this.state.urlCommande,btnDownload:!1,onShowFacture:function(t){e.showFacture(t)}})," "),l.a.createElement("br",null)),!t&&l.a.createElement("div",{className:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},l.a.createElement("br",null),l.a.createElement(A,F({},this.props,{dataTableConf:this.props.dataTableConfDownload,url:this.state.urlDownload,btnDownload:!0,onShowFacture:function(e){}})," ")),!t&&l.a.createElement("div",{className:"tab-pane fade",id:"formation",role:"tabpanel","aria-labelledby":"profile-tab"},l.a.createElement("br",null),l.a.createElement(A,F({},this.props,{dataTableConf:this.props.dataTableConfFormation,url:this.state.urlFormation,btnFormation:!0,onShowFacture:function(e){}})," ")))),this.state.showFacture&&l.a.createElement("div",{className:"col-12"},l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){e.setState({showFacture:!1})}},"Retour à mes commandes"),a&&l.a.createElement(n,{theFacture:this.state.theFacture}))))}}])&&N(t.prototype,a),n&&N(t,n),c}(n.Component));Q.defaultProps=(H(I={onAction:function(e){},wifeoCommande:!1,dataTableConf:{filters:[[{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"eq",cancelButton:!0,classes:"test1 test2",options:{search_type:"eq",cancel_button:!0,select_search_types:[],select_options:{1:"En attente",2:"Accepté",3:"Refusé",4:"Remboursé","":"Tous"},multiple:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}}]],columns:{columns:[{title:"Id",searchable:!0,visible:!1,orderable:!0,data:"id"},{title:"Date",searchable:!0,visible:!0,orderable:!1,data:"dateCreation"},{title:"Email client",searchable:!0,visible:!1,orderable:!0,data:"email"},{title:"Reference",searchable:!0,visible:!1,orderable:!0,data:"reference"},{title:"TotalTtc",searchable:!0,visible:!1,className:"never  ",orderable:!0,data:"totalTtc"},{width:"110px",title:"Total",searchable:!1,visible:!0,orderable:!1,data:"total_a_payer_recup"},{title:"Mode de paiement",searchable:!0,visible:!0,orderable:!1,data:"commandePaiements[, ].moyenPaiementBoutiqueId"},{title:"Statut du paiement",searchable:!0,visible:!1,orderable:!1,data:"commandePaiements[, ].statut"},{title:"Historique",searchable:!1,visible:!0,orderable:!1,data:"historiqueEtatCommandes[, ].etatCommandeId"},{title:"Facture",searchable:!0,visible:!0,className:"never  ",orderable:!0,data:"factureId"}]}},dataTableConfDownload:{filters:[[{searchType:"like",cancelButton:!1,placeholder:!0,initialSearch:null,searchColumn:null,placeholderText:null,classes:null,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,initialSearch:null,searchColumn:null,placeholderText:null,classes:null,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,initialSearch:null,searchColumn:null,placeholderText:null,classes:null,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,initialSearch:null,searchColumn:null,placeholderText:null,classes:null,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,initialSearch:null,searchColumn:null,placeholderText:null,classes:null,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,initialSearch:null,searchColumn:null,placeholderText:null,classes:null,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,initialSearch:null,searchColumn:null,placeholderText:null,classes:null,options:{search_type:"like",cancel_button:!1,placholder:!0}}]],columns:{columns:[{renderPostCreateDatatableJsContent:null,title:"Id",searchable:!0,visible:!0,orderable:!0,data:"id"},{renderPostCreateDatatableJsContent:null,title:"Image",searchable:!0,visible:!0,orderable:!0,data:"imageUrl"},{renderPostCreateDatatableJsContent:null,title:"PRODUCT",searchable:!0,visible:!1,orderable:!0,data:"productId"},{renderPostCreateDatatableJsContent:null,title:"Intitule",searchable:!0,visible:!0,orderable:!0,data:"intitule"},{renderPostCreateDatatableJsContent:null,title:"Ref. Commande",searchable:!0,visible:!0,orderable:!0,data:"reference"},{renderPostCreateDatatableJsContent:null,title:"Date",searchable:!0,visible:!0,orderable:!0,data:"dateCreation"},{renderPostCreateDatatableJsContent:null,width:"110px",title:"Telecharger",searchable:!1,visible:!0,orderable:!1,data:"downloadLink"}]}},dataTableConfFormation:{filters:[[{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}},{searchType:"like",cancelButton:!1,placeholder:!0,options:{search_type:"like",cancel_button:!1,placholder:!0}}]],columns:{columns:[{title:"Id",searchable:!0,visible:!0,orderable:!0,data:"id"},{title:"Image",searchable:!0,visible:!0,orderable:!0,data:"imageUrl"},{title:"Id Prod",searchable:!0,visible:!1,orderable:!0,data:"productId"},{title:"Intitule",searchable:!0,visible:!0,orderable:!0,data:"intitule"},{title:"Reference",searchable:!0,visible:!0,orderable:!0,data:"reference"},{title:"Date",searchable:!0,visible:!0,orderable:!0,data:"dateCreation"},{title:"Id Prod",searchable:!0,visible:!1,className:"never  ",orderable:!0,data:"formationId"},{width:"110px",title:"Telecharger",searchable:!1,visible:!0,orderable:!1,data:"downloadLink"}]},initialSearch:{searchCols:["null","null","null","null","null","null","null","null","null"]}},mode:"view",prefixCss:"",sectionCss:"text-center ",btnAlign:"center"},"dataTableConf",null),H(I,"btnDownload",!1),H(I,"url",""),H(I,"bearer",""),H(I,"table",{mode:"datatable",data:{}}),H(I,"bg",{class:"",img:{path:"",class:""}}),H(I,"blocks",[{name:"title",title:{txt:"Gros titre",class:""}},{name:"cta",class:"btn-primary",link:"#demo1",txt:"demo1",visible:!1},{name:"cta",class:"btn-secondary",link:"#demo2",txt:"demo2",visible:!1}]),I);t.default=Q}}]);