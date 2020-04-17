<template>
    <div>
        <v-card
            class="mx-auto mt-2"
            outlined 
            v-for="product in products" :key="product.id"
        >
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{ product.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ product.price | currency }}</v-list-item-subtitle>
                <v-list-item-subtitle>
                    {{product.description}}
                    <v-btn small color="primary" @click="handleProductAdd(product)">AddToCart</v-btn>
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-card>
        <PageControls/>
    </div>
</template>

<script>
import { mapGetters , mapMutations } from 'vuex';
import PageControls from '@/components/PageControls.vue';
    export default {
        components: {
            PageControls
        },
        name: 'ProductList',
        computed: {
            ...mapGetters({ products: "processedProducts" })
        },
        filters: {
            currency(value) {
                return new Intl.NumberFormat("en-US",
                    { style: "currency", currency: "USD" }).format(value);
            }
        },
        methods: {
            ...mapMutations({ addProduct: "cart/addProduct" }),
            handleProductAdd(product) {
                this.addProduct(product);
                this.$router.push("/cart");
            }
        }       
    }
</script>

<style lang="scss" scoped>

</style>