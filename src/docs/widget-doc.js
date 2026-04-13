import { createApp } from 'vue';
import Widget from '../../components/Widget.vue';
import ButtonSecondary from '../../components/ButtonSecondary.vue';
import ButtonLine from '../../components/ButtonLine.vue';
import Dropdown from '../../components/Dropdown.vue';
import WidgetDocPage from './WidgetDocPage.vue';

const app = createApp(WidgetDocPage);
app.component('Widget', Widget);
app.component('ButtonSecondary', ButtonSecondary);
app.component('ButtonLine', ButtonLine);
app.component('Dropdown', Dropdown);
app.mount('#app');
