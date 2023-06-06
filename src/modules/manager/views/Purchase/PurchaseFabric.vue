<template>
    <div>
        <ManagerAppLayout>
            <div @click="test">
                <BtnChange :design="dd"></BtnChange>
            </div>
        </ManagerAppLayout>
        <PurchaseClothCard :design="dd" :chatss="chatss"></PurchaseClothCard>

    </div>
</template>

<script>
import ManagerAppLayout from '../../layouts/ManagerAppLayout.vue';
import BtnChange from './BtnChange.vue';
import PurchaseClothCard from './PurchaseClothCard.vue';

export default {
    name: "PurchaseFabric",
    components: {  PurchaseClothCard, BtnChange, ManagerAppLayout },
    data() { 
        return {
            publicPath: process.env.BASE_URL,
            dd: 1,
        }
    },
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
    computed: {
        chatss() {
            return this.$store.getters['manager/getChatss'];
        },
    }
}
</script>

<style lang="scss" scoped></style>