import { ref, Ref } from 'vue'

export function useTmp() {
  const bl = ref(false) as Ref<boolean>
  return {
    bl
  }
}