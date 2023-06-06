<template>
    <div>
        <div class="container my-2">
            <ul class="list-group">
                <li class="list-group-item" v-for="(purchaseOrder, index) in purchaseOrders" :key="index">
                    <!-- <li class="list-group-item" v-for="(purchaseOrder, index) in purchaseOrders" :key="index"
                    @click="showPurchaseOrder(purchaseOrder)"> -->
                    <!-- <RouterLink to="/fabricTypes" class="text-decoration-none text-dark"> -->
                    <!-- <RouterLink :to="{ name: purchaseOrder.route }" class="text-decoration-none text-dark"> -->
                        <!-- <RouterLink :to="'/fabricTypes/' + purchaseOrder.id" class="text-decoration-none text-dark"> -->
                        <RouterLink :to="{ name: purchaseOrder.route, params: { purchaseOrderId: index } }" class="text-decoration-none text-dark">
                        <div class="d-flex">
                            <img :src="`${publicPath}${purchaseOrder.img}`" class="rounded-circle border"
                                style="width: 60px; height: 60px;">
                            <div class="flex-fill px-2">
                                <p class="m-0 fw-bold">{{ purchaseOrder.name }}</p>
                                <div class="d-flex">
                                    <span>{{ purchaseOrder.qty }} {{ purchaseOrder.unit }}</span>
                                    <span class="px-1 fw-bold">@</span>
                                    <span>{{ purchaseOrder.price }}</span>
                                </div>
                            </div>
                            <div class="d-flex flex-column">
                                <i class="bi bi-lock-fill text-primary"></i>
                                <i class="bi bi-unlock-fill text-success"></i>
                            </div>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div v-if="Object.keys(activePurchaseOrder).length !== 0">
            <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div class="d-flex justify-content-center align-items-center">
                    <div class=" w-100 d-flex justify-content-center align-items-center">
                        <p class="fw-bold text-center m-0">{{ activePurchaseOrder.name }}</p>
                    </div>
                    <div class="d-flex justify-content-end w-100">
                        <button type="button" class="btn" @click="hidePurchaseOrder()"><i class="bi bi-x fs-3"></i></button>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <div class="container">
                            <img :src="`${publicPath}${activePurchaseOrder.img}`" alt="" class="w-100">
                        </div>
                        <div class="text-center">
                            <p>Cotton Duck</p>
                            <p>SO/1008 {02042023 & 18:30}</p>
                        </div>
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne">
                                        Items
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <!-- <th scope="col">#</th> -->
                                                    <th scope="col">Color</th>
                                                    <th scope="col">Rate</th>
                                                    <th scope="col">Quantity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in items" :key="index" class="">
                                                    <!-- <th scope="row">1</th> -->
                                                    <td class="pt-2">
                                                        <div class=" rounded-circle" :class="item.color"
                                                            style="width: 50px; height: 50px;"></div>
                                                    </td>
                                                    <td class="">
                                                        <input class=" form-control " type="text" placeholder="rate"
                                                            v-model="values.rate[index]">
                                                    </td>
                                                    <td>
                                                        <input class=" form-control " type="text" placeholder="qty"
                                                            v-model="values.qty[index]">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="  w-100">
                                            <table class="table table-secondary">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Sub Total</th>
                                                        <th>{{ getTotalQty }} mtrs</th>
                                                        <th>₹{{ getTotalAmnt }}</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                            <div class="text-end">
                                                <p class="m-0 w-100 fw-bold">(+)GST @ 18% <span class="ms-5 fw-light">{{
                                                    Math.ceil(getTotalAmnt * gst) }}</span></p>
                                                <p class="m-0 w-100 fw-bold"> Bill Amount <span class="ms-5 fw-light">{{
                                                    Math.ceil(getTotalAmnt +
                                                        (getTotalAmnt * gst)) }}</span></p>
                                            </div>

                                            <div class="d-flex justify-content-center mt-3">
                                                <button class="w-100 btn btn-light border-dark">Reset</button>
                                                <button class="w-100 btn btn-light border-dark">Save Change</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Fabric Detail
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <div class="form container">
                                            <table class="table w-100">
                                                <tbody class="">
                                                    <tr>
                                                        <th scope="row">Name</th>
                                                        <!-- <td>{{ activePurchaseOrder.name }}</td> -->
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.name">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Price</th>
                                                        <td class="">
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail"
                                                                :value="'₹ ' + activePurchaseOrder.price + '/mtr'">
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">MOQ</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.moq">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Length</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.length">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Width</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.width">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">GSM</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.gsm">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Color</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.color">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Design</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.design">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Construction</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.construction">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Processes</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.processes">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Discription</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail" :value="activePurchaseOrder.discription">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="d-flex justify-content-evenly w-100">
                                                <div class="btn btn-success w-100 m-2">Accept</div>
                                                <div class="btn btn-info w-100 m-2">Update</div>
                                                <div class="btn btn-danger w-100 m-2">Reject</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form w-100">
                        <table class="table w-100 container">
                            <tbody class="">
                                <tr>
                                    <th scope="row">Courier ID</th>
                                    <td class="col-sm-10">
                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                            placeholder="Courier ID">
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Date</th>
                                    <td class="col-sm-10">
                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                            placeholder="Defaul Date">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
                        <div class="btn btn-success">Add To Shipment</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';

export default {
    mixins: [imagePath],
    data() {
        return {
            values: {
                rate: [],
                qty: [],
            },
            gst: .18,
        }
    },
    computed: {
        purchaseOrders() {
            return this.$store.getters['supplier/getPurchaseOrders']
        },
        items() {
            return this.$store.getters['supplier/getItems']
        },
        activePurchaseOrder() {
            return this.$store.getters['supplier/getPurchaseOrder'];
        },
        getTotalAmnt() {
            let x = 0;
            for (let index = 0; index < Object.keys(this.values.rate).length; index++) {
                const element = this.values.rate[index] * this.values.qty[index];
                x = x + element;
            }
            return x;
        },
        getTotalRate() {
            let x = 0;
            for (let index = 0; index < Object.keys(this.values.rate).length; index++) {
                x = x + parseInt(this.values.rate[index]);

            }
            return x;
        },
        getTotalQty() {
            let x = 0;
            for (let index = 0; index < Object.keys(this.values.qty).length; index++) {
                x = x + parseInt(this.values.qty[index]);
            }
            return x;
        },
    },
    methods: {
        showPurchaseOrder(purchaseOrder) {
            return this.$store.dispatch('supplier/selectPurchaseOrder', purchaseOrder);
        },
        hidePurchaseOrder() {
            return this.$store.dispatch('supplier/hidePurchaseOrder');
        },
        amount() {
            return (Math.round(quantity + quantity1 + quantity2)).toFixed(2);
        },

    },

}
</script>
