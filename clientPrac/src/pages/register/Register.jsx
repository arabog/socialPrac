import axios from 'axios'
import { useRef } from 'react'
import './register.css'
import { useHistory } from "react-router-dom"

export default function Register() {
          const username = useRef()
          const email = useRef()
          const password = useRef()
          const passwordAgain = useRef()
          const history = useHistory();


          const handleClick = async (e) => {
                    e.preventDefault()

                    if(passwordAgain.current.value !== password.current.value) {
                              return passwordAgain.current.setCustomValidity("Passwords don't match!")
                    }else {
                              const user = {
                                        username: username.current.value,
                                        email: email.current.value,
                                        password: password.current.value
                              }
                              
                              try {
                                        await axios.post("/auth/register", user)
                                        
                                        history.push("/login")
                              } catch (err) {
                                        console.log(err)
                              }
                    }

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
                                                                      type="text" 
                                                                      required 
                                                                      ref={username} 
                                                                      className="loginInput" 
                                                                      placeholder="Username" 
                                                            />

                                                            <input 
                                                                      type="email" 
                                                                      required 
                                                                      ref={email} 
                                                                      className="loginInput" 
                                                                      placeholder="Email" 
                                                            />

                                                            <input 
                                                                      type="password" 
                                                                      required 
                                                                      ref={password} 
                                                                      className="loginInput" 
                                                                      placeholder="Password" 
                                                                      minLength="6"
                                                            />

                                                            <input 
                                                                      type="password" 
                                                                      required 
                                                                      ref={passwordAgain} 
                                                                      className="loginInput" 
                                                                      placeholder="Password Again" 
                                                            />

                                                            <button type="submit" className="loginButton">Sign in</button>

                                                            <button className="loginRegisterButton">Log into Account</button>
                                                  </form>
                                        </div>
                              </div>
                              
                    </div>
          )
}
