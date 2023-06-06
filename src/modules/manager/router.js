export default [
    {
        path: "/manager",
        name: "Manager",
        component: () => import("./Module.vue"),
        children: [
            {
                path:'/manager',
                name: 'ManagerP',
                component: () => import("./views/Purchase/ManagerP.vue")
            },
            {
                path:'/PurchaseFabric',
                name: 'PurchaseFabric',
                component: () => import("./views/Purchase/PurchaseFabric.vue")
            },
            {
                path:'/PurchaseSample',
                name: 'PurchaseSample',
                component: () => import("./views/Purchase/PurchaseSample.vue")
            },
            {
                path:'/PurchasePo',
                name: 'PurchasePo',
                component: () => import("./views/Purchase/PurchasePo.vue")
            },
            {
                path:'/PurchaseP',
                name: 'PurchaseP',
                component: () => import("./views/Purchase/PurchaseP.vue")
            },
            {
                path:'/PurchaseBill',
                name: 'PurchaseBill',
                component: () => import("./views/Purchase/PurchaseBill.vue")
            },
            {
                path:'/managersale',
                name: 'ManagerSale',
                component: () => import("./views/Sale/ManagerSale.vue")
            },
        ]
    }
];