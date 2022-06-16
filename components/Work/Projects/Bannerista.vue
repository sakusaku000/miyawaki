<template>
    <WorkProjectCard name="bannerista" :icon="require('~/assets/image/projects/bannerista-dash/thumbnail.png')" years="2020—" language="discord" bgColour="#CDCDCD">
        <p>
            a discord bot created for <a href="https://95degrees.cafe" target="_blank" class="underline">95 degrees</a> that tracks text and voice activity and creates 
            a daily leaderboard of most to least active members in the form of a grid of avatars which can be used as the server's
            banner image.
        </p>
        <p>
            the bot can be managed via the web dashboard, which allows for uploading and selection of overlay styles,
            leaderboard data management and configuring of various settings.
        </p>
        <p>
            bot built with node.js, discord.js, mongodb, express and puppeteer. running on a vultr cloud compute vps.
        </p>
        <p class="mb-0">
            dashboard built with vue.js. deployed on vercel.
        </p>
    </WorkProjectCard>
</template>