import { shallowMount } from '@vue/test-utils'
import ListPlants from '../ListPlants.vue'
import { ROUTES } from '@/constants'

describe('HomeView -> ListPlants', () => {
  const $router = {
    push: jest.fn()
  }

  const build = () => {
    const wrapper = shallowMount(ListPlants, {
      mocks: {
        $router
      }
    })

    return {
      wrapper
    }
  }

  it('should match snapshot', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should go to add route when add button is clicked', () => {
    const { wrapper } = build()
    const button = wrapper.find('[data-test-id="add-button"]')
    button.trigger('click')
    expect(wrapper.vm.$router.push).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
      name: ROUTES.ADD.name
    })
  })
})
