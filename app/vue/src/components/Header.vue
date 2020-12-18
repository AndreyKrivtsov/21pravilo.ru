<template>
    <div class="header">
        <div class="header-content">
            <BackButton />
            <PrimaryButton class="header-vote" @click="goVotePage">
                ПРИНЯТЬ УЧАСТИЕ В ГОЛОСОВАНИИ
            </PrimaryButton>
            <div class="header-login" @click="openModal()">Вход</div>
        </div>
    </div>
</template>

<script>
import BackButton from './ui/BackButton.vue'
import PrimaryButton from './ui/PrimaryButton.vue'
import ModalState from '../state/modalState'

export default {
    name: 'Header',
    components: {
        BackButton,
        PrimaryButton,
    },
    methods: {
        goVotePage() {
            this.$router.push('Vote')
        },
        openModal() {
            ModalState.open()
        },
    },
}
</script>

<style lang="scss" scoped>
.header {
    border-bottom: 1px solid var(--border);
    width: 100vw;

    .header-content {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1280px;
        margin: auto;
        padding: 10px;

        .header-vote {
            position: absolute;
            _margin: auto;
        }

        .header-login {
            margin-left: auto;
            cursor: pointer;

            &:hover {
                color: var(--primary);
            }
        }
    }
}
</style>