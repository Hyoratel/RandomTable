<template>
  <div class="container">
    <h1>😜친해지길 바래😉</h1>
    <RandomPicker @setTables="handleSetTables" />
    <div class="table-container">
      <TableGroup
        v-for="(table, index) in tables"
        :key="table.map((m) => m).join(',') + '-' + index"
        :members="table"
        :tableIndex="index"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RandomPicker from './components/RandomPicker.vue'
import TableGroup from './components/TableGroup.vue' // 테이블 단일 출력 컴포넌트

const tables = ref([])

// `RandomPicker.vue`에서 받은 랜덤 배정 데이터를 저장
const handleSetTables = (newTables) => {
  console.log('새로 배정된 테이블:', newTables)
  tables.value = [] // 변경 감지용 초기화
  tables.value = [...newTables] // 새 참조로 재할당
}
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}
.table-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
