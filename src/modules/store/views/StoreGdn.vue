<template>
    <div>
        <StoreAppLayout></StoreAppLayout>
        <div v-for="(storegdn, index) in storegdns" :key="index" class="container d-flex border py-2">
            <div class="">
                <img :src="`${publicPath}${storegdn.img}`" width="60" class="rounded-circle border" alt="">
            </div>
            <div class="ms-2">
                <div class="fw-bold">{{ storegdn.name }}</div>
                <div style="font-size: 12px;" class=" text-danger">Qty: {{ storegdn.qty }} | Date: {{ storegdn.date }}</div>
            </div>
        </div>
    </div>
</template>

<script> 
import { imagePath } from '@/mixins/imagePath';
import StoreAppLayout from '../layouts/StoreAppLayout.vue';

export default {
    components: { StoreAppLayout },
    mixins: [imagePath],
    computed: {
        storegdns() {
            return this.$store.getters['store/getStoregdn']
        }
    }
}
</script>

<style lang="scss" scoped></style>