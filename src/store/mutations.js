const mutations = {
	addFavouriteCurrency(state, currency) {
		if (!state.favouriteCurrencies.includes(currency)) {
			state.favouriteCurrencies = [...state.favouriteCurrencies, currency]
		}
	},
	removeFavouriteCurrency(state, currency) {
		state.favouriteCurrencies = state.favouriteCurrencies.filter(el => el !== currency)
	},
	removeAllFavouriteCurrencies(state) {
		state.favouriteCurrencies = []
	},
	setFavouriteCurrencies(state, savedCurrencies) {
		state.favouriteCurrencies = savedCurrencies
	},
	addCurrenciesCourses(state, courses) {
		state.currenciesCourses = courses
	}
}

export default mutations;