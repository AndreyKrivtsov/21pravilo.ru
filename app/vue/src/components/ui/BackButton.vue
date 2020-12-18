<template>
    <span class="back-button" v-show="notMainPage" @click="back()">&lt; назад</span>
</template>

<script>
export default {
    name: 'BackButton',
    computed: {
        notMainPage() {
            return this.$route.name !== 'Index'
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.back-button {
    cursor: pointer;
}
</style>