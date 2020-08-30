import Vue from "vue";
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Navbar from "@/components/Navbar";
import Vuetify from 'vuetify'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('[NAVBAR]', () => {
	let vuetify;

	beforeEach(() => {
		vuetify = new Vuetify()
	})

	it('Should render component', () => {
		const wrapper = shallowMount(Navbar, {
			localVue,
			vuetify,
		})
		expect(wrapper.html()).toMatchSnapshot()
	})

	it('Should render app name', () => {
		const name = 'NBP Course Check'
		const wrapper = shallowMount(Navbar, {
			localVue,
			vuetify,
		})
		expect(wrapper.text()).toMatch(name)
	})
})
