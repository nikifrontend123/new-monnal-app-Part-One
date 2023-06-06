<template>
    <div>
        <div>
           <AppLayout></AppLayout>
            <div v-for="(supbill, index) in supbills" :key="index" @click="showSupbill(supbill)"
                class="d-flex w-100 py-2 border-bottom container">
                <div class="d-flex w-100 py-1">
                    <div class="border border-2 border-dark rounded-circle">
                        <p class="m-0 d-flex justify-content-center align-items-center fw-bold"
                            style="width: 60px; height: 60px; border-radius: 50px;">{{ supbill.date }}</p>
                    </div>
                    <div>
                        <div class="w-100">
                            <p class="m-0 ps-2  fw-bold">{{ supbill.text }}</p>
                        </div>
                        <div class="d-flex align-items-center w-100">
                            <div class="d-flex" style="font-size: 14px;">
                                <p class="m-0 ps-2 ">Innvoice: {{ supbill.invoice }}</p>
                                <p class="m-0 ps-2 ">CID: {{ supbill.cid }}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="fw-bold">
                    <p :class="supbill.txtcolor">{{ supbill.text1 }}</p>
                </div>
            </div>
            <div v-if="Object.keys(activeSupbill).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class=" w-100 d-flex justify-content-center align-items-center">
                            <!-- <p class="fw-bold text-center m-0">{{ activeSupbill.name }}</p> -->
                        </div>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn" @click="hideSupbill()"><i class="bi bi-x fs-3"></i></button>
                        </div>
                    </div>
                    <div class="overflow-scroll">
                        <div class="d-flex w-100 py-2 border-bottom container">
                            <div class="d-flex w-100 ">
                                <div class="border border-2 border-dark rounded-circle">
                                    <p class="m-0 d-flex justify-content-center align-items-center fw-bold"
                                        style="width: 60px; height: 60px; border-radius: 50px;">{{ activeSupbill.date }}</p>
                                </div>
                                <div>
                                    <p class="m-0 ps-2  fw-bold">{{ activeSupbill.text }}</p>
                                    <div class="d-flex" style="font-size: 14px;">
                                        <p class="m-0 ps-2 ">Innvoice: {{ activeSupbill.invoice }}</p>
                                        <p class="m-0 ps-2 ">CID: {{ activeSupbill.cid }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold">
                                <p :class="activeSupbill.txtcolor">{{ activeSupbill.text1 }}</p>
                            </div>
                        </div>
                        <div class=" d-flex justify-content-center">
                            <img :src="`${publicPath}${activeSupbill.img}`" class="rounded-circle border border-dark"
                                alt="">
                        </div>
                        <p class="text-center fs-5 ">{{ activeSupbill.name }}</p>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Tracking Details
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <StageStepper stage='2'></StageStepper>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Invoice Details
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="form container">
                                            <table class="table w-100">
                                                <tbody class="">
                                                    <tr>
                                                        <th scope="row">Date</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Invoice No.</th>
                                                        <td class="">
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail">
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Purchase Amt</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Total Amt</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Invoice</th>
                                                        <td>
                                                            <input type="file" class="form-control">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Shipment Details
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="form container">
                                            <table class="table w-100">
                                                <tbody class="">
                                                    <tr>
                                                        <th scope="row">Packaging Type</th>
                                                        <td class="">
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail">
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">No. of Package</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Weight in Kgs.</th>
                                                        <td>
                                                            <input type="text" class="form-control-plaintext"
                                                                id="staticEmail">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Bilty</th>
                                                        <td>
                                                            <input type="file" class="form-control">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        QC Report
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <StageStepper stage='2'></StageStepper>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Contain Fabrics
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse " aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <StageStepper stage='2'></StageStepper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StageStepper from '@/components/comman/StageStepper.vue';
import { imagePath } from '@/mixins/imagePath';
import AppLayout from '../layouts/AppLayout.vue';

export default {
    components: { StageStepper, AppLayout },
    mixins: [ imagePath ],
    computed: {
        supbills() {
            return this.$store.getters['supplier/getSupbills']
        },
        activeSupbill() {
            return this.$store.getters['supplier/getSupbill'];
        },
    },
    methods: {
        showSupbill(supbill) {
            return this.$store.dispatch('supplier/selectSupbill', supbill);
        },
        hideSupbill() {
            return this.$store.dispatch('supplier/hideSupbill');
        },
    }
}
</script>

<style lang="scss" scoped></style>