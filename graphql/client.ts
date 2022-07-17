import { HYGRAPH_CONTENT_API, HYGRAPH_TOKEN } from "@env";
import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";

const link = createHttpLink({
    uri: HYGRAPH_CONTENT_API,
    headers: {
        Authorization: `Bearer ${HYGRAPH_TOKEN}`
    }
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
})

export default client