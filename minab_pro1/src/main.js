import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import HomePage from "./pages/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import "./style.css";
import App from "./App.vue";

// createApp(App).mount('#app')
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com",
});
// app.provide(DefaultApolloClient, apolloClient);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      
    },
    {
      path: "/:id",
      component: SearchPage,
    },
  ],
});
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount("#app");
