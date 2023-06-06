<template>
    <div>
        <ShipmentLink></ShipmentLink>
        <div class="container">
            <select class="form-select" aria-label="Default select example">
            <option selected>Select Shipment</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>

        <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-primary">Submit</button>
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