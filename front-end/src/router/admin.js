
const admin = [
    {
        path: '/admin',
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: 'users', // tu cac duong dan con thi khong có dau / phia truoc
                name: 'admin-users',
                component: () => import("../pages/admin/users/index.vue"),
            }
        ]
    }
];

export default admin;