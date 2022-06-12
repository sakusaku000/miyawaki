<template>
    <WorkProjectCard name="topify" :icon="require('~/assets/image/projects/topify/thumbnail.png')" years="2021" language="vue" bgColour="#10b981">
        <p>
            small web app that shows top data from your spotify account. allows for viewing top tracks and artists within a selectable time range.
        </p>
        <p>
            live site currently broken because spotify api requires a whitelist 😑 
        </p>
        <p class="mb-0">
            built with vue.js and spotify's API. deployed on vercel.
        </p>
        <WorkProjectLinkOut link="https://topify.saku.dev/">live site</WorkProjectLinkOut>
        <WorkProjectLinkOut link="https://github.com/sakusaku000/topify">github repo</WorkProjectLinkOut>
    </WorkProjectCard>
</template>