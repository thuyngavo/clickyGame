(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:"1",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/a/a3/Diane_-_portal.png/revision/latest/scale-to-width-down/120?cb=20141223085659"},{id:"2",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/d/d1/Ban_-_portal.png/revision/latest/scale-to-width-down/120?cb=20141116111442"},{id:"3",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/9/96/Gowther.png/revision/latest/scale-to-width-down/120?cb=20131225101858"},{id:"4",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/0/01/King_-_portal.png/revision/latest/scale-to-width-down/120?cb=20141223084239"},{id:"5",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/0/09/Merlin_face_anime.png/revision/latest/scale-to-width-down/120?cb=20150404050848"},{id:"6",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/1/1b/Escanor_Day_Colored.png/revision/latest/scale-to-width-down/120?cb=20160419224610"},{id:"7",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/d/df/Elizabeth_-_portal.png/revision/latest/scale-to-width-down/120?cb=20141223084622"},{id:"8",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/2/29/Hawk_anime_full_appearance_2.png/revision/latest/scale-to-width-down/270?cb=20140913055454"},{id:"9",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/f/f2/Mama_Hawk_-_portal.png/revision/latest/scale-to-width-down/120?cb=20141223085301"},{id:"10",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/d/db/Gilthunder-anime_portrait.png/revision/latest/scale-to-width-down/120?cb=20141209010700"},{id:"11",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/5/5c/Meliodas_-_portal.png/revision/latest/scale-to-width-down/120?cb=20141223084917"},{id:"12",image:"https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/b/b7/Zeldris_Anime.png/revision/latest/scale-to-width-down/270?cb=20171008001152"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),c=a.n(o),r=(a(15),a(4)),s=a(5),l=a(7),m=a(6),d=a(8),u=(a(16),function(e){return i.a.createElement("header",{className:"ph3 pv3 pv2-ns ph4-m ph5-l tc"},i.a.createElement("nav",{className:"f6 fw6 ttu tracked"},i.a.createElement("h1",{className:"link dim white dib mr3"},"Let's Play A Memory Game"),i.a.createElement("h2",{className:"fw2 f4 lh-copy mt0 mb3"},"Click on an image to earn points, but don't click on any more than once!")))}),p=function(e){return i.a.createElement("article",{className:"mw7 center ph3 ph5-ns tc br2 pv3 bg-black-90 mb5 animated fadeIn"},i.a.createElement("p",{className:"link dim white dib mr3"},e.status," | Score: ",e.currentScore," | Top Score: ",e.topScore))},g=function(e){return i.a.createElement("section",{id:e.id,className:"tc pa3 hvr-float-shadow animated zoomInUp",value:e.id,onClick:function(){return e.clickedPlayer(e.id)}},i.a.createElement("article",{className:"w4 pa2 "},i.a.createElement("img",{src:e.image,className:"db",alt:"game-char"})))},h=a(1),w=(a(17),a(18),a(19),function(e){for(var t=e.length;t>0;){var a=Math.floor(Math.random()*t),n=e[--t];e[t]=e[a],e[a]=n}return e}),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={currentScore:0,topScore:0,result:"",clicked:[],Icons:h,gameOver:!1},a.clickedPlayer=function(e){console.log("Picture clicked with id: ".concat(e)),a.state.clicked.includes(e)?a.resetGame():(a.pointIncrease(),a.state.clicked.push(e),a.setState({gameOver:!1}))},a.pointIncrease=function(){var e=a.state.currentScore+1;e===a.state.Icons.length?a.setState({result:"Winner!",topScore:e,currentScore:0,clicked:[],gameOver:!1}):e>a.state.topScore?a.setState({topScore:e,currentScore:e,result:"New high score!"}):a.setState({currentScore:e,result:"You got this!"}),a.resetIconArray()},a.resetGame=function(){a.setState({points:0,currentScore:0,topScore:a.state.topScore,result:"Oh No! [GAME OVER] Try again next time.",clicked:[],gameOver:!0}),a.resetIconArray()},a.resetIconArray=function(){var e=w(h);a.setState({Icons:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({result:"Click a character to get started"})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement(u,null),i.a.createElement(p,{topScore:this.state.topScore,currentScore:this.state.currentScore,status:this.state.result}),i.a.createElement("div",{className:"mainStyle"},this.state.Icons.map(function(t){return i.a.createElement(g,{id:t.id,image:t.image,clickedPlayer:e.clickedPlayer})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.733addda.chunk.js.map