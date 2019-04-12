<template>
  <div class="home">
      <Header></Header>
      <el-carousel height="300px" >
          <el-carousel-item >
              <img src="@/assets/1.jpg" alt="" class="img">
          </el-carousel-item>
          <el-carousel-item >
              <img src="@/assets/2.jpg" alt=""  class="img">
          </el-carousel-item>
          <el-carousel-item >
              <img src="@/assets/3.jpg" alt=""  class="img">
          </el-carousel-item>
      </el-carousel>
      <div class="content">
          <h2>热门线路</h2>
              <el-tabs v-model="activeLine" >
                  <el-tab-pane label="上海" name="line_first"><Lines></Lines></el-tab-pane>
                  <el-tab-pane label="北京" name="line_second">配置管理</el-tab-pane>
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
                              <span>￥33</span>
                              <el-button type="text" class="button">立即购买</el-button>
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
import Lines from '@/components/line';



export default {
	components: {
		Header,
		Footer,
		Spot,
		Lines
	},
	data(){
		return{
			activeLine: 'line_first',
			activeSpot: 'spot_first'

		};
	}
};
</script>

<style scoped>
    .img{
        width: 100%;
        height:100%;
    }
    /*.image{*/
        /*width: 100%;*/
        /*height:180px;*/


    /*}*/
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


    .bottom span{
        color:orangered ;
        font-size: 24px;
    }


</style>
