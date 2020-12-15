<template>
    <BaseButton :disabled="disabled" class="primary-button">
        <slot>
        </slot>
    </BaseButton>
</template>

<script>
import BaseButton from "./BaseButton";

export default {
    name: "PrimaryButton",
    components: {
        BaseButton
    },
    props: {
        disabled: {
            require: false,
            type: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>
</style>