<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text" title="enter the text" />
</template>
 
<script>
export default {
    name: 'v_input',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>


<style scoped>
.input {
    text-align: center;
    margin: 10px;
    border: 2px solid teal;
    border-radius: 15px;
    padding: 5px;
    width: 10%;
    font-family: cursive;
    font-size: 15px;

}
</style>
