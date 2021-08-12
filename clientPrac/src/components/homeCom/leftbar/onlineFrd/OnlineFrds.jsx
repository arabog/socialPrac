import "./onlineFrd.css"

export default function OnlineFrds( { user } ) {
          return (
                    <div>
                              <ul className="leftbarFriendList">
                                        <li className="leftbarFriend">
                                                  <img src={user.profilePic} alt="" className="leftbarFrdImg" />
                                                  <span className="leftbarFriendName">{ user.username }</span>
                                        </li>
                              </ul>

                    </div>
          )
}
