<template>
    <div>
        <StoreAppLayout></StoreAppLayout>
        <div v-for="(storegrn , index) in storegrns" :key="index" class="container d-flex border py-2">
            <div class="">
                <img :src="`${publicPath}${storegrn.img}`" width="60" class="rounded-circle border" alt="">
            </div>
            <div class="ms-2">
                <div class="fw-bold">{{storegrn.name}}</div>
                <div style="font-size: 12px;" class="text-success">Qtyy: {{storegrn.qty}} | Date: {{storegrn.date}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import StoreAppLayout from '../layouts/StoreAppLayout.vue';

export default {
    name: "NewPage",
    components: { StoreAppLayout },
    mixins: [ imagePath ],
    computed: {
        storegrns(){
            return this.$store.getters['store/getStoregrn']
        }
    }
}
</script>

<style lang="scss" scoped></style>