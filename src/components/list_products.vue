<template>
    <div class="products">
        <p class="text"> Продукты </p>
        <div class="ui_components">
            <v_input :model-value="query" @update:model-value="setQuery" placeholder="Введите название" maxlength="30" />
            <v_button @click="createProduct" @keyup.enter>Добавить</v_button>
        </div>
        <div>
            <v_product v-for="(item, i) in products" key="i" @click="this.$store.commit('indexProduct', i),
                endOfTheList()" :class="{ crossed: item.crossed }">
                {{ item.text }} </v_product>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import v_product from './v_product.vue'
import v_button from './UI/v_button.vue'
import v_input from './UI/v_input.vue';
export default {
    name: 'list_products',
    components: { v_input, v_button, v_product },

    computed: {
        ...mapState({
            products: (state) => state.products,
            query: (state) => state.query,
            product: (state) => state.product,

        })
    },
    methods: {
        ...mapMutations({
            createProduct: 'createProduct',
            setQuery: 'setQuery',
            endOfTheList: 'endOfTheList'
        }),
    },
    mounted() {
        this.$store.commit(
            'productsPageLoading',
            JSON.parse(localStorage.getItem('all-products'))
        )
    },
}
</script>

<style scoped>
.crossed {
    text-decoration: line-through;
    color: #e86d86;
}

.products {
    text-align: center;
}

.ui_components {
    margin-bottom: 20px;
}

.text {
    font-size: 25px;
    font-family: cursive
}
</style>
