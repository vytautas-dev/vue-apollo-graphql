import { createApp, provide, h } from 'vue'
import { DefaultApolloClient} from "@vue/apollo-composable";
import App from './App.vue'
import './assets/main.css'
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
import router from "./router";

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:5000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})


const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
})

app.use(router)

app.mount("#app")
