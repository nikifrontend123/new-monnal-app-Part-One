export default {
    namespaced: true,
    state: {
        receipts: [
            {
                id: 1,
                date: '14/06',
                name: 'Nanak Textiles Pvt Ltd',
                shipment: 'Shipment',
                cid: '45673357',
                boxes: '5',
                roll: '80',
                stock: '300'
            },
            {
                id: 2,
                date: '14/06',
                name: 'Nanak Textiles Pvt Ltd',
                shipment: 'Shipment',
                cid: '121357',
                boxes: '3',
                roll: '90',
                stock: '700'
            },
            {
                id: 3,
                date: '14/06',
                name: 'Nanak Textiles Pvt Ltd',
                shipment: 'Shipment',
                cid: '98883357',
                boxes: '15',
                roll: '99',
                stock: '4800'
            },
            {
                id: 4,
                date: '14/06',
                name: 'Nanak Textiles Pvt Ltd',
                shipment: 'Shipment',
                cid: '3223133357',
                boxes: '8',
                roll: '8900',
                stock: '880'
            },
            {
                id: 5,
                date: '14/06',
                name: 'Nanak Textiles Pvt Ltd',
                shipment: 'Shipment',
                cid: '75983357',
                boxes: '12',
                roll: '50',
                stock: '200'
            },
        ],
        activeReceipt: {},
        deliveries: [
            {
                id: 1,
                date: '14/06',
                text: 'Manoj Fabricator',
                invoice: '45259865',
                cid: '45673357',
                roll: '80',
                stock: '800'
            },
            {
                id: 2,
                date: '14/06',
                text: 'Jyoti Garments ',
                invoice: '45259865',
                cid: '45673357',
                roll: '80',
                stock: '800'
            },
            {
                id: 3,
                date: '14/06',
                text: 'Mayra Creation',
                invoice: '45259865',
                cid: '45673357',
                roll: '80',
                stock: '800'
            },
            {
                id: 4,
                date: '14/06',
                text: 'MD Asad',
                invoice: '45259865',
                cid: '45673357',
                roll: '80',
                stock: '800'
            },
            {
                id: 5,
                date: '14/06',
                text: 'Modern Collection',
                invoice: '45259865',
                cid: '45673357',
                roll: '80',
                stock: '800'
            },
        ],
        activeDelivery: {},
    },
    getters: {
        getReceipts(state) {
            return state.receipts
        },
        getReceipt(state) {
            return state.activeReceipt;
        },
        getDeliveries(state) {
            return state.deliveries
        },
        getDelivery(state) {
            return state.activeDelivery;
        },
    },
    mutations: {
        selectReceipt(state, receipt) {
            state.activeReceipt = receipt;
        },
        hideReceipt(state) {
            state.activeReceipt = {};
        },
        selectDelivery(state, delivery) {
            state.activeDelivery = delivery;
        },
        hideDelivery(state) {
            state.activeDelivery = {};
        },
    },
    actions: {
        selectReceipt({ commit }, receipt) {
            commit("selectReceipt", receipt);
        },
        hideReceipt({ commit }) {
            commit("hideReceipt");
        },
        selectDelivery({ commit }, delivery) {
            commit("selectDelivery", delivery);
        },
        hideDelivery({ commit }) {
            commit("hideDelivery");
        },
    },
}