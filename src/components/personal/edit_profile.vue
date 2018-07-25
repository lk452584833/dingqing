<template>
    <div class='property'>
        <ul class="title">
            <li v-for="(item,index) in title" v-text="item.name" @click="changeTab(index,index)" :class="$store.state.editPage==index?'active':''"></li>
        </ul>
        <div class="list">
            <!-- 修改资料 -->
            <div class="profile" v-if="$store.state.editPage==0">
                <input type="text" name="" v-model="$store.state.userInfo.username" :disabled="isChange"> <button @click="changeProfile()">{{isChange?'修改资料':'提交修改'}}</button>
            </div>
            <!-- 修改密碼 -->
            <div class="password" v-if="$store.state.editPage==1">
                <form action="">
                    <!-- 头部提示 -->
                    <p>您的登录用户名是<span v-text="$store.state.userInfo.username"></span>，密码可以用6-20位英文字母、数字和"-"，但下划线不能再最后</p>
                    <div><em>邮箱：</em><input type="text" name="email"></div>
                    <div><em>原密码：</em><input type="password" name="old_psw"></div>
                    <div><em>新密码：</em><input type="password" name="new_psw"></div>
                    <div><em>确认密码：</em><input type="password" name="confirm_psw"></div>
                </form>
            </div>
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
                title:[
                    {name:'修改资料'},{name:'修改密码'}],
                isChange:true
            }
        },
        methods:{
            changeTab(number,index){
                this.$store.state.editPage=number;
                location.hash='personal?edit='+index;
            },
            changeProfile(){
                this.isChange=!this.isChange;
                if(this.isChange){
                    console.log(this.isChange);
                }
            }
        },
        created(){
        },
        mounted(){
            var that=this;
        }
    }
</script>
<style scoped lang="less">
    .property{height: 832px;width: 898px;float: right;background-color: #fff;padding: 78px 0 0 58px;position: relative;
        /* 标题 */
        >.title{position: absolute;left:58px;top:78px;z-index: 3;
            >li{width: 108px;height: 39px;float: left;margin-right: 8px;border: 1px solid #e3e3e3;font-size: 14px;line-height: 39px;text-align: center;background-color: #f7f7f7;cursor: pointer;}
            >li.active{border-bottom: 1px solid #fff;background-color: #fff;}
        }
        /* 内容页 */
        >.list{clear:both;width:686px;height:388px;border:1px solid #e3e3e3;position: absolute;left:58px;top:116px;z-index: 2;
            /* 第一页修改资料 */
            >.profile{

            }
            /* 第二页修改秘密 */
            >.password{
               >form{
                   /* 头部提示 */
                   >p{font-size: 14px;color: #a1a1a1;margin-top: 50px;text-align: center;height: 44px;line-height: 44px;
                       >span{color:#fe2472;font-size: 14px;}
                   }
                   /* 修改密码 */
                   >div{margin-top: 18px;margin-left: 50px;
                       >em{width: 100px;text-align: right;display: block;float: left;font-size: 16px;height:32px;line-height: 32px;}
                       >input{background-color: #fafafa;border: 1px solid #e5e5e5;height: 32px;width: 270px;padding-left: 10px;}
                   }
                   
               }
            }
        }
    }
</style>