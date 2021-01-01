import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import bg from '../../assets/bg/Login-enterprise-bg.jpg';
import Logo from '../../assets/bg/ibreward-icon-common.png';
import './Modal.css';
import firebase from '../../utils/firebase';
import TextField from '@material-ui/core/TextField';
import Icon from '../../assets/bg/q-mark-forgotpass.png';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Modal = () => {
    let email, firstname, lastname, password, gstn, phone;
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => setOpen(true);

    const [currIndex, setCurrIndex] = React.useState(0);

    const handleClose = () => {
        setOpen(false);
        setCurrIndex(0);
    };

    let a = {
        style: {
            minHeight: "92vh",
            minWidth: "60vw",
            overflow: 'hidden',
            background: `#fff url(${bg}) 0 100% no-repeat`,
            display: 'flex',
            position: 'fixed',
            height: '100%',
            width: '100%',
        }
    }

    let b = {
        style: {
            minHeight: "30vh",
            minWidth: "60vw",
            overflow: 'hidden',
            display: 'flex',
            position: 'fixed',
            height: '40%',
            width: '100%',
        }
    }

    const LoginPage = () => {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '0.5', background: '#5469cb' }}>
                    <FirstPage />
                </div>
                <div style={{ flex: '0.15' }}></div>
                <div style={{ flex: '0.35', width: '100%', background: '#fff' }}>
                    <SecondPage />
                </div>
            </div>
        );
    }

    const FirstPage = () => {
        return (
            <div className="first--page">
                <center>
                    <p className="login--header">Welcome User!</p>
                    <ul>
                        <li className="signUp--rewards">
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
                </center>
            </div>
        );
    }

    const SecondPage = () => {
        return (
            <div className="second--page">
                <p className="title">Sign In</p>
                <label>Email or Phone</label>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '90%' }} placeholder="Enter email or phone" onChange={(e) => email = e.target.value} />

                <p style={{ paddingTop: '10px', paddingBottom: '20px' }}></p>
                <label>Your Password</label>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '90%' }} type="password" placeholder="**********" onChange={(e) => password = e.target.value} />

                <p style={{ paddingBottom: '20px' }}></p>

                <button className="signin--button" onClick={login}>SIGN IN</button>
                <p style={{ paddingTop: '10px', textAlign: 'center', fontSize: '13' }}>OR</p>
                <button className="otp--button">Request OTP</button>
                <div className="forgot--password--link" onClick={() => setCurrIndex(2)}>Forgot Password?</div>
                <p></p>
                <div className="social--text">Sign In with your social account!
                <FaFacebook
                        style={{ marginLeft: '10px',color: "blue", fontSize: "22px" }}
                        onClick={facebookAuth}
                    />
                     <FaGoogle
                        style={{ marginLeft: '10px', color: "red", fontSize: "22px" }}
                        onClick={googleAuth}
                    />
                </div>

                <div className="not--registered">Not registered yet?</div>

                <div className="banner" onClick={() => setCurrIndex(1)}>
                    <div className="icon">
                        <img src={Logo} alt="Banner" />
                    </div>
                    <div className="body">
                        <div className="head--text">Sign up and earn</div>
                        <div className="sub--text">300 IB Cash</div>
                        <button className="signup--button">SIGN UP NOW</button>
                    </div>
                </div>
            </div>
        );
    }


    const ForgotPassword = () => {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '0.5', background: '#5469cb', height: '100%' }}>
                    <FirstPageForgot />
                </div>
                <div style={{ flex: '0.10' }}></div>
                <div style={{ flex: '0.40', width: '100%', background: '#fff' }}>
                    <SecondPageForgot />
                </div>
            </div>
        );
    }


    const FirstPageForgot = () => {
        return (
            <div>
                <center>
                    <img src={Icon} alt="Icon" />
                    <div>Please enter your e-mail address and we will send you a confirmation mail to reset your password.</div>
                </center>
            </div>
        );
    }

    const SecondPageForgot = () => {
        return (
            <div>
                <p className="title">Forgot Password</p>
                <label>Email Your Email</label>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '90%' }} placeholder="Enter your email" onChange={(e) => email = e.target.value} />
                <p style={{ paddingTop: '10px', paddingBottom: '20px' }}></p>
                <button className="signin--button" onClick={forgot}>SUBMIT</button>
            </div>
        );
    }


    const SignUp = () => {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '0.5', background: '#5469cb' }}>
                    <FirstPageSignUp />
                </div>
                <div style={{ flex: '0.15' }}></div>
                <div style={{ flex: '0.35', width: '100%', background: '#fff' }}>
                    <SecondPageSignUp />
                </div>
            </div>
        );
    }

    const FirstPageSignUp = () => {
        return (
            <div className="first--page">
                <center>
                    <p className="login--header">Why Sign up!</p>
                    <ul>
                        <li className="signUp--rewards">
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
                </center>
            </div>
        );
    }

    const SecondPageSignUp = () => {
        return (
            <div className="second--page">
                <p className="title">Sign Up</p>
                <label>First Name</label>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '90%' }} placeholder="First Name" onChange={(e) => firstname = e.target.value}/>

                <p style={{ paddingTop: '10px', paddingBottom: '20px' }}></p>

                <label>Last Name</label>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '90%' }} placeholder="Last Name" onChange={(e) => lastname = e.target.value}/>

                <p style={{ paddingTop: '10px', paddingBottom: '20px' }}></p>

                <label>Email or Username</label>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '90%' }} placeholder="Email or Username" onChange={(e) => email = e.target.value}/>

                <p style={{ paddingTop: '10px', paddingBottom: '20px' }}></p>

                <label>Your Password</label>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '90%' }} type="password" placeholder="**********" onChange={(e) => password = e.target.value}/>

                <p style={{ paddingBottom: '20px' }}></p>

                <label>Phone number</label>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '90%' }} placeholder="Phone number" type="number" onChange={(e) => phone = e.target.value}/>

                <p style={{ paddingTop: '10px', paddingBottom: '20px' }}></p>

                <label>GSTN number</label>
                <TextField style={{ float: 'left', paddingLeft: '1px', width: '90%' }} placeholder="GSTN number" type="number" onChange={(e) => gstn = e.target.value}/>

                <p style={{ paddingTop: '20px', paddingBottom: '20px' }}></p>

                <button className="signin--button" onClick={register}>REGISTER NOW</button>
                <p></p>
                <div className="center-text--signup" onClick={() => setCurrIndex(0)}>
                    Already registered?
                    <div className="signin--password--link">Sign in?</div></div>
            </div>
        );
    }

    const login = async () => {
        const cred = await firebase.auth().signInWithEmailAndPassword(email, password);
        handleClose();
        alert('Welcome' + cred.user.email);
    }

    const forgot = async () => {
        const cred = await firebase.auth().sendPasswordResetEmail(email);
        handleClose();
        alert('Reset email has been sent' + cred.user.email);
    }

    const googleAuth = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(oAuth => {
            handleClose();
        alert('Welcome' + oAuth.user.email);
        });
        
    }

    const facebookAuth = async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(oAuth => {
            handleClose();
        alert('Welcome' + oAuth.user.email);
        });
        
    }

    const register = async () => {
        const cred = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await firebase.firestore().collection('users').doc(cred.user.uid).set({ email, firstname, lastname, password, gstn, phone });
        handleClose();
        alert('Welcome' + cred.user.email);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Open </Button>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} PaperProps={currIndex === 2 ? b : a}>
                <DialogContent >
                    {currIndex == 0 && <LoginPage />}
                    {currIndex == 1 && <SignUp />}
                    {currIndex == 2 && <ForgotPassword />}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Modal;