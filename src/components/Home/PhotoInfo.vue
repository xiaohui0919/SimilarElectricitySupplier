<template>
    <div class="temp">
        <div class="title">
            <h3>{{photoInfoData.Title}}</h3>
            <div class="otitle">
                <div>
                    {{photoInfoData.Status}}次浏览
                </div>
                分类：经济民生
            </div>
            <lg-preview class="preview"></lg-preview>
            <div class="images">
                <!--九宫格添加-->
                <div class="mui-content">
                    <ul class="mui-table-view mui-grid-view mui-grid-9">
                        <li v-for="item in photoImagesDate" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <img :src="item.img" v-preview="item.img" class="img">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content">
                <p v-html="photoInfoData.Content"></p>
            </div>
            <!--评论部分-->
            <Discuss :discussID="sendID"></Discuss>
        </div>
    </div>
</template>

<style scoped=>
    .temp{
        margin-bottom: 50px;
    }

    .img{
        width: 55px;
        height: 55px;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
    .preview{
        position: absolute;
        left: 0;
        top: 0;
    }
    .title h3{
        color: #2AC845;
        text-align: center;
    }
    .otitle{
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        color: rgba(1,1,1,.4);
    }
</style>

<script type="text/ecmascript-6">
    import common from '../../tool/Common'
    // 提示
    import { Toast } from 'mint-ui'

    import Discuss from '../sub/Discuss.vue'
    export default {
        data(){
          return {
              photoInfoData:{
                  "ScoreInfo": {},
                  "Title": "2018年，一起做时代的英雄",
                  "Abstract": "8万校友，在这里等待最有梦想的你。",
                  "SceneName": "职场",
                  "Category": "",
                  "Resource": 1,
                  "Tag": "",
                  "Content": "<p style=\"white-space: normal; text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(136, 136, 136); font-size: 14px; font-family: 微软雅黑;\">只有7%的人能摆脱出身阶级的束缚，他们是时代的英雄。</span></p><p style=\"white-space: normal; text-align: right; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(136, 136, 136); font-size: 14px; font-family: 微软雅黑;\">&nbsp;&nbsp;&nbsp;——英国纪录片《56up》</span></p><p style=\"text-align: center; line-height: 1.75em;\"><img style=width:100% data-s=\"300,640\" data-type=\"png\" data-src=\"https://mmbiz.qpic.cn/mmbiz_png/9Bxribich1tvxC3ompbHNVwVs5K3EWLiaTLjlTXNMj1VfgRsTp6xXGUFKoF078rsj8HQaDPPAk5RUMJEBX83ribZibQ/0?wx_fmt=png\" data-copyright=\"0\" class=\"\" data-ratio=\"0.625\" data-w=\"1920\" style=\"text-align: justify; display: inline-block; visibility: visible; width: auto; height: auto;\" src=\"http://img4.qcdqcdn.com/group4/M00/7E/88/QQ0DAFoMBGmAen7aAAJk4LQVFjU884.jpg\" id=\"img1\"/></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">在国外，真正的精英从小接受的教育并不是我们想象的素质教育。从小学开始，这些精英讨论的问题都是这种：“在伯罗奔尼撒战争中，雅典的公民做对了什么，又做错了什么？伯利克里作为雅典的领袖，做对了什么，又做错了什么？”</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">他们从小就站在和普通人不一样的角度去看待这个世界。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"font-size: 14px; font-family: 微软雅黑;\"><strong><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(51, 51, 51);\">阶级的固化，从“教育”就已经开始。</span></strong></span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">在中国，阶级跃迁的“窄门”其实并未关闭。很多朋友会给自己的孩子报费用几万元的补习班，让孩子拼命的学习，内心里想让孩子去完成阶级跃迁。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">但是，你的孩子跨越阶级的概率其实和你没什么区别，那么为何不把努力的机会留给自己，给孩子一个更轻松的起点？</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">你说：我想努力，但是从来没有人告诉我，要怎么努力才能穿过窄门？</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">在中国这个世界上最生机勃勃的经济体，最新的商业成功者都是通过创新获得超高回报从而实现阶级跃迁。你的人生有更高的创新力，才有可能实现跃迁，而创新力来自创新者的思考。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">你可能会问，创新能被“教育”吗？</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">混沌大学创办人李善友曾在他的课上讲到这么一个细节：很多人问贝索斯，未来十年什么会变化？贝索斯说，这是一个重要的问题，但<strong>更重要的一个问题是，什么是不变的？</strong></span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"font-size: 14px; font-family: 微软雅黑;\"><strong><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(51, 51, 51);\">要把所有的资源all in在不变的事情上。</span></strong></span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">在创新创业中，唯一的不变，就是变。如果战略就是舍九取一，那我们以变为本，背后的支撑就是这样的一个字：<strong><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(214, 168, 65);\">新</span></strong></span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">所以，我们从200多人的大名单里，精选出了在这个时点上最具商业创新力的12个人，组成了2018年一季度课表。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">这其中每一个人都是或即将成为带领独角兽的商业领袖，每个人都有足够多的故事打动世人。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">但是，这些最有故事的商业领袖，在混沌不会讲他们的创业故事，而是<strong>跟大家讲背后的道理；讲他们在“创业的伯罗奔尼撒战争”里，做对了什么，又做错了什么；讲他们思考问题的那个思维模型，以及他们在实战中总结出的方法论。</strong></span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">每个人都可以从他们的抉择中，找到自己的影子。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"font-size: 14px; font-family: 微软雅黑;\"><strong><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(51, 51, 51);\">前两天我跟一位餐饮业的前辈聊天，他非常成功但也非常惶恐。他说越来越多的年轻人正在进入餐饮行业，从供应链到菜品的开发，再到与顾客的沟通，都是一套全新的思维，完全是重新在定义这个行业的核心问题。</span></strong></span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">“唯一能不输的办法，就是学习他们行事的道理。”</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"font-size: 14px; font-family: 微软雅黑;\"><strong><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(51, 51, 51);\">是的，我们相信</span></strong><strong><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(214, 168, 65);\">凡事背后必有道理。</span></strong></span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"font-size: 14px; font-family: 微软雅黑;\"><strong><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(51, 51, 51);\">2018年，混沌大学，试图为你解码背后的道理，和你一起作时代的英雄。</span></strong></span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">这里已经聚集了8万高端校友，他们是这个时代最有梦想的人，在等你一起来做时代的英雄。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">对于看完篇内容的同学，混沌君感觉到你要进入窄门的决心了，所以悄悄告诉你：2018年1月1日起，混沌学费要调整到1200元。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\">但是对勤奋的你，现在不但价格1000元不变，还有如下4重福利：</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\"><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(214, 168, 65); text-align: justify;\"></span><strong style=\"color: rgb(214, 168, 65); text-align: justify; white-space: normal;\">&nbsp;</strong> <strong>第1重</strong>：老同学续费1年，延长1个月学籍+500研值，多次续费上不封顶。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\"><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(214, 168, 65); text-align: justify;\"></span><strong style=\"color: rgb(214, 168, 65); text-align: justify; white-space: normal;\">&nbsp; </strong><strong>第2重</strong>：老同学邀请新同学加入混沌大学，老同学可以获得1个月学籍+500研值（可无限叠加）。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\"><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(214, 168, 65); text-align: justify;\"></span><strong style=\"color: rgb(214, 168, 65); text-align: justify; white-space: normal;\">&nbsp; </strong><strong>第3重</strong>：新同学入学，立即获赠1个月学籍延长。</span></p><p style=\"text-align: justify; margin-left: 16px; margin-right: 16px; line-height: 1.75em;\"><span style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 微软雅黑;\"><span style=\"font-family: 微软雅黑; font-size: 14px; color: rgb(214, 168, 65); text-align: justify;\"><strong>&nbsp;</strong></span><strong style=\"color: rgb(214, 168, 65); text-align: justify; white-space: normal;\"></strong><strong>第4重</strong>：放心邀请朋友加入混沌大学吧——新同学入学1个月内，不满意全额退款。</span></p>",
                  "ArticleID": 654935,
                  "Status": 2006,
                  "Score": 7.56,
                  "SerialID": -2,
                  "SerialName": "",
                  "XyAttr": 1,
                  "OperateInfo": [
                      {"OperateTime": "2017-11-17 17:23:06"}
                  ]
              },
              photoImagesDate:[
                  {img:'http://img.hb.aicdn.com/380533e59fed767ee4f658e14eb0c1290812de501a769-Ro8nCh_sq320'},
                  {img:'http://img.hb.aicdn.com/380533e59fed767ee4f658e14eb0c1290812de501a769-Ro8nCh_sq320'},
                  {img:'http://img.hb.aicdn.com/380533e59fed767ee4f658e14eb0c1290812de501a769-Ro8nCh_sq320'},
                  {img:'http://img.hb.aicdn.com/380533e59fed767ee4f658e14eb0c1290812de501a769-Ro8nCh_sq320'},
                  {img:'http://img.hb.aicdn.com/380533e59fed767ee4f658e14eb0c1290812de501a769-Ro8nCh_sq320'},
                  {img:'http://img.hb.aicdn.com/380533e59fed767ee4f658e14eb0c1290812de501a769-Ro8nCh_sq320'}
              ],
              sendID:0
          }
        },
        components:{
            Discuss
        },
        props:['id'],
        created(){
            var id = this.$route.params.id

//            this.getInfoData(id)
//            this.getImageData(id)
            this.sendID=id
        },
        methods:{

            //请求info页面的文字部分
            getInfoData(id){
                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}/${id}`;
                this.$http.get(url).then(
                    res=>{
                        this.photoInfoData=res.body.message
                    },
                    err=>{
                        console.log(err);
                    }
                )
            },
            //请求当前页面的图片部分
            getImageData(id){
                var url=`${common.HTTP}${common.SAMPLE_BUFFERS}:${common.PORT}/${id}`;
                this.$http.get(url).then(
                    res=>{
                        this.photoImagesDate=res.body.message
                    },
                    err=>{
                        console.log(err);
                    }
                )
            }
        }
    }
</script>