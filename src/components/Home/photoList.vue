<template>
    <div class="temp">
        <ul>
            <li v-for="item in listData">
                {{ item.SceneName }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

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
                ]
            }
        },
        created(){
//           this.getPhotolistData()
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
            }
        }
    }
</script>