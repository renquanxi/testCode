//兼容环境
var PageLM="2019-01-06 21:38:00";

function BuildHtml(html,o,notEncode,loop){return o||(o={}),html=(null==html?"":html+"").replace(/\{(fn:)?(:)?(.+?)\}/gi,function(a,b,c,code){try{var v=eval(b?code:"o."+code);return v=void 0===v?"":v+"",c||notEncode?v:v}catch(e){return console.log("BuildHtml Fail",a+"\n"+e.stack),""}}),loop&&/\{(fn:)?(.+?)\}/.test(html)&&(html=BuildHtml(html,o,notEncode,loop)),html};
function RandomKey(){
	return "randomkey"+(RandomKey.idx++);
};
RandomKey.idx=0;


function reclog(s){
	$(".reclog").prepend('<div>['+new Date().toLocaleTimeString()+']'+s+'</div>');
};
$(window).bind("error",function(e){
	reclog('<span style="color:red">【Error】:<pre>'+(e.error?e.error.stack:event.message)+'</pre></span>');
});

var rec;
function recopen(){  //打开录音
	// var type=$("[name=type]:checked").val();
	// var bit=+$(".bit").val();
	// var sample=+$(".sample").val();

	var type = "mp3"; // 类型
	var bit = 16; // kbps mp3、wav取值8位16位
	var sample = 16000; // mp3标准值，wav任意

	// var wave,waveSet=$(".recwaveSet")[0].checked;
	console.log(Recorder);
	console.log(window.Recorder);
	rec=Recorder({
		type:type,
		bitRate:bit,
		sampleRate:sample,
		onProcess:function(buffers,level,time,sampleRate){
			$(".recpowerx").css("width",level+"%");
			$(".recpowert").html(time+"/"+level);
			
			// waveSet && wave.input(buffers[buffers.length-1],level,sampleRate);
		}
	});
	rec.open(
		function(){
			console.log("已打开:"+type+" "+bit+"kbps");
			
			// wave=Recorder.WaveView({elem:".recwave"});
			
			setTimeout(function(){  //正常打开录音后开始录音
				recstart();
			},200)
		},
		function(e,isUserNotAllow){
			console.log((isUserNotAllow?"UserNotAllow，":"")+"打开失败："+e);
		}
	);
};
function recclose(){  //关闭网页录音功能
	if(rec){
		rec.close(function(){
			console.log("已关闭");//控制台提示已关闭
		});
	}
};
function recstart(){
	if(rec){
		rec.start();
		console.log("录制中...");
	};
};
function recpause(){
	if(rec){
		rec.pause();
		console.log("已暂停");
	};
};
function recresume(){
	if(rec){
		rec.resume();
		console.log("继续录音中...");
	};
};
var recblob={};
function recstop(batCall){
	console.log('batCall:', batCall);
	debugger;
	if(rec){
		if(!batCall){
			console.log("正在编码"+rec.set.type+"...");
		};
		var t1=Date.now();
		rec.stop(
		function(blob,time){
			console.log('blob:=======', blob);
			console.log('time:=======', time);
			console.log('l录制完成')

			// var id=RandomKey(16);
			// recblob[id]={blob:blob,set:$.extend({},rec.set),time:time};
			
			// reclog("已录制:"+intp(rec.set.bitRate,3)+"kbps "+intp(rec.set.sampleRate,5)+"hz 花"+intp(Date.now()-t1,4)+"ms编码"+intp(blob.size,6)+"b ["+rec.set.type+"]"+intp(time,6)+'ms <button onclick="recdown(\''+id+'\')">下载</button> <button onclick="recplay(\''+id+'\')">播放</button> <span class="p'+id+'"></span> <span class="d'+id+'"></span>');
			// //alert("已录制:"+intp(rec.set.bitRate,3)+"kbps "+intp(rec.set.sampleRate,5)+"hz 花"+intp(Date.now()-t1,4)+"ms编码"+intp(blob.size,6)+"b ["+rec.set.type+"]"+intp(time,6)+'ms <button onclick="recdown(\''+id+'\')">下载</button> <button onclick="recplay(\''+id+'\')">播放</button> <span class="p'+id+'"></span> <span class="d'+id+'"></span>');
			// $('.voice-list').append('ms <button onclick="recplay(\''+id+'\')">播放</button> <span class="p'+id+'"></span> <span class="d'+id+'"></span>')
			// batCall&&batCall();
		},function(s){
			console.log("失败："+s);
			batCall&&batCall();
		});
	};
	setTimeout(function(){
		recclose()
	},200)
};
var intp=function(s,len){
	s=""+s;
	if(s.length>=len)return s;
	return ("_______"+s).substr(-len);
};
function recstop2(){
	debugger;
	if(!rec||!rec.buffer){
		console.log("需先录个音");
		return;
	};
	
	var type=$("[name=type]:checked").val();
	var sample=+$(".sample").val();
	var bits=/(\d+)\s+to\s+(\d+)\s+step\s+(\d+)\s*/i.exec($(".bits").val());
	if(!bits){
		console.log("码率列表有误，需要? to ? step ?结构");
		return;
	};
	console.log("开始批量编码，请勿进行其他操作~");
	
	rec.set.type=type;
	rec.set.sampleRate=sample;
	
	var list=[];
	for(var i=+bits[1];i<+bits[2]+1;i+=+bits[3]){
		list.push(i);
	};
	if(rec.set.type=="wav"){
		list=[8,16];
	};
	
	
	var i=-1;
	var bak=rec.set.bitRate;
	var run=function(){
		i++;
		if(i>=list.length){
			rec.set.bitRate=bak;
			console.log("批量编码完成");
			return;
		};
		rec.set.bitRate=list[i];
		rec.state=1;
		recstop(run);
	};
	run();
};
function recplay(key){
	debugger
	var o=recblob[key];
	if(o){
		var audio=$(".recPlay");
		audio.controls=true;
		if(!(audio.ended || audio.paused)){
			audio.pause();
		};
		o.play=(o.play||0)+1;
		var logmsg=function(msg){
			$(".p"+key).html('<span style="color:green">'+o.play+'</span> '+new Date().toLocaleTimeString()+" "+msg);
		};
		logmsg("");
		
		var end=function(blob){
			audio.src=URL.createObjectURL(blob);
			audio.play();
		};
		var wav=Recorder[o.set.type+"2wav"];
		if(wav){
			logmsg("正在转码成wav...");
			wav(o.blob,function(blob){
				end(blob);
				logmsg("已转码成wav播放");
			},function(msg){
				logmsg("转码成wav失败："+msg);
			});
		}else{
			end(o.blob);
		};
	};
};
function recdown(key){
	var o=recblob[key];
	if(o){
		var cls=RandomKey(16);
		var name="rec-"+o.time+"ms-"+o.set.bitRate+"kbps-"+o.set.sampleRate+"hz."+o.set.type;
		
		o.down=(o.down||0)+1;
		$(".d"+key).html('<span style="color:red">'+o.down+'</span> <span class="'+cls+'"> 没弹下载？试一下链接或复制文本<button onclick="recdown64(\''+key+'\',\''+cls+'\')">生成Base64文本</button></span>');
		
		var downA=document.createElement("A");
		downA.innerHTML="下载 "+name;
		downA.href=URL.createObjectURL(o.blob);
		downA.download=name;
		$("."+cls).prepend(downA);
		downA.click();
	};
};
function recdown64(key, cls){
	var o=recblob[key];
	
	var reader = new FileReader();
	reader.onloadend = function() {
		var id=RandomKey(16);
		$("."+cls).append('<textarea class="'+id+'"></textarea>');
		$("."+id).val(reader.result);
	};
	reader.readAsDataURL(o.blob);
};


	
	
	
var JsVal;
var cmdExec=function(){
	JsVal=document.getElementById("cmdExecVal");
	JsVal.value="";
	
	var cmd=document.getElementById("cmdExecTxt").value;
	var val="";
	try{
		val=eval(cmd);
	}catch(e){
		val="执行出错："+(e.stack||e.message);
	};
	JsVal=document.getElementById("cmdExecVal");
	JsVal.value+=(JsVal.value?"\n":"")+val;
};
	
	
	
