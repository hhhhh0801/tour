<template>
    <div class="spot">
        <el-row :gutter="20">
            <el-col :span="6" v-for="(o) in 4" :key="o">
                <el-card :body-style="{ padding: '0px' }"  >
                    <img src="@/assets/4.jpg" class="image">
                    <div style="padding: 14px;">
                        <span>苏州一日游</span>
                        <div class="bottom ">
                            <span class="price">￥33</span>
                            <el-button type="text" class="button" @click="goSpot">查看详情</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
	name: 'spot',
	methods: {
		goSpot(){
			this.$router.push({path: '/spot'});
		}
	}
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

</style>
