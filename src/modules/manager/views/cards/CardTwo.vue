<template>
    <img :src="`${publicPath}${chat.imgD}`" class="w-100" style="height: 100px;">
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
export default {
    props: ['chat'],
    mixins: [imagePath],

}
</script>
