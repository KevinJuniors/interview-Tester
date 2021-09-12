// const 상수로 임의로 지정한 6개의 숫자를 품는 배열을 생성
const numberArray = [3, 1, 4, 1, 5, 9];

// "recursive" 재귀 함수를 생성
function recursive(acc, array) {
    /* 배열의 길이가 0이 될 때 까지 값(Value)을 "numberArray" 배열에서 저장된 숫자들을
    불러와 축적된 합계와 나머지를 인자로 계속 넘기는 재귀함수를 실행  */
    if (array.length === 0) {
        // "numberArray" 배열의 길이가 0에 충족 됬을 경우(True)
        console.log(`총합은 ${acc}`);
        return acc;
    } else {
        // "numberArray" 배열의 길이가 0에 충족 되지 못했을 경우(False)
        try {
            console.log(`recursive(${acc} [${array})] (이)가`);
            return recursive(acc + array[0] , array.slice(1));
        } catch (e) {} finally {
            console.log('이라고 말했습니다.');
        }
    }
}

// "recursive" 함수의 최종 값을 호출
recursive(0, numberArray);