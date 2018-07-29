<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

	*{font-size: 100px;}

	*:focus{outline: medium;}

  body,body *{box-sizing:border-box;font-size:.10rem;font-style:normal;border:none; font-weight: normal;padding: 0;margin: 0;font-family:'Microsoft Yahei','微软雅黑','黑体','宋体';border:none;outline: none;}

	body{width:100%;margin:0 auto;}
 	
 	article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary {display: block;}
 	
 	audio,canvas,progress,video {display:inline-block;vertical-align:baseline}
	
	select,textarea,input,button {margin: 0;font: inherit;color: inherit;}
 	
  a,i,s,u,b{text-decoration: none;display: block;}

  ol, ul, li {list-style: outside none none;}

  li{display: block;}

	img {border: 0;}
	
	a:active,a:hover {text-decoration: none;}
	
	input[type=button], input[type=submit], input[type=file], button {cursor: pointer;-webkit-appearance: none;outline: none;}
	
	textarea {resize:none; }
	
	table {border-collapse: collapse;border-spacing: 0;}

	.clearfix:before, .clearfix:after {display: table;content: ' ';}
	
	.clearfix:after {clear: both;height:0;overflow:hidden;}
	
	.clearfix{*zoom:1;}  
	
	.ellipsis {overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
	
	.ellipsis-2 {display: -webkit-box;overflow: hidden;white-space: normal !important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
	
	.hide,.hidden {display: none !important;}
	
	.show {display: block !important;}

</style>
