<template>
    <div>
        <div>
            <router-link to="/vote">
                <button class="btn header-btn btn-primary">
                    ПРОГОЛОСОВАТЬ ЗА НОВЫЕ ПРАВИЛА
                </button>
            </router-link>
        </div>

        <List />

        <div class="add-button">
            <router-link to="/new">
                <button class="btn btn-primary">Добавить новое правило</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import List from "./../components/List.vue";

export default {
    name: "Index",
    components: {
        List,
    },
};
</script>

<style lang="scss" scoped>
.header-btn {
    width: 100%;
    border-radius: 0;
}

.add-button {
    margin-top: 50px;
}
</style>