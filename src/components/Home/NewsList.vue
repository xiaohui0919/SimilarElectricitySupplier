<template>
    <div class="temp">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsListData" :key="index">
                <router-link v-bind='{to: "/newsinfo/"+item.id}'>
                    <img class="mui-media-object mui-pull-left" :src="item.screenshot">
                    <div class="mui-media-body">
                        {{ item.title }}
                        <p class='otitle'>
                            发布时间：{{ item.createdAt | filter('YYYY-MM-DD HH:mm:ss')}}
                            <span>点击量：{{ item.id }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .otitle{
        display: flex;
        /*子元素在主轴上的对齐方式*/
        justify-content: space-between;
    }
</style>

<script type="text/ecmascript-6">
    import common from '../../tool/Common'
    export default {
        data(){
            return {
                newsListData:[
                    {
                        "id":1,
                        "objectId": "5a293e6b51882535c56cd065",
                        "description": "内容运营/技术编辑招聘",
                        "startedAt": "2017-12-07T16:00:00.000Z",
                        "type": "url",
                        "title": "内容运营/技术编辑招聘",
                        "relatedObjectId": null,
                        "url": "https://xitu.io/jobs?utm_source=web_banner",
                        "position": "hero",
                        "screenshot": "https://user-gold-cdn.xitu.io/1512652340700b95b0b6606113e157880867c5a7108cd.jpg",
                        "platform": "web",
                        "endedAt": "2017-12-10T16:00:00.000Z",
                        "createdAt": "2017-12-07T13:13:15.494Z",
                        "updatedAt": "1970-01-01T00:00:00.Z",
                        "osTime": "2017-12-08T05:27:33.278Z"
                    },
                    {
                        "id":2,
                        "objectId": "5a264fdc5188252da0534922",
                        "description": "腾讯云开发者专属在线实验平台",
                        "startedAt": "2017-12-07T16:00:00.000Z",
                        "type": "url",
                        "title": "腾讯云开发者专属在线实验平台",
                        "relatedObjectId": null,
                        "url": "https://cloud.tencent.com/developer/labs?fromSource=gwzcw.700582.700582.700582",
                        "position": "hero",
                        "screenshot": "https://user-gold-cdn.xitu.io/1512460193715b7541f68b934dcd0df768d5f6461875e.jpg",
                        "platform": "web",
                        "endedAt": "2017-12-11T16:00:00.000Z",
                        "createdAt": "2017-12-05T07:50:52.211Z",
                        "updatedAt": "1970-01-01T00:00:00.Z",
                        "osTime": "2017-12-08T05:27:33.278Z"
                    },
                    {
                        "id":3,
                        "objectId": "5a264fdc5188252da0534922",
                        "description": "腾讯云开发者专属在线实验平台",
                        "startedAt": "2017-12-07T16:00:00.000Z",
                        "type": "url",
                        "title": "腾讯云开发者专属在线实验平台",
                        "relatedObjectId": null,
                        "url": "https://cloud.tencent.com/developer/labs?fromSource=gwzcw.700582.700582.700582",
                        "position": "hero",
                        "screenshot": "https://user-gold-cdn.xitu.io/1512460193715b7541f68b934dcd0df768d5f6461875e.jpg",
                        "platform": "web",
                        "endedAt": "2017-12-11T16:00:00.000Z",
                        "createdAt": "2017-12-05T07:50:52.211Z",
                        "updatedAt": "1970-01-01T00:00:00.Z",
                        "osTime": "2017-12-08T05:27:33.278Z"
                    }
                ]
            }
        },
        created(){
//           this.getNewsListData()
        },
        mothods:{
            getNewsListData(){
                // 请求当前页面的数据
                // url的创建
                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}`
                this.$http.get(url).then(
                    res=>{
                        this.newsListData=res.body.message
                    },
                    err=>{
                        console.log(err);
                    }
                )
            }
        }
    }
</script>