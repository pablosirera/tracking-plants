import { shallowMount } from '@vue/test-utils'
import TheButton from '../TheButton'

describe('Global Components -> Ui -> TheButton', () => {
  const build = propsData => {
    const options = propsData ? { propsData } : null
    const wrapper = shallowMount(TheButton, options)

    return {
      wrapper
    }
  }

  it('should match snapshot', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should add the primary theme classes when theme prop is primary', () => {
    const { wrapper } = build({ theme: 'primary' })
    const button = wrapper.find('button')
    const buttonClasses = button.classes()

    expect(buttonClasses).toContain('bg-green-600')
    expect(buttonClasses).toContain('text-white')
  })

  it('should add the medium classes when size is medium', () => {
    const { wrapper } = build({ size: 'medium' })
    const button = wrapper.find('button')
    const buttonClasses = button.classes()

    expect(buttonClasses).toContain('w-3/5')
  })

  it('should add the large classes when size is large', () => {
    const { wrapper } = build({ size: 'large' })
    const button = wrapper.find('button')
    const buttonClasses = button.classes()

    expect(buttonClasses).toContain('w-full')
  })
})
