const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const { products } = require('./data/products.json');

function getProducts(ids, productsList) {
	return ids.map(id => productsList.find(product => product.id === id));
}

function mapCategory(productsList) {
	return productsList.map(product => {
		return {
			name: product.name,
			category: product.category
		};
	});
}

function totalRegularPrice(productsList) {
	return productsList.reduce((total, produto) => {
		return total += produto.regularPrice;
	}, 0).toFixed(2);
}

function getPromotion(productsList) {
	const list = productsList.map(produto => produto.category);
	const categories = list.filter((product, index) => list.indexOf(product) === index);
	return promotions[categories.length - 1];
}

function getPriceToPromotion(product, promotion) {
	return product.promotions.filter(promo => promo.looks.includes(promotion))[0] || [];
}

function getTotalPrice(productsList) {
	const typePromotion = getPromotion(productsList);
	const totalPrice = productsList.reduce((totalPrice, product) => {
		let promotion = getPriceToPromotion(product, typePromotion);
		return totalPrice += (promotion.price || product.regularPrice);
	}, 0);
	return Math.round(totalPrice * 100)/100;
}

function getDiscountValue(newValue, totalValue) {
	let discount = totalValue - newValue;
	return discount.toFixed(2);
}

function getDiscount(newValue, totalValue) {
	return (((1 - (newValue / totalValue)) * 100).toFixed(2)) + '%' ;
}

function getShoppingCart(ids, productsList) {
	const cartProducts = getProducts(ids, productsList);
	const products = mapCategory(cartProducts);
	const promotion = getPromotion(cartProducts);
	const totalPrice = getTotalPrice(cartProducts).toFixed(2);
	const discountValue = getDiscountValue(totalPrice, totalRegularPrice(cartProducts));
	const discount = getDiscount(totalPrice, totalRegularPrice(cartProducts));
	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount
	};
}

module.exports = { 
	getShoppingCart,
	getProducts,
	mapCategory,
	totalRegularPrice,
	getPromotion,
	getPriceToPromotion,
	getTotalPrice,
	getDiscountValue,
	getDiscount
};
