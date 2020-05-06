(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,a,t){e.exports=t(126)},108:function(e,a,t){},126:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(29),l=t.n(r),i=t(94),s=t(27),m=(t(61),t(133)),c=(t(62),t(108),t(139)),u=t(131),d=t(57),h=t(16),p=t(23),f=t(141);var g=function(e){var a=Object(f.a)(),t=a.t,n=a.i18n,r=function(e){n.changeLanguage(e),document.documentElement.style.setProperty("--direction","ltr"),document.documentElement.style.setProperty("--align","left")},l=[{name:t("nav.home"),path:"/",icon:h.f},{name:t("nav.about"),path:"/about",icon:h.c},{name:t("nav.portfolio"),path:"/portfolio",icon:h.i},{name:t("nav.contact"),path:"/contact",icon:h.d}];return o.a.createElement(c.a,{className:"navbar"},o.a.createElement(c.a,{className:"navbar-nav"},l.map((function(a){return o.a.createElement(c.a.Item,{className:"nav-item"},o.a.createElement(c.a.Link,{href:a.path,className:"".concat(a.path!==e.path?"btn btn-2":"btn btn-2 disabled")},o.a.createElement(p.a,{className:"svg",icon:a.icon}),o.a.createElement("span",{className:"link-text"},a.name)))})),o.a.createElement(u.a,{title:o.a.createElement(p.a,{icon:h.e})},o.a.createElement(d.a.Item,{onClick:function(){return r("tr")}},"T\xfcrk\xe7e "),o.a.createElement(d.a.Item,{onClick:function(){return r("en")}},"English"))))};var b=function(){var e=Object(f.a)().t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{path:"/"}),o.a.createElement(m.a,{fluid:!0,className:"Home"},o.a.createElement(m.a,{className:"melih"},o.a.createElement("h1",null,"melih ;D"),o.a.createElement("p",null,e("home.title")))))},E=t(134),v=t(87),y=t(135),w=t(83),k=t(84),N=t.n(k),S=t(85),C=t.n(S),x=t(86),I=t.n(x);var O=function(){var e=Object(f.a)().t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{path:"/about"}),o.a.createElement(m.a,{fluid:!0,className:"About"},o.a.createElement(m.a,null,o.a.createElement(I.a,{top:!0},o.a.createElement(E.a,{className:"row"},o.a.createElement(v.a,{className:"leftSide",md:6},o.a.createElement(y.a,{src:N.a,rounded:!0,thumbnail:!0})),o.a.createElement(v.a,{className:"rightSide",md:6},o.a.createElement("p",null,e("about.title")),o.a.createElement("p",null,e("about.details")),o.a.createElement(w.a,{variant:"outline-light",onClick:function(){var e=document.createElement("a");e.href=C.a,e.download="melihdogan.pdf",e.dispatchEvent(new MouseEvent("click"))}},o.a.createElement(p.a,{icon:h.a})," ",e("about.download"))))))))},j=t(52),M=t(53),B=t(54),F=t(56),T=t(136),D=t(140),H=t(88),A=t.n(H),z=t(89),R=t.n(z),W=t(65),G=t.n(W),P=t(90),L=t.n(P),q=t(91),J=t.n(q),_=function(e){Object(F.a)(t,e);var a=Object(B.a)(t);function t(){var e;Object(j.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={portfolios:[{id:"P1",name:"Movie Fun",image:[A.a,R.a],text:"The idea was a platform for people to criticize movies and give their honest opinions. After 1 month-long HTML & CSS course, we designed this project. We used Bootstrap as a CSS framework. I was responsible only for movies page and movie details page.",github:"https://github.com/mmelihdogan/moviefun"},{id:"P2",name:"Movie Explorer",image:[G.a,G.a],text:"The idea was a platform like IMDb. During React training, we created various movie-explorer projects in a team. The aim of the last one is to fetch the movies from the database and render that fetched data.",github:"https://github.com/mmelihdogan/movie-explorer"},{id:"P3",name:"Coming Soon!",image:[L.a,J.a],text:"I've started to create my personal website. But pulling all the knowledge I learnt together without teammates is really hard for newbie developer. Yes, this website is still under construction!",github:"https://github.com/mmelihdogan/mmelihdogan.github.io"}],showSecondImg:!1},e.clickHandler=function(){var a=e.state.showSecondImg;e.setState({showSecondImg:!a})},e}return Object(M.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{path:"/portfolio"}),o.a.createElement(m.a,{fluid:!0,className:"About"},o.a.createElement(m.a,{md:12},o.a.createElement(T.a,null,this.state.portfolios.map((function(a){return o.a.createElement(D.a,null,o.a.createElement(D.a.Header,null,a.name),o.a.createElement(D.a.Img,{variant:"top",src:e.state.showSecondImg?a.image[1]:a.image[0],onClick:e.clickHandler}),o.a.createElement(D.a.Body,null,o.a.createElement(D.a.Title,null),o.a.createElement(D.a.Text,null,a.text)),o.a.createElement(D.a.Footer,null,o.a.createElement(w.a,{variant:"light",target:"_blank",href:a.github},o.a.createElement(p.a,{icon:h.g})," Github Repo ")))}))))))}}]),t}(o.a.Component),V=t(138),Y=t(92),Z=t.n(Y),K=t(58),U=t(137);var $=function(e){var a=Object(n.useState)({icon:h.h,title:"Thanks!",message:"Your message has been successfully sent. I'll get back you soon!"}),t=Object(K.a)(a,2),r=t[0],l=(t[1],Object(n.useState)({icon:h.b,title:"Oops!",message:"There has been an error sending your message. Sorry for the inconvenience."})),i=Object(K.a)(l,2),s=i[0],m=(i[1],Object(n.useState)(!0)),c=Object(K.a)(m,2),u=c[0],d=c[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(U.a,{style:{position:"absolute",top:10,right:10},show:u,onClose:function(){d(!u)}},o.a.createElement(U.a.Header,null,o.a.createElement(p.a,{className:"mr-2",icon:"true"===e.status?r.icon:s.icon}),o.a.createElement("strong",{className:"mr-auto"},"true"===e.status?r.title:s.title)),o.a.createElement(U.a.Body,null,"true"===e.status?r.message:s.message)))},Q=function(e){Object(F.a)(t,e);var a=Object(B.a)(t);function t(){var e;Object(j.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={hello:"Hello \ud83d\udc4b",firstName:"",lastName:"",email:"",message:"",status:""},e.handleFirstNameChange=function(a){e.setState({firstName:a.target.value})},e.handleLastNameChange=function(a){e.setState({lastName:a.target.value})},e.handleEmailChange=function(a){e.setState({email:a.target.value})},e.handleMessageChange=function(a){e.setState({message:a.target.value})},e.handleSubmit=function(a){a.preventDefault();var t={firstName:e.state.firstName,lastName:e.state.lastName,email:e.state.email,message:e.state.message};Z.a.send("default_service","template_q0lV1NDy",t,"user_SMx3f0wRy3TTOmKOsha0B").then((function(e){alert("Message Sent.")}),(function(e){alert("Message failed to send.")})),e.resetForm()},e.resetForm=function(){e.setState({hello:"Hello \ud83d\udc4b",firstName:"",lastName:"",email:"",message:"",status:!0})},e}return Object(M.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{path:"/contact"}),o.a.createElement(m.a,{fluid:!0,className:"Contact"},!0===this.state.status?o.a.createElement($,{status:"true"}):o.a.createElement(o.a.Fragment,null),o.a.createElement("h1",{className:"hello"},""===this.state.firstName?this.state.hello:"Hello "+this.state.firstName+"!"),o.a.createElement(V.a,{onSubmit:function(a){return e.handleSubmit(a)}},o.a.createElement(V.a.Row,null,o.a.createElement(V.a.Group,{as:v.a},o.a.createElement(V.a.Control,{type:"text",name:"firstName",placeholder:"First name",onChange:function(a){return e.handleFirstNameChange(a)},value:this.state.firstName,required:!0})),o.a.createElement(V.a.Group,{as:v.a},o.a.createElement(V.a.Control,{type:"text",name:"lastName",placeholder:"Last name",onChange:function(a){return e.handleLastNameChange(a)},value:this.state.lastName}))),o.a.createElement(V.a.Group,null,o.a.createElement(V.a.Control,{type:"email",name:"email",placeholder:"E-mail",onChange:function(a){return e.handleEmailChange(a)},value:this.state.email,required:!0})),o.a.createElement(V.a.Group,null,o.a.createElement(V.a.Control,{as:"textarea",rows:"3",type:"text",name:"message",placeholder:"Your message",onChange:function(a){return e.handleMessageChange(a)},value:this.state.message,required:!0})),o.a.createElement(w.a,{type:"submit"},"Submit"))))}}]),t}(n.Component),X=t(93),ee=t.n(X);var ae=function(){return o.a.createElement(ee.a,{left:!0},o.a.createElement(i.a,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/",exact:!0,component:b}),o.a.createElement(s.a,{path:"/about",exact:!0,component:O}),o.a.createElement(s.a,{path:"/portfolio",exact:!0,component:_}),o.a.createElement(s.a,{path:"/contact",exact:!0,component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=t(68),ne=t(35),oe=t(97),re=t(98),le=t(99);te.a.use(oe.a).use(ne.f).init({resources:{tr:{translation:re},en:{translation:le}},lng:"en",debug:!0,keySeparator:".",nsSeparator:"|",interpolation:{escapeValue:!1}});te.a;l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,a,t){},65:function(e,a,t){e.exports=t.p+"static/media/movieexplorer1.3f058d6f.png"},84:function(e,a,t){e.exports=t.p+"static/media/whocares.3d72fddc.gif"},85:function(e,a,t){e.exports=t.p+"static/media/melihdogan.9aad4ec6.pdf"},88:function(e,a,t){e.exports=t.p+"static/media/moviefun1.b0766173.png"},89:function(e,a,t){e.exports=t.p+"static/media/moviefun2.6147f852.png"},90:function(e,a,t){e.exports=t.p+"static/media/coming soon.6b0d27fa.png"},91:function(e,a,t){e.exports=t.p+"static/media/coming soon 2.1e7c1e7d.png"},98:function(e){e.exports=JSON.parse('{"nav":{"home":"Ana Sayfa","about":"Hakk\u0131mda","portfolio":"Portf\xf6y","contact":"\u0130leti\u015fim"},"home":{"title":"\xc7\u0131rak Web Geli\u015ftiricisi"},"about":{"title":"Ama e\u011fer h\xe2l\xe2 umursuyorsan\u0131z:","details":"Ben Melih, 22 ya\u015f\u0131nday\u0131m. Bo\u011fazi\xe7i \xdcniversitesi\'nde y\xf6netim bili\u015fim sistemleri okuyorum. Daha sonralar\u0131 \xfczerine pek d\xfc\u015fmesem de programlamayla ilk olarak \xfcniversite birinci s\u0131n\u0131fta u\u011fra\u015ft\u0131m. 2018\'in sonunda Berlin\'de bir \\"hackathon\\"a kat\u0131lma \u015fans\u0131 yakalad\u0131m ve kodlamayla daha fazla ha\u015f\u0131r ne\u015fir oldum. Berlin\'de Re:Coded\'\u0131 ve oran\u0131n ekibini tan\u0131ma f\u0131rsat\u0131m oldu ve 2020\'de Re:Coded Web Development Bootcamp\'ine kat\u0131ld\u0131m. \u015eu anda deneyimli bir Front-End Web Geli\u015ftiricisi olmay\u0131 hedefleyen tam zamanl\u0131 3. s\u0131n\u0131f \xfcniversite \xf6\u011frencisiyim. Tan\u0131\u015fma yar\u0131da kalmas\u0131n diyorsan\u0131z neden birlikte bi kahve i\xe7miyoruz? (tabii ki Zoom\'da) \ud83d\ude43","download":"CV\'mi indirin!"}}')},99:function(e){e.exports=JSON.parse('{"nav":{"home":"Home","about":"About Me!","portfolio":"Portfolio","contact":"Contact"},"home":{"title":"Apprentice Web Developer"},"about":{"title":"But again, just in case you care,","details":"I\'m Melih. 22-year-old MIS student at Bo\u011fazi\xe7i University. My path with coding crossed first when I was a freshman at the university but I did not delve into it back then. Afterwards, I got the chance to attend a hackathon in Berlin at the end of 2018 where I found a chance to get exposure to coding a bit more. I also had the opportunity of getting to know Re:Coded and its people and attended Re:Coded Web Development Bootcamp in 2020. I\'m currently a full-time 3rd grade student who aspires to be an experienced Front-End Web Developer. If you still care who I am, why not having a coffee together? (of course in Zoom) \ud83d\ude43","download":"Download My Resume!"}}')}},[[103,1,2]]]);
//# sourceMappingURL=main.7e838fa2.chunk.js.map