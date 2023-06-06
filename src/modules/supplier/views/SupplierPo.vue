<template>
    <div>
        <div>
            <AppLayout></AppLayout>
            <div class="container">
                <div v-for="(suppo, index) in suppos" :key="index" class="border-top py-2" @click="showSuppo(suppo)">
                    <div class="card py-3 px-1">
                        <div class="d-flex">
                            <img :src="`${publicPath}${suppo.img}`" class="border border2 border-dark"
                                style="width: 60px; height: 60px; border-radius: 50%;">
                            <div class="ms-2 text-dark">
                                <p class="m-0 fw-bold">{{ suppo.name }}</p>
                                <div class="d-flex">
                                    <p class="m-0 fw-bold">Qty : <span class="fw-light">{{ suppo.qty }}</span></p>
                                    <p class="m-0 ms-2 fw-bold">Amt : <span class="fw-light">{{ suppo.amt }}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="Object.keys(activeSuppo).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class=" w-100 d-flex justify-content-center align-items-center">
                            <p class="fw-bold text-center m-0">{{ activeSuppo.name }}</p>
                        </div>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn" @click="hideSuppo()"><i class="bi bi-x fs-3"></i></button>
                        </div>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div class="container">
                                <img :src="`${publicPath}${activeSuppo.img}`" alt="" class="w-100">
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
                                                            <!-- <td>{{ activeSuppo.name }}</td> -->
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.name">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Price</th>
                                                            <td class="">
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail"
                                                                    :value="'₹ ' + activeSuppo.price + '/mtr'">
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">MOQ</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.moq">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Length</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.length">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Width</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.width">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">GSM</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.gsm">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Color</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.color">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Design</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.design">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Construction</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.construction">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Processes</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.processes">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Discription</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activeSuppo.discription">
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
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import AppLayout from '../layouts/AppLayout.vue';

export default {
    components: { AppLayout },
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
        suppos() {
            return this.$store.getters['supplier/getSuppos']
        },
        items() {
            return this.$store.getters['supplier/getItems']
        },
        activeSuppo() {
            return this.$store.getters['supplier/getSuppo'];
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
        showSuppo(suppo) {
            return this.$store.dispatch('supplier/selectSuppo', suppo);
        },
        hideSuppo() {
            return this.$store.dispatch('supplier/hideSuppo');
        },
        // amount() {
        //     return (Math.round(quantity + quantity1 + quantity2)).toFixed(2);
        // },

    },

}
</script>

<style lang="scss" scoped></style>