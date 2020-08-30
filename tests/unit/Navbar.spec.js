import Vue from "vue";
import Vuetify from 'vuetify'
import VueRouter from "vue-router";

import { shallowMount, createLocalVue } from '@vue/test-utils'

import Navbar from "@/components/Navbar";

const localVue = createLocalVue()
const router = new VueRouter()

Vue.use(Vuetify)
localVue.use(VueRouter)

describe('[NAVBAR]', () => {
	let vuetify;

	beforeEach(() => {
		vuetify = new Vuetify()
	})

	it('Should render component', () => {
		const wrapper = shallowMount(Navbar, {
			localVue,
			vuetify,
			router
		})
		expect(wrapper).toMatchSnapshot()
	})

	it('Should render app name', () => {
		const name = 'NBP Course Check'
		const wrapper = shallowMount(Navbar, {
			localVue,
			vuetify,
			router
		})
		expect(wrapper.text()).toMatch(name)
	})
})
