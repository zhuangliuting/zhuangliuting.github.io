(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n(211)},124:function(e,t,n){},125:function(e,t,n){},200:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(9),s=n.n(i),o=(n(124),n(17)),r=n(18),c=n(21),u=n(19),m=n(22),h=(n(51),n(13)),d=n(217),p=(n(64),n(82)),g=n(113),E=n(215),f=n(216),v=n(212),y=n(214),w=n(218),S=(n(125),p.a.SubMenu);function b(){return l.a.createElement(g.a,{style:{margin:"10px 0"}})}var F={padding:"5px"},k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleCollapsed=function(){n.setState({collapsed:!n.state.collapsed})},n.onResolutionChange=function(e){n.setState({value:e.target.value})},n.onScanSettinfChange=function(e){n.setState({value:e.target.value})},n.state={showMenu:!0,content:null,collapsed:!1,value:1,selectedTags:[]},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"onSettingClick",value:function(){this.setState({showMenu:!this.state.showMenu})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.showMenu?l.a.createElement("div",{className:"setting-container"},l.a.createElement(E.a,{onBack:this.props.onBackClick,title:"Settings"}),l.a.createElement(p.a,{mode:"inline",theme:"light",inlineCollapsed:this.state.collapsed},l.a.createElement(S,{key:"video",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"camera"}),l.a.createElement("span",null,"Video Source"))},l.a.createElement(p.a.Item,{key:"camera1"},"Camera 1"),l.a.createElement(p.a.Item,{key:"camera2"},"Camera 2")),l.a.createElement(b,null),l.a.createElement(S,{key:"resolution",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"eye"}),l.a.createElement("span",null,"Video Resolution"))},l.a.createElement(f.a.Group,{style:{paddingLeft:"20px"},onChange:this.onResolutionChange,value:this.state.value},l.a.createElement(f.a,{style:F,value:1},"3080*2160"),l.a.createElement(f.a,{style:F,value:2},"2560*1440"),l.a.createElement(f.a,{style:F,value:3},"1929*1080"),l.a.createElement(f.a,{style:F,value:4},"1600*1200"),l.a.createElement(f.a,{style:F,value:5},"1280*720"),l.a.createElement(f.a,{style:F,value:6},"800*600"),l.a.createElement(f.a,{style:F,value:7},"640*480"),l.a.createElement(f.a,{style:F,value:8},"640*360"))),l.a.createElement(b,null),l.a.createElement(p.a.ItemGroup,{key:"Barcode Format",title:"Barcode Format",icon:"barcode"},l.a.createElement(p.a.Item,{key:"1D",style:{left:"5px"}},l.a.createElement("h5",null,"1D")),l.a.createElement(p.a.Item,{key:"PDF417",style:{left:"5px"}},l.a.createElement("h5",null,"PDF417")),l.a.createElement(p.a.Item,{key:"QR Code",style:{left:"5px"}},l.a.createElement("h5",null,"QR Code")),l.a.createElement(p.a.Item,{key:"Data Matrix",style:{left:"5px"}},l.a.createElement("h5",null,"Data Matrix")),l.a.createElement(p.a.Item,{key:"Actec Code",style:{left:"5px"}},l.a.createElement("h5",null,"Actec Code"))),l.a.createElement(b,null),l.a.createElement(S,{key:"scan",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"setting"}),l.a.createElement("span",null,"Scan Settings"))},l.a.createElement(f.a.Group,{style:{paddingLeft:"20px"},onChange:this.onScanSettinfChange,value:this.state.value},l.a.createElement(f.a,{style:F,value:"Fast"},"Fast"),l.a.createElement(f.a,{style:F,value:"Most Accurate"},"Most Accurate"))),l.a.createElement(b,null),l.a.createElement(S,{key:"region",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"eye"}),l.a.createElement("span",null,"Read Full Region"))},l.a.createElement("div",null,l.a.createElement(v.a,{onChange:this.onChangeRegionMode,style:{float:"right",right:"10px"}}))),l.a.createElement(b,null),l.a.createElement(S,{key:"about",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"bulb"}),l.a.createElement("span",null,"About Dynamsoft"))},l.a.createElement("div",null,l.a.createElement(y.a,{title:"About"},l.a.createElement("p",null,"Founded in Sep 2003 with the aim of being the dynamic center of software developers, Dynamsoft provides enterprise-class document capture and image processing software development kits (SDK), with numerous generations for each product. Today many Fortune 500 Companies including HP, IBM, Intel, and Siemens trust Dynamsoft solutions.")))),l.a.createElement(b,null),l.a.createElement("div",{className:"clear-cache"},l.a.createElement(w.a,{type:"primary",size:"large",onClick:function(){return null}},"Clear Cache")))):null)}}]),t}(l.a.Component),C=(n(200),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showFile:!0},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"onAddFileClick",value:function(){this.setState({showFile:!this.state.showFile}),console.log(this.state.showFile)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.showFile?l.a.createElement("div",{className:"file-container"},l.a.createElement(E.a,{onBack:this.props.onBackClick,title:"Files"})):null)}}]),t}(l.a.Component)),O=n(213),R=n(116),j=n.n(R),x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isDraw:!1},n.canvas=l.a.createRef(),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.point,t=e[0].split(",")[0],n=e[0].split(",")[1],a=e[1].split(",")[0],l=e[1].split(",")[1],i=e[2].split(",")[0],s=e[2].split(",")[1],o=e[3].split(",")[0],r=e[3].split(",")[1],c=Math.min(t,a,i,o),u=Math.min(n,l,s,r),m=t-c,h=a-c,d=i-c,p=o-c,g=n-u,E=l-u,f=s-u,v=r-u,y=this.canvas.current;if(y.getContext){var w=y.getContext("2d");w.fillStyle="rgba(254,180,32,0.5)",w.clearRect(0,0,y.width,y.height),w.beginPath(),w.moveTo(m,g),w.lineTo(h,E),w.lineTo(d,f),w.lineTo(p,v),w.fill()}}},{key:"render",value:function(){var e=this.props.point,t=e[0].split(",")[0],n=e[0].split(",")[1],a=e[1].split(",")[0],i=e[1].split(",")[1],s=e[2].split(",")[0],o=e[2].split(",")[1],r=e[3].split(",")[0],c=e[3].split(",")[1],u=Math.min(t,a,s,r),m=Math.max(t,a,s,r),h=Math.min(n,i,o,c),d=Math.max(n,i,o,c),p={position:"absolute",left:u+"px",top:h+"px"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("canvas",{ref:this.canvas,width:m-u,height:d-h,style:p}))}}]),t}(l.a.Component),I=window.Dynamsoft,M=null,P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={resultsInfo:[],isOpen:!1,resultsPoint:[],camera:0,cameraList:0,isFullRegion:n.props.isFullRegion},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"showScanner",value:function(){var e=this,t=1*this.props.region/100,n=t*window.innerWidth,a=.5*t*window.innerHeight,l=function(){var t,l,i,s,o=M.getResolution(),r=o[0],c=o[1];r>=window.innerWidth?(t=(window.innerWidth-n)/2/r,l=(window.innerWidth+n)/2/r,i=(c-a)/2/c,s=(c+a)/2/c):r<window.innerWidth&&(n>=250||a>=250?(t=(r-250)/2/r,l=(r+250)/2/r,i=(c-250)/2/c,s=(c+250)/2/c):(t=(r-n)/2/r,l=(r+n)/2/r,i=(c-a)/2/c,s=(c+a)/2/c));var u=M.getRuntimeSettings();e.state.isFullRegion?(u.region.left=0,u.region.right=100,u.region.top=0,u.region.bottom=100,u.region.measuredByPercentage=1,M.updateRuntimeSettings(u)):(u.region.left=Math.round(100*t),u.region.right=Math.round(100*l),u.region.top=Math.round(100*i),u.region.bottom=Math.round(100*s),u.region.measuredByPercentage=1,M.updateRuntimeSettings(u))};I.BarcodeScanner.createInstance({intervalTime:200,UIElement:document.getElementById("scanner"),videoSettings:{video:{width:{ideal:640},height:{ideal:480},facingMode:{ideal:"environment"}}},onFrameRead:function(t){for(var n=[],a=0;a<t.length;a++){var i=t[a];n.push(i.LocalizationResult.ResultPoints)}var s=M.arrDiffCodeInfo;e.setState({resultsInfo:s,resultsPoint:n,isFullRegion:e.props.isFullRegion}),null!==M&&l()},onUnduplicatedRead:function(e,t){console.log(t)}}).then(function(t){!1===(M=t)._isOpen?(console.log("open!"),M.open().then(function(t){M.getAllCameras().then(function(t){e.setState({cameraList:t}),console.log(e.state.cameraList),M.setCurrentCamera(t[e.state.camera].deviceId)}),l()})):(console.log("close!"),M.show().then(function(){return M.close()}))}).then(function(){e.setState({isOpen:!e.state.isOpen})})}},{key:"componentDidMount",value:function(){this.showScanner()}},{key:"componentWillUnmount",value:function(){this.showScanner()}},{key:"handleFullRegion",value:function(){this.setState({isFullRegion:this.state.isFullRegion})}},{key:"onSwitchCamera",value:function(){var e=this;M.getAllCameras().then(function(t){var n=e.state.cameraList.length;e.setState({camera:e.state.camera===n-1?0:e.state.cameraList+1}),M.setCurrentCamera(t[e.state.camera].deviceId)})}},{key:"render",value:function(){var e=this.state.resultsPoint.map(function(e,t){return l.a.createElement(x,{key:t,point:e})});return l.a.createElement(l.a.Fragment,null,l.a.createElement("style",{type:"text/css"},"\n                .waiting{\n                    position:absolute;\n                    left:50%;\n                    top:50%;\n                    transform:translate(-50%);\n                    color:#FE8E14;\n                    transition: opacity 1000ms ease-in;\n                }\n\n                .fade-enter.fade-enter-active {\n                    opacity:1;\n                    transition: opacity 1000ms ease-in;\n                }\n\n                .fade-enter{\n                    opacity:0;\n                }\n\n                .fade-leave{\n                    opacity: 1; \n                }\n\n                .fade-leave.fade-leave-active{\n                    opacity:0;\n                    transition: opacity 3000ms ease-in;\n                }\n                \n                .fade-appear{\n                    opacity:0;\n                }\n\n                .fade-appear.fade-appear-active {\n                    opacity: 1;\n                    transition: opacity 2000ms ease-in;\n                }\n                "),l.a.createElement(j.a,{transitionName:"fade",transitionLeave:!0,transitionAppear:!1,transitionEnter:!1,transitionAppearTimeout:500,transitionLeaveTimeout:3500,transitionEnterTimeout:2500},!this.state.isOpen&&l.a.createElement(O.a,{className:"waiting",tip:"Accessing Camera list...",indicator:l.a.createElement(h.a,{type:"smile",spin:!0,style:{fontSize:"3rem"}})})),l.a.createElement("div",{id:"scanner",style:{position:"absolute",width:"100%"}},l.a.createElement("div",{className:"video-container"},l.a.createElement("video",{className:"dbrScanner-video custom-video",playsInline:!0}),l.a.createElement(l.a.Fragment,null,e))),l.a.createElement(L,{resultsInfo:this.state.resultsInfo}),l.a.createElement("button",{onClick:this.onSwitchCamera.bind(this),style:{position:"absolute",top:"60px",left:0}},"\u5207\u6362\u76f8\u673a"))}}]),t}(l.a.Component);function B(e){return l.a.createElement("label",{className:"region",onClick:e.handleRegion},l.a.createElement(h.a,{type:e.isFullRegion?"fullscreen-exit":"fullscreen",style:{fontSize:"2rem",color:"#FE8E14"}}))}function N(e){return l.a.createElement("div",{className:"scanner-container"},l.a.createElement("div",{className:"frame",style:{width:e.region+"%",height:e.region+"%",maxWidth:"250px",maxHeight:"250px"}},l.a.createElement("label",{className:"flashlight"},l.a.createElement(h.a,{type:"funnel-plot",style:{fontSize:"2rem",color:"#FE8E14"}}))),l.a.createElement("div",{className:"tip-info"},l.a.createElement("p",null,"Put the code in the box and scan it automatically.")))}var D,T=[],A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isShowSettingPage:!1,isShowFilePage:!1,isFullScreen:!1,isFullRegion:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleRegion",value:function(){this.setState({isFullRegion:!this.state.isFullRegion})}},{key:"handleShowSettingPage",value:function(){this.setState({isShowSettingPage:!this.state.isShowSettingPage})}},{key:"handleShowFilePage",value:function(){this.setState({isShowFilePage:!this.state.isShowFilePage})}},{key:"switchFullScreen",value:function(){this.state.isFullScreen?document.exitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullScreen?document.documentElement.webkitRequestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.msRequestFullscreen(),this.setState({isFullScreen:!this.state.isFullScreen})}},{key:"fullSceenClickHandler",value:function(e){var t=this;e.preventDefault(),T.push((new Date).getTime()),window.clearTimeout(D),D=window.setTimeout(function(){T.length>1&&T[T.length-1]-T[T.length-2]<250&&t.switchFullScreen()},250)}},{key:"render",value:function(){var e=l.a.createElement("div",{className:"home-screen"},l.a.createElement(P,{region:60,isFullRegion:this.state.isFullRegion}),!this.state.isFullRegion&&l.a.createElement(N,{region:60}),l.a.createElement("div",{className:"dynam-info"},l.a.createElement("a",{href:"https://www.dynamsoft.com"},l.a.createElement("img",{src:"img/logo-dynamsoft-blackBg-190x47.png",alt:"logo"}))),l.a.createElement(B,{handleRegion:this.handleRegion.bind(this),isFullRegion:this.state.isFullRegion}));return this.state.isShowSettingPage?l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{onBackClick:this.handleShowSettingPage.bind(this)}),e):this.state.isShowFilePage?l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{onBackClick:this.handleShowFilePage.bind(this)}),e):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header-bar"},l.a.createElement("div",{className:"settingBtn-container"}),l.a.createElement("div",{className:"double-click"},l.a.createElement("label",{onClick:this.fullSceenClickHandler.bind(this)},"\u53cc\u51fb",this.state.isFullScreen&&"\u9000\u51fa","\u5168\u5c4f")),l.a.createElement("div",{className:"selImgBtn-container"})),e)}}]),t}(l.a.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"copyScannerResult",value:function(){window.kUtil.copyToClipBoard(this.props.content);var e={content:"copy successfully!"};e.icon=l.a.createElement(h.a,{type:"smile",style:{color:"#FE8E14"}}),d.a.config({top:window.innerHeight-180,duration:1.5}),d.a.open(e)}},{key:"render",value:function(){var e=this.props.content,t=e;e.startsWith("http")||!e.startsWith("www")&&-1===e.indexOf(".com")&&-1===e.indexOf(".net")&&-1===e.indexOf(".org")&&-1===e.indexOf(".edu")||(t="http://"+e);var n=t.startsWith("http");return l.a.createElement("div",{className:"result-content"},l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{color:"#FE8E14"}},this.props.format,": ")),n?l.a.createElement("a",{href:t,target:"_blank",style:{textDecoration:"underline"}},this.props.content):l.a.createElement("span",{onClick:this.copyScannerResult.bind(this)},this.props.content),l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{color:"#FE8E14"}}," x ",this.props.count))))}}]),t}(l.a.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.resultsInfo.slice(-3).map(function(e,t){return l.a.createElement(W,{key:t,content:e.result.BarcodeText,count:e.count,format:e.result.BarcodeFormatString})});return l.a.createElement("div",{className:"result-container"},e)}}]),t}(l.a.Component),q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1,isShow:!0},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleShow",value:function(){this.setState({isShow:!this.state.isShow}),console.log(this.state.isShow)}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrap-container"},this.state.isShow&&l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.bbbe2fe1.chunk.js.map