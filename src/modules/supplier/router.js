export default [
  {
    path: "/supplier",
    component: () => import("./Module.vue"),
    children: [
      {
        path: "dashboard",
        name: 'SupplierDashboard',
        component: () => import("./views/DashboardPage.vue")
      },
      {
        path: "purchase-order",
        name: 'SupplierPurchaseOrder',
        component: () => import("./views/PurchaseOrder.vue")
      },
      {
        // path: "fabricTypes:purchaseOrderId",
        path: "/fabricTypes/:purchaseOrderId",
        name: 'FabricTypes',
        component: () => import("./views/FabricTypes.vue")
      },
      {
        path: "parcel-page",
        name: 'SupplierParcelPage',
        component: () => import("./views/ParcelPage.vue")
      },
      {
        path: "ready-page",
        name: 'SupplierReadyPage',
        component: () => import("./views/ReadyPage.vue")
      },
      {
        path: "shipped-page",
        name: 'SupplierShippedPage',
        component: () => import("./views/ShippedPage.vue")
      },
      {
        path: "shipment-page",
        name: 'SupplierShipmentPage',
        component: () => import("./views/ShipmentPage.vue")
      },
      {
        path: "shipment-prepare-page",
        name: 'ShipmentPreparePage',
        component: () => import("./views/PreparePage.vue")
      },
      {
        path: "shipment-shipped-page",
        name: 'ShipmentShippedPage',
        component: () => import("./views/ShipmentShippedPage.vue")
      },
      {
        path: "/SupplierFabric",
        name: 'SupplierFabric',
        component: () => import("./views/SupplierFabric.vue")
      },
      {
        path: "/SupplierSample",
        name: 'SupplierSample',
        component: () => import("./views/SupplierSample.vue")
      },
      {
        path: "/SupplierPo",
        name: 'SupplierPo',
        component: () => import("./views/SupplierPo.vue")
      },
      {
        path: "/SupplierShipment",
        name: 'SupplierShipment',
        component: () => import("./views/SupplierShipment.vue")
      },
      {
        path: "/SupplierBill",
        name: 'SupplierBill',
        component: () => import("./views/SupplierBill.vue")
      },
    ]
  }

];
