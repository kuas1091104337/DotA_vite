<script setup>
  const emit = defineEmits(['response']),
        props = defineProps({
          msg: String
        });
  emit('response', 'hello from child');
</script>

<template>
  <h2>Child component</h2>
  <h3>Props : {{ msg || 'No props passed yet' }}</h3>
  <slot>Fallback content</slot>
</template>