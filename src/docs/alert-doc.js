import { createApp } from 'vue';
import Alert from '../../components/Alert.vue';
import AlertDocPage from './AlertDocPage.vue';

const app = createApp(AlertDocPage);
app.component('Alert', Alert);
app.mount('#app');
