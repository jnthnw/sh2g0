const options = {
    moduleCache: {
        vue: Vue
    },
    async getFile(url) {

        const res = await fetch(url);
        if (!res.ok)
            throw Object.assign(new Error(res.statusText + ' ' + url), { res });
        return await res.text();
    },
    addStyle(textContent) {

        const style = Object.assign(document.createElement('style'), { textContent });
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    },
}

const { loadModule } = window['vue3-sfc-loader'];

const routes = [
    { path: '/', component: () => loadModule('./start.vue', options) },
    { path: '/aktuelles', component: () => loadModule('./aktuelles.vue', options) }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});


const app = Vue.createApp({
    components: {
        'myheader': Vue.defineAsyncComponent(() => loadModule('./header.vue', options))
    },
    created: () => {
        var currentUrl = window.location.hash;

        console.log(currentUrl);
    },
    template: '<myheader></myheader><router-view></router-view>'
}).use(router);

app.mount('#app');