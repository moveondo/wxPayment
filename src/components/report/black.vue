<template>
	<div class="pay-black">
    <guide v-bind:which="which"></guide>
     <div class="content">
       <div class="type-name">
         <div class="left">
           <img src="./image/read.png" width="100%" />
         </div>
         <div class="right">
            <p class="part">黑名单检测</p>
            <p class="money">￥{{price}}</p>
         </div>
       </div>
     </div>
     <div class="Introduce">
           <div class="desc"> 服务介绍</div>
           <div class="text">
             使用黑名单检测服务，将实时检测您是否在放贷机构留有不良信用记录，并给予有针对性的优化建议
           </div>
           <div class="desc tit">  服务优势</div>
           <div class="text">
             1.查询快 &nbsp;&nbsp; 2.覆盖全  &nbsp;&nbsp;  3.多维度 &nbsp;&nbsp;   4.数据准
           </div>
     </div>
     <div class="pay">
         支付金额 <span>￥{{topicPrice}}</span>
     </div>
     <div class="tips">
        支付即视为同意<a href="">《信用精灵服务协议》</a>
     </div>
     <div class="but" @click="creditCheckupPreprocess()"> 立即支付</div>
     <div class="read" :class="{'isshow':isShow}" > 查看已生成报告 </div>

	</div>
</template>

<script type="text/ecmascript-6">
	import guide from '../common/guide.vue';

	export default {
		data () {
			return {
				url:"/credit/ICreditPaymentService/productInfo.htm",
				url1:"/creditApi/ICreditReportService/creditCheckupPreprocess",
				url2:"/credit/ICreditPaymentService/submitPayment.htm",
        which:2,
				price:'',
				topicPrice:'',
				productId:'',
				isShow:true
			}
		},
    components: {
			guide
		},
		created() {
		  this.productInfo();

		},
		mounted () {

		},
		methods: {
      creditCheckupPreprocess(){
				let self=this;
				self.$http.post(self.url1, {"source": '3',"type":1}, {emulateJSON: true}).then((result) => {
					let data = JSON.parse(result.bodyText);
					if(data.result == 0){
							if(data.reportId !=null){
								self.isShow=false;
							}
							let bizCode=data.content.bizCode;
							let payCode=data.content.payCode;
							self.submitPayment(payCode);


					}
				});
			},
			productInfo(){
				let self=this;
				self.$http.post(self.url, {"productCode": 'BlacklistQuery'}, {emulateJSON: true}).then((result) => {
					let data = JSON.parse(result.bodyText);
					if(data.result == 0){
							self.topicPrice=data.topicPrice;
							self.price=data.price;
							self.productId=data.productId;

					}
				});

			},
			submitPayment(payCode){
				let self=this;
				self.$http.post(self.url2, {"productId": self.productId,"tradeNo":payCode,"buyerUserId":buyerUserId}, {emulateJSON: true}).then((result) => {
					let data = JSON.parse(result.bodyText);
					if(data && data.content) {
              data = JSON.parse(data.content);
              self.invokePay({"appId":data.bank_wx_app_id,"timeStamp":data.timestamp,"nonceStr":data.nonce_str,"package":"prepay_id="+data.prepay_id,"signType":"MD5","paySign":data.pay_sign});
          }


					//	  self.$router.push({ path: 'blacklist', query: { phone:self.tel}});


				});

			}

		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">

.content{
  .type-name{
    margin: 3.4% 0 0 4%;
    display: flex;
    justify-content: start;
    .left{
      width: 54px;
      height: 54px;
    }
    .right{
      margin-left: 3.5%;
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #333333;
      line-height: 18px;
      .money{
        margin-top: 9px;
        font-size: 14px;
      }
      .part{
        // font-weight: bold;
      }
    }
  }
}

.Introduce{
  box-sizing: border-box;
  background: #F9FCFE;
  width: 92%;
  margin: 16px 4% 0;
  padding: 14px 2.1% 16px 2.1%;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #617E8F;
  letter-spacing: 0.3px;
  line-height: 21px;
  .desc{
    font-weight: bold;
    margin-bottom: 8px;
  }
  .tit{
    margin-top: 30px;
    margin-bottom: 10px;
  }
}
.pay{
  font-family: PingFangSC-Regular;
font-size: 17px;
color: #4A4A4A;
line-height: 16px;
margin-top: 14.1%;
text-align: center;
  span{
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #FAAA06;
    line-height: 17px;
  }
}
.tips{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #97ABB6;
  letter-spacing: 0;
  line-height: 12px;
  margin-top: 10px;
  text-align: center;
  a{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #049AFF;
    letter-spacing: 0;
    line-height: 12px;
  }
}
.but{
  background: #049AFF;
box-shadow: 1px 4px 7px 0 #A4D3F2;
border-radius: 4px;
width: 92%;
margin: 0 4%;
height: 45px;
line-height: 45px;
text-align: center;
margin-top: 10px;
font-family: PingFangSC-Regular;
font-size: 17px;
color: #FFFFFF;
}
.read{
  font-family: PingFangSC-Regular;
font-size: 16px;
color: #049AFF;
line-height: 18px;
text-align: center;
margin: 20px 0;
 text-decoration:underline;
}
.isshow{
	display: none;
}
</style>
