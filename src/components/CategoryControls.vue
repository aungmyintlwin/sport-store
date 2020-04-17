<template>
    <v-container fluid>
        <h3 class="text-white">Categories</h3>
        <v-row v-for="category in categories" :key="category" class="py-1">
            <v-btn block color="warning" @click="setCurrentCategory(category)">{{ category }}</v-btn>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions} from "vuex";
    export default {
        name: 'CategoryControls',
        computed: {
            ...mapState(["currentCategory"]),
            ...mapGetters(["categories"])
        },
        methods: {
            ...mapActions(["setCurrentCategory"])
        }   
    }
</script>

<style scoped>

</style>