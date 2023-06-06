<template>
    <div>
        <div>
            <AppLayout></AppLayout>
            <div class="container">
                <div v-for="(supshipment, index) in supshipments" :key="index" class="py-1"
                    @click="showSupshipment(supshipment)">
                    <div class="card py-2 px-1">
                        <div class="d-flex justify-content-between ">
                            <div class="d-flex">
                                <p class="border border-dark d-flex justify-content-center align-items-center"
                                    style="width: 60px; height: 60px; border-radius: 50%;">
                                    {{ supshipment.date }}
                                </p>
                                <div class="ms-1 fw-bold">
                                    <p class="mb-0">Invoice No. : {{ supshipment.invoice }}</p>
                                    <p class="mb-0">Shipment ID : {{ supshipment.shipmentID }}</p>
                                </div>
                            </div>
                            <div class=" d-flex align-items-center">
                                <p class="text-center" :class="supshipment.textcolor">{{ supshipment.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="Object.keys(activeSupshipment).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class=" w-100 d-flex justify-content-center align-items-center">
                            <p class="fw-bold text-center m-0">{{ activeSupshipment.name }}</p>
                        </div>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn" @click="hideSupshipment()"><i
                                    class="bi bi-x fs-3"></i></button>
                        </div>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div class="container">
                                <img :src="`${publicPath}${activeSupshipment.img}`" alt="" class="w-100">
                            </div>
                            <div class="text-center">
                                <p>{{ activeSupshipment.name }}</p>
                                <p>{{ activeSupshipment.tag }}</p>
                            </div>
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold bg-primary text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                            Tracking Detail
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <StageStepper stage='2'></StageStepper>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mt-3">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold bg-primary text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Dispatch Details
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapsefive" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <button class="btn btn-warning w-100">Create New Shipment</button>
                                            <p class="text-decoration-underline mt-2 fs-5">Bilty Details</p>
                                            <div class="form form-control-sm">
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between">
                                                    <p class="m-0 fw-bold">Packaging</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">No. of Packages</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Weight in Kgs.</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Upload Bilty</p>
                                                    <input class="form-control-sm" type="file">
                                                </div>
                                            </div>
                                            <p class="text-decoration-underline mt-2 fs-5">Invoice Details</p>
                                            <div class="form form-control-sm">
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between">
                                                    <p class="m-0 fw-bold">Date</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Invoice No.</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Purchase Amt</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Total Amt</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Upload Invoice</p>
                                                    <input class="form-control-sm" type="file">
                                                </div>
                                            </div>
                                            <p class="text-decoration-underline mt-2 fs-5">Add Fabric to Shipment</p>
                                            <div>
                                                <div class=" w-100 d-flex">
                                                    <input class="form-control-sm p-0 px-1" v-model="newFabric" type="text"
                                                        placeholder="Add New Fabric" />
                                                    <button class="btn btn-secondary p-0 px-1 rounded-0"
                                                        @click="addFabric">Add
                                                        Fabric</button>
                                                </div>
                                                <div v-for="(fabric, index) in fabrics" :key="index"
                                                    class="d-flex justify-content-between mt-2">
                                                    <p class="m-0 d-flex justify-content-center">{{ fabric }}</p>
                                                    <select class="form-select form-select-sm mb-3 w-75"
                                                        style="font-size: 13px;" aria-label=".form-select-sm">
                                                        <option selected>Select Fabric</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div class="form form-control-sm">
                                                    <div
                                                        class="d-flex border-bottom pb-2 align-items-center justify-content-between">
                                                        <p class="m-0 fw-bold">Total Amount</p>
                                                        <input class="form-control-sm" type="text">
                                                    </div>
                                                    <div class="btn btn-warning d-flex justify-content-center mt-2">Submit
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
    mixins: [imagePath],
    data() {
        return {
            newFabric: "",
            fabrics: ['Fabric']
        }
    },
    computed: {
        supshipments() {
            return this.$store.getters['supplier/getSupshipments']
        },
        activeSupshipment() {
            return this.$store.getters['supplier/getSupshipment'];
        },
    },
    methods: {
        showSupshipment(supshipment) {
            return this.$store.dispatch('supplier/selectSupshipment', supshipment);
        },
        hideSupshipment() {
            return this.$store.dispatch('supplier/hideSupshipment');
        },
        addFabric() {
            if (this.newFabric !== "") {
                this.fabrics.push(this.newFabric);
                this.newFabric = "";
            }
        },

    },
}
</script>

<style scoped>
input {
    border: none;
    border-bottom: 1px solid;
    border-radius: 0px;
}
</style>