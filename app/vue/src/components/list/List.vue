<template>
    <div v-if="$router.currentRoute" class="mt-3">
        <div v-for="(item, i) in 20" :key="item" class="p-1">
            <span class="text-light">{{ i+1 }}. </span>
            <span class="ml-2">Правило {{ item }}</span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  components: {
  }
}
</script>

<style>
</style>
