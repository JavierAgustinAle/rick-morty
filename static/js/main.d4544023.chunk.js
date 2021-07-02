(this["webpackJsonprick-morty"]=this["webpackJsonprick-morty"]||[]).push([[0],{28:function(e,a,t){},47:function(e,a,t){e.exports=t(71)},52:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t.n(r),o=(t(52),t(33),t(18)),s=t(7),i=function(){var e=function(e){switch(e){case"r-m":document.getElementById("r-m").className="nav-link active",document.getElementById("loc").className="nav-link",document.getElementById("ep").className="nav-link";break;case"loc":document.getElementById("loc").className="nav-link active",document.getElementById("r-m").className="nav-link",document.getElementById("ep").className="nav-link";break;case"ep":document.getElementById("ep").className="nav-link active",document.getElementById("loc").className="nav-link",document.getElementById("r-m").className="nav-link";break;default:document.getElementById("r-m").className="nav-link",document.getElementById("loc").className="nav-link",document.getElementById("ep").className="nav-link"}};return c.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-expand-md navbar-dark bg-dark "},c.a.createElement("div",{className:"mx-auto"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active",id:"r-m"},c.a.createElement(o.b,{className:"nav-link",exact:!0,to:"/rick-morty",activeClassName:"activo",onClick:function(){return e("r-m")}}," Characters ")),c.a.createElement("li",{className:"nav-item",id:"loc"},c.a.createElement(o.b,{className:"nav-link",exact:!0,to:"/locations",activeClassName:"activo",onClick:function(){return e("loc")}}," Locations ")),c.a.createElement("li",{className:"nav-item",id:"ep"},c.a.createElement(o.b,{className:"nav-link",exact:!0,to:"/episodes",activeClassName:"activo",onClick:function(){return e("ep")}}," Episodes ")))))},m=t(6),u=t(14),d=t(4),E=t(10),p=new E.a({uri:"https://rickandmortyapi.com/graphql"});function g(){var e=Object(u.a)(["\n    query ($page: Int){\n        characters(page: $page){\n          info{\n            pages\n            next\n            prev\n          }\n          results{\n            id\n            name\n            image\n            type\n            gender\n            species\n          }\n        }\n      }\n    "]);return g=function(){return e},e}function f(){var e=Object(u.a)(["\n    query ($name: String, $type: String) {\n        characters( filter: { name: $name, type: $type }) {\n          results {\n            id\n            name\n            image\n            type\n            gender\n            species\n            status\n          }\n        }\n      }\n    "]);return f=function(){return e},e}var b={fetching:!1,array:[],filtered:[],search:"",nextPage:1,prevPage:0,totalPages:0,error:!1};var v=function(e){return function(a,t){var n,c=Object(E.b)(g());(a({type:"GET_CHARACTERS"}),void 0!==e)?n=t().characters.prevPage:n=t().characters.nextPage;return p.query({query:c,variables:{page:n}}).then((function(e){var t=e.data;a({type:"GET_CHARACTERS_SUCCESS",payload:t.characters.results}),a({type:"UPDATE_PAGE",payload:{next:t.characters.info.next?t.characters.info.next:null,prev:t.characters.info.prev?t.characters.info.prev:null,total:t.characters.info.pages}})})).catch((function(e){a({type:"GET_CHARACTERS_ERROR",payload:!0})}))}};function h(){var e=Object(u.a)(["\n    query ($page: Int){\n        episodes(page: $page){\n          info{\n            pages\n            next\n            prev\n          }\n          results{\n            id\n            name\n            episode\n            air_date\n            characters{\n               id\n               name\n               image\n            }\n          }\n        }\n      }\n    "]);return h=function(){return e},e}function y(){var e=Object(u.a)(["\n    query ($name: String) {\n        episodes( filter: { name: $name }) {\n            results{\n              id\n              name\n              episode\n              air_date\n              characters{\n                id\n                name\n                image\n              }\n            }\n          }\n      }\n    "]);return y=function(){return e},e}var O={fetching:!1,array:[],filteredEpi:[],searchEpi:"",nextPageEpisod:1,prevPageEpisod:0,totalPagesEpisod:0,errorEpiso:!1};var N=function(e){return function(a,t){var n,c=Object(E.b)(h());(a({type:"GET_EPISODES"}),void 0!==e)?n=t().episodes.prevPageEpisod:n=t().episodes.nextPageEpisod;return p.query({query:c,variables:{page:n}}).then((function(e){for(var t=e.data,n=0;n<t.episodes.results.length;n++)for(var c=0;c<5;c++)t.episodes.results[n].characters.splice(5,t.episodes.results[n].characters.length);a({type:"GET_EPISODES_SUCCESS",payload:t.episodes.results}),a({type:"UPDATE_PAGE_EPISODE",payload:{next:t.episodes.info.next?t.episodes.info.next:null,prev:t.episodes.info.prev?t.episodes.info.prev:null,total:t.episodes.info.pages}})})).catch((function(e){a({type:"GET_EPISODES_ERROR",payload:!0})}))}};function S(){var e=Object(u.a)(["\n        query ($page: Int){\n            locations(page: $page){\n            info{\n                pages\n                next\n                prev\n            }\n            results{\n                id\n                name\n                type\n                dimension\n                residents{\n                id\n                name\n                image\n                }\n            }\n            }\n        }\n    "]);return S=function(){return e},e}function _(){var e=Object(u.a)(["\n    query ($name: String, $type: String) {\n        locations( filter: { name: $name, type: $type }) {\n            results{\n              id\n              name\n              dimension\n              type\n              residents{\n                id\n                name\n                image\n              }\n            }\n          }\n      }\n    "]);return _=function(){return e},e}var x={fetching:!1,array:[],filteredLoc:[],searchLoc:"",nextPageLoca:1,prevPageLoca:0,totalPagesLoca:0,errorLoc:!1};var T=function(e){return function(a,t){var n,c=Object(E.b)(S());(a({type:"GET_LOCATIONS"}),void 0!==e)?n=t().locations.prevPageLoca:n=t().locations.nextPageLoca;return p.query({query:c,variables:{page:n}}).then((function(e){for(var t=e.data,n=(e.error,0);n<t.locations.results.length;n++)for(var c=0;c<5;c++)t.locations.results[n].residents.splice(5,t.locations.results[n].residents.length);a({type:"GET_LOCATIONS_SUCCESS",payload:t.locations.results}),a({type:"UPDATE_PAGE_LOCATIONS",payload:{nextLoc:t.locations.info.next?t.locations.info.next:null,prevLoc:t.locations.info.prev?t.locations.info.prev:null,totalLoc:t.locations.info.pages}})})).catch((function(e){a({type:"GET_LOCATIONS_ERROR",payload:!0})}))}};var C=Object(m.b)((function(e){return{}}),{getCharFiltersAction:function(e,a){return function(t,n){var c=Object(E.b)(f());return t({type:"GET_FILTERS"}),p.query({query:c,variables:{name:e,type:a}}).then((function(n){var c=n.data;t({type:"SET_SEARCH",payload:e||a}),t({type:"GET_FILTERS_SUCCESS",payload:c.characters.results})})).catch((function(e){t({type:"GET_FILTERS_ERROR",payload:!0})}))}},getEpisodesFiltersAction:function(e){return function(a,t){var n=Object(E.b)(y());return a({type:"GET_FILTERS_EPISODES"}),p.query({query:n,variables:{name:e}}).then((function(t){for(var n=t.data,c=0;c<n.episodes.results.length;c++)for(var r=0;r<5;r++)n.episodes.results[c].characters.splice(5,n.episodes.results[c].characters.length);a({type:"GET_FILTERS_EPISODES_SUCCESS",payload:n.episodes.results}),a({type:"SET_SEARCH_EP",payload:e})})).catch((function(e){a({type:"GET_FILTERS_EPISODES_ERROR",payload:!0})}))}},getLocationsFiltersAction:function(e,a){return function(t,n){var c=Object(E.b)(_());return t({type:"GET_LOCATIONS_FILTERS"}),p.query({query:c,variables:{name:e,type:a}}).then((function(n){for(var c=n.data,r=0;r<c.locations.results.length;r++)for(var l=0;l<5;l++)c.locations.results[r].residents.splice(5,c.locations.results[r].residents.length);t({type:"GET_LOCATIONS_FILTERS_SUCCESS",payload:c.locations.results}),t({type:"SET_SEARCH_LOC",payload:e||a})})).catch((function(e){t({type:"GET_LOCATIONS_FILTERS_ERROR",payload:!0})}))}},removeSearchCharAction:function(){return function(e,a){e({type:"REMOVE_FILTERED",payload:[]})}},removeSearchEpisodeAction:function(){return function(e,a){e({type:"REMOVE_FILTERED_EPISODE",payload:[]})}},removeSearchLocationsAction:function(){return function(e,a){e({type:"REMOVE_FILTERED_LOCATION",payload:[]})}}})((function(e){var a=e.title,t=e.getCharFiltersAction,n=e.getEpisodesFiltersAction,r=e.getLocationsFiltersAction,l=e.removeSearchCharAction,o=e.removeSearchEpisodeAction,s=e.removeSearchLocationsAction;function i(e){var c=e.target.value;if(c.length>0&&(c=c[0].toUpperCase()+c.slice(1)),c.length>2){if("characters"===a)"name"===document.getElementById("searchType").value?t(c,""):t("",c);if("episodes"===a&&n(c),"locations"===a)"name"===document.getElementById("searchType").value?r(c,""):r("",c)}}function m(){"characters"===a&&(l(),document.getElementById("input").value=""),"episodes"===a&&(o(),document.getElementById("input-episodes").value=""),"locations"===a&&(s(),document.getElementById("input").value="")}return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pb-2"},"episodes"===a?c.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search ".concat(a," name"),"aria-label":"Search",onChange:i,onKeyPress:function(e){if(13===e.keyCode)return!1},id:"input-episodes"}):c.a.createElement(c.a.Fragment,null,c.a.createElement("select",{onChange:m,className:"custom-select col-lg-4 col-md-4 col-sm-5 pb-2",id:"searchType"},c.a.createElement("option",{value:"name"},"Name"),c.a.createElement("option",{value:"type"},"Type")),c.a.createElement("input",{className:"form-control pt-2",type:"text",placeholder:"Search ".concat(a),"aria-label":"Search",onChange:i,onKeyPress:function(e){if(13===e.keyCode)return!1},id:"input"})),c.a.createElement("button",{className:"btn btn-sm float-right",onClick:m},"Clear Search")))})),j=t(26),k=(t(28),t(15)),R=t.n(k);R.a.setAppElement("#root");var L=function(e){var a=e.data,t=e.onHide,n=e.show;return c.a.createElement(R.a,{isOpen:n,style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"#4B515D",position:"absolute"}}},c.a.createElement("div",{className:"card mb-3 text-white bg-secondary"},c.a.createElement("div",{className:"text-right pb-1"},c.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:t},c.a.createElement("i",{className:"fa fa-times"}))),c.a.createElement("img",{className:"card-img-top rounded mx-auto w-25",src:a.image,alt:a.name}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"},a.name),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("p",{className:"card-text"},"Gender: ".concat(a.gender))),c.a.createElement("li",null,c.a.createElement("p",{className:"card-text"},"Species: ".concat(a.species))),c.a.createElement("li",null,c.a.createElement("p",{className:"card-text"},"Type: ".concat(a.type?a.type:"No data")))))))},P=function(e){var a=e.data,t=Object(n.useState)(!1),r=Object(j.a)(t,2),l=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mt-2 mb-2 col-lg-4 col-md-5 col-sm-6 mx-auto"},c.a.createElement("div",{className:"card text-white bg-secondary h-100 mx-auto",style:{width:"18rem"}},c.a.createElement("div",{className:"embed-responsive embed-responsive-1by1"},c.a.createElement("button",{onClick:function(){o(!0)}},c.a.createElement("img",{className:"card-img-top embed-responsive-item",src:a.image,alt:a.id,title:"Click for more info!"}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"},a.name)))),l&&c.a.createElement(L,{show:l,onHide:function(){o(!1)},data:a}))};var I=Object(m.b)((function(e){return{}}),{getCharactersAction:v,getEpisodesAction:N,getLocationsAction:T})((function(e){var a=e.title,t=e.getCharactersAction,n=e.getEpisodesAction,r=e.getLocationsAction,l=Object(m.c)((function(e){return e.characters})),o=Object(m.c)((function(e){return e.episodes})),s=Object(m.c)((function(e){return e.locations})),i=function(){switch(a){case"episodes":n();break;case"characters":t();break;case"locations":r();break;default:return!1}},u=function(){switch(a){case"episodes":n(o.prevPageEpisod);break;case"characters":t(l.prevPage);break;case"locations":r(s.prevPageLoca);break;default:return!1}};return"episodes"===a?c.a.createElement("nav",{className:"pt-3"},c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement("li",{className:"page-item ".concat(null===o.prevPageEpisod?"disabled":"")},c.a.createElement("button",{className:"page-link",onClick:u},"Previous")),c.a.createElement("li",{className:"page-item disabled"},c.a.createElement("label",{className:"page-link text-info"},"".concat(null!=o.nextPageEpisod?o.nextPageEpisod-1:o.totalPagesEpisod," of ").concat(o.totalPagesEpisod))),c.a.createElement("li",{className:"page-item ".concat(null===o.nextPageEpisod?"disabled":"")},c.a.createElement("button",{className:"page-link",onClick:i},"Next")))):"characters"===a?c.a.createElement("nav",{className:"pt-3"},c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement("li",{className:"page-item ".concat(null===l.prevPage?"disabled":"")},c.a.createElement("button",{className:"page-link",onClick:u},"Previous")),c.a.createElement("li",{className:"page-item disabled"},c.a.createElement("label",{className:"page-link text-info"},"".concat(null!=l.nextPage?l.nextPage-1:l.totalPages," of ").concat(l.totalPages))),c.a.createElement("li",{className:"page-item ".concat(null===l.nextPage?"disabled":"")},c.a.createElement("button",{className:"page-link",onClick:i},"Next")))):"locations"===a?c.a.createElement("nav",{className:"pt-3"},c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement("li",{className:"page-item ".concat(null===s.prevPageLoca?"disabled":"")},c.a.createElement("button",{onClick:u,className:"page-link"},"Previous")),c.a.createElement("li",{className:"page-item disabled"},c.a.createElement("label",{className:"page-link text-info"},"".concat(null!=s.nextPageLoca?s.nextPageLoca-1:s.totalPagesLoca," of ").concat(s.totalPagesLoca))),c.a.createElement("li",{className:"page-item ".concat(null===s.nextPageLoca?"disabled":"")},c.a.createElement("button",{className:"page-link",onClick:i},"Next")))):void 0})),A=function(){return c.a.createElement("div",null,c.a.createElement("h3",{className:"text-danger text-center pt-5"},"There is no data for this search :( "))},w=function(){var e=Object(m.c)((function(e){return e.characters.array})),a=Object(m.c)((function(e){return e.characters.filtered})),t=Object(m.c)((function(e){return e.characters.error})),n=Object(m.c)((function(e){return e.characters.search}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"pt-1 text-center"},"Search your favorite character"),c.a.createElement("div",{className:"mx-auto col-8 col-sm-7 pt-3 pb-3"},c.a.createElement(C,{title:"characters"}),t?c.a.createElement("div",{className:"mx-auto"},c.a.createElement(A,null)):null,n&&!t?c.a.createElement("span",null,c.a.createElement("small",null,"Showing info for ".concat(n))):null),c.a.createElement("br",null),c.a.createElement("div",{className:"row pl-2 pr-2 pb-3"},!1===t?a.length<1?e.map((function(e){return c.a.createElement(P,{key:e.id,data:e})})):a.map((function(e){return c.a.createElement(P,{key:e.id,data:e})})):null),!1===t&&a<1?c.a.createElement("div",{className:"pb-2"},c.a.createElement(I,{title:"characters"})):null)};t(68);R.a.setAppElement("#root");var G=function(e){var a=e.data,t=e.onHide,n=e.show;return c.a.createElement(R.a,{isOpen:n,style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"#4B515D",position:"absolute"}}},c.a.createElement("div",{className:"card mb-3 text-white bg-secondary"},c.a.createElement("div",{className:"text-right  pb-1"},c.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:t},c.a.createElement("i",{className:"fa fa-times"}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("h1",{className:"card-title text-center"},a.name),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("p",{className:"card-text"},"Dimension: ".concat(a.dimension))),c.a.createElement("li",null,c.a.createElement("p",{className:"card-text"},"Type: ".concat(a.type)))),c.a.createElement("h5",{className:"text-center"},"Residents"),null!=a.residents[0].id?c.a.createElement("div",{className:"card-deck"},a.residents.map((function(e){return c.a.createElement("div",{className:"card",key:e.name,style:{maxWidth:"14rem"}},c.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}),c.a.createElement("div",{className:"card-body text-dark"},c.a.createElement("h5",{className:"card-title text-center"},e.name)))}))):c.a.createElement("h6",{className:"text-center pt-2"},"No residents in this location."))))};R.a.setAppElement("#root");var D=function(e){var a=e.data,t=e.onHide,n=e.show;return c.a.createElement(R.a,{isOpen:n,style:{overlay:{backgroundColor:"grey"},content:{backgroundColor:"#4B515D",position:"absolute"}}},c.a.createElement("div",{className:"card mb-3 text-white bg-secondary"},c.a.createElement("div",{className:"text-right  pb-1"},c.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:t},c.a.createElement("i",{className:"fa fa-times"}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("h1",{className:"card-title text-center"},a.name),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("p",{className:"card-text"},"Release Date: ".concat(a.air_date))),c.a.createElement("li",null,c.a.createElement("p",{className:"card-text"},"Episode: ".concat(a.episode)))),c.a.createElement("h3",{className:"text-center"},"Characters"),c.a.createElement("div",{className:"card-deck"},a.characters.map((function(e){return c.a.createElement("div",{className:"card",key:e.name},c.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}),c.a.createElement("div",{className:"card-body text-dark"},c.a.createElement("h5",{className:"card-title text-center"},e.name)))}))))))},F=function(e){var a=e.data,t=e.title,r=Object(n.useState)(!1),l=Object(j.a)(r,2),o=l[0],s=l[1],i=function(){s(!1)},m=function(){s(!0)};return"episodes"===t?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mt-2 mb-2 col-lg-4 col-md-5 col-sm-6 mx-auto"},c.a.createElement("div",{className:"card text-white bg-secondary h-100 mx-auto",style:{width:"18rem"}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title text-center"},a.name),c.a.createElement("br",null),c.a.createElement("p",null,"Episode: ",a.episode)),c.a.createElement("div",{className:"card-footer text-right"},c.a.createElement("button",{className:"btn btn-sm btn-info",onClick:m},c.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))),o&&c.a.createElement(D,{show:o,onHide:i,data:a})):"locations"===t?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mt-2 mb-2 col-lg-4 col-md-5 col-sm-6 mx-auto"},c.a.createElement("div",{className:"card text-white bg-secondary h-100 mx-auto",style:{width:"18rem"}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title text-center"},a.name),"unknown"===a.dimension?c.a.createElement("p",null,"Dimension unknown"):c.a.createElement("p",null,a.dimension)),c.a.createElement("div",{className:"card-footer text-right"},c.a.createElement("button",{className:"btn btn-sm btn-info",onClick:m},c.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))),o&&c.a.createElement(G,{show:o,onHide:i,data:a})):void 0},B=function(){var e="locations",a=Object(m.c)((function(e){return e.locations.array})),t=Object(m.c)((function(e){return e.locations.filteredLoc})),n=Object(m.c)((function(e){return e.locations.errorLoc})),r=Object(m.c)((function(e){return e.locations.searchLoc}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"pt-1 text-center"},"Search your favorite location"),c.a.createElement("div",{className:"mx-auto col-8 col-sm-7 pt-3 pb-3"},c.a.createElement(C,{title:e}),n?c.a.createElement("div",{className:"mx-auto"},c.a.createElement(A,null)):null,r&&!n?c.a.createElement("span",null,c.a.createElement("small",null,"Showing info for ".concat(r))):null),c.a.createElement("br",null),c.a.createElement("div",{className:"row pl-2 pr-2 pb-3"},!1===n?t.length<1?a.map((function(a){return c.a.createElement(F,{title:e,key:a.id,data:a})})):t.map((function(a){return c.a.createElement(F,{title:e,key:a.id,data:a})})):null),!1===n&&t<1?c.a.createElement("div",{className:"pb-2"},c.a.createElement(I,{title:e})):null)},q=function(){var e="episodes",a=Object(m.c)((function(e){return e.episodes.array})),t=Object(m.c)((function(e){return e.episodes.filteredEpi})),n=Object(m.c)((function(e){return e.episodes.errorEpiso})),r=Object(m.c)((function(e){return e.episodes.searchEpi}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"pt-1 text-center"},"Search your favorite episode"),c.a.createElement("div",{className:"mx-auto col-8 col-sm-7 pt-3 pb-3"},c.a.createElement(C,{title:e}),n?c.a.createElement("div",{className:"mx-auto"},c.a.createElement(A,null)):null,r&&!n?c.a.createElement("span",null,c.a.createElement("small",null,"Showing info for ".concat(r))):null),c.a.createElement("br",null),c.a.createElement("div",{className:"row pl-2 pr-2 pb-3"},!1===n?t.length<1?a.map((function(a){return c.a.createElement(F,{title:e,key:a.id,data:a})})):t.map((function(a){return c.a.createElement(F,{title:e,key:a.id,data:a})})):null),!1===n&&t<1?c.a.createElement("div",{className:"pb-2"},c.a.createElement(I,{title:e})):null)},U=t(45),H=t.n(U),$=function(){var e=H()().format("MMM Do YYYY");return c.a.createElement("div",{className:"pt-5"},c.a.createElement("div",{className:"navbar navbar-dark fixed-bottom bg-dark"},c.a.createElement("p",{className:"text-left text-white"},c.a.createElement("a",{className:"text-white",style:{textDecoration:"none"},href:"https://www.linkedin.com/in/javieragustinale/"},"JAVIER ALE")),c.a.createElement("p",{className:"text-right text-white"},"Date: ".concat(e))))},M=function(){return c.a.createElement(o.a,null,c.a.createElement(i,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/rick-morty",exact:!0,component:w}),c.a.createElement(s.a,{path:"/locations",exact:!0,component:B}),c.a.createElement(s.a,{path:"/episodes",exact:!0,component:q}),c.a.createElement(s.a,null,c.a.createElement("div",{className:"alert alert-danger pt-2",role:"alert"},c.a.createElement("h4",{className:"alert-heading text-center"},"Page not found")))),c.a.createElement($,null))};t(70);var V=function(){return c.a.createElement("div",{className:"style"},c.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(23),J=t(46),W=Object(Y.b)({characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CHARACTERS":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0});case"GET_CHARACTERS_ERROR":return Object(d.a)(Object(d.a)({},e),{},{fetching:!1,error:a.payload});case"GET_CHARACTERS_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{array:a.payload,fetching:!1});case"GET_FILTERS":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0});case"GET_FILTERS_ERROR":return Object(d.a)(Object(d.a)({},e),{},{fetching:!1,error:a.payload,filtered:[]});case"GET_FILTERS_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{filtered:a.payload,fetching:!1,error:!1});case"REMOVE_FILTERED":return Object(d.a)(Object(d.a)({},e),{},{filtered:a.payload,error:!1,search:""});case"SET_SEARCH":return Object(d.a)(Object(d.a)({},e),{},{search:a.payload});case"UPDATE_PAGE":return Object(d.a)(Object(d.a)({},e),{},{nextPage:a.payload.next,prevPage:a.payload.prev,totalPages:a.payload.total});default:return e}},locations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_LOCATIONS":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0});case"GET_LOCATIONS_ERROR":return Object(d.a)(Object(d.a)({},e),{},{fetching:!1,errorLoc:a.payload});case"GET_LOCATIONS_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{array:a.payload,fetching:!1,errorLoc:!1});case"GET_LOCATIONS_FILTERS":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0});case"GET_LOCATIONS_FILTERS_ERROR":return Object(d.a)(Object(d.a)({},e),{},{fetching:!1,errorLoc:a.payload});case"GET_LOCATIONS_FILTERS_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{filteredLoc:a.payload,fetching:!1,errorLoc:!1});case"REMOVE_FILTERED_LOCATION":return Object(d.a)(Object(d.a)({},e),{},{filteredLoc:a.payload,errorLoc:!1,searchLoc:""});case"UPDATE_PAGE_LOCATIONS":return Object(d.a)(Object(d.a)({},e),{},{nextPageLoca:a.payload.nextLoc,prevPageLoca:a.payload.prevLoc,totalPagesLoca:a.payload.totalLoc});case"SET_SEARCH_LOC":return Object(d.a)(Object(d.a)({},e),{},{searchLoc:a.payload});default:return e}},episodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_EPISODES":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0});case"GET_EPISODES_ERROR":return Object(d.a)(Object(d.a)({},e),{},{fetching:!1,errorEpiso:a.payload});case"GET_EPISODES_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{array:a.payload,fetching:!1,errorEpiso:!1});case"GET_FILTERS_EPISODES":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0});case"GET_FILTERS_EPISODES_ERROR":return Object(d.a)(Object(d.a)({},e),{},{fetching:!1,errorEpiso:a.payload});case"GET_FILTERS_EPISODES_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{filteredEpi:a.payload,fetching:!1,errorEpiso:!1});case"REMOVE_FILTERED_EPISODE":return Object(d.a)(Object(d.a)({},e),{},{filteredEpi:a.payload,errorEpiso:!1,searchEpi:""});case"UPDATE_PAGE_EPISODE":return Object(d.a)(Object(d.a)({},e),{},{nextPageEpisod:a.payload.next,prevPageEpisod:a.payload.prev,totalPagesEpisod:a.payload.total});case"SET_SEARCH_EP":return Object(d.a)(Object(d.a)({},e),{},{searchEpi:a.payload});default:return e}}}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c;var X=t(74),z=function(){var e=Object(Y.d)(W,K(Object(Y.a)(J.a)));return v()(e.dispatch,e.getState),T()(e.dispatch,e.getState),N()(e.dispatch,e.getState),e}(),Q=new E.a({uri:"https://rickandmortyapi.com/graphql"}),Z=function(){return c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,null))},ee=function(){return c.a.createElement(m.a,{store:z}," ",c.a.createElement(Z,null))},ae=function(){return c.a.createElement(X.a,{client:Q},c.a.createElement(ee,null))};l.a.render(c.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.d4544023.chunk.js.map