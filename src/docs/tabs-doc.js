import { createApp } from 'vue';
import Tabs from '../../components/Tabs.vue';
import Tab from '../../components/Tab.vue';
import TabsSimple from '../../components/TabsSimple.vue';
import TabSimple from '../../components/TabSimple.vue';
import TabsDocPage from './TabsDocPage.vue';

const app = createApp(TabsDocPage);
app.component('Tabs', Tabs);
app.component('Tab', Tab);
app.component('TabsSimple', TabsSimple);
app.component('TabSimple', TabSimple);
app.mount('#app');
