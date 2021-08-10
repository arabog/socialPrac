import "./home.css"
import Topbar from "../../components/homeCom/topbar/Topbar"
import Leftbar from "../../components/homeCom/leftbar/Leftbar"
import Feed from "../../components/homeCom/feed/Feed"
import Rightbar from "../../components/homeCom/rightbar/Rightbar"


export default function Home() {

          return (
                    <div>
                              <Topbar />

                              <div className="homeContainer">
                                        <Leftbar />
                                        <Feed />
                                        <Rightbar />
                              </div>
                    </div>
          )
}