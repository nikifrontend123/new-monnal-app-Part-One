<template>
    <div>
        
        <!-- <PurchaseLink active="Purchase"></PurchaseLink> -->
        <ManagerLink active="Sale"></ManagerLink>
        <SearchBar></SearchBar>
        <h1>Manager Sale</h1>
    </div>
</template>

<script>
import SearchBar from '@/components/comman/SearchBar.vue';
import ManagerLink from '../ManagerLink.vue';

export default {
    components: { ManagerLink, SearchBar }
}
</script>

<style lang="scss" scoped></style>