import { createRouter, createWebHashHistory } from "vue-router"
import { constantRouter } from "./routes"
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: constantRouter
})
export default router