<template>
    <div id="setup">
        <h1><IconsSetupWrench/> setup</h1>

        <div class="flex flex-col gap-10">
            <!-- hardware list -->
            <SetupHardwareList/>
            <!-- software list -->
            <SetupSoftwareToolsList/>
        </div>
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