<template>
  <button type="submit" :class="buttonClasses" :disabled="isDisabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  props: {
    theme: {
      type: String,
      default: 'primary',
      validate: value => ['primary'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: 'medium',
      validate: value => ['small', 'medium', 'large'].indexOf(value) !== -1
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      const commonClasses =
        'border py-2 px-6 rounded-full font-bold focus:outline-none'
      const primaryClasses = `${commonClasses} bg-green-600 text-white`

      const mediumClasses = 'w-3/5'
      const largeClasses = 'w-full'

      return {
        [primaryClasses]: this.theme === 'primary',
        [mediumClasses]: this.size === 'medium',
        [largeClasses]: this.size === 'large',
        'opacity-50 cursor-default': this.isDisabled
      }
    }
  }
}
</script>
