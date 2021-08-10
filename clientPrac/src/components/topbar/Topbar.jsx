import "./topbar.css"
import { Search, Person, Chat, Notifications,  } from "@material-ui/icons"

export default function Topbar() {

          return (
                    <div className="topbarContainer">
                              
                              <div className="topbarLeft">
                                        <span className="logo">Ephatha</span>
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

                                        <img src="/assets/person/10.jpeg" alt="" className="topbarImg" />
                              </div>

                    </div>
          )
}