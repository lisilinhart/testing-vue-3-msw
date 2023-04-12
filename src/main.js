import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import { createVuestic } from 'vuestic-ui'
import "vuestic-ui/css";

import App from './App.vue'
import router from './router'

import './assets/main.css'
const app = createApp(App)

import BeastPage from './components/BeastPage.vue';
import MagicalBeast from './components/MagicalBeast.vue';

app.component('BeastPage', BeastPage);
app.component('MagicalBeast', MagicalBeast);


app.use(createPinia())
app.use(router)
app.use(StoryblokVue, {
    accessToken: import.meta.env.VITE_SB_PREVIEW_TOKEN,
    use: [apiPlugin],
  });
app.use(createVuestic({
    config: {
        colors: {
          variables: {
            primary: "#00B3B0",
            secondary: "#1B243F",
            success: "#2DB47D",
            info: "#395ECE",
            danger: "#FF6159",
            warning: "#FFAC00",
            gray: "#B1B5BE",
            dark: "#1B243F",
          },
        },
      },
}))

app.component('BeastPage', BeastPage);

app.mount('#app')
