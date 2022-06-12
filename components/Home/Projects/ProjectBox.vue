<template>
    <router-link :to="outLink">
        <div class="project-box group" :style="`background-image:url(${thumbnail})`">
            <h3>{{name}}</h3>
        </div>
    </router-link>
</template>

<script>
export default {
    name:"ProjectBox",
    props:{
        name:String,
        thumbnail:String,
        outLink:String
    }
}
</script>

<style scoped>
    .project-box {
        @apply w-52 h-52 lg:w-72 lg:h-72 bg-cover bg-center bg-origin-border bg-no-repeat flex items-center justify-center border-8 border-transparent hover:border-saku-primary-100 duration-200;
    }
    h3 {
        @apply font-bold text-xl filter drop-shadow bg-saku-dark-200 text-saku-light-100 px-3 py-2 rounded-xl no-underline opacity-100 md:opacity-0 group-hover:opacity-100 duration-200;
    }
</style>