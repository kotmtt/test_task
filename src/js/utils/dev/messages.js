document.addEventListener('DOMContentLoaded', () => {
	const wrapper = document.querySelector('.dev-buttons');
	const btnTop = document.createElement('button');
	const btnBottom = document.createElement('button');
	btnTop.innerText = 'Добавить сообщения сверху ленты';
	btnBottom.innerText = 'Добавить сообщение снизу ленты';
	const messagesList = document.querySelector('[data-messages-list]');
	if (messagesList) {
		btnTop.addEventListener('click', () => {
			const messages = messagesList.querySelectorAll('.messages__item ');
			messages.forEach((message, index) => {
				const clone = message.cloneNode(true);

				setTimeout(() => {
					if(index % 2) {
						messagesList.prepend(clone);
					}
				}, 500);
			})

		});
		btnBottom.addEventListener('click', () => {
			const messages = messagesList.querySelectorAll('.messages__item ');
			messages.forEach((message, index) => {
				const clone = message.cloneNode(true);
				setTimeout(() => {
					messagesList.append(clone);
					if(index == messages.length - 1) {
						const clone2 = message.cloneNode(true);
						messagesList.append(clone2);
					}
				}, 500);
				message.remove();

				setTimeout(() => {
					window.dispatchEvent(new CustomEvent('messages:scrollToLast'));
				}, 600);
			})

		});
		wrapper.appendChild(btnTop);
		wrapper.appendChild(btnBottom);
	}

});
