<template>
    <div class="card grow">
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
    </div>
</template>

<style>
    @font-face {
        font-family: "DosisLight";
        src: url("../static/fonts/Dosis-Light.ttf")
    }
    .card {
        font-family: "DosisLight";
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        padding: 20px;
        height: 400px;
        width: 80%;
        /* max-width: 1200px; */
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: 20px 10px;
        background: v-bind(background);
        transition: 400ms;
        color: v-bind(color);
    }
    .card h1 {
        font-size: 45px;
        font-weight: 5000;
    }
    .grow {
        transition: all .2s ease-in-out;
    }
    .grow:hover {
        transform: scale(1.025);
    }
</style>

<script>
    export default {
        props: {
            title: {
                required: true,
                type: String
            },
            subtitle: {
                required: false,
                type: String
            },
            background: {
                required: true,
                type: String
            },
            color: {
                required: true,
                type: String
            }
        }
    }
</script>