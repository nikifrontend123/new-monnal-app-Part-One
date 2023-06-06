<template>
    <div>
        
        <!-- <PurchaseLink active="Purchase"></PurchaseLink> -->
        <ManagerLink active="ManagerP"></ManagerLink>
        <SearchBar></SearchBar>
        <div v-for="(chat, index) in chats" :key="index" class=" border-top w-100">
            <RouterLink to="/PurchaseFabric" class="text-decoration-none">
                <div class="d-flex justify-content-between container">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                            <img :src="`${publicPath}${chat.imgDp}`"
                                style="width: 60px; height: 60px; border-radius: 50px;">
                        </div>
                        <div class="d-flex align-items-center text-dark ">
                            <p class=" m-0 ps-2 fs-5">{{ chat.name }}</p>
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
import ManagerLink from '../ManagerLink.vue';
import { imagePath } from '@/mixins/imagePath';

export default {
    mixins: [imagePath],
    computed: {
        chats() {
            return this.$store.getters['manager/getChats'];
        }
    },
    components: { SearchBar, ManagerLink }
}
</script>

<style lang="scss" scoped></style>