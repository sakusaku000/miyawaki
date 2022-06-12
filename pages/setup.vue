<template>
    <div id="setup">
        <h1><IconsSetupWrench/> setup</h1>

        <!-- hardware -->
        <SetupHardware/>
        <!-- software -->
        <SetupSoftware/>
    </div>
</template>

<script>
export default {
    name:"SetupPage",
    head:{
        title:"setup - saku"
    }
}
</script>