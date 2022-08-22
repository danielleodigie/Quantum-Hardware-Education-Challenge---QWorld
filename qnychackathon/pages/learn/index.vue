<template>
    <div id="learn">
        <h1 class="intro">Let's learn about superconducting qubits!</h1>
        <p title="Or are we?? Is this a bad superposition joke?" class="joke">Start from the beginning, or jump around, do what you want! We aren't watching you...</p>
        <div class="bodycomp">
            <module-view 
        v-for="module in modules" 
        :imgsrc="module.imgsrc" 
        :title="module.title" 
        :textcolor="module.textcolor"
        :subtitle="module.subtitle"
        :link="module.link"></module-view>
        </div>
    </div>
</template>

<style>
    #learn{
        margin-bottom: 110px;
    }

    .intro{
        text-align: center;
        font-size: 40px;
        margin: 10px 30px;
    }

    .bodycomp{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-evenly;
        align-items: center;
    }

    .joke{
        text-align: center;
        font-size: 20px;
    }

</style>

<script>
import ModuleView from '../../components/ModuleView.vue';
export default {
    name: 'Learn',
    components: {
        ModuleView
    },
    data() {
        return {
            modules: [
                {
                    imgsrc: "https://assets.rbl.ms/25591636/origin.jpg",
                    textcolor: "white",
                    title: "Classical and Quantum Bits",
                    link: "/learn/lecturepage1"
                },
                {
                    imgsrc: "https://m.media-amazon.com/images/I/51Bg8ULPQXL._AC_SL1024_.jpg",
                    textcolor: "white",
                    title: "Energy Quantization",
                    link: "/learn/lecturepage2"
                },
                {
                    imgsrc: "https://static.scientificamerican.com/sciam/cache/file/1BBDA1FB-CE3D-4CB4-AA351DF50EF1B036_source.jpg",
                    textcolor: "white",
                    title: "Superconductors",
                    link: "/learn/lecturepage3"
                },
                {
                    imgsrc: "https://www.cnet.com/a/img/resize/c112746c0379c9ee5303d267c7a6ec8da7e4b9a1/2019/06/26/3f76e99d-8055-46f3-8f27-558ee276b665/20180405-ibm-q-quantum-computer-02.jpg?auto=webp&fit=crop&height=675&width=1200",
                    textcolor: "white",
                    title: "RC-Circuits",
                    link: "/learn/lecturepage4"
                },
                {
                    imgsrc: "https://www.lpi.usra.edu/planetary_news/wp-content/uploads/2020/08/Lewitacja-meissner-1024x765.jpg",
                    textcolor: "white",
                    title: "Josephson Junctions",
                    link: "/learn/lecturepage5"
                }
            ]
        }
    }
}
</script>