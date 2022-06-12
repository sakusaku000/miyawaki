<template>
    <div class="mt-7">
        <a :href="link" target="_blank" class="rounded-full py-2 px-3 bg-saku-primary-100 text-saku-dark-200 duration-100 hover:opacity-70">
            <slot/>
        </a>
    </div>
</template>

<script>
export default {
    name:"ProjectLinkOut",
    props:{
        link:String
    }
}
</script>