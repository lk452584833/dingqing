
/*獲取并展示上傳圖片*/
/*说明：fileInput為input:file文檔元素,img為img文檔元素 */
function showImg(fileInput,img){
	var file = fileInput.files[0];
	if (window.FileReader) {
		var reader = new FileReader();    
		reader.readAsDataURL(file);               
		reader.onloadend = function (e) {     		//監聽文件讀取后
			img.setAttribute("src",e.target.result);    //e.target.result就是最後的路徑地址
		}; 
   } 	
};


/* 將圖片轉化成dataUrl模式 */
function getImgBase64(path,callback){
	console.log(path);
	var img = new Image();
	img.src = path;	
	img.onload = function(){	//圖片加載完後觸發
		var canvas = document.createElement("canvas");
		ctx = canvas.getContext("2d");					//獲取繪畫上下文
		var imgWidth = img.width;						//獲取圖片寬度
		var imgHeight = img.height;						//獲取圖片高度
		canvas.width = imgWidth;						//設置幕布高度
		canvas.height = imgHeight;						//設置幕布寬度
		ctx.drawImage(img,0,0,imgWidth,imgHeight);		//繪製圖片
		var dataUrl = canvas.toDataURL('image/jpeg');	//繪製圖片
		callback ? callback(dataUrl) : '';
	};
}



/* 獲取URL查詢參數 */
function getSearch(param){
	var search=location.search.substr(1);
	var locate=search.search(param);
	var paramString='';
	if(locate!==-1){
		var searchRest=search.substr(locate);
		var len=searchRest.length;
		var and=searchRest.search('&');
		if(and==-1){paramString=searchRest.substr(param,len);}
		else{paramString=searchRest.substr(param,and);}
		var paramArray=paramString.split('=');
		return paramArray[1];
	}else{
		return false;
	}
};

/* 多/單列左右切換 *
* 針對同一個DOM元素操作時請使用相同的obj
* number表示展示個數,ele表示參與切換的元素,width表示單個元素的寬度,此三個參數是必須參數
* loop表示是否循環播放,interval表示自動播放的時間
* direction表示切換方向,值pre為向前,值next為向後
* 使用說明：ele的子元素CSS要float:left,ele父元素CSS要overflow:hidden,ele要囊括所有子元素在一列
*/
function turn(direction,obj){
	var number=obj.number,ele=obj.ele,width=obj.width;
	var loop=obj.loop||false;	//loop、interval如不存在，則設為空
	var interval=obj.interval||false;
	var length=ele.children.length;
	if(!obj.count)obj.count=0;	//設置計數器默認值
	if(!obj.preInterval)obj.preInterval=999999;		//設置自動向前和向後播放的序列號
	if(!obj.nextInterval)obj.nextInterval=999999;
	var pre=function(){if(obj.count>0){obj.count--;}else if(loop&&(obj.count==0)){obj.count=length-number};ele.style.marginLeft=(-1)*width*(obj.count)+"px";};
	var next=function(){if(length-obj.count>number){obj.count++;}else if(loop&&(obj.count==(length-number))){obj.count=0};ele.style.marginLeft=(-1)*width*(obj.count)+"px";};	
	if(length>number){
		clearInterval(obj.preInterval);
		clearInterval(obj.nextInterval);
		if(direction=="pre"){			
			if(interval){obj.preInterval=setInterval(function(){pre()},interval);}else{pre()};
		}else if(direction=="next"){
			if(interval){obj.nextInterval=setInterval(function(){next()},interval);}else{next()};
		}else{return false};
	}	
};

/***** 刪除空格 ******/

/* 刪除左右空格 */
function trim(string){return string.replace(/(^\s*)|(\s*$)/g,'');};

/* 刪除左側空格 */

function ltrim(string){return string.replace(/^\s+/,'');};

/* 刪除右側空格 */
function rtrim(string){return string.replace(/\s+$/, '');};

/* 刪除所有空格 */
function alltrim(string){return string.replace(/\s/g,'');};



/***** Math轉換 *****/
var abs=Math.abs;			//求絕對值
var acos=Math.acos;			//求反餘弦
var asin=Math.asin;			//求反正弦
var atan=Math.atan;			//求-π/2到π/2之間的反正切
var atan2=Math.atan2;		//從(0,0)到(x,y)之間的反正切
var ceil=Math.ceil;			//向上進一
var cos=Math.cos;			//求餘弦
var exp=Math.exp;			//求E的n次冪
var floor=Math.floor;		//捨掉小數
var log=Math.log;			//求以E為底自然對數
var max=Math.max;	 		//返回x和y中的最大值
var min=Math.min; 			//返回x和y中的最低值
var pow=Math.pow;	 		//返回x的y次幂。
var random=Math.random;		//返回0~1之間的隨機數
var round=Math.round;		//四捨五入
var sin=Math.sin; 			//求正弦
var sqrt=Math.sqrt; 		//平方根
var tan=Math.tan; 			//求正切
/* 兼容IE9以上 */
// var LN2=Math.LN2;			//2的自然對數
// var LN10=Math.LN10;			//10的自然對數
// var LOG2E=Math.LOG2E;		//以2為底e的對數
// var LOG10E=Math.LOG10E;		//以10為底e的對數
// var PI=Math.PI;				//π
// var π=Math.PI;				//π
// var SQRT1_2=Math.SQRT1_2;	//1/2的平方根
// var SQRT2=Math.SQRT2;		//2的平方根
// const LN2=Math.LN2;			//2的自然對數
// const LN10=Math.LN10;		//10的自然對數
// const LOG2E=Math.LOG2E;		//以2為底e的對數
// const LOG10E=Math.LOG10E;	//以10為底e的對數
// const PI=Math.PI;			//π
// const π=Math.PI;			//π
// const SQRT1_2=Math.SQRT1_2;	//1/2的平方根
// const SQRT2=Math.SQRT2;		//2的平方根



