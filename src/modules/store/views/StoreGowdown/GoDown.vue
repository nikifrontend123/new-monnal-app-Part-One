<template>
    <div class="">
        <StoreLogin active="Search"></StoreLogin>
        <div v-for="(godown, index) in godowns" :key="index" class="container my-2">
            <RouterLink :to="'/GodownList/' + godown.id" class="text-decoration-none mt-2">
                <div class=" border border-dark bg-secondary text-white text-center py-2">
                    <p class="m-0 fs-4 fw-bold">{{ godown.name }}</p>
                    <i class="bi bi-shop-window fs-4"></i>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import StoreLogin from '../StoreLogin.vue';

export default {
    computed: {
        godowns() {
            return this.$store.getters["store/getGodowns"];
        }
    },
    components: { StoreLogin }
}
</script>

<style lang="scss" scoped></style>