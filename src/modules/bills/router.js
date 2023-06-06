export default [
    {
        path: "/bills",
        name: "bills",
        component: () => import("./Module.vue"),
        children: [
            {
                path: '/bills',
                name: 'Bills',
                component: () => import("./views/BillPage.vue")
            },
        ]
    }
]