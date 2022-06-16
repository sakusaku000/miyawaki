<template>
    <div id="hardware-list">
        <h2><IconsSetupDesktop/> hardware</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <!-- motherboard -->
            <SetupToolCard name="msi b450m pro-vdh max" type="motherboard" :icon="require('~/assets/image/setup/motherbord.png')"/>
            <!-- cpu -->
            <SetupToolCard name="ryzen 5 3600" type="cpu" :icon="require('~/assets/image/setup/ryzen.png')"/>
            <!-- graphics card -->
            <SetupToolCard name="geforce rtx 3060" type="graphics card" :icon="require('~/assets/image/setup/rtx.jpg')"/>
            <!-- memory -->
            <SetupToolCard name="crucial 16gb ddr4" type="memory" :icon="require('~/assets/image/setup/ram.png')"/>
            <!-- storage: samsung -->
            <SetupToolCard name="samsung 860 evo 500gb sata ssd" type="storage" :icon="require('~/assets/image/setup/storage.png')"/>
            <!-- storage: wd -->
            <SetupToolCard name="wd blue sn550 1tb nvme m.2 ssd" type="storage" :icon="require('~/assets/image/setup/storage.png')"/>
            <!-- case -->
            <SetupToolCard name="corsair carbide 100r" type="case" :icon="require('~/assets/image/setup/case.png')"/>
            <!-- monitor -->
            <SetupToolCard name="hp x24c 144hz curved gaming monitor" type="monitor" :icon="require('~/assets/image/setup/monitor.png')"/>
            <!-- vr -->
            <SetupToolCard name="oculus quest 2" type="vr" :icon="require('~/assets/image/setup/quest2.png')"/>
        </div>
    </div>
</template>