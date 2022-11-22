import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings(){
    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                        src=""
                        alt=""
                        />
                        <label htmlFor="fileInput">
                         <i className="settingsPPIcon far fa-user-circle" ></i> {" "}
                        </label>
                        <input type="file" 
                        className="settingsPPInput" 
                        style={{display: "none"}}
                        />
                    </div>
                    <label>UserName</label>
                    <input type="text" className="registerInput" placeholder="Enter your username..."/>
                    <label>Email</label>
                    <input type="text" className="registerInput" placeholder="Enter your email..." />
                    <label>Password</label>
                    <input type="password" className="registerInput" placeholder="Enter your password"/>
                    <buuton className="settingsSubmitButton">Update</buuton>
                </form>
            </div>
            <Sidebar/>
        </div>
    );
}