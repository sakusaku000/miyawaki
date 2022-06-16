<template>
    <div id="work">
        <h1><IconsCodeFile/> work</h1>
        
        <div class="flex flex-col gap-20">
            <!-- topify -->
            <WorkProjectsTopify/>

            <!-- saku.dev -->
            <WorkProjectsSakuDev/>

            <!-- bannerista -->
            <WorkProjectsBannerista/>

            <!-- bannerista dash -->
            <WorkProjectsBanneristaDash/>
        </div>
    </div>
</template>

<script>
export default {
    name:"KpopPage",
    head:{
        title:"work - saku"
    }
}
</script>