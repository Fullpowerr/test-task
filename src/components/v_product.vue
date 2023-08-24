<template>
    <div class="text">
        <p>
            <slot></slot>
        </p>
    </div>
</template>
<script>


import { mapMutations, mapState } from 'vuex'
export default {
    name: 'v_product',
}
</script>

<style scoped>
.text {
    font-size: 30px;
    margin: 2px;
    transition: 0.5s;
}

.text:hover {
    transform: scale(1.1);

}
</style>
