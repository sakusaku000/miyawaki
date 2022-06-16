<template>
    <div class="flex flex-col scr-height">
        <main class="container mx-auto px-10 pt-10 2xl:pt-20">
            <Nuxt/>
        </main>

        <FooterSection/>
    </div>
</template>

<script>
export default {
    name:"DefaultLayout",
    mounted() {
        const appHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        }
        window.addEventListener('resize', appHeight)
        appHeight()
    }
}
</script>

<style>
    :root {
        --app-height:100%;
    }
    .scr-height {
        height:100vh;
        height:var(--app-height);
    }
</style>