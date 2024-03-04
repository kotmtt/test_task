document.addEventListener('DOMContentLoaded', () => {
	const { body } = document;
	const wrapper = document.createElement('div');
	wrapper.classList.add('dev-buttons');
	const btn = document.createElement('button');
	btn.innerText = 'Переключить сетку';
	wrapper.style.position = 'fixed';
	wrapper.style.bottom = '0';
	wrapper.style.right = '0';
	wrapper.style.zIndex = '9999';
	btn.addEventListener('click', () => {
		body.classList.toggle('grid');
	});
	wrapper.appendChild(btn);
	body.appendChild(wrapper);
});
