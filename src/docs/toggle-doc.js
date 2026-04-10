import { createApp } from 'vue';
import Toggle from '../../components/Toggle.vue';
import ToggleWithLabel from '../../components/ToggleWithLabel.vue';
import ToggleDocPage from './ToggleDocPage.vue';

const app = createApp(ToggleDocPage);

app.component('Toggle', Toggle);
app.component('ToggleWithLabel', ToggleWithLabel);

app.mount('#app');
