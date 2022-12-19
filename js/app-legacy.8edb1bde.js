(function(){"use strict";var e={7447:function(e,A,t){t(6992),t(8674),t(9601),t(7727),t(4916),t(5306);var r=t(9963),n=t(6252),o=t(3577),a=(0,n._)("i",{"data-feather":"chevron-up"},null,-1);function i(e,A,t,i,l,s){var z=(0,n.up)("AppHeader"),c=(0,n.up)("router-view"),d=(0,n.up)("back-to-top"),u=(0,n.up)("AppFooter");return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)([e.appTheme,"pt-0.5"])},[(0,n.Wm)(z),(0,n.Wm)(r.uT,{name:"fade",mode:"out-in"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{theme:e.appTheme},null,8,["theme"])]})),_:1}),(0,n.Wm)(d,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,n.w5)((function(){return[a]})),_:1}),(0,n.Wm)(u)],2)}var l=t(8508),s=t.n(l),z={id:"nav",class:"sm:container sm:mx-auto"},c={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},d={class:"flex justify-between items-center px-4 sm:px-0"},u=(0,n.Uk)("Songbird.info "),m={class:"sm:hidden"},p={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},g={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},h={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},f={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"};function y(e,A,t,r,o,a){var i=(0,n.up)("router-link"),l=(0,n.up)("theme-switcher"),s=(0,n.up)("AppHeaderLinks");return(0,n.wg)(),(0,n.iD)("nav",z,[(0,n._)("div",c,[(0,n._)("div",d,[(0,n._)("div",null,[(0,n.Wm)(i,{class:"text-3xl font-medium text-ternary-dark dark:text-ternary-light title-text",to:"/"},{default:(0,n.w5)((function(){return[u]})),_:1})]),(0,n.Wm)(l,{theme:o.theme,onThemeChanged:a.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,n._)("div",m,[(0,n._)("button",{onClick:A[0]||(A[0]=function(e){return o.isOpen=!o.isOpen}),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,n.wg)(),(0,n.iD)("svg",p,[o.isOpen?((0,n.wg)(),(0,n.iD)("path",g)):(0,n.kq)("",!0),o.isOpen?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("path",h))]))])])]),(0,n.Wm)(s,{showModal:a.showModal,isOpen:o.isOpen},null,8,["showModal","isOpen"]),(0,n._)("div",f,[(0,n.Wm)(l,{theme:o.theme,onThemeChanged:a.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])])])}var b={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},x={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function v(e,A,t,o,a,i){return(0,n.wg)(),(0,n.iD)("a",{href:"#",onClick:A[0]||(A[0]=(0,r.iM)((function(){return i.toggleTheme&&i.toggleTheme.apply(i,arguments)}),["prevent"])),"aria-label":"Theme Switcher"},["light"===t.theme?((0,n.wg)(),(0,n.iD)("i",b)):((0,n.wg)(),(0,n.iD)("i",x))])}var w={props:{theme:{type:String,required:!0}},created:function(){var e=localStorage.getItem("theme");e||this.toggleTheme()},methods:{toggleTheme:function(){var e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("themeChanged",e),this.$router.go()}}},k=t(3744);const B=(0,k.Z)(w,[["render",v]]);var E=B,j=(0,n.Uk)("Projects"),S=(0,n.Uk)("About Songbird");function H(e,A,t,r,a,i){var l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)([t.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,n.Wm)(l,{to:"/projects",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:(0,n.w5)((function(){return[j]})),_:1}),(0,n.Wm)(l,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,n.w5)((function(){return[S]})),_:1})],2)}var C={props:["showModal","isOpen"]};const D=(0,k.Z)(C,[["render",H]]);var T=D,Q={components:{ThemeSwitcher:E,AppHeaderLinks:T},data:function(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"utility",name:"Utility"},{id:2,value:"nft",name:"NFT"},{id:3,value:"defi",name:"DeFi"},{id:3,value:"info",name:"Info"},{id:4,value:"ftso",name:"FTSO"},{id:5,value:"wallet",name:"Wallet"},{id:6,value:"nft-marketplace",name:"NFT Marketplace"}]}},created:function(){this.theme=localStorage.getItem("theme")||"light"},mounted:function(){s().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme:function(e){this.theme=e},showModal:function(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated:function(){s().replace()}};const F=(0,k.Z)(Q,[["render",y],["__scopeId","data-v-03b51e86"]]);var P=F,O={class:"container mx-auto"},I={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"};function M(e,A,t,r,o,a){var i=(0,n.up)("FooterCopyright");return(0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",I,[(0,n.Wm)(i)])])}var Z={class:"flex justify-center items-center text-center"},W={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},U=(0,n._)("a",{href:"https://songbird.domains",target:"__blank",class:"font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"}," Songbird Domains",-1),R=(0,n.Uk)(". ("),Y=(0,n._)("a",{href:"https://github.com/realstoman/vuejs-tailwindcss-portfolio",target:"__blank",class:"font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"},"Theme ",-1),G=(0,n.Uk)(" by "),K={href:"https://stoman.me",target:"__blank",class:"font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"},L=(0,n.Uk)(") ");function J(e,A,t,r,a,i){return(0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("div",W,[(0,n.Uk)(" © "+(0,o.zw)(e.copyrightDate)+" by ",1),U,R,Y,G,(0,n._)("a",K,(0,o.zw)(e.author),1),L])])}var N={data:function(){return{copyrightDate:(new Date).getFullYear(),projectName:"Vue.js & Tailwind CSS Portfolio",author:"Stoman"}}};const V=(0,k.Z)(N,[["render",J]]);var q=V,X={components:{FooterCopyright:q},data:function(){return{socials:[{id:1,name:"GitHub",icon:"github",url:"https://github.com/realstoman"},{id:2,name:"Twitter",icon:"twitter",url:"https://twitter.com/realstoman"},{id:3,name:"Medium",icon:"book",url:"https://stoman.medium.com"},{id:4,name:"Instagram",icon:"instagram",url:"https://instagram.com/realstoman"}]}},mounted:function(){s().replace()},updated:function(){s().replace()}};const _=(0,k.Z)(X,[["render",M]]);var $=_,ee={components:{AppHeader:P,AppFooter:$},data:function(){return{appTheme:localStorage.getItem("theme")}},mounted:function(){s().replace()},updated:function(){s().replace()}};const Ae=(0,k.Z)(ee,[["render",i]]);var te=Ae,re=(t(1539),t(8783),t(3948),t(9826),t(7042),t(1249),t(1038),t(4747),t(7941),t(2119)),ne={class:"container mx-auto"},oe={class:"mt-10 sm:mt-20 flex justify-center"};function ae(e,A,t,r,o,a){var i=(0,n.up)("ProjectsGrid"),l=(0,n.up)("Button"),s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",ne,[(0,n.Wm)(i,{isHome:!0}),(0,n._)("div",oe,[(0,n.Wm)(s,{to:"/projects",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects"},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{title:"More Projects"})]})),_:1})])])}var ie=t(6875);function le(e,A,t,r,a,i){return(0,n.wg)(),(0,n.iD)("button",null,(0,o.zw)(t.title),1)}var se={props:["title"],data:function(){return{}}};const ze=(0,k.Z)(se,[["render",le]]);var ce=ze,de={name:"Home",components:{ProjectsGrid:ie.Z,Button:ce}};const ue=(0,k.Z)(de,[["render",ae]]);var me=ue,pe=[{path:"/",name:"Home",component:me,meta:{title:"Songbird.info"}},{path:"/about",name:"About",component:function(){return t.e(443).then(t.bind(t,9545))},meta:{title:"About Songbird"}},{path:"/projects",name:"Projects",component:function(){return t.e(176).then(t.bind(t,3773))},meta:{title:"Projects on Songbird"}}],ge=(0,re.p7)({history:(0,re.r5)(),routes:pe,scrollBehavior:function(){document.getElementById("app").scrollIntoView()}}),he=ge;ge.beforeEach((function(e,A,t){var r=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),n=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags})),o=A.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(r?document.title=r.meta.title:o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!n)return t();n.meta.metaTags.map((function(e){var A=document.createElement("meta");return Object.keys(e).forEach((function(t){A.setAttribute(t,e[t])})),A.setAttribute("data-vue-router-controlled",""),A})).forEach((function(e){return document.head.appendChild(e)})),t()}));var fe=t(617),ye=t(8508);ye.replace(),(0,r.ri)(te).use(he).use(fe.Z).mount("#app");var be=localStorage.getItem("theme");"dark"===be&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},6875:function(e,A,t){t.d(A,{Z:function(){return U}});var r=t(6252),n=t(3577),o=t(9963),a=t.p+"img/songbird-logo.2a033510.png",i={class:"pt-2 sm:pt-4"},l=(0,r._)("div",{class:"flex justify-center mb-6"},[(0,r._)("img",{src:a,alt:"project.title",class:"border-none w-20"})],-1),s={class:"text-center"},z={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},c={class:"mt-10 sm:mt-10"},d=(0,r._)("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Search projects within the Songbird ecosystem by title or filter by category. ",-1),u={class:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},m={class:"flex justify-between gap-2"},p=(0,r._)("span",{class:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[(0,r._)("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),g={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function h(e,A,t,a,h,f){var y=(0,r.up)("ProjectsFilter"),b=(0,r.up)("ProjectSingle");return(0,r.wg)(),(0,r.iD)("section",i,[l,(0,r._)("div",s,[(0,r._)("p",z,(0,n.zw)(e.projectsHeading),1)]),(0,r._)("div",c,[d,(0,r._)("div",u,[(0,r._)("div",m,[p,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":A[0]||(A[0]=function(A){return e.searchProject=A}),class:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},null,512),[[o.nr,e.searchProject]])]),(0,r.Wm)(y,{onFilter:A[1]||(A[1]=function(A){return e.selectedCategory=A})})])]),(0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.filteredProjects,(function(e){return(0,r.wg)(),(0,r.j4)(b,{key:e.id,project:e},null,8,["project"])})),128))])])}t(7042),t(7327),t(1539),t(6699),t(2023),t(4603),t(8450),t(4916),t(8386),t(9714),t(4723),t(5306);var f=t(8508),y=t.n(f),b=["name","id"],x=(0,r._)("option",{value:"",class:"text-sm sm:text-md"},"All Projects",-1),v=["value"];function w(e,A,t,o,a,i){return(0,r.wg)(),(0,r.iD)("select",{onChange:A[0]||(A[0]=function(A){return e.$emit("filter",A.target.value)}),name:t.select,id:t.select,class:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[x,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.selectOptions,(function(e){return(0,r.wg)(),(0,r.iD)("option",{key:e,value:e,class:"sm:text-md"},(0,n.zw)(e),9,v)})),128))],40,b)}var k={props:{select:{type:String,default:"projects",required:!0},selectOptions:{type:Array,default:function(){return["Utility","NFT","DeFi","Info","FTSO","Wallet","NFT Marketplace"]}}}},B=t(3744);const E=(0,B.Z)(k,[["render",w]]);var j=E,S=["href"],H=["src","alt"],C={class:"text-center px-4 py-6"},D={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},T={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function Q(e,A,t,o,a,i){return(0,r.wg)(),(0,r.iD)("a",{href:t.project.url,target:"_blank",class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"},[(0,r._)("div",null,[(0,r._)("img",{src:t.project.img,alt:t.project.title,class:"rounded-t-xl border-none"},null,8,H)]),(0,r._)("div",C,[(0,r._)("p",D,(0,n.zw)(t.project.title),1),(0,r._)("span",T,(0,n.zw)(t.project.category),1)])],8,S)}var F={props:["project"]};const P=(0,B.Z)(F,[["render",Q]]);var O=P,I=[{id:1,title:"Songbird Domains",category:"Utility",img:t(9794),url:"https://songbird.domains"},{id:2,title:"The Sparktans",category:"NFT",img:t(6165),url:"https://sparklesnft.com/collection/sparktans/"},{id:3,title:"Bifrost Wallet",category:"Wallet",img:t(5123),url:"https://bifrostwallet.com/"},{id:4,title:"Flare Oracle",category:"FTSO",img:t(9912),url:"https://flareoracle.io/"},{id:5,title:"The Satraps",category:"NFT",img:t(1596),url:"https://satraps.io/"},{id:6,title:"Pangolin",category:"DeFi",img:t(3984),url:"https://www.pangolin.exchange/"},{id:7,title:"Flarepedia",category:"Info",img:t(7896),url:"https://www.flarepedia.com/"},{id:8,title:"Sparkles NFT Marketplace",category:"NFT Marketplace",img:t(1907),url:"https://sparklesnft.com/"},{id:9,title:"Evolve FTSO",category:"FTSO",img:t(1823),url:"https://www.evolveftso.com/"},{id:10,title:"FLR Finance",category:"DeFi",img:t(3129),url:"https://flr.finance/"},{id:11,title:"Flare Metrics",category:"Info",img:t(7867),url:"https://flaremetrics.io/"},{id:12,title:"Spark Coin",category:"Utility",img:t(2259),url:"https://www.sparkcoin.io/"}],M=I,Z={props:["isHome"],components:{ProjectSingle:O,ProjectsFilter:j},data:function(){return{projects:M,projectsNumOnHome:9,projectsHeading:"Projects on Songbird",selectedCategory:"",searchProject:""}},computed:{filteredProjects:function(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.isHome?this.projects.slice(0,this.projectsNumOnHome):this.projects}},methods:{filterProjectsByCategory:function(){var e=this;return this.projects.filter((function(A){var t=A.category.charAt(0).toUpperCase()+A.category.slice(1);return console.log(t),t.includes(e.selectedCategory)}))},filterProjectsBySearch:function(){var e=new RegExp(this.searchProject,"i");return this.projects.filter((function(A){return A.title.match(e)}))}},mounted:function(){y().replace()}};const W=(0,B.Z)(Z,[["render",h]]);var U=W},3984:function(e,A,t){e.exports=t.p+"img/pangolin.7aa74253.svg"},5123:function(e,A,t){e.exports=t.p+"img/bifrost.23fd1baa.png"},1823:function(e,A,t){e.exports=t.p+"img/evolve.4d68998f.jpg"},9912:function(e,A,t){e.exports=t.p+"img/flare-oracle.48d17920.jpg"},7867:function(e){e.exports="data:image/jpeg;base64,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"},7896:function(e,A,t){e.exports=t.p+"img/flarepedia.baeb8115.png"},3129:function(e,A,t){e.exports=t.p+"img/flr-finance.b2389d00.jpg"},1596:function(e,A,t){e.exports=t.p+"img/satraps.2c04d659.png"},9794:function(e,A,t){e.exports=t.p+"img/songbird-domains.e6a14f3e.jpg"},2259:function(e,A,t){e.exports=t.p+"img/sparkcoin.f0b58fc1.jpg"},1907:function(e,A,t){e.exports=t.p+"img/sparkles.0724a799.jpg"},6165:function(e,A,t){e.exports=t.p+"img/sparktans.912c85df.jpeg"}},A={};function t(r){var n=A[r];if(void 0!==n)return n.exports;var o=A[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(A,r,n,o){if(!r){var a=1/0;for(z=0;z<e.length;z++){r=e[z][0],n=e[z][1],o=e[z][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(z--,1);var s=n();void 0!==s&&(A=s)}}return A}o=o||0;for(var z=e.length;z>0&&e[z-1][2]>o;z--)e[z]=e[z-1];e[z]=[r,n,o]}}(),function(){t.n=function(e){var A=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(A,{a:A}),A}}(),function(){t.d=function(e,A){for(var r in A)t.o(A,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:A[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(A,r){return t.f[r](e,A),A}),[]))}}(),function(){t.u=function(e){return"js/"+{176:"projects",443:"about"}[e]+"-legacy."+{176:"637c0f4b",443:"eb9c1c13"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/about.fd482b47.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,A){return Object.prototype.hasOwnProperty.call(e,A)}}(),function(){var e={},A="songbird-info:";t.l=function(r,n,o,a){if(e[r])e[r].push(n);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),z=0;z<s.length;z++){var c=s[z];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==A+o){i=c;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",A+o),i.src=r),e[r]=[n];var d=function(A,t){i.onerror=i.onload=null,clearTimeout(u);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(t)})),A)return A(t)},u=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,A,t,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)t();else{var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||A,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=i,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=o,n.href=A,document.head.appendChild(n),n},A=function(e,A){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var n=t[r],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===A))return n}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){n=a[r],o=n.getAttribute("data-href");if(o===e||o===A)return n}},r=function(r){return new Promise((function(n,o){var a=t.miniCssF(r),i=t.p+a;if(A(a,i))return n();e(r,i,n,o)}))},n={143:0};t.f.miniCss=function(e,A){var t={443:1};n[e]?A.push(n[e]):0!==n[e]&&t[e]&&A.push(n[e]=r(e).then((function(){n[e]=0}),(function(A){throw delete n[e],A})))}}(),function(){var e={143:0};t.f.j=function(A,r){var n=t.o(e,A)?e[A]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(t,r){n=e[A]=[t,r]}));r.push(n[2]=o);var a=t.p+t.u(A),i=new Error,l=function(r){if(t.o(e,A)&&(n=e[A],0!==n&&(e[A]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+A+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}};t.l(a,l,"chunk-"+A,A)}},t.O.j=function(A){return 0===e[A]};var A=function(A,r){var n,o,a=r[0],i=r[1],l=r[2],s=0;if(a.some((function(A){return 0!==e[A]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(l)var z=l(t)}for(A&&A(r);s<a.length;s++)o=a[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(z)},r=self["webpackChunksongbird_info"]=self["webpackChunksongbird_info"]||[];r.forEach(A.bind(null,0)),r.push=A.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7447)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.8edb1bde.js.map