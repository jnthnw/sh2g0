/*
    Alle Seiten
*/


let files = ["aktuelles", "kontakt", "service/showreel", "service/drehbuch", "film/filme", "theater/theater", "service/coaching"];


let team = ["hannah", "sonja", "david", "andreas"];
for (const t of team) {
    files.push("team/" + t);
}

let filme = ["morgen", "cattleya", "experimente", "alleswirdgut", "summernight", "engel", "gestern"];
for (const t of filme) {
    files.push("film/" + t);
}

let theater = ["schwestern", "preparadise", "wendezeit", "miranda", "macbeth", "insomnia", "misstrauen"];
for (const t of theater) {
    files.push("theater/" + t);
}


let showreel = ["ericlust", "missunderstanding", "popomartin"];
for (const t of showreel) {
    files.push("showreel/" + t);
}



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

var routes = [
    { path: '/', component: () => loadModule('./start.vue', options) },
]
for (const f of files) {
    routes.push({ path: '/' + f, component: () => loadModule('./' + f + '.vue', options) });
}

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});


const app = Vue.createApp({
    components: {
        'myheader': Vue.defineAsyncComponent(() => loadModule('./header/header.vue', options))
    },
    created: () => {
        var currentUrl = window.location.hash;

        console.log(currentUrl);
    },
    template: '<myheader></myheader><router-view></router-view>'
}).use(router);

app.mount('#app');