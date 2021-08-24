import "./rightbar.css"
import { Users } from "../../../dummyApi"
import Online from "../rightbar/online/Online"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


export default function Rightbar( { newuser }) {
          const PF = process.env.REACT_APP_PUBLIC_FOLDER
          const [friends, setFriends] = useState([])

          useEffect(() => {
                    const getFriends = async () => {
                              try {
                                        const friendList = await axios.get("/users/friends/"+newuser._id)
                                        setFriends(friendList.data)
                              } catch (err) {
                                        console.log(err) 
                              }
                    }

                    getFriends()
          }, [newuser._id])

          const HomeRightbar = () => {

                    return (
                              <>
                                        <div className="birthdayContainer">
                                                  <img src="assets/gift.png" alt="" className="birthdayImg" />

                                                  <span className="birthdayText">
                                                            <b>Enaibe Henrie</b> and <b>3 other friends</b> have a birthday today
                                                  </span>
                                        </div>

                                        <img src="assets/ad.png" alt="" className="rightbarAd" />

                                        <h4 className="rightbarTitle">Online Friends:</h4>
                                        
                                        <ul className="rightbarFriendList">
                                                  {
                                                            Users.map(user => (
                                                                      <Online  user ={user} key={user.id} />
                                                            ))
                                                  }
                                        </ul>
                              </>
                    )
          }

          const ProfileRightbar = () => {

                    return (
                              <>
                                        <h4 className="rightbarTitle">User Information:</h4>

                                        <div className="rightbarInfo">
                                                  <div className="rightbarInfoItem">
                                                            <span className="rightbarInfoKey">City:</span>
                                                            <span className="rightbarInfoValue">{newuser.city}</span>
                                                  </div>

                                                  <div className="rightbarInfoItem">
                                                            <span className="rightbarInfoKey">From:</span>
                                                            <span className="rightbarInfoValue">{newuser.from}</span>
                                                  </div>

                                                  <div className="rightbarInfoItem">
                                                            <span className="rightbarInfoKey">Relationship:</span>
                                                            <span className="rightbarInfoValue">{newuser.relationship === 1 
                                                                                                                                  ? "Single" 
                                                                                                                                  : newuser.relationship === 2 ? "Married"
                                                                                                                                  : "-"
                                                                                                                        }
                                                            </span>
                                                  </div>

                                        </div>

                                        <h4 className="rightbarTitle">User Friends: </h4>

                                        <div className="rightbarFollowings">
                                                  {
                                                            friends.map(friend => (
                                                                      <Link to={"/profile/"+friend.username} style={{textDecoration: "none" }}>
                                                                                <div className="rightbarFollowing">
                                                                                          <img 
                                                                                                    alt="" 
                                                                                                    className="rightbarFollowingImg"
                                                                                                    src={friend.profilePicture 
                                                                                                              ? PF+friend.profilePicture 
                                                                                                              : PF+"person/noAvatar.png"
                                                                                                    } 
                                                                                          />

                                                                                          <span 
                                                                                                    className="rightbarFollowingName" 
                                                                                                    style={{marginTop: "8px", textAlign: "center", fontSize: "18px"}}
                                                                                          >

                                                                                                    {friend.username}
                                                                                          </span>
                                                                                </div>
                                                                      </Link>
                                                            ))
                                                  }


                                                  {/* <div className="rightbarFollowing">
                                                            <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>

                                                  <div className="rightbarFollowing">
                                                            <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>

                                                  <div className="rightbarFollowing">
                                                            <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>

                                                  <div className="rightbarFollowing">
                                                            <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>

                                                  <div className="rightbarFollowing">
                                                            <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div> */}
                                        </div>
                              </>
                    )
          }

          return (
                    <div className="rightbar">
                              <div className="rightbarWrapper">
                                        { newuser ? <ProfileRightbar /> : <HomeRightbar /> }

                              </div>
                    </div>
          )
}