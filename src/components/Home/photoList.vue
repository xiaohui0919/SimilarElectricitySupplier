<template>
    <div class="temp">
        <div class="title">
            <ul>
                <li>
                    <a href="javascript:;" @click="getImageData(0)">全部</a>
                </li>
                <li v-for="item in listData">
                    <a href="javascript:;" @click="getImageData(item.id)">{{ item.SceneName }}</a>
                </li>
            </ul>
        </div>
        <div class="images">
            <ul>
                <li v-for="item in imagesData">
                    <img :src="item.img" alt="">
                    <div>
                        <p>{{ item.content }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    ul,li{
        padding: 0;
        margin: 0;
        list-style:none;
    }
    .title li{
        padding: 0 10px;
    }
    .title ul{
        display: flex;
    }
    .title {
        height: 40px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
    }
    .images img{
        width: 100%;
    }
</style>

<script type="text/ecmascript-6">
    import common from '../../tool/Common'
    export default {
        data(){
            return {
                listData:[
                    {
                        "SceneID": 1,
                        "SceneName": "毕业",
                        "SceneValue": 4,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 2,
                        "SceneName": "交友",
                        "SceneValue": 5,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 3,
                        "SceneName": "婚恋",
                        "SceneValue": 6,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 4,
                        "SceneName": "购房",
                        "SceneValue": 7,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 6,
                        "SceneName": "育儿",
                        "SceneValue": 7,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 7,
                        "SceneName": "职场",
                        "SceneValue": 6,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 8,
                        "SceneName": "兴趣",
                        "SceneValue": 6,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 9,
                        "SceneName": "文化艺术",
                        "SceneValue": 7,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 10,
                        "SceneName": "旅行",
                        "SceneValue": 7,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 11,
                        "SceneName": "投资",
                        "SceneValue": 7,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 12,
                        "SceneName": "理财",
                        "SceneValue": 7,
                        "CreateTime": "2017-09-12 13:40:55"
                    },
                    {
                        "SceneID": 13,
                        "SceneName": "汽车",
                        "SceneValue": 10,
                        "CreateTime": "2017-09-12 13:40:55"
                    }
                ],
                imagesData:[
                    {
                        id:1,
                    img:"https://mmbiz.qpic.cn/mmbiz_png/9Bxribich1tvxC3ompbHNVwVs5K3EWLiaTLjlTXNMj1VfgRsTp6xXGUFKoF078rsj8HQaDPPAk5RUMJEBX83ribZibQ/0?wx_fmt=png",
                    content:"在国外，真正的精英从小接受的教育并不是我们想象的素质教育。从小学开始，这些精英讨论的问题都是这种：“在伯罗奔尼撒战争中，雅典的公民做对了什么，又做错了什么？伯利克里作为雅典的领袖，做对了什么，又做错了什么？”"
                },
                    {
                        img:"https://mmbiz.qpic.cn/mmbiz_png/9Bxribich1tvxC3ompbHNVwVs5K3EWLiaTLjlTXNMj1VfgRsTp6xXGUFKoF078rsj8HQaDPPAk5RUMJEBX83ribZibQ/0?wx_fmt=png",
                        content:"在国外，真正的精英从小接受的教育并不是我们想象的素质教育。从小学开始，这些精英讨论的问题都是这种：“在伯罗奔尼撒战争中，雅典的公民做对了什么，又做错了什么？伯利克里作为雅典的领袖，做对了什么，又做错了什么？”"
                    },
                    {
                        img:"https://mmbiz.qpic.cn/mmbiz_png/9Bxribich1tvxC3ompbHNVwVs5K3EWLiaTLjlTXNMj1VfgRsTp6xXGUFKoF078rsj8HQaDPPAk5RUMJEBX83ribZibQ/0?wx_fmt=png",
                        content:"在国外，真正的精英从小接受的教育并不是我们想象的素质教育。从小学开始，这些精英讨论的问题都是这种：“在伯罗奔尼撒战争中，雅典的公民做对了什么，又做错了什么？伯利克里作为雅典的领袖，做对了什么，又做错了什么？”"
                    },
                    {
                        img:"https://mmbiz.qpic.cn/mmbiz_png/9Bxribich1tvxC3ompbHNVwVs5K3EWLiaTLjlTXNMj1VfgRsTp6xXGUFKoF078rsj8HQaDPPAk5RUMJEBX83ribZibQ/0?wx_fmt=png",
                        content:"在国外，真正的精英从小接受的教育并不是我们想象的素质教育。从小学开始，这些精英讨论的问题都是这种：“在伯罗奔尼撒战争中，雅典的公民做对了什么，又做错了什么？伯利克里作为雅典的领袖，做对了什么，又做错了什么？”"
                    }
                ]
            }
        },
        created(){
//           this.getPhotolistData()
//            this.getImageData(0)
        },
        methods:{
            getPhotolistData(){
                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}`
                this.$http.get(url).then(
                    res=>{
                        this.listData=res.body.message
                    },
                    err=>{
                        console.log(err);
                    }
                )
            },
            getImageData(id){
                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}${id}`
                this.$http.get(url).then(
                    res=>{
                        this.imagesData=res.body.message
                    },
                    err=>{
                        console.log(err)
                    }
                )
            }
        }
    }
</script>