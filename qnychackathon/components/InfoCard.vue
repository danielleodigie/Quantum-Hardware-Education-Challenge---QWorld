<template>
    <div class="infocard grow">
        <img :src="imgsrc" :style="style"/>
        <div>
            <h1>{{title}}</h1>
            <p>{{subtitle}}</p>
        </div>
    </div>
</template>

<style>
.infocard{
    display: flex;
    flex-direction: row;
    padding:0px;
    align-items: center;
    justify-content: center;
    background-color: lightseagreen;
    border-radius: 20px;
    width: 45%;
    min-width: 600px;
    margin: 10px
}

.infocard img{
    width: 50%;
    height: 100%;
    background-position: fixed;
    max-height: 500px;
    min-height: 300px;
    object-fit: cover;
    border-radius: 20px 0px 0px 20px;
    box-shadow: inset 10px 10px 10px black;
}
.infocard div{
  margin: 0px 20px;
  text-align: left;
  width: 100%;
}

.infocard h1{
    text-align: center;
}
.infocard p{
    text-align: center;
    font-size: 20px;
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
        style: {required: false, type: String},
        title: {required: true, type: String},
        subtitle: {required: true, type: String}
    }
}
</script>