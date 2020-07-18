<template>
  <client-only>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      indicators
      :interval="3000"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="carousel slide carousel-home"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://webthemez.com/demo/digi-school-html-website-template/images/slider/slider-img-1.jpg"
            alt="slide-1"
            class="d-block w-100 slider-img"
          />
          <div class="carousel-caption text-white">
            <h1 class="wow fadeInRight">Above and Byond!</h1>
            <p class="wow fadeInRight">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://webthemez.com/demo/digi-school-html-website-template/images/slider/slider-img-2.jpg"
            alt="slide-2"
            class="d-block w-100 slider-img"
          />
          <div class="carousel-caption text-white">
            <h1 class="wow fadeInRight">Early learning</h1>
            <p class="wow fadeInRight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              dolore..
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://webthemez.com/demo/digi-school-html-website-template/images/slider/slider-img-3.jpg"
            alt="slide-3"
            class="d-block w-100 slider-img"
          />
          <div class="carousel-caption text-white">
            <h1 class="wow fadeInRight">Right experiences</h1>
            <p class="wow fadeInRight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              dolore..
            </p>
          </div>
        </div>
      </div>
    </b-carousel>
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
