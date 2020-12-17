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
    name: 'BaseInput',
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
        max: {
            type: Number,
            required: false,
        },
    },
    computed: {
        input: {
            get: function() {
                return this.modelValue
            },
            set: function(value) {
                this.$emit('update:modelValue', value)
            },
        },
    },
    watch: {
        input(newValue, oldValue) {
            if (this.max) {
                if (newValue.length > this.max) {
                    this.$nextTick(() => {
                        this.input = oldValue
                    })
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.base-input {
    display: inline;
    width: 300px;
    border-radius: 0;

    &:focus {
        box-shadow: none;
    }
}
</style>