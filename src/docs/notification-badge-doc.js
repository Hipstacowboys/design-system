import { createApp } from 'vue';
import NotificationBadge from '../../components/NotificationBadge.vue';
import NotificationBadgeDocPage from './NotificationBadgeDocPage.vue';

const app = createApp(NotificationBadgeDocPage);
app.component('NotificationBadge', NotificationBadge);
app.mount('#app');
