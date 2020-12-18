<template>
    <div class="new-item-input">
        <BaseInput v-model="input" type="text" placeholder="Добавьте новое правило" :max="200" />
        <div class="new-item-input__length">Длина: {{ input.length }} (Максимум: 200)</div>
    </div>
</template>

<script>
import BaseInput from './BaseInput'

export default {
    name: 'NewItemInput',
    components: {
        BaseInput
    },
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            max: 1000,
        }
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
}
</script>

<style lang="scss" scoped>
.new-item-input {
    display: inline-flex;
    flex-direction: column;

    .new-item-input__length {
        text-align: right;
        padding: 2px;
        color: var(--ligth);
        font-size: 0.8rem;
    }
}
</style>