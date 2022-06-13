<template>
    <div class="p-5 bg-saku-dark-100 rounded-2xl overflow-hidden">
        <div id="artist-img">
            <a :href="artistLink" target="_blank">
                <img class="rounded-2xl w-full" :src="cover" :alt="`${name} cover image`" draggable="false">
            </a>
        </div>
        <div id="artist-info" class="mt-3">
            <a :href="artistLink" target="_blank">
                <h2>{{name}}</h2>
            </a>
            <KpopBiasCard :name="biasName" :pic="biasPic" :link="biasLink" v-if="biasName"/>
            <KpopSongCard :name="songName" :pic="songPic" :link="songLink" v-if="songName"/>
        </div>
    </div>
</template>

<script>
export default {
    name:"KpopArtistCard",
    props:{
        name:String,
        cover:String,
        artistLink:String,
        biasName:String,
        biasPic:String,
        biasLink:String,
        songName:String,
        songPic:String,
        songLink:String
    }
}
</script>

<style scoped>
    h2 {
        @apply text-2xl lg:text-3xl
    }
</style>