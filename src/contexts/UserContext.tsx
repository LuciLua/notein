import { createContext } from "react";

const UserContext = createContext([{}, () => { }]);
UserContext.displayName = 'UserContext'

export { UserContext }