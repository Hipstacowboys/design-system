import { createApp } from 'vue';
import Checkbox from '../../components/Checkbox.vue';
import CheckboxWithLabel from '../../components/CheckboxWithLabel.vue';
import CheckboxDocPage from './CheckboxDocPage.vue';

const app = createApp(CheckboxDocPage);

app.component('Checkbox', Checkbox);
app.component('CheckboxWithLabel', CheckboxWithLabel);

app.mount('#app');
