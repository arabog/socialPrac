import "./rightbar.css"
// import { Users } from "../../../dummyApi"
// import Online from "../rightbar/online/Online"

export default function Rightbar( { profile }) {

          // const HomeRightbar = () => {

          //           return (
          //                     <>
          //                               <div className="birthdayContainer">
          //                                         <img src="assets/gift.png" alt="" className="birthdayImg" />

          //                                         <span className="birthdayText">
          //                                                   <b>Enaibe Henrie</b> and <b>3 other friends</b> have a birthday today
          //                                         </span>
          //                               </div>

          //                               <img src="assets/ad.png" alt="" className="rightbarAd" />

          //                               <h4 className="rightbarTitle">Online Friends:</h4>
                                        
          //                               <ul className="rightbarFriendList">
          //                                         {
          //                                                   Users.map(user => (
          //                                                             <Online  user ={user} key={user.id} />
          //                                                   ))
          //                                         }
          //                               </ul>
          //                     </>
          //           )
          // }

          const ProfileRightbar = () => {

                    return (
                              <>
                                        <h4 className="rightbarTitle">User Information:</h4>

                                        <div className="rightbarInfo">
                                                  <div className="rightbarInfoItem">
                                                            <span className="rightbarInfoKey">City:</span>
                                                            <span className="rightbarInfoValue">Ibadan</span>
                                                  </div>

                                                  <div className="rightbarInfoItem">
                                                            <span className="rightbarInfoKey">From:</span>
                                                            <span className="rightbarInfoValue">Nigeria</span>
                                                  </div>

                                                  <div className="rightbarInfoItem">
                                                            <span className="rightbarInfoKey">Relationship:</span>
                                                            <span className="rightbarInfoValue">Married</span>
                                                  </div>

                                        </div>

                                        <h4 className="rightbarTitle">User Friends: </h4>

                                        <div className="rightbarFollowings">
                                                  <div className="rightbarFollowing">
                                                            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>

                                                  <div className="rightbarFollowing">
                                                            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>

                                                  <div className="rightbarFollowing">
                                                            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>

                                                  <div className="rightbarFollowing">
                                                            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>

                                                  <div className="rightbarFollowing">
                                                            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>

                                                  <div className="rightbarFollowing">
                                                            <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                                                            <span className="rightbarFollowingName">John Doe</span>
                                                  </div>
                                        </div>
                              </>
                    )
          }

          return (
                    <div className="rightbar">
                              <div className="rightbarWrapper">
                                        <ProfileRightbar />

                              </div>
                    </div>
          )
}