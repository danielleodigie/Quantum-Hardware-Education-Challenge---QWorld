<template>
<div id="questionnaire">
    <h1>{{question}}</h1>
    <div id="answers">
        <a v-if="!end" class="answer" v-for="(text, i) in answers.answers" @click="select(i)">{{text}}</a>
    </div>
    <div v-if="answerTab" class="reveal wrong">
        <h2 id="message">{{answerTab.message}}</h2>
        <h3 v-if="answerTab.reveal"> The correct answer was </h3>
        <h2 v-if="answerTab.reveal"> {{answers.answers[answers.correct]}} </h2>
        <p></p>
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
    transition: 300ms;
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

.reveal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    margin: 20px;
    padding: 20px;
    transition: 300ms;
}

.reveal h2{
    font-size: 30px;
    text-align: center;
}
</style>

<script>
export default {
    props: {
        question: {required: true, type: String},
        answers: {required: true, type: Object},
    },
    data() {
        return {
            selected: -1,
            wrong_chance: "This is not quite right... Try again!",
            wrong: "That was not the answer.",
            wrong_count: 0,
            end: false
        }
    },
    methods: {
        select: function(id){
            if (id == this.$props.answers.correct) {
                this.selected = id;
            }
            else{
                this.wrong_count += 1;
                this.selected = id;
                console.log(this.selected, this.wrong_count)
            }
        }
    },
    computed: {
        answerTab(){
            if (this.selected < 0) {
                return false;
            }
            else if ((this.wrong_count < 2 || this.wrong_count < this.$props.answers.answers.length/2) && (this.wrong_count < 3)) {
                if (this.selected == this.$props.answers.correct) {
                    this.end = true;
                    return {selected: this.selected, correct: true, message: "Correct!"};
                }
                else { 
                    return {selected: this.selected, reveal: false, message: this.wrong_chance};
                }
            }
            else {
                this.end = true;
                return {selected: this.selected, reveal: true, message: this.wrong}
            }
        }
    }
    
}
</script>