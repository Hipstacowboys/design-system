import { createApp } from 'vue';
import Textarea from '../../components/Textarea.vue';
import TextareaField from '../../components/TextareaField.vue';
import TextareaDocPage from './TextareaDocPage.vue';

const app = createApp(TextareaDocPage);
app.component('Textarea', Textarea);
app.component('TextareaField', TextareaField);
app.mount('#app');
