export default {
  name: 'HamburgerIcon',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.$emit('setMenu');
    }
  }
}
