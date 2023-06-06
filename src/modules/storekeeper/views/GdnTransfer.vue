<template>
    <div>
        <div class="d-flex justify-content-between border-bottom px-2">
            <RouterLink to="/SkGdn">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center py-2">Outward</h4>
            <div class=""></div>
        </div>
        <GdnLink active="Transfer"></GdnLink>
        <h1>Iam Gdn Transfer</h1>
    </div>
</template>

<script>
import GdnLink from './GdnLink.vue';

    export default {
    components: { GdnLink }
}
</script>

<style lang="scss" scoped>

</style>