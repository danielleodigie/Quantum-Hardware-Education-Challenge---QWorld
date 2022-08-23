<template>
  <div id="main">
    <slide-show-vue :slides="slides" />
    <div class="blank">
      <h1>Promoting an Open Quantum Community</h1>
      <p>It is our mission to spread awareness about quantum computing. We aim to introduce the field to students from all different backgrounds, age groups, and interests. The quantum decade is steadily approaching. It is important that we inspire people
        from all walks of life to pursue a career in quantum. If you are interested in learning more about quantum computing your journey begins below.</p>
    </div>
    <div class="video">
      <iframe width="90%" height="720px" src="https://www.youtube.com/embed/aZaDQ5yc3fQ?color=white&autoplay=0&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&cc_load_policy=1" title="Home Page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <br/>
    <div id="infocards">
      <info-card v-for="(infocard, index) in infocards" v-bind:key="index" :imgsrc="infocard.imgsrc" :title="infocard.title" :subtitle="infocard.subtitle" :cardstyle="infocard.style" :link="infocard.link" :background="infocard.background" :color="infocard.color"></info-card>
    </div>
  </div>
</template>

<style>
  body {
    font-family: "Goldleaf";
  }
  #main {
    /* margin: 0px 50px; */
    margin-bottom: 10px;
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
  .blank h1 {
    background: lightpink;
    font-size: 50px;
    position: sticky;
    top: 116px;
    margin: 0;
    padding: 10px;
  }
  .video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .video iframe {
    position: sticky;
    top: 116px;
    border-radius: 20px;
    margin: 20px;
  }
  .blank p {
    font-size: 30px;
    font-family: "DosisLight";
    top: 116px;
    padding: 20px 10%;
    margin: 0;
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
          subtitle: "Building a welcoming community where everyone can learn.",
          background: "antiquewhite",
          color: "black"
        }, {
          title: "Quantum Computing for the minds of today!",
          subtitle: "Start your journey into quantum computing with us.",
          background: "lightgreen",
          color: "white"
        }, ],
        infocards: [{
            imgsrc: "https://www.sciencealert.com/images/2019-06/processed/superconductivity_topic_1024.jpg",
            title: "Want to start learning about super-conducting qubits?",
            subtitle: "Start your quantum journey here!",
            link: "/learn",
          },
          {
            imgsrc: "https://www.engineering.columbia.edu/files/seas/styles/816x460/public/content/cs_image/2021/48/quantum-computers_hero.jpg?itok=ieDDyPcg",
            title: "Learn about our mission",
            subtitle: "Click here to read more about ",
            background: "lightpink",
            color: "white",
            link: "/about"
          },
        ],
      }
    }
  }
</script>
