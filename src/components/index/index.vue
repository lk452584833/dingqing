 <template>
  <div class="index">
    <indexHeader></indexHeader>
     <Carousel autoplay loop class="banner" radius-dot="true">
        <CarouselItem v-for="item in bannerImg" class="bannerImg">
          <router-link :to="item.url"><img :src="item.img" alt=""></router-link>
        </CarouselItem>      
    </Carousel>
    
    <!-- 列表详情 -->
    <div class="section">
      <div class="girls">
        <h1>{{girls.name}}</h1>
        <img src="../../assets/images/horizon.png" alt="">
        <div class="productClass">
          <img class="turnLeft" src="../../assets/images/turnLeft.png" @click="turn('pre',girlsTurn)">
          <div class="shade">
            <ul ref="girlsProduct">
              <li v-for="item in girls.class" @click="getReco(item.url,'girls','product')">
                <router-link :to="item.url">
                	<img :src="item.img" alt="">
	                <hgroup>
	                  <h2 v-text="item.classname"></h2>
	                  <h3>{{item.number}}<span>种</span></h3>
	                </hgroup>
                </router-link>
              </li>
            </ul>
          </div>
          <img class="turnRight" src="../../assets/images/turnRight.png" @click="turn('next',girlsTurn)">
        </div>
        <div class="product">
        	<div class="productOne" v-for="(item,index) in girls.product" :style="{'background-image':'url('+item.img+')'}">
        		<router-link  :to="item.url"></router-link>
        		<div :class="index==2?'abs center':'abs'">
        			<h4>{{item.title}}</h4>
        			<p>{{item.description}}</p>
        		</div>
        	</div>
          
        </div>
      </div>
      <div class="boys">
        <h1>{{boys.name}}</h1>
        <img src="../../assets/images/horizon.png" alt="">
        <div class="productClass">
          <img class="turnLeft" src="../../assets/images/turnLeft.png" @click="turn('pre',boysTurn)">
          <div class="shade">
            <ul ref="boysProduct">
              <li v-for="item in boys.class" @click="getReco(item.url,'boys','product')">
                <img :src="item.img" alt="">
                <hgroup>
                  <h2 v-text="item.classname"></h2>
                  <h3>{{item.number}}<span>种</span></h3>
                </hgroup>
              </li>
            </ul>
          </div>
          <img class="turnRight" src="../../assets/images/turnRight.png" @click="turn('next',boysTurn)">
        </div>
        <div class="product">
            <div class="productOne" v-for="(item,index) in boys.product" :style="{'background-image':'url('+item.img+')'}">
        		<router-link  :to="item.url" ></router-link>
        		<div :class="index==2?'abs center':'abs'">
        			<h4>{{item.title}}</h4>
        			<p>{{item.description}}</p>
        		</div>
        	</div>
        </div>
      </div>
      <div class="hot">
        <h1>{{hot.name}}</h1>
        <img src="../../assets/images/horizon.png" alt="">
        <div class="product">         
        	<div class="productOne" v-for="(item,index) in hot.product" :style="{'background-image':'url('+item.img+')'}">
        		<router-link  :to="item.url" ></router-link>
        		<div :class="index==2?'abs center':'abs'">
        			<h4>{{item.title}}</h4>
        			<p>{{item.description}}</p>
        		</div>
        	</div>
        </div>
      </div>
      <div class="recommend">
        <h1>{{recommend.name}}</h1>
        <img src="../../assets/images/horizon.png" alt="">
        <div class="product">
            <div class="productOne" v-for="(item,index) in recommend.product" :style="{'background-image':'url('+item.img+')'}">
        		<router-link  :to="item.url" ></router-link>
        		<div :class="index==2?'abs center':'abs'">
        			<h4>{{item.title}}</h4>
        			<p>{{item.description}}</p>
        		</div>
        	</div>
        </div>
      </div>
    </div>
    <indexFooter></indexFooter>
  </div>
