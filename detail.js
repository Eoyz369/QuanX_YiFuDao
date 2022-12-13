mt=new Date()
mt.setMinutes(0)
bt = mt.getTime()-10800000
et = mt.getTime()+10800000



body = JSON.parse($response.body)
body.data.askForLeaveDetail.applyStatus = 4
body.data.askForLeaveDetail.beginTime = bt
body.data.askForLeaveDetail.endTime = et

body.data.askForLeaveDetail.chains[1].status = 3

body.data.askForLeaveDetail.chains.pop()


const timenow = new Date().setMinutes(0, 0);
let applyDate = new Date();
let approveDate = new Date();
let a = Math.floor(Math.random() * (19 - 7 + 1) + 7);
let i = a + 2;
let b = Math.floor(Math.random() * (22 - i + 1) + i);
applyDate.setDate(applyDate.getDate() - 1);
approveDate.setDate(approveDate.getDate() - 1);
applyDate.setHours(a, Math.floor(Math.random() * 60), 0, 0);
approveDate.setHours(b, Math.floor(Math.random() * 60), 0, 0);

Date.prototype.format=function(fmt){var o={'M+':this.getMonth()+1,'d+':this.getDate(),'h+':this.getHours(),'m+':this.getMinutes(),'s+':this.getSeconds(),'q+':Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};if(/(y+)/.test(fmt)){fmt=fmt.replace(RegExp.$1,(this.getFullYear()+'').substr(4-RegExp.$1.length));}for(var k in o){if(new RegExp('('+k+')').test(fmt)){fmt=fmt.replace(RegExp.$1,RegExp.$1.length==1?o[k]:('00'+o[k]).substr((''+o[k]).length));}}return fmt;};

body.data.askForLeaveDetail.chains[0].time = applyDate.format('yyyy-MM-dd hh:mm');
body.data.askForLeaveDetail.chains[1].time = approveDate.format('yyyy-MM-dd hh:mm');

if (body.data.askForLeaveDetail.chains.length === 3) {
    dt.chains.splice(2, 1);
}

function init(name){const startTime=new Date().getTime();const isRequest=function(){return'undefined'!==typeof $request;};const isResponse=function(){return'undefined'!==typeof $response;};const isPost=function(){return'POST'===$request.method;};const isGet=function(){return'GET'===$request.method;};const isNode=function(){return'undefined'!==typeof module&&!!module.exports;};const isQuanX=function(){return'undefined'!==typeof $task;};const isSurge=function(){return'undefined'!==typeof $httpClient&&'undefined'===typeof $loon;};const isLoon=function(){return'undefined'!==typeof $loon;};const toObj=function(str,defaultValue=null){try{return JSON.parse(str);}catch{return defaultValue;}};const toStr=function(obj,defaultValue=null){try{return JSON.stringify(obj);}catch{return defaultValue;}};const msg=function(title,subtitle='',desc=''){if(isQuanX()){$notify(title,subtitle,desc);}else if(isSurge()||isLoon()){$notification.post(title,subtitle,desc);}};const log=function(...logs){if(logs.length>0){logs=[...logs];}console.log(logs.join('\n'));};const get=async function(opts,callback){if(isSurge()||isLoon()){await $httpClient.get(opts,function(err,res,body){if(!err&&res){res.body=body;res.statusCode=res.status;}callback(err,res,body);});}else if(isQuanX()){opts.method='GET';await $task.fetch(opts).then(function(res){const{statusCode:status,statusCode,headers,body}=res;callback(null,{status,statusCode,headers,body},body);},function(err){callback(err);});}};const post=async function(opts,callback=function(){}){if(isSurge()||isLoon()){await $httpClient.post(opts,function(err,res,body){if(!err&&res){res.body=body;res.statusCode=res.status;}callback(err,res,body);});}else if(isQuanX()){opts.method='POST';await $task.fetch(opts).then(function(res){const{statusCode:status,statusCode,headers,body}=res;callback(null,{status,statusCode,headers,body},body);},function(err){callback(err);});}};const r=function(key){if(isQuanX()){return $prefs.valueForKey(key);}else if(isSurge()||isLoon()){return $persistentStore.read(key);}};const w=function(val,key){if(isQuanX()){return $prefs.setValueForKey(val,key);}else if(isSurge()||isLoon()){return $persistentStore.write(val,key);}};const wait=function(time){return new Promise(function(resolve){setTimeout(resolve,time);});};const done=function(val={}){const endTime=new Date().getTime();const costTime=(endTime-startTime)/1000;log(name+' 结束运行，耗时：'+costTime);if(isQuanX()||isSurge()||isLoon()){$done(val);}};return{msg,log,get,post,done,r,w,wait,toObj,toStr,isLoon,isNode,isQuanX,isSurge,isRequest,isResponse,isPost,isGet};}


$done({ body: JSON.stringify(body) });
