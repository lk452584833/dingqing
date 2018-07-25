<template>
    <div class='order'>
        <ul class="title">
            <li v-for="(item,index) in title" v-text="item.name" @click="changeTab(index,item.url)" :class="activeIndex==index?'active':''"></li>
        </ul>
        <div class="list">
            <div class="info4" v-if="activeIndex==3">
                <dl v-for="item in done">
                    <dt>
                        <p v-text="item.time"></p>
                        <s>用户名</s>
                        <i>支付金额</i>
                        <b></b>
                    </dt>
                    <dd>
                        <p>{{item.model}}</p>
                        <s v-text="item.username"></s>
                        <i>￥{{item.pay.toFixed(2)}}</i>
                        <b><a :href="item.url">订单详情</a></b>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                title:[
                    {name:'全部订单',url:'1'},{name:'等待付款',url:'2'},{name:'已付款',url:'3'},{name:'交易完成',url:'4'},
                    ],
                activeIndex:0,
                done:[
                    {time:'2018-06-20   19:30:20',model:"2018年度狗年大拜年",username:"对对对",pay:120,url:'/ddd'}
                ]
            }
        },
        methods:{
            changeTab(number,url){
                this.activeIndex=number;
                // this.axios.get(url).then(res=>{
                //     console.log(res.data)
                // })
                }
        },
        created(){
            
        },
        mounted(){
            
        }
    }
</script>
<style scoped lang="less">
    .order{height: 832px;width: 898px;float: right;background-color: #fff;padding: 78px 0 0 58px;position: relative;
        /* 标题 */
        >.title{position: absolute;left:58px;top:78px;z-index: 3;
            >li{width: 108px;height: 39px;float: left;margin-right: 8px;border: 1px solid #e3e3e3;font-size: 14px;line-height: 39px;text-align: center;background-color: #f7f7f7;cursor: pointer;}
            >li.active{border-bottom: 1px solid #fff;background-color: #fff;}
        }
        /* 内容页 */
        >.list{clear:both;width:686px;height:388px;border:1px solid #e3e3e3;position: absolute;left:58px;top:116px;z-index: 2;
            /* 第四页内容 */
            >.info4{padding:42px 60px 0 33px;width: 682px;
                >dl{height: 98px;
                    >dt{height: 25px;background-color: #f5f5f5;
                        >*{line-height: 25px;text-align: center;}
                    }
                    >dd{height: 73px;border:1px solid #f5f5f5;
                        >*{line-height: 73px;text-align: center;}
                    }
                    p{width: 315px;height:inherit;border-right: 1px solid #f5f5f5;float: left;}
                    s{width:77px;height:inherit;border-right: 1px solid #f5f5f5;float: left;}
                    i{width:77px;height:inherit;border-right: 1px solid #f5f5f5;float: left;}
                    b{width:118px;height: inherit;float: left;}
                }
            }
        }
    }
</style>