
body = JSON.parse($response.body)
body.data.qrCodeColor ="green"
body.qrCodeUrl="https://bj.bcebos.com/qr-code/22120919e953ffc480fb.jpg"

body.qrCodeOARecord.applyStatus=4

$done({ body: JSON.stringify(body) });
