<template>
    <div class="temp">
        <div class="mui-content" style="background-color:#fff">
            <ul class="mui-table-view mui-grid-view">
                <li v-for="item in goodsData" class="mui-table-view-cell mui-media mui-col-xs-6">
                    <router-link v-bind='{to:"/goodsdetail/"+item.id}'>
                        <img class="mui-media-object" :src="item.img">
                        <div class="mui-media-body info">
                            {{item.name}}
                            <div class="price">
                            折扣价:<span>¥{{item.z}}</span>
                            销售价:<del>¥{{item.x}}</del>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .price{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
    .info{
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        height: 40px;
    }
</style>

<script type="text/ecmascript-6">
    import common from '../../tool/Common'
    export default {
        data(){
            return {
                goodsData:[
                    {
                        img:'../../images/0-1.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:0,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-2.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:1,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-3.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:2,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-4.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:3,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-3.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:2,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-4.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:3,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-3.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:2,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-4.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:3,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-4.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:3,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-3.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:2,
                        z:11111,
                        x:22222
                    },
                    {
                        img:'../../images/0-4.jpg',
                        name:'幸福就是可以一起睡觉',
                        id:3,
                        z:11111,
                        x:22222
                    }
                ]
            }
        },
        created(){
//            this.getGoodsListData(1)
        },
        methods:{
            getGoodsListData(number){
                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}?${number}`;
                this.$http.get(url).then(
                    res=>{
                        this.goodsData = res.body.message
                    },
                    err=>{
                        console.log(err);
                    }
                )
            }
        }
    }
</script>