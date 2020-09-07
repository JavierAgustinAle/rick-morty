(this["webpackJsonprick-morty"]=this["webpackJsonprick-morty"]||[]).push([[0],{26:function(e,a,t){},45:function(e,a,t){e.exports=t(69)},50:function(e,a,t){},51:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),o=(t(50),t(32),t(16)),s=t(6),i=(t(51),function(){var e=function(e){switch(e){case"r-m":document.getElementById("r-m").className="nav-link active",document.getElementById("loc").className="nav-link",document.getElementById("ep").className="nav-link";break;case"loc":document.getElementById("loc").className="nav-link active",document.getElementById("r-m").className="nav-link",document.getElementById("ep").className="nav-link";break;case"ep":document.getElementById("ep").className="nav-link active",document.getElementById("loc").className="nav-link",document.getElementById("r-m").className="nav-link";break;default:document.getElementById("r-m").className="nav-link",document.getElementById("loc").className="nav-link",document.getElementById("ep").className="nav-link"}};return r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-expand-md navbar-dark bg-dark "},r.a.createElement("div",{className:"mx-auto"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active",id:"r-m"},r.a.createElement(o.b,{className:"nav-link",exact:!0,to:"/rick-morty",activeClassName:"activo",onClick:function(){return e("r-m")}}," Characters ")),r.a.createElement("li",{className:"nav-item",id:"loc"},r.a.createElement(o.b,{className:"nav-link",exact:!0,to:"/locations",activeClassName:"activo",onClick:function(){return e("loc")}}," Locations ")),r.a.createElement("li",{className:"nav-item",id:"ep"},r.a.createElement(o.b,{className:"nav-link",exact:!0,to:"/episodes",activeClassName:"activo",onClick:function(){return e("ep")}}," Episodes ")))))}),m=t(10),d=t(12),E=t(4),u=t(7);function p(){var e=Object(d.a)(["\n    query ($page: Int){\n        characters(page: $page){\n          info{\n            pages\n            next\n            prev\n          }\n          results{\n            id\n            name\n            image\n            type\n            gender\n            species\n          }\n        }\n      }\n    "]);return p=function(){return e},e}function g(){var e=Object(d.a)(["\n    query ($name: String, $type: String) {\n        characters( filter: { name: $name, type: $type }) {\n          results {\n            id\n            name\n            image\n            type\n            gender\n            species\n            status\n          }\n        }\n      }\n    "]);return g=function(){return e},e}var h=new u.a({uri:"https://rickandmortyapi.com/graphql"}),v={fetching:!1,array:[],filtered:[],search:"",nextPage:1,prevPage:0,totalPages:0,error:!1};var f=function(e){return function(a,t){var n,r=Object(u.b)(p());(a({type:"GET_CHARACTERS"}),void 0!==e)?n=t().characters.prevPage:n=t().characters.nextPage;return h.query({query:r,variables:{page:n}}).then((function(e){var t=e.data;a({type:"GET_CHARACTERS_SUCCESS",payload:t.characters.results}),a({type:"UPDATE_PAGE",payload:{next:t.characters.info.next?t.characters.info.next:null,prev:t.characters.info.prev?t.characters.info.prev:null,total:t.characters.info.pages}})})).catch((function(e){a({type:"GET_CHARACTERS_ERROR",payload:!0})}))}};function y(){var e=Object(d.a)(["\n    query ($page: Int){\n        episodes(page: $page){\n          info{\n            pages\n            next\n            prev\n          }\n          results{\n            id\n            name\n            episode\n            air_date\n            characters{\n               id\n               name\n               image\n            }\n          }\n        }\n      }\n    "]);return y=function(){return e},e}function b(){var e=Object(d.a)(["\n    query ($name: String) {\n        episodes( filter: { name: $name }) {\n            results{\n              id\n              name\n              episode\n              air_date\n              characters{\n                id\n                name\n                image\n              }\n            }\n          }\n      }\n    "]);return b=function(){return e},e}var N=new u.a({uri:"https://rickandmortyapi.com/graphql"}),S={fetching:!1,array:[],filtered:[],searchEpi:"",nextPageEpisod:1,prevPageEpisod:0,totalPagesEpisod:0,errorEpiso:!1};var O=function(e){return function(a,t){var n,r=Object(u.b)(y());(a({type:"GET_EPISODES"}),void 0!==e)?n=t().episodes.prevPageEpisod:n=t().episodes.nextPageEpisod;return N.query({query:r,variables:{page:n}}).then((function(e){for(var t=e.data,n=0;n<t.episodes.results.length;n++)for(var r=0;r<5;r++)t.episodes.results[n].characters.splice(5,t.episodes.results[n].characters.length);a({type:"GET_EPISODES_SUCCESS",payload:t.episodes.results}),a({type:"UPDATE_PAGE_EPISODE",payload:{next:t.episodes.info.next?t.episodes.info.next:null,prev:t.episodes.info.prev?t.episodes.info.prev:null,total:t.episodes.info.pages}})})).catch((function(e){a({type:"GET_EPISODES_ERROR",payload:!0})}))}};function _(){var e=Object(d.a)(["\n        query ($page: Int){\n            locations(page: $page){\n            info{\n                pages\n                next\n                prev\n            }\n            results{\n                id\n                name\n                type\n                dimension\n                residents{\n                id\n                name\n                image\n                }\n            }\n            }\n        }\n    "]);return _=function(){return e},e}function T(){var e=Object(d.a)(["\n    query ($name: String, $type: String) {\n        locations( filter: { name: $name, type: $type }) {\n            results{\n              id\n              name\n              dimension\n              type\n              residents{\n                id\n                name\n                image\n              }\n            }\n          }\n      }\n    "]);return T=function(){return e},e}var x=new u.a({uri:"https://rickandmortyapi.com/graphql"}),C={fetching:!1,array:[],filtered:[],searchLoc:"",nextPageLoca:1,prevPageLoca:0,totalPagesLoca:0,errorLoc:!1};var k=function(e){return function(a,t){var n,r=Object(u.b)(_());(a({type:"GET_LOCATIONS"}),void 0!==e)?n=t().locations.prevPageLoca:n=t().locations.nextPageLoca;return x.query({query:r,variables:{page:n}}).then((function(e){for(var t=e.data,n=(e.error,0);n<t.locations.results.length;n++)for(var r=0;r<5;r++)t.locations.results[n].residents.splice(5,t.locations.results[n].residents.length);a({type:"GET_LOCATIONS_SUCCESS",payload:t.locations.results}),a({type:"UPDATE_PAGE_LOCATIONS",payload:{nextLoc:t.locations.info.next?t.locations.info.next:null,prevLoc:t.locations.info.prev?t.locations.info.prev:null,totalLoc:t.locations.info.pages}})})).catch((function(e){a({type:"GET_LOCATIONS_ERROR",payload:!0})}))}};var R=Object(m.b)((function(e){return{}}),{getCharFiltersAction:function(e,a){return function(t,n){var r=Object(u.b)(g());return t({type:"GET_FILTERS"}),h.query({query:r,variables:{name:e,type:a}}).then((function(n){var r=n.data;t({type:"SET_SEARCH",payload:e||a}),t({type:"GET_FILTERS_SUCCESS",payload:r.characters.results})})).catch((function(e){t({type:"GET_FILTERS_ERROR",payload:!0})}))}},getEpisodesFiltersAction:function(e){return function(a,t){var n=Object(u.b)(b());return a({type:"GET_FILTERS_EPISODES"}),N.query({query:n,variables:{name:e}}).then((function(t){for(var n=t.data,r=0;r<n.episodes.results.length;r++)for(var c=0;c<5;c++)n.episodes.results[r].characters.splice(5,n.episodes.results[r].characters.length);a({type:"GET_FILTERS_EPISODES_SUCCESS",payload:n.episodes.results}),a({type:"SET_SEARCH_EP",payload:e})})).catch((function(e){a({type:"GET_FILTERS_EPISODES_ERROR",payload:!0})}))}},getLocationsFiltersAction:function(e,a){return function(t,n){var r=Object(u.b)(T());return t({type:"GET_LOCATIONS_FILTERS"}),x.query({query:r,variables:{name:e,type:a}}).then((function(n){for(var r=n.data,c=0;c<r.locations.results.length;c++)for(var l=0;l<5;l++)r.locations.results[c].residents.splice(5,r.locations.results[c].residents.length);t({type:"GET_LOCATIONS_FILTERS_SUCCESS",payload:r.locations.results}),t({type:"SET_SEARCH_LOC",payload:e||a})})).catch((function(e){t({type:"GET_LOCATIONS_FILTERS_ERROR",payload:!0})}))}},removeSearchCharAction:function(){return function(e,a){e({type:"REMOVE_FILTERED",payload:[]})}},removeSearchEpisodeAction:function(){return function(e,a){e({type:"REMOVE_FILTERED",payload:[]})}},removeSearchLocationsAction:function(){return function(e,a){e({type:"REMOVE_FILTERED",payload:[]})}}})((function(e){var a=e.title,t=e.getCharFiltersAction,n=e.getEpisodesFiltersAction,c=e.getLocationsFiltersAction,l=e.removeSearchCharAction,o=e.removeSearchEpisodeAction,s=e.removeSearchLocationsAction;function i(e){var r=e.target.value;if(r.length>0&&(r=r[0].toUpperCase()+r.slice(1)),r.length>2){if("characters"===a)"name"===document.getElementById("searchType").value?t(r,""):t("",r);if("episodes"===a&&n(r),"locations"===a)"name"===document.getElementById("searchType").value?c(r,""):c("",r)}}function m(){"characters"===a&&(l(),document.getElementById("input").value=""),"episodes"===a&&(o(),document.getElementById("input-episodes").value=""),"locations"===a&&(s(),document.getElementById("input").value="")}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pb-2"},"episodes"===a?r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search ".concat(a," name"),"aria-label":"Search",onChange:i,onKeyPress:function(e){if(13===e.keyCode)return!1},id:"input-episodes"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{onChange:m,className:"custom-select col-lg-4 col-md-4 col-sm-5 pb-2",id:"searchType"},r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"type"},"Type")),r.a.createElement("input",{className:"form-control pt-2",type:"text",placeholder:"Search ".concat(a),"aria-label":"Search",onChange:i,onKeyPress:function(e){if(13===e.keyCode)return!1},id:"input"})),r.a.createElement("button",{className:"btn btn-sm float-right",onClick:m},"Clear Search")))})),L=t(24),I=(t(26),t(13)),P=t.n(I);P.a.setAppElement("#root");var A=function(e){var a=e.data,t=e.onHide,n=e.show;return r.a.createElement(P.a,{isOpen:n,style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"#4B515D",position:"absolute"}}},r.a.createElement("div",{className:"card mb-3 text-white bg-secondary"},r.a.createElement("div",{className:"text-right pb-1"},r.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:t},r.a.createElement("i",{class:"fa fa-times"}))),r.a.createElement("img",{className:"card-img-top rounded mx-auto w-25",src:a.image,alt:a.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title text-center"},a.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",{className:"card-text"},"Gender: ".concat(a.gender))),r.a.createElement("li",null,r.a.createElement("p",{className:"card-text"},"Species: ".concat(a.species))),r.a.createElement("li",null,r.a.createElement("p",{className:"card-text"},"Type: ".concat(a.type?a.type:"No data")))))))},j=function(e){var a=e.data,t=Object(n.useState)(!1),c=Object(L.a)(t,2),l=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-2 mb-2 col-lg-4 col-md-5 col-sm-6 mx-auto"},r.a.createElement("div",{className:"card text-white bg-secondary h-100 mx-auto",style:{width:"18rem"}},r.a.createElement("div",{className:"embed-responsive embed-responsive-1by1"},r.a.createElement("button",{onClick:function(){o(!0)}},r.a.createElement("img",{className:"card-img-top embed-responsive-item",src:a.image,alt:a.id,title:"Click for more info!"}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title text-center"},a.name)))),l?r.a.createElement(A,{show:l,onHide:function(){o(!1)},data:a}):"")};var w=Object(m.b)((function(e){return{charsTotal:e.characters.totalPages,episodTotal:e.episodes.totalPagesEpisod,locationTotal:e.locations.totalPagesLoca,charsNext:e.characters.nextPage,episodNext:e.episodes.nextPageEpisod,locationNext:e.locations.nextPageLoca,charsPrev:e.characters.prevPage,episodPrev:e.episodes.prevPageEpisod,locationPrev:e.locations.prevPageLoca}}),{getCharactersAction:f,getEpisodesAction:O,getLocationsAction:k})((function(e){var a=e.title,t=e.charsTotal,n=e.episodTotal,c=e.locationTotal,l=e.charsNext,o=e.episodNext,s=e.locationNext,i=e.charsPrev,m=e.episodPrev,d=e.locationPrev,E=e.getCharactersAction,u=e.getEpisodesAction,p=e.getLocationsAction;function g(){switch(a){case"episodes":u();break;case"characters":E();break;case"locations":p();break;default:return!1}}function h(){switch(a){case"episodes":u(m);break;case"characters":E(i);break;case"locations":p(d);break;default:return!1}}return"episodes"===a?r.a.createElement("nav",{className:"pt-3"},r.a.createElement("ul",{className:"pagination justify-content-center"},r.a.createElement("li",{className:"page-item ".concat(null===m?"disabled":"")},r.a.createElement("button",{className:"page-link",onClick:h},"Previous")),r.a.createElement("li",{className:"page-item disabled"},r.a.createElement("label",{className:"page-link text-info"},"".concat(null!=o?o-1:n," of ").concat(n))),r.a.createElement("li",{className:"page-item ".concat(null===o?"disabled":"")},r.a.createElement("button",{className:"page-link",onClick:g},"Next")))):"characters"===a?r.a.createElement("nav",{className:"pt-3"},r.a.createElement("ul",{className:"pagination justify-content-center"},r.a.createElement("li",{className:"page-item ".concat(null===i?"disabled":"")},r.a.createElement("button",{className:"page-link",onClick:h},"Previous")),r.a.createElement("li",{className:"page-item disabled"},r.a.createElement("label",{className:"page-link text-info"},"".concat(null!=l?l-1:t," of ").concat(t))),r.a.createElement("li",{className:"page-item ".concat(null===l?"disabled":"")},r.a.createElement("button",{className:"page-link",onClick:g},"Next")))):"locations"===a?r.a.createElement("nav",{className:"pt-3"},r.a.createElement("ul",{className:"pagination justify-content-center"},r.a.createElement("li",{className:"page-item ".concat(null===d?"disabled":"")},r.a.createElement("button",{onClick:h,className:"page-link"},"Previous")),r.a.createElement("li",{className:"page-item disabled"},r.a.createElement("label",{className:"page-link text-info"},"".concat(null!=s?s-1:c," of ").concat(c))),r.a.createElement("li",{className:"page-item ".concat(null===s?"disabled":"")},r.a.createElement("button",{className:"page-link",onClick:g},"Next")))):void 0})),G=function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"text-danger"},"There is no data for this search :("))};var F=Object(m.b)((function(e){return{initial:e.characters.array,filtered:e.characters.filtered,error:e.characters.error,search:e.characters.search}}))((function(e){var a=e.initial,t=e.filtered,n=e.error,c=e.search;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"pt-1 text-center"},"Search your favorite character"),r.a.createElement("div",{className:"mx-auto col-8 col-sm-7 pt-3 pb-3"},r.a.createElement(R,{title:"characters"}),n?r.a.createElement("div",{className:"mx-auto"},r.a.createElement(G,null)):"",c?n?"":r.a.createElement("span",null,r.a.createElement("small",null,"Showing info for ".concat(c))):""),r.a.createElement("br",null),r.a.createElement("div",{className:"row pl-2 pr-2 pb-3"},!1===n?t.length<1?a.map((function(e){return r.a.createElement(j,{key:e.id,data:e})})):t.map((function(e){return r.a.createElement(j,{key:e.id,data:e})})):""),!1===n&&t<1?r.a.createElement("div",{className:"pb-2"},r.a.createElement(w,{title:"characters"})):"")}));t(67);P.a.setAppElement("#root");var D=function(e){var a=e.data,t=e.onHide,n=e.show;return r.a.createElement(P.a,{isOpen:n,style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"#4B515D",position:"absolute"}}},r.a.createElement("div",{className:"card mb-3 text-white bg-secondary"},r.a.createElement("div",{className:"text-right  pb-1"},r.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:t},r.a.createElement("i",{class:"fa fa-times"}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title text-center"},a.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",{className:"card-text"},"Dimension: ".concat(a.dimension))),r.a.createElement("li",null,r.a.createElement("p",{className:"card-text"},"Type: ".concat(a.type)))),r.a.createElement("h5",{className:"text-center"},"Residents"),null!=a.residents[0].id?r.a.createElement("div",{className:"card-deck"},a.residents.map((function(e){return r.a.createElement("div",{className:"card",key:e.name,style:{maxWidth:"14rem"}},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}),r.a.createElement("div",{className:"card-body text-dark"},r.a.createElement("h5",{className:"card-title text-center"},e.name)))}))):r.a.createElement("h6",{className:"text-center pt-2"},"No residents in this location."))))};P.a.setAppElement("#root");var q=function(e){var a=e.data,t=e.onHide,n=e.show;return r.a.createElement(P.a,{isOpen:n,style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"#4B515D",position:"absolute"}}},r.a.createElement("div",{className:"card mb-3 text-white bg-secondary"},r.a.createElement("div",{className:"text-right  pb-1"},r.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:t},r.a.createElement("i",{class:"fa fa-times"}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title text-center"},a.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",{className:"card-text"},"Release Date: ".concat(a.air_date))),r.a.createElement("li",null,r.a.createElement("p",{className:"card-text"},"Episode: ".concat(a.episode)))),r.a.createElement("h3",{className:"text-center"},"Characters"),r.a.createElement("div",{className:"card-deck"},a.characters.map((function(e){return r.a.createElement("div",{className:"card",key:e.name},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}),r.a.createElement("div",{className:"card-body text-dark"},r.a.createElement("h5",{className:"card-title text-center"},e.name)))}))))))},B=function(e){var a=e.data,t=e.title,c=Object(n.useState)(!1),l=Object(L.a)(c,2),o=l[0],s=l[1];function i(){s(!1)}function m(){s(!0)}return"episodes"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-2 mb-2 col-lg-4 col-md-5 col-sm-6 mx-auto"},r.a.createElement("div",{className:"card text-white bg-secondary h-100 mx-auto",style:{width:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title text-center"},a.name),r.a.createElement("br",null),r.a.createElement("p",null,"Episode: ",a.episode)),r.a.createElement("div",{className:"card-footer text-right"},r.a.createElement("button",{className:"btn btn-sm btn-info",onClick:m},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))),o?r.a.createElement(q,{show:o,onHide:i,data:a}):""):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-2 mb-2 col-lg-4 col-md-5 col-sm-6 mx-auto"},r.a.createElement("div",{className:"card text-white bg-secondary h-100 mx-auto",style:{width:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title text-center"},a.name),"unknown"===a.dimension?r.a.createElement("p",null,"Dimension unknown"):r.a.createElement("p",null,a.dimension)),r.a.createElement("div",{className:"card-footer text-right"},r.a.createElement("button",{className:"btn btn-sm btn-info",onClick:m},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))),o?r.a.createElement(D,{show:o,onHide:i,data:a}):"")};var U=Object(m.b)((function(e){return{initial:e.locations.array,filtered:e.locations.filtered,error:e.locations.errorLoc,search:e.locations.searchLoc}}))((function(e){var a=e.initial,t=e.filtered,n=e.error,c=e.search,l="locations";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"pt-1 text-center"},"Search your favorite location"),r.a.createElement("div",{className:"mx-auto col-8 col-sm-7 pt-3 pb-3"},r.a.createElement(R,{title:l}),n?r.a.createElement("div",{className:"mx-auto"},r.a.createElement(G,null)):"",c?n?"":r.a.createElement("span",null,r.a.createElement("small",null,"Showing info for ".concat(c))):""),r.a.createElement("br",null),r.a.createElement("div",{className:"row pl-2 pr-2 pb-3"},!1===n?t.length<1?a.map((function(e){return r.a.createElement(B,{title:l,key:e.id,data:e})})):t.map((function(e){return r.a.createElement(B,{title:l,key:e.id,data:e})})):""),!1===n&&t<1?r.a.createElement("div",{className:"pb-2"},r.a.createElement(w,{title:l})):"")}));var H=Object(m.b)((function(e){return{initial:e.episodes.array,filtered:e.episodes.filtered,error:e.episodes.errorEpiso,search:e.episodes.searchEpi}}))((function(e){var a=e.initial,t=e.filtered,n=e.error,c=e.search,l="episodes";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"pt-1 text-center"},"Search your favorite episode"),r.a.createElement("div",{className:"mx-auto col-8 col-sm-7 pt-3 pb-3"},r.a.createElement(R,{title:l}),n?r.a.createElement("div",{className:"mx-auto"},r.a.createElement(G,null)):"",c?n?"":r.a.createElement("span",null,r.a.createElement("small",null,"Showing info for ".concat(c))):""),r.a.createElement("br",null),r.a.createElement("div",{className:"row pl-2 pr-2 pb-3"},!1===n?t.length<1?a.map((function(e){return r.a.createElement(B,{title:l,key:e.id,data:e})})):t.map((function(e){return r.a.createElement(B,{title:l,key:e.id,data:e})})):""),!1===n&&t<1?r.a.createElement("div",{className:"pb-2"},r.a.createElement(w,{title:l})):"")})),$=function(){var e=new Date,a=e.getDate(),t=e.getMonth()+1,n=e.getFullYear();return a<10&&(a="0"+a),e=a+"/"+t+"/"+n,r.a.createElement("div",{className:"pt-5"},r.a.createElement("div",{className:"navbar navbar-dark fixed-bottom bg-dark"},r.a.createElement("p",{className:"text-left text-white"},"JAVIER ALE"),r.a.createElement("p",{className:"text-right text-white"},"Date: ".concat(e))))},M=function(){return r.a.createElement(o.a,null,r.a.createElement(i,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/rick-morty",exact:!0,component:F}),r.a.createElement(s.a,{path:"/locations",exact:!0,component:U}),r.a.createElement(s.a,{path:"/episodes",exact:!0,component:H}),r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Error 404"),r.a.createElement("span",{className:"text-danger"},"Pagina no encontrada.")))),r.a.createElement($,null))};t(68);var V=function(){return r.a.createElement("div",{className:"style"},r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(15),W=t(44),K=Object(J.c)({characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CHARACTERS":return Object(E.a)({},e,{fetching:!0});case"GET_CHARACTERS_ERROR":return Object(E.a)({},e,{fetching:!1,error:a.payload});case"GET_CHARACTERS_SUCCESS":return Object(E.a)({},e,{array:a.payload,fetching:!1});case"GET_FILTERS":return Object(E.a)({},e,{fetching:!0});case"GET_FILTERS_ERROR":return Object(E.a)({},e,{fetching:!1,error:a.payload,filtered:[]});case"GET_FILTERS_SUCCESS":return Object(E.a)({},e,{filtered:a.payload,fetching:!1,error:!1});case"REMOVE_FILTERED":return Object(E.a)({},e,{filtered:a.payload,error:!1,search:""});case"SET_SEARCH":return Object(E.a)({},e,{search:a.payload});case"UPDATE_PAGE":return Object(E.a)({},e,{nextPage:a.payload.next,prevPage:a.payload.prev,totalPages:a.payload.total});default:return e}},locations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_LOCATIONS":return Object(E.a)({},e,{fetching:!0});case"GET_LOCATIONS_ERROR":return Object(E.a)({},e,{fetching:!1,errorLoc:a.payload});case"GET_LOCATIONS_SUCCESS":return Object(E.a)({},e,{array:a.payload,fetching:!1,errorLoc:!1});case"GET_LOCATIONS_FILTERS":return Object(E.a)({},e,{fetching:!0});case"GET_LOCATIONS_FILTERS_ERROR":return Object(E.a)({},e,{fetching:!1,errorLoc:a.payload});case"GET_LOCATIONS_FILTERS_SUCCESS":return Object(E.a)({},e,{filtered:a.payload,fetching:!1,errorLoc:!1});case"REMOVE_FILTERED":return Object(E.a)({},e,{filtered:a.payload,errorLoc:!1,searchLoc:""});case"UPDATE_PAGE_LOCATIONS":return Object(E.a)({},e,{nextPageLoca:a.payload.nextLoc,prevPageLoca:a.payload.prevLoc,totalPagesLoca:a.payload.totalLoc});case"SET_SEARCH_LOC":return Object(E.a)({},e,{searchLoc:a.payload});default:return e}},episodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_EPISODES":return Object(E.a)({},e,{fetching:!0});case"GET_EPISODES_ERROR":return Object(E.a)({},e,{fetching:!1,errorEpiso:a.payload});case"GET_EPISODES_SUCCESS":return Object(E.a)({},e,{array:a.payload,fetching:!1,errorEpiso:!1});case"GET_FILTERS_EPISODES":return Object(E.a)({},e,{fetching:!0});case"GET_FILTERS_EPISODES_ERROR":return Object(E.a)({},e,{fetching:!1,errorEpiso:a.payload});case"GET_FILTERS_EPISODES_SUCCESS":return Object(E.a)({},e,{filtered:a.payload,fetching:!1,errorEpiso:!1});case"REMOVE_FILTERED":return Object(E.a)({},e,{filtered:a.payload,errorEpiso:!1,searchEpi:""});case"UPDATE_PAGE_EPISODE":return Object(E.a)({},e,{nextPageEpisod:a.payload.next,prevPageEpisod:a.payload.prev,totalPagesEpisod:a.payload.total});case"SET_SEARCH_EP":return Object(E.a)({},e,{searchEpi:a.payload});default:return e}}}),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d;var Y=t(72),z=function(){var e=Object(J.e)(K,X(Object(J.a)(W.a)));return f()(e.dispatch,e.getState),k()(e.dispatch,e.getState),O()(e.dispatch,e.getState),e}(),Q=new u.a({uri:"https://rickandmortyapi.com/graphql"}),Z=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null))},ee=function(){return r.a.createElement(m.a,{store:z}," ",r.a.createElement(Z,null))},ae=function(){return r.a.createElement(Y.a,{client:Q},r.a.createElement(ee,null))};l.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.37ea9200.chunk.js.map