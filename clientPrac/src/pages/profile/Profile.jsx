import "./profile.css"
import Topbar from "../../components/homeCom/topbar/Topbar"
import Leftbar from "../../components/homeCom/leftbar/Leftbar"
import Feed from "../../components/homeCom/feed/Feed"
import Rightbar from "../../components/homeCom/rightbar/Rightbar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams  } from "react-router"

export default function Profile() {
          const PF = process.env.REACT_APP_PUBLIC_FOLDER
          const [user, setUser] = useState({})
          const username = useParams().username

          useEffect(() => {
                    const fetchUser = async () => {
                              const res = await axios.get(`/users?username=${username}`)
                              setUser(res.data)
                    }

                    fetchUser()
          }, [username])
          
          return (
                    <div>
                              <Topbar />

                              <div className="profile">
                                        <Leftbar />

                                        <div className="profileRight">
                                                  <div className="profileRightTop">

                                                            <div className="profileCover">          
                                                                      <img 
                                                                                alt="" 
                                                                                className="profileCoverImg" 
                                                                                src={
                                                                                          user.coverPicture 
                                                                                          ? PF+user.coverPicture  
                                                                                          : PF+"person/noCover.png"
                                                                                } 
                                                                      />

                                                                      <img 
                                                                                alt="" 
                                                                                className="profileUserImg"
                                                                                src={
                                                                                          user.profilePicture 
                                                                                          ? PF+user.profilePicture 
                                                                                          : PF+"person/noAvatar.png"
                                                                                } 
                                                                      />
                                                            </div>

                                                            <div className="profileInfo">
                                                                      <h4 className="profileInfoName"> {user.username} </h4>
                                                                      <span className="profileInfoDesc">{user.desc }</span>
                                                            </div>
                                                  </div>

                                                  <div className="profileRightBottom">
                                                            <Feed username= {username}/>
                                                            <Rightbar newuser={user} />
                                                  </div>
                                        </div>
                                        
                              </div>
                    </div>
          )
}
 