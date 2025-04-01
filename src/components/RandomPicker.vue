<template>
  <div class="random-picker text-end">
    <button class="btn btn-primary" @click="assignTables">
      <i class="fas fa-shuffle me-2"></i> 랜덤 배정
    </button>
  </div>
</template>

<script setup>
import { assignToTables } from '../utils/randomUtils'
import { ref } from 'vue'

const emit = defineEmits(['setTables'])

// ✅ 미리 지정된 참여자 목록
const groups = ref([
  ['오혁신', '안다윤', '송우진', '정선웅', '최유정', '신유리', '박채연', '박사은'],
  ['이은미', '이은우', '이주영', '손주성', '맹민재', '노우정', '김준영'],
  ['김윤지', '조혜련', '사윤민', '황선주', '유상은', '김하연', '김려린'],
  ['전효빈', '양현모', '황동민', '박다빈', '이재성', '양지윤'],
])

// 랜덤 배정 버튼 클릭 시 실행
const assignTables = () => {
  const result = assignToTables(groups.value)
  emit('setTables', result)
}
</script>

<style scoped>
.random-picker {
  text-align: center;
  margin-bottom: 20px;
}

button {
  padding: 12px 20px;
  font-size: 30px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}
</style>
