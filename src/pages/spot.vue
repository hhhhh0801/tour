<template>
    <div class="spot">
        <Header></Header>
        <div class="content">
            <el-card class="box-card" shadow="never">
                <el-row :gutter="20">
                    <el-col :span="12"><div class="image" id="no_mb"><img src="@/assets/21.jpg" alt=""></div></el-col>
                    <el-col :span="12">
                        <div class="spot_info">
                            <h2>西岭雪山</h2>
                            <h2 class="price">￥320<span style="color: #999;font-size: 16px;">起</span></h2>
                            <p>0条评论</p>
                            <p>景点地址：四川省成都市大邑县西岭镇邛崃山脉中段</p>
                            <p>
                                <el-tag size="medium " >打折</el-tag>
                                <el-tag size="medium ">团购</el-tag>
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </el-card>

            <div class="detail">
                <div class="tickets">
                    <h2>门票信息</h2>
                    <el-card class="box-card">
                        <div  class="text item d_flex border_b">
                            <span>成人票</span>
                            <span><el-tag size="small" style="margin-right: 1em;" type="warning">7.5折</el-tag><el-tag size="small" type="warning">学生/老人半价</el-tag></span>
                            <span class="price_c" >￥33</span>
                        </div>
                    </el-card>
                </div>
                <div class="introduce">
                    <h2>景点信息</h2>
                    <el-card class="box-card">
                        <div class="text">
                            <h3>景点简介</h3>
                            <p>拙政园，中国四大名园之一，坐落于中国著名的历史文化名城的江苏省苏州市平江区，是苏州四大古名园之一，国家5A级旅游景区，全国特殊旅游参观点，被誉为“中国园林之母”，被列入《世界文化遗产名录》，堪称中国私家园林经典。拙政园的建园艺术以水见长，自然典雅，庭院错落，花木为胜。今园辖地面积约八十三点五亩，开放面积约七十三亩，其中园林中部、西部及晚清张之万住宅（今苏州园林博物馆旧馆）为晚清建筑园林遗产，约三十八亩。拙政园是江南园林的代表，全园以水为中心，山水萦绕，厅榭精美，花木繁茂，充满诗情画意，具有浓郁的江南水乡特色。花园分为东、中、西三部分，东花园开阔疏朗，中花园是全园精华所在，西花园建筑精美，各具特色。园南为住宅区，体现典型江南民居多进的格局。园南还建有苏州园林博物馆。</p>
                        </div>
                        <div class="time">
                            <h3>开放时间</h3>
                            <p>11-16～02-28：07:30～16:30开放；</p>
                            <p>11-16～02-28：07:30～16:30开放；</p>

                        </div>
                        <div class="images">
                            <img src="@/assets/11.jpg" alt="">
                            <div class="image_info_bg"></div>
                            <div class="image_info">
                                <p>云岩禅寺</p>
                                <p style="font-size: 14px;">有仙则名，水不在深，有龙则灵。虎丘名胜古迹很多，其中较为有名的就有18处，故有虎丘18景之称。虎丘原名海涌山，因为在远古时期这里是一片汪洋大海，点点绿岛矗立，其中虎丘山*为矮小，每当潮起潮落，虎丘也就若沉若浮、若隐若现，所以称为“海涌山”。</p>
                            </div>
                        </div>
                        <div class="images">
                            <img src="@/assets/11.jpg" alt="">
                            <div class="image_info_bg"></div>
                            <div class="image_info">
                                <p>云岩禅寺</p>
                                <p style="font-size: 14px;">有仙则名，水不在深，有龙则灵。虎丘名胜古迹很多，其中较为有名的就有18处，故有虎丘18景之称。虎丘原名海涌山，因为在远古时期这里是一片汪洋大海，点点绿岛矗立，其中虎丘山*为矮小，每当潮起潮落，虎丘也就若沉若浮、若隐若现，所以称为“海涌山”。</p>
                            </div>
                        </div>
                        <div class="images">
                            <img src="@/assets/11.jpg" alt="">
                            <div class="image_info_bg"></div>
                            <div class="image_info">
                                <p>云岩禅寺</p>
                                <p style="font-size: 14px;">有仙则名，水不在深，有龙则灵。虎丘名胜古迹很多，其中较为有名的就有18处，故有虎丘18景之称。虎丘原名海涌山，因为在远古时期这里是一片汪洋大海，点点绿岛矗立，其中虎丘山*为矮小，每当潮起潮落，虎丘也就若沉若浮、若隐若现，所以称为“海涌山”。</p>
                            </div>
                        </div>

                    </el-card>
                </div>
                <div class="comment">
                    <h2>客户评论</h2>
                    <el-card class="box-card">

                        <div class="submit_comment">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 2, maxRows: 4}"
                                    placeholder="请输入内容"
                                    v-model="textarea3">
                            </el-input>
                            <el-button type="primary" class="f_right">发表评论</el-button>
                        </div>

                        <div class="user_comment">
                            <div class="user_img">
                                <img src="@/assets/23.jpg" alt="">
                                <div class="user_name">
                                    <span>mary</span>
                                    <span style="color: #999;margin-left: 20px;">2018-03-12</span>
                                </div>
                            </div>
                            <div class="user_text">
                                虎丘是苏州一个独立的景区，远看像一座山离市区不是很远，是非常值得一逛的苏州景区之一，全程步行的话整个景区需要约五小时的游程，进入景区后也可以选择坐一段观光车，和苏州的其它景区一样这里主打的也是园林加古典建筑，不同的是由于建筑在山丘的顶上所以有了登高的寓意，门票价格也相对合理，本人比较推荐。
                            </div>
                        </div>
                        <div class="user_comment">
                            <div class="user_img">
                                <img src="@/assets/23.jpg" alt="">
                                <div class="user_name">
                                    <span>mary</span>
                                    <span style="color: #999;margin-left: 20px;">2018-03-12</span>
                                </div>
                            </div>
                            <div class="user_text">
                                虎丘是苏州一个独立的景区，远看像一座山离市区不是很远，是非常值得一逛的苏州景区之一，全程步行的话整个景区需要约五小时的游程，进入景区后也可以选择坐一段观光车，和苏州的其它景区一样这里主打的也是园林加古典建筑，不同的是由于建筑在山丘的顶上所以有了登高的寓意，门票价格也相对合理，本人比较推荐。
                            </div>
                        </div>
                    </el-card>

                </div>

            </div>
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
			textarea3: ''
		};
	}
};
</script>

<style scoped>
    .content{
        padding: 1em;
    }
    .image img{
        width: 100%;
        height: 350px;
    }
    .images img{
        width: 100%;
        height: 350px;
        margin-bottom: 20px;
    }
    .spot_info p{
        color: #999;
    }
    .d_flex{
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    .time{
        margin-bottom: 2em;
    }
    .images {
        position: relative;
    }
    .image_info_bg{
        width: 200px;
        height: 350px;
        position: absolute;
        right: 0;
        top: 0;
        background-color: #000;
        opacity: .5;
        z-index: 0;
    }
    .image_info {
        padding: 1em;
        width: 150px;
        height: 350px;
        position: absolute;
        right: 0;
        top: 0;
        color: #fff;
        z-index: 1;
    }
    .f_right{
        float: right;
        margin: 20px 0;
    }
    .submit_comment::after{
        content: '';
        display: block;
        clear: both;
    }
    .user_img img{
        width: 50px;
        height:50px;
        border-radius: 50%;
    }
    .user_img{
        position: relative;
    }
    .user_name{
        position: absolute;
        left:60px;
        top:50%;
        transform: translate(0,-50%);
    }

    .user_comment{
        padding:1em 0;
        border-top: 1px dashed #ccc;
    }


</style>
