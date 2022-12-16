import { catalogList, modalProduct, modalProductBtn } from './elements.js';

import { openModal } from './openModal.js';

import { renderListProduct } from './renderListProduct.js';

import { navigationListController } from './navigationListController.js';

import { cartInit } from './cart.js';

const closeModal = e => {
	if (e.key === 'Escape') {
		modalProduct.classList.remove('modal_open');
		document.removeEventListener('keydown', closeModal);
	}
};

catalogList.addEventListener('click', e => {
	const target = e.target;
	if (target.closest('.product__detail') || target.closest('.product__image')) {
		const id = target.closest('.product').dataset.idProduct;
		openModal(id);
		modalProductBtn.focus();
		document.addEventListener('keydown', closeModal);
	}
});

modalProduct.addEventListener('click', e => {
	const target = e.target;
	if (target.closest('.modal__close') || target === modalProduct) {
		modalProduct.classList.remove('modal_open');
	}
});

const init = () => {
	renderListProduct();
	navigationListController(renderListProduct);
	cartInit();
};

init();
