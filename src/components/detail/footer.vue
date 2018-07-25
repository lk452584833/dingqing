<template>
    <footer><!--底部 开始-->
        <div class="shade"></div>
        <div class="bottom-text"><!--底部内容 开始-->
            <div class="dingqingtext">定情</div>
            <div class="address">地址:XXXXXXXXXX</div>
            <div class="underline"></div>
            <div class="tel">000-000000</div>
            <div class="mail">XXXXXX@qq.com</div>
            <div class="share">
                <span class="one"></span>
                <span class="two"></span>
                <span class="three"></span>
                <span class="four"></span>
            </div>
            <div class="copyright">Copyright ©2015 Microsoft Corporation All rights reserved.</div>
            <div class="jishusupport">技术支持：XXX</div>
            <div class="botmenu">
                <a href="#">买家须知</a><a href="#">隐私声明</a><a href="#">法律声明</a>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                
            }
        },
        methods:{
            
        },
        created(){
            
        },
        mounted(){
            
        }
    }
</script>
<style scoped>
    footer{width: 100%;height: 530px;position: relative;margin: 0 auto;background: url(../../assets/images/bottompic.jpg) no-repeat;background-size: cover;}
    .shade{width: 100%;height: 530px;background: #000000;position: absolute;opacity: 0.5;}
    .bottom-text{width: 422px;position: relative;height: auto;margin: 0 auto;}
    .dingqingtext{width: 317px;height: 73px;position: relative;background: url(../../assets/images/dingqingbox.png) no-repeat;margin: 0 auto;top: 45px;text-align: center;font-size: 36px;color: #fff;line-height: 102px;}
    .address{width: 100%;text-align: center;color: #fff;font-size: 20px;position: relative;top:64px;}
    .underline{width: 221px;height: 12px;margin: 0 auto;border-bottom: 1px #fff solid;position: relative;top: 78px;}
    .tel{width: auto;height: auto;margin: 0 auto;position: relative;top: 99px;text-align: center;color: #fff;font-size: 30px;font-family: '微软雅黑';}
    .mail{width: auto;text-align: center;font-size: 18px;color: #fff;font-family: '微软雅黑';position: relative;top: 106px;}
    .share{width: auto;text-align: center;height: auto;position: relative;top: 146px;}
    .share span{  display:inline-block;  width: 45px;  height: 45px;  position: relative;  overflow: hidden;  margin-left:10px;}
    .share span.one{margin-left:0px;background:url(../../assets/images/share.png) no-repeat;background-position:0px 0px;}
    .share span.two{background:url(../../assets/images/share.png) no-repeat;background-position:-63px 0px;}
    .share span.three{background:url(../../assets/images/share.png) no-repeat;background-position:-122px 0px;}
    .share span.four{background:url(../../assets/images/share.png) no-repeat;background-position:-185px 0px;}
    .copyright{width:auto;height:auto;text-align:center;color:#fff;font-size:16px;font-family:'Arial';position:relative;top:177px;}
    .jishusupport{width:auto;height:auto;text-align:center;color:#fff;font-size:14px;font-family:'宋体';position:relative;top:202px;}
    .botmenu{width:auto;height:auto;text-align:center;color:#fff;font-size:14px;font-family:'宋体';position:relative;top:225px;}
    .botmenu a:first-child{border-left:none;}
    .botmenu a{width:79px;height:auto;display:inline-block;margin:0px;padding:0px;text-align:center;text-decoration:none;color:#fff;font-size:14px;font-family:'宋体';position:relative;border-left:1px #fff solid;}
</style>