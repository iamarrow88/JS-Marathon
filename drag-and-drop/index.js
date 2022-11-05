const card = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

card.addEventListener('dragstart', dragstart);

card.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover',dragover);
	placeholder.addEventListener('dragleave', dragleave);
	placeholder.addEventListener('dragenter', dragenter);
	placeholder.addEventListener('drop', dragdrop);
}
function dragstart(event) {
	event.target.classList.add('hold');
	setTimeout(()=> {
		event.target.classList.add('hide');
	}, 0)
}

function dragend(event) {
	event.target.classList.remove('hold', 'hide');
}


function dragover(event) {
	event.preventDefault();
}

function dragleave(event) {
	event.target.classList.remove('hovered')
}

function dragenter(event) {
	event.target.classList.add('hovered')
}

function dragdrop(event) {
	event.target.classList.remove('hovered');
	event.target.append(card);
}
