// 3. JavaScript Animation using setInterval
function startAnimation() {
    const box = document.getElementById("animatedBox");
    const stageWidth = box.parentElement.clientWidth;
    const boxWidth = box.clientWidth;
    
    let position = 0;
    let direction = 1; // 1 for moving right, -1 for moving left

    // Clear any existing animation loops to prevent speed multiplication
    if (window.animInterval) {
        clearInterval(window.animInterval);
    }

    window.animInterval = setInterval(() => {
        // Reverse direction when hitting container edges
        if (position >= stageWidth - boxWidth) {
            direction = -1;
        } else if (position <= 0) {
            direction = 1;
        }

        position += 4 * direction;
        box.style.left = position + "px";
    }, 15);
}

// Run the animation automatically when the window loads
window.onload = function() {
    startAnimation();
};