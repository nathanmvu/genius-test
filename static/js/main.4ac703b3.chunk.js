(this["webpackJsonpgenius-test"]=this["webpackJsonpgenius-test"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://upload.wikimedia.org/wikipedia/commons/6/63/Glasshouse-philip-johnson.jpg"},{"id":2,"image":"https://upload.wikimedia.org/wikipedia/en/3/3c/VillaSavoye.jpg"},{"id":3,"image":"https://static.dezeen.com/uploads/2018/10/bauhaus_weimar_school_walter_gropius_dezeen_2364_col_6.jpg"},{"id":4,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/NewYorkSeagram_04.30.2008.JPG/1200px-NewYorkSeagram_04.30.2008.JPG"},{"id":5,"image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Geisel_Library%2C_UCSD.jpg"},{"id":6,"image":"https://www.salk.edu/wp-content/uploads/2015/10/0X8C0017_8_9_tonemapped_p-_720x480_72_RGB.jpg"},{"id":7,"image":"https://www.phaidon.com/resource/032-3-assembly-in.jpg"},{"id":8,"image":"https://upload.wikimedia.org/wikipedia/commons/2/25/Wfm_stata_center.jpg"},{"id":9,"image":"https://images.dwell.com/photos-6166648977860894720/6566485711244447744-large/pictured-is-the-rear-of-the-farnsworth-house-designed-by-ludwig-mies-van-der-rohe-the-homes-structure-is-based-on-three-horizontal-steel-planes-lifted-out-of-nature.jpg"},{"id":10,"image":"https://i0.wp.com/archeyes.com/wp-content/uploads/2020/02/kimbell-museum-louis-kahn-side.jpg?ssl=1"},{"id":11,"image":"https://images.adsttc.com/media/images/5107/fad6/b3fc/4b27/2000/005d/medium_jpg/stringio.jpg?1414025033"},{"id":12,"image":"https://images.adsttc.com/media/images/5af4/1ae4/f197/cca6/de00/027f/newsletter/DSC05275.jpg?1525947099"},{"id":13,"image":"https://www.iu.edu/~images/dams/8ae3l6.jpg"},{"id":14,"image":"https://static.life.com/wp-content/uploads/migrated/2012/03/150316-mies-van-der-rohe-10.jpg"},{"id":15,"image":"https://upload.wikimedia.org/wikipedia/commons/c/c0/2018_Sumida_Hokusai_Museum_4.jpg"}]')},,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var s=i(0),a=i(1),c=i.n(a),n=i(3),o=i.n(n),r=(i(15),i(7)),d=i(4),h=i(5),l=i(9),m=i(8);i(16),i(17);var u=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("nav",{className:"navbar fixed-top",children:[Object(s.jsx)("h4",{children:Object(s.jsx)("a",{href:"/",children:"Architecture Memory Test"})}),Object(s.jsx)("h4",{id:"message",className:"nav-item nav-link",children:e.text}),Object(s.jsxs)("h4",{className:"nav-item nav-link",children:["Score: ",e.score," | Highscore: ",e.highScore]})]})})};i(18);var p=function(){return Object(s.jsx)("div",{class:"jumbotron jumbotron-fluid",children:Object(s.jsxs)("div",{class:"container",children:[Object(s.jsx)("h1",{class:"display-4",children:"Architecture Memory Test!"}),Object(s.jsx)("p",{class:"lead",children:"Click on buildings to earn points but avoid clicking the same building twice!"})]})})};i(19);var g=function(e){return Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-1",children:Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("img",{src:e.image,alt:e.id,onClick:function(){return e.handleClick(e.id)}})})})})};i(20);var j=function(e){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:e.children})})},b=i(6),f=function(e){Object(l.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(d.a)(this,i);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={images:b,score:0,highScore:0,chosen:[],text:"Test your memory!"},e.handleClick=function(t){e.state.chosen.includes(t)?(e.setState({text:"You lost!"}),e.state.highScore<e.state.score&&e.setState({highScore:e.state.score}),e.resetGame()):(e.setState({text:"You guessed correctly!"}),e.setState({score:e.state.score+1}),e.setState({chosen:[].concat(Object(r.a)(e.state.chosen),[t])}));var i=e.state.images;e.shuffleCards(i)},e.resetGame=function(){e.setState({score:0}),e.setState({chosen:[]})},e.shuffleCards=function(e){for(var t=0;t<e.length;t++){var i=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[i],e[i]=s}},e}return Object(h.a)(i,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(u,{text:this.state.text,score:this.state.score,highScore:this.state.highScore}),Object(s.jsx)(p,{}),Object(s.jsx)(j,{children:this.state.images.map((function(t){return Object(s.jsx)(g,{id:t.id,image:t.image,handleClick:e.handleClick})}))})]})}}]),i}(a.Component);o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.4ac703b3.chunk.js.map