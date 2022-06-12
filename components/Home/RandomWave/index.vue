<template>
    <img class="h-64 rounded-lg shadow hidden md:block" :src="waveGif" v-if="waveGif" alt="wave">
</template>

<script>
export default {
    name:"HomeRandomWave",
    data() {
        return {
            waveGif:null
        }
    },
    mounted() {
        const waves = [
            "hyena.gif",
            "hyewon2.gif",
            "minju1.gif",
            "sakura1.gif",
            "wonyoung1.gif",
            "yujin1.gif"
        ];
        this.waveGif = require(`~/assets/image/wave/${waves[Math.floor(Math.random()*waves.length)]}`)
    }
}
</script>