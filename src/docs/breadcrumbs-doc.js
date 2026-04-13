import { createApp } from 'vue';
import Breadcrumbs from '../../components/Breadcrumbs.vue';
import Breadcrumb from '../../components/Breadcrumb.vue';
import BreadcrumbsDocPage from './BreadcrumbsDocPage.vue';

const app = createApp(BreadcrumbsDocPage);
app.component('Breadcrumbs', Breadcrumbs);
app.component('Breadcrumb', Breadcrumb);
app.mount('#app');
