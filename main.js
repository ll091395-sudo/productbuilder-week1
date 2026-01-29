
document.getElementById('generate-btn').addEventListener('click', () => {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // 이전 결과 지우기

  // 1. 번호 생성
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  // 2. 번호 정렬
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  // 3. 번호별로 공(div) 만들어서 화면에 추가
  sortedNumbers.forEach(number => {
    const lottoBall = document.createElement('div');
    lottoBall.classList.add('lotto-ball');
    lottoBall.textContent = number;
    lottoBall.style.backgroundColor = getColor(number);
    resultsContainer.appendChild(lottoBall);
  });
});

function getColor(number) {
  const num = parseInt(number);
  if (num <= 10) return '#fbc400'; // 노랑
  if (num <= 20) return '#69c8f2'; // 파랑
  if (num <= 30) return '#ff7272'; // 빨강
  if (num <= 40) return '#aaa';    // 회색
  return '#b0d840';      // 초록
}