/***** 日期轉換 *****/
function year(){return (new Date()).getFullYear();};
function month(){return (new Date()).getMonth();};
function date(){return (new Date()).getDate();};
function day(){return (new Date()).getDay();};
function hour(){return (new Date()).getHours();};
function minute(){return (new Date()).getMinutes();};
function second(){return (new Date()).getSeconds();};
function millisecond (){return (new Date()).getMilliseconds();};
function clock() {return year()+"年"+month()+"月"+date()+"日 "+hour()+":"+("0"+minute()).slice(-2)+":"+("0"+second()).slice(-2);};
function activeClock(ele) {setInterval(function(){ele.innerHTML=clock()}, 100);};
Element.prototype.activeClock=function(){activeClock(this.ele);return this;};
Elements.prototype.activeClock=function(){for(var i=0;i<this.els.length;i++){activeClock(this.els[i]);};return this;};

/* 獲取指定元素在父元素中的順序 */
function index(ele) {
	children = ele.parentNode.children;
	for (var index in children) {
		if (children[index] == ele) { return index }
	}
};
Element.prototype.index=function(){return index(this.ele);};



/* 元素增減操作 */
function remove(ele){ele.parentNode.removeChild(ele)};
Element.prototype.remove = function(){return remove(this.ele);};
Elements.prototype.remove = function(){for(var i=0;i<this.els.length;i++) {remove(this.els[i]);};return this;};

/*class操作 */
/* 設置某個元素設置動態效果 */
function onActive(ele,active) {
	var children = ele.parentNode.children;
	for (item in children) {
		if(typeof children[item]=="object"){
			removeClass(children[item],active)
		}
	};
	ele.className +=' '+ active;
};
Element.prototype.onActive=function(className){onActive(this.ele,className);return this;};

/* 獲取class */
function Class(ele,className){if(className){ele.className=className}else{return ele.className}};
Element.prototype.Class=function(className){if(className){Class(this.ele,className);return this;}else{return Class(this.ele)}};

/* 是否存在class */
function hasClass(ele,className) {var reg=new RegExp('(\\s|^)'+className+'(\\s|$)');var flag=ele.className.search(reg);if(flag>=0){return true}else{return false}};
Element.prototype.hasClass=function(className){hasClass(this.ele,className);return this;};
Elements.prototype.hasClass=function(className){for(var i=0;i<this.els.length;i++){hasClass(this.els[i],className);};return this;};

/* 移出class */
function removeClass(ele,className) {if(hasClass(ele,className)){var reg=new RegExp('(\\s|^)'+className+'(\\s|$)');ele.className=trim(ele.className.replace(reg,''));}}
Element.prototype.removeClass=function(className){removeClass(this.ele,className);return this;};
Elements.prototype.removeClass=function(className){for(var i=0;i<this.els.length;i++){removeClass(this.els[i],className);};return this;};

/* 添加class */
function addClass(ele,className) {if(!hasClass(ele,className)){ele.className=trim(ele.className+' '+className);}}
Element.prototype.addClass=function(className){addClass(this.ele,className);return this;};
Elements.prototype.addClass=function(className){for(var i=0;i<this.els.length;i++){addClass(this.els[i],className);};return this;};



/* 內容操作 */
/* 設置HTML */
function html(ele,text){if(text){ele.innerHTML=text;}else{return ele.innerHTML}};
Element.prototype.html=function(text){if(text){html(this.ele,text);return this}else{return html(this.ele)}};
/* 設置Text */
function text(ele,value){if(value){ele.innerText=value;}else{return ele.innerText}};
Element.prototype.text=function(value){if(value){text(this.ele,value);return this}else{return text(this.ele)}};



