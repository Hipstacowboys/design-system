import { createApp } from 'vue';
import Radio from '../../components/Radio.vue';
import RadioWithLabel from '../../components/RadioWithLabel.vue';
import RadioDocPage from './RadioDocPage.vue';

const app = createApp(RadioDocPage);
app.component('Radio', Radio);
app.component('RadioWithLabel', RadioWithLabel);
app.mount('#app');
