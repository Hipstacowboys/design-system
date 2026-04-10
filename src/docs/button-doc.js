import { createApp } from 'vue';
import ButtonPrimary from '../../components/ButtonPrimary.vue';
import ButtonSecondary from '../../components/ButtonSecondary.vue';
import ButtonLine from '../../components/ButtonLine.vue';
import ButtonGhost from '../../components/ButtonGhost.vue';
import ButtonDocPage from './ButtonDocPage.vue';

const app = createApp(ButtonDocPage);

app.component('ButtonPrimary', ButtonPrimary);
app.component('ButtonSecondary', ButtonSecondary);
app.component('ButtonLine', ButtonLine);
app.component('ButtonGhost', ButtonGhost);

app.mount('#app');
