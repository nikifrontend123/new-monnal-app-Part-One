export default [
    {
        path: "/storekeeper",
        name: "storekeeper",
        component: () => import("./Module.vue"),
        children: [
            {
                path: '/store-keeper',
                name: 'SkGrn',
                component: () => import("./views/SkGrn.vue")
            },
            {
                path: '/SkGdn',
                name: 'SkGdn',
                component: () => import("./views/SkGdn.vue")
            },
            {
                path: "/GrnDetail/:shipmentId",
                name: "GrnDetail",
                component: () => import("./views/GrnDetail.vue")
            },
            {
                path: "/QcDetail/:shipmentId",
                name: "QcDetail",
                component: () => import("./views/QcDetail.vue")
            },
            {
                path: "/RackIn/:shipmentId",
                name: "RackIn",
                component: () => import("./views/RackIn.vue")
            },
            {
                path: "/GrnTransfer/:shipmentId",
                name: "GrnTransfer",
                component: () => import("./views/GrnTransfer.vue")
            },
            {
                path: "/RackOut",
                name: "RackOut",
                component: () => import("./views/RackOut.vue")
            },
            {
                path: "/GdnDetail",
                name: "GdnDetail",
                component: () => import("./views/GdnDetail.vue")
            },
            {
                path: "/GdnTransfer",
                name: "GdnTransfer",
                component: () => import("./views/GdnTransfer.vue")
            },

        ]

    }
];