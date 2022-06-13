<template>
    <div id="software-list">
        <h2><IconsSetupCog/> software</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            <!-- os -->
            <SetupToolCard name="windows 11" type="os" :icon="require('~/assets/image/setup/windows11.png')"/>
            <!-- code editor -->
            <SetupToolCard name="visual studio code" type="code editor" :icon="require('~/assets/image/setup/vscode.png')"/>
            <!-- vps -->
            <SetupToolCard name="vultr" type="vps" :icon="require('~/assets/image/setup/vultr.png')"/>
            <!-- hosting -->
            <SetupToolCard name="vercel" type="hosting" :icon="require('~/assets/image/setup/vercel.png')"/>
            <!-- code repos -->
            <SetupToolCard name="github" type="source code repos" :icon="require('~/assets/image/setup/github.png')"/>
            <!-- terminal -->
            <SetupToolCard name="windows terminal" type="terminal" :icon="require('~/assets/image/setup/winterminal.png')"/>
            <!-- proj management -->
            <SetupToolCard name="notion" type="notes / project management" :icon="require('~/assets/image/setup/notion.png')"/>
        </div>
    </div>
</template>