<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="active === 'SkGrn' ? 'active' : ''" to="/store-keeper">Inward</RouterLink>
            <RouterLink class="nav-link " :class="active === 'SkGdn' ? 'active' : ''" to="/SkGdn">Outward</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>