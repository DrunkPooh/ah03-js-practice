// AH_03_신정호 JavaScript 실습과제

// 1번 버튼 클릭
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  console.log("버튼 클릭됨");
});

// 2번 문장 바꾸기
const btn2 = document.getElementById("btn2");
const text1 = document.getElementById("text1");

btn2.addEventListener("click", function () {
  text1.textContent = "Hello JavaScript";
});

// 3번 이름 입력하면 바로 나오기
const nameInput = document.getElementById("nameInput");
const namePrint = document.getElementById("namePrint");

nameInput.addEventListener("input", function () {
  namePrint.textContent = nameInput.value;
});

// 4번 마우스 올리면 색 바뀜
const mouseText = document.getElementById("mouseText");

mouseText.addEventListener("mouseover", function () {
  mouseText.style.color = "orange";
});

mouseText.addEventListener("mouseout", function () {
  mouseText.style.color = "black";
});

// 5번 버튼 누르면 스타일 바뀜
const btn3 = document.getElementById("btn3");
const styleText = document.getElementById("styleText");

btn3.addEventListener("click", function () {
  styleText.style.color = "orange";
  styleText.style.fontSize = "20px";
});

// 6번 점수 판별
const btn4 = document.getElementById("btn4");
const score = document.getElementById("score");
const result = document.getElementById("result");

btn4.addEventListener("click", function () {
  if (Number(score.value) >= 60) {
    result.textContent = "합격";
  } else {
    result.textContent = "불합격";
  }
});

// 7번 콘솔 계산기
const btn5 = document.getElementById("btn5");

btn5.addEventListener("click", function () {
  const num1 = prompt("첫 번째 숫자를 입력하세요");
  const op = prompt("연산자를 입력하세요 (+, -, *, /)");
  const num2 = prompt("두 번째 숫자를 입력하세요");

  const a = Number(num1);
  const b = Number(num2);

  if (op === "+") {
    console.log("결과:", a + b);
  } else if (op === "-") {
    console.log("결과:", a - b);
  } else if (op === "*") {
    console.log("결과:", a * b);
  } else if (op === "/") {
    if (b === 0) {
      console.log("0으로 나눌 수 없습니다.");
    } else {
      console.log("결과:", a / b);
    }
  } else {
    console.log("연산자를 잘못 입력했습니다.");
  }
});
