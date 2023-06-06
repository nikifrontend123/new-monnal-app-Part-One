<template>
    <div class="container">
        <div class="row g-3" :class="gridSize">
            <div class="col" v-for="(chat, index) in chatss" :key="index" @click="showChat(chat)">
                <div class="card">
                    <div class="card-body p-2">
                        <CardOne v-if="design === 1" :chat="chat"></CardOne>
                        <CardTwo v-if="design === 2" :chat="chat"></CardTwo>
                        <CardThree v-if="design === 3" :chat="chat"></CardThree>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="Object.entries(activeChat).length" class="offcanvas offcanvas-start show" tabindex="-1">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExample25Label">Offcanvas</h5>
            <button type="button" class="btn-close" @click="hideChat" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                <div class="container">
                    <img :src="`${publicPath}${activeChat.imgD}`" alt="" class="w-100">
                </div>
                <div class="text-center">
                    <p>{{ activeChat.name }}</p>
                    <p>{{ activeChat.tag }}</p>
                </div>
                <div class="form container">
                    <table class="table w-100">
                        <tbody class="">
                            <tr>
                                <th scope="row">Name</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.name">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Price</th>
                                <td class="">
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="'₹ ' + activeChat.price + '/mtr'">
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">MOQ</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.moq + ' mtr'">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Length</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.length">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Width</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.width + ' mtr'">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">GSM</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.gsm">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Color</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.color">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Design</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.design">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Construction</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.construction">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Processes</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.processes">
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Discription</th>
                                <td>
                                    <input type="text" class="form-control-plaintext" id="staticEmail"
                                        :value="activeChat.discription">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-evenly mt-2">
                    <div class="btn btn-success">Update</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import CardOne from '../cards/CardOne.vue';
import CardTwo from '../cards/CardTwo.vue';
import CardThree from '../cards/CardThree.vue';
export default {
    name: "ClothCard",
    props: ["chatss", "design"],
    mixins: [imagePath],
    computed: {
        chats() {
            return this.$store.getters["manager/getChats"];
        },
        activeChat() {
            return this.$store.getters["manager/getChat"];
        },
        gridSize() {
            switch (this.design) {
                case 1: return 'row-cols-1 row-cols-md-2 row-cols-xl-3';
                case 2: return 'row-cols-2 row-cols-md-3 row-cols-xl-4';
                case 3: return 'row-cols-2 row-cols-md-3 row-cols-xl-4';
            }
        }
    },
    methods: {
        showChat(chat) {
            return this.$store.dispatch("manager/selectChat", chat);
        },
        hideChat() {
            return this.$store.dispatch("manager/hideChat");
        }
    },
    components: { CardOne, CardTwo, CardThree }
}
</script>

<style  scoped>
#boxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

@media only screen and (min-width: 601px) {
    #boxes {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
}
</style>