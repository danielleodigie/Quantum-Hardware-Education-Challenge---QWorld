<template>
    <div id="nav">
        <NuxtLink to="/" id="home">QNYC</NuxtLink>
        <ul id="otherlinks">
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/learn">Learn</NuxtLink>
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
        background-color: white;
        z-index: 9999;
        width: 100%;
        /* padding: 0px 20px; */
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    #home{
        float: left;
        font-family: "Quartzo";
        font-size: 35px;
        padding-left: 40px;
        color: #5a4230;
    }
    #otherlinks{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        float: right;
    }

    #otherlinks a {
        padding-right: 80px;
        margin: 20px;
        font-family: "Goldleaf";
        font-size: 25px;
        color: black;
    }

    a{
        text-decoration:none;

    }
</style>