<template>
    <div class="container">
        <div class="row text-center">
            <h3 class="text-center">Your Cart</h3>
        </div>
        <div class="row">
            
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Quantity</th>
                        <th class="text-left">Product</th>
                        <th class="text-left">Price</th>
                        <th class="text-left">Total</th>
                        <th class="text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="lines.length == 0">
                        <td colspan="4">Your Cart is Empty</td>
                    </tr>
                    <ShoppingCartLine 
                        v-for="line in lines" :key="line.product.id"
                        :line="line"
                        @quantity="handleQuantityChange(line, $event)"
                        @remove="remove"
                     />
                </tbody>
                <tfoot v-if="lines.length > 0">
                    <tr>
                        <td colspan="3" class="text-right">Total:</td>
                        <td class="text-right">
                            {{ totalPrice | currency }}
                        </td>
                    </tr>
                </tfoot>
                </template>
            </v-simple-table>
        </div>
        <div class="row">
            <div class="col text-center">
                    <router-link to="/">
                       <v-btn color="success">Continue Shopping </v-btn> 
                   </router-link>
                   <router-link to="/checkout" class="btn"
                            :disabled="lines.length == 0">
                        <v-btn color="warning">Checkout</v-btn>
                    </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState , mapMutations, mapGetters } from 'vuex';
import ShoppingCartLine from "./ShoppingCartLine";
    export default {
        name: "ShoppingCart",
        components: {
            ShoppingCartLine
        },
        computed: {
            ...mapState({ lines: state => state.cart.lines }),
            ...mapGetters({  totalPrice : "cart/totalPrice"  })
        },
        methods: {
            ...mapMutations({
                change: "cart/changeQuantity",
                remove: "cart/removeProduct"
            }),
            handleQuantityChange(line, $event) {
                this.change({ line, quantity: $event});
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>