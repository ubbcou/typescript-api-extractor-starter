import { ref } from 'vue';
export function useTmp() {
    const bl = ref(false);
    return {
        bl
    };
}
