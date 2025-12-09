document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.contact-form');
	if (!form) return;

	// Create a message container and insert at top of form
	const msg = document.createElement('div');
	msg.className = 'form-message';
	form.prepend(msg);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		msg.textContent = '';
		msg.classList.remove('success', 'error');

		const name = form.querySelector('#name')?.value.trim();
		const email = form.querySelector('#email')?.value.trim();

		if (!name || !email) {
			msg.textContent = 'Please provide your name and email.';
			msg.classList.add('error');
			return;
		}

		const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRe.test(email)) {
			msg.textContent = 'Please enter a valid email address.';
			msg.classList.add('error');
			return;
		}

		// Simulate success (replace with real submission logic as needed)
		msg.textContent = 'Thanks — your message has been sent!';
		msg.classList.add('success');
		form.reset();

		// Auto-hide the message after a short delay
		setTimeout(() => {
			msg.textContent = '';
			msg.classList.remove('success');
		}, 4000);
	});
});

