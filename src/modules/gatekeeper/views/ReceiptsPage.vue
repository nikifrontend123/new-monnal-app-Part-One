<template>
    <div>
        <GkLink></GkLink>
        <SearchBar></SearchBar>
        <div v-for="(receipt, index) in receipts" :key="index" class="container border-bottom">
            <div class="d-flex justify-content-between w-100 py-2" @click="showReceipt(receipt)">
                <div class="d-flex">
                    <div class="border border-2 border-dark rounded-circle">
                        <p class="m-0 text-center d-flex justify-content-center align-items-center fw-bold"
                            style="width: 60px; height: 60px; border-radius: 50px;">{{ receipt.date }}</p>
                    </div>
                    <div class="">
                        <p class="m-0 ps-2  fw-bold">{{ receipt.name }}</p>
                        <p class="m-0 ps-2 ">{{ receipt.shipment }}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center text-center place-item-center align-items-center ">
                    <i class="bi bi-box me-2"></i>
                    <p class="m-0">{{ receipt.boxes }}</p>
                </div>
            </div>
        </div>
        <!-- ---------------------------------------------------------------------------- -->
        <!-- <div v-if="Object.entries(activeReceipt).length" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" -->
        <div v-if="Object.entries(activeReceipt).length" class="offcanvas offcanvas-start show" tabindex="-1">
            <div class="offcanvas-header border-bottom">
                <div class="d-flex justify-content-between w-100">
                    <div class="d-flex">
                        <div class="border border-2 border-dark rounded-circle">
                            <p class="m-0 text-center d-flex justify-content-center align-items-center fw-bold"
                                style="width: 60px; height: 60px; border-radius: 50px;">{{ activeReceipt.date }}</p>
                        </div>
                        <div class="">
                            <p class="m-0 ps-2  fw-bold">{{ activeReceipt.name }}</p>
                            <p class="m-0 ps-2 ">{{ activeReceipt.shipment }}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center ">
                        <i class="bi bi-box me-2"></i>
                        <p class="m-0">{{ activeReceipt.boxes }}</p>
                    </div>
                </div>
                <button type="button" class="btn-close" @click="hideReceipt" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p class="text-center">Please Hit the Received Button of the same number of Parcel you physically received
                    in this Shipment.</p>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i class="bi bi-box"></i> <span class="fw-bold ms-2">LR - 152851369-01</span>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Packaging Type</p>
                                    <p class="m-0">Plastic Bag</p>
                                </div>
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Color of Package</p>
                                    <p class="m-0">White</p>
                                </div>
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Weight in Kgs.</p>
                                    <p class="m-0">1000kg</p>
                                </div>
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Bilty No.</p>
                                    <p class="m-0">45615320</p>
                                </div>
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Invoice No.</p>
                                    <p class="m-0">456465156</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" d-flex justify-content-center align-items-center w-100 px-2 py-2 border">
                    <button class="btn btn-primary w-75">Parcel Received
                    </button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import SearchBar from '@/components/comman/SearchBar.vue';
import GkLink from './GkLink.vue';
// import { imagePath } from '@/mixins/imagePath';

export default {
    components: { GkLink, SearchBar },
    // name: 'SuppliersPage',
    // mixins: [imagePath],
    computed: {
        receipts() {
            return this.$store.getters['gatekeeper/getReceipts'];
        },
        activeReceipt() {
            return this.$store.getters['gatekeeper/getReceipt'];
        },
    },
    methods: {
        showReceipt(receipt) {
            return this.$store.dispatch('gatekeeper/selectReceipt', receipt);
        },
        hideReceipt() {
            return this.$store.dispatch('gatekeeper/hideReceipt');
        }
    }
}
</script>

<style lang="scss" scoped></style>


 

