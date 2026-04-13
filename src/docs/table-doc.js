import { createApp } from 'vue';
import Table from '../../components/Table.vue';
import Checkbox from '../../components/Checkbox.vue';
import ButtonSecondary from '../../components/ButtonSecondary.vue';
import Status from '../../components/Status.vue';
import TableDocPage from './TableDocPage.vue';

const app = createApp(TableDocPage);
app.component('Table', Table);
app.component('Checkbox', Checkbox);
app.component('ButtonSecondary', ButtonSecondary);
app.component('Status', Status);
app.mount('#app');
