<template>
    <header>
        <div class="menutop">
            <div id="logo"><img src="../../assets/images/logo.png" alt=""></div>            
            <div class="menu">
                <ul>
                    <li v-for="item in title"><a :href="item.url"><span class="CN" v-text="item.zh"></span><span class="EN" v-text="item.en"></span></a></li>
                </ul>                
            </div>
        </div>
        
    </header>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                title:[
                    {zh:"首页",en:"HOME",url:'/'},
                    {zh:"公司介绍",en:"ABOUT",url:'/'},
                    {zh:"新闻中心",en:"EVENTS",url:'/'},
                    {zh:"产品中心",en:"PRODUCT",url:'/'},
                    {zh:"联系我们",en:"CONTACT",url:'/'}
                ],
                
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
    header{width: 100%;}
    #logo{width: 108px;height: 119px;margin: 0 auto;}
    .menu{width: 100%;height: 86px;border-top: 1px #e5e5e5 solid;}
    .menu ul{margin: 0 auto;padding: 0px;width: 1147px;height: 86px;}
    .menu ul li:first-child{margin-left: 0px;}
    .menu ul li{width: auto;height: 86px;display:inline-block;margin-left: 161px;}
    .menu ul li a{height: 86px;display: block;text-align: center;padding: 0 12px;text-decoration: none;}
    .menu ul li a span.CN{display: inline-block;margin-top: 26px;width: auto;text-align: center;font-size: 16px;color: #000000;}
    .menu ul li a span.EN{display: block;width: auto;text-align: center;font-size: 12px;font-family: 'Arial';color: #999999;margin-top: 10px;}
    
</style>