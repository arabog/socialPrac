import "./topbar.css"
import { Search, Person, Chat, Notifications,  } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../context/AuthContext"

export default function Topbar() {
          const {user } = useContext(AuthContext)
          const PF = process.env.REACT_APP_PUBLIC_FOLDER;

          return (
                    <div className="topbarContainer">
                              
                              <div className="topbarLeft">
                                        <Link to="/" style= {{textDecoration: "none"}} className="logo-link">
                                                  <span className="logo">Ephatha</span>
                                        </Link>
                              </div>

                              <div className="topbarCenter">
                                        <div className="searchbar">
                                                  <Search className="searchIcon" />

                                                  <input 
                                                            type="text" 
                                                            placeholder="Search for friend, post or video"
                                                            className="searchInput"          
                                                  />
                                        </div>
                              </div>

                              <div className="topbarRight">
                                        <div className="topbarLinks">
                                                  <span className="topbarLink">Home</span>
                                                  <span className="topbarLink">Timeline</span>
                                        </div>

                                        <div className="topbarIcons">
                                                  <div className="topbarIconItem">
                                                            <Person />
                                                            <div className="topbarIconBadge">1</div>
                                                  </div>

                                                  <div className="topbarIconItem">
                                                            <Chat />
                                                            <div className="topbarIconBadge">1</div>
                                                  </div>

                                                  <div className="topbarIconItem">
                                                            <Notifications />
                                                            <div className="topbarIconBadge">1</div>
                                                  </div>

                                        </div>

                                        <Link to= {`/profile/${user.username}`}>
                                                  <img  alt=""  className="topbarImg" 
                                                            src={
                                                                      user.profilePicture 
                                                                                ? PF+user.profilePicture
                                                                                : PF+"person/noAvatar.png"
                                                            } 
                                                  />
                                        </Link>
                              </div>

                    </div>
          )
}