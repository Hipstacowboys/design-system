import { createApp } from 'vue';
import BigSwitch from '../../components/BigSwitch.vue';
import SmallSwitch from '../../components/SmallSwitch.vue';
import SmallSwitchOption from '../../components/SmallSwitchOption.vue';
import SwitchDocPage from './SwitchDocPage.vue';

const app = createApp(SwitchDocPage);
app.component('BigSwitch', BigSwitch);
app.component('SmallSwitch', SmallSwitch);
app.component('SmallSwitchOption', SmallSwitchOption);
app.mount('#app');
