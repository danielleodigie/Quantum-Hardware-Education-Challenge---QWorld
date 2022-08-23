<template>
    <div id="question">
        <h1>{{question}}</h1>
        <ol id="answers" :class="{ view: end}">
            <a class="answer" v-if="!end" :class=" {show: !end} " v-for="(text, i) in answers.answers" @click="select(i)">{{i+1}}. {{text}}</a>
        </ol>
        <div v-if="answerTab" :class="{reveal: answerTab}">
            <h2 id="message" :class="{wrong: !(answerTab.correct), correct: answerTab.correct}">{{answerTab.message}}</h2>
            <h3 v-if="answerTab.reveal"> The correct answer was: </h3>
            <h3 v-if="answerTab.correct"> You chose: </h3>
            <p v-if="answerTab.correct" class="rightans"><i>{{answers.answers[answers.correct]}}</i> </p>
            <p v-if="answerTab.reveal" class="rightans"><i>{{answers.answers[answers.correct]}}</i> </p>
            <h3 v-if="(answerTab.reveal || answerTab.correct) && answers.explanation"> Explanation: </h3>
            <p v-if="(answerTab.reveal || answerTab.correct) && answers.explanation" class="explanation"><i>{{answers.explanation}}</i> </p>
        </div>
    </div>
</template>

<style>
    @font-face {
        font-family: "Futura";
        src: url("../static/fonts/Futura-Book-font.ttf")
    }
    #question {
        display: flex;
        flex-direction: column;
        background-color: antiquewhite;
        padding: 20px;
        border-radius: 20px;
        box-shadow: inset 2px 0px 10px 1px rgba(0, 0, 0, 0.233);
        transition: 300ms;
        font-family: "Futura";
    }
    #question h1 {
        margin: 0;
        text-align: center;
        font-size: 30px;
        padding: 20px;
        margin: 10px 20px;
        background-color: white;
        border-radius: 20px;
    }
    #answers {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        text-align: center;
        padding: 10px 0;
        transition: 300ms;
    }
    .answer {
        margin: 0 10px;
        font-size: 25px;
        transition: 300ms;
        text-decoration: none;
        color: rgb(63, 63, 63);
        font-weight: 100;
        width: 45%;
        cursor: pointer;
        padding: 10px;
    }
    .show:hover {
        color: lightgreen;
        transform: scale(1.1);
    }
    .reveal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        border-radius: 20px;
        margin: 20px;
        padding: 10px;
        transition: 300ms;
    }
    .rightans {
        color: green;
    }
    #message {
        font-size: 35px;
        transition: 300ms;
        margin: 10px;
    }
    .reveal h2 {
        font-size: 30px !important;
        text-align: center;
        margin: 0;
    }
    .reveal h3 {
        font-size: 25px;
        margin: 0;
        text-align: center;
    }
    .correct {
        color: limegreen;
        transition: 300ms;
    }
    .wrong {
        color: red;
        transition: 300ms;
    }
    .explanation {
        font-size: 20px;
    }
</style>

<script>
    export default {
        props: {
            question: {
                required: true,
                type: String
            },
            answers: {
                required: true,
                type: Object
            },
        },
        data() {
            return {
                selected: -1,
                wrong_count: 0,
                end: false,
            }
        },
        methods: {
            select: function(id) {
                if (id == this.$props.answers.correct) {
                    this.selected = id;
                    localStorage.setItem(this.question, JSON.stringify({
                        "selected": this.selected,
                        "end": this.end,
                        "wrong_count": this.wrong_count
                    }))
                } else {
                    this.wrong_count += 1;
                    this.selected = id;
                    localStorage.setItem(this.question, JSON.stringify({
                        "selected": this.selected,
                        "end": this.end,
                        "wrong_count": this.wrong_count
                    }))
                    console.log(this.selected, this.wrong_count)
                }
            }
        },
        computed: {
            answerTab() {
                if (this.selected < 0) {
                    return false;
                } else if ((this.wrong_count < 2 || this.wrong_count < this.$props.answers.answers.length / 2) && (this.wrong_count < 3)) {
                    if (this.selected == this.$props.answers.correct) {
                        this.end = true;
                        return {
                            selected: this.selected,
                            correct: true,
                            message: "🥳 Correct! 🥳"
                        };
                    } else {
                        return {
                            selected: this.selected,
                            reveal: false,
                            message: "This is not quite right 😥... Try again!"
                        };
                    }
                } else {
                    this.end = true;
                    this.wrong_end = true;
                    return {
                        selected: this.selected,
                        reveal: true,
                        message: "That was not the answer. 😞"
                    }
                }
            }
        },
        mounted() {
            let data = JSON.parse(localStorage.getItem(this.question));
            console.log(data);
            if (data) {
                this.selected = data.selected;
                this.end = data.end;
                this.wrong_count = data["wrong_count"];
            }
        }
    }
</script>