</template>
<script>
  import indexHeader from "./header"
  import indexFooter from "./footer"
  export default {
    components:{indexHeader,indexFooter},
    data(){
      return {
        girlsCount:0,
        boysCount:0,
        girlsTurn:{number:5,width:220},
        boysTurn:{number:5,width:220},
        girls:{
          name:'定情信物·女',
          class:[
            {classname:"戒指",number:"20",url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg"},
            {classname:"手链",number:"50",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963632&di=bfccccf7c85957cf1bd4955bf00e8448&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201504%2F11%2F20150411H0147_EWrdF.thumb.700_0.jpeg"},
            {classname:"手镯",number:"10",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963632&di=cfb124d1aee2379a405f9811345fe1c6&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201504%2F11%2F20150411H0109_YQMBL.thumb.700_0.jpeg"},
            {classname:"手表",number:"30",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963631&di=6387ded64c4d9e69214fda9d62a4908a&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201410%2F20%2F20141020213211_cvfva.thumb.700_0.jpeg"},
            {classname:"项链",number:"40",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963631&di=3e91faf3f4928daffa615a477dbec342&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2FG1%2FM00%2F71%2F9B%2FrBACE1TEemSApBHoAABjZoslwI8273_600x.jpg"},
            {classname:"耳环",number:"44",url:"/detail?sid=3&gi=check",img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3439222531,2007034477&fm=27&gp=0.jpg"},
            {classname:"脚链",number:"110",url:"/detail?sid=3&gi=check",img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=726109987,3448273655&fm=27&gp=0.jpg"},
            {classname:"永生花",number:"88",url:"/detail?sid=3&gi=check",img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1398083622,4251752583&fm=27&gp=0.jpg"}
          ],
          product:[
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品2",description:"这个是产品1"},
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品3",description:"这个是产品1这个是产品1这个是产品1这个是产品1"},
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品4",description:"这个是产品1"}
          ]
        },
        boys:{
          name:'定情信物·男',
          class:[
            {classname:"打火机",number:"20",url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg"},
            {classname:"情侣杯",number:"50",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963632&di=bfccccf7c85957cf1bd4955bf00e8448&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201504%2F11%2F20150411H0147_EWrdF.thumb.700_0.jpeg"},
            {classname:"香水",number:"10",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963632&di=cfb124d1aee2379a405f9811345fe1c6&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201504%2F11%2F20150411H0109_YQMBL.thumb.700_0.jpeg"},
            {classname:"钱包",number:"30",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963631&di=6387ded64c4d9e69214fda9d62a4908a&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201410%2F20%2F20141020213211_cvfva.thumb.700_0.jpeg"},
            {classname:"香水",number:"10",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963632&di=cfb124d1aee2379a405f9811345fe1c6&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201504%2F11%2F20150411H0109_YQMBL.thumb.700_0.jpeg"},
            {classname:"钱包",number:"30",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963631&di=6387ded64c4d9e69214fda9d62a4908a&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201410%2F20%2F20141020213211_cvfva.thumb.700_0.jpeg"},
            {classname:"真皮腰带",number:"40",url:"/detail?sid=3&gi=check",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528733963631&di=3e91faf3f4928daffa615a477dbec342&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2FG1%2FM00%2F71%2F9B%2FrBACE1TEemSApBHoAABjZoslwI8273_600x.jpg"}
            ],
            product:[
              {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
              {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
              {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
              {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"}
            ]
        },
        hot:{
          name:'热门产品',
          product:[
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"}
          ]
        },
        recommend:{
          name:'专业推荐',
          product:[
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"},
            {url:"/detail?sid=3&gi=check",img:"http://img05.tooopen.com/images/20140328/sy_57865838889.jpg",title:"产品1",description:"这个是产品1"}
          ]
        },
        bannerImg:[
          {url:"/detail?sid=3&gi=check",img:"../../static/img/banner.jpg"},
          {url:"/detail?sid=3&gi=check",img:"../../static/img/banner.jpg"},
          {url:"/detail?sid=3&gi=check",img:"../../static/img/banner.jpg"},
          {url:"/detail?sid=3&gi=check",img:"../../static/img/banner.jpg"}
        ]
      }        
    },
    methods:{      
      getReco(url,list,child){
        let that=this;
        this.axios(this.href+url).then((res)=>{
          if(child){that[list][child]=res.body;}else{that[list]=res.body;}          
        })
      }
    },
    created(){

    },
    mounted(){
      this.girlsTurn.ele=this.$refs.girlsProduct;
      this.boysTurn.ele=this.$refs.boysProduct;
    }
  }
</script>

<style>
		/*banner button */
	  .banner>ul{bottom:10px;}
	  .banner>ul>li>button{width: 15px!important;height: 15px!important;background-color: #fff!important;}

</style>
<style >
	
	/*add scoped */
	
  .index{margin: 0 auto;}
  .banner{height: 4.5rem;margin: 0 auto;width: 100%;min-width:12rem;max-width: 19.2rem;}
  .bannerImg{height: 4.5rem;width: 100%;}
  .bannerImg a{display: block;height: 4.5rem;width: 100%;}
  .bannerImg a img{display: block;height: 4.5rem;width: 100%;}
	
  .section{width: 12rem;margin: 0 auto;margin-bottom: .8rem;}
  .section>div{margin-top:.5rem;}
  .section>div>h1{font-size: 30px; height: .6rem;line-height: .6rem;text-align: center;}

  .productClass{margin: .5rem 0;height: .9rem;}
  .productClass .turnLeft{height: .3rem;float: left;margin-top: .3rem;width: .18rem;cursor: pointer;}
  .productClass .turnRight{height: .3rem;float: right;margin-top: .3rem;width: .18rem;cursor: pointer;}
  .productClass .shade{width: 11rem;overflow: hidden;margin: 0;float:left;margin-left: .32rem;}
  .productClass .shade>ul{width: 30rem;transition: margin-left .5s;}
  .productClass .shade>ul li{width: 2.2rem;height: .9rem;float: left;cursor: pointer;}
  .productClass .shade>ul li hgroup{float: left;margin-left: .12rem;}
  .productClass .shade>ul li hgroup h2{font-size: .24rem;color:#495060;}
  .productClass .shade>ul li hgroup h3{font-size: .24rem;color:#495060;}
  .productClass .shade>ul li hgroup h3 span{font-size: .14rem;color:#495060;}
  .productClass .shade>ul li img{height: .9rem;width:.9rem;border-radius: .9rem;float: left;border:1px solid #d6d6d6;}
  
  .product{width: 100%;height: 200px;}
  .product .productOne{width: 25%;display: block;float: left;height: 200px;position: relative;}
  .product .productOne{background-size: 300px 200px;background-repeat: no-repeat;}
  .product .productOne:first-child{border-top-left-radius: 38px;}
  .product .productOne:last-child{border-bottom-right-radius: 38px;}
  .product .productOne a{height: 200px;}
  .product .productOne .abs{position: absolute;color:#fff;top:30px;left:22px;display: block;opacity: 0;pointer-events: none;}
  .product .productOne .center{left:15%;width:70%;text-align: center;}
  .product .productOne .abs h4{font-size: 24px;line-height: 30px;}
  .product .productOne .abs p{font-size: 14px;line-height: 30px;}
  .product .productOne a:hover +div{display: block;-webkit-animation:op 1s forwards;animation:op 1s forwards;}
  @-webkit-keyframes op{0%{opacity: 0;}5%{opacity: 0;}100%{opacity: 1;}}
  @keyframes op{0%{opacity: 0;}5%{opacity: 0;}100%{opacity: 1;}}
  
  .girls .product{height: 365px;}
  .girls .product .productOne{height: 365px;background-size: 300px 365px;}
  .girls .product .productOne a{height: 365px;}
  .girls .product .productOne .center p{margin-top:30px;}
</style>
