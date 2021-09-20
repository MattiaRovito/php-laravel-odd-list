import Vue from 'vue';
import VueRouter from 'vue-router';

// Questo consente di utilizzarlo come plug-in
Vue.use(VueRouter);

// Qui importiamo i component

import Home from './page/Home';


const router = new VueRouter({
    // si specifica la modalità di visualizzazione

    mode : 'history',

    // e si costruiscono le rotte

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
            // questo component verrà creato dentro una cartella in resources/js, chiamata pages, la quale rappresenterà le nostre pagine
        }
    ]
});





export default router;