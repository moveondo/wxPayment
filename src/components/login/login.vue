<template>
  <div class="">
    <div class="login">
      <div class="title">
       欢迎使用有信精灵
      </div>
  		<div class="input">
        <!-- <div class="name0" :class="{' trans':isShow}">手机号码</div>  v-on:focus="insinte()"  onpaste="return false" -->
  			<input type="tel" v-model="tel"  :class="{'redPlhd':telshow}" :placeholder="phoneholder" id="username" class="tel" maxLength="11" oncopy="return false;" oncut="return false;" oninput="if(value.length>11)value=value.slice(0,11)"  />
  		</div>
      <div class="code" id="ttt">
           <!-- <div class="name1" :class="{' trans':isShow}">验证码</div> -->
           <input type="text" v-model="code" :class="{'redPlhd':codeshow}"  maxLength="6" onpaste="return false" oncopy="return false;" oncut="return false;" oninput="if(value.length>6)value=value.slice(0,6)" :placeholder="mesholder"  class="message" id="message" />
           <input type="button"  v-bind:disabled="dis"  class="sendcode" id="btnSendSms" @click="Sendcode()" v-model="button" />
      </div>

  	</div>
    <div class="bottom" id="bottom">
      <div class="tip">
        确认即同意<router-link to="service">《服务注册协议》</router-link>
      </div>
      <div class="sure" @click="check()">
           确认
      </div>
    </div>

    <div  :class="{'showpop':showpop}" >
      <div class='pop'></div>
        <div class='toast'>
          <div class='toast1'>
           <p class='copytext'>{{txt}}</p>
          </div>
          <div class='sureBtn' @click="hide()"> 确定 </div>
        </div>
    </div>


  </div>

