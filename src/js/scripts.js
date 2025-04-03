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
const soundButton = document.querySelector('.button-sound');
const soundIcon = soundButton?.querySelector('img');

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
soundButton?.addEventListener('click', () => {
	isMuted = !isMuted;
	if (soundIcon) {
		soundIcon.src = isMuted
			? 'images/button/button-muted.png'
			: 'images/button/button-sound.png';
	}
	// Optional: control background music mute/unmute
	// backgroundMusic.muted = isMuted;
});
