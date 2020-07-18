<template>
    <nav class="navbar navbar-expand-lg bg-primary" id="topNav"
                v-bind:class="{'mt-3' : !isScrolled ,'fixed-top' : isScrolled}">
                <div class="nav-brand col-6 col-lg-3">
                    <img src="./assets/logo.png" alt="logo" class="img-fluid">
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white"><i class="fas fa-bars align-middle"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a href="#" class="nav-link text-white">Home</a></li>
                        <li class="nav-item"><a href="#section_about" class="nav-link text-white">About</a></li>
                        <li class="nav-item"><a href="#section_courses" class="nav-link text-white">Courses</a></li>
                        <li class="nav-item"><a href="#section_gallery" class="nav-link text-white">Gallery</a></li>
                        <li class="nav-item"><a href="#section_fee" class="nav-link text-white">Pricing</a></li>
                        <li class="nav-item"><a href="#section_team" class="nav-link text-white">Team</a></li>
                        <li class="nav-item"><a href="#section_contact" class="nav-link text-white mr-5">Contact us</a>
                        </li>

                    </ul>
                </div>
            </nav>
</template>

<script>
export default {
    name: 'headerNav',
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