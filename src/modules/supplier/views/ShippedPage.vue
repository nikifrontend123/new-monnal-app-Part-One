<template>
    <div>
        <ParcelLink></ParcelLink>
        <div v-for="(po, index) in purchaseOrders" :keys="index" class="">
            <div class="d-flex justify-content-between w-100 p-2 border-bottom" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                <div class="d-flex align-items-center">
                    <img :src="`${publicPath}${po.img}`" class="rounded-circle border" style="width: 60px; height: 60px;">
                    <div class="">
                        <p class="m-0 fw-bold"> {{ po.po }}</p>
                        <p class="m-0 "> Black: 8</p>
                    </div>
                </div>
                <p class="d-flex text-success align-items-center">
                    Received
                </p>
            </div>
            <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <div class="py-1">
                            <img :src="`${publicPath}${po.img}`" class="rounded-circle border"
                                style="width: 30px; height: 30px;">
                            {{ po.po }}
                        </div>
                        <div class="">
                            <TextInputs type="text" name="LR No."></TextInputs>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextInputs from '@/components/comman/TextInputs.vue';
import ParcelLink from './ParcelLink.vue';
import { imagePath } from '@/mixins/imagePath';


export default {
    components: { ParcelLink, TextInputs },
    mixins: [imagePath],
    computed: {
        purchaseOrders() {
            return this.$store.getters["supplier/getPurchaseOrders"];
        },
    }
}
</script>

<style lang="scss" scoped></style>