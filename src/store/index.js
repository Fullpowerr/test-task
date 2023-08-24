import { createStore } from 'vuex';
export default createStore({
   state: () => ({
      query: '',
      product: {
         text: '',
         crossed: false,
      },
      indexPrdct: null,
      products: [],
   }),
   getters: {},
   mutations: {
      setQuery(state, query) {
         state.query = query;
      },

      createProduct(state) {
         if (state.query !== '') {
            state.products.unshift(
               (state.product = {
                  text: state.query,
                  crossed: false,
               })
            );
         }
         localStorage.setItem('all-products', JSON.stringify(state.products));
         state.query = '';
      },

      indexProduct(state, payload) {
         state.indexPrdct = payload;
      },

      endOfTheList(state) {
         state.removed = state.products.splice(state.indexPrdct, 1)[0];
         state.removed.crossed = true;
         state.products.push(state.removed);
         localStorage.setItem('all-products', JSON.stringify(state.products));
      },
      productsPageLoading(state, payload) {
         if (payload !== null) {
            state.products = payload;
         }
      },
   },
   actions: {},
});
