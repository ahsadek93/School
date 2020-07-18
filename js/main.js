import headerNav from './components/headerNav.js'

var p = new Vue({
    el: "#app",
    components: {
        headerNav
    },


    data() {
        return {
           
            activeID: 'btn-0',
            catagoryShown: {
                cata0: true,
                cata1: true,
                cata2: true,
                cata3: true,
            }
        };
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
                this.catagoryShown.cata0 = true;
                this.catagoryShown.cata1 = true;
                this.catagoryShown.cata2 = true;
                this.catagoryShown.cata3 = true;

            } else if (this.activeID === 'btn-1') {
                this.catagoryShown.cata0 = true;
                this.catagoryShown.cata1 = false;
                this.catagoryShown.cata2 = false;
                this.catagoryShown.cata3 = false;

            } else if (this.activeID === 'btn-2') {
                this.catagoryShown.cata0 = false;
                this.catagoryShown.cata1 = true;
                this.catagoryShown.cata2 = false;
                this.catagoryShown.cata3 = false;

            } else if (this.activeID === 'btn-3') {
                this.catagoryShown.cata0 = false;
                this.catagoryShown.cata1 = false;
                this.catagoryShown.cata2 = true;
                this.catagoryShown.cata3 = false;

            } else if (this.activeID === 'btn-4') {
                this.catagoryShown.cata0 = false;
                this.catagoryShown.cata1 = false;
                this.catagoryShown.cata2 = false;
                this.catagoryShown.cata3 = true;
            }
        }
    }

});

