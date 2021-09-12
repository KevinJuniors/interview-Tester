function inputData(char) {
    var display = document.getElementById('display'); // 우리가 식을 입력할 input 태그를 불러옵니다.
    // display.value는 input 태그 안에 들어 있는 값을 의미합니다.
    display.value = display.value + char;
    // display.value += char; 로 쓸 수도 있습니다.
    // input 태그의 값 뒤에 char 문자를 추가해 주는 역할을 합니다.
}

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value); // 식을 계산하고 result 변수에 저장합니다.
    document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";


}