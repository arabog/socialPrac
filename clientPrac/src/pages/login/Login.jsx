import { useRef } from 'react'
import './login.css'

export default function Login() {
          const email = useRef()
          const password = useRef()

          const handleClick = (e) => {
                    e.preventDefault()
                    console.log(email.current.value)
          }

          return (
                    <div className="login">

                              <div className="loginWrapper">
                                        <div className="loginLeft">
                                                  <h3 className="loginLogo">Ephatha</h3>
                                                  <span className="loginDesc">
                                                            Connect with friends and the world around you on Ephatha
                                                  </span>
                                        </div>

                                        <div className="loginRight">
                                                  <form className="loginBox" onSubmit={handleClick}>
                                                            <input 
                                                                      type="email" 
                                                                      className="loginInput" 
                                                                      placeholder="Email" 
                                                                      ref={email} 
                                                                      required 
                                                            />

                                                            <input 
                                                                      type="password" 
                                                                      className="loginInput" 
                                                                      placeholder="Password" 
                                                                      ref={password} 
                                                                      required 
                                                                      minLength = "6"
                                                            />

                                                            <button className="loginButton">Log In</button>

                                                            <span className="loginForget">Forget Password?</span>
                                                            <button className="loginRegisterButton">Create a New Account</button>
                                                  </form>
                                        </div>
                              </div>
                              
                    </div>
          )
}
