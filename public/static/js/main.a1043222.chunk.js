(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),s=(n(16),n(1)),i=n.n(s),u=n(4),l=n(5),p=n(6),h=n(8),f=n(7),m=n(9);var w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={users:[]},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({users:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.state.users.map(function(e){return a.a.createElement("p",null,e)}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.a1043222.chunk.js.map