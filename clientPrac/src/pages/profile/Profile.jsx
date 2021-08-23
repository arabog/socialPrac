import "./profile.css"
import Topbar from "../../components/homeCom/topbar/Topbar"
import Leftbar from "../../components/homeCom/leftbar/Leftbar"
import Feed from "../../components/homeCom/feed/Feed"
import Rightbar from "../../components/homeCom/rightbar/Rightbar"

export default function Profile() {
          const PF = process.env.REACT_APP_PUBLIC_FOLDER
          
          return (
                    <div>
                               <Topbar />

                              <div className="profile">
                                        <Leftbar />

                                        <div className="profileRight">
                                                  <div className="profileRightTop">

                                                            <div className="profileCover">          
                                                                      <img src={`${PF}post/3.jpeg`} alt="" className="profileCoverImg" />
                                                                      <img src={`${PF}person/8.jpeg`} alt="" className="profileUserImg" />
                                                            </div>

                                                            <div className="profileInfo">
                                                                      <h4 className="profileInfoName">Akanbi Feyisayo</h4>
                                                                      <span className="profileInfoDesc">Hello my friends!</span>
                                                            </div>
                                                  </div>

                                                  <div className="profileRightBottom">
                                                            <Feed />
                                                            <Rightbar profile/>
                                                  </div>
                                        </div>
                                        
                              </div>
                    </div>
          )
}
 