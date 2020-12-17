<template>
    <div class="header">
        <PrimaryButton class="header-vote" @click="$router.push('Vote')">
            ПРИНЯТЬ УЧАСТИЕ В ГОЛОСОВАНИИ
        </PrimaryButton>
        <div class="header-login" @click="openModal()">Вход</div>
    </div>
</template>

<script>
import PrimaryButton from './ui/PrimaryButton.vue'
import ModalState from '../state/modalState'

export default {
    name: 'Header',
    components: {
        PrimaryButton,
    },
    methods: {
        openModal() {
            ModalState.open()
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 60px;
    padding-left: 100px;
    padding-right: 100px;
    border-bottom: 1px solid rgb(172, 172, 172);
    text-align: center;

    .header-vote {
        position: absolute;
        margin: auto;
        z-index: 5;
    }

    .header-login {
        display: inline-block;
        margin-left: auto;
        cursor: pointer;

        &:hover {
            color: rgb(22, 48, 190)
        }
    }
}
</style>