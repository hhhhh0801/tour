<template>
    <div class="register">
        <div class="header  ">
            <div class="content">
                <img src="@/assets/logo/3.png" alt="">
                <h2>智慧旅游平台</h2>
            </div>
        </div>
        <div class="register_bg">
            <div class="register_form">
                <h4 style="text-align: center;">用户注册</h4>
                <el-form :model="ruleForm" status-icon  :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <el-form-item prop="phone">
                        <el-input  v-model="ruleForm.phone" placeholder="手机号"  autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="ruleForm.password" placeholder="密码" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword">
                        <el-input type="password" v-model="ruleForm.confirmPassword" placeholder="确认密码" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item  >
                        <el-button type="primary" style="width: 100%">注册</el-button>
                        <div class="my_link" @click="goLogin">已有账号，请登录</div>
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
		var checkPhone = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('手机号不能为空'));
			} else {
				const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				console.log(reg.test(value));
				if (reg.test(value)) {
					callback();
				} else {
					return callback(new Error('请输入正确的手机号'));
				}
			}
		};
		var checkConfirmPass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.ruleForm.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		return{
			ruleForm: {
				phone: '',
				password: '',
				confirmPassword: ''

			},
			rules: {
				phone: [
					{validator: checkPhone, trigger: 'change'}
				],
				password: [
					{required: true, message: '请输入密码', trigger: 'blur'},
					{min: 6, max: 16, message: '长度在 6 到 16 个字符'}
				],
				confirmPassword: [
					{required: true, validator: checkConfirmPass, trigger: 'blur'}
				]
			}
		};
	},
	methods: {
		goLogin(){
			this.$router.push({path: '/login'});
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

    .register_bg{
        background: url('../assets/bg.jpg') center no-repeat;
        background-size: auto 100% ;
        height: 500px;
        position: relative;


    }
    .register_form{
        width: 300px;
        position: absolute;
        top:50%;
        left:75%;
        transform: translate(-50%,-50%);
        background: rgba(255,255,255,.8);
        padding:15px 30px;
    }



</style>
