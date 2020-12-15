<template>
    <input
        v-model="input"
        :type="type"
        :placeholder="placeholder"
        class="base-input form-control"
    />
</template>

<script>
export default {
    name: "BaseInput",
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
        },
    },
    computed: {
        input: {
            get: function () {
                return this.modelValue;
            },
            set: function (value) {
                this.$emit('update:modelValue', value)
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.base-input {
    display: inline;
    width: 300px;
    border-radius: 0;
}
</style>