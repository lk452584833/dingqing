<template>
  <div class="shopping_cart">
    <!-- 商品列表 -->
    <div class="item_list clear">
      <!-- 标题 -->
      <h2>
        <!-- 勾选 -->
        <a class="checkItem">
          <label for=""><input type="checkbox" name="" :checked="all_checked" @click="changeAllChecked()"><span>全选</span></label>
        </a>
        <!-- 商品名 -->
        <b class="goods">商品</b>
        <!-- 单价 -->
        <i class="price">单价</i>
        <!-- 数量 -->
        <s class="number">数量</s>
        <!-- 操作 -->
        <u class="operation">操作</u>
      </h2>
      <!-- 商品详情 -->
      <p v-for="(item,name,index) in goods" v-if="item.in_cart">
        <!-- 勾选 -->
        <a class="checkItem">
          <input type="checkbox" name="" :checked="item.checked||all_checked" @click="changeChecked(name)">
        </a>
        <!-- 商品信息 -->
        <b class="goods">
          <img src="" alt="">
          <p class="name" v-text="item.name"></p>
        </b>
        <!-- 单价 -->
        <i class="price" v-text="'￥'+item.price.toFixed(2)"></i>
        <!-- 数量 -->
        <s class="number"><button @click="reduce(name)">-</button><input type="text" v-model="item.number" maxlength="3" class="numberInput" pattern="[0-9]{0,3}" @keyup="justNumber(name)"/><button @click="increase(name)">+</button></s>
        <!-- 操作 -->
        <u class="operation">
          <span @click="jionCollection(name)" v-text="item.collection?'已收藏':'加入收藏'" :title="item.collection?'点击移出收藏':'点击添加收藏'"></span>
          <span @click="deleteGoods(name)">删除商品</span>
        </u>
      </p>
    </div>
    <!-- 结算系统 -->
    <div class="bill">
      <div class="bill_top">
        <s class="checkItem">
          <label for=""><input type="checkbox" name="" :checked="all_checked" @click="changeAllChecked()"><span>全选</span></label>
        </s>
        <b class="delete_checked" @click="deleteChecked()">
          删除选中的商品
        </b>
        <a href="/" class="go_on_shopping">继续购物</a>
      </div>
      <div class="bill_center">
        商品总价￥{{total_price.toFixed(2)}}
      </div>
      <div class="bill_bottom">
        <span>结算金额：</span><b>(已免运费)</b><em>￥{{total_price.toFixed(2)}}</em>
        <button>结算</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        all_checked:true,
        total_price:0,
        goods:[{
          name:"420复古鞋",
          price:1000,
          number:2,
          checked:false,
          collection:false,
          in_cart:true
        },{
          name:"4399小游戏",
          price:1000,
          number:2,
          checked:false,
          collection:false,
          in_cart:true
        },{
          name:"4480影院",
          price:1000,
          number:2,
          checked:false,
          collection:false,
          in_cart:true
        }]
      }
    },
    methods:{
      changeChecked(name){
        this.goods[name].checked=!this.goods[name].checked;
        this.total_price=0;
        this.all_checked=true;//重新定义all_checked是为了防止一false永远false
        for(let item in this.goods){
          this.all_checked=this.all_checked&&this.goods[item].checked;
          if(this.goods[item].in_cart&&this.goods[item].checked)this.total_price+=(this.goods[item].price*this.goods[item].number);
        }
      },
      changeAllChecked(){
        this.all_checked=!this.all_checked;
        this.total_price=0;
        for(let item in this.goods){
          this.goods[item].checked=this.all_checked;
          if(this.goods[item].in_cart&&this.goods[item].checked)this.total_price+=(this.goods[item].price*this.goods[item].number);
        }
      },
      reduce(item){
        this.numberInput(item);
        if((this.goods[item].number==0)||(this.goods[item].number==1)){this.goods[item].number=1}
        else{this.goods[item].number--};
        this.totalPrice();
      },
      increase(item){
        this.numberInput(item);
        if(this.goods[item].number==0){this.goods[item].number=1}
        this.goods[item].number++;
        this.totalPrice();
      },
      jionCollection(item){
        this.goods[item].collection=!this.goods[item].collection;
      },
      deleteGoods(item){
        this.goods[item].in_cart=false;
        this.totalPrice();
      },
      justNumber(item){
        this.numberInput(item);
        if((this.goods[item].number==0)||(this.goods[item].number==1)){this.goods[item].number=1};
        this.totalPrice();
      },
      numberInput(item){
        if(typeof this.goods[item].number=='string')this.goods[item].number=this.goods[item].number.replace(/[^0-9]/g,'');
      },
      totalPrice(){
        this.total_price=0;
        for(let item in this.goods){
          if(this.goods[item].in_cart&&this.goods[item].checked)this.total_price+=(this.goods[item].price*this.goods[item].number);
        }
      },
      deleteChecked(){
        this.total_price=0;
        for(let item in this.goods){
          if(this.goods[item].checked)this.goods[item].in_cart=false;
          // if(this.goods[item].in_cart&&this.goods[item].checked)this.total_price+=(this.goods[item].price*this.goods[item].number);
        }
      }
    },
    mounted(){
      let that=this;
    },
    created(){
      this.all_checked=true;//重新定义all_checked是为了防止一false永false
      for(let item in this.goods){
        if(this.goods[item].in_cart&&this.goods[item].checked)this.total_price+=(this.goods[item].price*this.goods[item].number);
        this.all_checked=this.all_checked&&this.goods[item].checked;
      }
    }
  }
