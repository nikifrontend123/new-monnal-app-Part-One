export default [
    {
        path: "/store",
        name: "store",
        component: () => import("./Module.vue"),
        children: [
           
            {
                path: '/store',
                name: 'StoreSearch',
                component: () => import("./views/StoreSearch.vue")
            },
            {
                path: '/StoreGrn',
                name: 'StoreGrn',
                component: () => import("./views/StoreGrn.vue")
            },
            {
                path: '/StoreQc',
                name: 'StoreQc',
                component: () => import("./views/StoreQc.vue")
            },
            {
                path: '/StoreGdn',
                name: 'StoreGdn',
                component: () => import("./views/StoreGdn.vue")
            },
            {
                path: '/StoreRacking',
                name: 'StoreRacking',
                component: () => import("./views/StoreRacking.vue")
            },
            {
                path: '/StoreHistory',
                name: 'StoreHistory',
                component: () => import("./views/StoreHistory.vue")
            },
            {
                path: '/GoDown',
                name: 'GoDown',
                component: () => import("./views/StoreGowdown/GoDown.vue")
            },
            {
                path: "/GodownList/:godownId",
                name: "GodownList",
                component: () => import("./views/StoreGowdown/GodownList.vue")
            },
            {
                path: "/RackItemList",
                name: "RackItemList",
                component: () => import("./views/StoreGowdown/RackItemList.vue")
            },
            {
                path: "/RackItemBundles/:godownId/:rackId",
                name: "RackItemBundles",
                component: () => import("./views/StoreGowdown/RackItemBundles.vue")
            },

        ]

    }
];