import { createApp } from 'vue';
import EmptyState from '../../components/EmptyState.vue';
import ButtonPrimary from '../../components/ButtonPrimary.vue';
import EmptyStateDocPage from './EmptyStateDocPage.vue';

const app = createApp(EmptyStateDocPage);
app.component('EmptyState', EmptyState);
app.component('ButtonPrimary', ButtonPrimary);
app.mount('#app');
