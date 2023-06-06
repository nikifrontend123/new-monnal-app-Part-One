<template>
    <div>
        <ShipmentLink></ShipmentLink>
        <div class="list-group">
            <div v-for="(shipped, index) in purchaseOrder" :keys="index" class="list-group-item">
                <div class="d-flex justify-content-between">
                    <div class="d-flex w-75">
                        <img :src="`${publicPath}${shipped.img}`" class="rounded-circle border"
                            style="width: 60px; height: 60px;">
                        <div class="">
                            <p class="m-0 d-flex align-items-center">PO-{{ shipped.po }}</p>
                            <p>Black :5</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <input class="form-control" type="text">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import ShipmentLink from './ShipmentLink.vue';
import { imagePath } from '@/mixins/imagePath';


export default {
    components: { ShipmentLink },
    mixins: [imagePath],
    computed: {
        purchaseOrder() {
            return this.$store.getters["supplier/getPurchaseOrders"];
        },
    },
}
</script>

<style lang="scss" scoped></style>