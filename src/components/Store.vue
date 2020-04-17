<template>
  <v-container fluid>
      <v-row>
          <v-col class="primary">
            <a class="white--text">SPORTS STORE</a>
            <router-link to="/login" class="btn btn-primary text-white">
                    Admin Login
                </router-link>
            <CartSummary/>
          </v-col>            
        </v-row>
        <v-row>
            <v-col cols="3" class="info">
                <CategoryControls/>
                <button class="btn btn-block btn-warning mt-5"
                        v-on:click="setShowSearch(true)">
                    Search
                </button>
            </v-col>
            <v-col cols="9" class="success">
                <Search />
                <ProductList/>
            </v-col>
        </v-row>   
  </v-container>
</template>
<script>
import ProductList from '@/components/ProductList.vue';
import CategoryControls from '@/components/CategoryControls.vue';
import CartSummary from '@/components/CartSummary.vue';
import Search from '@/components/Search.vue';
import {mapMutations} from 'vuex';
export default {
    name: "Store",
    components: {
        ProductList,CategoryControls,CartSummary,Search
    },
    methods: {
        ...mapMutations(['setShowSearch'])
    }
}
</script>
