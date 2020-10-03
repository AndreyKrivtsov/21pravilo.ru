<template>
    <div>
        <input
            v-model="name"
            class="input"
            type="text"
            placeholder="Добавьте новое правило"
        />
        <button @click="save()" class="btn btn-primary">Добавить</button>
    </div>
</template>

<script>
import ApiItems from "./../../api/items.js";

export default {
    name: "NewItem",

    components: {},

    data() {
        return {
            name: "",
        };
    },

    methods: {
        save() {
            ApiItems.setItem({ name: this.name });
        },
    },
};
</script>

<style>
</style>
