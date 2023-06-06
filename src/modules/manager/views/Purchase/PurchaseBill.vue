<template>
    <div>
        <div>
           <ManagerAppLayout></ManagerAppLayout>
            <div v-for="(detailbill, index) in detailbills" :key="index" @click="showDetailbill(detailbill)"
                class="d-flex w-100 py-2 border-bottom container">
                <div class="d-flex w-100 py-1">
                    <div class="border border-2 border-dark rounded-circle">
                        <p class="m-0 d-flex justify-content-center align-items-center fw-bold"
                            style="width: 60px; height: 60px; border-radius: 50px;">{{ detailbill.date }}</p>
                    </div>
                    <div>
                        <div class="w-100">
                            <p class="m-0 ps-2  fw-bold">{{ detailbill.text }}</p>
                        </div>
                        <div class="d-flex align-items-center w-100">
                            <div class="d-flex" style="font-size: 14px;">
                                <p class="m-0 ps-2 ">Innvoice: {{ detailbill.invoice }}</p>
                                <p class="m-0 ps-2 ">CID: {{ detailbill.cid }}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="fw-bold">
                    <p :class="detailbill.txtcolor">{{ detailbill.text1 }}</p>
                </div>
            </div>
            <div v-if="Object.keys(activeDetailbill).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class=" w-100 d-flex justify-content-center align-items-center">
                            <!-- <p class="fw-bold text-center m-0">{{ activeSupbill.name }}</p> -->
                        </div>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn" @click="hideDetailbill()"><i
                                    class="bi bi-x fs-3"></i></button>
                        </div>
                    </div>
                    <div class="overflow-scroll">
                        <div class="d-flex w-100 py-2 border-bottom container">
                            <div class="d-flex w-100 ">
                                <div class="border border-2 border-dark rounded-circle">
                                    <p class="m-0 d-flex justify-content-center align-items-center fw-bold"
                                        style="width: 60px; height: 60px; border-radius: 50px;">{{ activeDetailbill.date }}
                                    </p>
                                </div>
                                <div>
                                    <p class="m-0 ps-2  fw-bold">{{ activeDetailbill.text }}</p>
                                    <div class="d-flex" style="font-size: 14px;">
                                        <p class="m-0 ps-2 ">Innvoice: {{ activeDetailbill.invoice }}</p>
                                        <p class="m-0 ps-2 ">CID: {{ activeDetailbill.cid }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold">
                                <p :class="activeDetailbill.txtcolor">{{ activeDetailbill.text1 }}</p>
                            </div>
                        </div>
                        <div class=" d-flex justify-content-center">
                            <img :src="`${publicPath}${activeDetailbill.img}`" class="rounded-circle border border-dark"
                                alt="">
                        </div>
                        <p class="text-center fs-5 ">{{ activeDetailbill.name }}</p>
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
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
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
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
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
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
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
import ManagerAppLayout from '../../layouts/ManagerAppLayout.vue';

export default {
    components: { StageStepper, ManagerAppLayout },
    mixins: [imagePath],
    computed: {
        detailbills() {
            return this.$store.getters['manager/getDetailbills']
        },
        activeDetailbill() {
            return this.$store.getters['manager/getDetailbill'];
        },
    },
    methods: {
        showDetailbill(dtailbill) {
            return this.$store.dispatch('manager/selectDetailbill', dtailbill);
        },
        hideDetailbill() {
            return this.$store.dispatch('manager/hideDetailbill');
        },
    }
}
</script>

<style lang="scss" scoped></style>