/* on事件封裝 */
var events = ["abort", "auxclick", "beforecopy", "beforecut", "beforepaste", "blur", "cancel", "canplay", "canplaythrough", "change", "click", "close", "contextmenu", "copy", "cuechange", "cut", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "error", "focus", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadeddata", "loadedmetadata", "loadstart", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "paste", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointermove", "pointerout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "search", "seeked", "seeking", "select", "selectstart", "stalled", "submit", "suspend", "timeupdate", "toggle", "volumechange", "waiting", "webkitfullscreenchange", "webkitfullscreenerror", "wheel"];
events.forEach(function (item,index) {	
	Element.prototype[item] = function(functionName) { this.ele['on' + item]=functionName; return this; };
	Elements.prototype[item] = function (functionName) {for(var i=0;i<this.els.length;i++){this.els[i]['on'+item]=functionName};return this;};
})



/* 獲取所有子節點集合 */
function offspringCollection(ele) {	
	var offspringCollection = [];	
	if (ele.children.length) {
		offspringCollection[0] = ele.children;
		for (var i = 0; i < offspringCollection.length; i++) {
			for (var j = 0; j < offspringCollection[i].length; j++) {
				if (offspringCollection[i][j].children.length) offspringCollection.push(offspringCollection[i][j].children);
			}
		}
	};
	return offspringCollection;
};
Element.prototype.offspoffspringCollectionring=function(){return offspringCollection(this.ele)}
Elements.prototype.offspringCollection=function(){for(var i=0;i<this.els.length;i++){return offspringCollection(this.ele)}};

/* 獲取所有後代元素 */
function offspring(ele) {
	var els = [];
	els[0] = ele;
	var offsprings=offspringCollection(ele);
	offsprings.forEach(function (item, index) {
		console.log();
		for (var k = 0; k < offsprings[index].length; k++) {
			els.push(offsprings[index][k])
		}
	});
	return els;
};
Element.prototype.offspring=function(){return offspring(this.ele)}
Elements.prototype.offspring=function(){for(var i=0;i<this.els.length;i++){return offspring(this.ele)}};


/* 複製對象 */
function cloneObject(obj) {
	var newObj = {};
	for (item in obj) { newObj[item] = obj[item] };
	return newObj;
}

/* 複製HTML元素 */
/***** 導出到Vue *****/
/*main.js中引入
* import  from './assets/js/utils.js'
* Vue.use(utils)
*/
export default{
	install(Vue,options){
		Vue.prototype.showImg=showImg;
		Vue.prototype.getSearch=getSearch;		
		Vue.prototype.getImgBase64=getImgBase64;
		Vue.prototype.turn=turn;
		Vue.prototype.trim=trim;
		Vue.prototype.ltrim=ltrim;
		Vue.prototype.rtrim=rtrim;
		Vue.prototype.alltrim=alltrim;
		Vue.prototype.year=year;
		Vue.prototype.month=month;
		Vue.prototype.date=date;
		Vue.prototype.day=day;
		Vue.prototype.hour=hour;
		Vue.prototype.minute=minute;
		Vue.prototype.second=second;
		Vue.prototype.millisecond=millisecond;
		Vue.prototype.clock=clock;
		Vue.prototype.activeClock=activeClock;
		Vue.prototype.index=index;
		Vue.prototype.Class=Class;
		Vue.prototype.onActive=onActive;
		Vue.prototype.hasClass=hasClass;
		Vue.prototype.removeClass=removeClass;
		Vue.prototype.addClass=addClass;
		Vue.prototype.ele=ele;
		Vue.prototype.html=html;
		Vue.prototype.text=text;
		Vue.prototype.offspringCollection=offspringCollection;
		Vue.prototype.offspring=offspring;
		Vue.prototype.cloneObject=cloneObject;
		Vue.prototype.remove=remove;
		Vue.prototype.els=els;
	}
}


/* 仿jQuery連綴 */
/* ES2015類 */
// class Element {
// 	varructor(ele) { this.ele = ele; return this; }
// 	index() { return index(this.ele); }
// 	onActive(className) { onActive(this.ele, className); return this; }
// 	activeClock(){activeClock(this.ele);return this};
// };
/* 原始方法 */
function Element(ele){
	if(typeof ele=="object"){
		this.ele=ele;
	}else{
		var tag=ele.substring(0,1);		
		var element=ele.substring(1);
		if (tag=="#"){this.ele=document.getElementById(element)}
			else if(tag=="."){this.ele=document.getElementsByClassName(element)[0]}
				else{this.ele=document.getElementsByTagName(ele)[0]};
	}
	return this;
};

function Elements(ele){
	this.els={};
	if(typeof ele=="object"){
		if(ele.length){this.els=ele;}else{this.els[0]=ele;};
	}else if(typeof ele=="string"){
	var tag=ele.substring(0,1);		
	var element=ele.substring(1);
	if (tag=="#"){this.els[0]=document.getElementById(element)}
		else if(tag=="."){this.els=document.getElementsByClassName(element)}
			else{this.els=document.getElementsByTagName(ele)};
	}
	return this;
};

// function Invert(){
// 	if(arguments.length){
// 	  for(let i=0;i<arguments.length;i++){
// 		this[arguments[i]]=!this[arguments[i]];
// 	  }
// 	}
// }


/* 對外擴展 */
/* 使用如：ele("#c").extend("vfp",function(){代碼}) */
Element.prototype.extend = function (name, functionName) { Element.prototype[name] = functionName;};
Elements.prototype.extend = function (name, functionName) { Elements.prototype[name] = functionName; };

var ele=function(ele){return new Element(ele)};
var els=function(els){return new Elements(els)};