import "./messenger.css"
import Topbar from "../../components/homeCom/topbar/Topbar"
import Conversations from "../../components/chat/conversations/Conversations"
import Message from "../../components/chat/message/Message"
import ChatOnline from "../../components/chat/chatOnline/ChatOnline"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

export default function Messenger() {
          const [conversations, setConversations] = useState([])
          const { user } = useContext(AuthContext)

          useEffect(() => {
                    const getConversations = async () => {
                              try {
                                        const res = await axios.get("/conversations/"+user._id)

                                        setConversations(res.data);
                                        
                              } catch (err) {
                                        console.log(err)
                              }
                    }

                    getConversations()
          }, [user._id])

          return (
                    <>
                              <Topbar />

                              <div className="messenger">
                                        <div className="chatMenu">
                                                  <div className="chatMenuWrapper">
                                                            <input type="text" placeholder="Search for friends" className="chatMenuInput" />
                                                            
                                                            {conversations.map( con => (
                                                                      <Conversations conversation = {con}  currentUser={user} />

                                                            ))}


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
                                                                                <ChatOnline />

                                                                                <ChatOnline />
                                                                      </div>
                                                  </div>
                                        </div>
                              </div>
                    </>
          )
}
