<template>
    <section id="projects">
        <h2>things i've worked on</h2>

        <!-- project list -->
        <div class="flex flex-wrap gap-2">
            <HomeProjectsProjectBox v-for="project in projects" :key="project.name" :name="project.name" :thumbnail="project.thumbnail" outLink="/projects/bannerista"/>
        </div>
    </section>
</template>

<script>
export default {
    name:"HomeProjects",
    data() {
        return {
            projects:[
                {
                    name:"bannerista",
                    thumbnail:require("@/assets/image/projects/bannerista/thumbnail.png")
                },
                {
                    name:"mugi",
                    thumbnail:require("@/assets/image/projects/bannerista/thumbnail.png")
                }
            ]
        }
    }
}
</script>