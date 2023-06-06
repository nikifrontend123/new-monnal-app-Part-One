<template>
    <div class="">
        <div v-for="(color, index) in poColors" :key="index">
            <div class="d-flex justify-content-between p-2 border-bottom">
                <div class="d-flex">
                    <img :src="`${publicPath}${color.img}`" class="rounded-circle border"
                        style="width: 60px; height: 60px;">
                    <p class="m-0 fw-bold"> {{ color.name }}</p>
                </div>
                <div class="d-flex align-items-center w-50">
                    <!-- <input  v-for="(form, index) in parcel.forms" :key="index"   class="  form-control text-center border-dark" type="text"> -->
                    <input class="form-control text-center border-dark" type="number" v-model="parcels[index]">
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" role="button"
                aria-controls="offcanvasExample" @click="">Create Parcel</button>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex align-items-start py-3 border-bottom" v-for="(color, index) in poColors" :key="index">
                    <img :src="`${publicPath}${color.img}`" class="rounded" style="width: 70px; height: 70px;">
                    <div class="ms-3"> 
                        <p class="mb-1">{{ color.name }}</p>
                        <div class="row g-3">
                            <div class="col-4" v-for="(count, key) in parcels[index]" :key="key">
                                <input class="form-control" type="text" :placeholder="'C' + count" v-model="bundles[index]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';


export default {
    mixins: [imagePath],
    props: ['poColors'],
    data() {
        return {
            parcels: [],
            bundles: [],
        };
    }
}
</script>

<style lang="scss" scoped></style>