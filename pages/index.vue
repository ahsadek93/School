<template>
  <b-container fluid class="px-0">
    <homeSlider />
    <b-container>
      <headerNav />
      <sectionAbout />
    </b-container>
    <sectionCourses />
    <sectionGallery />
    <sectionStats />
    <sectionFee />
    <sectionTeam />
    <sectionContact />
    <sectionFooter />
  </b-container>
</template>

<script>
import headerNav from './../components/headerNav'
import homeSlider from './../components/homeSlider'
import sectionAbout from './../components/sectionAbout'
import sectionCourses from './../components/sectionCourses'
import sectionGallery from './../components/sectionGallery'
import sectionStats from './../components/sectionStats'
import sectionFee from './../components/sectionFee'
import sectionTeam from './../components/sectionTeam'
import sectionContact from './../components/sectionContact'
import sectionFooter from './../components/sectionFooter'



export default {
  components: {
    headerNav,
    homeSlider,
    sectionAbout,
    sectionCourses,
    sectionGallery,
    sectionStats,
    sectionFee,
    sectionTeam,
    sectionContact,
    sectionFooter
  },
}
</script>
