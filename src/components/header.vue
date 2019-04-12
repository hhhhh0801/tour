<template>
    <div class="header">
        <div class="content">
            <el-row>
                <el-col :span="6"><img src="@/assets/4.jpg" alt="" class="headPic"></el-col>
                <el-col :span="12" style="line-height: 60px;">
                    <el-input placeholder="请输入内容" v-model="input4" >
                        <el-button type="primary"  slot="append" icon="el-icon-search">搜索</el-button>
                    </el-input>
                </el-col>
                <el-col :span="6"><img src="@/assets/4.jpg" alt="" class="headPic float"></el-col>
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
	}
};
</script>

<style scoped>
    .header{
        background: aliceblue;
    }
    .headPic{
        width:60px;
        height: 60px;
        border-radius: 50%;
    }
    .float{
        float: right;
    }
</style>
