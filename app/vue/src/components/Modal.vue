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
        //width: 100%;
        z-index: 10;
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
        z-index: 20;

        .modal-header,
        .modal-content,
        .modal-footer {
            width: 600px;
            _height: 400px;
            background-color: rgb(255, 255, 255);
            border: none;
            border-color: rgb(163, 163, 163);
            border-radius: 0;
            text-align: center;
            display: flex;
            justify-content: center;
            padding: 10px;
        }

        .modal-header {
            _height: 40px;
            border-bottom: 1px solid;
        }

        .modal-content {
            height: 400px;
        }

        .modal-footer {
            _height: 40px;
            border-top: 1px solid;
        }
    }
</style>