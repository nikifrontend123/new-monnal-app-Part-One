<template>
    <div class="">
        <ul class="list-group">
            <li class="list-group-item" v-for="(supchat, index) in supchats" :key="index">
                <RouterLink to="/SupplierFabric" class="text-dark text-decoration-none">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex">
                            <img class="rounded-circle" :src="`${publicPath}${supchat.imgDp}`"
                                style="width: 60px; height: 60px;">
                            <div class="d-flex flex-column ms-2">
                                <span class="fs-5">{{ supchat.name }}</span>
                                <span>Some other information</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-start ">
                            <p class="badge rounded-pill bg-primary">4</p>
                        </div>
                    </div>
                </RouterLink>
            </li>
        </ul>
        
    </div>
</template>

<script>
import BottomNav from '@/components/comman/BottomNav.vue';
import { imagePath } from '@/mixins/imagePath';
export default {
    name: "SuppliersPage",
    mixins: [imagePath],
    computed: {
        supchats() {
            return this.$store.getters["supplier/getSupchats"];
        }
    },
    components: { BottomNav }
}
</script>
