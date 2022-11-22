import "./topbar.css";
import { NavLink, NavNavLink } from "react-router-dom"

export default function TopBar(){
    return(
        <div className="top">
            <div className="topLeft">
            <i className=" topIcon fa-brands fa-square-facebook"></i>
            <i className=" topIcon fa-brands fa-square-pinterest"></i>
            <i className=" topIcon fa-brands fa-discord"></i>
            <i className=" topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><NavLink to="/" >HOME</NavLink></li>
                <li className="topListItem"><NavLink to="/about" >ABOUT</NavLink></li>
                <li className="topListItem"><NavLink to="">CONTACT</NavLink></li>
                <li className="topListItem"><NavLink  to="/write" >WRITE</NavLink></li>
                <li className="topListItem"><NavLink to="">LOGOUT</NavLink></li>
            </ul></div>
            <div className="topRight">
            <img className="topImg" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sportskeeda.com%2Fanime%2Fspy-x-family-why-anya-can-read-minds&psig=AOvVaw2AKuSe261pVCvp9gRJWvk7&ust=1668257489167000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIiIqcqVpvsCFQAAAAAdAAAAABAE"/>
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
} 
