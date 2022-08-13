<template>
    <div id="nav">
        <NuxtLink to="/" id="home">QNYC</NuxtLink>
        <ul id="otherlinks">
            <NuxtLink to="#">About</NuxtLink>
            <NuxtLink to="#">Learn</NuxtLink>
        </ul>
    </div>
</template>

<style>
    @font-face{
        font-family: "GoldLeaf";
        src: url("../static/fonts/GoldleafBoldPersonalUseBold-eZ4dO.ttf")
    }

    @font-face{
        font-family: "Quartzo";
        src: url("../static/fonts/QuartzoBold-W9lv.ttf")
    }


    body{
        margin: 0;
    }
    #nav{
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    #home{
        float: left;
        font-family: "Quartzo";
        font-size: 35px;
        padding-left: 20px;
        color: #5a4230;
    }
    #otherlinks{
        float: right;
    }

    #otherlinks a {
        padding-right: 80px;
        font-family: "Goldleaf";
        font-size: 25px;
        color: black;
    }

    a{
        text-decoration:none;

    }
</style>