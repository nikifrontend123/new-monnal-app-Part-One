<template>
    <div>
        <GkLink></GkLink>
        <SearchBar></SearchBar>
        <div v-for="(delivery, index) in deliveries" :key="index" class="container border-bottom">
            <div class="d-flex w-100 py-2" @click="showDelivery(delivery)">
                <div class="border border-2 border-dark rounded-circle">
                    <p class="m-0 text-center d-flex justify-content-center align-items-center fw-bold"
                        style="width: 60px; height: 60px; border-radius: 50px;">{{ delivery.date }}</p>
                </div>
                <div class="">
                    <div class="w-100">
                        <p class="m-0 ps-2  fw-bold">{{ delivery.text }}</p>
                    </div>
                    <div class="d-flex w-100">
                        <div class="">
                            <p class="m-0 ps-2 ">Invoice: {{ delivery.invoice }}</p>
                        </div>
                        <div class="px-2 text-center">
                            <p class=""><i class="bi bi-record-circle-fill me-1"></i>{{ delivery.roll }}</p>
                        </div>
                        <div class="px-2 text-center">
                            <p class=""><i class="bi bi-stack me-1"></i>{{ delivery.stock }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="Object.entries(activeDelivery).length" class="offcanvas offcanvas-start show" tabindex="-1">
            <div class="offcanvas-header border-bottom">
                <div class="d-flex justify-content-between w-100">
                    <div class="d-flex">
                        <div class="border border-2 border-dark rounded-circle">
                            <p class="m-0 text-center d-flex justify-content-center align-items-center fw-bold"
                                style="width: 60px; height: 60px; border-radius: 50px;">{{ activeDelivery.date }}</p>
                        </div>
                        <div class="">
                            <p class="m-0 ps-2  fw-bold">{{ activeDelivery.text }}</p>
                            <p class="m-0 ps-2 ">Invoice: {{ activeDelivery.invoice }}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center ">
                        <div class="px-2 text-center">
                            <p class=""><i class="bi bi-record-circle-fill me-1"></i>{{ activeDelivery.roll }}</p>
                        </div>
                        <div class="px-2 text-center">
                            <p class=""><i class="bi bi-stack me-1"></i>{{ activeDelivery.stock }}</p>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn-close" @click="hideDelivery" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p class="text-center">
                    Please Hit the Dispatched Button of the same number of Roll & Bundle after the physical verification of
                    its Length itself. </p>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i class="bi bi-stack"></i> <span class="fw-bold ms-2">GDN - 152851369-01</span>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Fabric Name</p>
                                    <p class="m-0">Georget</p>
                                </div>
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Fabric Color</p>
                                    <p class="m-0">White</p>
                                </div>
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Pattern / Print</p>
                                    <p class="m-0">Mickey Mouse</p>
                                </div>
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Invoice No.</p>
                                    <p class="m-0">{{activeDelivery.invoice}}</p>
                                </div>
                                <div class="d-flex justify-content-between my-2">
                                    <p class="m-0 fw-bold">Fabric Length</p>
                                    <p class="m-0">150 mtr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" d-flex justify-content-center align-items-center w-100 px-2 py-2 border">
                    <button class="btn btn-primary w-75">Parcel Dispatched
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
// import { imagePath } from '@/mixins/imagePath';
import SearchBar from '@/components/comman/SearchBar.vue';
import GkLink from './GkLink.vue';
export default {
    components: { GkLink, SearchBar },
    // name: 'SuppliersPage',
    // mixins: [ imagePath ],
    computed: {
        deliveries() {
            return this.$store.getters['gatekeeper/getDeliveries'];
        },
        activeDelivery() {
            return this.$store.getters['gatekeeper/getDelivery'];
        },
    },
    methods: {
        showDelivery(delivery) {
            return this.$store.dispatch('gatekeeper/selectDelivery', delivery);
        },
        hideDelivery() {
            return this.$store.dispatch('gatekeeper/hideDelivery');
        }
    }

}
</script>

<style lang="scss" scoped></style>