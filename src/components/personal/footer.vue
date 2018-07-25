<template>
    <div class='personalFooter'>
        <div class="navigator">
            <div class="aboutus">
                <h2>关于我们<span>About Us</span></h2>
                <a v-for="item in aboutus" :href="item.url" v-text="item.title"></a>
            </div>
            <div class="intro">
                <h2>产品介绍<span>Production Instroduction</span></h2>
                <a>XXX</a>
                <a href="">XXX</a>
            </div>
            <div class="search">
                <form action="">
                    <input type="text" name="" id="">
                    <button type="submit"></button>
                </form>
                <div class="follow">
                    <img src="" alt="">
                    <hgroup>
                        <p>请扫一扫</p>
                        <p>关注我们</p>
                    </hgroup>
                </div>
            </div>
        </div>
        <div class="copy">
            Copyright © 2010-2015 备案号 XXXXXxxxxxxxxxxxxxx号
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                aboutus:[{title:"公司介绍",url:"/"},{title:"产品介绍",url:"/"},{title:"资讯信息",url:"/"},{title:"会员中心",url:"/"},{title:"加入我们",url:"/"}]
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
<style lang="less" scoped>
    .personalFooter{height:  507px;width: 100%;background-color: #323736;padding-top: 120px;
        >.navigator{width: 1210px;margin:0 auto;height: 210px;
            >.aboutus{width: 174px;float: left;
                >h2{font-size: 21px;color:#fff;margin-bottom: 20px;height: 32px;line-height: 32px;
                    >span{font-size: 13px;margin-left: 10px;}
                }
                >a{font-size: 13px;color:#fff;height: 32px;line-height: 32px;}
            }
            >.intro{width: 250px;float: left;margin-left: 114px;
                >h2{font-size: 21px;color:#fff;margin-bottom: 20px;height: 32px;line-height: 32px;
                    >span{font-size: 13px;margin-left: 10px;}
                }
                >a{font-size: 13px;color:#fff;height: 32px;line-height: 32px;}
            }
            >.search{width: 472px;float: left;margin-left: 200px;
                >form{
                    >input{width: 417px;height: 49px;border: 1px solid #999;border-right: 0;background:transparent;float: left;padding-left: 10px;font-size: 20px;color:#999;}
                    >button{border:1px solid #999;background: transparent url(../../assets/images/search02.png) no-repeat center;height: 49px;width: 55px;float: left;}
                }
                >.follow{float: left;width: 472px;margin-top: 58px;
                    >hgroup{padding-top: 25px;height: 102px;width: 89px;float: right;
                        >p{font-size: 16px;height: 26px;line-height: 26px;width: 89px;text-align: center;color:#999;}
                    }
                    >img{width: 103px;height: 103px;background-color: #b1b3b3;display: block;float: right;}
                }
            }
        }
        >.copy{color:#999;width: 1210px;margin: 0 auto;margin-top: 120px;font-size: 13px;height: 33px;line-height: 33px;text-align: center;}        
    }
</style>