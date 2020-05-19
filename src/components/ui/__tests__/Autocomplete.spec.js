import { shallowMount } from '@vue/test-utils'
import Autocomplete from '../Autocomplete'

describe('Global Components -> Ui -> Autocomplete', () => {
  const build = propsData => {
    const options = propsData ? { propsData } : null
    const wrapper = shallowMount(Autocomplete, options)

    return {
      wrapper
    }
  }

  it('should match snapshot', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should emit input event when autocomplete input has value', () => {
    const { wrapper } = build()
    const input = wrapper.find('[data-test="autocomplete-input"]')

    input.setValue('hello')

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0][0]).toEqual('hello')
  })

  it('should not render items when prop items is empty', () => {
    const { wrapper } = build()
    const autocompleteWrapper = wrapper.find(
      '[data-test="wrapper-items-autocomplete"]'
    )

    expect(autocompleteWrapper.element).not.toBeDefined()
  })

  it('should render two items', () => {
    const items = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' }
    ]
    const { wrapper } = build({ items })
    const autocompleteItems = wrapper.findAll('[data-test="autocomplete-item"]')

    expect(autocompleteItems.length).toBe(2)
  })

  it('should emit select-item event with clicked value', () => {
    const items = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' }
    ]
    const { wrapper } = build({ items })
    const autocompleteItems = wrapper.findAll('[data-test="autocomplete-item"]')

    autocompleteItems.at(0).trigger('click')

    expect(wrapper.emitted()['select-item']).toBeTruthy()
    expect(wrapper.emitted()['select-item'][0][0]).toEqual({
      id: 1,
      name: 'foo'
    })
  })
})
