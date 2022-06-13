<template>
    <div id="setup">
        <h1><IconsSetupWrench/> setup</h1>

        <!-- hardware list -->
        <SetupHardwareList/>
        <!-- software list -->
        <SetupSoftwareToolsList/>
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