import { createStore } from 'vuex'
import supplier from '@/modules/supplier/store.js'
import manager from '@/modules/manager/store/manager.js'
import store from '@/modules/store/store/store.js'
import storekeeper from '@/modules/storekeeper/store/storekeeper.js'
import gatekeeper from '@/modules/gatekeeper/store/gatekeeper.js'
import bills from '@/modules/bills/store/bills.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    supplier: supplier,
    manager: manager,
    store: store,
    storekeeper: storekeeper,
    gatekeeper: gatekeeper,
    bills: bills,
  }
})
