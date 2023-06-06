import store from "@/store";

export default {
    namespaced: true,
    state: {
        bottomNavMenuItems: [
            {
                id: 1,
                name: 'po',
                icon: 'bi bi-journal-plus',
                route: 'SupplierPurchaseOrder',

            },
            {
                id: 2,
                name: 'Box',
                icon: 'bi bi-box-seam',
                route: 'SupplierParcelPage',

                // route: 'Supplier.parcel',
            },
            {
                id: 3,
                name: 'Ship',
                icon: 'bi bi-truck',
                route: 'SupplierShipmentPage',

                // route: 'Supplier.shipment',
            },
            {
                id: 4,
                name: 'Fail',
                icon: 'bi bi-x-octagon',
                route: 'SupplierPurchaseOrder',

                // route: 'Supplier.rejection',
            },
            {
                id: 5,
                name: 'Bills',
                icon: 'bi bi-journal-check',
                route: 'SupplierPurchaseOrder',

                // route: 'Supplier.bills',
            },
        ],
        dashboardStats: [
            {
                name: 'New po',
                value: '89',
            },
            {
                name: 'New po',
                value: '89',
            },
            {
                name: 'New po',
                value: '89',
            },
            {
                name: 'New po',
                value: '89',
            },
            {
                name: 'New po',
                value: '89',
            }
        ],
        supchats: [
            {
                id: 1,
                imgDp: "images/fab1.png",
                name: "Himanshu Bakshi",
            },
            {
                id: 2,
                imgDp: "images/fab2.png",
                name: "Suashish",
            },
            {
                id: 3,
                imgDp: "images/fab3.png",
                name: "Prince Jain",
            },
            {
                id: 4,
                imgDp: "images/fab1.png",
                name: "Himanshu Bakshi",
            },
            {
                id: 5,
                imgDp: "images/fab2.png",
                name: "Suashish",
            },
        ],
        chatss: [
            {
                id: 1,
                imgD: "images/img1.jpg",
                name: "Cotton Duck",
                btn: "Requested",
                btncolor: "btn-success",
                ariving: "Today",
                cid: "16598563",
                img: "img/icons/f1.jpg",
                tag: "SO/1008 {02042023 & 18:30}",
                price: "80",
                moq: "5000",
                length: "",
                width: "2.5",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                discription: "",
            },
            {
                id: 2,
                imgD: "images/img2.webp",
                name: "Crepe Fabric",
                price: "499",
                moq: "10,000",
            },
            {
                id: 3,
                imgD: "images/img3.webp",
                name: "chiffon Fabric",
                price: "499",
                moq: "10,000 ",
            },
            {
                id: 4,
                imgD: "images/img1.jpg",
                name: "Georgette Fabric",
                price: "499",
                moq: "10,000",
            },
            {
                id: 5,
                imgD: "images/img2.webp",
                name: "Cotton Duck",
                price: "499",
                moq: "10,000",
            },
            {
                id: 6,
                imgD: "images/img3.webp",
                name: "Poplin Fabric",
                price: "499",
                moq: "10,000",
            },
        ],
        activeChat: {},
        supsamples: [
            {
                id: 1,
                name: "Cheese Fabric",
                btn: "Requested",
                btncolor: "btn-success",
                ariving: "Today",
                cid: "16598563",
                img: "images/fb1.png",
                tag: "SO/1008 {02042023 & 18:30}",
                price: "Rs. 80/mtr",
                moq: "5000 Mtr",
                length: "",
                width: "2.5 Mtr",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                discription: "",
            },
            {
                id: 2,
                name: "Cheese Fabric",
                btn: "Dispatch",
                btncolor: "btn-warning",
                ariving: "Today",
                cid: "16598563",
                img: "images/fb2.png",
                tag: "SO/1008 {02042023 & 18:30}",
                price: "Rs. 80/mtr",
                moq: "5000 Mtr",
                length: "",
                width: "2.5 Mtr",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                discription: "",
            },
            {
                id: 3,
                name: "Cheese Fabric",
                btn: "Requested",
                btncolor: "btn-success",
                ariving: "Today",
                cid: "16598563",
                img: "images/fb3.png",
                tag: "SO/1008 {02042023 & 18:30}",
                price: "Rs. 80/mtr",
                moq: "5000 Mtr",
                length: "",
                width: "2.5 Mtr",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                discription: "",
            },
            {
                id: 4,
                name: "Cheese Fabric",
                btn: "Resend",
                btncolor: "btn-danger",
                ariving: "Today",
                cid: "16598563",
                img: "images/fb4.png",
                tag: "SO/1008 {02042023 & 18:30}",
                price: "Rs. 80/mtr",
                moq: "5000 Mtr",
                length: "",
                width: "2.5 Mtr",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                discription: "",
            },

        ],
        activeSupsample: {},
        purchaseOrders: [
            {
                id: 1,
                po:'0152529-01',
                imgd: "images/fab1.png",
                img: "images/fb1.png",
                name: "Cheese Fabric",
                qty: "10,000 mtr",
                amt: "Rs 15,80,000",
                price: 80,
                moq: "5000 Mtr",
                length: "",
                width: "2.5 Mtr",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                Discription: "",
                route: 'FabricTypes',
                colors: [
                    {
                        name: 'Multi Color Cheese fabric',
                        img:'images/fb1.png',
                        qty: 10000,
                        price: 80,
                    },
                    {
                        name: 'Green White Cheese Fabric',
                        img:'images/fb1.png',
                        qty: 10000,
                        price: 80,
                    },
                    {
                        name: 'Grey Green Cheese Fabric',
                        img:'images/fb1.png',
                        qty: 10000,
                        price: 80,
                    }
                ]
            },
            {
                id: 2,
                po:'01658529-01',
                imgd: "images/fab1.png",
                img: "images/fb2.png",
                name: "Cheese Fabric",
                qty: "10,000 mtr",
                amt: "Rs 15,80,000",
                price: "Rs. 80/mtr",
                moq: "5000 Mtr",
                length: "",
                width: "2.5 Mtr",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                Discription: "",
                route: 'FabricTypes',
                colors: [
                    {
                        name: 'multi color fabric',
                        img:'images/fb2.png',
                        qty: 10000,
                        price: 80,
                    },
                    {
                        name: 'multi',
                        img:'images/fb2.png',
                        qty: 10000,
                        price: 80,
                    },
                    {
                        name: 'fabric',
                        img:'images/fb2.png',
                        qty: 10000,
                        price: 80,
                    }
                ]
            },
            {
                id: 3,
                po:'01558529-01',
                imgd: "images/fab1.png",
                img: "images/fb3.png",
                name: "Cheese Fabric",
                qty: "10,000 mtr",
                amt: "Rs 15,80,000",
                price: "Rs. 80/mtr",
                moq: "5000 Mtr",
                length: "",
                width: "2.5 Mtr",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                Discription: "",
                route: 'FabricTypes',
                colors: [
                    {
                        name: 'multi color fabric',
                        img:'images/fb3.png',
                        qty: 10000,
                        price: 80,
                    },
                    {
                        name: 'multi',
                        img:'images/fb3.png',
                        qty: 10000,
                        price: 80,
                    },
                    {
                        name: 'fabric',
                        img:'images/fb3.png',
                        qty: 10000,
                        price: 80,
                    }
                ]
            },
            {
                id: 4,
                po:'0158529-01',
                imgd: "images/fab1.png",
                img: "images/fb4.png",
                name: "Cheese Fabric",
                qty: "10,000 mtr",
                amt: "Rs 15,80,000",
                price: "Rs. 80/mtr",
                moq: "5000 Mtr",
                length: "",
                width: "2.5 Mtr",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                Discription: "",
                route: 'FabricTypes',
                colors: [
                    {
                        name: 'multi color Cheese Fabric',
                        img:'images/fb4.png',
                        qty: 10000,
                        price: 80,
                    },
                    {
                        name: 'Green White Cheese Fabric',
                        img:'images/fb4.png',
                        qty: 10000,
                        price: 80,
                    },
                    {
                        name: 'Grey Green Cheese Fabric',
                        img:'images/fb4.png',
                        qty: 10000,
                        price: 80,
                    }
                ]
            },


        ],
        activePurchaseOrder: {},
        
        items: [
            {
                id: 1,
                color: 'bg-danger'
            },
            {
                id: 2,
                color: 'bg-warning'
            },
            {
                id: 3,
                color: 'bg-info'
            }
        ],
        supshipments: [
            {
                id: 1,
                img: "images/fb1.png",
                name: "Cheese Fabric",
                date: '14/7',
                invoice: '1561023156',
                shipmentID: '45259865',
                text: 'In-Transit',
                textcolor: 'text-danger',
                tag: "SO/1008 {02042023 & 18:30}",
                ariving: "Today",
                cid: "16598563",
                tagid: "PO/1008 {25/04/2023 & 18:30}",
                courierid: "{25/04/2023 & 18:30}",
                price: "Rs. 80/mtr",
                moq: "5000 Mtr",
                length: "",
                width: "2.5 Mtr",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                Discription: "",
            },
            {
                id: 2,
                img: "images/fb3.png",
                name: "Cheese Fabric",
                date: '10/7',
                ariving: "Today",
                cid: "16598563",
                invoice: '1561023156',
                shipmentID: '45259865',
                text: 'In-Transit',
                textcolor: 'text-danger'
            },
            {
                id: 3,
                img: "images/fb4.png",
                name: "Cheese Fabric",
                date: '7/7',
                ariving: "Today",
                cid: "16598563",
                invoice: '1561023156',
                shipmentID: '45259865',
                text: 'QC',
                textcolor: 'text-success'
            },
            {
                id: 4,
                img: "images/fb5.png",
                name: "Cheese Fabric",
                date: '14/8',
                ariving: "Today",
                cid: "16598563",
                invoice: '1561023156',
                shipmentID: '45259865',
                text: 'Delievered',
                textcolor: 'text-warning'
            },
            {
                id: 5,
                img: "images/fb3.png",
                name: "Cheese Fabric",
                date: '9/9',
                ariving: "Today",
                cid: "16598563",
                invoice: '1561023156',
                shipmentID: '45259865',
                text: 'QC',
                textcolor: 'text-success'
            },
            {
                id: 6,
                img: "images/fb1.png",
                name: "Cheese Fabric",
                date: '4/7',
                ariving: "Today",
                cid: "16598563",
                invoice: '1561023156',
                shipmentID: '45259865',
                text: 'Billed',
                textcolor: 'text-info'
            },

        ],
        activeSupshipment: {},
        supbills: [
            {
                id: 1,
                date: '17/6',
                text: 'Shipment Arriving 13 May',
                text1: 'Pending',
                txtcolor: 'text-danger',
                invoice: 12511255,
                cid: 15982355,
                img: 'images/fab2.png',
                name: 'Himanshu Bakshi'
            },
            {
                id: 2,
                date: '17/8',
                text: 'Shipment Arriving 13 May',
                text1: 'Paid',
                img: 'images/fab1.png',
                txtcolor: 'text-success',
                invoice: 12511255,
                cid: 15982355,
            },
        ],
        activeSupbill: {},
        
        
    },
    getters: {
        getBottomNavMenuItems(state) {
            return state.bottomNavMenuItems;
        },
        getColors(state) {
            return state.colors;
        },
        getDashboardStats(state) {
            return state.dashboardStats;
        },
        getSupchats(state) {
            return state.supchats;
        },
        getChatss(state) {
            return state.chatss;
        },
        getChat(state) {
            return state.activeChat;
        },
        getSupsamples(state) {
            return state.supsamples;
        },
        getSupsample(state) {
            return state.activeSupsample;
        },
        getPurchaseOrders(state) {
            return state.purchaseOrders;
        },
        getPurchaseOrderx: (state) => (purchaseOrderIndex) => {
            return state.purchaseOrders[purchaseOrderIndex]
        },
        getPurchaseOrder(state) {
            return state.activePurchaseOrder;
        },
        
        getItems(state) {
            return state.items
        },
        getSupshipments(state) {
            return state.supshipments;
        },
        getSupshipment(state) {
            return state.activeSupshipment;
        },
        getSupbills(state) {
            return state.supbills;
        },
        getSupbill(state) {
            return state.activeSupbill;
        },
    },
    mutations: {
        selectChat(state, chat) {
            state.activeChat = chat;
        },
        hideChat(state) {
            state.activeChat = {};
        },
        selectSupsample(state, supsample) {
            state.activeSupsample = supsample;
        },
        hideSupsample(state) {
            state.activeSupsample = {};
        },
        selectSupshipment(state, supshipment) {
            state.activeSupshipment = supshipment;
        },
        hideSupshipment(state) {
            state.activeSupshipment = {};
        },
        selectSupbill(state, supbill) {
            state.activeSupbill = supbill;
        },
        hideSupbill(state) {
            state.activeSupbill = {};
        },
        // selectPurchaseOrder(state, purchaseOrder) {
        //     state.activePurchaseOrder = purchaseOrder;
        // },
        // hidePurchaseOrder(state) {
        //     state.activePurchaseOrder = {};
        // },
         
    },
    actions: {
        selectChat({ commit }, chat) {
            commit("selectChat", chat);
        },
        hideChat({ commit }) {
            commit("hideChat");
        },
        selectSupsample({ commit }, supsample) {
            commit("selectSupsample", supsample);
        },
        hideSupsample({ commit }) {
            commit("hideSupsample");
        },
        selectSupshipment({ commit }, supshipment) {
            commit("selectSupshipment", supshipment);
        },
        hideSupshipment({ commit }) {
            commit("hideSupshipment");
        },
        selectSupbill({ commit }, supbill) {
            commit("selectSupbill", supbill);
        },
        hideSupbill({ commit }) {
            commit("hideSupbill");
        },
        // selectPurchaseOrder({ commit }, purchaseOrder) {
        //     commit("selectPurchaseOrder", purchaseOrder);
        // },
        // hidePurchaseOrder({ commit }) {
        //     commit("hidePurchaseOrder");
        // },
         
    },
}
