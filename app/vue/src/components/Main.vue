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
    <NewItem />
  </div>
</template>

<script>
import List from "./list/List.vue";
import NewItem from "./list/NewItem.vue";

export default {
  name: "Main",
  components: {
    List,
    NewItem,
  },
  mounted() {
    console.log(this.$router.currentRoute);
  },
};
</script>

<style lang="scss" scoped>
.header-btn {
  width: 100%;
  border-radius: 0;
}
</style>
