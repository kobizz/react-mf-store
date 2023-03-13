import { selector } from 'recoil';
import { products } from './atoms.js';

export const getProducts = selector({
	key: 'productsSelector',
	get: async () => {
		return (await fetch('../mock/products.json')).json();
	}
});

export const getProductsInCart = selector({
	key: 'productsInCartSelector',
	get: ({ get }) => {
		return get(products).filter(product => product.inCart);
	}
});
