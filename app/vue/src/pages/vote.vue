<template>
    <div>
        <h3>Держите 20 случайных правил</h3>
        <div>
            <div v-for="item in randomList" :key="item" class="list">
                <span>{{ item.name }}</span>
                <div>
                    <button @click="like(item)" class="btn btn-primary">Like</button>
                    <button @click="dislike(item)" class="btn btn-primary">Dislike</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemsApi from './../api/items'

export default {
    name: "Vote",
    components: {},
    data() {
        return {
            randomList: Array,
            token: String,
        };
    },
    methods: {
        like(item) {
            ItemsApi.setLike({ id: item._id, token: this.token })
        },

        dislike(item) {
            ItemsApi.setDislike({ id: item._id, token: this.token })
        },

        getVoteItems() {
            ItemsApi.getVoteItems()
            .then(data => { 
                this.randomList = data.items
                this.token = data.token
            })
        },
    },
    mounted() {
        this.getVoteItems();
    },
};
</script>

<style lang="scss" scoped>
.list {
    text-align: left;
    padding: 20px;
}
</style>
