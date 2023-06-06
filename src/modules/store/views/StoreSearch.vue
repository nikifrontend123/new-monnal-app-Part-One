<template>
    <div>
        <StoreLogin active="Display"></StoreLogin>
        <SearchBar></SearchBar>
        <hr style="margin: 1px 0; opacity: 1;">
        <div v-for="(store, index) in stores" :key="index" class=" container w-100">
            <RouterLink to="/StoreGrn" class="text-decoration-none">
                <div class="d-flex justify-content-between">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                            <img :src="`${publicPath}${store.imgDp}`"
                                style="width: 60px; height: 60px; border-radius: 50px;">
                        </div>
                        <div class=" align-items-center text-dark ">
                            <p class=" m-0 ps-2 fs-5 fw-bold">{{ store.name }}</p>
                            <p class=" m-0 ps-2 ">{{ store.add }}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center ">
                        <p class="badge bg-secondary">4</p>
                    </div>
                </div>
            </RouterLink>
        </div>

    </div>
</template>

<script>
import SearchBar from '@/components/comman/SearchBar.vue';
import StoreLogin from './StoreLogin.vue';
import { imagePath } from '@/mixins/imagePath';

export default {
    components:{
    SearchBar,
    StoreLogin,
    SearchBar
},
    mixins: [ imagePath ],
    computed: {
        stores() {
            return this.$store.getters['store/getStores'];
        }
    }

}
</script>

<style lang="scss" scoped></style>