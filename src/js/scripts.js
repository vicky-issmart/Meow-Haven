// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Pages
const homePage = document.querySelector('.home-page');
const instructionPage = document.querySelector('.instruction-page');
const gamePage = document.querySelector('.game-page');

// Buttons
const startButton = document.querySelector('.button-start');
const playButton = document.querySelector('.button-play');
const helpButtons = document.querySelectorAll('.button-help');

// Sound buttons
const soundButtons = document.querySelectorAll('.button-sound');
let isMuted = false;

// Home → Show instruction page
startButton?.addEventListener('click', () => {
	homePage?.classList.add('hidden');
	instructionPage?.classList.remove('hidden');
});

// Play → Show game page
playButton?.addEventListener('click', () => {
	instructionPage?.classList.add('hidden');
	gamePage?.classList.remove('hidden');
});

// Help buttons (on home and game pages) → Show instruction page
helpButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Hide all pages
		homePage?.classList.add('hidden');
		gamePage?.classList.add('hidden');
		// Show instruction page
		instructionPage?.classList.remove('hidden');
	});
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
const mainPages = document.querySelectorAll('.main-page');
const customizePage = document.getElementById('customizePage');
const colorOptions = document.getElementById('colorOptions');
const backBtn = document.querySelector('.button-back');
const nextBtn = document.querySelector('.button-next');
const prevBtn = document.querySelector('.button-prev');
let currentMainPage = 0;

function showMainPage(index) {
	mainPages.forEach((page, i) => {
		page.classList.toggle('active', i === index);
	});
}

nextBtn.addEventListener('click', () => {
	if (currentMainPage < mainPages.length - 1) {
		currentMainPage++;
		showMainPage(currentMainPage);
	}
});

prevBtn.addEventListener('click', () => {
	if (currentMainPage > 0) {
		currentMainPage--;
		showMainPage(currentMainPage);
	}
});

// Initialize
showMainPage(currentMainPage);

// predefined color variations and their image paths

