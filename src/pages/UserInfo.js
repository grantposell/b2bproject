import React from 'react';
import "./SignUp2.css"


const UserInfo = () => {
    return (
        <div id="login-box">
            <div class="left">
                <h1>User Information</h1>

                <input type="text" name="fullname" placeholder="Full Name" />
                <input type="email" name="email" placeholder="E-mail" />
                <input type="tel" name="userPhoneNumber" placeholder="User Phone Number" />

            </div>
            <div class="right">
                <h1>Company Information</h1>

                <input type="text" name="company" placeholder="Company Name" />
                <input type="text" name="companyLocation" placeholder="Company Location" />
                <input type="text" name="userTitle" placeholder="User Title" />
                <input type="tel" name="companyPhoneNumber" placeholder="Company Phone Number" />
                
                <input type="submit" name="userSave" value="Save" />
            </div>
            
        </div>

    );
};
export default UserInfo;