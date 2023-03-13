import { selector } from 'recoil';

export const getProducts = selector({
	key: 'productsSelector',
	get: async ({get}) => {
		return (await fetch('../mock/products.json')).json();
	}
});
