<template>
<div id="questionnaire">
    <h1>{{question}}</h1>
    <div id="answers">
        <a class="answer" @click="" v-for="i in answers">{{i}}</a>
    </div>
    <div id="reveal">
        <p>This was not the answer</p>
    </div>
</div>
</template> 

<style>

#questionnaire{
    display: flex;
    flex-direction: column;
    background-color: antiquewhite;
    padding: 20px;
    border-radius: 20px;
    box-shadow: inset 2px 0px 10px 1px rgba(0, 0, 0, 0.233);
}

#questionnaire h1{
    margin: 0;
    text-align: center;
    font-size: 40px;
}

#answers{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
}

.answer{
    margin: 0 10px;
    font-size: 30px;
    transition: 300ms;
    text-decoration: none;
    color: rgb(63, 63, 63);
    font-weight: 100;
    width: 45%;
}

.answer:hover{
    color: gray;
    transform: scale(1.1);
}

</style>

<script>
export default {
    props: {
        question: {required: true, type: String},
        answers: {required: true, type: Array},
        correct: {required: true, }
        }
}
</script>