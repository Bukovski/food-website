(this["webpackJsonpfood-website"]=this["webpackJsonpfood-website"]||[]).push([[0],{13:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAPBAMAAADdbRaYAAAAAXNSR0IB2cksfwAAADBQTFRFAAAA////////////////////////////////////////////////////////////O00EMAAAABB0Uk5TAES7EaqIVXfd/+4zmcwiZlrBd4wAAAGkSURBVHicY2BUggFFBhBgdoLxVcF8hiS4ggQw3wTOL2DgmAkDs8ByrHD+TAGwAII/AcyvhPNnI2meCZbjIV7zRAYOXY1LSkoqTb6+nmRoXjxlktKsJq8TJ17i0Oy6Uqd91vGbSzWhmjtXrpoxo3NWV8dEBstFq65cujG3sksDqnlOWefMmXMKO2dWQjVP9xR3ni2jWZAJ1XztZNQJBaY1UeWKDNsvnXFXOqSufqkoE6J5/rQrIiHH192R+AnVPF+Do3DCr5mmL6Ga50fePRnAGltRuJDh5cwZSr26upc0dC9BNM8+e2aH4LyzR4ROQjVPTZfMn7S5ZRcXVLOTxk2l/l+aJ1QmAjXPudG1xneFrwpU85qZIZVGS2cWhXRCNc+w09wzc4G3IRN6gF0Dap5yfc7a3hkurSrwAJvxEyW07WYy/TNUuCGKprmfH6S5t2LF8Q4NpRY8UTVjJUZUXWMAaYaBSaTE86xoBhTNs0jQfBUkx4+UPOeC5fgRih+ABW7C+RfA/Ewg6045CFQzMAvCgDAkF22E8eUgfEO4AgMwnxvOfwAAPzQ766dDkT8AAAAASUVORK5CYII="},166:function(e,a,t){},167:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(19),l=t.n(s),i=t(49),c=t(6),o=t(53),m=t(62),d=t(4),u=t(5),h=t(54),v=t.n(h),f=function(){function e(a){Object(d.a)(this,e),this.validations=a()}return Object(u.a)(e,[{key:"validate",value:function(e){var a=this.valid();return this.validations.forEach((function(t){if(!a[t.field].isInvalid){var n=e[t.field].toString(),r=t.args||[];("string"===typeof t.method?v.a[t.method]:t.method).apply(void 0,[n].concat(Object(m.a)(r),[e]))!==t.validWhen&&(a[t.field]={isInvalid:!0,message:t.message},a.isValid=!1)}})),a}},{key:"valid",value:function(){var e={};return this.validations.map((function(a){return e[a.field]={isInvalid:!1,message:""}})),Object(o.a)({isValid:!0},e)}}]),e}(),E=t(9),p=t(8),g=t(10);function _(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"error-indicator__wrapper"},r.a.createElement("div",{className:"error-indicator__center"},r.a.createElement("h3",{className:"error-indicator__title"},"Something went wrong"),r.a.createElement("p",{className:"error-indicator__text"},"We apologize for the inconvenience."),r.a.createElement("p",{className:"error-indicator__text"},"We'll fix it all soon. See you later")))))}var N=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(E.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={hasError:!1},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(_,null):this.props.children}}]),a}(n.Component);function b(){function e(e){var a=function(e){return("0"+e).slice(-2)};return e.getFullYear()+"-"+a(e.getMonth()+1)+"-"+a(e.getDate())}var a=new Date;return a.setMonth(a.getMonth()+1),{currentDate:e(new Date),nextMonth:e(a)}}function w(){return r.a.createElement("svg",{width:"0",height:"0",display:"none"},r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",id:"facebook"},r.a.createElement("path",{d:"M288 176v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80h-96z"})),r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",id:"twitter"},r.a.createElement("path",{d:"M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"})),r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 511.627 511.627",id:"youtube-logo"},r.a.createElement("path",{d:"M459.954 264.376c-2.471-11.233-7.949-20.653-16.416-28.264-8.474-7.611-18.227-12.085-29.27-13.418-35.02-3.806-87.837-5.708-158.457-5.708-70.618 0-123.341 1.903-158.174 5.708-11.227 1.333-21.029 5.807-29.407 13.418-8.376 7.614-13.896 17.035-16.562 28.264-4.948 22.083-7.423 55.391-7.423 99.931 0 45.299 2.475 78.61 7.423 99.93 2.478 11.225 7.951 20.653 16.421 28.261 8.47 7.614 18.225 11.991 29.263 13.134 35.026 3.997 87.847 5.996 158.461 5.996 70.609 0 123.44-1.999 158.453-5.996 11.043-1.143 20.748-5.52 29.126-13.134 8.377-7.607 13.897-17.036 16.56-28.261 4.948-22.083 7.426-55.391 7.426-99.93-.001-45.3-2.479-78.612-7.424-99.931zm-294.929 28.842h-30.549v162.45h-28.549v-162.45h-29.98v-26.837h89.079v26.837zm77.085 162.45H216.7v-15.421c-10.278 11.615-19.989 17.419-29.125 17.419-8.754 0-14.275-3.524-16.556-10.564-1.521-4.568-2.286-11.519-2.286-20.844V314.627h25.41v103.924c0 6.088.096 9.421.288 9.993.571 3.997 2.568 5.995 5.996 5.995 5.138 0 10.566-3.997 16.274-11.991V314.627h25.41v141.041zm97.073-42.257c0 13.894-.855 23.417-2.56 28.558-3.244 10.462-9.996 15.697-20.273 15.697-9.137 0-17.986-5.235-26.556-15.697v13.702h-25.406v-189.29h25.406v61.955c8.189-10.273 17.036-15.413 26.556-15.413 10.277 0 17.029 5.331 20.273 15.988 1.704 4.948 2.56 14.369 2.56 28.264v56.236zm96.502-23.408h-51.104v24.839c0 13.134 4.374 19.697 13.131 19.697 6.279 0 10.089-3.422 11.42-10.28.376-1.902.571-7.706.571-17.412h25.981v3.71c0 9.329-.195 14.846-.572 16.563-.567 5.133-2.56 10.273-5.995 15.413-6.852 10.089-17.139 15.133-30.841 15.133-13.127 0-23.407-4.855-30.833-14.558-5.517-7.043-8.275-18.083-8.275-33.12v-49.396c0-15.036 2.662-26.076 7.987-33.119 7.427-9.705 17.61-14.558 30.557-14.558 12.755 0 22.85 4.853 30.263 14.558 5.146 7.043 7.71 18.083 7.71 33.119v29.411z"}),r.a.createElement("path",{d:"M302.634 336.043c-4.38 0-8.658 2.101-12.847 6.283v85.934c4.188 4.186 8.467 6.279 12.847 6.279 7.419 0 11.14-6.372 11.14-19.13v-60.236c-.001-12.755-3.713-19.13-11.14-19.13zm94.794 0c-8.565 0-12.847 6.475-12.847 19.41v13.134h25.693v-13.134c0-12.942-4.284-19.41-12.846-19.41zM148.473 113.917v77.375h28.549v-77.375L211.563 0h-29.121l-19.41 75.089L142.759 0h-30.262c5.33 15.99 11.516 33.785 18.559 53.391 8.947 26.265 14.749 46.444 17.417 60.526zm101.347 79.374c13.134 0 23.219-4.854 30.262-14.561 5.332-7.043 7.994-18.274 7.994-33.689V95.075c0-15.225-2.669-26.363-7.994-33.406-7.043-9.707-17.128-14.561-30.262-14.561-12.756 0-22.75 4.854-29.98 14.561-5.327 7.043-7.992 18.181-7.992 33.406v49.965c0 15.225 2.662 26.457 7.992 33.689 7.233 9.708 17.223 14.562 29.98 14.562zM237.541 89.935c0-13.134 4.093-19.701 12.279-19.701s12.275 6.567 12.275 19.701v59.955c0 13.328-4.089 19.985-12.275 19.985s-12.279-6.661-12.279-19.985V89.935zm90.787 103.356c9.523 0 19.328-5.901 29.413-17.705v15.703h25.981V48.822h-25.981v108.777c-5.712 8.186-11.133 12.275-16.279 12.275-3.429 0-5.428-2.093-5.996-6.28-.191-.381-.287-3.715-.287-9.994V48.822h-25.981v112.492c0 9.705.767 16.84 2.286 21.411 2.477 7.043 8.09 10.566 16.844 10.566z"})),r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.333 95.332",id:"quote"},r.a.createElement("path",{d:"m30.512 43.939c-2.348-0.676-4.696-1.019-6.98-1.019-3.527 0-6.47 0.806-8.752 1.793 2.2-8.054 7.485-21.951 18.013-23.516 0.975-0.145 1.774-0.85 2.04-1.799l2.301-8.23c0.194-0.696 0.079-1.441-0.318-2.045s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16-12.637 0-25.152 13.19-30.433 32.076-3.1 11.08-4.009 27.738 3.627 38.223 4.273 5.867 10.507 9 18.529 9.313 0.033 1e-3 0.065 2e-3 0.098 2e-3 9.898 0 18.675-6.666 21.345-16.209 1.595-5.705 0.874-11.688-2.032-16.851-2.875-5.105-7.61-8.826-13.334-10.473z"}),r.a.createElement("path",{d:"m92.471 54.413c-2.875-5.106-7.61-8.827-13.334-10.474-2.348-0.676-4.696-1.019-6.979-1.019-3.527 0-6.471 0.806-8.753 1.793 2.2-8.054 7.485-21.951 18.014-23.516 0.975-0.145 1.773-0.85 2.04-1.799l2.301-8.23c0.194-0.696 0.079-1.441-0.318-2.045-0.396-0.604-1.034-1.007-1.75-1.105-0.776-0.106-1.568-0.16-2.354-0.16-12.637 0-25.152 13.19-30.434 32.076-3.099 11.08-4.008 27.738 3.629 38.225 4.272 5.866 10.507 9 18.528 9.312 0.033 1e-3 0.065 2e-3 0.099 2e-3 9.897 0 18.675-6.666 21.345-16.209 1.593-5.705 0.871-11.689-2.034-16.851z"})),r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",id:"close"},r.a.createElement("path",{d:"M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"})))}function k(){return r.a.createElement("span",{className:"divider--bg"})}function y(){return r.a.createElement("span",{className:"divider--brown"})}function A(){return r.a.createElement("span",{className:"divider--white"})}function O(){return r.a.createElement("span",{className:"divider--small-white"})}var x=r.a.memo((function(e){var a=e.text,t=e.name,n=e.index,s=e.handleClick,l=e.handleMouseOver,i=e.handleGetName;return r.a.createElement("li",{className:"main-menu__item",onClickCapture:s(n),onMouseOver:l},r.a.createElement(c.Link,{className:"main-menu__link",activeClass:"main-menu__link--active",to:t,spy:!0,smooth:!0,duration:800,offset:0,onSetActive:i},a))})),L=function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(E.a)(this,Object(p.a)(a).call(this))).handleLoadData=function(){var a=document.getElementsByClassName("main-menu__item");if(a.length){for(var t=0,n=a.length,r=[];t<n;){var s=a[t],l=s.offsetLeft,i=s.offsetWidth;r.push({width:i,left:l}),t++}var c=e.state.activeLink,o=c.id;if(0!==c.width){var m=r[o];e.setState({linksCoord:r,activeLink:{id:o,width:m.width,left:m.left}})}else e.setState({linksCoord:r})}},e.handleClick=function(a){return function(t){t.preventDefault();var n=t.target,r=n.offsetLeft,s=n.offsetWidth;e.setState({activeLink:{id:a,width:s,left:r}})}},e.handleMouseOut=function(){var a=e.state.activeLink,t=a.width,n=a.left;e._lineStyle(t,n)},e.handleMouseOver=function(a){var t=a.target,n=t.offsetLeft,r=t.offsetWidth;e._lineStyle(r,n)},e.handleGetName=function(a){var t=e.state,n=t.items,r=t.linksCoord,s=n.indexOf(a)||0;if(r.length){var l=r[s],i=l.width,c=l.left;e.setState({activeLink:{id:s,width:i,left:c}})}else e.setState({activeLink:{id:s,width:1,left:1}})},e.state={items:["home","about","igredients","menu","reviews","reservations"],linksCoord:[],activeLink:{id:0,width:0,left:0}},e._line=r.a.createRef(),e}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoadData),window.addEventListener("resize",this.handleLoadData)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.handleLoadData),window.removeEventListener("resize",this.handleLoadData)}},{key:"_lineStyle",value:function(e,a){var t=this._line.current;t.style.width=e+"px",t.style.left=a+"px"}},{key:"_menuList",value:function(){var e=this,a=this.state,t=a.items,n=a.activeLink.id;return t.map((function(a,t){return r.a.createElement(x,{key:a,index:t,name:a,active:n===t,text:(s=a,s[0].toUpperCase()+s.slice(1)),handleClick:e.handleClick,handleMouseOver:e.handleMouseOver,handleGetName:e.handleGetName});var s}))}},{key:"render",value:function(){var e=this.state.activeLink,a=e.left,t=e.width;return r.a.createElement("ul",{className:"main-menu__list",onMouseOut:this.handleMouseOut},this._menuList(),r.a.createElement("div",{className:"main-menu__line",style:t?{left:"".concat(a,"px"),width:"".concat(t,"px")}:{},ref:this._line}))}}]),a}(n.Component),S=t(55),j=t.n(S),U=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(E.a)(this,Object(p.a)(a).call(this,e))).handleScroll=function(){var e=window.pageYOffset,a=t.prevScrollPos>e;t.prevScrollPos=e,t.setState({visible:a})},t.handleMouseEnter=function(){t.state.visible||t.setState({visible:!0})},t.state={visible:!0},t.prevScrollPos=window.pageYOffset,t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.visible;return r.a.createElement("div",{className:"main-menu "+(e?"":"main-menu--hidden"),onMouseEnter:this.handleMouseEnter},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-menu__wrap"},r.a.createElement("a",{className:"main-menu__logo-link",href:"/#"},r.a.createElement("img",{className:"main-menu__logo-img",src:j.a,alt:"lambda wordpress logo"})),r.a.createElement("nav",{className:"main-menu__menu"},r.a.createElement(L,null),r.a.createElement("a",{className:"main-menu__button",href:"/#"},r.a.createElement("svg",{className:"main-menu__icon"},r.a.createElement("use",{href:"#twitter"}))),r.a.createElement("a",{className:"main-menu__button",href:"/#"},r.a.createElement("svg",{className:"main-menu__icon"},r.a.createElement("use",{href:"#youtube-logo"}))),r.a.createElement("a",{className:"main-menu__button",href:"/#"},r.a.createElement("svg",{className:"main-menu__icon"},r.a.createElement("use",{href:"#facebook"})))))))}}]),a}(n.PureComponent);var R=function(e){var a=e.to,t=e.children;return r.a.createElement(c.Link,{className:"scroll-white__button",activeClass:"scroll-white__button--active",to:a,spy:!0,smooth:!0,duration:800,offset:0},r.a.createElement("span",{className:"scroll-white__button-text"},t))};var C=function(e){return r.a.createElement("div",{className:"present"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"present__wrap"},r.a.createElement("h1",{className:"present__title"},"the right ingredients for the right food"),r.a.createElement(k,null),r.a.createElement("div",{className:"present__button-wrap"},r.a.createElement(R,{to:"reservations"},"BOOK A TABLE"),r.a.createElement(R,{to:"menu"},"SEE THE MENU")))))},B=t(21),V=t.n(B),z=t(56),Z=t.n(z),P=t(57),q=t.n(P);function D(){return r.a.createElement("section",{className:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"about__wrap"},r.a.createElement("div",{className:"about__description"},r.a.createElement("h2",{className:"about__title"},"Just the right food"),r.a.createElement(y,null),r.a.createElement("p",{className:"about__text"},"If you\u2019ve been to one of our restaurants, you\u2019ve seen \u2013 and tasted \u2013 what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!"),r.a.createElement("div",{className:"about__img-wrap"},r.a.createElement("img",{className:"about__img",src:q.a,alt:"chef"}))),r.a.createElement(V.a,{right:!0},r.a.createElement("div",{className:"about__pictures-wrap"},r.a.createElement("img",{className:"about__pictures",src:Z.a,alt:"dish plate"}))))))}var G=t(22),T=t.n(G);function M(){return r.a.createElement("section",{className:"ingredients"},r.a.createElement("div",{className:"container"},r.a.createElement(V.a,{left:!0},r.a.createElement("div",{className:"ingredients__wrap"},r.a.createElement("div",{className:"ingredients__content"},r.a.createElement("h2",{className:"ingredients__title"},"Fine ingredients"),r.a.createElement(A,null),r.a.createElement("p",{className:"ingredients__text"},"If you\u2019ve been to one of our restaurants, you\u2019ve seen \u2013 and tasted \u2013 what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!"),r.a.createElement("div",{className:"ingredients__products"},r.a.createElement("div",{className:"ingredients__product"},r.a.createElement("img",{className:"ingredients__img ingredients__img--left",src:T.a,alt:""})),r.a.createElement("div",{className:"ingredients__product"},r.a.createElement("img",{className:"ingredients__img ingredients__img--middle",src:T.a,alt:""})),r.a.createElement("div",{className:"ingredients__product"},r.a.createElement("img",{className:"ingredients__img ingredients__img--right",src:T.a,alt:""}))))))))}var W=t(12);var F=function(e){var a=e.title,t=e.cost,n=e.description,s=e.special;return r.a.createElement("li",{className:"menu__item"},r.a.createElement("div",{className:"food "+(s?"food--special":"")},r.a.createElement("div",{className:"food__head"},r.a.createElement("h4",{className:"food__name"},a),r.a.createElement("span",{className:"food__const"},"$",r.a.createElement("span",{className:"food__money"},t.toFixed(2)))),r.a.createElement("p",{className:"food__text"},n)))};var I=function(e){var a=e.titles,t=e.menus;return r.a.createElement(n.Fragment,null,a.map((function(e,a){var n=t[a];return r.a.createElement("div",{key:e,className:"menu__order"},r.a.createElement("h3",{className:"menu__title"},e),r.a.createElement(y,null),r.a.createElement("ul",{className:"menu__list"},n.map((function(e){return r.a.createElement(F,Object.assign({key:e.id},e))}))))})))};function J(){var e=Object(n.useState)(["Appetisers","Starters","Salads","Main Dishes"]),a=Object(W.a)(e,1)[0],t=Object(n.useState)([[{id:1,title:"Tzatsiki",cost:3.99,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1},{id:2,title:"Aubergine Salad",cost:5.5,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1},{id:3,title:"Aubergine Salad",cost:5.25,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1}],[{id:3,title:"Haloumi",cost:3.99,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1},{id:4,title:"Spinach Pie",cost:5.5,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1}],[{id:5,title:"Olive Special",cost:5.99,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1},{id:6,title:"Greek Salad",cost:5.5,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!0},{id:7,title:"Gusto Salad",cost:5.25,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1}],[{id:7,title:"Cornish Mackerel",cost:5.99,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1},{id:8,title:"Roast Lamb",cost:5.25,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!0},{id:9,title:"Fried Chicken",cost:5.25,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1},{id:10,title:"Pastitsio",cost:5.99,description:"Refreshing traditional cucumber and garlic yoghurt dip.",special:!1}]]),s=Object(W.a)(t,1)[0];return r.a.createElement("section",{className:"menu"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"menu__wrap"},r.a.createElement(I,{titles:a,menus:s}))))}var X=t(58),H=t.n(X);function Y(){return r.a.createElement("section",{className:"review"},r.a.createElement("div",{className:"container"},r.a.createElement(H.a,{dilay:500},r.a.createElement("div",{className:"review__wrap"},r.a.createElement("div",{className:"review__content"},r.a.createElement("h2",{className:"review__title"},"Guest Reviews"),r.a.createElement(A,null),r.a.createElement("blockquote",{className:"review__blockquote"},r.a.createElement("svg",{className:"review__quote"},r.a.createElement("use",{href:"#quote"})),r.a.createElement("p",{className:"review__text"},"If you\u2019ve been to one of our restaurants, you\u2019ve seen \u2013 and tasted \u2013 what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!"),r.a.createElement("footer",{className:"review__footer"},"- food inc, New York")))))))}var Q=t(59),K=t.n(Q),$=t(60),ee=t.n($),ae=t(61),te=t.n(ae),ne=t(20),re=function(e){function a(){return Object(d.a)(this,a),Object(E.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"shouldComponentUpdate",value:function(e,a){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){var e=this.props,a=e.show,t=e.children,n=e.handleClose;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal__overlay",style:{opacity:a?".5":"0",visibility:a?"visible":"hidden"},onClick:n}),r.a.createElement("div",{className:"modal",style:{opacity:a?"1":"0",visibility:a?"visible":"hidden"}},r.a.createElement("span",{className:"modal__close",onClick:n},r.a.createElement("svg",{className:"modal__img"},r.a.createElement("use",{href:"#close"}))),r.a.createElement("div",{className:"modal__dialog"},t)))}}]),a}(n.Component);var se=function(e){return function(a){var t=function(e,a){var t=b(),n=t.currentDate,r=t.nextMonth,s=function(e){return new Date(e).getTime()},l=s(a.date);return l>=s(n)&&l<=s(r)},s=function(e,a){return!!a.selectOptions.filter((function(e){return e.toString()===a.party.toString()})).length},l=new f((function(){var e=b(),a=e.currentDate,n=e.nextMonth;return[{field:"name",method:"isEmpty",validWhen:!1,message:"Enter full name."},{field:"name",method:"isLength",args:[{min:3,max:void 0}],validWhen:!0,message:"Should be longer than 3 letters"},{field:"name",method:"isLength",args:[{min:void 0,max:20}],validWhen:!0,message:"Should be shorter than 20 letters"},{field:"email",method:"isEmpty",validWhen:!1,message:"Enter your email address."},{field:"email",method:"isEmail",validWhen:!0,message:"Enter valid email address."},{field:"date",method:t,validWhen:!0,message:"Enter data period between ".concat(a," & ").concat(n)},{field:"party",method:s,validWhen:!0,message:"Select one of party numbers"}]})),i=Object(n.useState)(l.valid()),c=Object(W.a)(i,2),o=c[0],m=c[1];return r.a.createElement(e,Object.assign({},a,{validate:o,validator:l,updateValidator:m}))}}(function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(E.a)(this,Object(p.a)(a).call(this))).handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(ne.a)({},n,r))},e.handleSubmit=function(a){a.preventDefault();var t=e.props,n=t.validator,r=t.updateValidator,s=n.validate(e.state);r(s),e.submitted=!0,s.isValid&&(console.log("".concat(e.state.name," Welcome!")),e.handleOpenModal())},e.handleOpenModal=function(){e.setState({showModal:!0})},e.cleanForm=function(){e.submitted=!1,e.setState({name:"",email:"",date:"",party:"",showModal:!1})},e._options=function(){return e.state.selectOptions.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))},e.state={name:"",email:"",date:"",party:"",selectOptions:[1,2,3,4,5],showModal:!1},e.submitted=!1,e.datePeriod=b(),e}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=e.validate,t=e.validator,n=this.state,s=n.name,l=n.email,i=n.date,c=n.party,o=n.showModal,m=this.datePeriod,d=m.currentDate,u=m.nextMonth,h=this.submitted?t.validate(this.state):a,v=r.a.createElement(re,{show:o,handleClose:this.cleanForm},r.a.createElement("div",{className:"modal__content"},r.a.createElement("h2",{className:"modal__title"},"Your order is being processed"),r.a.createElement("p",{className:"modal__text"},"Dear ",s,", we will contact you soon."),r.a.createElement("p",{className:"modal__text"},"Your date: ",i," and party number: ",c,"."),r.a.createElement("p",{className:"modal__text"},"Thanks for your order")));return r.a.createElement(r.a.Fragment,null,v,r.a.createElement("form",{className:"reserve__form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"reserve__group"},r.a.createElement("label",{className:"reserve__label",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"reserve__input "+(h.name.isInvalid?"has-error":""),id:"name",type:"text",name:"name",placeholder:"your name *",value:s,onChange:this.handleChange}),r.a.createElement("span",{className:"help-block"},h.name.message)),r.a.createElement("div",{className:"reserve__group"},r.a.createElement("label",{className:"reserve__label",htmlFor:"email"},"Email"),r.a.createElement("input",{className:"reserve__input "+(h.email.isInvalid?"has-error":""),id:"email",type:"email",name:"email",placeholder:"your email *",value:l,onChange:this.handleChange}),r.a.createElement("span",{className:"help-block"},h.email.message)),r.a.createElement("div",{className:"reserve__group"},r.a.createElement("label",{className:"reserve__label",htmlFor:"date"},"Date"),r.a.createElement("input",{className:"reserve__input "+(h.date.isInvalid?"has-error":""),id:"date",type:"date",name:"date",min:d,max:u,value:i,onChange:this.handleChange}),r.a.createElement("span",{className:"help-block"},h.date.message)),r.a.createElement("div",{className:"reserve__group"},r.a.createElement("label",{className:"reserve__label",htmlFor:"party"},"Party number"),r.a.createElement("select",{className:"reserve__select "+(h.party.isInvalid?"has-error":""),id:"party",name:"party",value:c,onChange:this.handleChange},r.a.createElement("option",{disabled:!0,value:""},"party number"),this._options()),r.a.createElement("span",{className:"help-block"},h.party.message)),r.a.createElement("button",{className:"reserve__button"},"Book now!")))}}]),a}(n.Component));function le(){return r.a.createElement("section",{className:"reserve"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"reserve__wrap"},r.a.createElement(K.a,{left:!0},r.a.createElement("div",{className:"reserve__preview"},r.a.createElement("div",{className:"reserve__picture-wrap"},r.a.createElement("img",{className:"reserve__picture",src:ee.a,alt:"porridge"})),r.a.createElement("div",{className:"reserve__picture-wrap"},r.a.createElement("img",{className:"reserve__picture",src:te.a,alt:"cherry"})))),r.a.createElement("div",{className:"reserve__descr"},r.a.createElement("h2",{className:"reserve__title"},"Just the right food"),r.a.createElement(y,null),r.a.createElement("div",{className:"reserve__about"},r.a.createElement("p",{className:"reserve__text"},"If you\u2019ve been to one of our restaurants, you\u2019ve seen \u2013 and tasted \u2013 what keeps our customers coming back for more. Perfect materials and freshly baked food."),r.a.createElement("p",{className:"reserve__text"},"Delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out! Perfect materials and freshly baked food.")),r.a.createElement(se,null)))))}var ie=t(13),ce=t.n(ie);function oe(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer__wrap"},r.a.createElement("div",{className:"footer__about"},r.a.createElement("h3",{className:"footer__title"},"About Us"),r.a.createElement(O,null),r.a.createElement("div",{className:"footer__text"},"Lambda's new and expanded Chelsea location represents a truly authentic ",r.a.createElement("strong",null,"Greek")," patisserie, featuring breakfasts of fresh croissants and steaming bowls of caf\xe9.",r.a.createElement("br",null),"Lamda the best restaurant in town")),r.a.createElement("div",{className:"footer__hours"},r.a.createElement("h3",{className:"footer__title"},"Opening Hours"),r.a.createElement(O,null),r.a.createElement("ul",{className:"footer__list"},r.a.createElement("li",{className:"footer__item"},r.a.createElement("strong",null,"Mon-Thu:")," 7:00am-8:00pm"),r.a.createElement("li",{className:"footer__item"},r.a.createElement("strong",null,"Fri-Sun:")," 7:00am-10:00pm")),r.a.createElement("div",{className:"footer__cards"},r.a.createElement("div",{className:"footer__card-wrap"},r.a.createElement("img",{className:"footer__card footer__card--first",src:ce.a,alt:"first card"})),r.a.createElement("div",{className:"footer__card-wrap"},r.a.createElement("img",{className:"footer__card footer__card--pay",src:ce.a,alt:"pay pal"})),r.a.createElement("div",{className:"footer__card-wrap"},r.a.createElement("img",{className:"footer__card footer__card--visa",src:ce.a,alt:"visa"})),r.a.createElement("div",{className:"footer__card-wrap"},r.a.createElement("img",{className:"footer__card footer__card--master",src:ce.a,alt:"master card"})))),r.a.createElement("div",{className:"footer__location"},r.a.createElement("h3",{className:"footer__title"},"Our Location"),r.a.createElement(O,null),r.a.createElement("ul",{className:"footer__list"},r.a.createElement("li",{className:"footer__item"},r.a.createElement("strong",null,"19th Parasdise Street Sitia")),r.a.createElement("li",{className:"footer__item"},r.a.createElement("strong",null,"128 Meserole Avenue"))),r.a.createElement("div",{className:"footer__social"},r.a.createElement("a",{className:"footer__button",href:"/#"},r.a.createElement("svg",{className:"footer__icon"},r.a.createElement("use",{href:"#twitter"}))),r.a.createElement("a",{className:"footer__button",href:"/#"},r.a.createElement("svg",{className:"footer__icon"},r.a.createElement("use",{href:"#youtube-logo"}))),r.a.createElement("a",{className:"footer__button",href:"/#"},r.a.createElement("svg",{className:"footer__icon"},r.a.createElement("use",{href:"#facebook"}))))))))}var me=function(){return r.a.createElement(N,null,r.a.createElement(w,null),r.a.createElement("header",{className:"head"},r.a.createElement(U,null),r.a.createElement(c.Element,{name:"home"},r.a.createElement(C,null))),r.a.createElement(c.Element,{name:"about"},r.a.createElement(D,null)),r.a.createElement(c.Element,{name:"igredients"},r.a.createElement(M,null)),r.a.createElement(c.Element,{name:"menu"},r.a.createElement(J,null)),r.a.createElement(c.Element,{name:"reviews"},r.a.createElement(Y,null)),r.a.createElement(c.Element,{name:"reservations"},r.a.createElement(le,null)),r.a.createElement(oe,null))};t(166);l.a.render(r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null),r.a.createElement(i.Lines,{color:"#cc9900",background:"#4c4c4c"}))}),null),document.getElementById("root"))},22:function(e,a,t){e.exports=t.p+"static/media/ingradients.96d7546f.png"},55:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABcCAMAAACsjizLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJYUExURUdwTP///////4aGhv///////////////////////////////////////////////4aGhv///////////////////////5WTlP///////////////////////5+fn6qpqf///42NjZmXl////6WkpKamppSQkJiWlqampv///////5OTk////////4mJicHAwOHh4f////Hx8f///6WjpKGfn+Hh4crKyqemp7a1tsrKypqZmaGfoM7NzZOTk7GwsKamppeUlP///8HAwN/f35WTk9DPz7a1taupqZWUlJubm7CvsMrKyuHh4dXU1Kempv///52bm7Cvr/Dv74qKip6dnbq5uqenp+/v79TU1NLR0p+fn////////+Lh4cTDw+jn55KSkqOhoZmXl6ysrI6Ojqenp9HQ0YGBgaampuLi4r+9vsnIyejn6MLBwZSUlOLi4pmZmeLi4trZ2dTU1OLi4re3t7WztLq6utTU1Le3t5uZmu7u7tXU1IiIiOLi4ufn5/Hx8cnJyb++vvT09MjHx5CQkJycnOHh4enp6Z6enrm4uI+Pj8fGxq2srLKxstjX1+Dg4Nva2vT09Lq6uuvq6ri2t/r6+uPj49TU1P////////Dw8NrZ2sPDw8jHx62qqpaWlu/v7////7y6u66srfb29uno6O/v78PCwtvb2+Tk5LCvr97e3vj4+K6ursXExI6Ojv///////+/v77a2tv////z8/O/v77W1tdXV1cXExLu6uujo6Onp6dbV1fz8/O/u7vv7+9/d39zc3NLQ0O/v7////2gAiW4AAADHdFJOUwDd+B7q8N/k6OHb1/bt5voC0Nbrx+LKGtjs6Nnu/ZmK8wY18nijFS+dw9MR8dE7x9rO7r9yXevSf7rbO2XTa5mzI8zP8R7btIQoS6zkz9mO0lCj2TdWrqzq370IubzJ094Jaz+XV5bnG6jjt8vYuGT4hd/TydXCrrXrpETf0jLn6OG1wcvFDXz17I3JUqydkOLF5+Sn95fzuOSwzfS+vcCRcc6fvnvW89Sl2aq52uzA3Ue0rPvUp+C+oKyQnsqb8rLHldPfk7NY2lqzAAAOWUlEQVQYGe3AB1cUCYLA8X/TVV1dTecAHRCaDE2SnLNkyaKIIuaAoGPAnAPmnHUM4wQn5xx23+7eHV/rXlU1CsrujbsC897Nj9kQ38AfV+on/HEl3OUPy95dxB9X33/xB5CQYGcGFf9g3mUsP30pgxkk7WLeDVUws85NzLtG/om4w8y7Ef6Jy5XMu0r+iZ5i5t0mZvA+8GkZ824T9CTwkkagqZ75tqaxO6OvhcutjZeJLltczeXG26ll5/bCvhzmW8/oo9qfSti0P7qD+qXrn8UvLoinoRh4r555t62b5svsusAmipc+iVsRPXSJhhHg5knmXWkSSU18nEoj3Yu+bORC5VZShoCtJ1HEo2mLZu61dVJbSCGkgL0BiEez9SRAQ383qnOpzL2hg8xs6wUUBfGoDq1hzvV1MFVLRTnxqSg+uskUa/qZe9EZAG1NKCqOji5ffXftMxSXDgBEXwWoXt98LoM5YU9oYF0cik+iURTnABz8MA4ofPsWil9KARKOAWytvHZq9FA9/HSZWbXmUu/RZ6N7F6EoKkfxeT3AQBOKrc9QjBwAOLgTVdJVFE+uoxhIYlbY/1qZAX1Pv0WxaC1A3w+PAH6sRVF7CMXiNoCK66iqK1Fk9GYAT3bamRVxZ+0AhXkZAI2XAR59thjgkB2FvR9F5ROAksOo9m1DtSsOxlcnMTtG9qB6qxWgrBSwf9vTATDajaL1bRSHmwHer0SVsxXV0sewdYBZ0tiGaqAZoP4k8OTnvs8ATlSi2HUcxfIkgOpiVI/3oir/hJYPU5klj7ahar8J0NMItX8rTz0H0DBamcC6qx3HUXQUAOzLQXUvDs1vCT/fZrYUHEoBSPrhBEDDrS9/OtdExjkUKUPHzh1tsuegeK8VoHopqqJuNCPFq+OZNYvPdmMv6a3ehaJ86HQJv0NcCpqSH5KYPfH7Rm+d212eeox/y9J7zIH+eP4Nhf21zIHVCby+lNWdzIVdBbw2+8Aj5sTjPby2Ew/tzInSC7yuhPYU/rjs/GkOLTmeZcpPDzklw5ieGSwJxjLFOyajzjkx8YWelxzZ67I5vpZK4ciqREEMRRkMHr9JzFqfdoSwJft1kTrBITujvLK8J+0ir8i2neElJsegQxpjZp+KZUyTLUhmn5SXzTTZvd9bPYE2VEvECaNO2An6JiEqZC3bwCSdyesRxkBf07tSt/wML/nUU8xLonSRK/NXMbO3deJFpjGaEyWftYxpcgxer0VOQxNhDQUTdwJ02kwGnSeWMKlOMsS8BaBfLslSsZ5p8pyJG5ju++919wcXMqPzPq/rO6bRRQQzbbneWKY4UldnjjFEJaORXAEx4iyKXxzCfV3MO2j8kjkzZhGK7DyzV96vZ4rzkrzgAtN53Vnu9FXMaHFmotCvZyqnZJYy/XIRU8SFQitFT1cNGiExJNvaUbyjkyVzaARNZlDwijtR1UwI/uBypij2W8xvb2aaLovTa/iEmVz0RfiEYCxT+UtNfrMoibG8MFaW+LXb7OtEY5B0Zls7is1eh8Wnq9Ojipjwuk1FqPQWoy7TsoznNohi0OyLZRqn7Ej33GUmn+oyjV7bX5nKkh3IjTAI/rM8d7GoRjZE6eRmNHVOkylxGJVOlx5llLJRJco60bcTTY7TGNH1VM+kLwSdYHYtZxqhzhHI/Qsz0D/N1UkxWUIVU3hZZokw+kVbLJOa0rbIJllypKGRbFGWQDsK/Te6LkNupB6Vw+kTpSI0yUJmUNYlE6Y/FIjxhaSY7UzlFOTIyIW8yh57oNht8jiEPUzhRt9vtrgzXe2EbRY3pwWDsrGuE02WKd/gWYhiR8gYdDkPo7FZpET/TjQ7bGIwKJ0kLLb0tCiapJgLTCWvdDqjxpjB8iWxos9oEAQ9L1ghTfDkToieWDSd9WzMGrzvnUhGY/rGY7MVoaiX80WPZwcan0926YrQXAxKkiT2EtaRfV5ntZhlUc8Uzm8GdeljvKpqMZy1ROTni1t4IQib80Q5JlEcRtNRRafUVee21KCRde86XAsBYiWnJPo3EibJxgjLQjTZgiy5ndIRVFWLoUhnMvqlLUyRZc1f6WznVXvOwxaLaAmZhnlhAthi1rlEwRyL4qthSIuRsiTjRjSRgsktt4P+C9EcXLDnKybpZI8wsZAwiyDVRZq3o/puB6SJkifTf5YpAu/mG7wLeYV+N6C32UzuGO8ZnosE9H/rslqNtrMoPt0CyxI9nvvONDTWqImJkDswIVrNedlMIQkT6XIRYSazGJAyt6PQ7wf0LqPLZug6zwvB++92mVbxippkgAtmj8soLeY5J0BSyG2wJUbEAvo8PSRLg3LAkYZGDOUaHasA/RfyA/fWWCbJFpuxaydhOlm0+aUqFFuSAfbIYkRAKuMFt27w75HtvGL3ZoCqBV6zKZR1hEkxAPqjuYYo68Q1IPYksMzmrjPGdKLxS+mDhmEUVVJXuvPeRTQBp9viPUpYpuSSZLEKRYceoCrkT7REJmbznFNyrHTd5WXb96IqMzu9jsE0JgVRnE8XZHPE4A4o2w4kT0SEXBFpaIKCKXewCFWnOzdL6P8KVUzInSUUoVmiCwqy0ZoNUFWKasQyYTYFt/BcUI5yhK7xsgMXUZ3XSYIk9zNJQtXueRDjMw5zZBVAsqkuYBGXoVkQGTIbxlDpzVabI2sAVZTHFgjtRLMh0pQoBvNQfLcBVawrMzMrv5/ndHVfGyLbeYlesDiCYlb6/UGPV7SJgVjCZFSx6bqJBW45dmMaQNrX35skWxqaBQ/kYOI1NPvNZr9sXYfCYPXJ7jE0O4KSOGEbAthsmjBLRl/Q6gv6PZEG6TyTDAtWhnJX8ZJlywhr8xpkg/k0YQKaMclmc8hnzy4B2BhITBf8G9EscC7QCWNoisWgGHSdQaFzOx2hdjRbzBG2oLQFoCaNsB4hwmp1PGaSYLMarAuZVLVRD/DWZsI2BGKsssmwAY0HTazF5AoapV9RpAW97sHILWgkr9lguYamzGxLtPhjUURIwgPdMJovFxikxEN6gKLNhF2UDOmD6flfERYTijK4xwjLPm44AlTl8Nz+4MqVzsgmNBJhRYKU7pO2o0gW0x1O90Y0uTZJksfQ7A7kWjIHN6Dwu1y60E5UeltQFII1AO/U89x+ZyDw7spSwjJDLmHwLmHfBdxLgPp3eC7W5lhpMHy4GZWVsHfyY1xdR1EtizCaYh6koQlIMX7nMKoUh//B18JfUDk9ktk3jKrGFpDEeyjqd/DcGU+uKb/rkB6NOxgjOa6h0b8teY9AdhHP2fW90oNvHM4SVAKTTniM7mRUyZLR57IsQ+PJsojBa6hq/FFSliEZlclqjZGKUCzJi9B57ukBsod5YXNvetSEbjAZTVeEKdexCs32CV+oBWqSmaItFJUekBeiSmTS9ih3XTaqZINkEoKdaEyZE8EFZ1Fsfzcmy2lrQ+N0ShG2RQD6/SbZtliPIm0ZU8S5Dc78b9rRCLI5FBpGc8YWUddCzdGmr5iiI10XJZmqAH2yJVlP2AkpB02yIcvvsyajkYMmV+ZbgP5TV5RxQccOwgwu84RrDPQ138ox986gWja2ZwNTdBgcbkNkFZB92CRJOrdsePe+02hyRrmdNl1PruhyOk4wReeHVqsgLV9S6pNtRuteNNtzd6A4MxwISUZj1kT/DlhyWDBZBIvB6TW73ZL0Rc0GNNkdkhx0ZRoMomjz7UnegGqZQfKt9C5miuRep1GQDy9h1tn505/+9P9PRfE65s94Bv9KRumpfdHMD3vBj838awmX+kujmQclDx/28X+xd5d9e6CWuWUv2XVso53f4+ClDz5qZZr4BN6Q+FZelnJ54Wdx8fw+dnvqgafX41J4Yd2pH9fDOP+puC+HfljBNN1LbzQm2Xkda0oabwwVrGDSSFwqXB/LAVIyeG3jta0FwPvPeqo/P8gLqT3X+/cl8Pparnx86qOCFFS7DgIZH3aSMvL5ncdrIIXfZzwDuPL3UxE5wNNy2LqesPLq/75RnLSGf1Nqz+5Txc12YDSFaNZugkuPo2s3HYBFb11fNNQNLQcT+sqZLmVdLVD460cDO596qiFpLIHLjcCdaEgoB7BXlLbnfVmSwX8kunnbGuAG3esZep/C0XFY12vH/nHz2j3Ha2m9Kq16uisBkoY/Wf3st/VEv91v/O3USTsFTbaSvoRtN2HpXhhfbYfKkVQ05966ULGGN6PhGJvaVnzYwKM2gEMt8CwVOgqg9Srxvw6vgdq/xNN6PJXxVQnU3q0A+jOojfsF9o4A8UDqPWH0UgVANG/OuqsVxvcKBmBnH8BoK9xZAbvWQuEmiB9OgoZjQGUSPFwHW3uAVeX01q6Alt6B91NRNRQe+Hwtb1ZF5cfv1ec8gTvRAIdSabixLqH62DgkFQNLl0JDP7C7AH6ugP1JwMC+m6cOAqRe+fnOplogHnj/BG9W4f9U9m06FA0GgNQbdlrv3DIc7gM6HwFxX0L0DexJvQ1w6XZb4z/GgdMd+44Womk5kQO1n9mh8CFvVtwPreV3FgNPW4D1p6FiE9uaAJq3ApfrIdrywQejFcDjh8W9GQC3q/mlhDXEXwHWrQYWNbPm9Hu8WU9ukmKJA8riIGV1ATTn0HprHGhbCty+DdEfJLTYAeqfsPsKwJUDZKw42Qx3y+HgamBEV3R8dzRv3r4UoPB43NrDQ0DPAfhrHLD3J2AgCeLz0Ny8wsG8BKAkB/i1CYoHupOu7QVKkgoPMmvsa3d//NM4lF5/XEDJdWBPG1TcGgfy0FyphqUjwNr9hXFXfjsJH937+GG1nVlnR1XSlFNK/K0PxveNLiwe+HEttPR8UF0dDawduJpDxupFBz8KfbvrxLala6Ehg7lnb6GwsC+upBZIGNq2bVs0UHB773pILUxJiec/8L/hKNVosAv1BQAAAABJRU5ErkJggg=="},56:function(e,a,t){e.exports=t.p+"static/media/dish.d9eab4ee.png"},57:function(e,a,t){e.exports=t.p+"static/media/cook.f17dc99d.png"},60:function(e,a,t){e.exports=t.p+"static/media/food-1.5eeeed00.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/food-2.1692f2f8.jpg"},64:function(e,a,t){e.exports=t(167)}},[[64,1,2]]]);
//# sourceMappingURL=main.15fd3bfd.chunk.js.map