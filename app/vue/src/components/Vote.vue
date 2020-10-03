<template>
    <div>
        <h3>Держите 20 случайных правил</h3>
        <div>
            <!-- <div v-for="item in randomList" :key="item" class="vote">
                <span>{{ item.text }}</span>
                <div>
                    <a>Like</a>
                    <a>Dislike</a>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
//import ItemsApi from "../../api/items.js";

export default {
    name: "NewItem",
    components: {},
    data() {
        return {
            randomList: Array,
        };
    },
    methods: {
        get() {
            //this.randomList = ItemsApi.getVotetems();
            console.log('sdfsdf');
        },
    },
    mounted() {
        this.get();

        // this.randomList = [
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        //     { id: "asfacarv", text: "Еще одно очередное правило" },
        // ];
    },
};
</script>

<style lang="scss" scoped>
.vote {
    display: inline-flex;
}
</style>
