<template>
    <a :href="link" target="_blank">
        <div id="bias-card" class="mb-2 flex items-center gap-3">
            <img class="rounded-full shadow w-12" :src="pic" :alt="`${name} icon`" draggable="false">
            <div class="mt-1">
                <h4 class="text-xs font-light">bias:</h4>
                <h3>{{name}}</h3>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name:"KpopBiasCard",
    props:{
        name:String,
        pic:String,
        link:String
    }
}
</script>