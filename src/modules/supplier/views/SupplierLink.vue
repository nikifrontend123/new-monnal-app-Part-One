<template>
    <div class="nav nav-tabs py-2" style="font-size: 15px; font-weight: 500;" id="nav-tab" role="tablist">
        <RouterLink class="nav-link " :class="currentRouteName === 'SupplierFabric' ? 'active' : ''" to="/SupplierFabric">Fabric
        </RouterLink>
        <RouterLink class="nav-link " :class="currentRouteName === 'SupplierSample' ? 'active' : ''" to="/SupplierSample">Sample
        </RouterLink>
        <RouterLink class="nav-link " :class="currentRouteName === 'SupplierPo' ? 'active' : ''" to="/SupplierPo">PO</RouterLink>
        <RouterLink class="nav-link " :class="currentRouteName === 'SupplierShipment' ? 'active' : ''" to="/SupplierShipment">Shipment
        </RouterLink>
        <RouterLink class="nav-link " :class="currentRouteName === 'SupplierBill' ? 'active' : ''" to="/SupplierBill">Bills
        </RouterLink>
    </div>
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