import React from 'react';
import "./SignUp2.css"


const SignUp2 = () => {
    return (
        <div id="login-box">
            <div class="left">
                <h1>Sign up</h1>

                <input type="text" name="fullname" placeholder="Full Name" />
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="password2" placeholder="Retype password" />

                <input type="submit" name="signup_submit" value="Sign me up" />
            </div>

            <div class="right">
                <h1>Sign in</h1>
                <br />
                <button class="social-signin email">Log in with Email</button>
                <button class="social-signin google">Log in with Google</button>
                <button class="social-signin microsoft">Log in with Microsoft</button>
            </div>
            <div class="or">OR</div>
        </div>
    );
};
export default SignUp2;