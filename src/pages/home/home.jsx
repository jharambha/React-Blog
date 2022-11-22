import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";

export default function Home(){
    return(
          <>
        <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}