<template>
	<div class="pay">
    <div class='pop'  :class="{'showpop':showpop1}"  >
      <div class='toast'>
        <div class='toast1'>
         <p class='copytext'>{{txt1}}</p>
        </div>
        <div class='sureBtn' @click="hide()"> 确定 </div>
      </div>
    </div>

	</div>
</template>

<script type="text/ecmascript-6">

	export default {
  	props: ['showpop','txt'],
		data () {
			return {
        //showpop: new Array(11).fill(0),
        showpop1:true,
        txt1:'服务超时，请稍后重试！'
			}
		},
    watch: {
			//	 let self=this;
     showpop:{

      handler:function(curVal,oldVal){

				this.change(curVal,oldVal);

      },
     　deep:true

    }
   } ,
    // created(){
		//
    //   let self=this;
    //   let showpop1=self.$parent.showpop;
		//
    //   let txt1=self.$parent.txt;
		//
    //   self.txt1=txt1;
    //   self.showpop1=showpop1;
		// 	    console.log("11"+ showpop1,txt1);
    //   }
		methods: {
          change(curVal,oldVal){
						let self=this;

					   self.showpop1=curVal;
					},
					hide(){
						let self=this;
						self.showpop1=true;
					}
		}

  }

</script>

<style scoped lang="less" rel="stylesheet/less">

.showpop{
  display: none;
}
       .pop{
           position:fixed;
           top:0;left:0;right:0;bottom:0;
           background-color:#000;
           opacity: 0.6;
           z-index: 4;

       }
       .toast {

           width: 75%;
           position: fixed;
           top: 40%;
           left: 50%;
           -webkit-transform: translate(-50%,-50%);
           transform: translate(-50%,-50%);
           box-sizing: border-box;
           z-index: 5;
           color: #333;
           background: #fff;
           border-radius: 8px;

       }
       .toast1 {
           text-align: center;
           background: #fff;
           padding: 5% 7%;
           line-height: 26px;
           border-radius: 8px;
       }
       .toast1 p{
           font-size: 16px;
           padding: 10% 0;
       }
       .sureBtn {
           height: 50px;
           border-top: 1px solid #ccc;
           font-size: 18px;
           line-height: 50px;
           background-color: #049aff;
           color: #fff;
           margin: 0 auto;
           letter-spacing: 4px;
           border-bottom-left-radius: 8px;
           border-bottom-right-radius: 8px;
           text-align: center;
       }


</style>
