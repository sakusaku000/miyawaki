<template>
    <div class="inline">
        <!-- node -->
        <IconsTechNode v-if="language === 'node'" class="pli ml-1"/>

        <!-- html -->
        <IconsTechHtml v-if="language === 'html'" class="pli"/>

        <!-- vue -->
        <IconsTechVue v-if="language === 'vue'" class="pli mr-2"/>

        <!-- discord -->
        <IconsTechDiscord v-if="language === 'discord'" class="pli mr-5"/>
    </div>
</template>

<script>
export default {
    name:"ProjectLanguageIcon",
    props:{
        language:String
    }
}
</script>

<style scoped>
    .pli {
        @apply inline;
    }
</style>