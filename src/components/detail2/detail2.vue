<template>
    <div class="detail">
        <detailHeader  v-if="flag"></detailHeader>
        <section  v-if="flag">
           <div class="productDetials"></div>
           <div class="productDiscuss"></div>
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
                search:"",
                products:[
                	{url:"/detail?sid=3&gi=check",img:"../../static/img/product/product_03.jpg"},
                	{url:"/detail?sid=3&gi=check",img:"../../static/img/product/product_05.jpg"},
                	{url:"/detail?sid=3&gi=check",img:"../../static/img/product/product_06.jpg"},
                	{url:"/detail?sid=3&gi=check",img:"../../static/img/product/product_07.jpg"}
                ]
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
<style scoped lang="less">

    .detail{width: 100%;}
    section{}
	
</style>
