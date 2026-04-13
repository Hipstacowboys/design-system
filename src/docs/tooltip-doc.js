import { createApp } from 'vue';
import Tooltip from '../../components/Tooltip.vue';
import TooltipDocPage from './TooltipDocPage.vue';

const app = createApp(TooltipDocPage);
app.component('Tooltip', Tooltip);
app.mount('#app');
