import './register.css'

export default function Register() {
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
                                                  <div className="loginBox">
                                                  <input type="email" className="loginInput" placeholder="Username" />
                                                            <input type="email" className="loginInput" placeholder="Email" />
                                                            <input type="password" className="loginInput" placeholder="Password" />
                                                            <input type="password" className="loginInput" placeholder="Password Again" />
                                                            <button className="loginButton">Sign in</button>

                                                            <button className="loginRegisterButton">Log into Account</button>
                                                  </div>
                                        </div>
                              </div>
                              
                    </div>
          )
}
