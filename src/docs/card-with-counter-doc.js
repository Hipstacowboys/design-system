import { createApp } from 'vue';
import CardWithCounter from '../../components/CardWithCounter.vue';
import ButtonLine from '../../components/ButtonLine.vue';
import CardWithCounterDocPage from './CardWithCounterDocPage.vue';

const app = createApp(CardWithCounterDocPage);
app.component('CardWithCounter', CardWithCounter);
app.component('ButtonLine', ButtonLine);
app.mount('#app');
