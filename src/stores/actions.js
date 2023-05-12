import { products } from './store.js';
import sortItems from '../utils/sortItems.js';
import axios from 'axios';

const baseUrl = 'https://dummyjson.com/products';

export const getAllProducts = async () => {
	try {
		const data = await axios.get(baseUrl);
		products.set(data.data.products);
	} catch (e) {
		console.error(e);
	}
};

export const searchProducts = async (event) => {
	const { searchTerm } = event.detail;
	try {
		const searchResults = await axios.get(`${baseUrl}/search?q=${searchTerm}`);
		products.set(searchResults.data.products);
	} catch (e) {
		console.error(e);
	}
};

export const filterByCategory = async (event) => {
	const { category } = event.detail;
	try {
		if (category === 'all') {
			getAllProducts();
		} else {
			const filteredProducts = await axios.get(`${baseUrl}/category/${category}`);
			products.set(filteredProducts.data.products);
		}
	} catch (e) {
		console.error(e);
	}
};

export const sortProducts = (event) => {
	const { sortBy } = event.detail;
	if (sortBy === '--') {
		getAllProducts();
	} else {
		products.update((items) => {
			return sortItems(items, sortBy);
		});
	}
};

export const getAllCategories = async () => {
	try {
		const data = await axios.get(`${baseUrl}/categories`);
		return data.data;
	} catch (e) {
		console.error(e);
	}
};

export const getProduct = async (productId) => {
	try {
		const data = await axios.get(`${baseUrl}/${productId}`);
		return data.data;
	} catch (e) {
		console.error(e);
	}
};
