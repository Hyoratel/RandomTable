// 배열 섞기 함수
function shuffleArray(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// 테이블 배정 함수 (그룹 겹침 최소화 + 랜덤)
export function assignToTables(groups, maxPerTable = 4) {
  const shuffledGroups = shuffleArray(groups) // 그룹 자체 섞기
  const totalMembers = groups.flat().length
  const totalTables = Math.ceil(totalMembers / maxPerTable)

  const tables = Array.from({ length: totalTables }, () => [])
  let tableIndex = 0

  // 그룹별로 한 명씩 꺼내서 라운드로빈 방식으로 테이블에 배정
  const maxGroupSize = Math.max(...shuffledGroups.map((g) => g.length))

  for (let round = 0; round < maxGroupSize; round++) {
    for (const group of shuffledGroups) {
      if (group[round]) {
        tables[tableIndex].push(group[round])
        tableIndex = (tableIndex + 1) % totalTables
      }
    }
  }

  return tables
}
