<template>
    <div class="temp">
        <!--添加轮播组件-->
        <Lunbo :lunboData="swipeDate"></Lunbo>
        <!--添加基本信息-->
        <div class="title">
            <h4>{{infoData.b}}</h4>
            <div class="price">
                市场价：¥{{infoData.j}}
                <div>
                    销售价：<del>¥{{infoData.s}}</del>
                </div>
            </div>
            <div class="count">
                购买数量：
                <Number v-on:send="getNumber"></Number>
            </div>
            <div class="button">
                <mt-button type="primary" size="small" >立即购买</mt-button>
                <mt-button type="danger" size="small" @click="goToCart">加入购物车</mt-button>
            </div>
        </div>
        <!--商品信息-->
        <div class="info">
            商品信息：
            <ul>
                <li>商品货号：{{infoData.sp}}</li>
                <li>库存情况：{{infoData.kc}}</li>
                <li>商品时间：{{infoData.date | filter('YYYY-MM-DD')}}</li>
            </ul>
        </div>
        <div class="buttons">
            <mt-button plain type="primary" size="large" @click="goToDesc">图文介绍</mt-button>
            <mt-button class="btn" plain type="danger" size="large" @click="goToComment">商品评论</mt-button>
        </div>
    </div>
</template>

<style>
    .btn{
        margin-top: 5px;
    }
    .info{
        color: rgba(0,0,0,.5);
        padding: 5px;
    }
    .info li{
        list-style: none;
    }
    .title h4{
        text-align: center;
        color: orangered;
    }
    .price , .count , .button{
        display: flex;
        justify-content: space-around;
        color: rgba(0,0,0,.7);
    }

</style>

<script>
    import Lunbo from '../sub/Lunvo.vue'
    import common from '../../tool/Common'
    import Number from '../sub/Number.vue'
    import {setItem} from '../../tool/LocalStorageHelper'
    export default{
        data(){
            return {
                swipeDate: [
                    {
                        img: '../../images/0-1.jpg'
                    },
                    {
                        img: '../../images/0-2.jpg'
                    },
                    {
                        img: '../../images/0-3.jpg'
                    },
                    {
                        img: '../../images/0-4.jpg'
                    }
                ],
                infoData:{
                    id:0,
                    j:1111,
                    s:2222,
                    b:'哈哈哈',
                    sp:'SD4411165151',
                    kc:60,
                    date:new Date()
                },
                subNumber:1
            }
        },
        props: ['id'],
        components: {
            Lunbo,
            Number
        },
        created(){
            var id = this.$route.params.id
//            this.getLunData(id)
//            this.getInfoData(id)
        },
        methods: {
            // 加入购物车方法的触发
            goToCart(){
                // 1.小球动画

                // 2.更改值

                // 3.存入数据库 要存的数据有：id、number
                var id = this.$route.params.id
                var data={
                    'goodsid':id,
                    'count':this.subNumber
                }
                setItem(data)
            },

            // 获取子组件发来的数据
            getNumber(number){
                this.subNumber=number
            },

            // 去往图文详情
            goToDesc(){
                var id = this.$route.params.id
                this.$router.push({
                    name:'goodsdesc',
                    params:{id:id}
                })
            },
            // 去往评论页面
            goToComment(){
                var id = this.$route.params.id
                this.$router.push({
                    name:'comment',
                    params:{id:id}
                })
            },
            // 请求当前页面轮播图的数据
            getLunData(id){
                var url = `${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}/${id}`;
                this.$http.get(url).then(
                    res => {
                        this.swipeDate = res.body.message
                    },
                    err => {
                        console.log(err);
                    }
                )
            },
            // 获取当前页面中基本信息
            getInfoData(id){
                var url = `${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}/${id}`;
                this.$http.get(url).then(
                    res => {
                        this.infoData = res.body.message
                    },
                    err => {
                        console.log(err);
                    }
                )
            }
        }
    }
</script>