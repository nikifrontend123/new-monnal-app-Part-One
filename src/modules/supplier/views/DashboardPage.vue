<template>
    <div>
        <div class="container py-2" style="margin-bottom: 5rem;">
            <p class="lead mb-2">My Dashboard </p>
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="(stat, index) in stats" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">{{ stat.value }}</h4>
                            <p class="card-text text-uppercase">{{ stat.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
import BottomNav from '@/components/comman/BottomNav.vue';
import { computed } from 'vue';

export default {
    components: { BottomNav },
    computed:{
        stats(){
            return this.$store.getters['supplier/getDashboardStats']
        }
    }
}
</script>

<style lang="scss" scoped></style>