import { createContext } from "react";

const UserContext = createContext([{}, () => { username: String }]);
UserContext.displayName = 'UserContext'


// const UserProvider(props){
//     const 
// }

export { UserContext }