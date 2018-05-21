<template>
	<div class="pay-black">
    <guide v-bind:which="which"></guide>
     <div class="content">
       <div class="type-name">
         <div class="left">
           <img src="./image/read.png" width="100%" />
         </div>
         <div class="right">
            <p class="part">网贷记录检测</p>
            <p class="money">￥261.26</p>
         </div>
       </div>
     </div>
     <div class="Introduce">
           <div class="desc"> 服务介绍</div>
           <div class="text">
             有36.2%的用户逾期是因为忘记了自己的贷款平台名称。有超过70%的用户申请贷款被拒是因为短期内在多家平台进行了借贷
           </div>
           <div class="desc tit">  服务优势</div>
           <div class="text">
             <div class="left">
               <div>1.高额逾期费用</div>
                <div>2.影响房／车贷的申请</div>
             </div>
             <div class="right">
               <div>3.生活受限制</div>
               <div>4.催收人员的高频催收</div>
             </div>
           </div>
     </div>
     <div class="pay">
         支付金额 <span>￥726.2</span>
     </div>
     <div class="tips">
        支付即视为同意<a href="">《信用精灵服务协议》</a>
     </div>
     <div class="but"> 立即支付</div>
     <div class="read"> 查看已生成报告 </div>

	</div>
</template>

<script type="text/ecmascript-6">
	import guide from '../common/guide.vue';

	export default {
		data () {
			return {
        which:2
			}
		},
    components: {
			guide
		},
		mounted () {

		},
		methods: {

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
  .text .left,.text .right{
    display: flex;
    justify-content: space-between;
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
</style>
