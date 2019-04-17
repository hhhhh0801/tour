<template>
    <div class="spot">
        <Header></Header>
        <div class="content">
            <el-card class="box-card" shadow="never">
                <el-row :gutter="20">
                    <el-col :span="12"><div class="image" id="no_mb"><img src="@/assets/1.jpg" alt=""></div></el-col>
                    <el-col :span="12">
                        <div class="spot_info">
                            <h2 style="margin-top: 0;">title</h2>
                            <p>性别：男</p>
                            <p>擅长语言：普通话</p>
                            <p>从业年限：8年</p>
                            <p>服务地区：
                                <el-tag size="small" >云南</el-tag>
                                <el-tag size="small">苏州</el-tag>
                            </p>
                            <p>0条评论</p>
                            <p>Q Q咨询：2765007365</p>
                            <h2 class="price">￥320<span style="color: #999;font-size: 16px;">/天</span></h2>
                            <el-button  class="buy_btn" >立即预定</el-button>

                        </div>
                    </el-col>
                </el-row>
            </el-card>

            <div class="detail">
                <div >
                    <h2>自我介绍</h2>
                    <el-card class="box-card" style="font-size: 14px;">
                        亲爱的游客朋友们您们好，我是土生土长的白族小伙，大家都叫我【阿鹏哥】。我已在云南从事旅游业6年多，从导游接待到旅游策划、从过去云南购物团到现在的品质纯玩，我一路下来见证了云南旅游环境和品质个性需求 的彻底提升。今后的时间，我也应该不断强化服务，用专业的讲解，回馈给游客更好的旅行体验。
                    </el-card>
                </div>
                <div >
                    <h2>服务详情</h2>
                    <el-card class="box-card" style="font-size: 14px;">
                        <ul>
                            <li>【导游向导】为您提供张家界+凤凰的导游服务，熟悉张家界国家森林公园（黄石寨、金鞭溪、袁家界、天子山、十里画廊、杨家界等）、宝峰湖、黄龙洞、张家界大峡谷、天门山、猛洞河漂流、芙蓉镇、凤凰古城、红石林、坐龙峡等等湘西片旅游景区的相关导游工作，我们都是持有国家正规导游证的导游员；</li>
                            <li>【旅游包车】可以提供张家界一地旅游包车，张家界+凤凰古城旅游包车，长沙接送至张家界、凤凰旅游包车等等旅游包车服务，和正规旅游车队合作，可以提供5-45座等多种车型；</li>
                            <li>【行程规划】我们可以根据你们的一些实际情况免费为您量身定制一套属于你们的旅游方式和套餐，帮您合理规划旅游行程，给您省心、省力、省钱；</li>
                            <li>【酒店预订】张家界大小酒店、特色客栈、各类宾馆，我们可以为您精心挑选性价比最高的住宿标准，避免您自己对景区不熟悉而不知道该把住宿定在哪里的困境；</li>
                            <li>【门票预订】我们能够以相对优惠的价格给您预订各大景区的门票，避免您自己订票、排队取票的困境，我们订票，我们导游都负责帮您取票；</li>
                            <li>【美食服务】推荐当地最具特色的餐厅和菜品，让您品味湘西美味，不进黑店。<br></li>
                        </ul>





                    </el-card>
                </div>

                <div >
                    <h2>价格说明</h2>
                    <el-card class="box-card">
                        <ul>
                            <li>包含：向导服务费。</li>
                            <li>费用不含：景点门票、餐宿和其他私人消费、如异地住宿导游房补每天100元。</li>
                            <li>超出费用需在服务结束前现付导游。</li>
                        </ul>

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
    .spot_info p{
        font-size: 14px;
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
    li{
    list-style: decimal;
    }


</style>
