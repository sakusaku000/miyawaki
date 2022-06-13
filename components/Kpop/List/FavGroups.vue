<template>
    <div id="fav-groups" class="mb-10">
        <h2>fav groups</h2>
        <KpopListContainer>
            <!-- izone -->
            <KpopArtistCard 
            name="💞iz*one💞" 
            :cover="require('~/assets/image/kpop/group/izone/grouppic.png')" 
            artistLink="https://www.instagram.com/official_izone/"
            biasName="hyewon" 
            :biasPic="require('~/assets/image/kpop/group/izone/bias.png')" 
            biasLink="https://www.instagram.com/hyemhyemu/"
            songName="panorama" 
            :songPic="require('~/assets/image/kpop/group/izone/favsong.png')"
            songLink="https://www.youtube.com/watch?v=G8GaQdW2wHc"
            class="2xl:col-span-2 2xl:row-span-2"/>

            <!-- ive -->
            <KpopArtistCard 
            name="ive" 
            :cover="require('~/assets/image/kpop/group/ive/grouppic.png')" 
            artistLink="https://www.instagram.com/ivestarship/"
            biasName="yujin" 
            :biasPic="require('~/assets/image/kpop/group/ive/bias.png')" 
            biasLink="https://www.instagram.com/_yujin_an/"
            songName="eleven" 
            :songPic="require('~/assets/image/kpop/group/ive/favsong.png')"
            songLink="https://www.youtube.com/watch?v=--FmExEAsM8"/>

            <!-- ive -->
            <KpopArtistCard 
            name="le sserafim" 
            :cover="require('~/assets/image/kpop/group/lesserafim/grouppic.png')" 
            artistLink="https://www.instagram.com/le_sserafim/"
            biasName="yunjin" 
            :biasPic="require('~/assets/image/kpop/group/lesserafim/bias.png')" 
            songName="blue flame" 
            :songPic="require('~/assets/image/kpop/group/lesserafim/favsong.png')"
            songLink="https://www.youtube.com/watch?v=j73Q_dsLXoQ"/>

            <!-- gidle -->
            <KpopArtistCard 
            name="(g)i-dle" 
            :cover="require('~/assets/image/kpop/group/gidle/grouppic.png')" 
            artistLink="https://www.instagram.com/official_g_i_dle/"
            biasName="yuqi" 
            :biasPic="require('~/assets/image/kpop/group/gidle/bias.png')"
            biasLink="https://www.instagram.com/yuqisong.923/" 
            songName="senorita" 
            :songPic="require('~/assets/image/kpop/group/gidle/favsong.png')"
            songLink="https://www.youtube.com/watch?v=G8APgeFfkAk"/>

            <!-- itzy -->
            <KpopArtistCard 
            name="itzy" 
            :cover="require('~/assets/image/kpop/group/itzy/grouppic.png')" 
            artistLink="https://www.instagram.com/itzy.all.in.us/"
            biasName="ryujin" 
            :biasPic="require('~/assets/image/kpop/group/itzy/bias.png')" 
            songName="loco" 
            :songPic="require('~/assets/image/kpop/group/itzy/favsong.png')"
            songLink="https://www.youtube.com/watch?v=MjCZfZfucEc"/>

            <!-- loona -->
            <KpopArtistCard 
            name="loona" 
            :cover="require('~/assets/image/kpop/group/loona/grouppic.png')" 
            artistLink="https://www.instagram.com/loonatheworld/"
            biasName="olivia hye" 
            :biasPic="require('~/assets/image/kpop/group/loona/bias.png')" 
            songName="hi high" 
            :songPic="require('~/assets/image/kpop/group/loona/favsong.png')"
            songLink="https://www.youtube.com/watch?v=846cjX0ZTrk"/>

            <!-- twice -->
            <KpopArtistCard 
            name="twice" 
            :cover="require('~/assets/image/kpop/group/twice/grouppic.png')" 
            artistLink="https://www.instagram.com/twicetagram/"
            biasName="mina" 
            :biasPic="require('~/assets/image/kpop/group/twice/bias.png')" 
            biasLink="https://www.instagram.com/mina_sr_my/"
            songName="dance the night away" 
            :songPic="require('~/assets/image/kpop/group/twice/favsong.png')"
            songLink="https://www.youtube.com/watch?v=Fm5iP0S1z9w"/>
        </KpopListContainer>
    </div>
</template>