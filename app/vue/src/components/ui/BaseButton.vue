<template>
    <button :disabled="disabled" class="base-button btn btn-primary">
        <slot>
        </slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        disabled: {
            require: false,
            type: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>
.base-button {
    padding: 8px;
    border: none;
    border-radius: 0;
    background-color: var(--primary);
    color: #EEE;

    &:active {
        background-color: var(--primary) !important;
        border-radius: 0;
    }

    &:focus {
        border: none;
        outline: none;
        background-color: var(--primary);
        box-shadow: none;
    }

    &:active:focus {
        box-shadow: none !important;
    }

    &:hover {
        background-color: var(--primary);
        box-shadow: 0 0 4px #333;
    }

    &:disabled {
        background-color: #DDD;
        color: #999;
    }
}
</style>