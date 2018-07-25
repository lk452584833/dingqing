<template>
    <div class='index'>
        <!-- 头像信息 -->
        <div class="profilePhoto">
            <dl>
                <!-- 头像图片 -->
                <dt><img src="../../assets/images/background.jpg" alt=""></dt>
                <dd>
                    <!-- 用户名 -->
                    <p>用户名：{{$store.state.user_name}}</p>
                    <!-- 用户群组 -->
                    <span v-text="$store.state.user_vip"></span>
                    <b></b>
                </dd>
            </dl>
        </div>
        <!-- 设置 -->
        <div class="config">
            <hgroup v-for="item in config">
                <!-- 设置分类 -->
                <h2 v-text="item.title" :style="{'background-image':'url('+item.background+')'}"></h2>
                <!-- 设置选项 -->
                <!-- router-link不跳转则获取不到hash的change，而a的href可以获取到 -->
                <a v-for="setItem in item.set" v-text="setItem.title"  :class="{'active':setItem.url==$root.personalHref}":href="setItem.url"></a>
            </hgroup>
        </div>
    </div>
</template>
<script>
    import store from '../../store/userInfo.js'
    export default {
        store,
        name: '',
        data () {
            return {
                /* 设置信息 */
                config:{
                    config01:{
                        title:"账号设置",
                        background:"static/img/personal_icon_01.png",
                        set:[
                            {title:"我的资产",url:"#/personal?property"},
                            {title:"个人资料",url:"#/personal?edit=0"},
                            {title:"修改密码",url:"#/personal?edit=1"}
                        ]
                    },
                    config02:{
                        title:"商品中心",
                        background:"static/img/personal_icon_02.png",
                        set:[
                            {title:"我的购物车",url:"#/personal?cart"},
                            {title:"我的收藏",url:"#/personal"}
                        ]
                    },
                    config03:{
                        title:"订单中心",
                        background:"static/img/personal_icon_03.png",
                        set:[
                            {title:"我的订单",url:"#/personal?order"},
                            {title:"地址管理",url:"#/personal"}
                        ]
                    },
                    config04:{
                        title:"积分管理",
                        background:"static/img/personal_icon_04.png",
                        set:[
                            {title:"我的积分",url:"#/personal"}
                        ]
                    },
                    config05:{
                        title:"消费记录",
                        background:"static/img/personal_icon_05.png",
                        set:[
                            {title:"我的账单",url:"#/personal"},
                            {title:"通知消息",url:"#/personal"},
                            {title:"我的评价",url:"#/personal"}
                        ]
                    }
                }
            }
        },
        methods:{
        },
        created(){
            // this.axios.get('http://127.0.0.1/PHP/LaoMan/data/config.php?data=man').then(res=>{
            //     this.$store.state.userInfo=res.data;
            // })
        },
        mounted(){
            
        }
    }
</script>
<style lang="less" scoped>
    .index{width: 294px;background: #fff;height: 832px;
        /* 头像信息 */
        >.profilePhoto{margin: 0 15px;border-bottom: 1px solid #e0e0e0;height: 120px;width: 264px;padding:30px 0 30px 25px;
            >dl{height: 59px;
                >dt{float: left;
                    >img{width: 59px;height: 59px;border-radius: 59px;}
                }
                >dd{float: left;margin-left: 12px;
                    >p{font-size: 14px;height: 34px;line-height: 34px;}
                    >span{display: block;height: 22px;width: 50px;background-color: #b83b3e;text-align: center;color: #fff;border-radius: 4px;font-size: 13px;line-height: 22px;}
                }
            }
        }
        /* 设置 */
        >.config{margin-left: 70px;    
            >hgroup{margin-top: 35px;
                >h2{font-size: 19px;color:#666;background-repeat:no-repeat;background-position: 0 center; width: 180px;text-align: center;font-size: 19px;color:#666;height: 39px;line-height: 39px;}
                >a{width: 180px;text-align: center;font-size:14px;color:#999;height: 24px;line-height: 24px;cursor: pointer;}
                >a.active{color:#333;font-weight: bold;text-shadow:0 0 3px #666}
            }
        }
    }
</style>