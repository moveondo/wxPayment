<template>
  <div class="">
    <div class="personmessage">
    <div class="person">
        <div class="message">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/user2.png" >
            <span class="who"> 体 检  人</span>
        </div>
        <div id="realName"> </div>
    </div>
    <div class="person line">
        <div class="message">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/tel3.png" >
            <span class="who"> 手机号码</span>
        </div>
        <div id="mobile"> </div>
    </div>
    <div class="person line">
        <div class="message">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/card2.png" >
            <span class="who"> 身份证号</span>
        </div>
        <div id="idNum">  </div>
    </div>
    <div class="person">
        <div class="message">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/time.png" >
            <span class="who"> 检测时间</span>
        </div>
        <div id="reportDate">  </div>
    </div>
</div>
<div class="divide"></div>

<div class=" risk">
    <div class="riskcheck">黑名单报告</div>
    <div class="Interpretation" id="expand" >
        <span > <em id="openup1">展开</em>解读</span>
        <img src="//mobiccdai.ppdaicdn.com/source/report/image/down.png" >
    </div>
</div>

<hr>

<div class="section">

    <div class="content">
        <div class="Court first">身份证和姓名是否在黑名单</div>
        <div class="blacklist " id="userInList"> </div>
    </div>

    <div class="active"  id="expand1">
        <div class="path">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/path2.png" >
        </div>
        <div class="read">
            <div class="readimg">  <img src="//mobiccdai.ppdaicdn.com/source/report/image/exp.png" ></div>
            <div class="content0">是否被标记为黑名单会极大的影响您的获得金融服务的可能性</div>
        </div>
    </div>
    <div class="content " id="Updatetime">
        <div class="Court middle">身份证和姓名黑名单更新时间</div>
        <div class="blacklist auto font" id="idUpdatetime"> </div>
    </div>

    <div class="active hide"  id="expand2">
        <div class="path">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/path2.png" >
        </div>
        <div class="read">
            <div class="readimg">  <img src="//mobiccdai.ppdaicdn.com/source/report/image/exp.png" ></div>
            <div class="content0">是否被标记为黑名单会极大的影响您的获得金融服务的可能性</div>
        </div>
    </div>
    <div class="content" id="bType">
        <div class="Court middle">黑名单分类</div>
        <div class="blacklist auto font"  id="blackTypeNames"> </div>
    </div>

    <div class="active hide"  id="expand3">
        <div class="path">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/path2.png" >
        </div>
        <div class="read">
            <div class="readimg">  <img src="//mobiccdai.ppdaicdn.com/source/report/image/exp.png" ></div>
            <div class="content0">是否被标记为黑名单会极大的影响您的获得金融服务的可能性</div>
        </div>
    </div>
    <div class="content">
        <div class="Court middle">直接联系人在黑名单数量</div>
        <div class="blacklist"  id="directBlackCount">  </div>
    </div>

    <div class="active"  id="expand4">
        <div class="path">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/path2.png" >
        </div>
        <div class="read">
            <div class="readimg">  <img src="//mobiccdai.ppdaicdn.com/source/report/image/exp.png" ></div>
            <div class="content0">您联系人中存在标记黑名单的人数，是金融服务机构判断是否团队骗贷的重要标准</div>
        </div>
    </div>

    <div class="content" id="directType">
        <div class="Court middle">直接联系人黑名单分类</div>
        <div class="blacklist  auto font"  id="directBlackType"> </div>
    </div>
    <div class="active hide"  id="expand5">
        <div class="path">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/path2.png" >
        </div>
        <div class="read">
            <div class="readimg">  <img src="//mobiccdai.ppdaicdn.com/source/report/image/exp.png" ></div>
            <div class="content0">您联系人中存在标记黑名单的人数，是金融服务机构判断是否团队骗贷的重要标准</div>
        </div>
    </div>


    <div class="content" >
        <div class="Court middle">使用过此手机的其他姓名</div>
        <div class="blacklist  auto font"  id="existOtherName"> </div>
    </div>
    <div class="active"  id="expand6">
        <div class="path">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/path2.png" >
        </div>
        <div class="read">
            <div class="readimg">  <img src="//mobiccdai.ppdaicdn.com/source/report/image/exp.png" ></div>
            <div class="content0">若有数据，您的手机之前可能被他人盗用注册申请了相关的金融服务</div>
        </div>
    </div>

    <div class="content" >
        <div class="Court middle">使用过此身份证的其他手机号</div>
        <div class="blacklist  auto font"  id="existOtherMobile"> </div>
    </div>

    <div class="active"  id="expand7">
        <div class="path">
            <img src="//mobiccdai.ppdaicdn.com/source/report/image/path2.png" >
        </div>
        <div class="read">
            <div class="readimg">  <img src="//mobiccdai.ppdaicdn.com/source/report/image/exp.png" ></div>
            <div class="content0">若有数据，您的身份证之前可能被他人盗用注册申请了相关的金融服务</div>
        </div>
    </div>
