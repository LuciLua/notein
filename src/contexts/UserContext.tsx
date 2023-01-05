import { createContext } from "react";

export const UserContext = createContext([{}, () => {}]);
UserContext.displayName = 'UserContext'


function UserProvider(props: any) {

    return (
        <UserContext.Provider
            value={props.value}>
            {props.children}
        </UserContext.Provider>)
}

export { UserProvider }