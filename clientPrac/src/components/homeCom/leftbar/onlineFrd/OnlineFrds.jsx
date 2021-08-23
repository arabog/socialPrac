import "./onlineFrd.css"

export default function OnlineFrds( { user } ) {
          const PF = process.env.REACT_APP_PUBLIC_FOLDER 

          return (
                    <div>
                              <ul className="leftbarFriendList">
                                        <li className="leftbarFriend">
                                                  <img src={PF+user.profilePic} alt="" className="leftbarFrdImg" />
                                                  <span className="leftbarFriendName">{ user.username }</span>
                                        </li>
                              </ul>

                    </div>
          )
}
