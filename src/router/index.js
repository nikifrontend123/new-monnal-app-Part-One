import { createRouter, createWebHistory } from 'vue-router';
import SupplierModuleRoutes from '../modules/supplier/router';
import ManagerModuleRoutes from '../modules/manager/router';
import StoreModuleRoutes from '../modules/store/router';
import StoreKeeperModuleRoutes from '../modules/storekeeper/router';
import GateKeeperModuleRoutes from '../modules/gatekeeper/router';
import BillsModuleRoutes from '../modules/bills/router';

const routes = [
  {
    path: "/",
    name: 'HomePage',
    component: () => import("../views/HomePage.vue")
  },
  ...SupplierModuleRoutes,
  ...ManagerModuleRoutes,
  ...StoreModuleRoutes,
  ...StoreKeeperModuleRoutes,
  ...GateKeeperModuleRoutes,
  ...BillsModuleRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
