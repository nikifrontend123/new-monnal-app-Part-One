<template>
    <div>
        <div class="topnav d-flex justify-content-between container py-2">
            <div class="d-flex">
                <RouterLink to="/store">
                    <i class="bi bi-arrow-left-short text-dark fs-3"></i>
                </RouterLink>
                <!-- <RouterLink to="/ProfileDetail" style="text-decoration: none;"> -->
                <p class="bi bi-person-circle m-0 fw-bold fs-5 ms-2 text-dark"><span class="ms-2">Himanshu</span></p>
                <!-- </RouterLink> -->
            </div>
            <div class="d-flex">
            </div>
        </div>
        <StoreLink></StoreLink>
        <SearchBar></SearchBar>
    </div>
</template>

<script>
import SearchBar from '@/components/comman/SearchBar.vue';
import StoreLink from '../views/StoreLink.vue';

export default {
    components: { StoreLink, SearchBar }
}
</script>

<style lang="scss" scoped></style>