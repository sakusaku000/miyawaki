<template>
    <!-- page navigation -->
    <nav class="flex gap-5">
        <NuxtLink 
        v-for="page in links" 
        :key="page.name" 
        :to="page.link"
        class="text-lg font-light hover:text-saku-primary-100"
        active-class="text-saku-primary-100 font-black underline"
        exact>
            {{page.name}}
        </NuxtLink>
    </nav>
</template>

<script>
export default {
    name:"FooterPageLinks",
    data() {
        return {
            links:[
                {
                    name:"hi 👋",
                    link:"/"
                },
                {
                    name:"setup",
                    link:"/setup"
                },
                {
                    name:"work",
                    link:"/work"
                },
                {
                    name:"k-pop",
                    link:"/kpop"
                }
            ]
        }
    }
}
</script>