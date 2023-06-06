export default {
    namespaced: true,
    state: {
        shipments: [
            { // grn's
                id: 1,
                date: '14/06',
                text: 'Shipment receive',
                cid: '45673357',
                roll: '80',
                stock: '800',
                grns: [
                    {
                        id: 1,
                        img: "images/fb1.png",
                        name: 'Cheese fabric',
                        po: '15000',
                        qc: '10000',
                        qty: {
                            roll: {
                                actual: '80',
                                defined: '80'
                            },
                            bundles:
                            {
                                actual: '100',
                                defined: '100'
                            },
                        },
                        addresses: [
                            {
                                godown: '',
                                rack: '',
                                qty: '',
                                select: ''
                            }
                        ],
                    },
                    {
                        id: 2,
                        img: "images/fb1.png",
                        name: 'Cheese fabric',
                        po: '15000',
                        qc: '10000',
                        qty: {
                            roll: {
                                actual: '90',
                                defined: '90'
                            },
                            bundles:
                            {
                                actual: '',
                                defined: ''
                            },
                        },
                        addresses: [
                            {
                                godown: '',
                                rack: '',
                                qty: '',
                                select: ''
                            }
                        ],
                    },
                ]
            },
            { // grn's
                id: 2,
                date: '14/06',
                text: 'Shipment receive',
                cid: '45673357',
                roll: '80',
                stock: '800',
                grns: [
                    {
                        id: 1,
                        img: "images/fb1.png",
                        name: 'Cheese fabric',
                        qty: {
                            roll: {
                                actual: '80',
                                defined: ''
                            },
                            bundles:
                            {
                                actual: '80',
                                defined: ''
                            },
                        },
                        addresses: [
                            {
                                godown: '',
                                rack: '',
                                qty: '',
                                select: ''
                            }
                        ],
                    },
                ]
            },
        ],
        gdns: [
            {
                id: 1,
                img: "images/fab1.png",
                name: 'Mayra Creation',
                oid: '45673357',
            },
            {
                id: 2,
                img: "images/fab2.png",
                name: 'MD Asad',
                oid: '45673357',
            },
            {
                id: 3,
                img: "images/fab3.png",
                name: 'Pride Apparels',
                oid: '45673357',
            },
            {
                id: 4,
                img: "images/fab1.png",
                name: 'Manoj DJ',
                oid: '45673357',
            },
        ],
        rackouts: [
            {
                id: 1,
                img: "images/fb1.png",
                name: 'Cheese fabric',
                mtr: '80',
                text1: 'G1-54A, G1-05A',
            },
            {
                id: 2,
                img: "images/fb2.png",
                name: 'Crepe fabric',
                mtr: '80',
                text1: 'G1-54A, G1-05A',
            },
            {
                id: 3,
                img: "images/fb3.png",
                name: 'Chiffon fabric',
                mtr: '80',
                text1: 'G1-54A, G1-05A',
            },
            {
                id: 4,
                img: "images/fb1.png",
                name: 'Chiffon fabric',
                mtr: '80',
                text1: 'G1-54A, G1-05A',
            },
        ],
        gdndetails: [
            {
                id: 1,
                img: "images/fb1.png",
                name: 'Cheese fabric',
                mtr: '10,000',
                pm: '150',
            },
            {
                id: 2,
                img: "images/fb2.png",
                name: 'Crepe fabric',
                text: 'Bundle 0/180',
                mtr: '10,000',
                pm: '150',
            },
            {
                id: 3,
                img: "images/fb3.png",
                name: 'Chiffon fabric',
                text: 'Roll 0/80',
                mtr: '10,000',
                pm: '150',
            },
            {
                id: 4,
                img: "images/fb1.png",
                name: 'Chiffon fabric',
                text: 'Roll 0/180',
                mtr: '10,000',
                pm: '150',
            },
        ],

    },
    getters: {
        getShipments(state) {
            return state.shipments;
        },
        getGrns: (state) => (data) => {
            let shipment = state.shipments.find(shipment => shipment.id == data.shipmentId);
            if (!shipment) return null;
            return shipment.grns;
        },
        getGdns(state) {
            return state.gdns
        },
        getRackouts(state) {
            return state.rackouts
        },
        getGdndetails(state) {
            return state.gdndetails
        },
    },
    mutations: {
        saveRacking(state, data) {
            let shipmentIndex = state.shipments.find(shipment => shipment.id == data.shipmentId);
            if (!shipmentIndex) return null;
            let grnIndex = state.shipments[shipmentIndex].grns.find(grn => grn.id == data.grnId);
            if (!grnIndex) return null;
            state.shipments[shipmentIndex].grns[grnIndex].addresses.push(data.data);
        },
    },
    actions: {
        saveRacking({ commit }, data) {
            commit('saveRacking', data)
        }

    }
}