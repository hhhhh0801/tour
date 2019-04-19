<template>
    <div id="app">
        <router-view/>
        <div id="fixed_call" :class="{side_show: sideShow,side_hidden:!sideShow }" >
            <div class="fixed_call_title">
                <img src="@/assets/side-bg.jpg" alt="">
            </div>
            <ul class="fixed_call_content">
                <el-tooltip class="item" effect="dark" content="联系QQ：1805355810" placement="left">
                    <li><i class="fa fa-qq" aria-hidden="true"></i></li>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="电话联系：1805355810" placement="left">
                    <li><i class="fa fa-phone" aria-hidden="true"></i></li>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" placement="left-start">
                    <div slot="content" class="wechart"><img src="@/assets/logo/wechart.jpg" alt=""><br><p>关注微信</p></div>
                    <li ><i class="fa fa-wechat" aria-hidden="true"></i></li>
                </el-tooltip>

            </ul>
            <div class="go_top" @click="goTop">
                <i class="fa fa-angle-up" aria-hidden="true" style="font-size: 37px;"></i>
                <p style="font-size: 12px">TOP</p>
            </div>
            <div class="fixed_call_close" @click="sideToggle">
                <i class="fa fa-remove" aria-hidden="true"></i>
            </div>



        </div>
        <div id="fixed_call_block" :class="{side_block_show: !sideShow,side_block_hidden:sideShow }" @click="sideToggle">

        </div>
    </div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			fixedCall: false,
			sideShow: true
		};
	},
	methods: {
		goTop(){
			window.scrollTo(0, 0);
		},
		sideToggle(){
			this.sideShow = !this.sideShow;
		}
	}
};
</script>

<style scoped>
    #fixed_call{
        width: 36px;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 99999;
        background: #333;
        transition:right 1s;
    }
    .fixed_call_content{
        width: 36px;
        height: 240px;
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -120px;
        padding: 0;
    }
    .fixed_call_content li{
        list-style: none;
        text-align: center;
        color: #999;
        width: 22px;
        height: 20px;
        padding: 11px 7px;
        margin-top: -1px;
        cursor: pointer;
        position: relative;
    }
    .fixed_call_content li:hover{
        background: #fc6000;
        color: #fff;
    }
    .go_top{
        color: #999;
        width: 36px;
        height: 36px;
        position: absolute;
        left: 0;
        bottom: 85px;
        text-align: center;
        cursor: pointer;
    }
    .go_top p{
        margin: 0;
    }
    .go_top:hover{
        color: #fff;

    }
    .fixed_call_close{
        width: 36px;
        height: 36px;
        position: absolute;
        bottom: 18px;
        left: 0;
        cursor: pointer;
        text-align: center;
        font-size: 25px;
        color: #999;
    }
    .fixed_call_close:hover{
        transition: all ease-in-out .2s;
        transform: rotate(180deg);
        color: #fff;
    }
    .wechart img{
        width: 120px;
        height: 120px;
    }
    .wechart p{
        text-align: center;
    }
    #fixed_call_block{
        width: 62px;
        height: 52px;
        position: fixed;
        bottom: 20px;
        z-index: 999;
        cursor: pointer;
        background:url("./assets/logo/side-block.png");
        transition:right 1s;
    }
    .side_block_show,.side_show{
        right: 0;
    }
    .side_block_hidden,.side_hidden{
        right: -70px;

    }


</style>
