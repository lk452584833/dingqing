 <template>
  <footer>
    <div class="navigation">          
        <div class="title">
            <span >
              <router-link v-for="item in foot_list" :to="item.url" v-text="item.title"></router-link>      
            </span>
        </div>
    </div>
    <div class="contect">
      <p>Copyright © {{fullYear}}无锡定情网有限公司版权所有</p>
      <p>客服电话：400-0000-0000</p>
    </div>
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        fullYear:(new Date()).getFullYear(),
        foot_list:[
          {title:'首页',url:'/'},
          {title:'关于我们',url:'/'},
          {title:'客服',url:'/'},
          {title:'合作伙伴',url:'/'},
          {title:'每日推荐',url:'/'}
        ]
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
	footer{text-align: center;}
  .navigation{height: .6rem;background-color: #24cbdf;}
  .title{margin: 0 auto;}
  .title span{display: inline-block;height: .6rem;line-height: .6rem;padding-top: .21rem;}
  .title span a{float: left;height: .18rem;font-size: .16rem;line-height: .18rem;color:#fff;padding:0 11px;border-left: #fff 2px solid;text-align: center;}
  .title span a:first-child{border-left:none;}
  .contect{height: 1.2rem;padding-top: .36rem;width: 12rem;margin:0 auto;}
  .contect p{color:#8d8d8d;font-size: 16px;}
</style>
