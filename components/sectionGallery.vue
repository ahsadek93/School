<template>
  <div class="row">
    <section class="col-12 text-center py-5" id="section_gallery">
      <h1 class="text-primary wow fadeInDown">Gallery</h1>
      <p class="text-padding wow fadeInDown">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nam
        corporis quas, saepe minima error aperiam dolorum aliquam, quis deserunt
        eos eius quisquam odio itaque.
      </p>
      <div class="row justify-content-center wow fadeInDown">
        <a
          :class="getActiveClass('btn-0')"
          v-on:click="
            activeID = 'btn-0'
            filterCata()
          "
          id="btn-0"
          >All</a
        >
        <a
          :class="getActiveClass('btn-1')"
          v-on:click="
            activeID = 'btn-1'
            filterCata()
          "
          id="btn-1"
          >Annual Day</a
        >
        <a
          :class="getActiveClass('btn-2')"
          v-on:click="
            activeID = 'btn-2'
            filterCata()
          "
          id="btn-2"
          >Competition</a
        >
        <a
          :class="getActiveClass('btn-3')"
          v-on:click="
            activeID = 'btn-3'
            filterCata()
          "
          id="btn-3"
          >Events</a
        >
        <a
          :class="getActiveClass('btn-4')"
          v-on:click="
            activeID = 'btn-4'
            filterCata()
          "
          id="btn-4"
          >Tech Day</a
        >
      </div>
      <div class="row no-gutters wow fadeInUp">
        <div v-if="catagoryShown.cata0" class="col-12 col-md-3 p-1">
          <img src="./../assets/301.webp" alt="gallery" class="img-fluid" />
        </div>
        <div v-if="catagoryShown.cata1" class="col-12 col-md-3 p-1">
          <img src="./../assets/302.webp" alt="gallery" class="img-fluid" />
        </div>
        <div v-if="catagoryShown.cata1" class="col-12 col-md-3 p-1">
          <img src="./../assets/303.webp" alt="gallery" class="img-fluid" />
        </div>
        <div v-if="catagoryShown.cata0" class="col-12 col-md-3 p-1">
          <img src="./../assets/304.webp" alt="gallery" class="img-fluid" />
        </div>
        <div v-if="catagoryShown.cata2" class="col-12 col-md-3 p-1">
          <img src="./../assets/305.webp" alt="gallery" class="img-fluid" />
        </div>
        <div v-if="catagoryShown.cata2" class="col-12 col-md-3 p-1">
          <img src="./../assets/306.webp" alt="gallery" class="img-fluid" />
        </div>
        <div v-if="catagoryShown.cata3" class="col-12 col-md-3 p-1">
          <img src="./../assets/307.webp" alt="gallery" class="img-fluid" />
        </div>
        <div v-if="catagoryShown.cata3" class="col-12 col-md-3 p-1">
          <img src="./../assets/301.webp" alt="gallery" class="img-fluid" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeID: 'btn-0',
      catagoryShown: {
        cata0: true,
        cata1: true,
        cata2: true,
        cata3: true,
      },
    }
  },
  methods: {
    getActiveClass(id) {
      if (id === this.activeID) {
        return 'btn btn-outline-primary border-primary m-2 btn-active'
      } else {
        return 'btn btn-outline-primary border-primary m-2'
      }
    },

    filterCata() {
      if (this.activeID === 'btn-0') {
        this.catagoryShown.cata0 = true
        this.catagoryShown.cata1 = true
        this.catagoryShown.cata2 = true
        this.catagoryShown.cata3 = true
      } else if (this.activeID === 'btn-1') {
        this.catagoryShown.cata0 = true
        this.catagoryShown.cata1 = false
        this.catagoryShown.cata2 = false
        this.catagoryShown.cata3 = false
      } else if (this.activeID === 'btn-2') {
        this.catagoryShown.cata0 = false
        this.catagoryShown.cata1 = true
        this.catagoryShown.cata2 = false
        this.catagoryShown.cata3 = false
      } else if (this.activeID === 'btn-3') {
        this.catagoryShown.cata0 = false
        this.catagoryShown.cata1 = false
        this.catagoryShown.cata2 = true
        this.catagoryShown.cata3 = false
      } else if (this.activeID === 'btn-4') {
        this.catagoryShown.cata0 = false
        this.catagoryShown.cata1 = false
        this.catagoryShown.cata2 = false
        this.catagoryShown.cata3 = true
      }
    },
  },
}
</script>
