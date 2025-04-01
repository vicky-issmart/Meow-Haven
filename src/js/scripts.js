// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// 获取页面元素
const startPage = document.querySelector('.start-page');
const instructionPage = document.querySelector('.instruction-page');
const gamePage = document.querySelector('.game-page');

const startButton = document.querySelector('.button-start');
const playButton = document.querySelector('.button-play');

// 点击 START：显示 instruction page，隐藏 start page
startButton.addEventListener('click', () => {
	startPage.classList.add('hidden');
	instructionPage.classList.remove('hidden');
});

// 点击 PLAY：显示 game page，隐藏 instruction page
playButton.addEventListener('click', () => {
	instructionPage.classList.add('hidden');
	gamePage.classList.remove('hidden');
});
