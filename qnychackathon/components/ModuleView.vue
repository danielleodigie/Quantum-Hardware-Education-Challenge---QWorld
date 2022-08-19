<template>
    <div id="card" >
        <a :href="link">
            <h1 class="title">{{title}}</h1>
            <h2>{{subtitle}}</h2>
        </a>
    </div>
</template>

<style scoped>
#card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-attachment: fixed; */
    background-size: cover;
    background-position: center;
    background-image: v-bind(img);
    margin: 20px 30px;
    border-radius: 20px;
    height: 275px;
    min-width: 550px;
    width: 45%;
    transition: 300ms;
    text-shadow: 2px 0px 3px black;
}

#card:hover{
    cursor: pointer;
    transform: scale(1.025);
    background-position: bottom;
    transition: transform 300ms, background-position 5s ease-in-out;
}
.title{
    color: v-bind(textcolor);
    font-size: 50px;
    text-align: center;
}
</style>

<script>
export default{
    name: 'Card',
    props: {
        textcolor: {required: false, type: String},
        imgsrc : {required: true, type: String},
        title: {required: true, type: String},
        subtitle: {required: false, type: String},
        link : {required: true, type: String}
    },
    data() {
        return {
            img: 'url(' + this.imgsrc + ')'
        }
    }
}
</script>