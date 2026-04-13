import { createApp } from 'vue';
import NotificationDialog from '../../components/NotificationDialog.vue';
import NotificationMessage from '../../components/NotificationMessage.vue';
import ButtonPrimary from '../../components/ButtonPrimary.vue';
import ButtonSecondary from '../../components/ButtonSecondary.vue';
import NotificationDialogDocPage from './NotificationDialogDocPage.vue';

const app = createApp(NotificationDialogDocPage);
app.component('NotificationDialog', NotificationDialog);
app.component('NotificationMessage', NotificationMessage);
app.component('ButtonPrimary', ButtonPrimary);
app.component('ButtonSecondary', ButtonSecondary);
app.mount('#app');