var XLogInput=$(".Xlog")[0];
(function(){
if(!/mobile/i.test(navigator.userAgent)){
	XLogInput.value="非移动端不开启ConsoleX引擎";
	return;
};
var ConsoleX=function(tag,arr){
	if(parent!=window){
		parent.ConsoleX(tag,arr);
		return;
	};
	
	ConsoleX.log(tag,arr);
};
var logx=console.log;
var infox=console.info;
var warnx=console.warn;
var errorx=console.error;
console.log=function(){
	ConsoleX("log",arguments);logx.apply(console,arguments);
};
console.info=function(){
	ConsoleX("info",arguments);infox.apply(console,arguments);
};
console.warn=function(){
	ConsoleX("warn",arguments);warnx.apply(console,arguments);
};
console.error=function(){
	ConsoleX("error",arguments);errorx.apply(console,arguments);
};
ConsoleX.log=function(tag,arr){
	var msg=[];
	for(var i=0;i<arr.length;i++){
		if(i!=0){
			msg.push("");
		}
		msg.push(xobjv(arr[i],1));
	};
	msg.push("---↑["+tag+"]"+new Date().toLocaleTimeString()+"↑---\n");
	XLogInput.value=msg.join("\n")+XLogInput.value;
};
function xobjv(v,deep){
	if(v===null)return "null";
	if(v==undefined)return "undefined";
	if(typeof(v)!="object"){
		v=v+"";
		if(v.length<500)return v;
		return v.substring(0,500)+"[省略"+(v.length-500)+"字]";
	}
	
	if(deep&&deep<=3){
		v= xobj(v,deep+1);
		if(deep==1){
			return xobjv(v);
		};
		return v;
	}
	return xobjv(v+"");
};
function xobj(obj,deep){
	if($.isArray(obj)){
		var arr=[];
		for(var i=0;i<obj.length;i++){
			arr.push(xobjv(obj[i],deep));
		};
	}else{
		var arr={};
		for(var k in obj){
			arr[k]=xobjv(obj[k],deep);
		};
	};
	if(deep>2){
		return arr;
	};
	return JSON.stringify(arr);
};

console.log("ConsoleX引擎已开启");
})();
	
