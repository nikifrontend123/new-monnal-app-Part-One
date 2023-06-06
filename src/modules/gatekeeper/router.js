export default [
    {
        path: "/gatekeeper",
        name: "gatekeeper",
        component: () => import("./Module.vue"),
        children: [
            {
                path: '/receipt-page',
                name: 'ReceiptsPage',
                component: () => import("./views/ReceiptsPage.vue")
            },
            {
                path: '/DeliveriesPage',
                name: 'DeliveriesPage',
                component: () => import("./views/DeliveriesPage.vue")
            },
        ]
    }

]