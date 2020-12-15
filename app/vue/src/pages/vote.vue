<template>
    <div>
        <h3 class="mt-4">{{ randomList.length }} случайных правил</h3>

        <div class="message-wrapper">
            <div class="message" v-if="timerMs > 0">
                Вы можете голосовать через
                <b>{{ timerMs / 1000 }}</b> секунд
            </div>
        </div>

        <div>
            <div v-for="(item, index) in randomList" :key="index" class="list">
                <span>{{ item.name }}</span>
                <div class="text-right">
                    <template v-if="!voted[index]">
                        <PrimaryButton :disabled="block" @click="like(item, index)">
                            Like
                        </PrimaryButton>
                        <PrimaryButton :disabled="block" @click="dislike(item, index)">
                            Dislike
                        </PrimaryButton>
                    </template>
                    <template v-else>
                        Голос учтен
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PrimaryButton from "../components/ui/PrimaryButton";
import ItemsApi from "./../api/items";

export default {
    name: "Vote",
    components: {PrimaryButton},
    data() {
        return {
            randomList: Array,
            token: String,
            timerMs: 0,
            block: true,
            voted: [],
        };
    },
    methods: {
        like(item, index) {
            this.voted[index] = true;
            ItemsApi.setLike({ id: item._id, token: this.token });
        },

        dislike(item, index) {
            this.voted[index] = true;
            ItemsApi.setDislike({ id: item._id, token: this.token });
        },

        getVoteItems() {
            ItemsApi.getVoteItems().then((data) => {
                this.randomList = data.items;
                this.token = data.token;
                this.runTimeout(data.timeout);
            });
        },

        runTimeout(timeout) {
            this.timerMs -= 1000;
            this.timerMs = timeout;
            let interval = setInterval(() => {
                if (this.timerMs > 1000) {
                    this.timerMs -= 1000;
                } else {
                    this.timerMs = 0;
                    this.block = false;
                    clearInterval(interval);
                }
            }, 1000);
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

.message-wrapper {
    height: 30px;

    .message {
        padding: 5px;
        width: 100%;
        height: 100%;
        background-color: #eee;
    }
}
</style>
