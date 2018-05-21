<template>
  <div class="">
    <guide v-bind:which="which"></guide>
    <div class="content">
        <div class="phone">
            <div class="name0" :class="{'trans':AA}">姓名</div>
            <div class="input" :class="{'boC':AC}">
                <input type="text" v-model="name" :class="{'redPlhd':nameshow}" :placeholder="nameholder" class="name" v-on:blur="CName()" v-on:focus="nameC()" />
                <div class="mclose" :class="{'showname':A}" @click="nameCancel()">
                    <img src="./image/cancel2.png" >
                </div>
            </div>
        </div>
        <div class="phone credit">
            <div class="name1" :class="{'trans':BB}">身份证号码</div>
            <div class="input" :class="{'boC':BC}">
                <input type="text" v-model="id" :class="{'redPlhd':idshow}" :placeholder="idholder"  maxLength="18" onpaste="return false" v-on:blur="Ccredit()"  v-on:focus="creditC()" oncopy="return false;" oncut="return false;" oninput="if(value.length>18)value=value.slice(0,18)" class="name" id="credit" />
                <div class="mclose"  :class="{'showcredit':B}"  @click="creditCancel()">
                    <img src="./image/cancel2.png" >
                </div>
            </div>
        </div>
    </div>
    <div class="bottom">
      <div class="isagree ">
          <span id="attorney"> 下一步即同意 <router-link to="attorney">《信用精灵授权书及注册协议》</router-link></span>
      </div>
      <div class="btn" >
          <button class="start" @click="start()">
              下一步
          </button>
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
	import guide from '../common/guide.vue';

	export default {
		data () {
			return {
        url:'//mcredit.ppdai.com/creditApi/IUserService/saveThreeInfos.htm',
        url1:'//mcredit.ppdai.com/creditApi/IUserService/authUserIdCard.htm',
        url3:'//mcredit.ppdai.com/credit/ICreditPaymentService/wxMerchantInfo.htm',
        url4:'//mcredit.ppdai.com/creditApi/ICreditReportService/creditCheckupPreprocess',
        // url:'//172.20.15.14:8484/creditApi/IUserService/saveThreeInfos.htm',
        // url1:'//172.20.15.14:8484/creditApi/IUserService/authUserIdCard.htm',
        // url3:'//172.20.15.14:8484/credit/ICreditPaymentService/wxMerchantInfo.htm',
          which:1,
          name:'',
          id:'',
          showpop:true,
          txt:'',
          A:true,
          B:true,
          AC:false,
          BC:false,
          nameshow:false,
          idshow:false,
          nameholder:'',
          idholder:'',
          AA:false,
          BB:false,
          phone:'',
          bizCode:'',
          token:'',
          reportid:''
			}
		},
    components: {
      guide
    },
    created(){

     },
		mounted () {
			this.phone = this.$route.query.phone;
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
    $(".content input").focus(function(){//在这里‘input.inputframe’是我的底部输入栏的输入框，当它获取焦点时触发事件
      //alert(1)
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
		methods: {
      hide(){
          let self=this;
        self.showpop=true;
      },
     nameC(){
       let self=this;
        self.A=false;
        self.AA=true;
        self.AC=true;
     },
     CName(){
       let self=this;
       if(self.name==''){
         self.AA=false;
       }
       self.AC=false;

     },
     creditC(){
       let self=this;
       self.B=false;
       self.BB=true;
       self.BC=true;
     },
     Ccredit(){
       let self=this;
       if(self.id==''){
         self.BB=false;

       }
        self.BC=false;
     },
     nameCancel(){
        let self=this;
        self.name='';
     },
     creditCancel(){
       let self=this;
       self.id='';
     },
     start(){
        let self=this;
        let phone=self.phone;
        let namereg = /^[\u4E00-\u9FA5]{1,20}$/; //中文姓名校验
        let reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;//身份证校验
               if(!namereg.test(self.name) || self.name=='')
               {
                 self.name='';
                 self.nameholder="请输入正确的中文姓名~";
                 self.nameshow=true;
                 return false;
               }
               if(!reg.test(self.id) || self.id=='')
               {

                 self.id='';
                 self.idholder="请输入正确的身份证号码~";

                 self.idshow=true;
                 return false;
               }

        self.$axios.post(self.url, {"mobile":phone,"realname":self.name,"idCard":self.id}).then((res) => {
          //let data = JSON.parse(result.bodyText);
          if(res.data.result=='0' && res.data.content=="success"){
                self.creditCheckup();
          }else if(res.data.result=="-1"){
            self.showpop=false;
            self.txt=data.resultMessage;
          }
        });

      },
      wxAuth(){
        let self=this;
        let Type=this.$store.state.type;
        self.token=this.$route.query.token;

          self.$axios.get(self.url3).then((res) => {

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
      creditCheckup(){
          let self=this;
          let Type=this.$store.state.type;
        self.$http.post(self.url1, {emulateJSON: true}).then((result) => {
          let data = JSON.parse(result.bodyText);

            if(data.result=='0' && data.content.authenticateStatus==2  ){
                      self.CheckupPreprocess();
              }else if(data.result=="0" && data.content.authenticateStatus==3 ){
                self.showpop=false;
                self.txt=data.resultMessage;
              }else{
                   self.$router.push({ path: 'enter',query: { phone:self.phone,token:self.token}});
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
          self.$axios.post(self.url4,{"source": 3,"type":whichtype}).then((res) => {

            if(res.data.result===0){
              let reportid=res.data.content.reportId;
              self.bizCode=res.data.content.bizCode;
              self.reportid=reportid;
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
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">


    .content{
              margin: 5% 0;
          }

      .showcredit,.showname{
        display: none;
      }

      .phone{
          width: 100%;
          margin: 5px 0% 5px;
          box-sizing: border-box;
          padding: 0px 5%;
          background-color: #fff;
          text-align: left;
      }
      .phone input{
          display: inline-block;
          text-align: left;
          height: 30px;
          line-height: 20px;
          font-size: 18px;
          color: #333333;
          border: none;
          box-sizing: border-box;
          vertical-align: middle;
          -webkit-user-modify: read-write-plaintext-only;
          -webkit-appearance: none;
          background: transparent;
      }
      :focus {
          outline: 0;
      }
      .name0,.name1{
          -webkit-transition:all 1s;
          -moz-transition:all 1s;
          -o-transition:all 1s;
          transition:all 1s;
          font-family: PingFangSC-Regular;
          font-size: 18px;
          color: #A9A9A9;
      }
      .trans{
          -webkit-transform: scale(0.7,0.7);
          -moz-transform:scale(0.7,0.7);
          -o-transform:scale(0.7,0.7);
          transform:scale(0.7,0.7);
          transform-origin: 0 100%;
      }
      .credit{
          margin-top: 4.2%;
      }
      .input{
          border-bottom: 1px solid #E5E5E5;
          position: relative;
      }
      .mclose{
          position: absolute;
          top:10%;
          right: 5%;
      }
      .btn{
          text-align: center;
      }
      .isagree{
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #97ABB6;

          padding: 0 5%;
          text-align: center;
      }
      .isagree a{
          color: #049AFF;
          text-decoration:none;
      }
      .isagree img{
          width: 15px;
          height: 15px;
          vertical-align: sub;
      }
      .start{
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 0;
          height: 45px;
          line-height: 45px;
          background: #95CFF6;
          width: 100%;
          text-align: center;
          margin:10px 0 0;
          border: none;
      }
      .disable{
          background: #97ABB6;
      }
      .redPlhd::-webkit-input-placeholder{
          color:red;
      }
      input::-webkit-input-placeholder {
          color:    #D1D1D1;
      }
      input:-moz-placeholder {
          color:    #D1D1D1;
      }
      input::-moz-placeholder {
          color:    #D1D1D1;
      }
      input:-ms-input-placeholder{
          color:   #D1D1D1;
      }
      .bottom{
        position: fixed;
        bottom: 0;
        width: 100%;
      }
      .boC{
            border-bottom: 1px solid #049AFF;
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
