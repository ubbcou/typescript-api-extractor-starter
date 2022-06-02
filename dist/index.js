import { ref } from 'vue';

function createHash() {
    return Math.random().toString(36).substring(2);
}

function useBl() {
    const bl = ref(false);
    return {
        bl
    };
}

export { createHash, useBl };
