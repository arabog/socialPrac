import "./message.css"

export default function Message(  {own}) {
          return (
                    <div className={own ? "message own" : "message"}>
                              <div className="messageTop">
                                        <img src="https://images.pexels.com/photos/266004/pexels-photo-266004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="messageImg" />

                                        <p className="messageText">
                                                  Quod, nesciunt aspernatur aliquid, ratione iusto rem 
                                                  architecto minus incidunt 
                                        </p>
                              </div>

                              <div className="messageBottom">
                                        1 hour ago
                              </div>
                    </div>
          )
}
