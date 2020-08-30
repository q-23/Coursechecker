const actions = {
	addCurrenciesCourses({commit}, payload) {
		commit('addCurrenciesCourses', payload)
	},
	addFavouriteCurrency({commit}, payload) {
		commit('addFavouriteCurrency', payload)
	},
	removeFavouriteCurrency({commit}, payload) {
		commit('removeFavouriteCurrency', payload)
	},
	removeAllFavouriteCurrencies({commit}) {
		commit('removeAllFavouriteCurrencies')
	},
};

export default actions;