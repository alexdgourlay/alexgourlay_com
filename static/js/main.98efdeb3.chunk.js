(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{14:function(e){e.exports={github_dir:"https://raw.githubusercontent.com/alexdgourlay/alexgourlay_com/master/alexgourlay_com",github:"https://github.com/alexdgourlay",linkedin:"https://www.linkedin.com/in/alex-gourlay/",vimeo:"https://vimeo.com/user84459647"}},19:function(e){e.exports=[{id:"0",date:"13-02-2018",title:"AXPendula",enabled:!0,tags:["AV Installation","3D Modelling","Max MSP"],dir:"resources/projects/0_AXPendula",img:"0_AXPendula/OPT_A_AXPendula.JPG",summary:"An interactive audio visual installation, featured at London Design Festival"},{id:"1",date:"21-04-2019",title:"OrBit",enabled:!0,tags:["Product Design","Ableton","Node js"],dir:"resources/projects/1_OrBit",img:"1_OrBit/OPT_A_OrBit.jpg",summary:"A motion sensing controller for music production software"},{id:"2",date:"21-07-2018",title:"Horizons Studio",enabled:!0,tags:["Virtual Reality","Unity","PureData"],dir:"resources/projects/2_Horizons",img:"2_Horizons/OPT_HD_ShoalFishStill.jpg",summary:"Interactive sound objects in virtual reality"},{id:"3",date:"21-02-2019",title:"VitaRun",enabled:!0,dir:"resources/projects/3_VitaRun",tags:["Android Dev","Smart Healthcare","Data Analysis"],img:"3_VitaRun/OPT_VitaRun_Over_Shoulder_Crop.png",summary:"A smart healthcare app that integrates pressure sensing insoles and machine learning"},{id:"5",date:"21-02-2019",title:"Vortech",enabled:!0,dir:"resources/projects/5_Vortech",tags:["3D Modelling","Product Design","Medical"],img:"5_Vortech/OPT_vortech_combo.png",summary:"A low cost solution for the measurement of lung volume in medical settings"},{id:"6",date:"21-02-2019",title:"Sustainable Toothbrush",enabled:!0,dir:"resources/projects/6_SustainableToothbrush",tags:["3D Modelling","Manufacturing Analysis"],img:"6_SustainableToothbrush/OPT_BrushRender1.png",summary:"A more sustainable toothbrush design, featuring replaceable head storage"}]},32:function(e,t,n){},34:function(e,t,n){e.exports=n(50)},39:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(23),o=n.n(r),l=(n(39),n(6)),c=n(7),s=n(9),u=n(8),d=n(10),m=n(16),h=n(12),p=(n(40),function(e){return i.a.createElement("div",null,i.a.createElement("div",{id:"headbar-container"},i.a.createElement(m.b,{to:"/"},i.a.createElement("div",{className:"titleText"},i.a.createElement("span",null,"AG")))))}),g=n(29),b=n(22),f=n(14),v=(n(45),function(e){return i.a.createElement("div",{id:"container"},i.a.createElement("div",null,i.a.createElement(b.a,{className:"footer-icon",size:35,onClick:function(){return window.open(f.linkedin)}}),i.a.createElement(g.a,{className:"footer-icon",size:35,onClick:function(){return window.open(f.github)}}),i.a.createElement(b.b,{className:"footer-icon",size:35,onClick:function(){return window.open(f.vimeo)}})),i.a.createElement("div",null,i.a.createElement("p",{className:"footer-text"},"Designed and built by me, using React.js")))}),E=n(30),w=n.n(E),j=function(e){var t=e.windowWidth,n=e.windowHeight;e.disableFriendlyErrors=!0,e.windowResized=function(){t=e.windowWidth,n=e.windowHeight,e.resizeCanvas(e.windowWidth,e.windowHeight),e.setup()},e.setup=function(){e.createCanvas(t,n,e.WEBGL).style("z-index",-1),e.background(255),e.noStroke(),e.frameRate(20),e.background(255);for(var a=-t/2;a<t/2;a+=20)for(var i=-n/2;i<n/2;i+=20){var r=a/200,o=i/200,l=255*e.noise(r+.1*e.mouseX/100,o+.1*e.mouseY/100);if(l<100){e.fill(l/2+100);var c=240/l*400/n;e.ellipse(a,i,c,c)}}}},y=n(11),O=n(18),_=n.n(O),x=(n(47),function(e){return null!==e.project?i.a.createElement(a.Suspense,{fallback:i.a.createElement("div",null,i.a.createElement(_.a,{css:{position:"fixed",top:"50%",left:"50%",marginRight:"100px",marginBottom:"50px"},sizeUnit:"px",size:10,color:"#676767",loading:!0}))},i.a.createElement("div",{id:"preview-container"},i.a.createElement("div",{style:{textAlign:"right"}},i.a.createElement("h1",{id:"preview-header"},e.project.summary)),i.a.createElement("img",{className:"preview-image",alt:"Project Preview",src:"".concat(e.github_url,"/").concat("resources/projects","/").concat(e.project.img)}))):i.a.createElement("div",{id:"preview-container"},i.a.createElement("div",{style:{textAlign:"right"}},i.a.createElement("h1",{id:"preview-header"},"Hello and welcome to my portfolio site, to the left you will find a selection of different projects I have worked on over the past few years. Feel free to explore! Alex.")),i.a.createElement("img",{className:"preview-image preview-image-placeholder",alt:"Me",src:"".concat(e.github_url,"/resources/me.jpg")}))}),k=(n(48),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){n.setBoundingRect(),window.addEventListener("resize",function(){return n.setBoundingRect()})},n.state={boundingRect:null,redirect:!1},n.animation=void 0===e.animation||n.animation,n.selector=i.a.createRef(),n.setBoundingRect=n.setBoundingRect.bind(Object(y.a)(n)),n.handleTileClick=n.handleTileClick.bind(Object(y.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"setBoundingRect",value:function(){}},{key:"handleTileClick",value:function(){this.animation&&this.setState({redirect:!0})}},{key:"render",value:function(){var e=this,t=this.props.project;return this.state.redirect?(window.history.pushState({},"/"),i.a.createElement(h.a,{to:{pathname:"Projects/".concat(t.id)}})):i.a.createElement("div",{className:this.animation?"tile":"tile_noAnimation",onMouseOver:function(){return e.props.handleTileEnter(t)},onMouseLeave:function(){return e.props.handleTileExit()},onTouchStart:function(){return e.props.handleTileEnter(t)},onMouseUp:function(){return e.handleTileClick(t)},ref:this.selector},i.a.createElement("div",{id:"date"},t.date),i.a.createElement("div",{id:this.animation?"title":"title_noAnimation"},t.title),t.tags.map(function(e,n){return i.a.createElement("p",{className:"tag",key:n},n===t.tags.length-1?"".concat(e).toLowerCase():"".concat(e,", ").toLowerCase())}))}}]),t}(i.a.Component)),T=n(19),P=(n(49),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={github_url:"https://raw.githubusercontent.com/alexdgourlay/alexgourlay.com/master/alexgourlay_com",projects:[],projectHovered:null,isMobile:!1},/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&n.setState({isMobile:!0}),window.onresize=function(e){n.setState({windowWidth:window.innerWidth})},n.handleTileEnter=n.handleTileEnter.bind(Object(y.a)(n)),n.handleTileExit=n.handleTileExit.bind(Object(y.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title="AG Portfolio - Home",this.setState({projects:T,windowWidth:window.innerWidth})}},{key:"handleTileEnter",value:function(e){this.setState({projectHovered:e})}},{key:"handleTileExit",value:function(){this.setState({projectHovered:null})}},{key:"render",value:function(){var e,t,n=this,a=this.state.projectHovered?{backgroundImage:"url(".concat(this.state.github_url,"/").concat("resources/projects","/").concat(this.state.projectHovered.img,")")}:{};return this.state.windowWidth<800?(e=null,t=i.a.createElement("div",{id:"mobile-image-background",style:a})):(e=i.a.createElement(x,{github_url:this.state.github_url,project:this.state.projectHovered}),t=null),i.a.createElement("div",{id:"PageHome"},t,i.a.createElement("div",{className:"tileGrid"},this.state.projects.map(function(e){return i.a.createElement("div",{className:"tileGridElement",key:e.id},i.a.createElement(k,{key:e.id,project:e,match:n.props.match,handleTileEnter:n.handleTileEnter,handleTileExit:n.handleTileExit}))})),i.a.createElement("div",{id:"preview-container"},e))}}]),t}(i.a.Component)),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(i.a.Component),z=(n(32),[Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,129))}),Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,130))}),Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,131))}),Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,132))}),Object(a.lazy)(function(){return n.e(10).then(n.bind(null,133))}),Object(a.lazy)(function(){return n.e(4).then(n.bind(null,134))}),Object(a.lazy)(function(){return n.e(5).then(n.bind(null,135))})]),S=function(e){var t=e.match.params.projectKey,n=T.find(function(e){return e.id===t});document.title="AG Portfolio - ".concat(n.title);var r=z[t];return i.a.createElement(a.Suspense,{fallback:i.a.createElement("div",null,i.a.createElement(_.a,{css:{position:"fixed",top:"50%",left:"50%",marginRight:"100px",marginBottom:"50px"},sizeUnit:"px",size:10,color:"#676767",loading:!0}))},i.a.createElement("div",{id:"project-main-body"},i.a.createElement(k,{key:n.id,project:n,match:e.match,animation:!1,handleTileEnter:function(){},handleTileExit:function(){}}),i.a.createElement(r,{project:n,RES_DIR:"".concat(f.github_dir,"/").concat(n.dir)}),i.a.createElement("hr",null)),i.a.createElement("div",{style:{paddingBottom:"100px"}}),"s")},R=function(e){return i.a.createElement("h1",null,"404 Error, page not found! Have a nice day :)")},B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,{basename:""},i.a.createElement("div",{id:"canvas"},i.a.createElement(w.a,{sketch:j})),i.a.createElement(p,null),i.a.createElement("div",null,i.a.createElement(h.d,null,i.a.createElement(h.b,{exact:!0,path:"/",component:P}),i.a.createElement(h.b,{exact:!0,path:"/AboutMe",component:A}),i.a.createElement(h.b,{exact:!0,path:"/Projects/:projectKey",component:S}),i.a.createElement(h.b,{component:R}))),i.a.createElement(v,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,3]]]);
//# sourceMappingURL=main.98efdeb3.chunk.js.map