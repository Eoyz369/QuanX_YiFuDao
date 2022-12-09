
mt=new Date()
mt.setMinutes(0)
bt=mt.getTime()-7200000
et=mt.getTime()+10800000

body = JSON.parse($response.body)
body.data.askForLeaveDetail.applyStatus = 4
body.data.askForLeaveDetail.beginTime = bt
body.data.askForLeaveDetail.endTime = et
// body.data.askForLeaveDetail.reason = "我想出去吃汉堡王啊！"
body.data.askForLeaveDetail.chains.pop()

$done({ body: JSON.stringify(body) });
