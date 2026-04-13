import { createApp } from 'vue';
import NotificationMessage from '../../components/NotificationMessage.vue';
import NotificationMessageDocPage from './NotificationMessageDocPage.vue';

const app = createApp(NotificationMessageDocPage);
app.component('NotificationMessage', NotificationMessage);
app.mount('#app');
