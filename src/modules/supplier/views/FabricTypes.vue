<template>
    <div>

        <div class="d-flex justify-content-between align-items-center w-100 p-2">
            <img :src="`${publicPath}${purchaseOrder.imgd}`" class="rounded-circle border"
                style="width: 30px; height: 30px;">
            <small>Narender, PO-152536985</small>
            <RouterLink to="/supplier/purchase-order" class="text-dark">
                <i class="bi bi-x fs-4"></i>
            </RouterLink>
        </div>

        <div class="d-flex  justify-content-evenly border">
            <div class=" fs-4 d-flex">
                <p>Locked</p>
                <i class="bi bi-lock-fill ps-3"></i>
            </div>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#purchaseOrderDetails"
                aria-controls="purchaseOrderDetails">
                <div class="d-flex fs-4">
                    <p>Update</p>
                    <i class="bi bi-pencil-square ps-3 fs-3"></i>
                </div>
            </button>

        </div>


        <div class="offcanvas offcanvas-end" tabindex="-1" id="purchaseOrderDetails"
            aria-labelledby="purchaseOrderDetailsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="purchaseOrderDetailsLabel">{{ purchaseOrder.name }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <div class="container">
                        <img :src="`${publicPath}${purchaseOrder.img}`" alt="" class="w-100">
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
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
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
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.name">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Price</th>
                                                    <td class="">
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="'₹ ' + activePurchaseOrder.price + '/mtr'">
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">MOQ</th>
                                                    <td>
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.moq">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Length</th>
                                                    <td>
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.length">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Width</th>
                                                    <td>
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.width">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">GSM</th>
                                                    <td>
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.gsm">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Color</th>
                                                    <td>
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.color">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Design</th>
                                                    <td>
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.design">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Construction</th>
                                                    <td>
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.construction">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Processes</th>
                                                    <td>
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.processes">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Discription</th>
                                                    <td>
                                                        <input type="text" class="form-control-plaintext" id="staticEmail"
                                                            :value="activePurchaseOrder.discription">
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

        <FabricColors :poColors="purchaseOrder.colors"></FabricColors>

    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import FabricColors from './FabricColors.vue';

export default {
    components: { FabricColors },
    mixins: [imagePath], 
     data() {
        return {
            values: {
                rate: [],
                qty: [],
            },
            gst: 0.18,
            count: 1,
            activeProduct: {},
        };
    },
    mounted() {
        console.log()
    },
    computed: {
        purchaseOrders() {
            return this.$store.getters["supplier/getPurchaseOrders"];
        },
        purchaseOrder() {
            return this.$store.getters["supplier/getPurchaseOrderx"](this.$route.params.purchaseOrderId);
        },
        items() {
            return this.$store.getters["supplier/getItems"];
        },
        activePurchaseOrder() {
            return this.$store.getters["supplier/getPurchaseOrder"];
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
       
       
    },
}
</script>

<style lang="scss" scoped></style>