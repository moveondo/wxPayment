<template>
	<div class="pay-black">
     <div class="title">
       <div>
          <img :src="whichone" width="100%" />
       </div>
       <div class="dot">………………</div>
       <div>
          <img :src="whichtwo" width="100%" />
       </div>
        <div class="dot">………………</div>
       <div>
          <img :src="whichthree" width="100%" />
       </div>
     </div>
     <div class="title1">
       <div :class="{ 'up-color': isA}">  身份信息</div>
       <div :class="{ 'up-color': isB}" >  确认支付</div>
       <div :class="{ 'up-color': isC}">  检测报告 </div>
     </div>
     <div class="divide"></div>

	</div>
</template>

<script type="text/ecmascript-6">
	import done from "./image/done.png";
  import dtwo from "./image/dtwo.png";
  import dthree from "./image/dthree.png";
  import one from "./image/one.png";
  import two from "./image/two.png";
  import three from "./image/three.png";


	export default {
  	props: ['which'],
		data () {
			return {
        whichone:'',
        whichtwo:'',
        whichthree:'',
        isA:false,
        isB:false,
        isC:false
			}
		},
    created(){

            let self=this;
            let type=self.$parent.which;
            if(type==1){
              self.whichone=done;
              self.whichtwo=two;
              self.whichthree=three;
              self.isA=true;
            }else if (type==2) {
              self.whichone=one;
              self.whichtwo=dtwo;
              self.whichthree=three;
              self.isB=true;
            }else {
              self.whichone=one;
              self.whichtwo=two;
              self.whichthree=dthree;
              self.isC=true;

            }
    }
	}
</script>

<style scoped lang="less" rel="stylesheet/less">

.title{
  display: flex;
    justify-content: center;
    margin:19px  9.3% 0 9.3%;
        letter-spacing: 1px;
    .dot{
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #979797;
    line-height: 15px;
    }
   img{
     width: 25px;
     height: 25px;
   }
}
 .title1{
   display: flex;
   margin: 1.5% 9.3% 17px 9.3%;
   letter-spacing: 1px;
   justify-content: space-between;
   .up-color{
     font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #049AFF;
   }
 }
 .divide{
   background: #F7F7F7;
    width: 100%;
    height: 10px;
 }

</style>
