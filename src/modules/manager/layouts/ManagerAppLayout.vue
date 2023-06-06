<template>
    <div>
        <div class="topnav d-flex justify-content-between container border-bottom py-2">
            <div class="d-flex">
                <RouterLink to="/manager">
                    <i class="bi bi-arrow-left-short text-dark fs-3"></i>
                </RouterLink>
                <!-- <i class="bi bi-person-circle fs-3 ms-2"></i> -->
                <!-- <RouterLink to="/ProfileDetail" style="text-decoration: none;"> -->
                <p class="bi bi-person-circle m-0 fw-bold fs-5 ms-2 text-dark"><span class="ms-2">Himanshu</span></p>
                <!-- </RouterLink> -->
            </div>
            <div class="d-flex">
                <slot></slot>
            </div>
        </div> 
        <PurchaseLink></PurchaseLink>
        <SearchBar></SearchBar>
    </div>
</template>

<script>
import SearchBar from '@/components/comman/SearchBar.vue';
import PurchaseLink from '../views/Purchase/PurchaseLink.vue';

    export default {
    components: {  SearchBar, PurchaseLink }
}
</script>

<style lang="scss" scoped>

</style>