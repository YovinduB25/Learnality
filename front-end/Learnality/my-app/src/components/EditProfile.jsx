import React from "react"
import { Link } from "react-router-dom"
import { SideBar } from "./SideBar";
import { CgProfile } from "react-icons/cg"
import EditProfilePic  from "../images/EditProfile.jpg"
import "../editProfile.css";

export class EditProfile extends React.Component{
    render(){
        return(
            <div className="Profile">
                <div className="sidebar">
                   <SideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Edit Profile</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                   </div>

                   <div className="EditProfilePic">
                        <img src={EditProfilePic} alt="EditProfilePic"/>
                    </div>

                   <div className="edit-info-container">
                      <form>
                        <label for="fname">Full Name</label>
                        <input type="text" id="fname"/>

                        <label for="UName">Username</label>
                        <input type="text" id="UName"/>

                        <label for="Degree">Degree</label>
                        <select name="select-course" id="course-dropdown-list"> 
                           <option value="display-course" selected disabled >Select Your Course</option>
                           <option value="SE">BEng (Hons) Software Engineering</option>
                           <option value="CS">BSc (Hons) Computer Science</option>
                           <option value="AL/DS">BEng (Hons) Artificial Intelligence and Data Science</option>
                           <option value="BIS">BSc (Hons) Business Infomation Systems</option>
                           <option value="BM">BA (Hons) Business Management</option>
                           <option value="BDA">BSc (Hons) Business Data Analytics</option>
                       </select> 
                      </form> 
                      

                   </div>
               </div>
            </div>
        )
    }
}