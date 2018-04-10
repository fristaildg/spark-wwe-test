import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';
import MainContent from '../components/MainContent/MainContent.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MainContent
  },
  data() {
    return {
      welcomeText: 'Welcome!'
    }
  }
}