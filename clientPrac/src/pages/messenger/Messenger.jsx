import "./messenger.css"
import Topbar from "../../components/homeCom/topbar/Topbar"
import Conversations from "../../components/chat/conversations/Conversations"
import Message from "../../components/chat/message/Message"
import ChatOnline from "../../components/chat/chatOnline/ChatOnline"

export default function Messenger() {
          return (
                    <>
                              <Topbar />

                              <div className="messenger">
                                        <div className="chatMenu">
                                                  <div className="chatMenuWrapper">
                                                            <input type="text" placeholder="Search for friends" className="chatMenuInput" />
                                                            <Conversations />

                                                            <Conversations />

                                                            <Conversations />

                                                            <Conversations />

                                                  </div>
                                        </div>

                                        <div className="chatBox">
                                                  <div className="chatBoxWrapper">
                                                            <div className="chatBoxTop">
                                                                      <Message />

                                                                      <Message own={true} />

                                                                      <Message />

                                                                      <Message />

                                                                      <Message />

                                                                      <Message />


                                                                      <Message />


                                                                      <Message />


                                                                      <Message />

                                                                      <Message />

                                                                      <Message />


                                                                      <Message />


                                                                      <Message />


                                                                      <Message />

                                                            </div>

                                                            <div className="chatBoxBottom">
                                                                      <textarea className="chatMessageInput" placeholder="Write something ....."></textarea>

                                                                      <button type="submit" className="chatSubmitButton"> Send </button>
                                                            </div>

                                                  </div>
                                                  
                                        </div>

                                        <div className="chatOnline">
                                                  <div className="chatOnlineWrapper">
                                                                      <div className="chatOnlineWrapper">
                                                                                <ChatOnline />
                                                                      </div>
                                                  </div>
                                        </div>
                              </div>
                    </>
          )
}
