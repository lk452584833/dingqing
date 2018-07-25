<template>
    <div class="detail">
        <detailHeader  v-if="flag"></detailHeader>
        <section  v-if="flag">
            <div class="productIntro">
                <div class="shade"></div> 
                <ul>
                    <li>-产品中心-</li>
                    <li>PRODUCT</li>
                    <li v-text="tag"></li>
                </ul>
                <img src="../../assets/images/banner.jpg" alt=""/>
            </div>
        </section>
        <detailFooter  v-if="flag"></detailFooter>
        <div v-if="!flag">
            <p style="font-size:100px;text-align:center;margin-top:50px;">404！页面不存在</p>
        </div>
    </div>
</template>
<script>
    import detailHeader from './header.vue'
    import detailFooter from './footer.vue'
    export default {
        components:{detailHeader,detailFooter},
        data () {
            return {
                flag:false,
                tag:"克拉钻/异性钻/黄色钻",
                search:""
            }
        },
        methods:{
            getHash(){

            }
        },
        created(){
            if((location.hash.length>location.hash.indexOf('?')) && (location.hash.indexOf('?')>=0)){this.flag=true}
            else{this.flag=false};
            this.search=location.hash.substr(location.hash.indexOf('?')+1);
            this.tag=this.search;
        },
        mounted(){
            let that=this;
            window.onhashchange=function(){
                if((location.hash.length>location.hash.indexOf('?')) && (location.hash.indexOf('?')>=0)){that.flag=true;that.tag=location.hash.substr(location.hash.indexOf('?')+1);}
            else{that.flag=false;};
            }
        }
    }
</script>
<style scoped>

    .detail{width: 100%;}
    section{min-height: 6rem;}
    .productIntro{width: 1920px;height: 590px;position: relative;margin: 0 auto;}
    .productIntro .shade{width: 100%;height: 592px;position: absolute;background: #000000;opacity: 0.5;z-index: 3;}
    .productIntro ul{width: 100%;z-index: 4;padding-top: 190px;position: absolute;}
    .productIntro ul li{width: 100%;text-align:center;color: #fff;font-size: 36px;margin-top: 12px;}
    .productIntro ul li:first-child{font-size: 60px;}
    .productIntro ul li:last-child{margin-top: 32px;}

</style>
