<script setup lang="ts">
defineProps<{
  placeholder?: string
}>()
</script>

<template>
  <input 
    :placeholder="placeholder" 
    class="input"
  />
</template>



<style scoped lang="scss">
.input {
  background-color: var(--black-80-color);
  border: none;
  border-radius: 16px;
  padding: 19px 40px; 
  color: var(--bg-color);
  font-size: 14px;
  width: 237px; 
  height: auto; 
  outline: none;
  box-sizing: border-box;


  &::placeholder {
    color: var(--bg-color);
  }

  &:focus {
    background-color: #363c4a;
  }
}
</style>