</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';

	export default {

		data () {
			return {
        url:'//mcredit.ppdai.com/creditApi/IUserService/loginOrRegCode',
        url2:'//mcredit.ppdai.com/creditApi/IUserService/validateInfoIsSheer',
        url3:'//mcredit.ppdai.com/creditApi/IUserService/loginByMobile.htm',
        url4:'//mcredit.ppdai.com/creditApi/IUserService/authUserIdCard.htm',
        url5:'//mcredit.ppdai.com/credit/ICreditPaymentService/wxMerchantInfo.htm',
        url6:'//mcredit.ppdai.com/creditApi/ICreditReportService/creditCheckupPreprocess',
        // url:'//172.20.15.14:8484/creditApi/IUserService/loginOrRegCode',
        // url2:'//172.20.15.14:8484/creditApi/IUserService/validateInfoIsSheer',
        // url3:'//172.20.15.14:8484/creditApi/IUserService/loginByMobile.htm',
        // url4:'//172.20.15.14:8484/creditApi/IUserService/authUserIdCard.htm',
        // url5:'//172.20.15.14:8484/credit/ICreditPaymentService/wxMerchantInfo.htm',
        // url6:'//172.20.15.14:8484/creditApi/ICreditReportService/creditCheckupPreprocess',
          isShow:false,
          phoneholder:'请输入手机号码',
          mesholder:'请输入短信验证码',
          tel:'',
          code:'',
          telshow:false,
          codeshow:false,
          button:'获得验证码',
          dis:false,
          timer: null,
          showpop:true,
          txt:'',
          token:'',
          bizCode:'',
          reportid:''
			}
		},
    mounted() {
      //anzhuo
      var winHeight = $(window).height();   //获取当前页面高度
      $(window).resize(function(){
         var thisHeight=$(this).height();
          if(winHeight - thisHeight >50){
               //当软键盘弹出，在这里面操作
            $(".bottom").css({"position":"static","overflow-y": "scroll"})
          }else{
              //当软键盘收起，在此处操作

           $(".bottom").css({"position":"absolute","overflow-y": "scroll"})
          }
      });
      //ioS 解决第三方软键盘唤起时底部input输入框被遮挡问题
    var bfscrolltop = document.body.scrollTop;//获取软键盘唤起前浏览器滚动部分的高度
    var interval;
    $(".login input").focus(function(){//在这里‘input.inputframe’是我的底部输入栏的输入框，当它获取焦点时触发事件

       $(".bottom").css({"position":"static","overflow-y": "scroll"})
         interval = setInterval(function(){//设置一个计时器，时间设置与软键盘弹出所需时间相近

        document.body.scrollTop = document.body.scrollHeight;//获取焦点后将浏览器内所有内容高度赋给浏览器滚动部分高度
          //
        },500)

    }).blur(function(){//设定输入框失去焦点时的事件
            $(".bottom").css({"position":"absolute","bottom": "0"})
          clearInterval(interval);//清除计时器

    });



    },
    created() {

      console.log(this.$store.state.type);

    },
		methods: {
      insinte(){
           this.isShow=true;
      },
      hide(){
        let self=this;
        self.showpop=true;
      },
      mitCode(){
          let self=this;
          let clock = '';
          let nums = 59;
          let btn;
          self.dis = true; //将按钮置为不可点击
          self.button= "重新发送(" + nums + ")";
        if (!self.timer) {
          self.count = nums;
          self.timer = setInterval(() => {
          if (self.count > 0 && self.count <= nums) {
            self.count--;
            self.button= "重新发送(" + self.count + ")";
           } else {
            self.dis = false;
            self.button = '获取验证码';
            nums = 59; //重置时间
            clearInterval(this.timer);
            self.timer = null;
           }
          }, 1000)
         }
      },
      Sendcode(){
        let self=this;

        if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(self.tel))){
          self.tel='';
          self.phoneholder="请输入正确的手机号~";
          self.telshow=true;
          return false;
        }
        self.mitCode();
        self.$http.post(self.url, {"mobile": self.tel}, {emulateJSON: true}).then((result) => {
          let data = JSON.parse(result.bodyText);
          if(data.result !== 0){
              //msgReminder(data.resultMessage);
          }
        });

      },
      wxAuth(){
        let self=this;
        let Type=this.$store.state.type;
          self.$axios.get(self.url5).then((res) => {

            if(res.data.code==0){
              let app_id=res.data.boingPayMerchantCode;
              let methods=res.data.merchantCode+"_" +res.data.subMerchantCode +"_"+"JSAPI";
              let typeToken=Type+"_"+self.token+"_"+self.bizCode+"_"+self.reportid;
                if(app_id != null){
                  // alert("self.token"+self.token);
                  // alert("type"+Type);
                    setTimeout("location.href='https://cloud.boingpay.com/bestin/oauth2/authorize?app_id=" + app_id + '&connect_redirect=1&redirect_uri=' +
                            "https://pgwcoc.ppdai.com/productInfo.html?typeToken="+typeToken+"&mchId=" + methods  + "' ", 1000);
                }
            }else if(res.data.result==="-1"){
              self.showpop=false;
              self.txt=data.resultMessage;
            }
          });
      },
      CheckupPreprocess(){
        let self=this;
        let Type=this.$store.state.type;
        let whichtype;
        if(Type=='B'){
          whichtype=1;
        }else{
          whichtype=2;
        }
          self.$axios.post(self.url6,{"source": 3,"type":whichtype}).then((res) => {

            if(res.data.result===0){
              let reportid=res.data.content.reportId;
              self.reportid=reportid;
              self.bizCode=res.data.content.bizCode;
              if(res.data.content.status==3 || res.data.content.status==5  || res.data.content.status==6  ){
                if(Type=="B"){
                    window.location.href="//mcredit.ppdai.com/report/Blacklist.html?reportid="+reportid
                }else{
                    window.location.href="//mcredit.ppdai.com/report/FServices.html?reportid="+reportid
                }

              }else {
                 self.wxAuth();
              }

            }else if(res.data.result==="-1"){
              self.showpop=false;
              self.txt=data.resultMessage;
            }
          });
      },
      authUserIdCard(){
        let self=this;

          self.$axios.post(self.url4).then((res) => {

            if(res.data.result===0){
              if(res.data.content.authenticateStatus==2){
                self.CheckupPreprocess();
              }else {
                 self.$router.push({ path: 'enter', query: { phone:self.tel,token:self.token}});
              }

            }else if(res.data.result==="-1"){
              self.showpop=false;
              self.txt=data.resultMessage;
            }
          });
      },
      Getreportid(){ //{"source" :3,"mobile":phone,"realname":Name,"idCard":Credit}
          let self=this;
        self.$axios.post(self.url2).then((res) => {
        //  let data = JSON.parse(result.bodyText);

          if(res.data.result===0){
            if(res.data.content.validateResult==0){
                self.authUserIdCard();
            }else{
              self.$router.push({ path: 'enter', query: { phone:self.tel,token:self.token}});
            }

          }else if(res.data.result==="-1"){
            self.showpop=false;
            self.txt=data.resultMessage;
          }
        });
      },
      check(){
           let self=this;
         //self.$router.push({ path: 'enter'});

        if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(self.tel))){
          self.tel='';
          self.phoneholder="请输入正确的手机号~";
          self.telshow=true;
          return false;
        }
       if(!(/^\d{6}$/.test(self.code))){
           self.code='';
           self.mesholder="请输入正确的验证码~";
           self.codeshow=true;
           return false;
       }
       self.$axios.post(self.url3, {"mobile":self.tel,"authCode":self.code,}).then((res) => {
         //let data = JSON.parse(result.bodyText);

         if(res.data.result == 0){
           let Token=res.data.content.token;
           self.token=Token;
           if(res.data.content.complete=="-1"){
               self.$router.push({ path: 'enter', query: { phone:self.tel,token:self.token}});
               //window.location.href="./enter.html?phone="+Mobile+"&token="+Token;
           }else if(res.data.content.complete=="0"){

               self.Getreportid();
           }else if(res.data.result=="-1"){
                 self.showpop=false;
                 self.txt=data.resultMessage;
            }
         }
       });
      }
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
.name0,.name1{
      -webkit-transition:all 1s;
      -moz-transition:all 1s;
      -o-transition:all 1s;
      transition:all 1s;
      font-family: PingFangSC-Regular;
      font-size: 2.0rem;
      color: #049AFF;
      display: block;
  }
  .trans{
      -webkit-transform: scale(0.7,0.7);
      -moz-transform:scale(0.7,0.7);
      -o-transform:scale(0.7,0.7);
      transform:scale(0.7,0.7);
      transform-origin: 0 100%;
  }
  .hide{
    display: none;
  }

