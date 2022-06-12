<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 mb-20 items-center md:items-start text-justify">
        <img class="w-full rounded-2xl hidden lg:block" :src="icon" alt="Bannerista Logo" draggable="false">
        <div id="main-card-content" class="bg-saku-dark-100 p-8 rounded-2xl">
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
        language:String
    }
}
</script>

<style scoped>
    h1 {
        @apply text-2xl md:text-4xl lg:text-6xl mb-6 md:-ml-1
    }
    h3 {
        @apply font-light;
    }
    p {
        @apply text-sm md:text-base;
    }
</style>