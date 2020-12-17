<template>
    <BaseButton :disabled="disabled" class="width-button">
        <slot> </slot>
    </BaseButton>
</template>

<script>
import BaseButton from './BaseButton'

export default {
    name: 'WidthButton',
    components: {
        BaseButton,
    },
    props: {
        disabled: {
            require: false,
            type: Boolean,
        },
    },
}
</script>

<style lang="scss" scoped>
.width-button {
    width: 100%;
    border-radius: 0;
}
</style>