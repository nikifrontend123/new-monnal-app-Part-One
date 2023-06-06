<template>
    <div>
        <AppLayout>
            <div class="d-flex">
                <div @click="test">
                    <BtnChange :design="dd"></BtnChange>
                </div>
                <!-- <i class="bi bi-search fs-3 ms-2"></i> -->
            </div>
        </AppLayout>
        <FabricCard :design="dd" :chatss="chatss"></FabricCard>
    </div>
</template>

<script>
import BtnChange from './BtnChange.vue';
import FabricCard from './FabricCard.vue';
import { imagePath } from '@/mixins/imagePath';
import AppLayout from '../layouts/AppLayout.vue';

export default {
    name: "SupplierFabric",
    components: { BtnChange, FabricCard, AppLayout },
    mixins: [imagePath],
    data() {
        return {
            dd: 1
        }
    },
    // computed:{
    //     chatss() {
    //         return this.$store.getters['supplier/getChatss']
    //     },
    // },
    methods: {
        test() {
            switch (this.dd) {
                case 1:
                    this.dd = 2;
                    break;
                case 2:
                    this.dd = 3;
                    break;
                case 3:
                    this.dd = 1;
                    break;
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>