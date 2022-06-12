<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 mb-20 items-center md:items-start text-justify">
        <div class="hidden lg:block px-5 pt-5 rounded-2xl" id="card-thumbnail" :style="`background-color:${bgColour};`">
            <img class="w-full rounded-x-2xl rounded-t-2xl bg-shadow" :src="icon" :alt="`${name} thumbnail`" draggable="false">
        </div>
        <div id="card-content" class="bg-saku-dark-100 p-8 rounded-2xl">
            <h3>{{years}}</h3>
            <h1><WorkProjectLanguageIcon :language="language"/>{{name}}</h1>
            <img class="w-full rounded-lg block lg:hidden mb-4" :src="icon" alt="Bannerista Logo" draggable="false">
            <div class="lg:max-w-2xl">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ProjectCard",
    props:{
        name:String,
        icon:String,
        years:String,
        language:String,
        bgColour:String
    }
}
</script>

<style scoped>
    h1 {
        @apply text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:-ml-1
    }
    h3 {
        @apply font-light;
    }
    p {
        @apply text-sm md:text-base;
    }

    .bg-shadow {
        box-shadow:0px 0px 35px #000000b6;
    }
</style>