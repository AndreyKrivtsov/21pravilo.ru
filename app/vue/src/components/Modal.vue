<template>
    <template v-if="isOpen">
        <div class="modal-backdrop"></div>
        <div @click="close()" class="modal-conteiner">
            <div class="modal-header">HEADER</div>
            <div class="modal-content">CONTENT</div>
            <div class="modal-footer">FOOTER</div>
        </div>
    </template>

</template>

<script>
import ModalState from '../state/modalState'

export default {
    name: 'Modal',
    computed: {
        isOpen() {
            return ModalState.state.isOpen
        }
    },
    methods: {
        close() {
            ModalState.close()
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal-backdrop {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.7;
    }

    .modal-conteiner {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        .modal-header,
        .modal-content,
        .modal-footer {
            width: 600px;
            background-color: rgb(255, 255, 255);
            display: flex;
            justify-content: center;
            padding: 10px;
        }

        .modal-header {
            border-bottom: 1px solid;
        }

        .modal-content {
            height: 400px;
        }

        .modal-footer {
            border-top: 1px solid;
        }
    }
</style>