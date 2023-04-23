import Vue from 'vue';
import VueRouter from 'vue-router';
import appConfig from '/config/appConfig'
Vue.use(VueRouter);
export const constantRouterMap = [
    {
        path: '/login',
        component: () => import('../components/Auth/login'),
        name:'Login',
        meta:{title:'Login'}
    },
    {
        path: '/dashboard',
        component: ()=> import('../components/index'),
        name: 'admin',
        redirect: '/admin/index',
        children: [
            //Dashboard
            {
                path: '/index',
                component: () => import('../components/Dashboard/index'),
                name:'Dashboard',
                meta:{title:'Home-Admin'}
            },
            {
                path: 'category',
                component: () => import('../components/DanhMuc/index'),
                name:'form',
                meta:{title:'Categorys'}
            },
            // Banner
            {
                path: 'banner-list',
                component: () => import('../components/Banner/index'),
                name:'BannerList',
                meta:{title:'BannerList'}
            },
            {
                path: 'banner-list/create',
                component: () => import('../components/Banner/create'),
                name:'BannerCreate',

            },
            {
                path: 'banner-list/update/:id?',
                component: () => import('../components/Banner/create'),
                name:'BannerUpdate'
            },
            //Product
            {
                path: 'product/create',
                component: () => import('../components/Product/create'),
                name:'ProductCreate',
                meta:{title:'ProductCreate'}
            }, {
                path: 'product/update/:id',
                component: () => import('../components/Product/create'),
                name:'ProductUpdate',
                meta:{title:'ProductUpdate'}
            },
            {
                path: 'product',
                component: () => import('../components/Product/product_list'),
                name:'ProductList',
                meta:{title:'ProductList'}
            },
            // Product Color
            {
                path: 'product_color',
                component: () => import('../components/ProductColor/list'),
                name:'ProductColorList',
                meta:{title:'ProductColorList'}
            },
            // Product Size
            {
                path: 'product_size',
                component: () => import('../components/ProductSize/list'),
                name:'ProductSizeList',
                meta:{title:'ProductSizeList'}
            },
            //Order
            {
                path: 'orders',
                component: () => import('../components/Order/index'),
                name:'Order',
                meta:{title:'OrderList'}
            },
            //Setting
            {
                path: 'settings',
                component: () => import('../components/Setting/index'),
                name:'Setting',
                meta:{title:'Settings'}
            },
            //Blogs
            {
                path: 'blog-list',
                component: () => import('../components/Blog/index'),
                name:'BlogList',
                meta:{title:'BlogList'}
            },
            {
                path: 'blog/create',
                component: () => import('../components/Blog/form'),
                name:'BlogCreate',

            },
            {
                path: 'blog/update/:id?',
                component: () => import('../components/Blog/form'),
                name:'BlogUpdate'
            },

        ]
    },
    {
        path: '/404',
        component: () => import('../../common/404'),
        meta:{
            title:'404-PageNotFound'
        }
    },
    // {path: '/*', redirect: '/404'},
    // {
    //     path: '/*',
    //     hidden: true,
    //     children: [
    //         {
    //             path: ':path*',
    //             component: () => import('../view/redirect'),
    //         },
    //     ],
    // },
    {
        path: '/*',
        component: () => import('../view/redirect'),
    }

];
export const asyncRouterMap = [];
const createRouter = () =>
    new VueRouter({
        linkActiveClass: 'active', // active class
        mode: 'history',
        base: '/admin',
        routes: constantRouterMap,
        scrollBehavior: to => {
            if (to.hash) {
                return { selector: to.hash };
            } else {
                return { x: 0, y: 0 };
            }
        },
    });
const router = createRouter();
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

const DEFAULT_TITLE ='HaDoVN';
router.afterEach((to) => {
    document.title =(DEFAULT_TITLE + ' - ' + to.meta.title )|| DEFAULT_TITLE + ' - '+(to.name);
});
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = appConfig.LOGO_META;
    document.getElementsByTagName('head')[0].appendChild(link);
})();


export default router;
