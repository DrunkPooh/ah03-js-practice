let score = 85;
let attendance = 79;
let submit = true;

function checkPass(score, attendance, submit) {
  if (score >= 90 && submit) {
    console.log("결과: 합격입니다.");
  } else if (score >= 70 && attendance >= 80 && submit) {
    console.log("결과: 합격입니다.");
  } else {
    console.log("결과: 불합격입니다.");
  }
}

checkPass(score, attendance, submit);
checkPass(90, 79, true);
