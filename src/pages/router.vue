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
                            <p>出发地：四川省成都市</p>
                            <p>旅游天数：三天两夜</p>
                            <p>
                                <el-tag size="medium " >美食</el-tag>
                                <el-tag size="medium ">豪华酒店</el-tag>
                            </p>

                        </div>
                    </el-col>
                </el-row>
            </el-card>

            <div class="detail">

                <div >
                    <h2>简要行程</h2>
                    <el-card class="box-card" style="font-size: 14px;">
                        沟口乘车---原始森林乘车---箭竹海观倒影走栈道或乘车---熊猫海乘车---五花海乘车---珍珠滩走栈道看完瀑布后走栈道至镜海停车场乘车---诺日朗旅游服务中心乘车---长海步行---五彩池乘车---诺日朗瀑布乘车---老虎海走栈道---树正瀑布、水磨房步行至树正群海走栈道---火花海乘车---芦苇海乘车---盆景滩乘车---宝镜岩乘车---出沟
                    </el-card>
                </div>

                <div >
                    <h2>费用标准</h2>
                    <el-card class="box-card">
                        <div class="text item">
                            <span>交通：</span><span>全程正规空调旅游车，每人一个正座，确保车况良好，干净卫生，司机服务态度好</span>
                        </div>
                        <div class="text item">
                            <span>住宿：</span><span>全程正规空调旅游车，每人一个正座，确保车况良好，干净卫生，司机服务态度好</span>
                        </div>
                        <div class="text item">
                            <span>餐标：</span><span>全程正规空调旅游车，每人一个正座，确保车况良好，干净卫生，司机服务态度好</span>
                        </div>
                        <div class="text item">
                            <span>门票：</span><span>全程正规空调旅游车，每人一个正座，确保车况良好，干净卫生，司机服务态度好</span>
                        </div>
                    </el-card>
                </div>
                <div >
                    <h2>行程安排</h2>
                    <el-card class="box-card">
                        <el-timeline >
                            <el-timeline-item timestamp="第一天" placement="top" type="primary " size="large" icon="el-icon-star-on">
                                <el-card shadow="never">
                                    <h4>成都—汶川—川主寺或九寨沟</h4>
                                    <p class="font_14px">早上成都指定时间与地点集合，一路沿岷江逆流而上，途径汶川、茂县、松潘，（沿途可看到藏族、羌族的独特民居、碉楼等建筑物，观赏1933地震遗迹---叠溪海子。）午餐后乘车抵达川主寺或九寨沟入住。晚餐后参加走进藏家活动，品尝当地手抓肉及爽口的青稞酒、酥油茶。（此项目已含，由于客人自身原因或者是不可抗拒的客观因素导致不能参加不退费、也不支持等价交换）。</p>
                                    <img src="@/assets/11.jpg" alt="" style="height: 350px;">
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="第二天" placement="top" type="primary " size="large" icon="el-icon-star-on">
                                <el-card shadow="never">
                                    <h4>成都—汶川—川主寺或九寨沟</h4>
                                    <p class="font_14px">早上成都指定时间与地点集合，一路沿岷江逆流而上，途径汶川、茂县、松潘，（沿途可看到藏族、羌族的独特民居、碉楼等建筑物，观赏1933地震遗迹---叠溪海子。）午餐后乘车抵达川主寺或九寨沟入住。晚餐后参加走进藏家活动，品尝当地手抓肉及爽口的青稞酒、酥油茶。（此项目已含，由于客人自身原因或者是不可抗拒的客观因素导致不能参加不退费、也不支持等价交换）。</p>
                                    <img src="@/assets/11.jpg" alt="" style="height: 350px;">
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="第三天" placement="top" type="primary " size="large" icon="el-icon-star-on">
                                <el-card shadow="never">
                                    <h4>成都—汶川—川主寺或九寨沟</h4>
                                    <p class="font_14px">早上成都指定时间与地点集合，一路沿岷江逆流而上，途径汶川、茂县、松潘，（沿途可看到藏族、羌族的独特民居、碉楼等建筑物，观赏1933地震遗迹---叠溪海子。）午餐后乘车抵达川主寺或九寨沟入住。晚餐后参加走进藏家活动，品尝当地手抓肉及爽口的青稞酒、酥油茶。（此项目已含，由于客人自身原因或者是不可抗拒的客观因素导致不能参加不退费、也不支持等价交换）。</p>
                                    <img src="@/assets/11.jpg" alt="" style="height: 350px;">
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
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
    .item span{
        font-size: 14px;
    }
    .item span:nth-child(1){
        color:orangered;
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