</script>

<style scoped lang="less">
  .shopping_cart{height: 832px;width: 806px;margin:0 auto;padding-top: 60px;
    /* 商品列表 */
    .item_list{
      /* 标题 */
      >h2{width: 100%;height: 50px;background-color: #8d8d8d;line-height:50px;
        >.checkItem{float: left;color:#fff;width: 100px;padding-left: 40px;font-size: 16px;
          >label{display: block;padding-left: 1px;
            >input{float: left;margin-top: 15px;width: 20px;height: 20px;}
            >span{display: block;float: left;font-size: 16px;margin-left: 5px;}
          }
        }
        /* 商品 */
        >.goods{text-align: center;font-size: 16px;color: #fff;float: left;width: 350px;}
        /* 单价 */
        >.price{color:#fff;float: left;width: 80px;text-align: center;font-size: 16px;}
        /* 数量 */
        .number{float: left;width: 100px;text-align: center;margin-left: 30px;font-size: 16px;color:#fff;}
        /* 操作 */
        .operation{float: left;width: 100px;text-align: center;margin-left: 30px;font-size: 16px;color:#fff;}
      }
      /* 物品列表 */
      >p{width: 100%;height: 100px;border:1px solid #e1e1e1;border-top: 0;background-color: #f0efef;
        /* 选择 */
        >.checkItem{float: left;color:#fff;width: 100px;padding-left: 40px;font-size: 16px;margin-top: 40px;
            >input{width: 20px;height: 20px;}
          }
        /* 商品信息 */
        >.goods{float: left;width: 350px;
          >img{width: 80px;height: 80px;border:1px solid #e1e1e1;display: block;margin-top:10px;float: left;margin-right: 20px;}
          >.name{float: left;color:#000;margin-top: 10px;font-size: 14px;}
        }
        /* 单价 */
        >.price{line-height: 100px;color:#000;float: left;width: 80px;text-align: center;font-size: 16px;}
        /* 数量 */
        >.number{color:#000;float: left;width: 100px;text-align: center;margin-left: 30px;font-size: 16px;
          >button{width: 30px;height: 30px;margin-top: 40px;background-color: #eee;border:1px solid #e1e1e1;font-size: 16px;float: left;cursor: pointer;line-height: 30px;}
          >input[type=text]{width: 30px;height: 30px;display:block;font-size: 14px;margin-top: 40px;border-top: 1px solid #e1e1e1;border-bottom: 1px solid #e1e1e1;float: left;line-height: 30px;color:#d00;text-align: center;}
        }
        /* 操作 */
        >.operation{float: left;width: 100px;text-align: center;margin-left: 30px;font-size: 16px;text-align: center;padding-top: 20px;
          >span{font-size: 14px;cursor: pointer;width: 100px;display: inline-block;line-height: 30px;}
        }
      }

    }
    /* 结算系统 */
    >.bill{width: 100%;height: 150px;background-color: #f0efef;margin-top: 14px;border:1px solid #e1e1e1;
      >.bill_top{margin:0 40px;height: 50px;border-bottom: 1px solid #e3e3e3;
        >.checkItem{float: left;color:#7d7d7d;width: 120px;font-size: 16px;
          >label{display: block;padding-left: 1px;
            >input{float: left;margin-top: 15px;width: 20px;height: 20px;}
            >span{display: block;float: left;font-size: 16px;margin-top: 13px;margin-left: 5px;}
          }
        }
        >.delete_checked{font-size: 16px;height: 50px;line-height: 50px;text-align: center;width: 150px;float: left;cursor: pointer;color:#7d7d7d}
        >.go_on_shopping{float: left;color:#7d7d7d;text-align: center;height: 50px;line-height: 50px;font-size: 16px;width: 150px;}
      }
      >.bill_center{margin:0 40px;height: 50px;border-bottom: 1px solid #e3e3e3;font-size: 16px;line-height: 50px;text-align: right;

      }
      >.bill_bottom{margin:0 40px;height: 50px;line-height: 50px;float: right;
        >span{font-size: 16px;color:#d00;display: block;float: left;}
        >b{font-size: 14px;color:#999;display: block;float: left;}
        >em{font-size: 16px;color:#d00;font-weight: bold;display: block;float: left;}
        >button{height: 30px;width: 100px;background-color: #e4014f;box-shadow: 2px 2px 5px #a7a6a6;line-height: 30px;font-size: 14px;color:#fff;border-radius: 3px;margin-left: 60px;cursor: pointer;}
      }
    }
  }

</style>