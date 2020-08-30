const mutations = {
	addFavouriteCurrency(state, currency) {
		state.favouriteCurrencies = [...state.favouriteCurrencies, currency]
	},
	removeFavouriteCurrency(state, currency) {
		state.favouriteCurrencies = state.favouriteCurrencies.filter(el => el !== currency)
	},
	removeAllFavouriteCurrencies(state) {
		state.favouriteCurrencies = []
	},
	addCurrenciesCourses(state, courses) {
		state.currenciesCourses = courses
	}
}

export default mutations;