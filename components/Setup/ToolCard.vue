<template>
    <div class="p-3 bg-saku-dark-100 rounded-2xl w-full shadow flex items-center gap-5" id="tool-card-main">
        <div id="tool-card-icon">
            <img class="rounded-lg md:rounded-xl w-14 md:w-20 shadow" :src="icon" :alt="`${name} icon`" draggable="false">
        </div>
        <div id="tool-card-content">
            <h3>{{type}}</h3>
            <h2>{{name}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name:"ToolCard",
    props:{
        name:String,
        type:String,
        icon:String
    }
}
</script>

<style scoped>
    h2 {
        @apply mb-0 text-lg font-normal;
    }
    h3 {
        @apply font-light text-sm mb-0 text-white;
    }
    #tool-card-icon {
        flex-shrink: 0;
    }
</style>