<template>
    <div id="work">
        <h1><IconsCodeFile/> work</h1>
        
        <div class="flex flex-col gap-10 lg:gap-14">
            <!-- topify -->
            <WorkProjectsTopify/>

            <!-- bannerista -->
            <WorkProjectsBannerista/>

            <!-- saku.dev -->
            <WorkProjectsSakuDev/>
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