</div>

<div class="black black1">
    <span>
        <img src="//mobiccdai.ppdaicdn.com/source/report/image/sug.png" >
    </span>
    <span class="blankname" >
        建议:<span  id="msglist"> </span>
    </span>
</div>



</div>
</template>

<script type="text/ecmascript-6">

    import $ from 'jquery';
	export default {

    data () {
      return {
        showpop:true,
        which:3
      }
    },
    mounted () {
        $("#expand").click(function(){
        if( $("#expand1").hasClass("active")){
            $("#expand1,#expand2,#expand3,#expand4,#expand5,#expand6,#expand7").removeClass("active");
            $("#openup1").html("关闭");
            $("#expand").addClass("on");
            //$('#expand img').attr("src","//mobiccdai.ppdaicdn.com/source/report/image/close2.png");
        } else{
            $("#expand1,#expand2,#expand3,#expand4,#expand5,#expand6,#expand7").addClass("active");
            $("#openup1").html("展开")
  //            $('#expand img').attr("src","//mobiccdai.ppdaicdn.com/source/report/image/open2.png");
            $("#expand").removeClass("on");
        }
      });

      $.ajax({
        type: 'post',
        url: "/creditApi/ICreditReportService/getBlackReportInfo",
        data:JSON.stringify({reportId :7}),
        dataType: 'json',
        contentType:"application/json",
        success: function(data) {
           if(data.result==0){
               var Content=data.content;
               $("#realName").html(Content.realName);
               $("#idNum").html(Content.idNum);
               $("#mobile").html(Content.mobile);
               $("#userInList").html(Content.userInList);
               var Time=timetrans(Content.reportDate);
               $("#reportDate").html(Time);
               if(Content.idUpdatetime ==null || Content.idUpdatetime==''){
                   $("#Updatetime,#expand2").hide();
               }else{
                   var IdTime=timetrans(Content.idUpdatetime);
                   $("#idUpdatetime").html(IdTime);
               }



               if(Content.blackTypeNames ==null || Content.blackTypeNames==''){
                   $("#bType,#expand3").hide();
               }else{
                   var blackType= DealType(Content.blackTypeNames);
                   $("#blackTypeNames").html(blackType);
               }

               $("#blackTypeNames").html(Content.blackTypeNames);
               $("#directBlackCount").html(Content.directBlackCount);
              // $("#directBlackType").html(Content.directBlackType);
               if(Content.directBlackType ==null || Content.directBlackType==''){
                   $("#directType,#expand5").hide();
               }else{
                   var directBlack= DealType(Content.directBlackType);
                   $("#directBlackType").html(directBlack);
               }

               if(Content.msglist && Content.msglist.length>0){
                   var msgLength=Content.msglist.length;
                   var msgText;
                   for(var i=0;i<msgLength;i++){
                       if(i==0){
                           msgText=Content.msglist[i];
                       }else{
                           msgText=msgText+"<br/>"+Content.msglist[i];
                       }
                   }
               }
               $("#msglist").html(msgText);

               if(Content.existOtherName==true){
                   $("#existOtherName").html("有")
               }else{
                   $("#existOtherName").html("无")
               }

               if(Content.existOtherMobile==true){
                   $("#existOtherMobile").html("有")
               }else{
                   $("#existOtherMobile").html("无")
               }

               AddColor("userInList",Content.userInList,"name");
               AddColor("directBlackCount",Content.directBlackCount,"black");


           }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("网络错误，请稍后重试！")
        }
    });




    },
    created() {


    },
    methods: {
       DealType(Text) {

          var arr=Text.split("/");
          var arrtext;
          var arrLength=arr.length>=4?4:arr.length;
          for(var i=0;i<arrLength;i++){
              if(i==0){
                  arrtext=arr[0];
              }else {
                  arrtext=arrtext+"/"+arr[i];
              }
          }
          return arrtext;
      },

    }
	}