const itemColors = {
	'Var-corner-tree': [
		{ bg: 'images/item/corner_cat_tree_1.png', col: 2, row: 2, iconClass: 'corner-tree-icon' },
		{ bg: 'images/item/corner_cat_tree_2.png', col: 4, row: 2, iconClass: 'corner-tree-icon' },
		{ bg: 'images/item/corner_cat_tree_3.png', col: 6, row: 2, iconClass: 'corner-tree-icon' },
		{ bg: 'images/item/corner_cat_tree_4.png', col: 8, row: 2, iconClass: 'corner-tree-icon' },
		{ bg: 'images/item/corner_cat_tree_5.png', col: 2, row: 4, iconClass: 'corner-tree-icon' },
		{ bg: 'images/item/corner_cat_tree_6.png', col: 4, row: 4, iconClass: 'corner-tree-icon' }
	],

	'Var-cat-bed': [
		{ bg: 'images/item/cat_bed_1.png', col: 2, row: 2, iconClass: 'cat-bed-icon' },
		{ bg: 'images/item/cat_bed_2.png', col: 4, row: 2, iconClass: 'cat-bed-icon' },
		{ bg: 'images/item/cat_bed_3.png', col: 6, row: 2, iconClass: 'cat-bed-icon' },
		{ bg: 'images/item/cat_bed_4.png', col: 8, row: 2, iconClass: 'cat-bed-icon' },
		{ bg: 'images/item/cat_bed_5.png', col: 2, row: 4, iconClass: 'cat-bed-icon' },
		{ bg: 'images/item/cat_bed_6.png', col: 4, row: 4, iconClass: 'cat-bed-icon' }
	],

	'Var-four-deck-tree': [
		{ bg: 'images/item/four_deck_tree_1.png', col: 2, row: 2, iconClass: 'four-deck-tree-icon' },
		{ bg: 'images/item/four_deck_tree_2.png', col: 4, row: 2, iconClass: 'four-deck-tree-icon' },
		{ bg: 'images/item/four_deck_tree_3.png', col: 6, row: 2, iconClass: 'four-deck-tree-icon' },
	],

	'Var-three-deck-tree': [
		{ bg: 'images/item/three_deck_tree_1.png', col: 2, row: 2, iconClass: 'three-deck-tree-icon' },
		{ bg: 'images/item/three_deck_tree_2.png', col: 4, row: 2, iconClass: 'three-deck-tree-icon' }
	],

	'Var-round-tree': [
		{ bg: 'images/item/round_tree_1.png', col: 2, row: 2, iconClass: 'round-tree-icon' },
		{ bg: 'images/item/round_tree_2.png', col: 4, row: 2, iconClass: 'round-tree-icon' },
		{ bg: 'images/item/round_tree_3.png', col: 6, row: 2, iconClass: 'round-tree-icon' },
		{ bg: 'images/item/round_tree_4.png', col: 8, row: 2, iconClass: 'round-tree-icon' },
		{ bg: 'images/item/round_tree_5.png', col: 2, row: 4, iconClass: 'round-tree-icon' }
	],

	'Var-curtains-window': [
		{ bg: 'images/item/curtains_window_1.png', col: 2, row: 2, iconClass: 'curtains-window-icon' },
		{ bg: 'images/item/curtains_window_2.png', col: 4, row: 2, iconClass: 'curtains-window-icon' },
		{ bg: 'images/item/curtains_window_3.png', col: 6, row: 2, iconClass: 'curtains-window-icon' }
	],

	'Var-shuttered-window': [
		{ bg: 'images/item/shuttered_window_1.png', col: 2, row: 2, iconClass: 'shuttered-window-icon' },
		{ bg: 'images/item/shuttered_window_2.png', col: 4, row: 2, iconClass: 'shuttered-window-icon' },
		{ bg: 'images/item/shuttered_window_3.png', col: 6, row: 2, iconClass: 'shuttered-window-icon' },
		{ bg: 'images/item/shuttered_window_4.png', col: 8, row: 2, iconClass: 'shuttered-window-icon' }
	],

	'Var-small-window': [
		{ bg: 'images/item/small_window_1.png', col: 2, row: 2, iconClass: 'small-window-icon' },
		{ bg: 'images/item/small_window_2.png', col: 4, row: 2, iconClass: 'small-window-icon' },
		{ bg: 'images/item/small_window_3.png', col: 6, row: 2, iconClass: 'small-window-icon' },
		{ bg: 'images/item/small_window_4.png', col: 8, row: 2, iconClass: 'small-window-icon' }
	],

	'Var-table': [
		{ bg: 'images/item/table_1.png', col: 2, row: 2, iconClass: 'table-icon' },
		{ bg: 'images/item/table_2.png', col: 4, row: 2, iconClass: 'table-icon' },
		{ bg: 'images/item/table_3.png', col: 6, row: 2, iconClass: 'table-icon' },
		{ bg: 'images/item/table_4.png', col: 8, row: 2, iconClass: 'table-icon' },
		{ bg: 'images/item/table_5.png', col: 2, row: 4, iconClass: 'table-icon' }
	],

	'Var-large-plant': [
		{ bg: 'images/item/large_plant_1.png', col: 2, row: 2, iconClass: 'large-plant-icon' },
		{ bg: 'images/item/large_plant_2.png', col: 4, row: 2, iconClass: 'large-plant-icon' },
		{ bg: 'images/item/large_plant_3.png', col: 6, row: 2, iconClass: 'large-plant-icon' },
		{ bg: 'images/item/large_plant_4.png', col: 8, row: 2, iconClass: 'large-plant-icon' }
	],

	'Var-water-bowl': [
		{ bg: 'images/item/water_bowl_1.png', col: 2, row: 2, iconClass: 'water-bowl-icon' },
		{ bg: 'images/item/water_bowl_2.png', col: 4, row: 2, iconClass: 'water-bowl-icon' },
		{ bg: 'images/item/water_bowl_3.png', col: 6, row: 2, iconClass: 'water-bowl-icon' },
		{ bg: 'images/item/water_bowl_4.png', col: 8, row: 2, iconClass: 'water-bowl-icon' },
		{ bg: 'images/item/water_bowl_5.png', col: 2, row: 4, iconClass: 'water-bowl-icon' },
		{ bg: 'images/item/water_bowl_6.png', col: 4, row: 4, iconClass: 'water-bowl-icon' }
	],

	'Var-food-bowl': [
		{ bg: 'images/item/food_bowl_1.png', col: 2, row: 2, iconClass: 'food-bowl-icon' },
		{ bg: 'images/item/food_bowl_2.png', col: 4, row: 2, iconClass: 'food-bowl-icon' },
		{ bg: 'images/item/food_bowl_3.png', col: 6, row: 2, iconClass: 'food-bowl-icon' },
		{ bg: 'images/item/food_bowl_4.png', col: 8, row: 2, iconClass: 'food-bowl-icon' },
		{ bg: 'images/item/food_bowl_5.png', col: 2, row: 4, iconClass: 'food-bowl-icon' },
		{ bg: 'images/item/food_bowl_6.png', col: 4, row: 4, iconClass: 'food-bowl-icon' }
	],

	'Var-heart-picture': [
		{ bg: 'images/item/heart_picture_1.png', col: 2, row: 2, iconClass: 'heart-picture-icon' },
		{ bg: 'images/item/heart_picture_2.png', col: 4, row: 2, iconClass: 'heart-picture-icon' },
		{ bg: 'images/item/heart_picture_3.png', col: 6, row: 2, iconClass: 'heart-picture-icon' },
		{ bg: 'images/item/heart_picture_4.png', col: 8, row: 2, iconClass: 'heart-picture-icon' },
		{ bg: 'images/item/heart_picture_5.png', col: 2, row: 4, iconClass: 'heart-picture-icon' },
		{ bg: 'images/item/heart_picture_6.png', col: 4, row: 4, iconClass: 'heart-picture-icon' },
		{ bg: 'images/item/heart_picture_7.png', col: 6, row: 4, iconClass: 'heart-picture-icon' },
		{ bg: 'images/item/heart_picture_8.png', col: 8, row: 4, iconClass: 'heart-picture-icon' },
		{ bg: 'images/item/heart_picture_9.png', col: 2, row: 6, iconClass: 'heart-picture-icon' }
	],

	'Var-cat-picture': [
		{ bg: 'images/item/cat_picture_1.png', col: 2, row: 2, iconClass: 'cat-picture-icon' },
		{ bg: 'images/item/cat_picture_2.png', col: 4, row: 2, iconClass: 'cat-picture-icon' },
		{ bg: 'images/item/cat_picture_3.png', col: 6, row: 2, iconClass: 'cat-picture-icon' },
		{ bg: 'images/item/cat_picture_4.png', col: 8, row: 2, iconClass: 'cat-picture-icon' },
		{ bg: 'images/item/cat_picture_5.png', col: 2, row: 4, iconClass: 'cat-picture-icon' }
	],

	'Var-small-plant': [
		{ bg: 'images/item/small_plant_1.png', col: 2, row: 2, iconClass: 'small-plant-icon' },
		{ bg: 'images/item/small_plant_2.png', col: 4, row: 2, iconClass: 'small-plant-icon' },
		{ bg: 'images/item/small_plant_3.png', col: 6, row: 2, iconClass: 'small-plant-icon' },
		{ bg: 'images/item/small_plant_4.png', col: 8, row: 2, iconClass: 'small-plant-icon' },
		{ bg: 'images/item/small_plant_5.png', col: 2, row: 4, iconClass: 'small-plant-icon' },
		{ bg: 'images/item/small_plant_6.png', col: 4, row: 4, iconClass: 'small-plant-icon' }
	],

	'Var-ball': [
		{ bg: 'images/item/ball_1.png', col: 2, row: 2, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_2.png', col: 4, row: 2, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_3.png', col: 6, row: 2, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_4.png', col: 8, row: 2, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_5.png', col: 2, row: 4, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_6.png', col: 4, row: 4, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_7.png', col: 6, row: 4, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_8.png', col: 8, row: 4, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_9.png', col: 2, row: 6, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_10.png', col: 4, row: 6, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_11.png', col: 6, row: 6, iconClass: 'ball-icon' },
		{ bg: 'images/item/ball_12.png', col: 8, row: 6, iconClass: 'ball-icon' }
	],

	'Var-cubic-bricks': [
		{ bg: 'images/item/cubic_bricks_1.png', col: 2, row: 2, iconClass: 'cubic-bricks-icon' },
		{ bg: 'images/item/cubic_bricks_2.png', col: 4, row: 2, iconClass: 'cubic-bricks-icon' },
		{ bg: 'images/item/cubic_bricks_3.png', col: 6, row: 2, iconClass: 'cubic-bricks-icon' },
		{ bg: 'images/item/cubic_bricks_4.png', col: 8, row: 2, iconClass: 'cubic-bricks-icon' }
	],

	'Var-cat-toy': [
		{ bg: 'images/item/cat_toy_1.png', col: 2, row: 2, iconClass: 'cat-toy-icon' },
		{ bg: 'images/item/cat_toy_2.png', col: 4, row: 2, iconClass: 'cat-toy-icon' },
		{ bg: 'images/item/cat_toy_3.png', col: 6, row: 2, iconClass: 'cat-toy-icon' },
		{ bg: 'images/item/cat_toy_4.png', col: 8, row: 2, iconClass: 'cat-toy-icon' },
		{ bg: 'images/item/cat_toy_5.png', col: 2, row: 4, iconClass: 'cat-toy-icon' },
		{ bg: 'images/item/cat_toy_6.png', col: 4, row: 4, iconClass: 'cat-toy-icon' }
	],

}

// Show color customization page
document.querySelectorAll('.cell').forEach(cell => {
	cell.addEventListener('click', () => {
		const itemType = cell.dataset.item;
		showCustomizePage(itemType);
	});
});

function showCustomizePage(itemType) {
	mainPages.forEach(p => p.classList.remove('active'));
	customizePage.classList.add('active');
	colorOptions.innerHTML = '';

	const colors = itemColors[itemType];
	if (!colors) return;

	colors.forEach(({ bg, col, row, iconClass }) => {
		const cell = document.createElement('div');
		cell.className = `cell ${iconClass}`;
		cell.style.gridColumn = col;
		cell.style.gridRow = row;
		cell.innerHTML = `<img src="${bg}" alt="">`;
		colorOptions.appendChild(cell);

		// When user selects a color
		cell.addEventListener('click', () => {
			const targetRoomElement = document.querySelector(`[data-item="${itemType}"]`);
			if (targetRoomElement) {
				targetRoomElement.style.backgroundImage = `url('${bg}')`;
			}
		});
	});

	backBtn.addEventListener('click', () => {
		customizePage.classList.remove('active');
		showMainPage(currentMainPage);
	});
}
