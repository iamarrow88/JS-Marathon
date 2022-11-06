const btnUp = document.querySelector('.up-button');
const btnDown = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const slides = document.querySelector('.main-slide');
const sladeCount = slides.querySelectorAll('div').length;

let slidesTop;
let sidebarTop;

function setStyles () {
	slidesTop = 0;
	sidebarTop = (sladeCount - 1) * 100;
	sidebar.style.top = `-${sidebarTop}%`;
	slides.style.top = `-${slidesTop}%`;
}
setStyles();

const clickUp = function () {
	if(sidebarTop !== 0) {
		sidebarTop -= 100;
		slidesTop += 100;
		sidebar.style.top = `-${sidebarTop}%`;
		slides.style.top = `-${slidesTop}%`;

	}
}

const clickDown = function () {
	if(sidebarTop !== (sladeCount - 1) * 100) {
		sidebarTop += 100;
		slidesTop -= 100;
		sidebar.style.top = `-${sidebarTop}%`;
		slides.style.top = `-${slidesTop}%`;

	}
}


btnUp.addEventListener('click', clickUp)
btnDown.addEventListener('click', clickDown)



