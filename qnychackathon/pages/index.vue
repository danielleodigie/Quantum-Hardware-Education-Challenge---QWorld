<template>
  <div id="main">
    <slide-show-vue :slides="slides"/>
    <div class="blank">
      <h1>Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <br/>
    <Question :question="question.question" :answers="question.answers"></Question>
    <div id="infocards">
      <info-card v-for="infocard in infocards" v-bind:key="infocard.id" :imgsrc="infocard.imgsrc" :title="infocard.title" :subtitle="infocard.subtitle" :style="infocard.style"></info-card>
    </div>
  </div>
</template>

<style>
body{
  font-family: "Goldleaf";
}
#main{
  margin: 0px 50px;
  margin-bottom: 110px;
}

#infocards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
#info a{
  float: right;
  color: black
}

.blank{
  text-align: center;
  margin: 20px;
}

.blank p{
  font-size: 25px;
  color: gray;
}

.blank h1{
  font-size: 50px;
}

</style>

<script>
import SlideShowVue from '../components/SlideShow.vue';
import InfoCard from '../components/InfoCard.vue';
import Question from '../components/Question.vue';
export default {
  name: 'IndexPage',
  components: {
    SlideShowVue,
    InfoCard,
    Question
},
  data() {
         return {
            slides: [{
                    id: 1,
                    title: "Learn about super-conducting qubits!",
                    subtitle: "And have some fun while you're doing it.",
                    style: "background-color: lightblue; color: white"
                }, {
                    id: 2,
                    title: "We put the U in Quantum!",
                    subtitle: "And have some fun while you're doing it." 
                }, {
                    id: 3,
                    title: "Learn about super-conducting qubits!",
                    subtitle: "And have some fun while you're doing it.",
                    style: "background-color: lightgreen; color: white"
                },],
            infocards: [
              {
              id: 1,
              imgsrc: "https://www.sciencealert.com/images/2019-06/processed/superconductivity_topic_1024.jpg",
              title: "Hello World!",
              subtitle: "How's it going?"
              },
              {
              id: 2,
              imgsrc: "https://www.engineering.columbia.edu/files/seas/styles/816x460/public/content/cs_image/2021/48/quantum-computers_hero.jpg?itok=ieDDyPcg",
              title: "Welcome to Qubit world",
              subtitle: "We're goin' quantum!",
              style: "background-color: lightpink"
              },
            ],
            question: {
              question: "How are you today?",
              answers: {
                answers: ["I'm doing badly", "I'm doing okay", "I'm doing good", "I'm doing great!"],
                correct: 1
              }
            }
            }
    }
}


</script>
