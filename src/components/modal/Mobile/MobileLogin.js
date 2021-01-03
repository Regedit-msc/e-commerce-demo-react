import React from 'react';
import './MobileLogin.css';
import TextField from '@material-ui/core/TextField';
import Icon from '../../../assets/bg/q-mark-forgotpass.png';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Logo from '../../../assets/bg/ibreward-icon-common.png';
import bg from '../../../assets/bg/Login-enterprise-bg.jpg';
import firebase from '../../../utils/firebase';

const MobileDesktop = () => {
    let email, firstname, lastname, password, gstn, phone;

    const [currIndex, setCurrIndex] = React.useState(0);

    const LoginPage = () => {
        return (
            <div>
                <FirstPage />
                <SecondPage />
            </div>
        );
    }

    const FirstPage = () => {
        return (
            <div className="first--page--mobile">
                <p className="login--header--mobile">Welcome User!</p>
                <ul className="mobile--list">
                    <li className="signUp--rewards--mobile">
                        Sign in &amp; use your
                            <img src={Logo} style={{ width: '30px', height: '30px', marginLeft: '5px', marginRight: '5px' }} alt="IB Icon" />
                             IB Cash
                            </li>

                    <li>Get exclusive deals &amp; offers</li>
                    <li>Buy Now Pay Later(Shop on Credit)</li>
                    <li>Avail EMI facility</li>
                    <li>Cancellation Refund within 24hrs</li>
                    <li>International Freight Shipping</li>
                </ul>
                <p></p>
            </div>
        );
    }

    const SecondPage = () => {
        return (
            <div className="second--page--mobile">
                <p className="title--mobile">Sign In</p>
                <label>Email or Phone</label>
                <p></p>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '70%' }} placeholder="Enter email or phone" onChange={(e) => email = e.target.value} />

                <p style={{ paddingTop: '10px', paddingBottom: '20px', paddingTop: '30px' }}></p>
                <label>Your Password</label>
                <p></p>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '70%' }} type="password" placeholder="**********" onChange={(e) => password = e.target.value} />

                <p style={{ paddingBottom: '20px', paddingTop: '30px' }}></p>

                <button className="signin--button--mobile" onClick={login}>SIGN IN</button>
                <p style={{ paddingTop: '10px', paddingBottom: '6px', fontSize: '13', marginLeft: '35%' }}>OR</p>
                <button className="otp--button--mobile">Request OTP</button>
                <div className="forgot--password--link" onClick={() => setCurrIndex(2)}>Forgot Password?</div>
                <p></p>
                <div className="social--text">Sign In with your social account!
                <FaFacebook
                        style={{ marginLeft: '15px', color: "blue", fontSize: "25px" }}
                        onClick={facebookAuth}
                    />
                    <FaGoogle
                        style={{ marginLeft: '10px', color: "red", fontSize: "25px" }}
                        onClick={googleAuth}
                    />
                </div>

                <div className="not--registered--mobile">Not registered yet?</div>

                <div className="banner--mobile" onClick={() => setCurrIndex(1)}>
                    <div className="icon">
                        <img src={Logo} alt="Banner" />
                    </div>
                    <div className="body">
                        <div className="head--text">Sign up and earn</div>
                        <div className="sub--text">300 IB Cash</div>
                        <button className="signup--button--mobile">SIGN UP NOW</button>
                    </div>
                </div>
            </div>
        );
    }

    const ForgotPassword = () => {
        return (
            <div>
                <FirstPageForgot />
                <SecondPageForgot />
            </div>
        );
    }


    const FirstPageForgot = () => {
        return (
            <div className="first--page--mobile">
                <div>
                    <img className="mobile-center--icon" src={Icon} alt="Icon" />
                    <p></p>
                    <div className="mobile--header--text">Please enter your e-mail address and we will send you a confirmation mail to reset your password.</div>
                </div>
            </div>
        );
    }

    const SecondPageForgot = () => {
        return (
            <div className="second--page--mobile">
                <p className="title">Forgot Password</p>
                <label>Email Your Email</label>
                <p></p>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '70%' }} placeholder="Enter your email" onChange={(e) => email = e.target.value} />
                <p style={{ paddingTop: '30px', paddingBottom: '20px' }}></p>
                <button className="signin--button--mobile" onClick={forgot}>SUBMIT</button>
            </div>
        );
    }

    const SignUp = () => {
        return (
            <div>
                <FirstPageSignUp />
                <SecondPageSignUp />
            </div>
        );
    }

    const FirstPageSignUp = () => {
        return (
            <div className="first--page--mobile">
                <p className="login--header--mobile">Why Sign up!</p>
                <ul className="mobile--list">
                    <li className="signUp--rewards--mobile">
                        Sign up &amp; Earn 300
                            <img src={Logo} style={{ width: '30px', height: '30px', marginLeft: '5px', marginRight: '5px' }} alt="Icon" />
                             IB Cash
                            </li>

                    <li>Get exclusive deals &amp; offers</li>
                    <li>Buy Now Pay Later(Shop on Credit)</li>
                    <li>Avail EMI facility</li>
                    <li>Cancellation Refund within 24hrs</li>
                    <li>International Freight Shipping</li>
                </ul>
            </div>
        );
    }

    const SecondPageSignUp = () => {
        return (
            <div className="second--page--mobile">
                <p className="title">Sign Up</p>
                <label>First Name</label>
                <p></p>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '70%' }} placeholder="First Name" onChange={(e) => firstname = e.target.value} />

                <p style={{ paddingTop: '30px', paddingBottom: '20px' }}></p>

                <label>Last Name</label>
                <p></p>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '70%' }} placeholder="Last Name" onChange={(e) => lastname = e.target.value} />

                <p style={{ paddingTop: '30px', paddingBottom: '20px' }}></p>

                <label>Email or Username</label>
                <p></p>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '70%' }} placeholder="Email or Username" onChange={(e) => email = e.target.value} />

                <p style={{ paddingTop: '30px', paddingBottom: '20px' }}></p>

                <label>Your Password</label>
                <p></p>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '70%' }} type="password" placeholder="**********" onChange={(e) => password = e.target.value} />

                <p style={{ paddingBottom: '20px', paddingTop: '30px' }}></p>

                <label>Phone number</label>
                <p></p>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '70%' }} placeholder="Phone number" type="number" onChange={(e) => phone = e.target.value} />

                <p style={{ paddingTop: '10px', paddingBottom: '20px' }}></p>

                <label>GSTN number</label>
                <p></p>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '70%' }} placeholder="GSTN number" type="number" onChange={(e) => gstn = e.target.value} />

                <p style={{ paddingTop: '20px', paddingBottom: '30px' }}></p>

                <button className="signin--button--mobile" onClick={register}>REGISTER NOW</button>
                <p style={{ paddingTop: '20px' }}></p>
                <div className="center-text--signup--mobile" onClick={() => setCurrIndex(0)}>
                    Already registered?
                    <div className="signin--password--link">Sign in?</div></div>
            </div>
        );
    }

    const login = async () => {
        const cred = await firebase.auth().signInWithEmailAndPassword(email, password);
        alert('Welcome' + cred.user.email);
    }

    const googleAuth = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(oAuth => {
            alert('Welcome' + oAuth.user.email);
        });

    }

    const facebookAuth = async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(oAuth => {
            alert('Welcome' + oAuth.user.email);
        });
    }

    const register = async () => {
        const cred = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await firebase.firestore().collection('users').doc(cred.user.uid).set({ email, firstname, lastname, password, gstn, phone });
        alert('Welcome' + cred.user.email);
    }

    const forgot = async () => {
        const cred = await firebase.auth().sendPasswordResetEmail(email);
        alert('Reset email has been sent' + cred.user.email);
    }


    return (
        <div>
            <div>
                {currIndex === 0 && <LoginPage />}
                {currIndex === 1 && <SignUp />}
                {currIndex === 2 && <ForgotPassword />}
            </div>
        </div>
    );

};

export default MobileDesktop;