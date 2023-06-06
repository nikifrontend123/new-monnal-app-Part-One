export default {
  namespaced: true,
  state: {
    stores: [
      {
        id: 1,
        imgDp: "images/fb1.png",
        name: "Cheese Fabric",
        add: 'G1-54A, G1-05A'
      },
      {
        id: 2,
        imgDp: "images/fb2.png",
        name: "Crepe Fabric",
        add: 'G1-54A, G1-05A'
      },
      {
        id: 3,
        imgDp: "images/fb3.png",
        name: "Chiffon Fabric",
        add: 'G1-54A, G1-05A'
      },
      {
        id: 4,
        imgDp: "images/fb4.png",
        name: "Geogette Fabric",
        add: 'G1-54A, G1-05A'
      },
      {
        id: 5,
        imgDp: "images/fb1.png",
        name: "Cotton Fabric",
        add: 'G1-54A, G1-05A'
      },
    ],
    storegrns: [
      {
        id: 1,
        img: "images/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
      },
      {
        id: 2,
        img: "images/fab2.png",
        name: "Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 3,
        img: "images/fab3.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 4,
        img: "images/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 5,
        img: "images/fab2.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
    ],
    storeqcs: [
      {
        id: 1,
        img: "images/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-success",
        icon: "bi bi-box-arrow-in-up-right"
      },
      {
        id: 2,
        img: "images/fab2.png",
        name: "Fabricator Imran",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-danger",
        icon: "bi bi-box-arrow-up-right"
      },
      {
        id: 3,
        img: "images/fab3.png",
        name: " Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-success",
        icon: "bi bi-box-arrow-in-up-right"
      },
      {
        id: 4,
        img: "images/fab1.png",
        name: "Imran",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-danger",
        icon: "bi bi-box-arrow-up-right"
      },
      {
        id: 5,
        img: "images/fab2.png",
        name: "Supplier Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
        text: "text-success",
        icon: "bi bi-box-arrow-in-up-right"
      },
    ],
    storegdns: [
      {
        id: 1,
        img: "images/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000 mtr",
        date: "15/05/23",
      },
      {
        id: 2,
        img: "images/fab2.png",
        name: "Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 3,
        img: "images/fab3.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 4,
        img: "images/fab1.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
      {
        id: 5,
        img: "images/fab2.png",
        name: "Supplier Suashish",
        qty: "10,000",
        date: "15/05/23",
      },
    ],
    godowns: [
      {
        id: 1,
        name: 'NewGodown1',
        racks: [
          {
            id: 1,
            name: 'NewR1',
            fabrics: [
              {
                id: 1,
                name: 'fab1',
                img1: 'images/fabric1.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 2,
                name: 'fab2',
                img1: 'images/fabric2.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 3,
                name: 'fab3',
                img1: 'images/fabric3.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              }
            ]
          },
          {
            id: 2,
            name: 'NewR2',
            fabrics: [
              {
                id: 1,
                name: 'fab1',
                img1: 'images/fabric3.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 2,
                name: 'fab2',
                img1: 'images/fabric1.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 3,
                name: 'fab3',
                img1: 'images/fabric2.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              }
            ]
          },
          {
            id: 3,
            name: 'NewR3',
            fabrics: [
              {
                id: 1,
                name: 'fab1',
                img1: 'images/fabric3.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 2,
                name: 'fab2',
                img1: 'images/fabric1.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 3,
                name: 'fab3',
                img1: 'images/fabric2.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              }
            ]
          },
          {
            id: 4,
            name: 'NewR4',
            fabrics: [
              {
                id: 1,
                name: 'fab1',
                img1: 'images/fabric3.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 2,
                name: 'fab2',
                img1: 'images/fabric1.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 3,
                name: 'fab3',
                img1: 'images/fabric2.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              }
            ]
          },
        ]
      },
      {
        id: 2,
        name: 'OldGodown2',
        racks: [
          {
            id: 1,
            name: 'OldR1',
            fabrics: [
              {
                id: 1,
                name: 'fab1',
                img1: 'images/fabric3.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 2,
                name: 'fab2',
                img1: 'images/fabric1.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 3,
                name: 'fab3',
                img1: 'images/fabric2.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              }
            ]
          },
          {
            id: 2,
            name: 'OldR2',
            fabrics: [
              {
                id: 1,
                name: 'fab1',
                img1: 'images/fabric3.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 2,
                name: 'fab2',
                img1: 'images/fabric1.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              },
              {
                id: 3,
                name: 'fab3',
                img1: 'images/fabric2.jpeg',
                bundles: [
                  {
                    id: 1,
                    img: 'images/img2.webp',
                    total: 400,
                    balance: 200,
                    address: 'G1-R1'
                  },
                  {
                    id: 2,
                    img: 'images/img3.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 3,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                  {
                    id: 4,
                    img: 'images/img2.webp',
                    total: 700,
                    balance: 100,
                    address: 'G1-R2'
                  },
                ]
              }
            ]
          },
        ]
      },
    ],
  },
  getters: {
    getStores(state) {
      return state.stores;
    },
    getStoregrn(state) {
      return state.storegrns;
    },
    getStoreqc(state) {
      return state.storeqcs;
    },
    getStoregdn(state) {
      return state.storegdns;
    },
    getGodowns(state) {
      return state.godowns;
    },
    getGodown: (state) => (godownId) => {
      let index = state.godowns.findIndex(godown => godown.id == godownId);
      return state.godowns[index];
    },
    getRack: (state) => (data) => {
      let godown = state.godowns.find(godown => godown.id == data.godownId);
      if (!godown) return null;
      let rack = godown.racks.find(rack => rack.id == data.rackId);
      return rack;
    },
  },
  mutations: {},
  actions: {}
}