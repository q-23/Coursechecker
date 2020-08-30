import Vue from "vue";
import Vuex from "vuex"
import Vuetify from 'vuetify'

import { shallowMount, createLocalVue } from '@vue/test-utils'

import CourseTable from "@/components/CourseTable";

const localVue = createLocalVue()

Vue.use(Vuetify)
localVue.use(Vuex)

describe('[COURSE TABLE]', () => {
	let vuetify;
	let store;

	beforeEach(() => {
		vuetify = new Vuetify();

		store = new Vuex.Store({
			state: {
				currenciesCourses: [
					{
						code: "CAD",
						currency: "dolar kanadyjski",
						mid: 2.8287
					},
					{
						code: "EUR",
						currency: "euro",
						mid: 4.4043
					}
				]
			}
		})
	})

	it('Should render component', () => {
		const wrapper = shallowMount(CourseTable, {
			localVue,
			vuetify,
			store
		})
		expect(wrapper.html()).toMatchSnapshot()
	});
})
