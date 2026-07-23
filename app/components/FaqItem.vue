<script setup lang="ts">
const props = defineProps<{
  question: string
  open: boolean
}>()

defineEmits<{ toggle: [] }>()

const answerEl = useTemplateRef('answerEl')
const height = ref('0px')

function updateHeight() {
  height.value = props.open && answerEl.value ? `${answerEl.value.scrollHeight}px` : '0px'
}

watch(() => props.open, () => nextTick(updateHeight))

// чтобы при ресайзе не ломалась высота открытого ответа
onMounted(() => window.addEventListener('resize', updateHeight))
onUnmounted(() => window.removeEventListener('resize', updateHeight))
</script>

<template>
  <div class="faq__item" :class="{ active: open }">
    <button class="faq__question" @click="$emit('toggle')">{{ question }}</button>
    <div ref="answerEl" class="faq__answer" :style="{ height }">
      <slot />
    </div>
  </div>
</template>
