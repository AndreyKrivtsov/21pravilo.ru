<template>
    <button :disabled="disabled" class="base-button">
        <slot> </slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        disabled: {
            require: false,
            type: Boolean,
        },
    },
}
</script>

<style lang="scss" scoped>
.base-button {
    padding: 8px;
    border: none;
    border-radius: 0.2rem;
    background-color: var(--primary);
    color: #eee;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 2px #333;
    }

    &:active {
        box-shadow: 0 0 4px #333;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        background-color: #ddd;
        color: #999;
    }
}
</style>