<template>
    <div>
        <div class="d-flex justify-content-between border-bottom px-2">
            <RouterLink to="/store-keeper">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center  py-2">Inward</h4>
            <div class=""></div>
        </div>
        <GrnLink active="Transfer" :shipmentId="this.$route.params.shipmentId"></GrnLink>
        <h1>Iam Transfer Page</h1>
    </div>
</template>

<script>
import GrnLink from './GrnLink.vue';

export default {
    components: { GrnLink }
}
</script>

<style lang="scss" scoped></style>