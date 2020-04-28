import { shallowMount } from '@vue/test-utils'
import HomeView from '../index.vue'

describe('HomeView', () => {
  const build = () => {
    const wrapper = shallowMount(HomeView)

    return {
      wrapper
    }
  }
  it('should match snapshot', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })
})
