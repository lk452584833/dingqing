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
                <!--<img src="../../assets/images/banner.jpg" alt="" class="productBanner"/>-->
            </div>
        </section>
        <section v-if="flag">
        	<div class="productList">
        		<ul>
        			<li v-for="item in products">
        				<router-link :to="item.url">
        					<img :src="item.img" alt="">
        				</router-link>
        			</li>

        		</ul>
        	</div>
        </section>
      	<section v-if='flag'>
      		<!-- << 上一页 1  2  3···下一页 >> 共 5 页 ，到第 1 页 确定 -->
      		<div class="detailPage">
      			<div class="pageBox">
      				<a href="" class="pre"><< &nbsp;上一页</a>
	      			<ul id="pages">      				
	      				<li>1</li>
	      				<li>2</li>
	      				<li>3</li>
	      				<li>...</li>
	      			</ul>
	      			<a href="" class="next">下一页 &nbsp;>></a>
	      			<span>共 <span class="total_pages">3</span>页</span>
	      			<div class="pageTo">,到第<input type="number" id="jump-page" min="1" max="5" value="1" @keydown="widthauto($event)">页 <button id="page-jump-sure">确定</button></div>
      			</div>
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
                search:"",
                products:[
                	{url:"/detail2?sid=3&gi=check",img:"../../static/img/product/product_03.jpg"},
                	{url:"/detail2?sid=3&gi=check",img:"../../static/img/product/product_05.jpg"},
                	{url:"/detail2?sid=3&gi=check",img:"../../static/img/product/product_06.jpg"},
                	{url:"/detail2?sid=3&gi=check",img:"../../static/img/product/product_07.jpg"},
                	{url:"/detail2?sid=3&gi=check",img:"../../static/img/product/product_08.jpg"}
                ]
            }
        },
        methods:{
            getHash(){

            },
            widthauto(e){
            	
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
    .productIntro .productBanner{width:100%;}
    .productIntro{width: 100%;min-width:12rem;height: 590px;position: relative;margin: 0 auto;background: url(../../assets/images/banner.jpg) center center no-repeat;background-size: auto 100%;}
    .productIntro .shade{width: 100%;height: 592px;position: absolute;background: #000000;opacity: 0.5;z-index: 3;}
    .productIntro ul{width: 100%;z-index: 4;padding-top: 190px;position: absolute;}
    .productIntro ul li{width: 100%;text-align:center;color: #fff;font-size: 36px;margin-top: 12px;}
    .productIntro ul li:first-child{font-size: 60px;}
    .productIntro ul li:last-child{margin-top: 32px;}
    .productList ul {background-color: #ececec;}
	.productList ul li{text-align: center;}
	.productList ul li img{vertical-align: middle;}
	
	.detailPage{height:150px;background-color:#ececec;text-align: center;font-size: 14px;color:#666;overflow: hidden;}
	.detailPage .pageBox{margin-top:62.5px;line-height: 72px;}
	.pageBox >a{display:  inline-block;color:#666;}
	.pageBox ul{display: inline-block;}
	.pageBox ul li{display:  inline-block;padding:0 6px;color:#666;}
	.pageBox .total_pages{padding:0 4px;}
	.pageTo{display: inline-block;}
	.pageTo #jump-page{text-align: center;background: transparent;padding-left:10px;}
	.pageTo #page-jump-sure{background: transparent;}

</style>
