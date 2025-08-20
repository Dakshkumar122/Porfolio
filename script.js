// // script.js// Create a custom cursor element
// const cursor = document.createElement('div');
// cursor.style.position = 'fixed';
// cursor.style.top = '0';
// cursor.style.left = '0';
// cursor.style.width = '20px';
// cursor.style.height = '20px';
// cursor.style.border = '2px solid #00f';
// cursor.style.borderRadius = '50%';
// cursor.style.pointerEvents = 'none';
// cursor.style.zIndex = '9999';
// cursor.style.transition = 'transform 0.1s ease';
// cursor.style.transform = 'translate(-50%, -50%) scale(1)';
// cursor.style.background = 'rgba(0,0,255,0.1)';
// document.body.appendChild(cursor);

// let mouseX = 0, mouseY = 0;
// let cursorX = 0, cursorY = 0;

// // Create a "gleater" (glow) element
// const gleater = document.createElement('div');
// gleater.style.position = 'fixed';
// gleater.style.top = '0';
// gleater.style.left = '0';
// gleater.style.width = '40px';
// gleater.style.height = '40px';
// gleater.style.borderRadius = '50%';
// gleater.style.pointerEvents = 'none';
// gleater.style.zIndex = '9998';
// gleater.style.background = 'radial-gradient(circle, rgba(0,0,255,0.3) 0%, rgba(0,0,255,0) 70%)';
// gleater.style.transform = 'translate(-50%, -50%) scale(1)';
// gleater.style.transition = 'transform 0.15s ease';
// document.body.appendChild(gleater);

// // Track mouse position
// document.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// // Animate cursor and gleater
// function animate() {
//     cursorX += (mouseX - cursorX) * 0.2;
//     cursorY += (mouseY - cursorY) * 0.2;

//     cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px) scale(1)`;
//     gleater.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px) scale(1)`;

//     requestAnimationFrame(animate);
// }
// animate();

// let isScrolling = false;
// let scrollAnimationId = null;
// let targetScroll = window.scrollY;


