// script.js// Create a custom cursor element
const cursor = document.createElement('div');
cursor.style.position = 'fixed';
cursor.style.top = '0';
cursor.style.left = '0';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.border = '2px solid #00f';
cursor.style.borderRadius = '50%';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '9999';
cursor.style.transition = 'transform 0.1s ease';
cursor.style.transform = 'translate(-50%, -50%) scale(1)';
cursor.style.background = 'rgba(0,0,255,0.1)';
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Create a "gleater" (glow) element
const gleater = document.createElement('div');
gleater.style.position = 'fixed';
gleater.style.top = '0';
gleater.style.left = '0';
gleater.style.width = '40px';
gleater.style.height = '40px';
gleater.style.borderRadius = '50%';
gleater.style.pointerEvents = 'none';
gleater.style.zIndex = '9998';
gleater.style.background = 'radial-gradient(circle, rgba(0,0,255,0.3) 0%, rgba(0,0,255,0) 70%)';
gleater.style.transform = 'translate(-50%, -50%) scale(1)';
gleater.style.transition = 'transform 0.15s ease';
document.body.appendChild(gleater);

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animate cursor and gleater
function animate() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;

    cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px) scale(1)`;
    gleater.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px) scale(1)`;

    requestAnimationFrame(animate);
}
animate();

let isScrolling = false;
let scrollAnimationId = null;
let targetScroll = window.scrollY;

// Smooth scroll on wheel event


// light and drak mode
const modeToggle = document.createElement('button');
modeToggle.textContent = 'Toggle Mode';
modeToggle.style.position = 'fixed';
modeToggle.style.bottom = '20px';
modeToggle.style.right = '20px';
modeToggle.style.zIndex = '10000';
modeToggle.style.padding = '10px 20px';
modeToggle.style.border = 'none';
modeToggle.style.borderRadius = '5px';
modeToggle.style.background = '#222';
modeToggle.style.color = '#fff';
modeToggle.style.cursor = 'pointer';
modeToggle.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
document.body.appendChild(modeToggle);

function setMode(mode) {
    if (mode === 'dark') {
        document.body.style.background = '#181818';
        document.body.style.color = '#fff';
        cursor.style.border = '2px solid #00f';
        cursor.style.background = 'rgba(0,0,255,0.1)';
        gleater.style.background = 'radial-gradient(circle, rgba(0,0,255,0.3) 0%, rgba(0,0,255,0) 70%)';
        modeToggle.style.background = '#222';
        modeToggle.style.color = '#fff';
    } else {
        document.body.style.background = '#fff';
        document.body.style.color = '#222';
        cursor.style.border = '2px solid #0077ff';
        cursor.style.background = 'rgba(0,119,255,0.08)';
        gleater.style.background = 'radial-gradient(circle, rgba(0,119,255,0.18) 0%, rgba(0,119,255,0) 70%)';
        modeToggle.style.background = '#eee';
        modeToggle.style.color = '#222';
    }
    localStorage.setItem('theme', mode);
}

let currentMode = localStorage.getItem('theme') || 'dark';
setMode(currentMode);

modeToggle.addEventListener('click', () => {
    currentMode = currentMode === 'dark' ? 'light' : 'dark';
    setMode(currentMode);
});
// 
/* Stary night animated background - mobile responsive */
const starCanvas = document.createElement('canvas');
starCanvas.style.position = 'fixed';
starCanvas.style.top = '0';
starCanvas.style.left = '0';
starCanvas.style.width = '100vw';
starCanvas.style.height = '100vh';
starCanvas.style.pointerEvents = 'none';
starCanvas.style.zIndex = '0';
starCanvas.style.touchAction = 'none'; // Prevent touch interference
starCanvas.width = window.innerWidth;
starCanvas.height = window.innerHeight;
document.body.insertBefore(starCanvas, document.body.firstChild);

let stars = [];
const STAR_COUNT = window.innerWidth < 600 ? 60 : 120; // Fewer stars on small screens

function createStars() {
    stars = [];
    const count = window.innerWidth < 600 ? 60 : 120;
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * starCanvas.width,
            y: Math.random() * starCanvas.height,
            r: Math.random() * (window.innerWidth < 600 ? 1 : 1.2) + 0.3,
            alpha: Math.random() * 0.5 + 0.5,
            speed: Math.random() * 0.15 + 0.02
        });
    }
}

function drawStars() {
    const ctx = starCanvas.getContext('2d');
    ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    for (const star of stars) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Twinkle
        star.alpha += (Math.random() - 0.5) * 0.03;
        star.alpha = Math.max(0.3, Math.min(1, star.alpha));
        // Drift
        star.y += star.speed;
        if (star.y > starCanvas.height) {
            star.y = 0;
            star.x = Math.random() * starCanvas.width;
        }
    }
    requestAnimationFrame(drawStars);
}

function resizeStarCanvas() {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
    createStars();
}

// Listen for both resize and orientation change for mobile
window.addEventListener('resize', resizeStarCanvas);
window.addEventListener('orientationchange', resizeStarCanvas);

// Prevent scrolling when touching the canvas on mobile
starCanvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });

createStars();
drawStars();