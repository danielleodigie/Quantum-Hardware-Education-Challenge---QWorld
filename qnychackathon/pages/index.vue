<template>
  <div id="main">
    <slide-show-vue :slides="slides"/>
    <div class="blank">
      <h1>Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div id="info">
      <img src="https://www.sciencealert.com/images/2019-06/processed/superconductivity_topic_1024.jpg">
      <div>
        <h2>Look at the little magnet flying omg!</h2>
        <h3>We will have so much fun!</h3>
        <NuxtLink to="/about">Learn more</NuxtLink>
      </div> 
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

#info{
  display: flex;
  flex-direction: row;
  padding:0px;
  align-items: center;
  justify-content: center;
  background-color: lightseagreen;
  border-radius: 20px;
  width: 50%;
  min-width: 600px;
}

#info img{
  width: 50%;
  height: 100%;
  background-position: fixed;
  max-height: 500px;
  min-height: 300px;
  object-fit: cover;
  border-radius: 20px 0px 0px 20px;
  box-shadow: inset 10px 10px 10px black;
}

#info div{
  margin: 0px 20px;
  text-align: left;
  width: 100%;
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
  font-size: 30px;
}

.blank h1{
  font-size: 50px;
}

</style>

<script>
import SlideShowVue from '../components/SlideShow.vue';
export default {
  name: 'IndexPage',
  components: {
    SlideShowVue
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
                    title: "Learn about super-conducting qubits!",
                    subtitle: "And have some fun while you're doing it." 
                }, {
                    id: 3,
                    title: "Learn about super-conducting qubits!",
                    subtitle: "And have some fun while you're doing it.",
                    style: "background-color: lightgreen; color: white"
                },]
            }
    }
}


</script>
