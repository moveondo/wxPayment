<template>
	<!-- APP全球优惠首页组件 -->
	<div class="pay-index">
     <div class="banner">
       <img src="./image/banner.png" width="100%" />
     </div>
     <div class="title">
      <div class="lineleft">
         <img src="./image/left.png" width="100%" />
      </div>
      <div class="name">信用检测服务</div>
      <div class="lineright">
           <img src="./image/right.png" width="100%" />
       </div>
     </div>
     <div class="content">
       <div class="black" @click="Jump('black')">
          <div class="left">
             <p class="part">黑名单</p>
             <p class="money">￥5.38</p>
          </div>
          <div class="right">
              <img src="./image/black.png" width="100%" />
          </div>
       </div>
       <div class="loan" @click="Jump('financial')">
         <div class="left">
            <p class="part">网贷记录</p>
            <p class="money">￥5.38</p>
         </div>
         <div class="right">
             <img src="./image/loan.png" width="100%" />
         </div>
       </div>
     </div>

     <div class="title">
      <div class="lineleft">
         <img src="./image/left.png" width="100%" />
      </div>
      <div class="name">体检功能说明</div>
      <div class="lineright">
           <img src="./image/right.png" width="100%" />
       </div>
     </div>

     <div class="banner">
       <img src="./image/desc.png" width="100%" />
     </div>

	</div>

</template>

<script type="text/ecmascript-6">


	export default {
		data () {
			return {

			}
		},

		mounted () {



		},
		methods: {
       Jump(type){
         let self=this;
         if(type=='financial'){
					 	this.$store.commit('Type', 'F');
            self.$router.push({ path: 'login'});
         }else{
					 this.$store.commit('Type', 'B');
           self.$router.push({ path: 'login'});
         }

       }
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">

  .title{
    display: flex;
    font-family: PingFangSC-Medium;
    font-size: 1.6rem;
    color: #465B9D;
    justify-content:center;
    font-weight: bold;
    .lineleft,.lineright{
      width: 20%;
    }
    .name{
      margin: 0 1%;
    }
  }
  .content{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    margin: 3rem 0;
    .black,.loan{
      display: flex;
      justify-content: space-around;
      width: 40%;
    }
    .black{
      opacity: 0.96;
      background-image: linear-gradient(134deg, #8BB7FF 0%, #4F89FA 100%);
      border-radius: 2px;
      align-items: center;
      .left .part{
        color: #FFFFFF;
        border: 0 solid #FFFFFF;
      }
      .left .money{
        font-family: PingFangSC-Regular;
        font-size: 1.9rem;
        color: #000000;
        line-height: 1.8rem;
          color: #FFFFFF;
              margin-top: 6px;
      }
    }
    .right img{
      width: 44px;
      height: 44px;
    }
    .loan{
      opacity: 0.96;
      background-image: linear-gradient(-134deg, #119CDF 0%, #4FD1E7 100%);
      border-radius: 2px;
      align-items: center;
      .left .part{
        color: #FFFFFF;
        border: 0 solid #FFFFFF;
      }
      .left .money{
        font-family: PingFangSC-Regular;
        font-size: 1.9rem;
        color: #000000;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 6px;
      }
    }
  }

</style>
