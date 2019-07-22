(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(151),r=t(155),l=t(152),s=t(7),c=t.n(s),d=t(145).b.h1.withConfig({displayName:"hero__BigHello",componentId:"ahkmwi-0"})(["font-size:2em;@media only screen and (min-width:768px){font-size:4em;}"]),u=function(e){function n(){return e.apply(this,arguments)||this}return c()(n,e),n.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(d,null,"Hi. I'm Nick."),i.a.createElement("p",null,"My name is Nick Selvaggio. I help companies leverage technology to their benefit, teach developers how to improve, and am in constant persute to learn from those around me."),i.a.createElement("p",null,"The purpose of this site is to share slides from talks I've given, share experiments I may be playing with, and share any other information I may feel compelled to post. "))},n}(a.Component),m=t(150),p=t(157),f=t.n(p);function h(e){var n=new g,t=0;e.setup=function(){var n=document.getElementById("myCanvas"),t=n.offsetWidth,a=n.offsetHeight;e.createCanvas(t,a),e.background(e.color("white")),e.frameRate(10),e.noStroke()},e.draw=function(){t<=20&&(e.stroke("black"),e.background(e.color(255,255,255,40)),e.noFill(),n.draw(e),t++)},e.windowResized=function(){var n=document.getElementById("myCanvas"),a=n.offsetWidth,i=n.offsetHeight;e.resizeCanvas(a,i),e.background(e.color("white")),t=0}}var g=function(){this.draw=function(e){e.circle(e.random(150,e.width),e.random(500,e.height),e.random(0,100))},this.x=300,this.y=500};n.default=function(){return i.a.createElement(r.c,null,i.a.createElement(o.a,null),i.a.createElement(m.a,null),i.a.createElement(r.f,null,i.a.createElement(l.a,null)),i.a.createElement(r.d,null,i.a.createElement(r.h,null,i.a.createElement(r.g,null,"nickgs")),i.a.createElement(r.a,null,i.a.createElement(u,null))),i.a.createElement(r.e,{id:"myCanvas"},i.a.createElement(f.a,{sketch:h})))}},146:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return f}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return p});var a=t(0),i=t.n(a),o=t(4),r=t.n(o),l=t(144),s=t.n(l);t.d(n,"Link",function(){return s.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var c=t(147),d=t.n(c);t.d(n,"PageRenderer",function(){return d.a});var u=t(32);t.d(n,"parsePath",function(){return u.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},147:function(e,n,t){var a;e.exports=(a=t(148))&&a.default||a},148:function(e,n,t){"use strict";t.r(n);t(33);var a=t(0),i=t.n(a),o=t(4),r=t.n(o),l=t(51),s=t(2),c=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},n.default=c},150:function(e,n,t){"use strict";var a=t(0),i=t.n(a),o=t(156);n.a=function(e){e.siteTitle;return i.a.createElement(o.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Nick Selvaggio - Long Island Technology Professional. Drupal and web development."),i.a.createElement("meta",{name:"description",content:"Long Island web applications developer"}))}},151:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var a=t(158),i=t.n(a),o=t(145);function r(){var e=i()(["\n\n  body {\n    @import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');\n    font-family: 'Open Sans', sans-serif;\n  }\n\n  h3 {\n    font-family: 'Merriweather', serif;\n  }\n"]);return r=function(){return e},e}var l=Object(o.a)(r())},152:function(e,n,t){"use strict";var a=t(7),i=t.n(a),o=t(0),r=t.n(o),l=t(145).b.div.withConfig({displayName:"menu-styles__MenuStylesWrap",componentId:"l1nqiv-0"})([".bm-burger-button{position:fixed;width:26px;height:30px;left:18.75px;top:31px;@media only screen and (min-width:321px){width:41.5px;height:30px;left:13.75px;top:31px;}}.bm-burger-bars{background:white;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#bdc3c7;}.bm-menu{background:black;padding:2.5em 1.5em 0;font-size:1.15em;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:0.8em;}.bm-item{display:inline-block;}.bm-overlay{background:rgba(0,0,0,0.3);}"]),s=t(159),c=t(146),d=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){return r.a.createElement(l,null,r.a.createElement(s.slide,null,r.a.createElement(c.Link,{to:"/"},"About"),r.a.createElement(c.Link,{to:"/talks"},"Speaking / Teaching"),r.a.createElement(c.Link,{to:"/work"},"Work"),r.a.createElement(c.Link,{to:"/contact"},"Contact")))},n}(o.Component);n.a=d},155:function(e,n,t){"use strict";t.d(n,"c",function(){return i}),t.d(n,"f",function(){return o}),t.d(n,"a",function(){return r}),t.d(n,"b",function(){return l}),t.d(n,"e",function(){return s}),t.d(n,"g",function(){return c}),t.d(n,"h",function(){return d}),t.d(n,"d",function(){return u});var a=t(145),i=a.b.div.withConfig({displayName:"layout-styles__Container",componentId:"sc-39s07a-0"})(["display:flex;height:100vh;"]),o=a.b.div.withConfig({displayName:"layout-styles__SideBar",componentId:"sc-39s07a-1"})(["flex-basis:50px;background-color:black;@media only screen and (min-width:321px){flex-basis:103px;max-width:68px;}ul{color:whitesmoke;margin:0px;}li{list-style:none;text-transform:uppercase;color:white;}.bm-item-list{display:flex;flex-direction:column;a{color:white;text-decoration:none;line-height:2em;}}"]),r=a.b.div.withConfig({displayName:"layout-styles__Article",componentId:"sc-39s07a-2"})(["margin:20px;@media only screen and (min-width:768px){margin:50px;}h3{font-size:2em;}"]),l=a.b.h1.withConfig({displayName:"layout-styles__BigHello",componentId:"sc-39s07a-3"})(["font-size:2.5em;@media only screen and (min-width:768px){font-size:3.5em;}"]),s=a.b.div.withConfig({displayName:"layout-styles__MediaZone",componentId:"sc-39s07a-4"})(["flex-basis:0%;display:none;@media only screen and (min-width:768px){display:block;flex-basis:45%;}background-color:#505050;flex-grow:1;flex-basis:100%;canvas{width:100%;height:100%;}"]),c=a.b.h1.withConfig({displayName:"layout-styles__Title",componentId:"sc-39s07a-5"})(["font-size:2em;color:whitesmoke;background-color:#840015;width:175px;padding:20px;text-transform:uppercase;height:2.2em;grid-area:1 / 1 / 4 / 2;a{text-decoration:none;color:white;}"]),d=a.b.div.withConfig({displayName:"layout-styles__TopNav",componentId:"sc-39s07a-6"})(["display:grid;grid-template-rows:1fr;grid-template-columns:1fr 1fr;overflow:hidden;img{width:100%;grid-area:1 / 1 / 4 / 4;}border-top:5px solid #840015;padding-bottom:0px;padding-top:0px;"]),u=(a.b.div.withConfig({displayName:"layout-styles__FullVideoStyles",componentId:"sc-39s07a-7"})(["video{object-fit:cover;width:100%;height:100%;position:absolute;top:0;z-index:-1;}"]),a.b.div.withConfig({displayName:"layout-styles__MainContent",componentId:"sc-39s07a-8"})(["flex-basis:100%;@media only screen and (min-width:768px){flex-basis:55%;}overflow:auto;"]))}}]);
//# sourceMappingURL=component---src-pages-index-js-d4138fedc40aa3943bd9.js.map