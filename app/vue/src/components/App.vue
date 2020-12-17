<template>
    <div>
        <Modal />
        <Header />
        <div class="content">
            <router-view></router-view>
        </div>
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
        Modal
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
    color: #2c3e50;

    .content {
        max-width: 1280px;
        margin: auto;
        overflow: hidden;
    }
}
</style>
