<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="currentRouteName === 'ReceiptsPage' ? 'active' : ''" to="/receipt-page">Receipts</RouterLink>
            <RouterLink class="nav-link " :class="currentRouteName === 'DeliveriesPage' ? 'active' : ''" to="/DeliveriesPage">Deliveries</RouterLink>
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