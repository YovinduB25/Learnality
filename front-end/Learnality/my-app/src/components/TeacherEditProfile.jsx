import React from "react"
import { Link } from "react-router-dom"
import { TeacherSideBar } from "../components/TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import EditProfile  from "../images/EditProfile.jpg"
import "../editProfile.css";

export class TeacherEditProfile extends React.Component{
    render(){
        return(
            <div className="Profile">
                <div className="sidebar">
                   <TeacherSideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Edit Profile</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/TeacherViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                   </div>


                    <div className="EditProfilePic">
                        <img src={EditProfile} alt="EditProfilePic"/>
                    </div>
                   
                      <form>
                        <div className="edit-info-container">
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


                        </div>
                        
                        <div className="form-buttons">
                                <input type="submit" value="Save Changes"/>
                                <input type="reset" value="Discard All Changes"/>
                        </div>

                      </form> 
                      

                   
               </div>
            </div>
        )
    }
}