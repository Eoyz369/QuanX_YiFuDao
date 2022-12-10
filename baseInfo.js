

mt=new Date()
mt.setMinutes(0)
bt = mt.getTime()-7200000
et = mt.getTime()+10800000




body = JSON.parse($response.body)
body.data.qrCodeColor ="green"


// body.data.qrCodeOARecord = ""
// body.data.qrCodeOARecord.endTime =et

body.data.qrCodeOARecord.applyStatus=4
body.data.qrCodeUrl="https://yfd.ly-sky.com/ly-ms/application/open/qrCode/1?t=ms_84&y=1001670642842623004230000000369"


$done({ body: JSON.stringify(body) });

