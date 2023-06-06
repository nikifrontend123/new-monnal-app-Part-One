<template>
    <div class="">
        <div class="topnav d-flex justify-content-between container border-bottom py-1">
            <div class="d-flex justify-content-between">
                <div class="d-flex">
                    <RouterLink to="/Supplier">
                        <i class="bi bi-arrow-left-short text-dark fs-3"></i>
                    </RouterLink>
                    <p class="bi bi-person-circle m-0 fw-bold fs-5 ms-2 text-dark"><span class="ms-2">Himanshu</span></p>
                </div>
                <slot name="topNav"></slot>
            </div>
        </div>
        <SupplierLink></SupplierLink>
        <SearchBar></SearchBar>
        <slot></slot>
        
    </div>
</template>

<script>
import SearchBar from '@/components/comman/SearchBar.vue';
import SupplierLink from '../views/SupplierLink.vue';
import BottomNav from '@/components/comman/BottomNav.vue';

export default {
    components: { SearchBar, SupplierLink, BottomNav }
}
</script>

<style lang="scss" scoped></style>