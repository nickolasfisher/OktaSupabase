import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { OktaAuth } from "@okta/okta-auth-js";
import OktaVue from "@okta/okta-vue";

import "./assets/main.css";

const { VITE_OKTA_DOMAIN, VITE_OKTA_CLIENTID } = import.meta.env;

console.log(VITE_OKTA_DOMAIN)

const oktaAuth = new OktaAuth({
  issuer: `${VITE_OKTA_DOMAIN}/oauth2/default`,
  clientId: VITE_OKTA_CLIENTID,
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
});

const app = createApp(App);

app.use(router).use(OktaVue, { oktaAuth });

app.mount("#app");
