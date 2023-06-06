<template>
    <div>
        <div>
           <ManagerAppLayout></ManagerAppLayout>
            <div v-for="(lr, index) in lrs" :key="index" class="d-flex mt-2 border-bottom py-2"
                @click="showLr(lr)">
                <div class="d-flex container">
                    <div class="img">
                        <img :src="`${publicPath}${lr.img}`" class="border border2 border-dark"
                            style="width: 60px; height: 60px; border-radius: 50%;">
                    </div>
                    <div class="ms-2 text-dark w-100">
                        <div class="d-flex justify-content-between">
                            <p class="m-0 fw-bold">{{ lr.name }}</p>
                            <p class="m-0" style="font-size: 14px;">PO-{{ lr.po }}</p>
                        </div>
                        <div class="d-flex text-dark">
                            <p class="m-0">Qty:{{ lr.qty }}</p>
                            <p class="m-0 ms-1">| Amt:{{ lr.amt }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="Object.keys(activeLr).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class=" w-100 d-flex justify-content-center align-items-center">
                            <p class="fw-bold text-center m-0">{{ activeLr.name }}</p>
                        </div>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn" @click="hideLr()"><i class="bi bi-x fs-3"></i></button>
                        </div>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div class="container">
                                <img :src="`${publicPath}${activeLr.img}`" alt="" class="w-100">
                            </div>
                            <div class="">
                                <p>{{ activeLr.name }}</p>
                                <p>{{ activeLr.tag }}</p>
                            </div>
                            <div class=" d-flex justify-content-center my-2 ">
                                <button class="btn btn-warning">Add to Favourite</button>
                            </div>
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne">
                                            Tracking Detail
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <StageStepper stage="2"></StageStepper>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo">
                                            Dispatch Details
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <p class="text-decoration-underline fw-bold">{{ activeLr.name }}</p>
                                            <p class="">{{ activeLr.tagid }}</p>
                                            <p class="fw-bold mb-0">Courier Id</p>
                                            <p class="m-0">{{ activeLr.courierid }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            Fabric Details
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <div class="form container">
                                                <table class="table w-100">
                                                    <tbody class="">
                                                        <tr>
                                                            <th scope="row">Name</th>
                                                            <td>{{ activeLr.name }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Price</th>
                                                            <td>{{ activeLr.price }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">MOQ</th>
                                                            <td>{{ activeLr.moq }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Length</th>
                                                            <td>{{ activeLr.length }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Width</th>
                                                            <td>{{ activeLr.width }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">GSM</th>
                                                            <td>{{ activeLr.gsm }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Color</th>
                                                            <td>{{ activeLr.color }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Design</th>
                                                            <td>{{ activeLr.design }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Construction</th>
                                                            <td>{{ activeLr.construction }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Processes</th>
                                                            <td>{{ activeLr.processes }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Discription</th>
                                                            <td>{{ activeLr.discription }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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
import PurchaseLink from './PurchaseLink.vue';
import ManagerAppLayout from '../../layouts/ManagerAppLayout.vue';

export default {
    components: { StageStepper, ManagerAppLayout },
    mixins: [ imagePath ],
    computed: {
        lrs() {
            return this.$store.getters['manager/getLrs']
        },
        activeLr() {
            return this.$store.getters['manager/getLr'];
        },
    },
    methods: {
        showLr(lr) {
            return this.$store.dispatch('manager/selectLr', lr);
        },
        hideLr() {
            return this.$store.dispatch('manager/hideLr');
        }
    },
}
</script>

<style lang="scss" scoped></style>