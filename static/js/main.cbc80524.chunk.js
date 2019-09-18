(window["webpackJsonpdrum-machine"]=window["webpackJsonpdrum-machine"]||[]).push([[0],{16:function(e,t,r){},20:function(e,t,r){e.exports=r(36)},25:function(e,t,r){},26:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(6),o=r.n(c),i=(r(25),r(7)),s=r(8),d=r(11),u=r(9),p=r(10),l=(r(26),r(1)),m=(r(32),r(3)),y=(r(33),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://freewavesamples.com/files/Bass-Drum-1.wav"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),k=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],h={backgroundColor:"red"},f={backgroundColor:"grey",boxShadow:"3px 3px 5px black"},g=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={padStyle:f},r.audio=n.a.createRef(),r.playAudio=r.playAudio.bind(Object(m.a)(r)),r.handleKeyPress=r.handleKeyPress.bind(Object(m.a)(r)),r.activatePad=r.activatePad.bind(Object(m.a)(r)),r}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"activatePad",value:function(){this.props.power&&("red"===this.state.padStyle.backgroundColor?this.setState({padStyle:f}):this.setState({padStyle:h}))}},{key:"playAudio",value:function(e){var t=this;if(this.props.power){var r=this.audio.current;r.currentTime=0,r.play(),this.activatePad(),setTimeout(function(){return t.activatePad()},100),this.props.updateDisplay(this.props.clipId.replace(/-/g," "))}}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playAudio()}},{key:"render",value:function(){return n.a.createElement("button",{className:"drum-pad",id:this.props.clipId,onClick:this.playAudio,style:this.state.padStyle},n.a.createElement("audio",{id:this.props.keyTrigger,src:this.props.clip,className:"clip",ref:this.audio}),this.props.keyTrigger)}}]),t}(a.Component),b=Object(l.b)(function(e){return{currentDisplay:e.display.clipId,power:e.display.power}},{updateDisplay:function(e){return function(t){t({type:"UPDATE_DISPLAY",payload:e})}}})(g),w=Object(l.b)(function(e){return{power:e.display.power,currentPadBank:e.display.currentPadBank}})(function(e){var t;return t=e.power?e.currentPadBank.map(function(e,t,r){return n.a.createElement(b,{clipId:r[t].id,key:r[t].id,clip:r[t].url,keyTrigger:r[t].keyTrigger,keyCode:r[t].keyCode})}):e.currentPadBank.map(function(e,t,r){return n.a.createElement(b,{clipId:r[t].id,key:r[t].id,clip:"#",keyTrigger:r[t].keyTrigger,keyCode:r[t].keyCode})}),n.a.createElement("div",{className:"pad-kit"},t)}),v=(r(34),Object(l.b)(function(e){return{currentDisplay:e.display.display,power:e.display.power}})(function(e){return n.a.createElement("div",{id:"display"},n.a.createElement("p",null,e.power?e.currentDisplay:""))})),C=(r(16),Object(l.b)(function(e){return{power:e.display.power}},{powerSwitch:function(){return function(e){e({type:"POWER_SWITCH"})}}})(function(e){var t="",r="";return e.power?(t="",r=""):(t="checked",r="bgChange"),n.a.createElement("div",{className:"control"},n.a.createElement("p",null,e.text),n.a.createElement("label",{className:"switch"},n.a.createElement("input",{type:"checkbox",onClick:e.powerSwitch}),n.a.createElement("span",{className:"slider-before ".concat(t)}),n.a.createElement("span",{className:"slider ".concat(r)})))})),E=Object(l.b)(function(e){return{currentPadBankId:e.display.currentPadBankId}},{updateKit:function(){return function(e){e({type:"UPDATE_KIT"})}}})(function(e){var t="",r="";return"Smooth Piano Kit"===e.currentPadBankId?(t="checked",r="bgChange"):(t="",r=""),n.a.createElement("div",{className:"control"},n.a.createElement("p",null,e.text),n.a.createElement("label",{className:"switch"},n.a.createElement("input",{type:"checkbox",onClick:e.updateKit}),n.a.createElement("span",{className:"slider-before ".concat(t)}),n.a.createElement("span",{className:"slider ".concat(r)})))}),P=(r(35),Object(l.b)(function(e){return{volume:e.display.volume}},{adjustVolume:function(e){return function(t){t({type:"ADJUST_VOLUME",payload:e.target.value}),setTimeout(function(){return t({type:"CLEAR_DISPLAY"})},1e3)}}})(function(e){return[].slice.call(document.getElementsByClassName("clip")).forEach(function(t){t.volume=e.volume}),n.a.createElement("div",{className:"volume-slider"},n.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.01",value:e.volume,onChange:e.adjustVolume}))})),O=r(4),T=r(18),j=r(19);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(r,!0).forEach(function(t){Object(j.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var H={display:"",power:!0,volume:.3,currentPadBank:y,currentPadBankId:"Heater Kit"},D=Object(O.c)({display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_DISPLAY":return _({},e,{display:t.payload});case"UPDATE_KIT":return e.power?e.currentPadBank===y?_({},e,{currentPadBank:k,display:"Smooth Piano Kit",currentPadBankId:"Smooth Piano Kit"}):_({},e,{currentPadBank:y,display:"Heater Kit",currentPadBankId:"Heater Kit"}):e;case"POWER_SWITCH":return _({},e,{power:!e.power,display:""});case"ADJUST_VOLUME":return _({},e,{display:"Volume: ".concat(Math.round(100*t.payload)),volume:t.payload});case"CLEAR_DISPLAY":return _({},e,{display:""});default:return e}}}),I=[T.a],K=Object(O.d)(D,{},O.a.apply(void 0,I)),A=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(l.a,{store:K},n.a.createElement("div",{id:"drum-machine"},n.a.createElement(w,null),n.a.createElement("div",{className:"controls-container"},n.a.createElement(C,{text:"Power"}),n.a.createElement(v,null),n.a.createElement(P,null),n.a.createElement(E,{text:"Kit"}))))}}]),t}(a.Component);o.a.render(n.a.createElement(A,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.cbc80524.chunk.js.map