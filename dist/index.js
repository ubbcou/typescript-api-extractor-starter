import { ref } from 'vue';

function useTmp() {
    const bl = ref(false);
    return {
        bl
    };
}

export { useTmp };
