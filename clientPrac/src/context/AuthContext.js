import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"


const INITIAL_STATE ={
          // user: null,
          user: {
                    _id: "611e16be99f2b4416e9fcb02",
                    username: "Jane",
                    email: "jane@gmail.com",
                    profilePicture: "person/1.jpeg",
                    coverPicture: "",
                    isAdmin: false,
                    followings: [],
                    followers: [],
          },
          isFetching: false,
          error: false
}


export const AuthContext = createContext(INITIAL_STATE)


export const AuthContextProvider = ( {children} ) => {
          const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

          return (
                    <AuthContext.Provider
                              value={
                                        {
                                                  user: state.user,
                                                  isFetching: state.isFetching,
                                                  error: state.error,
                                                  dispatch
                                        }
                              }
                    >

                              {children}

                    </AuthContext.Provider>
          )
}