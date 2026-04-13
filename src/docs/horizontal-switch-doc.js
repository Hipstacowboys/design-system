import { createApp } from 'vue';
import HorizontalSwitch from '../../components/HorizontalSwitch.vue';
import ButtonPrimary from '../../components/ButtonPrimary.vue';
import ButtonGhost from '../../components/ButtonGhost.vue';
import HorizontalSwitchDocPage from './HorizontalSwitchDocPage.vue';

const app = createApp(HorizontalSwitchDocPage);
app.component('HorizontalSwitch', HorizontalSwitch);
app.component('ButtonPrimary', ButtonPrimary);
app.component('ButtonGhost', ButtonGhost);
app.mount('#app');
