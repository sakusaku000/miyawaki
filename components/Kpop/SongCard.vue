<template>
    <a :href="link" target="_blank">
        <div id="song-card" class="flex items-center gap-3">
            <img class="rounded shadow w-12" :src="pic" :alt="`${name} icon`" draggable="false">
            <div class="mt-1">
                <h4 class="text-xs font-light">fav song:</h4>
                <h3>{{name}}</h3>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name:"KpopSongCard",
    props:{
        name:String,
        pic:String,
        link:String
    }
}
</script>