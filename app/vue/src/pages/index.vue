<template>
    <div>
        <List />

        <div class="add-button">
            <PrimaryButton @click="$router.push('New')">Добавить новое правило</PrimaryButton>
        </div>
    </div>
</template>

<script>
import List from './../components/List.vue'
import PrimaryButton from './../components/ui/PrimaryButton'

export default {
    name: 'Index',
    components: {
        List,
        PrimaryButton,
    },
}
</script>

<style lang="scss" scoped>
.add-button {
    margin-top: 50px;
}
</style>