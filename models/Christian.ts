import Role from "./Role";

type Christian = {
    id: string;
    username: string;
    avatar: {
        url: string;
    },
    name: string;
    active: boolean;
    birthday: string;
    roles: Role[];
}

export default Christian;
