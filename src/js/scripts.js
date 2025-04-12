// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Pages
const startPage = document.querySelector('.start-page');
const instructionPage = document.querySelector('.instruction-page');
const gamePage = document.querySelector('.game-page');

// Buttons
const startButton = document.querySelector('.button-start');
const playButton = document.querySelector('.button-play');
const helpButton = document.querySelector('.button-help');

// Sound buttons
const soundButtons = document.querySelectorAll('.button-sound');
let isMuted = false;

// Start → Show instruction page
startButton?.addEventListener('click', () => {
	startPage?.classList.add('hidden');
	instructionPage?.classList.remove('hidden');
});

// Play → Show game page
playButton?.addEventListener('click', () => {
	instructionPage?.classList.add('hidden');
	gamePage?.classList.remove('hidden');
});

// Help (top left) → Go back to instruction page
helpButton?.addEventListener('click', () => {
	startPage?.classList.add('hidden');
	instructionPage?.classList.remove('hidden');
	gamePage?.classList.add('hidden');
});

// Sound (top right) → Toggle sound icon
soundButtons.forEach(button => {
	button.addEventListener('click', () => {
		isMuted = !isMuted;

		soundButtons.forEach(btn => {
			const icon = btn.querySelector('img');
			if (icon) {
				icon.src = isMuted
					? 'images/button/button-muted.png'
					: 'images/button/button-sound.png';
			}
		});

	});
});

// Game page navigation
const pages = document.querySelectorAll('.item-grid');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// Initialize
showPage(currentPage);