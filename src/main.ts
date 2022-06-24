import { createApp } from "vue";
import { createPinia } from "pinia";
import * as utils from './utils/index';

import App from "./App.vue";
import router from "./router";

import myUi from './lib/myUi';

const app = createApp(App);
app.config.globalProperties.utils = utils;

app.use(createPinia());
app.use(router);

app.mount("#app");

app.use(myUi, {
    components: ['MyButton', 'MyInput'],
});
