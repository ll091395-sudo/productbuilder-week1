
class LottoBall extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const number = this.getAttribute('number');
    const color = this.getColor(number);

    const circle = document.createElement('div');
    circle.setAttribute('class', 'ball');
    circle.style.backgroundColor = color;
    circle.textContent = number;

    const style = document.createElement('style');
    style.textContent = `
      .ball {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        animation: pop-in 0.5s ease;
      }

      @keyframes pop-in {
        0% {
          transform: scale(0);
        }
        80% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(circle);
  }

  getColor(number) {
    const num = parseInt(number);
    if (num <= 10) return '#fbc400'; // Yellow
    if (num <= 20) return '#69c8f2'; // Blue
    if (num <= 30) return '#ff7272'; // Red
    if (num <= 40) return '#aaa';    // Gray
    return '#b0d840';      // Green
  }
}

customElements.define('lotto-ball', LottoBall);

document.getElementById('generate-btn').addEventListener('click', () => {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Clear previous results

  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  sortedNumbers.forEach(number => {
    const lottoBall = document.createElement('lotto-ball');
    lottoBall.setAttribute('number', number);
    resultsContainer.appendChild(lottoBall);
  });
});
