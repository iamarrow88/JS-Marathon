const container = document.querySelector('.container');


function init(parent, width, height) {
	const squares = width * height;
	for(let i = 0; i < squares; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		square.addEventListener('mouseover', function(event) {
			event.target.style.backgroundColor = getRandomColor();
		})

		square.addEventListener('mouseleave', function(event) {
			event.target.style.backgroundColor = '#1d1d1d';
		})

		parent.append(square);
	}
}

	init(container, 20, 25);


function getRandomColor() {
	let result = [];
	for(let i = 0; i < 6; i++){
		const number = Math.floor(((Math.random() * 16) + 1));
		let res = number.toString(16);
		if (+res === 10) {
			res = 'A';
		}
		result.push(res);
	}
	return '#' + result.join('');
}

