<template>
    <div>
        <ParcelLink></ParcelLink>
        <div class="my-3 mx-2">
            <select class="form-select" aria-label="Default select example">
                <option selected>Select PO</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div class="text-center border py-3">
            <b>Please Enter bundles Count Of Each Colors</b>
        </div>
        <FabricColors :poColors="purchaseOrder"></FabricColors>
        <!-- <FabricColors v-for="(color, index) in purchaseOrder" :key="index" :color="color"></FabricColors> -->
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import FabricColors from './FabricColors.vue';
import ParcelLink from './ParcelLink.vue';

export default {
    components: { ParcelLink, FabricColors },
    mixins: [imagePath],
    computed: {
        purchaseOrder() {
            return this.$store.getters["supplier/getPurchaseOrders"];
        },
    },
    
}
</script>

<style lang="scss" scoped></style>