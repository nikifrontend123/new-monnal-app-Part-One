<template>
    <div>
        <ManagerAppLayout></ManagerAppLayout>
        <div v-for="(sample, index) in samples" :key="index" class=" mt-2" @click="showSample(sample)">
            <!-- <RouterLink to="/SampleDetailPage" style="text-decoration: none;"> -->
            <div class="d-flex container">
                <div class="img">
                    <img :src="`${publicPath}${sample.img}`" class="border border2 border-dark"
                        style="width: 60px; height: 60px; border-radius: 50%;">
                </div>
                <div class=" w-100 d-flex justify-content-between ms-2 text-dark">
                    <div class="">
                        <p class="m-0 fw-bold">{{ sample.name }}</p>
                        <div class=" text-dark" style="font-size: 13px;">
                            <p class="m-0" :class="sample.textcolor">{{ sample.text }}</p>
                        </div>
                    </div>
                    <div class=" d-flex align-items-center">
                        <p class="m-0">09/05/2023</p>
                    </div>
                </div>
            </div>
            <!-- </RouterLink> -->
        </div>
        <div v-if="Object.keys(activeSample).length !== 0">
            <div id="sampleDetailCanvas" class="offcanvas offcanvas-end show" data-bs-backdrop="static"
                tabindex="-1" aria-labelledby="staticBackdropLabel">
                <div class="d-flex justify-content-center align-items-center">
                    <div class=" w-100 d-flex justify-content-center align-items-center">
                        <p class="fw-bold text-center m-0">{{ activeSample.name }}</p>
                    </div>
                    <div class="d-flex justify-content-end w-100">
                        <button type="button" class="btn" @click="hideSample()"><i class="bi bi-x fs-3"></i></button>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <div class="container">
                            <img :src="`${publicPath}${activeSample.img}`" alt="" class="w-100">
                        </div>
                        <div class="text-center">
                            <p>{{ activeSample.name }}</p>
                            <p>{{ activeSample.tag }} </p>
                        </div>

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Fabric Details
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="form container w-100">
                                            <table class="table w-100">
                                                <tbody class="">
                                                    <tr>
                                                        <th scope="row">Name</th>
                                                        <td>{{ activeSample.name }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Price</th>
                                                        <td>{{ activeSample.price }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">MOQ</th>
                                                        <td>{{ activeSample.moq }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">length</th>
                                                        <td>{{ activeSample.length }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Width</th>
                                                        <td>{{ activeSample.width }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">GSM</th>
                                                        <td>{{ activeSample.gsm }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Color</th>
                                                        <td>{{ activeSample.color }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Design</th>
                                                        <td>{{ activeSample.design }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Construction</th>
                                                        <td>{{ activeSample.construction }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Processes</th>
                                                        <td>{{ activeSample.processes }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Discription</th>
                                                        <td>{{ activeSample.discription }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Sample Dispatch Details
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="form container w-100">
                                            <table class="table w-100">
                                                <tbody class="">
                                                    <tr>
                                                        <th scope="row">Dispatch Date</th>
                                                        <td>20-05-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Dispatch No.</th>
                                                        <td>4561196515</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-evenly mt-3 ">
                            <div class="btn btn-success">Create PO</div>
                            <div class="btn btn-danger">Reject Sample</div>
                            <div class="btn btn-warning">Resend</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import ManagerAppLayout from '../../layouts/ManagerAppLayout.vue';

export default {
    components: { ManagerAppLayout },
    mixins: [ imagePath ],
    computed: {
        samples() {
            return this.$store.getters['manager/getSamples']
        },
        activeSample() {
            return this.$store.getters['manager/getSample'];
        },
    },
    methods: {
        showSample(sample) {
            return this.$store.dispatch('manager/selectSample', sample);
        },
        hideSample() {
            return this.$store.dispatch('manager/hideSample');
        }

    },
}
</script>

<style lang="scss" scoped></style>