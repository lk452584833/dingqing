 <template>
  <header>
    <div class="fixed">
    	<div class="headerLimit" style="height:44px">
    		<div class="welcome">欢迎来到定情网！</div>
    		<div class="link">
    		  <router-link to="">登陆</router-link>
    		  <router-link to="">注册</router-link>
          <img src="../../assets/images/tel.png" alt="">
          <span v-text="telephoneNumber"></span>
    		</div>
      </div>
      <div class="headerLimit" style="height:88px">          
        <div class="second">
            <div class="logo"></div>
            <div class="title">
              <span v-for="(item,index) in titles" :class="titleIndex==index?'active':''" @click="titleIndex=index">
                <router-link :to="item.url" v-text="item.title" :class="titleIndex==index?'active':''"></router-link>
                <b></b>
              </span>
            </div>
        </div>
      </div>
    </div>    
  </header>
</template>

<script>
  export default {
    data(){
      return {		    
        titleIndex:0,
        titles:[
          {title:"首页",url:"/#"},
          {title:"热卖",url:"/#"},
          {title:"产品1",url:"/#"},
          {title:"产品2",url:"/#"},
          {title:"产品3",url:"/#"},
          {title:"个人主页",url:"/#"}
        ],
        telephoneNumber:'400-400-666666'
      }
    },
    methods:{

    },
    created(){

    },
    mounted(){

    },
    watch:{
      
    }
  }
</script>

<style scoped>
	header{width: 100%;height: 132px;}
  .fixed{width: 100%;height: 44px;line-height: 44px;background: #eee;}
	.headerLimit{width: 12rem;margin:0 auto;}
	.welcome{width: 30%;float: left;height: 44px;text-align: left;font-size: .16rem;}
	.link{float: right;height: 44px;}
	.link>a{float: left;color:#979899;font-size: .16rem;padding: 0 .1rem;}
  .link>span{padding-left:.1rem;width: 2rem;display:block;height: 44px;line-height: 44px;float: right;font-size: .16rem;color:#979899;}
  .link>img{padding-top: .09rem;}
  .second{height: 88px;}
  .logo{float:left;background: url(../../assets/images/logo.png) center no-repeat;height: .88rem;width: .88rem;background-size: 66px 66px;margin-right: .4rem;}
  .title{float: right;margin-right: .8rem;}
  .title>span{width: 1rem;float: left;height: 60px;margin-top: 28px;margin-right: 20px;}
  .title>span>a{color:#000;text-align: center;height:28px;line-height: 28px;font-size: 18px;width: 100%;}
  .title>span>a.active{font-weight: bold;color:#d00;}
  .title>span:hover{border-bottom: 3px solid #24cbdf;}
  .title>span.active{border-bottom: 3px solid #24cbdf;}
  .title>span>b{height: 20px;width: 100%;background: url(../../assets/images/tobottom.png) center no-repeat;font-size: 18px;}
</style>
