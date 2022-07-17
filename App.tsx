import {ApolloProvider} from "@apollo/client";

import Routes from "./routes";
import client from "./graphql/client";

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Routes/>
        </ApolloProvider>
    )
};
