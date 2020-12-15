<template>
    <div class="new">
        <h3 class="mt-4">Добавьте новое правило</h3>
        <div class="new-input">
            <BaseInput
                v-model="name"
                type="text"
                placeholder="Добавьте новое правило"
            />
            <PrimaryButton @click="save()">Добавить</PrimaryButton>
        </div>
    </div>
</template>

<script>
import ApiItems from "./../api/items";
import BaseInput from "../components/ui/BaseInput"
import PrimaryButton from "../components/ui/PrimaryButton"

export default {
    name: "New",
    components: {
        BaseInput,
        PrimaryButton
    },

    data() {
        return {
            name: "",
        };
    },

    methods: {
        save() {
            if (this.name.length > 3) {
                ApiItems.setItem({ name: this.name });
            }
        },
    },

    mounted() {},
};
</script>

<style lang="scss" scoped>
.new {
    .new-input {
        margin-top: 30px;
    }
}
</style>
