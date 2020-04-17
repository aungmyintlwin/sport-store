<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "App",

  components: {
    // Store
  },

  data: () => ({
    //
  }),
  methods: {
      ...mapActions({
        getData: "getData",
        initializeCart: "cart/initializeCart"
      })
  },
  created() {
     this.getData();
     this.initializeCart(this.$store);
  }
};
</script>
