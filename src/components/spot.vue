<template>
    <div class="spot">
        <el-row :gutter="20">
            <el-col :span="6" v-for="(o) in 4" :key="o" >
                <el-card :body-style="{ padding: '0px' }">
                    <img src="@/assets/4.jpg" class="image">
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
</template>

<script>
export default {
	name: 'spot'
};
</script>

<style scoped>
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