$(function(){
	var prev;
	$(".types").bind("click",function(e){
		var input=$(e.target);
		if(input[0].nodeName=="LABEL"){
			input=$(input).find("input");
		};
		if(prev!=input[0]){
			prev=input[0];
			loadEngine($(input));
		};
	});
});
function loadEngine(){
	debugger;
		var type="mp3";
			var engines=['mp3','mp3-engine'];
		var end=function(){
			debugger;
			var enc=Recorder.prototype["enc_"+type];
			var tips=[!enc?"这个编码器无提示信息":type+"编码器"+(enc.stable?"稳定版":"beta版")+"，"+enc.testmsg];
			tips.push('<div style="color:green">');
			tips.push("【使用"+type+"录音需要加载的js文件】：");
			tips.push("src/recorder-core.js, src/engine/");
			tips.push(engines.join(".js,src/engine/"));
			tips.push(".js</div>");
			
			//$(".typeTips").html(tips.join(""));
		};
		if(!Recorder.prototype[type]){
			console.log("正在加载"+type+"编码器...");
			var i=-1;
			var load=function(){
				i++;
				if(i>=engines.length){
					console.log(type+"编码器已准备好");
					end();
					return;
				}
				var elem=document.createElement("script");
				elem.setAttribute("type","text/javascript");
				elem.setAttribute("src","src/engine/"+engines[i]+".js");
				elem.onload=function(){
					load();
				};
				$("head")[0].appendChild(elem);
			};
			load();
		}else{
			end();
		};
};
loadEngine();