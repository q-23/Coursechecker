import mutations from "@/store/mutations";

describe('[ACTIONS]', () => {
	let state;

	beforeEach(()=> {
		state = {
			currenciesCourses: [],
			favouriteCurrencies: []
		}
	})

	it('Should add favourite currencies',  () => {
		mutations.addFavouriteCurrency(state, 'A')
		expect(state.favouriteCurrencies.length).toBe(1)
		expect(state.favouriteCurrencies.includes('A')).toBeTruthy()

		mutations.addFavouriteCurrency(state, 'B')
		expect(state.favouriteCurrencies.length).toBe(2)
		expect(state.favouriteCurrencies.includes('B')).toBeTruthy()
	});

	it("Shouldn't add same favourite currency more than once",  () => {
		mutations.addFavouriteCurrency(state, 'A')
		mutations.addFavouriteCurrency(state, 'A')
		expect(state.favouriteCurrencies.length).toBe(1)

	});

	it('Should remove favourite currencies',  () => {
		state.favouriteCurrencies = ['A', 'B', 'C', 'D']

		mutations.removeFavouriteCurrency(state, 'B');
		expect(state.favouriteCurrencies.length).toBe(3);
		expect(state.favouriteCurrencies.includes('B')).toBeFalsy();

		mutations.removeFavouriteCurrency(state, 'A');
		expect(state.favouriteCurrencies.length).toBe(2);
		expect(state.favouriteCurrencies.includes('A')).toBeFalsy();
	});

	it('Should remove all favourite currencies',  () => {
		state.favouriteCurrencies = ['A', 'B', 'C', 'D']

		mutations.removeAllFavouriteCurrencies(state);
		expect(state.favouriteCurrencies.length).toBe(0);
	});

	it('Should add all currencies courses',  () => {
		mutations.addCurrenciesCourses(state, [{currency: 'USD', course: 23}, {currency: 'PLN', course: 12}]);
		expect(state.currenciesCourses.length).toBe(2);
		expect(state.currenciesCourses.findIndex(el => el.currency === 'PLN')).not.toBe(-1)
		expect(state.currenciesCourses.findIndex(el => el.currency === 'USD')).not.toBe(-1)
	});
})
