
const LayoutManagementComponent = () => import("@/layouts/admin/admin.vue")
const PageUserManagementViewComponent = () => import("@/pages/admin/users/show.vue")
const PageProductManagementViewComponent = () => import("@/pages/admin/products/show.vue")
const PageOrderManagementViewComponent = () => import("@/pages/admin/orders/show.vue")
const PageDashBoardManagementViewComponent = () => import("@/pages/admin/dashboard/show.vue")



const admin = [
    {
        path: '/admin',
        component: LayoutManagementComponent,
        children: [
            {
                path: 'users', // tu cac duong dan con thi khong có dau / phia truoc
                name: 'admin-users',
                component: PageUserManagementViewComponent,
            },
            {
                path: 'products', // tu cac duong dan con thi khong có dau / phia truoc
                name: 'admin-products',
                component: PageProductManagementViewComponent,
            },
            {
                path: 'orders', // tu cac duong dan con thi khong có dau / phia truoc
                name: 'admin-orders',
                component: PageOrderManagementViewComponent,
            },
            {
                path: '', // tu cac duong dan con thi khong có dau / phia truoc
                name: 'admin-dashboard',
                component: PageDashBoardManagementViewComponent,
            }






        ]
    }
];

export default admin;