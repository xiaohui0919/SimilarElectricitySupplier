<template>
    <div class="temp">
        <div class="shop_s" v-for="item in shopcarData">
            <div class="image">
                <img :src="item.img" alt="">
            </div>
            <div class="info">
                <h4>{{item.title}}</h4>
                <div class="info_b">
                    <div>
                        购买数量：{{item.s}}
                    </div>
                    <div class="price">
                        售价：{{item.sell_price}}
                    </div>
                    <div>
                        <a href="javascript:;">删除</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .image img{
        width: 40%;
    }
    .info_b,.shop_s {
        display: flex;
        justify-content: space-between;
    }
    .image{
        flex: 1;
    }
    .info{
        flex: 2;
    }
</style>

<script>
    import common from '../tool/Common'
    import {getItem} from '../tool/LocalStorageHelper'
    export default {
        data(){
            return {
                shopcarData:[
                    {
                        img:'../images/0-1.jpg',
                        sell_price:100,
                        title:'skjfkjds',
                        s:222
                    }
                ]
            }
        },
        created(){
//            this.getShopCarData()
        },
        methods:{
            getShopCarData(){
                // 访问数据库，从里面取出数据
                var array=getItem;
                var message={}
                array.forEach(item=>{
                    if(message[item.goodsid]==item.goodsid){
                        // 对象中存在和遍历的item相等的goodsid值
                        var tempNumber = message[item.goodsid]
                        tempNumber +=item.count
                        message[item.goodsid] = tempNumber
                    }else {
                        // 对象中不存在和遍历的item相等的goodsid值
                        message[item.goodsid]=item.count
                    }
                })
                var tempArray=[]
                for (var key in message){
                    tempArray.push(key)
                }
                var ids=tempArray.join(',')

                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}/${ids}`
                this.$http.get(url).then(
                    res=>{
                        this.shopcarData=res.body.message
                    },
                    err=>{
                        console.log(err);
                    }
                )
            }
        }
    }
</script>