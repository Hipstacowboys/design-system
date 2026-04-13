import { createApp } from 'vue';
import NavbarSide from '../../components/NavbarSide.vue';
import NavbarItem from '../../components/NavbarItem.vue';
import NavbarSideDocPage from './NavbarSideDocPage.vue';

const app = createApp(NavbarSideDocPage);
app.component('NavbarSide', NavbarSide);
app.component('NavbarItem', NavbarItem);
app.mount('#app');
