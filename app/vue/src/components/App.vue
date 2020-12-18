<template>
    <div>
        <Modal />
        <Header />
        <main class="content-wrapper">
            <div class="content">
                <router-view></router-view>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Modal from './Modal.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Modal,
    },
}
</script>

<style lang="scss">
#app {
    //@at-root: Avenir, Helvetica, Arial, sans-serif;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--colorText);
    overflow-x: hidden;

    .content-wrapper {
        width: 100vw;
        height: 100%;

        .content {
            max-width: 1280px;
            margin: auto;
        }
    }
}
</style>
