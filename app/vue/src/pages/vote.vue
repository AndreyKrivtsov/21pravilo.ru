<template>
    <div class="vote">
        <h3>{{ randomList.length }} случайных правил</h3>

        <div class="vote-message-wrapper">
            <div class="vote-message" :class="{ 'vote-message_green': timerMs === 0 }">
                Вы можете голосовать 
                <template v-if="timerMs > 0">через <b>{{ timerMs / 1000 }}</b> секунд</template>
            </div>
        </div>

        <div class="vote-list">
            <div v-for="(item, index) in randomList" :key="index" class="vote-list__item">
                <span class="vote-list__item-content">{{ item.name }}</span>
                <div class="vote-list__item-actions">
                    <template v-if="!voted[index]">
                        <PrimaryButton
                            class="vote-list__item-button"
                            :disabled="block"
                            @click="like(item, index)"
                        >
                            Like
                        </PrimaryButton>
                        <PrimaryButton
                            class="vote-list__item-button"
                            :disabled="block"
                            @click="dislike(item, index)"
                        >
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
import PrimaryButton from '../components/ui/PrimaryButton'
import ItemsApi from './../api/items'

export default {
    name: 'Vote',
    components: { PrimaryButton },
    data() {
        return {
            randomList: Array,
            token: String,
            timerMs: 0,
            block: true,
            voted: [],
        }
    },
    methods: {
        like(item, index) {
            this.voted[index] = true
            ItemsApi.setLike({ id: item._id, token: this.token })
        },

        dislike(item, index) {
            this.voted[index] = true
            ItemsApi.setDislike({ id: item._id, token: this.token })
        },

        getVoteItems() {
            ItemsApi.getVoteItems().then(data => {
                this.randomList = data.items
                this.token = data.token
                this.runTimeout(data.timeout)
            })
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
}
</script>

<style lang="scss" scoped>
.vote {
    .vote-list {
        .vote-list__item {
            display: flex;
            align-items: center;
            height: 60px;
            padding: 0 20px;
            margin-bottom: 20px;
            border: 1px solid var(--border);
            box-shadow: 2px 2px 4px #eee;

            .vote-list__item-content {
                flex-grow: 1;
                text-align: left;
                word-wrap: break-word;
                overflow: hidden;
            }

            .vote-list__item-actions {
                min-width: 200px;
                text-align: right;
            }

            .vote-list__item-button {
                margin-left: 10px;
            }
        }
    }

    .vote-message-wrapper {
        height: 30px;
        margin-bottom: 20px;

        .vote-message {
            display: inline-block;
            padding: 5px;
            background-color: #eee;
        }

        .vote-message_green {
            background-color: rgb(123, 216, 132);
        }
    }
}
</style>
