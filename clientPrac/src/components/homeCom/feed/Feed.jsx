import "./feed.css"
import Share from "./share/Share"
import Post from "./post/Post"
import { useEffect, useState } from "react"
import axios from "axios"

// dummyApi removed

export default function Feed( { username } ) {
          const [posts, setPosts] = useState([])


          useEffect( () => {
                    const fetchPosts = async () => {
                              const res = username 
                                                  ? await axios.get("/posts/profile/" + username)
                                                  : await axios.get("/posts/timeline/611e178e99f2b4416e9fcb04")
                              setPosts(res.data)
                    }

                    fetchPosts()

          }, [username])
 
          return (
                    <div className="feedContainer">
                              <div className="feedWrapper">
                                        <Share />

                                        {
                                                  posts.map(p => (
                                                            <Post key={p.id} post={p} />
                                                  ))
                                        }
                              </div>
                    </div>
          )
}