(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),i=n(67),s=n.n(i),r=(n(75),n(68)),c=n(3),d=n(4),o=n(7),h=n(5),u=n(2),v=n(6),m=n(19),b=n(177);function p(e){var t=e.label,n=e.value,a=e.id,i=e.name,s=e.onChange;return l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",name:i,value:n,onChange:s}),l.a.createElement("label",{htmlFor:a},t))}function g(e){e.label;var t=e.value,n=e.id,a=e.name,i=e.onChange;return l.a.createElement("div",{className:"date-input"},l.a.createElement("label",{htmlFor:n},Object(m.format)(t,"dddd",{locale:b})),l.a.createElement("label",{htmlFor:n},Object(m.format)(t,"D")),l.a.createElement("label",{htmlFor:n},Object(m.format)(t,"MMM",{locale:b})),l.a.createElement("input",{type:"date",value:t,name:a,onChange:i}))}var E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={date:e.date,title:e.title,subtitle:e.subtitle,description:e.description,details:e.details},n.key=e.id,n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleInputChange",value:function(e){var t=this.state,n={date:t.date,title:t.title,subtitle:t.subtitle,description:t.description,details:t.details};n[e.target.name]=e.target.value,this.setState(n),this.props.handleEventUpdate(this.key,n)}},{key:"render",value:function(){return l.a.createElement("li",{className:"event-form"},l.a.createElement("h3",null,"Detalles del Evento"),l.a.createElement(g,{label:"Fecha",value:this.state.date,name:"date",id:"event-date",onChange:this.handleInputChange}),l.a.createElement(p,{label:"T\xedtulo",value:this.state.title,name:"title",id:"event-title",onChange:this.handleInputChange}),l.a.createElement(p,{label:"Sub T\xedtulo",value:this.state.subtitle,name:"subtitle",id:"event-subtitle",onChange:this.handleInputChange}),l.a.createElement(p,{label:"Descripci\xf3n",value:this.state.description,name:"description",id:"event-description",onChange:this.handleInputChange}),l.a.createElement(p,{label:"Detalles",value:this.state.details,name:"details",id:"event-detalles",onChange:this.handleInputChange}))}}]),t}(l.a.Component);function f(e){return l.a.createElement("li",{className:"event-add",onClick:e.onClick},"+")}var j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={events:e.events},n.addEvent=n.addEvent.bind(Object(u.a)(n)),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.addEvent()}},{key:"addEvent",value:function(){console.log(this.props),this.props.handleEventAdd(Object.keys(this.state.events).length,{date:new Date,title:"",subtitle:"",description:"",details:""})}},{key:"render",value:function(){var e=this;return l.a.createElement("ul",{className:"event-container"},Object.keys(this.state.events).map(function(t){return l.a.createElement(E,{key:t,id:t,title:e.state.events[t].title,subtitle:e.state.events[t].subtitle,description:e.state.events[t].description,details:e.state.events[t].details,date:e.state.events[t].date,handleEventUpdate:e.props.handleEventUpdate})}),l.a.createElement(f,{onClick:this.addEvent}))}}]),t}(l.a.Component),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={changeTrigger:e.changeTrigger,events:e.events},n.totalHeight=600,n.y=200,n.x=50,n.eHeight=80,n.draw=n.draw.bind(Object(u.a)(n)),n.getProperties=n.getProperties.bind(Object(u.a)(n)),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"getProperties",value:function(){return{padding:(this.totalHeight-80*Object.keys(this.state.events).length)/5}}},{key:"draw",value:function(){var e=this,t=document.getElementById("canvasPromo").getContext("2d");t.fillStyle="rgb(0,0,0)",t.fillRect(0,0,800,800);var n=this.getProperties().padding,a=new Image;a.onload=function(){t.drawImage(a,140,10)},a.src="/sante_build/logo.png",Object.keys(this.state.events).forEach(function(a,l){var i=e.state.events[a];t.font="42px serif",t.fillStyle="rgb(255,255,255)",t.fillText(i.title,e.x,e.y+l*e.eHeight+l*n),console.log("title: "+i.title+", x: "+e.x+", y: "+(e.y+l*e.eHeight+l*n))}),t.fill(),console.log(this.state.events)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Promo"),l.a.createElement("canvas",{id:"canvasPromo",width:"800",height:"800"}),l.a.createElement("button",{onClick:this.draw},"Draw"))}}]),t}(l.a.Component),y=(n(180),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={events:{}},n.handleEventAdd=n.handleEventAdd.bind(Object(u.a)(n)),n.handleEventUpdate=n.handleEventUpdate.bind(Object(u.a)(n)),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleEventAdd",value:function(e,t){this.state.events[e]=t,this.setState(Object(r.a)({},e,t))}},{key:"handleEventUpdate",value:function(e,t){var n=this.state.events;n[e]=t,this.setState({events:n})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("h1",null,"Generador de Agenda Sant\xe9")),l.a.createElement("main",null,l.a.createElement(j,{handleEventUpdate:this.handleEventUpdate,handleEventAdd:this.handleEventAdd,events:this.state.events}),l.a.createElement(O,{events:this.state.events})))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,n){e.exports=n(181)},75:function(e,t,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.e1401fec.chunk.js.map