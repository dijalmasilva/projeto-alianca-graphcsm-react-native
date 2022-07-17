import {Text, View, Image} from "react-native";
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";

const GET_CHRISTIANS_QUERY = gql`
    query getChristians {
      christians {
        id
        createdBy {
          id
        }
        avatar {
          url
        }
        fullName
        roles {
          type
          permissions
        }
        birthday
      }
    }
`

const SignIn = () => {
    const { loading, data } = useQuery(GET_CHRISTIANS_QUERY, { fetchPolicy: "network-only" })

    console.log(data)

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            { loading && <Text>Carregando...</Text>}
            { !loading && data.christians ?
                <View style={{ flexDirection: "column", flex: 4 }}>
                    {data.christians.map(c => (
                        <View key={c.fullName} style={{ flex: 1 }}>
                            <Image source={{ uri: c.avatar.url }} style={{ width: 200, height: 200 }} />
                            <Text>{c.fullName}</Text>
                        </View>
                    ))}
                </View>
                : <Text>Nada encontrado</Text>}
        </View>
    )
}

export default SignIn
