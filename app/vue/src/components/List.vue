<template>
    <div class="mt-5">
        <h1>Главные правила</h1>

        <div v-for="(item, i) in voteList" :key="item" class="list">
            <h4 class="d-inline m-0 p-0">
                <span class="badge badge-secondary mr-3">{{ i + 1 }}</span>
                <span>{{ item.name }}</span>
            </h4>
            <hr class="mt-2 mb-0">
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

<style lang="scss" scoped>
.list {
    text-align: left;
    padding: 50px 20px 10px 20px;
}
</style>
