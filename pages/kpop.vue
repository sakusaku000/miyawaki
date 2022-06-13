<template>
    <div id="kpop">
        <h1><IconsCD/> k-pop</h1>

        <!-- fav groups -->
        <KpopListFavGroups/>
        <!-- fav soloists -->
        <KpopListFavSoloists/>
    </div>
</template>

<script>
export default {
    name:"KpopPage",
    head:{
        title:"k-pop - saku"
    }
}
</script>