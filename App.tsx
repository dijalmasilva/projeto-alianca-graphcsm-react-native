import {ApolloProvider} from "@apollo/client";
import client from "graphql/client";
import Routes from "./routes";

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Routes />
        </ApolloProvider>
    )
};
