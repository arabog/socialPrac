const AuthReducer = (state, action) => {
          switch (action.type) {
                    case "LOGIN_START":
                              return {
                                        user: null,
                                        isFetching: true,
                                        error: false
                              };


                    case "LOGIN_SUCCESS":
                              return {
                                        user: action.payload,
                                        isFetching: false,
                                        error: false
                              };


                    case "LOGIN_FAILURE":
                              return {
                                        user: null,
                                        isFetching: false,
                                        error: action.payload
                              };


                    case "FOLLOW":
                              return {
                                        ...state, //spread all d info from user
                                        user: {
                                                  ...state.user,
                                                  followings: [...state.user.followings, action.payload]

                                        }

                              }


                    case "UNFOLLOW":
                              return {
                                        ...state, //spread all d info from user
                                        user: {
                                                  ...state.user,
                                                  followings: state.user.followings.filter(following => following !== action.payload)

                                        }

                              }

                    default:
                              return state
                              
          }
}

export default AuthReducer