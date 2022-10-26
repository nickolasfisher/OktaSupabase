import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { OktaAuth } from "@okta/okta-auth-js";
import OktaVue from "@okta/okta-vue";

import "./assets/main.css";

import { RouterView } from 'vue-router'

import Calendar from './components/Calendar.vue'
import Header from './components/Header.vue'
import Day from './components/Day.vue'
import AddEntry from './components/AddEntry.vue'
import EntryDetail from './components/EntryDetail.vue'

import Datepicker from 'vue3-datepicker'

const { VITE_OKTA_DOMAIN, VITE_OKTA_CLIENTID } = import.meta.env;

const oktaAuth = new OktaAuth({
  issuer: `${VITE_OKTA_DOMAIN}/oauth2/default`,
  clientId: VITE_OKTA_CLIENTID,
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
});

const app = createApp(App);

app.component('RouterView', RouterView);

app.component('Calendar', Calendar);
app.component('Header', Header);
app.component('Day', Day);
app.component('AddEntry', AddEntry);
app.component('EntryDetail', EntryDetail);
app.component('Datepicker', Datepicker);

app.use(router).use(OktaVue, { oktaAuth });

app.mount("#app");
