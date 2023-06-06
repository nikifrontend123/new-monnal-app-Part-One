<template>
    <div>
        <StoreAppLayout></StoreAppLayout>
        <div v-for="(storeqc, index) in storeqcs" :key="index" class="container d-flex justify-content-between border py-2">
            <div class="">
                <img :src="`${publicPath}${storeqc.img}`" width="60" class="rounded-circle border" alt="">
            </div>
            <div class="">
                <div class="fw-bold">{{ storeqc.name }}</div>
                <div :class="storeqc.text">Qty: {{ storeqc.qty }} | Date: {{ storeqc.date }}</div>
            </div>
            <div class="fs-2">
                <div :class="storeqc.icon"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import StoreAppLayout from '../layouts/StoreAppLayout.vue';

export default {
    components: {StoreAppLayout },
    mixins: [ imagePath ],
    computed: {
        storeqcs() {
            return this.$store.getters['store/getStoreqc']
        }
    }
}
</script>

<style lang="scss" scoped></style>