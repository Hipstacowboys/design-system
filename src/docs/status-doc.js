import { createApp } from 'vue';
import Status from '../../components/Status.vue';
import StatusDocPage from './StatusDocPage.vue';

const app = createApp(StatusDocPage);
app.component('Status', Status);
app.mount('#app');
