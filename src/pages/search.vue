<template>
    <div class="spot">
        <Header></Header>
        <div class="content">
            <el-card class="box-card" shadow="hover">
                <el-row class="detail" :gutter="20">
                    <el-col :span="5"><img src="@/assets/11.jpg" alt=""></el-col>
                    <el-col :span="15"><div class="d_title d_marg">九寨沟套峨眉乐山/银钻三天九寨沟黄龙峨眉乐山纯玩2天7日游</div>
                        <div class="d_comment d_marg"><el-tag type="warning" size="small">0条评论</el-tag></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="right">
                            <div class="price d_marg" style="text-align: center;">￥33</div>
                            <el-button type="primary" size="medium">点击查看</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
            <el-card class="box-card" shadow="hover">
                <el-row class="detail" :gutter="20">
                    <el-col :span="5"><img src="@/assets/11.jpg" alt=""></el-col>
                    <el-col :span="15"><div class="d_title d_marg">九寨沟套峨眉乐山/银钻三天九寨沟黄龙峨眉乐山纯玩2天7日游</div>
                        <div class="d_comment d_marg"><el-tag type="warning" size="small">0条评论</el-tag></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="right">
                            <div class="price d_marg" style="text-align: center;">￥33</div>
                            <el-button type="primary" size="medium">点击查看</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
            <el-card class="box-card" shadow="hover">
                <el-row class="detail" :gutter="20">
                    <el-col :span="5"><img src="@/assets/11.jpg" alt=""></el-col>
                    <el-col :span="15"><div class="d_title d_marg">九寨沟套峨眉乐山/银钻三天九寨沟黄龙峨眉乐山纯玩2天7日游</div>
                        <div class="d_comment d_marg"><el-tag type="warning" size="small">0条评论</el-tag></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="right">
                            <div class="price d_marg" style="text-align: center;">￥33</div>
                            <el-button type="primary" size="medium">点击查看</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-card>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/header';
import Footer from '@/components/footer';
export default {
	components: {
		Header,
		Footer
	},
	data(){
		return{
		};
	}
};
</script>

<style scoped>
    .content{
        padding: 1em;
    }
    .detail img{
        width: 100%;
        height: 150px;
        margin-right: 20px;
    }
    .box-card{
        margin-top: 0.5em;
    }
    .d_title{
        font-size: 1.17em;
        font-weight: bold;
    }
    .d_marg{
        margin-bottom: 10px;
    }
    .right{
        position: absolute;
        top:50%;
        transform: translate(0,-50%);
    }



</style>
