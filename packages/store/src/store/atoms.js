import { atom } from 'recoil';
import { getProducts } from './selectors';

export const products = atom({
	key: "productsAtos",
	default: getProducts,
});
