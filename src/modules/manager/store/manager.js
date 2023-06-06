export default {
    namespaced: true,
    state: {
        chats: [
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
        samples: [
            {
                id: 1,
                img: "images/fb1.png",
                name: "Cheese Fabric",
                text: 'Sample Courier Requested',
                textcolor: 'text-warning',
                ariving: "Today",
                cid: "16598563",
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
                img: "images/fb2.png",
                name: "Cheese Fabric",
                text: 'Sample Dispatched',
                textcolor: 'text-success',
                ariving: "Today",
                cid: "16598563",
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
                img: "images/fb3.png",
                name: "Cheese Fabric",
                text: 'Sample Courier Requested',
                textcolor: 'text-warning',
                ariving: "Today",
                cid: "16598563",
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
                img: "images/fb4.png",
                name: "Cheese Fabric",
                text: 'Sample Dispatched',
                textcolor: 'text-success',
                ariving: "Today",
                cid: "16598563",
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
        activeSample: {},
        pos: [
            {
                id: 1,
                img: "images/fb1.png",
                textcolor: "text-success",
                text: "Accepted",
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
            },
            {
                id: 2,
                img: "images/fb2.png",
                textcolor: "text-info",
                text: "Updated",
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
            },
            {
                id: 3,
                img: "images/fb3.png",
                textcolor: "text-danger",
                text: "Rejected",
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
            },
            {
                id: 4,
                img: "images/fb4.png",
                textcolor: "text-success",
                text: "Accepted",
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
            },


        ],
        activePo: {},
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
        lrs: [
            {
                id: 1,
                img: "images/fb1.png",
                qty: '10000',
                amt: '1580000',
                po: '4562562',
                name: "Cheese Fabric",
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
                qty: '10000',
                amt: '1580000',
                po: '4562562',
                name: "Cheese Fabric",
                ariving: "Today",
                cid: "16598563",
            },
            {
                id: 3,
                img: "images/fb4.png",
                qty: '10000',
                amt: '1580000',
                po: '4562562',
                name: "Cheese Fabric",
                ariving: "Today",
                cid: "16598563",
            },
            {
                id: 4,
                img: "images/fb1.png",
                qty: '10000',
                amt: '1580000',
                po: '4562562',
                name: "Cheese Fabric",
                ariving: "Today",
                cid: "16598563",
            },
            {
                id: 5,
                img: "images/fb3.png",
                qty: '10000',
                amt: '1580000',
                po: '4562562',
                name: "Cheese Fabric",
                ariving: "Today",
                cid: "16598563",
            },
            {
                id: 6,
                img: "images/fb1.png",
                qty: '10000',
                amt: '1580000',
                po: '4562562',
                name: "Cheese Fabric",
                ariving: "Today",
                cid: "16598563",
            },

        ],
        activeLr: {},
        detailbills: [
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
                txtcolor: 'text-success',
                invoice: 12511255,
                cid: 15982355,
            },
        ],
        activeDetailbill: {},
    },
    getters: {
        getChats(state) {
            return state.chats;
        },
        getChatss(state) {
            return state.chatss;
        },
        getChat(state) {
            return state.activeChat;
        },
        getSamples(state) {
            return state.samples;
        },
        getSample(state) {
            return state.activeSample;
        },
        getPos(state) {
            return state.pos;
        },
        getPo(state) {
            return state.activePo;
        },
        getItems(state) {
            return state.items
        },
        getLrs(state) {
            return state.lrs;
        },
        getLr(state) {
            return state.activeLr;
        },
        getDetailbills(state) {
            return state.detailbills;
        },
        getDetailbill(state) {
            return state.activeDetailbill;
          },
    },
    mutations: {
        selectChat(state, chat) {
            state.activeChat = chat;
        },
        hideChat(state) {
            state.activeChat = {};
        },
        selectSample(state, sample) {
            state.activeSample = sample;
        },
        hideSample(state) {
            state.activeSample = {};
        },
        selectPo(state, po) {
            state.activePo = po;
        },
        hidePo(state) {
            state.activePo = {};
        },
        selectLr(state, lr) {
            state.activeLr = lr;
        },
        hideLr(state) {
            state.activeLr = {};
        },
        selectDetailbill(state, detailbill) {
            state.activeDetailbill = detailbill;
        },
        hideDetailbill(state) {
            state.activeDetailbill = {};
        },
    },
    actions: {
        selectChat({ commit }, chat) {
            commit("selectChat", chat);
        },
        hideChat({ commit }) {
            commit("hideChat");
        },
        selectSample({ commit }, sample) {
            commit("selectSample", sample);
        },
        hideSample({ commit }) {
            commit("hideSample");
        },
        selectPo({ commit }, po) {
            commit("selectPo", po);
        },
        hidePo({ commit }) {
            commit("hidePo");
        },
        selectLr({ commit }, lr) {
            commit("selectLr", lr);
        },
        hideLr({ commit }) {
            commit("hideLr");
        },
        selectDetailbill({ commit }, detailbill) {
            commit("selectDetailbill", detailbill);
        },
        hideDetailbill({ commit }) {
            commit("hideDetailbill");
        },
    }
}