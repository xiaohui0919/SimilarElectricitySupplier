// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'
import App from './app.vue'

// 导入mint-ui框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入mui框架的css样式
import './statics/css/mui.min.css'

// 引入全局的css样式
import './root.css'

// 添加路由
import VueRouer from 'vue-router'
Vue.use(VueRouer)

// 添加vue-resource框架
import VueResource from 'vue-resource'
Vue.use(VueResource)

import moment from 'moment'
// 定义一个全局的过滤器（过滤时间）
Vue.filter('filter',function (input,fmtString) {
    return moment(input).format(fmtString)
})

// 引入图片位置预览功能的框架
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

// 引入自定义组件
import Home from './components/Home/Home.vue'
import Member from './components/Member.vue'
import Shopcar from './components/Shopcar.vue'
import Search from './components/Search.vue'
import NewsList from './components/Home/NewsList.vue'
import NewsInfo from './components/Home/NewsInfo.vue'
import PhotoList from './components/Home/photoList.vue'
import PhotoInfo from './components/Home/PhotoInfo.vue'
import GoodsList from './components/Home/GoodsList.vue'
import GoodsDetail from './components/Home/GoodsDetail.vue'
import GoodsDesc from './components/Home/GoodsDesc.vue'
import Comment from './components/Home/Comment.vue'


// 路由的实例化
var router = new VueRouer({
    linkActiveClass:'mui-active',
    routes:[
        {name:'root',path:'/',redirect:'/home'},//默认加载
        {name:'home',path:'/home',component:Home},
        {name:'member',path:'/member',component:Member},
        {name:'shopcar',path:'/shopcar',component:Shopcar},
        {name:'search',path:'/search',component:Search},
        {name:'newslist',path:'/newslist',component:NewsList},
        {name:'newsinfo',path:'/newsinfo/:id',component:NewsInfo},
        {name:'photolist',path:'/photolist',component:PhotoList},
        {name:'photoinfo',path:'/photoinfo/:id',component:PhotoInfo},
        {name:'goodslist',path:'/goodslist',component:GoodsList},
        {name:'goodsdetail',path:'/goodsdetail/:id',component:GoodsDetail},
        {name:'goodsdesc',path:'/goodsdesc',component:GoodsDesc},
        {name:'comment',path:'/comment',component:Comment}
    ]
})

new Vue({
    el:'#app',
    router,
    // 渲染方法，用于渲染app组件
    render:create=>create(App)
})
