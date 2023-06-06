<template>
    <div class="d-flex my-2">
        <img :src="`${publicPath}${chat.imgD}`" style="width: 60px; height: 60px; border-radius: 50px;">
        <div class="ms-2">
            <p class="mb-0 fs-5">{{ chat.name }}</p>
            <small>MOQ: {{ chat.moq }} mtr | ₹ {{ chat.price }}/mtr</small>
        </div>
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
export default {
    props: ['chat'],
    mixins: [imagePath],

}
</script>
