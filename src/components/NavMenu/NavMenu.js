import Button from '../Button/Button.vue';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.vue';

export default {
  name: 'NavMenu',
  components: {
    Button,
    HamburgerIcon
  },
  data() {
    return {
      listItems: [
        {
          name: 'Redeem Prepaid card',
          link: ''
        },
        {
          name: 'Login',
          link: ''
        }
      ]
    }
  }
}
