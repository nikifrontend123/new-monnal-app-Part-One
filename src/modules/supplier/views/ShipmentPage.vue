<template>
    <div>
        <ShipmentLink></ShipmentLink>

        <div class="">
            <div class="list-group">
                <div class="form-group d-flex list-group-item py-3 container">
                <label class="d-flex align-items-center">Invoice Number</label>
                <div class="d-flex justify-content-center">
                    <input type="text" class="form-control ms-2" placeholder="Invoice Number">
                </div>
            </div>
            <div class="form-group d-flex list-group-item py-3 container">
                <label class="d-flex align-items-center">E-Way Bill No.</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control ms-2" placeholder="Bill No.">
                </div>
            </div>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-primary">Create Shipment</button>
            </div>
        </div>
    </div>
</template>

<script>
import ShipmentLink from './ShipmentLink.vue';

export default {
    components: { ShipmentLink }
}
</script>

<style lang="scss" scoped></style>