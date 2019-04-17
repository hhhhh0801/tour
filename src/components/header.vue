<template>
    <div class="header">
        <div class="content">
            <el-row>
                <el-col :span="6">
                    <div class="logo" @click="goHome">
                        <img src="@/assets/logo/3.png" alt="" class="headPic">
                        <h3>智慧旅游</h3>
                    </div>
                </el-col>
                <el-col :span="12" style="line-height: 60px;">
                    <el-input placeholder="请输入内容" v-model="input4" >
                        <el-button type="primary"  slot="append" icon="el-icon-search" @click="goSearch">搜索</el-button>
                    </el-input>
                </el-col>
                <el-col :span="6">
                    <el-button round   class="login" @click="goLogin">登录</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
	data(){
		return{
			input4: ''
		};
	},
	methods: {
		goLogin(){
			this.$router.push({path: '/login'});
		},
		goHome(){
			this.$router.push({path: '/'});
		},
		goSearch(){
			this.$router.push({path: '/search'});
		}
	}
};
</script>

<style scoped>
    .header{
        background: aliceblue;
        padding: 5px;
    }
    .headPic{
        width:60px;
        height: 60px;
        border-radius: 50%;
    }
    .login{
        position: absolute;
        right: 0;
        top:50%;
        transform: translate(0,-50%);
        color:#0067ac;
    }
     h3{
         position: absolute;
         : 12px;
         left: 260px;
         color: #0067ac;
         margin: 0;
         top: 17px;
         left: 70px;
    }
    .logo{
        cursor: pointer;
    }


</style>
