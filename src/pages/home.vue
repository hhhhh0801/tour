<template>
    <div class="home">
        <Header></Header>
        <el-carousel height="380px" >
            <el-carousel-item >
                <img src="@/assets/home/bg1.jpg" alt="" class="img">
            </el-carousel-item>
            <el-carousel-item >
                <img src="@/assets/home/bg2.jpg" alt=""  class="img">
            </el-carousel-item>
            <el-carousel-item >
                <img src="@/assets/home/bg3.jpg" alt=""  class="img">
            </el-carousel-item>
        </el-carousel>
        <div class="content">
            <h2>热门线路</h2>
            <el-tabs v-model="activeLine" >
                <el-tab-pane label="上海" name="line_first"><Router></Router></el-tab-pane>
                <el-tab-pane label="北京" name="line_second">配置管理</el-tab-pane>
                <el-tab-pane label="苏州" name="line_three">配置管理</el-tab-pane>
                <el-tab-pane label="杭州" name="line_four">配置管理</el-tab-pane>
                <el-tab-pane label="四川" name="line_five">配置管理</el-tab-pane>
                <el-tab-pane label="重庆" name="line_six">配置管理</el-tab-pane>
                <el-tab-pane label="云南" name="line_seven">配置管理</el-tab-pane>
                <el-tab-pane label="兰州" name="line_eight">配置管理</el-tab-pane>
                <el-tab-pane label="西安" name="line_nine">配置管理</el-tab-pane>
                <el-tab-pane label="青海" name="line_ten">配置管理</el-tab-pane>


            </el-tabs>


            <h2>热门景点</h2>
            <el-tabs v-model="activeSpot" >
                <el-tab-pane label="国内" name="spot_first"><Spot></Spot></el-tab-pane>
                <el-tab-pane label="国外" name="spot_second">配置管理</el-tab-pane>
            </el-tabs>
            <h2>导游</h2>
            <el-row :gutter="20">
                <el-col :span="6" v-for="(o) in 4" :key="o" >
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="@/assets/21.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>苏州一日游</span>
                            <div class="bottom ">
                                <span class="price">￥33</span>
                                <el-button type="text" class="button" @click="goGuide">查看详情</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>
        <Footer></Footer>
    </div>

</template>

<script>
import Header from '@/components/header';
import Footer from '@/components/footer';
import Spot from '@/components/spot';
import Router from '@/components/router';



export default {
	components: {
		Header,
		Footer,
		Spot,
		Router
	},
	data(){
		return{
			activeLine: 'line_first',
			activeSpot: 'spot_first'


		};
	},
	methods: {
		goGuide(){
			this.$router.push({path: '/guide'});
		}

	}

};
</script>

<style scoped>
    .img{
        width: 100%;
        height:100%;
    }
    h2{
        margin-bottom: 0;
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }


</style>
