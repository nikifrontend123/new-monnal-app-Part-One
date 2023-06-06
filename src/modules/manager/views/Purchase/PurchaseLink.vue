<template>
    <nav>
        <div class="nav nav-tabs py-2 d-flex justify-content-between" style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link text-decoration-none" :class="currentRouteName === 'PurchaseFabric' ? 'active' : ''" to="/PurchaseFabric">Fabric</RouterLink>
            <RouterLink class="nav-link text-decoration-none" :class="currentRouteName === 'PurchaseSample' ? 'active' : ''" to="/PurchaseSample">Samples</RouterLink>
            <RouterLink class="nav-link text-decoration-none" :class="currentRouteName === 'PurchasePo' ? 'active' : ''" to="/PurchasePo">PO</RouterLink>
            <RouterLink class="nav-link text-decoration-none" :class="currentRouteName === 'PurchaseP' ? 'active' : ''" to="/PurchaseP">Purchase</RouterLink>
            <RouterLink class="nav-link text-decoration-none" :class="currentRouteName === 'PurchaseBill' ? 'active' : ''" to="/PurchaseBill">Bills</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    }
}
</script>