<template>
    <div id="app">
        <Header />
        <div class="content">
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss" scoped>
#app {
    text-align: center;

    .content {
      max-width: 1280px;
      margin: auto;
    }
}
</style>
