import { createApp, markRaw } from 'vue'
import App from '~/App.vue'
import router from '~/routes'
import './routes/guards'
import { createPinia } from 'pinia'
import request  from './plugins/request'

const pinia = createPinia()
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

<<<<<<< HEAD
createApp(App)
  .use(pinia)
  .use(router)
  .use(request)
  .mount('#app')
=======
createApp(App).use(pinia).use(router).mount('#app')
>>>>>>> main
