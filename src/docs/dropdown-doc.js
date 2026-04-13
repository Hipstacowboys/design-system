import { createApp } from 'vue';
import Dropdown from '../../components/Dropdown.vue';
import DropdownDocPage from './DropdownDocPage.vue';

const app = createApp(DropdownDocPage);
app.component('Dropdown', Dropdown);
app.mount('#app');
