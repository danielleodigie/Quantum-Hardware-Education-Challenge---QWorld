<template>
  <div id="main">
    <slide-show-vue :slides="slides" />
    <div class="blank">
      <h1>Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <br/>
    <div id="infocards">
      <info-card v-for="(infocard, index) in infocards" v-bind:key="index" :imgsrc="infocard.imgsrc" :title="infocard.title" :subtitle="infocard.subtitle" :cardstyle="infocard.style"></info-card>
    </div>
  </div>
</template>

<style>
  body {
    font-family: "Goldleaf";
  }
  #main {
    /* margin: 0px 50px; */
    margin-bottom: 110px;
  }
  #infocards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  #info a {
    float: right;
    color: black
  }
  .blank {
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 20px 40px; */
    text-align: center;
    margin: 20px 0;
  }
  .blank.inner{
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .blank h1 {
    background: lightpink;
    font-size: 50px;
    position: sticky;
    top: 116px;
    margin:0;
    padding: 10px;
  }
  .blank p {
    font-size: 30px;
    font-family: "DosisLight";
    top: 116px;
    /* background-color: antiquewhite; */
    padding: 20px 10%;
    margin:0;
    line-height: 50px;
    border-radius: 0 0 20px 20px;
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
          title: "Learn about super-conducting qubits...\nAnd have some fun while doing it!",
          subtitle: "QNYC makes learning quantum easier!",
          background: "lightblue",
          color: "white"
        }, {
          title: "We put the U in Quantum!",
          subtitle: "And have some fun while you're doing it.",
          background: "antiquewhite",
          color: "black"
        }, {
          title: "Learn about super-conducting qubits!",
          subtitle: "And have some fun while you're doing it.",
          background: "lightgreen",
          color: "white"
        }, ],
        infocards: [{
            imgsrc: "https://www.sciencealert.com/images/2019-06/processed/superconductivity_topic_1024.jpg",
            title: "Hello World!",
            subtitle: "How's it going?"
          },
          {
            imgsrc: "https://www.engineering.columbia.edu/files/seas/styles/816x460/public/content/cs_image/2021/48/quantum-computers_hero.jpg?itok=ieDDyPcg",
            title: "Welcome to Qubit world",
            subtitle: "We're goin' quantum!",
            style: "background-color: lightpink"
          },
        ],
      }
    }
  }
</script>
