import "./messenger.css"
import Topbar from "../../components/homeCom/topbar/Topbar"
import Conversations from "../../components/chat/conversations/Conversations"
import Message from "../../components/chat/message/Message"
import ChatOnline from "../../components/chat/chatOnline/ChatOnline"
import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

export default function Messenger() {
          const [conversations, setConversations] = useState([])
          const [currentChat, setCurrentChat] = useState(null)
          const [messages, setMessages] = useState([])
          const [newMessages, setNewMessages] = useState("")
          const { user } = useContext(AuthContext)
          const scrollRef = useRef()


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


          useEffect(() => {
                    const getMessages = async () => {
                              try {
                                        const res = await axios.get("/messages/"+currentChat?._id)
                                        
                                        setMessages(res.data)
                              } catch (err) {
                                        console.log(err)
                              }
                    }

                    getMessages()
          }, [currentChat])

          const handleSubmit = async (e) => {
                    e.preventDefault()

                    const message={
                              sender: user._id,
                              text: newMessages,
                              conversationId: currentChat._id
                    }

                    try {
                              const res = await axios.post("/messages", message)
                              
                              setMessages([...messages, res.data])

                              setNewMessages("")
                    } catch (err) {
                              console.log(err)
                    }
          }

          useEffect(() => {
                    scrollRef.current?.scrollIntoView({behavior: "smooth"})
          })

          return (
                    <>
                              <Topbar />

                              <div className="messenger">
                                        <div className="chatMenu">
                                                  <div className="chatMenuWrapper">
                                                            <input type="text" placeholder="Search for friends" className="chatMenuInput" />
                                                            
                                                            {conversations.map( con => (
                                                                      <div onClick={() => setCurrentChat(con)}>
                                                                                <Conversations key= {con._id} conversation = {con}  currentUser={user} />
                                                                      </div>
                                                            ))}


                                                  </div>
                                        </div>

                                        <div className="chatBox">
                                                  <div className="chatBoxWrapper">
                                                            {
                                                                      currentChat ? 
                                                                      <>
                                                                                <div className="chatBoxTop">
                                                                                          {messages.map(m => (
                                                                                                    <div ref={scrollRef}>
                                                                                                              <Message 
                                                                                                                        message={m} 
                                                                                                                        own={m.sender === user._id} 
                                                                                                              />
                                                                                                    </div>
                                                                                          ))}

                                                                                </div>


                                                                                <div className="chatBoxBottom">
                                                                                          <textarea 
                                                                                                    className="chatMessageInput" 
                                                                                                    placeholder="Write something ....."
                                                                                                    onChange={(e) => setNewMessages(e.target.value) }
                                                                                                    value={newMessages}
                                                                                          >

                                                                                          </textarea>

                                                                                          <button 
                                                                                                    type="submit" 
                                                                                                    className="chatSubmitButton"
                                                                                                    onClick={handleSubmit}
                                                                                          > 
                                                                                                    Send 
                                                                                          </button>
                                                                                </div>
                                                                      </>
                                                                      : <span className="noConversationText"> 
                                                                                Open a conversation to start a chat.
                                                                      </span>
                                                            }

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
