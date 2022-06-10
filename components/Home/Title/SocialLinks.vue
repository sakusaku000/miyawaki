<template>
    <div class="flex items-center gap-6">
        <a href="https://twitter.com/SakuKawaa" target="_blank" class="social-link">
            <BrandTwitter class="w-8"/>
        </a>
        <a href="https://steamcommunity.com/id/sakukawaaa/" target="_blank" class="social-link">
            <BrandSteam/>
        </a>
        <a href="https://github.com/sakusaku000" target="_blank" class="social-link">
            <BrandGithub/>
        </a>
        <a href="https://www.youtube.com/channel/UCwf3toXBiRYjZd9hPuzhFLA" target="_blank" class="social-link">
            <BrandYouTube/>
        </a>
        <a href="https://www.last.fm/user/sakukawa000" target="_blank" class="social-link">
            <BrandLastFm/>
        </a>
    </div>
</template>

<style scoped>
    .social-link {
        @apply w-7 hover:text-saku-primary-100 transform hover:scale-125 duration-100;
    }
</style>