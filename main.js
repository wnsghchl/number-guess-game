//랜덤번호 지정
//유저가 번호 입력 후 go 버튼 누르기
//만약에 유저가 랜덤번호 맞추면 - 맞췄습니다
//랜덤번호가 유저번호보다 작다 - down
//랜덤번호가 유저번호보다 크다 - up
//reset 버튼 누르면 게임 리셋
//5번의 기회 다쓰면 게임이 끝난다 - 더이상 추측 불가 , 버튼 disable
//유저가 1~100 범위 밖의 숫자 입력 - 경고 후 기회 차감 x
//유저가 이미 입력한 숫자를 또 입력 - 경고 후 기회 차감 x

let computerNum = 0;
let playButton = document.getElementById("play-button");
console.log(playButton);
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "up!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!!";
  } else {
    resultArea.textContent = "맞췄습니다!!";
  }
}
pickRandomNum();
