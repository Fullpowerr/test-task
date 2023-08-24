
<template>
  <v_header></v_header>
  <list_products></list_products>
</template>
<script>
import list_products from './components/list_products.vue';
import v_header from './components/v_header.vue';
import { mapState } from 'vuex';
export default {
  name: 'app',


  components: { v_header, list_products },

  computed: {
    ...mapState([
      'message'])
  }
}
</script>



<style ></style>
