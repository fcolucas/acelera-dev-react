const { products } = require('../src/data/products.json');
const filter = require('../src/index');

describe('Testes de unidade', () => {
	it('retorna o nome de um produto por uma lista de ids', () =>{
		const results = filter.getProducts([110, 120], products);
		expect(results[0].name).toBe("PINK PANTHER™ T-SHIRT");
		expect(results[1].name).toBe('DISNEY CRUELLA© T-SHIRT');
	});

	it('retorna uma lista de produtos com sua categoria', () =>{
		const results = filter.mapCategory(filter.getProducts([110, 120], products));
		expect(results[0].name).toBe("PINK PANTHER™ T-SHIRT");
		expect(results[0].category).toBe("T-SHIRTS");
	});

	it('retorna o total regular de uma lista de produtos', () =>{
		const results = filter.getProducts([110, 120], products);
		expect(filter.totalRegularPrice(results)).toBe("239.98");
	});

	it('retorna o tipo de promoção que será aplicado', () =>{
		const results = filter.getProducts([140, 170, 210, 240, 420], products);
		expect(filter.getPromotion(results)).toBe("TRIPLE LOOK");
	});

	it('retorna o valor da promoção que será aplicado', () =>{
		const results = filter.getProducts([130, 140, 230, 260], products);
		expect(filter.getPriceToPromotion(results[0], filter.getPromotion(results)).price).toBe(139.99);
	});

	it('retorna o valor total dos produtos com desconto de promoção', () =>{
		const results = filter.getProducts([130, 140, 230, 260], products);
		expect(filter.getTotalPrice(results)).toBe(504.95);
	});

	it('retorna o valor do desconto dos produtos', () =>{
		const results = filter.getProducts([130, 140, 230, 260], products);
		expect(filter.getDiscountValue(filter.getTotalPrice(results), filter.totalRegularPrice(results))).toBe("25.00");
	});

	it('retorna o desconto dos produtos', () =>{
		const results = filter.getProducts([130, 140, 230, 260], products);
		expect(filter.getDiscount(filter.getTotalPrice(results), filter.totalRegularPrice(results))).toBe('4.72%');
	});
})


const exemplo1Mock = {
	products: [
		{ name: 'DISNEY CRUELLA© T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'KNIT JOGGING PANTS', category: 'PANTS' },
		{ name: 'ASYMMETRICAL LEATHER SLIDE HEELS', category: 'SHOES' },
		{ name: 'SOFT FLAP BACKPACK', category: 'BAGS' }
	],
	promotion: 'FULL LOOK',
	totalPrice: '404.96',
	discountValue: '75.00',
	discount: '15.63%'
};

const exemplo2Mock = {
	products: [
		{ name: 'RUBBERIZED PRINTED T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'CONTRAST SLOGAN T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'KNIT JOGGING PANTS', category: 'PANTS' },
		{ name: 'MENSWEAR PANTS', category: 'PANTS' }
	],
		promotion: 'DOUBLE LOOK',
	totalPrice: '504.95',
	discountValue: '25.00',
	discount: '4.72%'
};

const exemplo3Mock = {
	products: [
		{ name: 'PINK PANTHER™ T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'DISNEY CRUELLA© T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'RUBBERIZED PRINTED T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'CONTRAST SLOGAN T-SHIRT', category: 'T-SHIRTS' }
	],
	promotion: 'SINGLE LOOK',
	totalPrice: '524.96',
	discountValue: '10.00',
	discount: '1.87%'
};

const exemplo4Mock = {
	products: [
		{ name: 'PINK PANTHER™ T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'RUBBERIZED PRINTED T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'CONTRAST SLOGAN T-SHIRT', category: 'T-SHIRTS' },
		{ name: 'KNIT JOGGING PANTS', category: 'PANTS' },
		{ name: 'ASYMMETRICAL LEATHER SLIDE HEELS', category: 'SHOES' },
		{ name: 'SLINGBACK KITTEN HEEL SHOES WITH METAL DETAIL', category: 'SHOES' }
	],
	promotion: 'TRIPLE LOOK',
	totalPrice: '784.94',
	discountValue: '130.00',
	discount: '14.21%'
};

describe('Get Shopping Cart', () => {
	it('Deve retornar um carrinho de compras a partir do array de IDs do exemplo 1', () => {
		const cart = filter.getShoppingCart([120, 230, 310, 490], products);

		expect(cart).toEqual(exemplo1Mock);
	});

	it('Deve retornar um carrinho de compras a partir do array de IDs do exemplo 2', () => {
		const cart = filter.getShoppingCart([130, 140, 230, 260], products);

		expect(cart).toEqual(exemplo2Mock);
	});

	it('Deve retornar um carrinho de compras a partir do array de IDs do exemplo 3', () => {
		const cart = filter.getShoppingCart([110, 120, 130, 140], products);

		expect(cart).toEqual(exemplo3Mock);
	});

	it('Deve retornar um carrinho de compras a partir do array de IDs do exemplo 4', () => {
		const cart = filter.getShoppingCart([110, 130, 140, 230, 310, 330], products);

		expect(cart).toEqual(exemplo4Mock);
	});
});
