(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(67),s=a.n(l),r=(a(75),a(68)),c=a(3),d=a(4),o=a(7),h=a(5),u=a(2),v=a(6),m=a(19),b=a(177);function p(e){var t=e.label,a=e.value,n=e.id,l=e.name,s=e.onChange;return i.a.createElement("div",{className:"form-input"},i.a.createElement("input",{type:"text",name:l,value:a,onChange:s}),i.a.createElement("label",{htmlFor:n},t))}function g(e){e.label;var t=e.value,a=e.id,n=e.name,l=e.onChange;return i.a.createElement("div",{className:"date-input"},i.a.createElement("label",{htmlFor:a},Object(m.format)(t,"dddd",{locale:b})),i.a.createElement("label",{htmlFor:a},Object(m.format)(t,"D")),i.a.createElement("label",{htmlFor:a},Object(m.format)(t,"MMM",{locale:b})),i.a.createElement("input",{type:"date",value:t,name:n,onChange:l}))}var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={date:e.date,title:e.title,subtitle:e.subtitle,description:e.description,details:e.details},a.key=e.id,a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleInputChange",value:function(e){var t=this.state,a={date:t.date,title:t.title,subtitle:t.subtitle,description:t.description,details:t.details};a[e.target.name]=e.target.value,this.setState(a),this.props.handleEventUpdate(this.key,a)}},{key:"render",value:function(){return i.a.createElement("li",{className:"event-form"},i.a.createElement("h3",null,"Detalles del Evento"),i.a.createElement(g,{label:"Fecha",value:this.state.date,name:"date",id:"event-date",onChange:this.handleInputChange}),i.a.createElement(p,{label:"T\xedtulo",value:this.state.title,name:"title",id:"event-title",onChange:this.handleInputChange}),i.a.createElement(p,{label:"Sub T\xedtulo",value:this.state.subtitle,name:"subtitle",id:"event-subtitle",onChange:this.handleInputChange}),i.a.createElement(p,{label:"Descripci\xf3n",value:this.state.description,name:"description",id:"event-description",onChange:this.handleInputChange}),i.a.createElement(p,{label:"Detalles",value:this.state.details,name:"details",id:"event-detalles",onChange:this.handleInputChange}))}}]),t}(i.a.Component);function f(e){return i.a.createElement("li",{className:"event-add",onClick:e.onClick},"+")}var j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={events:e.events},a.addEvent=a.addEvent.bind(Object(u.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.addEvent()}},{key:"addEvent",value:function(){console.log(this.props),this.props.handleEventAdd(Object.keys(this.state.events).length,{date:new Date,title:"",subtitle:"",description:"",details:""})}},{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"event-container"},Object.keys(this.state.events).map(function(t){return i.a.createElement(E,{key:t,id:t,title:e.state.events[t].title,subtitle:e.state.events[t].subtitle,description:e.state.events[t].description,details:e.state.events[t].details,date:e.state.events[t].date,handleEventUpdate:e.props.handleEventUpdate})}),i.a.createElement(f,{onClick:this.addEvent}))}}]),t}(i.a.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={changeTrigger:e.changeTrigger,events:e.events},a.canvasSize=400,a.totalHeight=.75*a.canvasSize,a.y=.25*a.canvasSize,a.x=.12*a.canvasSize,a.eHeight=.1*a.canvasSize,a.draw=a.draw.bind(Object(u.a)(a)),a.getProperties=a.getProperties.bind(Object(u.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"getProperties",value:function(){return{padding:(this.totalHeight-this.eHeight*Object.keys(this.state.events).length)/5}}},{key:"draw",value:function(){var e=this,t=document.getElementById("canvasPromo").getContext("2d");t.fillStyle="rgb(0,0,0)",t.fillRect(0,0,this.canvasSize,this.canvasSize);var a=this.getProperties().padding,n=new Image,i=this.canvasSize;n.onload=function(){var e=.65*i,a=.125*i;t.drawImage(n,(i-e)/2,i/100,e,a),t.fill()},n.src="/sante_build/logo.png",Object.keys(this.state.events).forEach(function(n,i){var l=e.state.events[n];t.font=.05*e.canvasSize+"px serif",t.fillStyle="rgb(255,255,255)",t.fillText(l.title,e.x,e.y+i*e.eHeight+i*a)}),t.fill()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Promo"),i.a.createElement("canvas",{id:"canvasPromo",width:this.canvasSize,height:this.canvasSize}),i.a.createElement("button",{onClick:this.draw},"Draw"))}}]),t}(i.a.Component),y=(a(180),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={events:{}},a.handleEventAdd=a.handleEventAdd.bind(Object(u.a)(a)),a.handleEventUpdate=a.handleEventUpdate.bind(Object(u.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleEventAdd",value:function(e,t){this.state.events[e]=t,this.setState(Object(r.a)({},e,t))}},{key:"handleEventUpdate",value:function(e,t){var a=this.state.events;a[e]=t,this.setState({events:a})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("h1",null,"Generador de Agenda Sant\xe9")),i.a.createElement("main",null,i.a.createElement(j,{handleEventUpdate:this.handleEventUpdate,handleEventAdd:this.handleEventAdd,events:this.state.events}),i.a.createElement(O,{events:this.state.events})))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){e.exports=a(181)},75:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.b1275b4a.chunk.js.map