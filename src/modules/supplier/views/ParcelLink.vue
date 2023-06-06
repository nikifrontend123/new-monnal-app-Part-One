<template>
    <div class="nav nav-tabs py-2" style="font-size: 15px; font-weight: 500;" id="nav-tab" role="tablist">
        <RouterLink class="nav-link " :class="currentRouteName === 'SupplierParcelPage' ? 'active' : ''" :to="{ name: 'SupplierParcelPage'}">
            Create
        </RouterLink>
        <RouterLink class="nav-link " :class="currentRouteName === 'SupplierReadyPage' ? 'active' : ''" :to="{name: 'SupplierReadyPage'}">
            Ready
        </RouterLink>
        <RouterLink class="nav-link " :class="currentRouteName === 'SupplierShippedPage' ? 'active' : ''" :to="{name: 'SupplierShippedPage'}">
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