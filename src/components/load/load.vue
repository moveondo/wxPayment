<template>
  <div class="">
      <guide v-bind:which="which"></guide>
    <div class="title">
      <p class="success">支付成功</p>
      <p class="goon">检测中…</p>
    </div>
    <div class="circle"> <div class="pie_left">
        <div class="left"></div></div>
        <div class="pie_right">
            <div class="right"></div>
        </div>
        <div class="mask"><span>0</span>%</div>
    </div>
    <div class="desc">
        <p>我们正在为您检测各项信用数据,</p>
        <p>可能需要1分钟。</p>
    </div>

      <toast :showpop="showpop"></toast>

</div>
</template>

<script type="text/ecmascript-6">
    import $ from 'jquery';
	  import toast from '../common/toast.vue';
    import guide from '../common/guide.vue';

	export default {

    data () {
      return {
        showpop:true,
        which:3
      }
    },
    components: {
      toast,
      guide
    },
    created() {
      let self=this;
      let Totalmin=0;
      let time=setInterval(function(){
         Totalmin=Totalmin+3000;
         //this.Sendcode();
         if(Totalmin==60000){

           self.showpop=false;
             clearInterval(time);

         }
      }, 3000);

    },
    mounted () {
      $(function() {
           let self=this;
       let num1 = $(self).find('span').text();
       let num2;
       let timer=setInterval(function(){
           num1=parseInt(num1)+1;
           num2=parseInt(num1*100/60);
           //console.log(num1,num2);
           $('.circle').each(function(index, el) {
               $(self).find('span').html(num2);
               let num = num1* 6;
               if (num<=180) {
                   $(self).find('.right').css('transform', "rotate(" + num + "deg)");
               } else {
                   $(self).find('.right').css('transform', "rotate(180deg)");
                   $(self).find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
               };
           });
           if(num1==60){
               clearInterval(timer);
           }
       }, 1000);

       });
    },
    methods: {
      Sendcode(){
        let self=this;
        self.$http.post('/creditApi/ICreditReportService/creditCheckupProgress.htm', {"reportId": reportid,"type":1}, {emulateJSON: true}).then((result) => {
          let data = JSON.parse(result.bodyText);
          if(data.result==0 && data.content.status=="2"){
              //window.location.href="./Credit.html";
          }
        });

      },
    }
	}
</script>

<style scoped lang="less" rel="stylesheet/less">

 .title{
   margin-top: 41px;
    text-align: center;
   .success{
     font-family: PingFangSC-Regular;
     font-size: 24px;
     color: #049AFF;

   }
   .goon{
     font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #333333;
      margin-bottom: 26px;
   }
 }
 .desc{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #97ABB6;
    letter-spacing: 0;
    line-height: 21px;
    margin:191px 10% 7%;

   }


  .circle { width: 140px; height: 140px; position: absolute; border-radius: 50%; background: #0082C8; margin: 0 33%;
  }
  .pie_left, .pie_right { width: 140px; height: 140px; position: absolute; top: 0;left: 0; }
  .left, .right { display: block; width:140px; height:140px; background:#EEF4F9; border-radius: 50%; position: absolute; top: 0px; left: 0px; }
  .pie_right, .right { clip:rect(0,auto,auto,70px); }
  .pie_left, .left { clip:rect(0,70px,auto,0); }
  .mask { width: 121px; height: 121px; border-radius: 50%; left: 10px; top: 10px; background: #FFF; position: absolute; text-align: center; line-height: 110px; font-size: 16px; }
  @media screen and (max-width: 340px) {
      .circle{
          margin: 0 27%;
      }
  }

  /*totast*/
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
             font-size: 1.6rem;
             padding: 10% 0;
         }
         .sureBtn {
             height: 50px;
             border-top: 1px solid #ccc;
             font-size: 1.8rem;
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
