import {
    createRouter,
    createWebHistory
} from "vue-router"
import HomePage from "@/pages/HomePage.vue"
import CatalogPage from "@/pages/CatalogPage.vue"
import AboutPage from "@/pages/AboutPage.vue"
import MorePage from "@/pages/MorePage.vue"
import NewsPage from "@/pages/NewsPage.vue"
// поменяла с "../pages/HomePage.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage},
        { path: '/catalog', component: CatalogPage},
        { path: '/about', component: AboutPage},
        { path: '/more', component: MorePage},
        { path: '/news', component: NewsPage},
    ]
})
export default router