.login{
  width: 90%;
  margin: 0 5%;
  .title{
    font-family: PingFangSC-Regular;
    font-size: 2.4rem;
    color: #333333;
    letter-spacing: 0;
    margin: 33px 0 48px 0;
  }
  .input{
    border-bottom: 1px solid #E5E5E5;
    width: 100%;

  }
  .code{
    display: flex;
justify-content: flex-end;
    .message{
      width: 80%;
    }
  }
    .input input,.code input{
      font-family: PingFangSC-Regular;
      font-size: 1.8rem;
      color: #A9A9A9;
      line-height: 18px;
      box-sizing: border-box;
      vertical-align: middle;
      -webkit-user-modify: read-write-plaintext-only;
      -webkit-appearance: none;
      background: transparent;
      // margin-bottom: 13px;
      display: inline-block;
      text-align: left;
      height: 30px;
      line-height: 30px;
      color: #333333;
      border: none;
      box-sizing: border-box;
      vertical-align: middle;
      -webkit-user-modify: read-write-plaintext-only;
      -webkit-appearance: none;
      background: transparent;

  }
        .redPlhd::-webkit-input-placeholder{
            color:red;
        }
        input::-webkit-input-placeholder {
          font-family: PingFangSC-Regular;
        font-size: 1.8rem;
        color: #A9A9A9;
        line-height: 18px;
        }
        input:-moz-placeholder {
          font-family: PingFangSC-Regular;
        font-size: 1.8rem;
        color: #A9A9A9;
        line-height: 18px;
        }
        input::-moz-placeholder {
          font-family: PingFangSC-Regular;
          font-size: 1.8rem;
        color: #A9A9A9;
        line-height: 18px;
        }
        input:-ms-input-placeholder{
          font-family: PingFangSC-Regular;
          font-size: 1.8rem;
        color: #A9A9A9;
        line-height: 18px;
        }
        .input ,.code{
          border-bottom: 1px solid #E5E5E5;
          position: relative;
          margin: 5% 0;
          padding-bottom: 13px;
        }

        .code .sendcode{
            background: #049AFF;
            border-radius: 12px;
            border:1px solid #049AFF;
            float: right;
            padding: 1%;
            font-family: PingFangSC-Regular;
            font-size: 1.3rem;
            color: #FFFFFF;
            line-height: 12px;

        }

}

.tip{
  font-family: PingFangSC-Regular;
  font-size: 1.2rem;
  color: #97ABB6;
  letter-spacing: 0;
  line-height: 12px;
  text-align: center;
  margin-bottom: 10px;
  a{
      color: #049AFF;
  }
}
.bottom{
  position: absolute;
  bottom: 0;
  width: 100%;
}
.sure{
  background: #95CFF6;
  font-family: PingFangSC-Regular;
  font-size: 1.8rem;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 18px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align:center;

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
