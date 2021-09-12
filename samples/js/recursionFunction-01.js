// 재귀함수 샘플코드
function Numbers(n) {
    if (n <= 1) {
        // 재귀함수의 종료조건
        return 1
    }
    // 재귀 함수
    return n + Numbers(n - 1)
}

// Value
console.log(Numbers(100))