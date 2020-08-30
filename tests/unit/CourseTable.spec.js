import Vue from "vue";
import Vuex from "vuex"
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import { shallowMount, createLocalVue } from '@vue/test-utils'

import CourseTable from "@/components/CourseTable";

const localVue = createLocalVue()
const router = new VueRouter()

Vue.use(Vuetify)
localVue.use(Vuex)
localVue.use(VueRouter)

describe('[COURSE TABLE]', () => {
	let vuetify;
	let store;
	const currenciesCourses = [
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
	beforeEach(() => {
		vuetify = new Vuetify();

		store = new Vuex.Store({
			state: {
				currenciesCourses
			}
		})
	})

	it('Should render component', () => {
		const wrapper = shallowMount(CourseTable, {
			localVue,
			vuetify,
			store,
			router,
			props: {
				courses: currenciesCourses
			}
		})
		expect(wrapper).toMatchSnapshot()
	});
})
