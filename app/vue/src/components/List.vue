<template>
    <div class="list">
        <div v-for="(item, i) in voteList" :key="item" class="list-item">
            <div class="list-item__position">
                <h4 class="list-item__h4">{{ i + 1 }}</h4>
            </div>
            <div class="list-item__content">
                <h4 class="list-item__h4">{{ item.name }}</h4>
            </div>
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
    //text-align: left;
    //padding: 30px 20px 10px 20px;
    margin-top: 50px;

    .list-item {
        display: flex;
        align-items: flex-start;
        border: 1px solid rgb(212, 212, 212);
        margin-top: 20px;
        padding: 20px;
        box-shadow: 10px 2px 4px #eee;

        .list-item__position {
            color: #ccc;
            font-weight: 900;
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

        .list-item__h4 {
            margin: 0;
            padding: 0;
        }
    }
}
</style>
