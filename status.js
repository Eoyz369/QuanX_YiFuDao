body = JSON.parse($response.body)
body.data.statusDesc ="出校"
body.data.oaType ="请假"

$done({ body: JSON.stringify(body) });
