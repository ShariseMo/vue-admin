import { createApp } from "vue";
import Wui from "@shilong/wui";

import router from "./routes";
import App from "./app.vue";

import "./styles/reset.css";
import "./styles/global.scss";

const app = createApp(App);
app.use(Wui);
app.use(router);
app.mount("#root");
