<template>
    <div>
        <h3 class="mt-4">Держите {{ randomList.length }} случайных правил</h3>

        <div class="message-wrapper">
            <div class="message" v-if="timerMs > 0">
                Вы можете голосовать через
                <b>{{ timerMs / 1000 }}</b> секунд
            </div>
        </div>

        <div>
            <div v-for="item in randomList" :key="item" class="list">
                <span>{{ item.name }}</span>
                <div class="text-right">
                    <button
                        :disabled="block"
                        @click="like(item)"
                        class="btn btn-primary"
                    >
                        Like
                    </button>
                    <button
                        :disabled="block"
                        @click="dislike(item)"
                        class="btn btn-primary"
                    >
                        Dislike
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemsApi from "./../api/items"

export default {
    name: "Vote",
    components: {},
    data() {
        return {
            randomList: Array,
            token: String,
            timerMs: 0,
            block: true,
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
            ItemsApi.getVoteItems().then((data) => {
                this.randomList = data.items
                this.token = data.token
                this.runTimeout(data.timeout)
            });
        },

        runTimeout(timeout) {
            this.timerMs -= 1000
            this.timerMs = timeout
            let interval = setInterval(() => {
                if (this.timerMs > 1000) {
                    this.timerMs -= 1000
                } else {
                    this.timerMs = 0
                    this.block = false
                    clearInterval(interval)
                }
            }, 1000)
        },
    },
    mounted() {
        this.getVoteItems()
    },
};
</script>

<style lang="scss" scoped>
.list {
    text-align: left;
    padding: 20px;
}

.message-wrapper {
    height: 30px;

    .message {
        padding: 5px;
        width: 100%;
        height: 100%;
        background-color: #EEE;
    }
}
</style>
