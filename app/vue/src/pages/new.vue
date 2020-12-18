<template>
    <div class="new">
        <h3>Добавьте новое правило</h3>
        <div class="new-input">
            <NewItemInput v-model="name" />
            <PrimaryButton @click="save()">Добавить</PrimaryButton>
        </div>
    </div>
</template>

<script>
import ApiItems from './../api/items'
import NewItemInput from '../components/ui/NewItemInput'
import PrimaryButton from '../components/ui/PrimaryButton'

export default {
    name: 'New',
    components: {
        NewItemInput,
        PrimaryButton,
    },

    data() {
        return {
            name: '',
        }
    },

    methods: {
        save() {
            if (this.name.length > 3) {
                ApiItems.setItem({ name: this.name })
            }
        },
    },

    mounted() {},
}
</script>

<style lang="scss" scoped>
.new {
    .new-input {
        margin-top: 30px;
    }
}
</style>
