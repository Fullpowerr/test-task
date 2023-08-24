<template>
    <button class="btn">
        <slot> </slot>
    </button>
</template>
<script>
export default {
    name: 'v_button',
}
</script>



<style scoped>
.btn {
    text-align: center;
    border: 2px solid teal;
    background-color: inherit;
    border-radius: 15px;
    padding: 5px;
    cursor: pointer;
    font-family: cursive;
    font-size: 15px;
}
</style>
