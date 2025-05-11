import { createRouter, createWebHistory } from 'vue-router' // import 2 phuong thuc trong node_modules 
import admin from './admin.js' // import file admin.js

const routes = [...admin]// khai bao bien routes, gan bang mang admin;

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
