<template>
  <div class="table">
    <h2 :class="`header-color-${tableIndex % 6}`">{{ tableIndex + 1 }}번 테이블</h2>
    <ul>
      <li v-for="(member, idx) in members" :key="idx">{{ member }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  members: Array,
  tableIndex: Number,
})
</script>

<style scoped>
.table {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  min-width: 200px;
  background-color: #f9f9f9;
}

h2 {
  margin: 0;
  padding: 10px;
  color: white;
  border-radius: 8px 8px 0 0;
}

.header-color-0 {
  background-color: #007bff;
}
.header-color-1 {
  background-color: #28a745;
}
.header-color-2 {
  background-color: #ffc107;
}
.header-color-3 {
  background-color: #17a2b8;
}
.header-color-4 {
  background-color: #6f42c1;
}
.header-color-5 {
  background-color: #fd7e14;
}
</style>
