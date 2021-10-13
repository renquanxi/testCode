/*
录音
https://github.com/xiangyuecn/Recorder
src: recorder-core.js
*/
!function(r){"use strict";r.RecorderLM="2019-01-06 21:38:00";var S=function(){};function o(e){return new t(e)}function t(e){var t={type:"mp3",bitRate:16,sampleRate:16e3,bufferSize:4096,onProcess:S};for(var r in e)t[r]=e[r];this.set=t}o.IsOpen=function(){var e=o.Stream;if(e){var t=e.getTracks();if(0<t.length)return"live"==t[0].readyState}return!1},o.Support=function(){var e=r.AudioContext;if(e||(e=r.webkitAudioContext),!e)return!1;var t=navigator.mediaDevices||{};return t.getUserMedia||(t=navigator).getUserMedia||(t.getUserMedia=t.webkitGetUserMedia||t.mozGetUserMedia||t.msGetUserMedia),!!t.getUserMedia&&(o.Scope=t,o.Ctx&&"closed"!=o.Ctx.state||(o.Ctx=new e),!0)},o.prototype=t.prototype={open:function(t,a){if(t=t||S,a=a||S,o.IsOpen())t();else if(o.Support()){var e=function(e){o.Stream=e,setTimeout(function(){o.IsOpen()?t():a("录音功能无效：无音频流")},100)},r=function(e){var t=e.name||e.message||"";console.error(e);var r=/Permission|Allow/i.test(t);a(r?"用户拒绝了录音权限":"无法录音："+t,r)},n=o.Scope.getUserMedia({audio:!0},e,r);n&&n.then&&n.then(e).catch(r)}else a("此浏览器不支持录音",!1)},close:function(e){e=e||S;this._stop();var t=o.Stream;if(t)for(var r=t.getTracks(),a=0;a<r.length;a++)r[a].stop();o.Stream=0,e()},start:function(){var e=this,t=o.Ctx;e.buffer=[];e.recSize=0,e._stop(),e.state=0,o.IsOpen()&&(console.log("["+Date.now()+"]Start"),e.srcSampleRate=t.sampleRate,e.isMock=0,"suspended"==t.state?t.resume().then(function(){console.log("ctx resume"),e._start()}):e._start())},_start:function(){var f,p=this,l=p.set,m=p.buffer,e=o.Ctx,t=p.media=e.createMediaStreamSource(o.Stream),r=p.process=(e.createScriptProcessor||e.createJavaScriptNode).call(e,l.bufferSize,1,1);r.onaudioprocess=function(e){if(1==p.state){var t=e.inputBuffer.getChannelData(0),r=t.length;p.recSize+=r;for(var a,n=new Int16Array(r),o=0,s=0;s<r;s++){var i=Math.max(-1,Math.min(1,t[s]));i=i<0?32768*i:32767*i,n[s]=i,o+=Math.abs(i)}m.push(n),a=(o/=r)<1251?Math.round(o/1250*10):Math.round(Math.min(100,Math.max(0,100*(1+Math.log10(o/1e4)))));var c=p.srcSampleRate,u=Math.round(p.recSize/c*1e3);clearTimeout(f),f=setTimeout(function(){l.onProcess(m,a,u,c)})}},t.connect(r),r.connect(e.destination),p.state=1},_stop:function(){var e=this;e.state&&(e.state=0,e.media.disconnect(),e.process.disconnect())},pause:function(e){this.state&&(this.state=e||2)},resume:function(){this.pause(1)},mock:function(e,t){var r=this;return r.isMock=1,r.buffer=[e],r.recSize=e.length,r.srcSampleRate=t,r},stop:function(r,a){console.log("["+Date.now()+"]Stop"),r=r||S,a=a||S;var e=this,n=e.set;if(!e.isMock){if(!e.state)return void a("未开始录音");e._stop()}var t=e.recSize;if(t){var o=n.sampleRate,s=e.srcSampleRate,i=s/o;1<i?t=Math.floor(t/i):(i=1,o=s,n.sampleRate=o);for(var c=new Int16Array(t),u=0,f=0,p=0,l=e.buffer.length;p<l;p++){for(var m=e.buffer[p],d=u,h=m.length;d<h;)c[f]=m[Math.round(d)],f++,d+=i;u=d-h}var v=Math.round(t/o*1e3);setTimeout(function(){var t=Date.now();e[n.type](c,function(e){console.log("["+Date.now()+"]End",e,v,"编码耗时:"+(Date.now()-t)),r(e,v)},function(e){a(e)})})}else a("未采集到录音")}},r.Recorder=o}(window);