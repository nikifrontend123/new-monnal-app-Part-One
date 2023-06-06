<template>
    <div class="nav nav-tabs py-2" style="font-size: 15px; font-weight: 500;" id="nav-tab" role="tablist">
        <RouterLink class="nav-link " :class="currentRouteName === 'SupplierShipmentPage' ? 'active' : ''" :to="{ name: 'SupplierShipmentPage'}">
            Create
        </RouterLink>
        <RouterLink class="nav-link " :class="currentRouteName === 'ShipmentPreparePage' ? 'active' : ''" :to="{name: 'ShipmentPreparePage'}">
            Prepare
        </RouterLink>
        <RouterLink class="nav-link " :class="currentRouteName === 'ShipmentShippedPage' ? 'active' : ''" :to="{name: 'ShipmentShippedPage'}">
            Shipped
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