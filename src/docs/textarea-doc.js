import { createApp } from 'vue';
import Textarea from '../../components/Textarea.vue';
import TextareaDocPage from './TextareaDocPage.vue';

const app = createApp(TextareaDocPage);
app.component('Textarea', Textarea);
app.mount('#app');
