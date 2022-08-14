<template>
    <div class="slideshow">
        <slide
        :title="currentSl.title"
        :style="currentSl.style"
        :subtitle="currentSl.subtitle"
        />
        <a id="prev" @click="prev" href="#">&#10094;</a>
        <a id="next" @click="next" href="#">&#10095;</a>
    </div>
</template>

<style>

.slideshow
#prev, #next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

#next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
#prev:hover, #next:hover {
  background-color: rgba(0,0,0,0.8);
}
</style>

<script>
import { ref, el } from 'vue';
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
        startSlide: function() {
            this.timer = setInterval(this.next, 4000);
        },

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
    }



};

</script>