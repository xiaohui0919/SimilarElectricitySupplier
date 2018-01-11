<template>
    <div>
        <div class="mui-content" style="background-color:#fff">
            <h5 style="background-color:#efeff4">慢生活</h5>
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#">
                        <img class="mui-media-object" src="../../images/0-1.jpg">
                        <div class="mui-media-body">幸福就是可以一起睡觉</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#">
                        <img class="mui-media-object" src="../../images/0-2.jpg">
                        <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#"><img class="mui-media-object" src="../../images/0-3.jpg">
                        <div class="mui-media-body">Color of SIP CBD</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6">
                    <a href="#">
                        <img class="mui-media-object" src="../../images/0-4.jpg">
                        <div class="mui-media-body">静静看这世界</div></a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
    import common from '../../tool/Common'
    export default {
        data(){
            return {

            }
        },
        methods:{
            getGoodsListData(){
                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}`;
                this.$http.get(url).then(
                    res=>{

                    },
                    err=>{
                        console.log(err);
                    }
                )
            }
        }
    }
</script>