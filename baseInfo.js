

mt=new Date()
mt.setMinutes(0)
bt = mt.getTime()-7200000
et = mt.getTime()+10800000




body = JSON.parse($response.body)
body.data.qrCodeColor ="green"
body.data.qrCodeUrl="https://yfd.ly-sky.com/ly-ms/application/open/qrCode/1?t=ms_84&y=1001670642842623004230000000369"

body.data.qrCodeOARecord = {
"oaType": "离校",
"oaAlias": "暑假离校",
"beginTime": 1670738400000,
"endTime": 1670756400000,
"applyStatus": 3
}
// body.data.qrCodeOARecord.endTime =et

// body.data.qrCodeOARecord.applyStatus=4



$done({ body: JSON.stringify(body) });

