

mt=new Date()
mt.setMinutes(0)
bt = mt.getTime()-7200000
et = mt.getTime()+10800000




body = JSON.parse($response.body)
body.data.qrCodeColor ="green"
// body.qrCodeUrl="https://bj.bcebos.com/qr-code/22120919e953ffc480fb.jpg"

body.data.qrCodeOARecord.beginTime = bt
body.data.qrCodeOARecord.endTime = et


// body.data.qrCodeOARecord.applyStatus="https://meeting-image-1257318859.cos.ap-beijing.myqcloud.com/htmlImages/yfd/student/postmark/pic-ing.png"

$done({ body: JSON.stringify(body) });

//         <view class="lists lists_bg" style="background-image: url({{detail.qrCodeOARecord.applyStatus}})" wx:if="{{detail.qrCodeOARecord}}">
//             <view class="list">
//                 <view class="list_left">类型</view>
//                 <view class="list_right" style="color:#7ec37b">{{detail.qrCodeOARecord.oaType}}{{detail.qrCodeOARecord.oaAlias?'-'+detail.qrCodeOARecord.oaAlias:''}}</view>
//             </view>
//             <view class="list">
//                 <view class="list_left">开始时间</view>
//                 <view class="list_right">{{detail.qrCodeOARecord.beginTime}}</view>
//             </view>
//             <view class="list">
//                 <view class="list_left">结束时间</view>
//                 <view class="list_right">{{detail.qrCodeOARecord.endTime}}</view>
//             </view>
//         </view>
