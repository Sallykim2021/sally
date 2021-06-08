import VueRouter from 'vue-router';

const routes = [
    { path: '/', component: resolve => require(['./components/NZHome.vue'], resolve) },
    { path: '/news', component: resolve => require(['./components/NZNews.vue'], resolve) },
    { path: '/news/:slug', component: resolve => require(['./components/NZNewsContent.vue'], resolve) },
    { path: '/shows', component: resolve => require(['./components/NZShows.vue'], resolve) },
    { path: '/videos', component: resolve => require(['./components/NZVideos.vue'], resolve) },
    { path: '/about-us', component: resolve => require(['./components/NZAboutUs.vue'], resolve) },
    { path: '/privacy-policy', component: resolve => require(['./components/NZPrivacy.vue'], resolve) },
    { path: '/terms-conditions', component: resolve => require(['./components/NZTerms.vue'], resolve) },
    { path: '/blog', component: resolve => require(['./components/NZBlog.vue'], resolve) },
    { path: '/accounts/login', component: resolve => require(['./components/NZLogin.vue'], resolve) },
    { path: '/accounts/signup', component: resolve => require(['./components/NZSignup.vue'], resolve) },
    { path: '/accounts/reset', component: resolve => require(['./components/NZReset.vue'], resolve) },
    { path: '/password-reset/done', component: resolve => require(['./components/NZResetDone.vue'], resolve) },
    { path: '/password-reset-confirm/:uid/:token/', component: resolve => require(['./components/NZResetConfirm.vue'], resolve) },
    { path: '/password-reset-complete', component: resolve => require(['./components/NZResetComplete.vue'], resolve) },

    { path: '*', component: resolve => require(['./components/NZHome.vue'], resolve) },
]

export default new VueRouter({
    mode: 'hash',
    // 请勿修改为history。
    routes: routes

})