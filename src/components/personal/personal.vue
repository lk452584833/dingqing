<template>
    <div class="personal">
        <personalHeader></personalHeader>
        <section>
            <div class="current"><a href="">首页></a><a href="">个人中心</a></div>
            <div class="left">
                <personalIndex></personalIndex>
            </div>
            <div class="right" ref='right'>
                <personalOrder  v-if="$root.personalHref=='#/personal?order'"></personalOrder>
                <personalCarts  v-if="$root.personalHref=='#/personal?cart'"></personalCarts>
                <!-- <personalProperty  v-if="$root.personalHref=='#/personal?property'"></personalProperty> -->
                <personalEditProfile v-if="$root.personalHref.slice(0,-2)=='#/personal?edit'"></personalEditProfile>
            </div>
        </section>
        <personalFooter></personalFooter>
    </div>    
</template>
<script>
    import personalHeader from './header'
    import personalFooter from './footer'
    import personalIndex from './index'
    import personalOrder from './order'
    import personalCarts from './shopping_cart'
    import personalEditProfile from './edit_profile'
    import store from '../../store/userInfo.js'
    // import personalProperty from './property'
    export default{
        store,
        components:{personalHeader,personalFooter,personalIndex,personalOrder,personalCarts,personalEditProfile},
        data(){
            return{
            }
        },
        mounted() {
            let that=this;
            window.onhashchange=function() {
                that.$root.personalHref=location.hash;
                if(that.$root.personalHref.slice(0,-2)=='#/personal?edit')that.$store.state.editPage=location.hash.slice(location.hash.length-1,location.hash.length);
            }
        },
        methods:{            
        },
        created() {
            this.$root.personalHref=location.hash;
        }
    }
</script>
<style lang="less" scoped>
    .personal{background-color: #f2f2f2;
        >section{height: 1012px;width: 1210px;margin:0 auto;padding-top: 58px;
            .current{width: 100%;height: 64px;line-height: 64px;
                >a{float: left;color:#666;font-size: 14px;}
            }
            .left{height: 832px;width: 294px;background-color: #fff;float: left;}
            .right{height: 832px;width: 898px;float: right;background-color: #fff;}
        }
    }
</style>
