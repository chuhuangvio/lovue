import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import VueInstance from '@/views/vueInstance/VueInstance.vue'
import Computed from '@/views/computed/Computed.vue'
import Filter from '@/views/filter/Filter.vue'
import FormSubmit from '@/views/formSubmit/FormSubmit.vue'
import CustomerAction from '@/views/customerAction/customerAction.vue'
// 以 @ 符号方式引入，会自动从 scr 目录开始查找
import ComponentBasics from '@/views/componentBasics/ComponentBasics.vue'
import VueComponent from '@/views/vueComponent/VueComponent.vue'

// 加载 VueRouter 中间件
Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    // Vue 实例 demo
    {
        path: '/vueinstance',
        name: 'VueInstance',
        component: VueInstance
    },
    // 过滤器 demo
    {
        path: '/filter',
        name: 'Filter',
        component: Filter
    },
    // 组件基础 demo
    {
        path: '/componentBasics',
        name: 'ComponentBasics',
        component: ComponentBasics
    },
    // 单文件组件 demo
    {
        path: '/vueComponent',
        name: 'VueComponent',
        component: VueComponent
    },
    {
        path: '/computed',
        name: 'Computed',
        component: Computed
    },
    // 表单输入与绑定 demo
    {
        path: '/formSubmit',
        name: 'FormSubmit',
        component: FormSubmit
    },
    {
        path: '/customerAction',
        name: 'CustomerAction',
        component: CustomerAction
    }
];

// 创建 VueRouter 实例
const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;