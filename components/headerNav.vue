<template>
    <b-navbar toggleable="lg" class="navbar bg-primary" id="topNav"
                v-bind:class="{'mt-3' : !isScrolled ,'fixed-top' : isScrolled}">
                <b-navbar-brand class="nav-brand col-6 col-lg-3">
                    <img src="../assets/logo.png" alt="logo" class="img-fluid">
                </b-navbar-brand>
                <b-navbar-toggle class="text-white" target="nav-collapse"></b-navbar-toggle>

                <b-collapse class="collapse navbar-collapse" id="nav-collapse" is-nav>
                    <b-navbar-nav class="navbar-nav ml-auto">
                        <b-nav-item href="#" class="text-white">Home</b-nav-item >
                        <b-nav-item href="#section_about" class="text-white">About</b-nav-item >
                        <b-nav-item href="#section_courses" class="text-white">Courses</b-nav-item >
                        <b-nav-item href="#section_gallery" class="text-white">Gallery</b-nav-item >
                        <b-nav-item href="#section_fee" class="text-white">Pricing</b-nav-item >
                        <b-nav-item href="#section_team" class="text-white">Team</b-nav-item >
                        <b-nav-item href="#section_contact" class="text-white mr-5">Contact us</b-nav-item >

                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
</template>
<script>
export default {
    data(){
        return{
            windowTop: 0,
            isScrolled: false,
        }
    },
    mounted() {
        var that = this;
        window.addEventListener("scroll", function () {
            that.windowTop = window.scrollY;
        });
    },

    watch: {
        windowTop() {
            if (this.windowTop != 0) {
                this.isScrolled = true
            } else {
                this.isScrolled = false
            }
        }
    },
}
</script>

<style>
.navbar-light .navbar-nav .nav-link {
    color: white;
}
</style>