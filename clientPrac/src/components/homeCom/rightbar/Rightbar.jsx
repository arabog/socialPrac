import "./rightbar.css"
import { Users } from "../../../dummyApi"
import Online from "../rightbar/online/Online"

export default function Rightbar( { post }) {

          return (
                    <div className="rightbar">
                              <div className="rightbarWrapper">

                                        <div className="birthdayContainer">
                                                  <img src="assets/gift.png" alt="" className="birthdayImg" />

                                                  <span className="birthdayText">
                                                            <b>Enaibe Henrie</b> and <b>3 other friends</b> have a birthday today
                                                  </span>
                                        </div>

                                        <img src="assets/ad.png" alt="" className="rightbarAd" />

                                        <h4 className="rightbarTitle">Online Friends:</h4>
                                        
                                        {
                                                  Users.map(user => (
                                                            <Online  user ={user} key={user.id} />
                                                  ))
                                        }
                              </div>
                    </div>
          )
}