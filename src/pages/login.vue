<template>
    <div class="login">
        <div class="header  ">
            <div class="content">
                <img src="@/assets/logo/3.png" alt="">
                <h2>智慧旅游平台</h2>
            </div>
        </div>
       <div class="login_bg">
           <div class="login_form">
               <h4 style="text-align: center;">用户登录</h4>
               <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="0px" class="demo-ruleForm">
                   <el-form-item
                       prop="account"
                       :rules="[
                           { required: true, message: '账号不能为空'},
                       ]"
                   >
                       <el-input type="tel" v-model="ruleForm.account" placeholder="账号"  autocomplete="off"></el-input>
                   </el-form-item>
                   <el-form-item
                       prop="password"
                       :rules="[
                           { required: true, message: '密码不能为空', trigger: 'blur'},
                           { min: 6, max: 16, message: '长度在 6 到 16 个字符'}
                       ]"
                   >
                       <el-input type="password" v-model="ruleForm.password" placeholder="密码" autocomplete="off"></el-input>
                   </el-form-item>
                   <el-form-item  prop="password">
                       <el-button type="primary" style="width: 100%" @click="goHome">登录</el-button>
                       <div class="my_link" @click="goRegister">没有账号，免费注册</div>
                   </el-form-item>
               </el-form>
           </div>

       </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer';
export default {
	components: {
		Footer
	},
	data(){
		return{
			ruleForm: {
				account: '',
				password: ''

			}
		};
	},
	methods: {
		goRegister(){
			this.$router.push({path: '/register'});
		},
		goHome(){
			this.$router.push({path: '/'});
		}
	}

};
</script>

<style scoped>
    .header{
        padding: 5px 0;
        background: aliceblue;
    }
    .header img{
        width: 80px;
    }
    .header h2{
        position: absolute;
        top: 12px;
        left: 260px;
        color: #0067ac;
    }

    .login_bg{
        background: url('../assets/bg.jpg') center no-repeat;
        background-size: auto 100% ;
        height: 500px;
        position: relative;


    }
    .login_form{
        width: 300px;
        position: absolute;
        top:50%;
        left:75%;
        transform: translate(-50%,-50%);
        background: rgba(255,255,255,.8);
        padding:15px 30px;
    }



</style>
