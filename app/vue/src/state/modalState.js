import { reactive, computed } from 'vue'

const state = reactive({
    isOpen: false,
});

const isOpen = computed(() => state.isOpen)
const open = () => {
    state.isOpen = true
};
const close = () => {
    state.isOpen = false
};

export default {
    state,
    isOpen,
    open,
    close,
}