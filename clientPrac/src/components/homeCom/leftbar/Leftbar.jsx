import "./leftbar.css"
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons"

export default function Leftbar() {

          return (
                    <div className="leftbarContainer">

                              <div className="leftbarWrapper">

                                        <ul className="leftbarList">

                                                  <li className="leftbarListItem">
                                                            <RssFeed className="leftbarIcon" />
                                                            <span className="leftbarItemText">Feed</span>
                                                  </li>

                                                  <li className="leftbarListItem">
                                                            <Chat className="leftbarIcon" />
                                                            <span className="leftbarItemText">Chats</span>
                                                  </li>

                                                  <li className="leftbarListItem">
                                                            <PlayCircleFilled className="leftbarIcon" />
                                                            <span className="leftbarItemText">Video</span>
                                                  </li>

                                                  <li className="leftbarListItem">
                                                            <Group className="leftbarIcon" />
                                                            <span className="leftbarItemText">Groups</span>
                                                  </li>

                                                  <li className="leftbarListItem">
                                                            <Bookmark className="leftbarIcon" />
                                                            <span className="leftbarItemText">Bookmarks</span>
                                                  </li>

                                                  <li className="leftbarListItem">
                                                            <HelpOutline className="leftbarIcon" />
                                                            <span className="leftbarItemText">Questions</span>
                                                  </li>

                                                  <li className="leftbarListItem">
                                                            <WorkOutline className="leftbarIcon" />
                                                            <span className="leftbarItemText">Jobs</span>
                                                  </li>

                                                  <li className="leftbarListItem">
                                                            <Event className="leftbarIcon" />
                                                            <span className="leftbarItemText">Events</span>
                                                  </li>

                                                  <li className="leftbarListItem">
                                                            <School className="leftbarIcon" />
                                                            <span className="leftbarItemText">Courses</span>
                                                  </li>

                                        </ul>

                                        <button className="leftbarButton">Show More</button>

                                        <hr className="leftbarHr" />

                                        <ul className="leftbarFriendList">
                                                  <li className="leftbarFriend">
                                                            <img src="/assets/person/1.jpeg" alt="" className="leftbarFrdImg" />
                                                            <span className="leftbarFriendName">Akanji Feyisayo</span>
                                                  </li>
                                        </ul>
                              </div>

                    </div>
          )
}