<template>
    <div class="list">
        <div v-for="(item, i) in voteList" :key="item" class="list-item">
            <div class="list-item__position">{{ i + 1 }}</div>
            <div class="list-item__content">{{ item.name }}</div>
            <div class="list-item__additional">
                <span class="mr-1">Лайков: {{ item.likes }}</span> |
                <span class="mr-1">Дизлайков: {{ item.dislikes }}</span> |
                <span class="mr-1">Показов: {{ item.shows }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import ApiItems from './../api/items.js'

export default {
    name: 'List',

    components: {},

    data() {
        return {
            voteList: [],
        }
    },

    methods: {
        getVoteList() {
            ApiItems.getTopItems().then(data => {
                this.voteList = data
            })
        },
    },

    mounted() {
        this.getVoteList()
    },
}
</script>

<style lang="scss" scoped>
.list {
    .list-item {
        display: flex;
        border: 1px solid var(--border);
        margin-top: 20px;
        padding: 20px;
        box-shadow: 2px 2px 4px #eee;

        .list-item__position {
            color: #ccc;
            font-weight: 500;
            margin: 0 20px 0 0;
        }

        .list-item__content {
            flex-grow: 1;
            text-align: left;
            word-wrap: break-word;
            overflow: hidden;
        }

        .list-item__additional {
            text-align: right;
            min-width: 350px;
        }
    }
}
</style>