</script>

<style scoped lang="less" rel="stylesheet/less">

:focus {
      outline: 0
  }

  hr {
      /*height: 1px;*/
      border: none;
      border-top: 1px solid #E5E5E5;
      width: 100%;
      float: right;
      opacity: 0.5;
  }
  .checktime img{
      width: 13px;
      height: 13px;
      vertical-align: bottom;
  }
  em{
      font-style: normal;
  }
  .personmessage{
      padding: 22px  6.1%  22px 4.3%;
      font-size: 14px;
      color: #666666;
      line-height: 14px;
  }
  .personmessage img{
      width: 15px;
      height: 15px;
      margin-right: 1.9% ;
      vertical-align: sub;
  }
  .person{
      display: flex;
      justify-content: space-between;
      align-content: center;
  }
  .message{
      width:40%;
  }
  .line{
      margin: 15px 0;
  }
  .divide{
      background: #F7F7F7;
      width: 100%;
      height: 10px;
  }
  .content,.risk{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width:100%;
  }
  .Interpretation img{
      width: 15px;
      height: 15px;
      vertical-align: sub;
  }

  .read img{
      width: 14px;
      height: 14px;
      vertical-align: sub;
  }
  .path img{
      width: 19px;
      height: 10px;
      display: block;
      margin-left: 7%;
  }
  .active{
      display: none;
  }
  .section{
      width: 100%;
      box-sizing: border-box;
      padding: 18px 15px 28px 15px;
  }
  .risk{
      padding-bottom: 17px;
      width: 100%;
      box-sizing: border-box;
      padding: 18px 15px 13px 15px;
  }
  .riskcheck{
      font-family: PingFangSC-Regular;
      font-size: 17px;
      color: #4A4A4A;
      line-height: 17px;
      font-weight: bold;
  }
  .Interpretation{
      color: #6489A5;
  }
  .Court{
      font-family: PingFang-SC-Regular;
      font-size: 15px;
      color: #333333;
      line-height: 14px;
  }
  .first{
      margin-top: 13px;
      margin-bottom: 14px;
  }
  .middle{
      margin: 14px 0;
  }
  .blacklist{
      width: 23px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      border-radius: 2px;
      color: #fff;
      background: #4DA1FF;
  }
  .read{
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #92A8CD;
      line-height: 18px;
      background: #F5F9FC;
      border-radius: 4px;
      display: flex;
      padding: 11px 2% 14px;
  }
  .read .content0{
      margin-left: 5px;
  }

  .black{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #5F9FE7;
      line-height: 21px;
      padding: 2.7% 1.3% 2.7% 3.7%;
      margin: 0 4.5%;
      background: #F5FBFF;
      border-radius: 4px;
      /*display: flex;*/
  }
  .black1{
      margin-bottom: 36px;
  }
  .black img{
      width: 15px;
      height: 15px;
      vertical-align: sub;
      margin-right: 4px;
  }
  .blankname{
      margin-left: 2px;
  }
  .on img{
      transform: rotate(-180deg);
      -webkit-transform: rotate(-180deg);
      -webkit-transition: all .5s;
  }
  #expand1,#expand2,#expand3,#expand4,#expand6,#expand7{
      margin-top: -13px;
      margin-bottom: 14px;
  }
  .red{
      background: #FA704E;
  }
  .blue{
      background: #4DA1FF;
  }
  .green{
      background: #33BFAA;
  }
  .auto{
      height: auto;
      padding: 1px;
      width: auto;
  }
  .font{
      color: #333333;
      background: #fff;
      font-size: 14px;
  }
  .hide{
      display: none;
  }

  @media screen and (max-width: 320px) {
      .Court{
          font-size: 13px;
      }
      .font{
          font-size: 12px;
      }
  }

</style>
