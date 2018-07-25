<template>
    <div class="personalHeader">
        <!-- 导航 -->
        <div class="navigator">
            <!-- 标题 -->
            <div class="title">
                <a v-for="item in title" :href="item.url" v-text="item.name"></a>
            </div>
            <!-- 搜索 -->
            <form class="search">
                <input type="text" name="search" id="">
                <button type="submit"></button>
            </form>
            <i></i>
            <!-- 注册登录 -->
            <div class="info">
                <a href="">登录</a>
                <a href="">注册</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:[//导航标题信息
                {name:'首页',url:'/'},{name:'关于我们',url:'/'},{name:'在线客服',url:'/'},{name:'合作伙伴',url:'/'}
                ]
        }
    },
    methods:{

    },
    created(){

    }
}
</script>

<style lang="less" scoped>
    .personalHeader{height: 60px;background-color: #179af0;width: 100%;
        >.navigator{width: 1210px;margin: 0 auto;height: inherit;line-height: 60px;
            >.title{float: left;width: 700px;margin-right: 150px;
                >a{float: left;font-size: 14px;color:#fff;width: 155px;text-align: center;}
            }
            >.search{width: 150px;background: transparent;float: left;padding-top: 15px;
                >input[type=text]{border:1px solid #d1ebfc;height: 30px;background: transparent;border-top-left-radius:30px;border-bottom-left-radius:30px;padding-left: 10px;width: 120px;float: left;border-right:0;}
                >button{background: url(../../assets/images/search.png) no-repeat center center;height: 30px;width: 30px;cursor: pointer;float: left;border:1px solid #d1ebfc;border-left: 0;border-top-right-radius: 30px;border-bottom-right-radius: 30px;}
            }
            >i{width: 1px;height: 12px;border:1px solid #bae1fb;background-color: #bae1fb;float: left;margin: 24px 14px;}
            >.info{height: inherit;width: 110px;float: left;padding-top: 15px;
                >a{font-size: 14px;color:#bae1fb;float: left;height: 28px;width: 55px;line-height: 28px;text-align: center;}
            }
        }
    }
    
</style>
