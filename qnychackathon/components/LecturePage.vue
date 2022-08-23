<template>
    <div id="lecturepage1">
        <ModuleNav class="nav"></ModuleNav>
        <div id="lecturetext">
            <h1>{{title}}</h1>
            <img :src="imgsrc" :alt="imgalt">
            <p v-for="(element, key) in elements">
                <span v-if="element.type ===  'text'" v-html="element.content"></span>
                <Question v-if="element.type === 'question'" :question="element.content.question" :answers="element.content.answers"></Question>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            elements: Array,
            imgsrc: String,
            imgalt: String,
        },
    }
</script>

<style>
    #lecturetext {
        width: 70%;
        margin: auto;
        text-align: center;
    }
    #lecturetext img {
        height: 200px;
    }
    #lecturetext p {
        font-size: 20px;
    }
    .nav {
        position: fixed;
        top: 116px;
    }
</style>
