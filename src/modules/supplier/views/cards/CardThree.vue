<template>
    <div style="height: 200px;">
        <img class="w-100" :src="`${publicPath}${chat.imgD}`">
        <p class="mb-0 fw-bold text-center">{{ chat.name }}</p>
        <div class="text-center fw-bold">
            <small>{{ chat.moq }} / </small>
            <small>{{ chat.price }}</small>
        </div>
        <button class="btn btn-warning w-100">Courier</button>
    </div>
</template>
<script>
import { imagePath } from '@/mixins/imagePath';
export default {
    props: ['chat'],
    mixins: [imagePath],

}
</script>
