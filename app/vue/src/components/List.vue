<template>
    <div v-if="$router.currentRoute" class="mt-3">
        <h1>Главные правила</h1>

        <div v-for="(item, i) in voteList" :key="item" class="list">
            <span>{{ i + 1 }}. </span>
            <span class="ml-1">{{ item.name }}</span>
            <hr class="mt-3 mb-0">
            <div class="text-right">
                <span class="mr-1">Лайков: {{ item.likes }}</span> |
                <span class="mr-1">Дизлайков: {{ item.dislikes }}</span> |
                <span class="mr-1">Показов: {{ item.shows }}</span>
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
    padding: 30px 20px 20px 20px;
}
</style>
