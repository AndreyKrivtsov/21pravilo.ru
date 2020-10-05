<template>
    <div class="new">
        <h1>Добавьте новое правило</h1>
        <div class="new-input">
            <input
                v-model="name"
                class="input"
                type="text"
                placeholder="Добавьте новое правило"
            />
            <button @click="save()" class="btn btn-primary">Добавить</button>
        </div>
    </div>
</template>

<script>
import ApiItems from "./../api/items";

export default {
    name: "New",
    components: {},

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
