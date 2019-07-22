(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(203),r=n(205),l=n(204);var s=n(197).b.h1.withConfig({displayName:"hero__BigHello",componentId:"ahkmwi-0"})(["font-size:2em;@media only screen and (min-width:768px){font-size:4em;}"]),c=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(s,null,"Hi. I'm Nick."),o.a.createElement("p",null,"My name is Nick Selvaggio. I help companies leverage technology to their benefit, teach developers how to improve, and am in constant persute to learn from those around me."),o.a.createElement("p",null,"The purpose of this site is to share slides from talks I've given, share experiments I may be playing with, and share any other information I may feel compelled to post. "))},a}(a.Component),d=n(202),u=n(208),m=n.n(u);function p(e){var t=new f,n=0;e.setup=function(){var t=document.getElementById("myCanvas"),n=t.offsetWidth,a=t.offsetHeight;e.createCanvas(n,a),e.background(e.color("white")),e.frameRate(10),e.noStroke()},e.draw=function(){n<=20&&(e.stroke("black"),e.background(e.color(255,255,255,40)),e.noFill(),t.draw(e),n++)},e.windowResized=function(){var t=document.getElementById("myCanvas"),a=t.offsetWidth,o=t.offsetHeight;e.resizeCanvas(a,o),e.background(e.color("white")),n=0}}var f=function(){this.draw=function(e){e.ellipse(e.random(150,e.width),e.random(500,e.height),e.random(0,100))},this.x=300,this.y=500};t.default=function(){return o.a.createElement(r.c,null,o.a.createElement(i.a,null),o.a.createElement(d.a,null),o.a.createElement(r.f,null,o.a.createElement(l.a,null)),o.a.createElement(r.d,null,o.a.createElement(r.h,null,o.a.createElement(r.g,null,"nickgs")),o.a.createElement(r.a,null,o.a.createElement(c,null))),o.a.createElement(r.e,{id:"myCanvas"},o.a.createElement(m.a,{sketch:p})))}},198:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},199:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(0),o=n.n(a),i=n(66),r=n.n(i);n.d(t,"a",function(){return r.a});n(198),n(9).default.enqueue;var l=o.a.createContext({});function s(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,r=n?n.data:t[a]&&t[a].data;return o.a.createElement(o.a.Fragment,null,r&&i(r),!r&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return o.a.createElement(l.Consumer,null,function(e){return o.a.createElement(s,{data:t,query:n,render:a||i,staticQueryData:e})})}},200:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),o=n.n(a),i=n(95);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},202:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(206);t.a=function(e){e.siteTitle;return o.a.createElement(i.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Nick Selvaggio - Long Island Technology Professional. Drupal and web development."),o.a.createElement("meta",{name:"description",content:"Long Island web applications developer"}))}},203:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(197);function o(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n\n  body {\n    @import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');\n    font-family: 'Open Sans', sans-serif;\n  }\n\n  h3 {\n    font-family: 'Merriweather', serif;\n  }\n"]);return o=function(){return e},e}var i=Object(a.a)(o())},204:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(197).b.div.withConfig({displayName:"menu-styles__MenuStylesWrap",componentId:"l1nqiv-0"})([".bm-burger-button{position:fixed;width:26px;height:30px;left:18.75px;top:31px;@media only screen and (min-width:321px){width:41.5px;height:30px;left:13.75px;top:31px;}}.bm-burger-bars{background:white;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#bdc3c7;}.bm-menu{background:black;padding:2.5em 1.5em 0;font-size:1.15em;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:0.8em;}.bm-item{display:inline-block;}.bm-overlay{background:rgba(0,0,0,0.3);}"]),r=n(211),l=n(199);var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(i,null,o.a.createElement(r.slide,null,o.a.createElement(l.a,{to:"/"},"About"),o.a.createElement(l.a,{to:"/talks"},"Speaking / Teaching"),o.a.createElement(l.a,{to:"/work"},"Work"),o.a.createElement(l.a,{to:"/contact"},"Contact")))},a}(a.Component);t.a=s},205:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return s}),n.d(t,"g",function(){return c}),n.d(t,"h",function(){return d}),n.d(t,"d",function(){return u});var a=n(197),o=a.b.div.withConfig({displayName:"layout-styles__Container",componentId:"sc-39s07a-0"})(["display:flex;height:100vh;"]),i=a.b.div.withConfig({displayName:"layout-styles__SideBar",componentId:"sc-39s07a-1"})(["flex-basis:50px;background-color:black;@media only screen and (min-width:321px){flex-basis:103px;max-width:68px;}ul{color:whitesmoke;margin:0px;}li{list-style:none;text-transform:uppercase;color:white;}.bm-item-list{display:flex;flex-direction:column;a{color:white;text-decoration:none;line-height:2em;}}"]),r=a.b.div.withConfig({displayName:"layout-styles__Article",componentId:"sc-39s07a-2"})(["margin:20px;@media only screen and (min-width:768px){margin:50px;}h3{font-size:2em;}"]),l=a.b.h1.withConfig({displayName:"layout-styles__BigHello",componentId:"sc-39s07a-3"})(["font-size:2.5em;@media only screen and (min-width:768px){font-size:3.5em;}"]),s=a.b.div.withConfig({displayName:"layout-styles__MediaZone",componentId:"sc-39s07a-4"})(["flex-basis:0%;display:none;@media only screen and (min-width:768px){display:block;flex-basis:45%;}background-color:#505050;flex-grow:1;flex-basis:100%;canvas{width:100%;height:100%;}"]),c=a.b.h1.withConfig({displayName:"layout-styles__Title",componentId:"sc-39s07a-5"})(["font-size:2em;color:whitesmoke;background-color:#840015;width:175px;padding:20px;text-transform:uppercase;height:2.2em;grid-area:1 / 1 / 4 / 2;a{text-decoration:none;color:white;}"]),d=a.b.div.withConfig({displayName:"layout-styles__TopNav",componentId:"sc-39s07a-6"})(["display:grid;grid-template-rows:1fr;grid-template-columns:1fr 1fr;overflow:hidden;img{width:100%;grid-area:1 / 1 / 4 / 4;}border-top:5px solid #840015;padding-bottom:0px;padding-top:0px;"]),u=(a.b.div.withConfig({displayName:"layout-styles__FullVideoStyles",componentId:"sc-39s07a-7"})(["video{object-fit:cover;width:100%;height:100%;position:absolute;top:0;z-index:-1;}"]),a.b.div.withConfig({displayName:"layout-styles__MainContent",componentId:"sc-39s07a-8"})(["flex-basis:100%;@media only screen and (min-width:768px){flex-basis:55%;}overflow:auto;"]))}}]);
//# sourceMappingURL=component---src-pages-index-js-da904888a50df531fc18.js.map