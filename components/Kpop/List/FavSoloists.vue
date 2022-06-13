<template>
    <div id="fav-soloists">
        <h2>fav soloists</h2>
        <KpopListContainer>
            <!-- jo yuri -->
            <KpopArtistCard 
            name="jo yuri" 
            :cover="require('~/assets/image/kpop/solo/jo-yuri/pic.png')" 
            artistLink="https://www.instagram.com/zo__glasss/"
            songName="glassy" 
            :songPic="require('~/assets/image/kpop/solo/jo-yuri/favsong.png')"
            songLink="https://www.youtube.com/watch?v=AQt4K08L_m8"/>

            <!-- yena -->
            <KpopArtistCard 
            name="choi yena" 
            :cover="require('~/assets/image/kpop/solo/yena/pic.png')" 
            artistLink="https://www.instagram.com/yena.jigumina/"
            songName="lxxk 2 u" 
            :songPic="require('~/assets/image/kpop/solo/yena/favsong.png')"
            songLink="https://www.youtube.com/watch?v=Iwx9t3qTcV4"/>

            <!-- yena -->
            <KpopArtistCard 
            name="kwon eunbi" 
            :cover="require('~/assets/image/kpop/solo/eunbi/pic.png')" 
            artistLink="https://www.instagram.com/silver_rain.__/"
            songName="magnetic" 
            :songPic="require('~/assets/image/kpop/solo/eunbi/favsong.png')"
            songLink="https://www.youtube.com/watch?v=So93_A1mJPo"/>

            <!-- iu -->
            <KpopArtistCard 
            name="iu" 
            :cover="require('~/assets/image/kpop/solo/iu/pic.png')" 
            artistLink="https://www.instagram.com/dlwlrma/"
            songName="ending scene" 
            :songPic="require('~/assets/image/kpop/solo/iu/favsong.png')"
            songLink="https://www.youtube.com/watch?v=Rh5ok0ljrzA"/>

            <KpopArtistCard 
            name="alexa" 
            :cover="require('~/assets/image/kpop/solo/alexa/pic.png')" 
            artistLink="https://www.instagram.com/alexa_zbofficial/"
            songName="tattoo" 
            :songPic="require('~/assets/image/kpop/solo/alexa/favsong.png')"
            songLink="https://www.youtube.com/watch?v=nzcE3DEAk5k"/>
        </KpopListContainer>
    </div>
</template>