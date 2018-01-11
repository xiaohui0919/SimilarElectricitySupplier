<template>
    <div class="temp">
        <div class="discuss">
            <div class="submit">
                <div class="submittitle">
                    <h4>提交评论</h4>
                </div>
                <div class="optitle">
                    <textarea placeholder="请输入评论内容" red="textA"></textarea>
                    <mt-button type="primary" size="large" @click="postDiscuss">提交评论</mt-button>
                </div>
            </div>
        </div>
        <div class="show">
            <div class="showtitle">
                <h4>展示评论内容</h4>
                <ul>
                    <li v-for="item in discuss">
                        <div class="showcontent">
                            {{item.title}}
                        </div>
                        <div class="stitle">
                            <div>
                                {{item.name}}
                            </div>
                            {{item.time | filter('YYYY-MM-DD')}}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .show ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .show li{
        border-bottom: 1px solid rgba(1,1,1,.1);
        padding: 5px;
    }
    .stitle{
        font-size: 14px;
        color: rgba(1,1,1,.4);
        display: flex;
        justify-content: space-between;
    }
    .submit{
        padding: 5px;
    }
</style>

<script type="text/ecmascript-6">
    import common from '../../tool/Common'
    export default {
        data(){
            return {
                discuss:[
                    {
                        name:'撒加上可减肥1',
                        title:'啥分段函数房价多少',
                        time:new Date()
                    },
                    {
                        name:'撒加上可减肥2',
                        title:'啥分段函数房价多少',
                        time:new Date()
                    },
                    {
                        name:'撒加上可减肥3',
                        title:'啥分段函数房价多少',
                        time:new Date()
                    },
                    {
                        name:'撒加上可减肥4',
                        title:'啥分段函数房价多少',
                        time:new Date()
                    }
                ]
            }
        },
        props:['discussID'],
        created(){
//            this.getDiscussData(id)
        },
        methods:{
            // 发送评论数据
            postDiscuss(){
                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}/${this.discussID}`;
                var content=this.$refs.textA.value;

                if(!content||content.trim().length<=0){
                    Toast('提交评论不能为空');
                    return false;
                }

                this.$http.post(url,{content:content},{emulateJSON:true}).then(
                    res=>{
                        Toast('评论提交成功');
                        // 清空文本域的内容
                        this.$refs.textA.value='';
                        // 获取评论数据
                        this.getDiscussData(id)
                    },
                    err=>{
                        console.log(err);
                    }
                )
            },
            // 请求评论的数据
            getDiscussData(){
                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}/${this.discussID}:?pageindex=1`;
                this.$http.get(url).then(
                    res=>{
                        this.discuss=res.body.message
                    },
                    err=>{
                        console.log(err);
                    }
                )
            },
        }
    }
</script>