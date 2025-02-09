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
