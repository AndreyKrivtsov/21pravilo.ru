<template>
    <div v-if="$router.currentRoute" class="mt-3">
        <h1>Главные правила</h1>

        <div v-for="(item, i) in voteList" :key="item" class="list">
            <span>{{ i + 1 }}. </span>
            <span class="ml-1">{{ item.name }}</span>
            <div class="text-right">
                <span>Лайки: {{ item.likes }}</span>
                <span>Дизы: {{ item.dislikes }}</span>
                <span>Показы: {{ item.shows }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import ApiItems from "./../api/items.js";

export default {
    name: "List",

    components: {},

    data() {
        return {
            voteList: [],
        };
    },

    methods: {
        getVoteList() {
            ApiItems.getTopItems().then((data) => {
                this.voteList = data;
            });
        },
    },

    mounted() {
        this.getVoteList();
    },
};
</script>

<style>
.list {
    text-align: left;
    padding: 20px;
}
</style>
