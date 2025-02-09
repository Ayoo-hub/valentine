document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    // Redirect to the love letter page when "Yes" is clicked
    yesBtn.addEventListener("click", function() {
        window.location.href = "love.html";
    });

    // Move "No" button to a random position when hovered
    noBtn.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.classList.add("heart");
  document.body.appendChild(heart);

  const startPos = Math.random() * window.innerWidth;
  heart.style.left = `${startPos}px`;
  heart.style.animationDuration = `${3 + Math.random() * 2}s`;

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  document.body.appendChild(confetti);

  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

  setTimeout(() => {
    confetti.remove();
  }, 4000);
}

document.getElementById("yesButton").addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    setTimeout(createConfetti, i * 50);
  }
});
