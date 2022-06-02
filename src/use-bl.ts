import { ref, Ref } from 'vue'

export function useBl() {
  const bl = ref(false) as Ref<boolean>
  return {
    bl
  }
}