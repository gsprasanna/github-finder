(this["webpackJsonpgithub-details"]=this["webpackJsonpgithub-details"]||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/loading.81c29bc5.gif"},124:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(12),c=a.n(s),l=(a(65),a(13)),o=a.n(l),i=a(18),u=a(47),m=a(48),p=a(57),h=a(55),f=(a(67),"https://api.github.com"),d=function(e){var t=f+e;return new Promise((function(e,a){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){a(e)}))}))},v=a(49),E=a.n(v),g=a(51),b=a.n(g),w=function(){return n.a.createElement("div",null,n.a.createElement("img",{src:a(114),alt:"loading"}))},x=function(e){var t=e.repos,a=t.length>0?t.map((function(e){return{repoName:n.a.createElement("a",{href:e.html_url,target:"_blank"},e.name),repoUrl:e.html_url}})):n.a.createElement(w,null);return n.a.createElement(E.a,{keyField:"repoName",data:a,columns:[{dataField:"repoName",text:"Repositories"}],pagination:b()()})},N=a(56),k=a(7),U=a(125),S=a(52),y=a.n(S),D=function(e){var t=e.followers,a=e.avatarUrl,r=e.userDetails;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"flex-image"},n.a.createElement(U.a,{src:a,height:"200px",roundedCircle:!0})),n.a.createElement("div",{className:"flex-content"},r.items?n.a.createElement("h2",{className:"username"},r.items[0].login):"",t>=0?n.a.createElement("h5",{style:{color:"green"}},n.a.createElement(y.a,{strings:[t+"followers"],typeSpeed:40,backSpeed:90,loop:!0})):"")))},T=a(128),j=a(127),O=a(126),_=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={searchText:"",userDetails:{},followers:-1,repos:[],redirect:!1,followersUrl:"",reposUrl:"",avatarUrl:""},e.searchDetails=function(t){e.setState({searchText:t.target.value})},e.onSearchSubmit=function(){""!=e.state.searchText&&e.getUserDetails()},e.getUserDetails=Object(i.a)(o.a.mark((function t(){var a,r,n,s,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.searchText,t.prev=1,t.next=4,d("/search/users?q="+a,"GET");case 4:r=t.sent,e.setState({userDetails:r}),r.total_count&&(n=r.items[0].followers_url,s=r.items[0].repos_url,c=r.items[0].avatar_url,e.setState({followersUrl:n,reposUrl:s,avatarUrl:c}),e.getFollowersCount(n),e.getReposDetails(s)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0);case 13:e.setState({searchText:""});case 14:case"end":return t.stop()}}),t,null,[[1,10]])}))),e.getFollowersCount=function(){var t=Object(i.a)(o.a.mark((function t(a){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a.replace(f,""),t.next=4,d(r,"GET");case 4:n=t.sent,e.setState({followers:n.length}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e.getReposDetails=function(){var t=Object(i.a)(o.a.mark((function t(a){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a.replace(f,""),t.next=4,d(r,"GET");case 4:n=t.sent,e.setState({repos:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchText,a=e.followers,r=e.repos,s=e.followersUrl,c=e.avatarUrl,l=e.userDetails;return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"App"},n.a.createElement(N.a,{className:"github-icon",size:50}),n.a.createElement("span",null,"Finder")),n.a.createElement("div",{className:"App"},n.a.createElement(T.a,{className:"mb-3"},n.a.createElement(T.a.Prepend,null,n.a.createElement(T.a.Text,{id:"basic-addon1"},"@")),n.a.createElement(j.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",onChange:this.searchDetails,value:t})),n.a.createElement(O.a,{variant:"info",onClick:this.onSearchSubmit},"Search")),n.a.createElement("div",{className:"mt-5"},a>=0?n.a.createElement(D,{followers:a,avatarUrl:c,userDetails:l}):""),n.a.createElement("div",{className:"m-4"},r.length>0?n.a.createElement(x,{repos:r}):""!=s?n.a.createElement("h4",{className:"App"},"No Repositories Found!"):""))}}]),a}(r.Component),C=Object(k.d)(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(120),a(121),a(122);var F=a(27);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F.a,null,n.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(124)},65:function(e,t,a){},67:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.e0a14773.chunk.js.map