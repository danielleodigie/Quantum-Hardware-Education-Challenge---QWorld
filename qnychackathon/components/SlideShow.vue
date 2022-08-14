<template>
    <div class="slideshow">
        <a id="prev" @click="prev">&#10094;</a>
        <slide
        :title="currentSl.title"
        :style="currentSl.style"
        :subtitle="currentSl.subtitle"
        />
        <a id="next" @click="next">&#10095;</a>
    </div>
</template>

<style>

.slideshow{
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
}

#prev, #next {
    color: white;
    background-color: none;
    cursor: pointer;
    width: auto;
    padding: 16px;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
}

/* On hover, add a black background color with a little bit see-through */
#prev:hover, #next:hover {
  /* background-color: rgba(0,0,0,0.9); */
  color: black;
}
</style>

<script>
import Slide from './Slide.vue';
export default{
    name: 'slideshow',
    components: {
        Slide
    },
    props: {
        slides: {required: true, type: Array},
    },
    data() {
        return {
            currentSlide: 0,
            time: null,
        }
    },
    methods: {
        next: function() {
            this.currentSlide += 1;
        },
        prev: function() {
            this.currentSlide -= 1;
        }
    },
    computed: {
        currentSl() {
        return this.$props.slides[Math.abs(this.currentSlide) % this.$props.slides.length];
        }
    },
    mounted() {
        setInterval(this.next, 6000);
    }



};

</script>