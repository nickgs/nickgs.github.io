(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{195:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(199),r=n(208),l=n.n(r);n(210);function s(e){var t,n=["#a7e0e3","#92d6da","#8ecdd0","#84bfc2","#7eafb1"];e.setup=function(){var n=document.getElementById("myCanvas"),a=n.offsetWidth,o=n.offsetHeight;e.createCanvas(a,o),e.background(e.color(255,255,255)),e.noStroke(),t=new i,e.frameRate(24)},e.draw=function(){e.background(255),e.fill(255),t.draw(),t.addParticle()},e.windowResized=function(){var t=document.getElementById("myCanvas"),n=t.offsetWidth,a=t.offsetHeight;e.resizeCanvas(n,a)};var a=function(t){this.acceleration=e.createVector(0,-.02),this.velocity=e.createVector(e.random(-.5,.5),e.random(-.5,.5)),this.position=t,this.lifeSpan=155,this.size=e.random(5,20),this.color=e.random(n)};a.prototype.draw=function(t){for(var n=0;n<t.length;n++)Math.abs(t[n].position.x-this.position.x)<=100&&Math.abs(t[n].position.y-this.position.y)<=100&&(e.stroke("rgba(0,0,0,0.05)"),e.line(this.position.x,this.position.y,t[n].position.x,t[n].position.y));var a,i,o;e.noStroke(),e.fill((a=this.color,i=this.lifeSpan/50,o=e.color(a),e.color("rgba("+[e.red(o),e.green(o),e.blue(o),i].join(",")+")"))),e.ellipse(this.position.x,this.position.y,this.size,this.size)},a.prototype.update=function(){this.velocity.add(this.acceleration),this.position.add(this.velocity),this.lifeSpan-=2},a.prototype.isDead=function(){return this.lifeSpan<=1};var i=function(){this.particles=[]};i.prototype.addParticle=function(){this.particles.push(new a(e.createVector(e.random(e.canvas.width),e.random(e.canvas.width))))},i.prototype.draw=function(){for(var e=0;e<this.particles.length;e++)this.particles[e].update(),this.particles[e].draw(this.particles),this.particles[e].isDead()&&this.particles.splice(e,1)}}var c=n(203),d=n(205),u=n(204),p=n(202);t.default=function(){return i.a.createElement(d.c,null,i.a.createElement(c.a,null),i.a.createElement(p.a,null),i.a.createElement(d.f,null,i.a.createElement(u.a,null)),i.a.createElement(d.d,null,i.a.createElement(d.h,null,i.a.createElement(d.g,null,i.a.createElement(o.a,{to:"/"},"nickgs"))),i.a.createElement(d.a,null,i.a.createElement(d.b,null,"Speaking / Teaching"),i.a.createElement("p",null,"Below is a list of talks I've given. Some are longer form full day trainings, some turned into full semester curriculums."),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"http://nickgs.com/drupal8-testdrive-module/#/"},"Drupal 8 Module Development")),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"http://nickgs.com/smart-contracts/#/"},"Getting Started with Ethereum Smart Contracts")),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"http://nickgs.com/code2art-talk/#/"},"Introduction to Creative Coding with P5.js")),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"http://nickgs.com/hello-docker/"},"Hello Docker")),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"http://nickgs.com/php-oo-slides/#/"},"Object Oriented Programming in PHP")),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"http://nickgs.com/hello-gatsby/"},"Hello GatsbyJS")),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"https://erc20.surge.sh"},"Create your own Cryto - An exploration of the ERC20 token standard."))),i.a.createElement("p",null,"I really like putting these together. If you have an event and looking for speakers, ",i.a.createElement("a",{href:"/contact"},"reach out.")))),i.a.createElement(d.e,{id:"myCanvas"},i.a.createElement(l.a,{sketch:s})))}},198:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},199:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(0),i=n.n(a),o=n(66),r=n.n(o);n.d(t,"a",function(){return r.a});n(198),n(9).default.enqueue;var l=i.a.createContext({});function s(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,r=n?n.data:t[a]&&t[a].data;return i.a.createElement(i.a.Fragment,null,r&&o(r),!r&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return i.a.createElement(l.Consumer,null,function(e){return i.a.createElement(s,{data:t,query:n,render:a||o,staticQueryData:e})})}},200:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),i=n.n(a),o=n(95);t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},202:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(206);t.a=function(e){e.siteTitle;return i.a.createElement(o.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Nick Selvaggio - Long Island Technology Professional. Drupal and web development."),i.a.createElement("meta",{name:"description",content:"Long Island web applications developer"}))}},203:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(197);function i(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n\n  body {\n    @import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');\n    font-family: 'Open Sans', sans-serif;\n  }\n\n  h3 {\n    font-family: 'Merriweather', serif;\n  }\n"]);return i=function(){return e},e}var o=Object(a.a)(i())},204:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(197).b.div.withConfig({displayName:"menu-styles__MenuStylesWrap",componentId:"l1nqiv-0"})([".bm-burger-button{position:fixed;width:26px;height:30px;left:18.75px;top:31px;@media only screen and (min-width:321px){width:41.5px;height:30px;left:13.75px;top:31px;}}.bm-burger-bars{background:white;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#bdc3c7;}.bm-menu{background:black;padding:2.5em 1.5em 0;font-size:1.15em;}.bm-morph-shape{fill:#373a47;}.bm-item-list{color:#b8b7ad;padding:0.8em;}.bm-item{display:inline-block;}.bm-overlay{background:rgba(0,0,0,0.3);}"]),r=n(211),l=n(199);var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return i.a.createElement(o,null,i.a.createElement(r.slide,null,i.a.createElement(l.a,{to:"/"},"About"),i.a.createElement(l.a,{to:"/talks"},"Speaking / Teaching"),i.a.createElement(l.a,{to:"/work"},"Work"),i.a.createElement(l.a,{to:"/contact"},"Contact")))},a}(a.Component);t.a=s},205:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return s}),n.d(t,"g",function(){return c}),n.d(t,"h",function(){return d}),n.d(t,"d",function(){return u});var a=n(197),i=a.b.div.withConfig({displayName:"layout-styles__Container",componentId:"sc-39s07a-0"})(["display:flex;height:100vh;"]),o=a.b.div.withConfig({displayName:"layout-styles__SideBar",componentId:"sc-39s07a-1"})(["flex-basis:50px;background-color:black;@media only screen and (min-width:321px){flex-basis:103px;max-width:68px;}ul{color:whitesmoke;margin:0px;}li{list-style:none;text-transform:uppercase;color:white;}.bm-item-list{display:flex;flex-direction:column;a{color:white;text-decoration:none;line-height:2em;}}"]),r=a.b.div.withConfig({displayName:"layout-styles__Article",componentId:"sc-39s07a-2"})(["margin:20px;@media only screen and (min-width:768px){margin:50px;}h3{font-size:2em;}"]),l=a.b.h1.withConfig({displayName:"layout-styles__BigHello",componentId:"sc-39s07a-3"})(["font-size:2.5em;@media only screen and (min-width:768px){font-size:3.5em;}"]),s=a.b.div.withConfig({displayName:"layout-styles__MediaZone",componentId:"sc-39s07a-4"})(["flex-basis:0%;display:none;@media only screen and (min-width:768px){display:block;flex-basis:45%;}background-color:#505050;flex-grow:1;flex-basis:100%;canvas{width:100%;height:100%;}"]),c=a.b.h1.withConfig({displayName:"layout-styles__Title",componentId:"sc-39s07a-5"})(["font-size:2em;color:whitesmoke;background-color:#840015;width:175px;padding:20px;text-transform:uppercase;height:2.2em;grid-area:1 / 1 / 4 / 2;a{text-decoration:none;color:white;}"]),d=a.b.div.withConfig({displayName:"layout-styles__TopNav",componentId:"sc-39s07a-6"})(["display:grid;grid-template-rows:1fr;grid-template-columns:1fr 1fr;overflow:hidden;img{width:100%;grid-area:1 / 1 / 4 / 4;}border-top:5px solid #840015;padding-bottom:0px;padding-top:0px;"]),u=(a.b.div.withConfig({displayName:"layout-styles__FullVideoStyles",componentId:"sc-39s07a-7"})(["video{object-fit:cover;width:100%;height:100%;position:absolute;top:0;z-index:-1;}"]),a.b.div.withConfig({displayName:"layout-styles__MainContent",componentId:"sc-39s07a-8"})(["flex-basis:100%;@media only screen and (min-width:768px){flex-basis:55%;}overflow:auto;"]))}}]);
//# sourceMappingURL=component---src-pages-talks-js-fee57fc4f3249e394601.js.map