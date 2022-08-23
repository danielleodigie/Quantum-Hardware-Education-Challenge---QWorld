<template>
    <NuxtLink :to="link" class="infocard grow" :class="{modified: background || color}">
        <img :src="imgsrc"/>
        <div>
            <h1>{{title}}</h1>
            <p>{{subtitle}}</p>
        </div>
    </NuxtLink>
</template>

<style>

@font-face{
    font-family: "Dosis";
    src: url("../static/fonts/Dosis-Medium.ttf")
}
.infocard{
    transition: 300ms;
    display: flex;
    flex-direction: row;
    padding:0px;
    align-items: center;
    justify-content: center;
    background-color: lightseagreen;
    border-radius: 20px;
    width: 45%;
    min-width: 550px;
    margin: 10px;
    color: black;
}

.modified{
    background-color: v-bind(background);
    color: v-bind(color);
}

.infocard img{
    width: 50%;
    height: auto;
    background-position: fixed;
    max-height: 500px;
    min-height: 300px;
    object-fit: cover;
    border-radius: 20px 0px 0px 20px;
    box-shadow: inset 10px 10px 10px black;
}
.infocard div{
  margin: 0px 20px;
  text-align: center;
  width: 100%;
}

.infocard p{
    font-size: 20px;
    font-family: "DosisLight";
}

.infocard:hover, .infocard:active{
    transition: 300ms;
    box-shadow: 0 0 20px #36291d;
}

.grow { 
transition: all .2s ease-in-out; 
}

.grow:hover { 
transform: scale(1.02); 
}

</style>

<script>
export default{
    name: "InfoCard",
    props: {
        imgsrc: {required: true, type: String},
        background: {required: false, type: String},
        color: {required: false, type: String},
        title: {required: true, type: String},
        subtitle: {required: true, type: String},
        link: {required: true, type: String}
    }
}
</script>